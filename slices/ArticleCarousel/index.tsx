import React, { useEffect, useState } from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import { ArticleCarouselSlice } from "../../types.generated";
import { PrismicNextImage } from "@prismicio/next";
import { format, parseISO } from "date-fns";
import fr from "date-fns/locale/fr";
import { SwiperSlide } from "swiper/react";
import { Wrapper } from "@/components/global";
import { SwiperCarousel } from "@/components/sliders";

/**
 * @typedef {import("@prismicio/client").Content.ArticleCarouselSlice} ArticleCarouselSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArticleCarouselSlice>} ArticleCarouselProps
 * @param { ArticleCarouselProps }
 */

const ArticleCarousel = ({
  slice,
  context,
}: SliceComponentProps<ArticleCarouselSlice> | any) => {
  const [sliceType] = useState(slice.primary.type);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (sliceType === "manual")
      setData(
        slice.items.map((elem: any) => {
          return {
            ...elem.blogpost.data,
            date: elem.blogpost.first_publication_date,
          };
        })
      );
    if (sliceType === "derniers_articles_auto")
      setData(
        context.map((elem: any) => {
          return {
            ...elem.data,
            date: elem.first_publication_date,
          };
        })
      );
    setIsLoading(false);
  }, [sliceType, slice.items, context]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Wrapper className="flex flex-col gap-3 box-content">
      <Link
        href={"/"}
        className="flex gap-2 items-center text-2xl font-bold text-hover w-[fit-content] text-right min-w-[100px] break-keep-all font-title tracking-tighter uppercase"
      >
        {slice.primary.title ? (
          <PrismicRichText field={slice?.primary?.title} />
        ) : (
          <h2>Template slice, update me!</h2>
        )}
        <span>{" > "}</span>
      </Link>
      <div className="flex justify-between">
        <span>
          {slice.primary.description ? (
            <PrismicRichText field={slice.primary.description} />
          ) : (
            <p>start by editing this slice from inside Slice Machine!</p>
          )}
        </span>
      </div>
      <hr className="py-1 border-solid border-t-2 border-black" />
      <SwiperCarousel>
        {data?.map((article: any, i: number) => {
          return (
            <SwiperSlide key={i}>
              <ArticleCard article={article} />
            </SwiperSlide>
          );
        })}
      </SwiperCarousel>
    </Wrapper>
  );
};

export type Author = {
  author_avatar: AuthorAvatar;
  author_first_name: string;
  author_last_name: string;
  uid: string;
};

export type AuthorAvatar = {
  alt: string | null;
  copyright: string | null;
  dimensions: {
    width: number;
    height: number;
  };
  url: string;
};

export type Article = {
  article_title: string;
  article_cover: any;
  article_content: any;
  preview: string;
  uid: string;
  date: string;
  article_author: {
    data: Author;
  };
};

export const ArticleCard = ({
  article,
}: {
  article: Article;
  type?: string;
}) => {
  return (
    <div
      className={`border-solid border-black border-2 flex flex-col items-start gap-2`}
    >
      <div className="w-full z-50">
        <Link href={"/"} className="img-hover w-full m-0 p-0">
          <PrismicNextImage
            field={article.article_cover}
            height={350}
            width={350}
            className="object-cover w-full m-0"
          />
        </Link>
      </div>
      <div className="flex flex-col items-start px-6 pb-4 min-h-[40%]">
        <Link href={"/"} className="text-hover">
          <h5
            className="md:text-lg text-base font-title font-bold uppercase tracking-tight"
            style={{ lineHeight: "1.5rem" }}
          >
            {article.article_title}
          </h5>
        </Link>
        <span className="text-gray-900 tracking-tighter text-xs sm:text-sm md:text:base capitalize font-semibold py-1">
          {format(parseISO(article.date), "dd MMMM yyyy", { locale: fr })}
        </span>
        <Link
          href={"/"}
          className="text-hover flex items-center"
          style={{ height: "45px" }}
        >
          <p
            className="text-sm md:text:base w-full font-serif"
            style={{ lineHeight: "1.25" }}
          >
            {article.preview ??
              "Start by editing this slice from inside Slice Machine!"}
          </p>
        </Link>
        <div
          className="w-full flex items-center"
          style={{ height: "25px", gap: "3px" }}
        >
          <PrismicNextImage
            field={article.article_author.data.author_avatar}
            height={25}
            width={25}
            className="object-cover aspect-square h-full"
            style={{ borderRadius: "50%" }}
          />
          <Link href={`/`} className="text-hover">
            <span className="text-xs tracking-tight">{`${article.article_author.data.author_first_name} ${article.article_author.data.author_last_name} `}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCarousel;
