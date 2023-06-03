// import { arrayArticles } from "@/utils/mockData";
import { SectionTitle, SectionTitleContainer, Wrapper } from "./global";
// import Image from "next/image";
// import Link from "next/link";
import { BlogPostDocument } from "types.generated";
import { PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export const CollectionGridComp = ({
  articles,
  title = "Collection",
  tag,
}: {
  articles: BlogPostDocument<string>[] | null;
  title?: string;
  tag?: string;
}) => {
  return (
    <Wrapper>
      <SectionTitleContainer>
        <div className="flex flex-col gap-2 text-center">
          <SectionTitle title={title} showSymbol={false} />
        </div>
      </SectionTitleContainer>
      {/* TODO Improve mobile UI */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
        {articles?.map((article, index) => {
          return <CollectionCard key={index} article={article} tag={tag} />;
        })}
      </div>
    </Wrapper>
  );
};

const CollectionCard = ({
  article,
  tag,
}: {
  article: BlogPostDocument;
  tag?: string;
}) => {
  return (
    <PrismicLink document={article}>
      <div className="relative aspect-[9/10]">
        <div className="bg-secondary opacity-20 absolute inset-0 hover:bg-opacity-0 z-40 duration-200 ease-in-out"></div>
        <PrismicNextImage
          field={article.data.article_cover}
          fill
          className="object-cover"
        />
      </div>
      <article className="py-4">
        <span className="uppercase text-xs font-title tracking-tight font-semibold">
          {tag}
        </span>
        <h4 className="text-xl font-semibold font-title text-black leading-tight">
          {article.data.article_title}
        </h4>
      </article>
    </PrismicLink>
  );
};
