import { ArticleTag } from "./global";
import { Article, arrayArticles } from "@/utils/mockData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const TopStories = () => {
  const selectedArticle = arrayArticles[0];
  const featuredArticles = arrayArticles.slice(0, 4);

  return (
    <div className="pb-10 bg-black">
      <div className="relative aspect-[9/16] sm:aspect-[6/4] lg:max-h-[calc(100vh-280px)] w-full">
        <Image
          alt="image"
          src={selectedArticle.article_cover}
          fill
          className="absolute object-cover inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-30 w-full h-full"></div>
        <header className="absolute w-[calc(100%-(2rem*2))] top-10 left-0 mx-8 z-40 m-auto">
          <hr className="border-t-4 border-white border-solid py-2" />
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter font-header text-white uppercase">
            Notre selection
          </h2>
        </header>
        <MainStoryDetails selectedArticle={selectedArticle} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:items-center auto-rows-auto gap-4 z-40 mx-8 text-white border-t-2 border-primary pt-5">
        {featuredArticles.map((article, i) => (
          <FeaturedArticle key={i} article={article} />
        ))}
      </div>
    </div>
  );
};

const FeaturedArticle = ({ article }: { article: Article }) => {
  return (
    <Link href={"/"} className="flex h-fit items-center gap-4">
      <div className="max-w-[88px]">
        <Image
          alt="image"
          src={article.article_cover}
          width={250}
          height={250}
          className="object-cover"
        />
      </div>
      <div className="h-fit flex flex-col gap-2 py-3">
        {article.tags && (
          <ArticleTag
            className="pt-2 sm:pt-0 flex flex-wrap bg-transparent text-primary"
            tags={article.tags}
          />
        )}
        <h3 className="text-base font-semibold font-title leading-tight tracking-tighter hover:underline">
          {article.article_title}
        </h3>
      </div>
    </Link>
  );
};

const MainStoryDetails = ({
  selectedArticle,
}: {
  selectedArticle: Article;
}) => {
  return (
    <Link
      href={"/"}
      className="absolute bottom-8 md:bottom-12 left-0 flex flex-col gap-2 px-8 z-40 text-white max-w-[1600px]"
    >
      {selectedArticle.tags && (
        <ArticleTag
          className="pb-3 sm:pt-0 flex flex-wrap bg-transparent text-primary"
          tags={selectedArticle.tags}
        />
      )}
      <h3 className="text-2xl lg:text-3xl font-extrabold font-title leading-tight tracking-tighter md:max-w-[33rem] hover:underline">
        {selectedArticle.article_title}
      </h3>
      <p className="text-base w-full">{selectedArticle.preview}</p>
    </Link>
  );
};
