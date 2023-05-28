import { PrismicNextImage } from "@prismicio/next";
import { ArticleTag } from "./global";
import React from "react";
import { BlogPostDocument } from "types.generated";
import { PrismicLink } from "@prismicio/react";
import { OtherStories } from "slices/TopStory";

export const TopStoryComp = ({
  topArticle,
  sideArticles,
  title,
}: {
  topArticle?: BlogPostDocument;
  sideArticles?: OtherStories;
  title?: string;
}) => {
  const featuredArticles = sideArticles?.slice(0, 4);

  console.log(featuredArticles);

  return (
    <div className="pb-10 bg-black">
      <div className="relative aspect-[9/16] sm:aspect-[6/4] max-h-[calc(85vh)] lg:max-h-[calc(100vh-280px)] w-full">
        <PrismicNextImage
          field={topArticle?.data.article_cover}
          fill
          className="absolute object-cover inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-30 w-full h-full"></div>
        <header className="absolute w-[calc(100%-(2rem*2))] top-10 left-0 mx-8 z-40 m-auto">
          <hr className="border-t-4 border-white border-solid py-2" />
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter font-header text-white uppercase">
            {title}
          </h2>
        </header>
        <MainStoryDetails selectedArticle={topArticle} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:items-center auto-rows-auto gap-4 z-40 mx-8 text-white border-t-2 border-primary pt-5">
        {featuredArticles?.map((article, i) => (
          <FeaturedArticle key={i} article={article.other_articles} />
        ))}
      </div>
    </div>
  );
};

const FeaturedArticle = ({ article }: { article?: BlogPostDocument }) => {
  console.log(article);
  return (
    <PrismicLink document={article} className="flex h-fit items-center gap-4">
      <div className="h-[50px] aspect-[3/2] relative">
        <PrismicNextImage
          field={article?.data.article_cover}
          fill
          className="object-cover rounded-sm w-full"
        />
      </div>
      <div className="h-fit flex flex-col gap-2 py-3">
        {article?.tags && (
          <ArticleTag
            className="pt-2 sm:pt-0 flex flex-wrap bg-transparent text-primary"
            tags={article.tags}
          />
        )}
        <h3 className="text-base font-semibold font-title leading-tight tracking-tighter hover:underline">
          {article?.data.article_title}
        </h3>
      </div>
    </PrismicLink>
  );
};

const MainStoryDetails = ({
  selectedArticle,
}: {
  selectedArticle?: BlogPostDocument;
}) => {
  return (
    <PrismicLink
      document={selectedArticle}
      className="absolute bottom-8 md:bottom-12 left-0 flex flex-col gap-2 px-8 z-40 text-white max-w-[1600px]"
    >
      {selectedArticle?.tags && (
        <ArticleTag
          className="pb-3 sm:pt-0 flex flex-wrap bg-transparent text-primary"
          tags={selectedArticle.tags}
        />
      )}
      <h3 className="text-2xl lg:text-3xl font-extrabold font-title leading-tight tracking-tighter md:max-w-[33rem] hover:underline">
        {selectedArticle?.data.article_title}
      </h3>
      <p className="text-base w-full">{selectedArticle?.data.preview}</p>
    </PrismicLink>
  );
};
