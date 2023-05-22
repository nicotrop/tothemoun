import { arrayArticles } from "@/utils/mockData";
import {
  ArticleTag,
  SectionTitle,
  SectionTitleContainer,
  Wrapper,
} from "./global";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export const CollectionGrid = () => {
  return (
    <Wrapper>
      <SectionTitleContainer containerClassName="border-t-4 border-white sm:border-black border-solid pt-8 pb-8">
        <div className="flex flex-col gap-2 text-center">
          <SectionTitle title="Collection" showSymbol={false} />
        </div>
      </SectionTitleContainer>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
      </div>
    </Wrapper>
  );
};

const CollectionCard = () => {
  return (
    <Link href={"/"}>
      <div className="relative aspect-[9/10]">
        <div className="bg-secondary opacity-20 absolute inset-0 hover:bg-opacity-0 z-40 duration-200 ease-in-out"></div>
        <Image
          src={arrayArticles[0].article_cover}
          alt="yesssir"
          fill
          className="object-cover"
        />
      </div>
      <article className="py-4">
        {arrayArticles[0].tags && (
          <ArticleTag
            className="pt-2 sm:pt-0 flex flex-wrap bg-transparent text-black"
            tags={arrayArticles[0]?.tags}
          />
        )}
        <h4 className="text-xl font-semibold font-title text-black leading-tight">
          {arrayArticles[0].article_title}
        </h4>
      </article>
    </Link>
  );
};
