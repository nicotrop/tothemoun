import Image from "next/image";
import {
  ArticleTag,
  SectionTitle,
  SectionTitleContainer,
  Wrapper,
} from "./global";
import { Article, arrayArticles } from "@/utils/mockData";
import Link from "next/link";

export const InterceptImprovedGrid = () => {
  //Remove first article and limit to first 3 articles
  const gridArticles = arrayArticles
    .filter((_: Article, i: number) => i !== 0)
    .splice(0, 3);

  return (
    <Wrapper className="bg-secondary text-primary sm:bg-white sm:text-black">
      {/* Title */}
      <SectionTitleContainer containerClassName="border-t-4 border-white sm:border-black border-solid pt-4">
        <div className="flex flex-col gap-2">
          <SectionTitle title="Environment" />
          <span className="font-title font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum
            explicabo nulla magni beatae tenetur!
          </span>
        </div>
      </SectionTitleContainer>
      {/* Main Component */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-10">
        {/* Main Article */}
        <MainArticle article={arrayArticles[0]} />
        {/* Articles */}
        <OtherArticles gridArticles={gridArticles} />
      </div>
    </Wrapper>
  );
};

const MainArticle = ({ article }: { article: Article }) => {
  return (
    <Link
      href={"/"}
      className="w-full lg:w-[55%] h-full lg:h-auto flex flex-col border-solid border-b-2 border-white sm:border-gray-200 pb-4 lg:border-none sm:pb-0"
    >
      <picture className="relative h-full aspect-[6/4]">
        <Image
          src={article.article_cover}
          alt="image"
          fill
          priority={false}
          className="object-cover w-full h-full rounded-sm overflow-hidden"
        />
      </picture>
      <article className="h-fit flex flex-col gap-2 py-3">
        {article.tags && (
          <ArticleTag
            className={
              "pt-4 sm:pt-2 flex flex-wrap bg-transparent text-primary sm:text-secondary"
            }
            tags={article?.tags}
          />
        )}
        <h3 className="text-2xl lg:text-3xl font-extrabold font-title leading-tight tracking-tighter hover:underline">
          {article.article_title}
        </h3>
        <p className="text-base w-full">{article.preview}</p>
      </article>
    </Link>
  );
};

const OtherArticles = ({ gridArticles }: { gridArticles: Article[] }) => {
  return (
    <div className="w-full lg:w-[45%] h-full lg:h-auto grid grid-cols-1 grid-rows-3 gap-5 mt-5 lg:mt-0">
      {/* Articles other than the first one */}
      {gridArticles.map((article, i) => {
        return (
          <Link
            key={i}
            href={`/`}
            className={`w-full border-solid border-b-2 border-white sm:border-gray-200 pb-4 last-of-type:border-none last-of-type:pb-0`}
          >
            <article className="w-full flex h-full">
              <div className="flex flex-wrap sm:flex-nowrap items-start w-full h-full">
                <Image
                  src={article.article_cover}
                  height={658}
                  width={658}
                  alt="article img"
                  className="w-full sm:w-1/2 sm:h-full object-cover hidden sm:block rounded-sm overflow-hidden lg:aspect-square max-w-[150px] max-h-[150px]"
                />
                <div className="py-2 sm:p-3 flex flex-col gap-2 w-full">
                  {article.tags && (
                    <ArticleTag
                      className={
                        "pt-2 sm:pt-0 flex flex-wrap bg-transparent text-primary sm:text-secondary"
                      }
                      tags={article?.tags}
                    />
                  )}
                  <h3 className="text-lg w-full font-extrabold font-title leading-tight tracking-tighter hover:underline">
                    {article.article_title}
                  </h3>
                  <p className="text-base w-full">{article.preview}</p>
                </div>
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  );
};
