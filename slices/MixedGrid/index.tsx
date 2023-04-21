import React from "react";
import Image from "next/image";
import { arrayArticles } from "@/utils/mockData";
import { Wrapper } from "@/components/global";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

/**
 * @typedef {import("@prismicio/client").Content.MixedGridSlice} MixedGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MixedGridSlice>} MixedGridProps
 * @param { MixedGridProps }
 */

export const MixedGrid = ({ slice }: SliceComponentProps) => {
  const mainArticle: articleProps = {
    author: slice.primary?.main_article.data?.article_author?.data,
    preview: slice.primary?.main_article.data?.preview,
    cover: slice.primary?.main_article.data?.article_cover,
    title: slice.primary?.main_article.data?.article_title,
    uid: slice.primary?.main_article.uid,
  };

  const otherArticles: articleProps[] = slice.items.map((elem: any) => {
    return {
      author: elem?.article?.data?.article_author?.data,
      preview: elem?.article?.data?.preview,
      cover: elem?.article?.data?.article_cover,
      title: elem?.article?.data?.article_title,
      uid: elem?.article?.uid,
    };
  });

  interface imgProps {
    alt: string | null;
    dimensions: { width: number; height: number };
    copyright: string | null;
    url: string;
  }

  interface authorProps {
    author_first_name: string;
    author_last_name: string;
    author_image: imgProps;
  }

  interface articleProps {
    author: authorProps;
    preview: string;
    cover: imgProps;
    title: string;
    uid: string;
  }

  return (
    <Wrapper className="border-t-2 border-solid border-black">
      <Link
        href={"/"}
        className="flex gap-2 items-center text-2xl font-bold text-hover w-[fit-content] text-right min-w-[100px] break-keep-all font-title tracking-tighter uppercase mb-3"
      >
        {slice.primary.title ? (
          <PrismicRichText field={slice?.primary?.title} />
        ) : (
          <h2>Template slice, update me!</h2>
        )}
        <span>{" > "}</span>
      </Link>
      <div className="flex flex-col lg:flex-row gap-5 lg:h-[658px]">
        {/* Main Article */}
        <div className="w-full lg:w-2/3 border-solid border-gray-200 border-t-2 h-full flex flex-col gap-5 py-5 mr-5">
          <PrismicNextImage
            field={mainArticle.cover}
            className="object-cover w-full h-3/4"
          />
          <div className="h-fit flex flex-col gap-2">
            <h3 className="text-3xl lg:text-[32px] font-extrabold font-title leading-tight tracking-tighter">
              {mainArticle.title}
            </h3>
            <span>
              {`${mainArticle.author.author_first_name} ${mainArticle.author.author_last_name}`}
            </span>
          </div>
        </div>
        {/* Articles */}
        <div className="w-full lg:w-1/3 border-solid border-gray-200 border-t-2 h-full grid grid-cols-1 grid-rows-3 gap-5 py-5">
          {otherArticles.map((article: articleProps, i: number) => {
            return (
              <div
                key={i}
                className={`${
                  i === otherArticles.length - 1
                    ? ""
                    : "border-solid border-b-2 border-gray-200"
                } w-full pb-5`}
              >
                <div className="w-full flex justify-start gap-3">
                  <PrismicNextImage
                    field={article.cover}
                    className="w-[140px] aspect-[2/1] md:aspect-auto md:w-1/2 object-cover lg:h-auto lg:w-1/3 lg:aspect-square"
                  />
                  <div>
                    <h3 className="text-xl w-full font-extrabold font-title leading-tight tracking-tighter">
                      {article.title}
                      <p className="pt-1 tracking-tight">
                        {`${article.author.author_first_name} ${article.author.author_last_name}`}
                      </p>
                      <p className="pt-1 text-sm font-body tracking-normal">
                        {article.preview}
                      </p>
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default MixedGrid;
