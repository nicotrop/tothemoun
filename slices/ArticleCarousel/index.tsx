import React, { ReactNode, useEffect, useState } from "react";
import {
  PrismicRichText,
  PrismicRichTextProps,
  PrismicText,
  PrismicTextProps,
  SliceComponentProps,
} from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";
import { Wrapper } from "@/components/Layout";
import { ArticleCarouselSlice, BlogPostDocument } from "../../types.generated";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { format, parseISO } from "date-fns";
import fr from "date-fns/locale/fr";

/**
 * @typedef {import("@prismicio/client").Content.ArticleCarouselSlice} ArticleCarouselSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArticleCarouselSlice>} ArticleCarouselProps
 * @param { ArticleCarouselProps }
 */
const ArticleCarousel = ({ slice, context }: SliceComponentProps | any) => {
  const [sliceType] = useState(slice.primary.type);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(sliceType);

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
  if (!isLoading)
    return (
      <Wrapper className="flex flex-col gap-3 box-content">
        <span className="text-2xl font-bold">
          {slice.primary.title ? (
            <PrismicRichText field={slice?.primary?.title} />
          ) : (
            <h2>Template slice, update me!</h2>
          )}
        </span>
        <div className="flex justify-between">
          <span>
            {slice.primary.description ? (
              // <PrismicRichText field={slice.primary.description} />
              <p>{sliceType}</p>
            ) : (
              <p>start by editing this slice from inside Slice Machine!</p>
            )}
          </span>
          <Link
            href={"/"}
            className="hover:underline w-[fit-content] text-right min-w-[100px] break-keep-all"
          >
            Voir tout
          </Link>
        </div>
        <div className="xl:grid xl:grid-cols-4 xl:w-full flex overflow-x-scroll xl:overflow-hidden gap-4 scrollbar-hide mt-1">
          {data?.map((article: any, i: number) => {
            return <ArticleCard article={article} key={i} />;
          })}
        </div>
      </Wrapper>
    );
};

export const ArticleCard = ({
  article,
}: {
  article: {
    article_title: string;
    article_cover: any;
    article_content: any;
    preview: string;
    uid: string;
    date: string;
  };
}) => {
  return (
    <figure className="border-solid border-black border-2 flex flex-col items-start gap-2 min-w-full sm:min-w-[300px] md:min-w-[335px] xl:min-w-0">
      <PrismicNextImage
        field={article.article_cover}
        height={350}
        width={350}
        className="object-cover w-full aspect-video"
      />
      <div className="flex flex-col gap-1 items-start px-4 pb-4">
        <h5 className="font-bold md:text-lg text-base leading-tight">
          {article.article_title}
        </h5>
        <span className="italic text-gray-900 tracking-tighter text-xs sm:text-sm md:text:base">
          {format(parseISO(article.date), "dd MMMM yyyy", { locale: fr })}
        </span>
        <p className="text-sm md:text:base">{article.preview}</p>
        <button className="uppercase font-bold tracking-tight">
          <a href={article.uid}>{"Lire la suite"}</a>
        </button>
      </div>
    </figure>
  );
};

export default ArticleCarousel;
