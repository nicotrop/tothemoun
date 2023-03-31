import React from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { ArticleCarouselV2Slice } from "../../.slicemachine/prismicio";
import { Wrapper } from "@/components/Layout";
import Link from "next/link";
import { Article, ArticleCard } from "../ArticleCarousel";
import { PrismicNextImage } from "@prismicio/next";
import { format, parseISO } from "date-fns";
import fr from "date-fns/locale/fr";
import {
  SwiperCarousel,
  SwiperCarouselFixedHeight,
} from "@/components/SwiperCarousel";
import { SwiperSlide } from "swiper/react";

/**
 * @typedef {import("@prismicio/client").Content.ArticleCarouselV2Slice} ArticleCarouselV2Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArticleCarouselV2Slice>} ArticleCarouselV2Props
 * @param { ArticleCarouselV2Props }
 */
const ArticleCarouselV2 = ({
  slice,
}: SliceComponentProps<ArticleCarouselV2Slice>) => {
  const data = slice.items.map((elem: any) => {
    return {
      ...elem.blogpost.data,
      date: elem.blogpost.first_publication_date,
    };
  });

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
        {slice.primary.description ? (
          <PrismicRichText field={slice.primary.description} />
        ) : (
          <p>start by editing this slice from inside Slice Machine!</p>
        )}
      </div>
      <hr className="py-1 border-solid border-b-2 border-black" />
      <SwiperCarouselFixedHeight>
        {data?.map((article: any, i: number) => {
          return (
            <SwiperSlide
              key={i}
              style={{
                height: "100%",
              }}
            >
              {i < 1 ? (
                <ArticleCard article={article} />
              ) : (
                <ArticleCard article={article} key={i} />
              )}
            </SwiperSlide>
          );
        })}
      </SwiperCarouselFixedHeight>
    </Wrapper>
  );
};

export const ArticleCard2 = ({ article }: { article: Article }) => {
  return (
    // <div className="border-solid border-black border-2 flex items-start sm:min-w-[430px] md:min-w-[465px]">
    <div
    // className="border-solid border-black border-2 h-full"
    // style={{ height: "100%" }}
    >
      {/* <div className="flex flex-col justify-center items-start px-4 py-4 w-1/2 h-full border-r-2 border-solid border-black">
        <div className="h-[85%] gap-2 flex flex-col items-start ">
          <h4 className="font-bold md:text-xl text-lg">
            {article.article_title}
          </h4>
          <span className="italic text-gray-900 tracking-tighter text-xs sm:text-sm md:text:base">
            {format(parseISO(article.date), "dd MMMM yyyy", { locale: fr })}
          </span>
          <span className="text-sm md:text:base max-h-[180px] md:max-h-[200px] text-ellipsis break-words overflow-hidden">
            <PrismicRichText
              field={article.article_content.filter(
                (elem: any) => !elem.type.includes("heading")
              )}
            ></PrismicRichText>
          </span>
          <button className="uppercase font-bold tracking-tight">
            <a href={"/"}>{"Lire la suite"}</a>
          </button>
        </div>
      </div> */}
      <PrismicNextImage
        field={article.article_cover}
        height={500}
        width={350}
        className="object-cover"
      />
    </div>
  );
};

export default ArticleCarouselV2;
