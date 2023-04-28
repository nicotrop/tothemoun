import Image from "next/image";
import { SectionTitle, SectionTitleContainer, Wrapper } from "./global";
import { Article, arrayArticles } from "@/utils/mockData";

export const WashingtonPostGrid = () => {
  //Remove first article and limit to first 3 articles
  const gridArticles = arrayArticles
    .filter((_: Article, i: number) => i !== 0)
    .splice(0, 5);

  const groupedArticles = [gridArticles.slice(0, 2), gridArticles.slice(2, 4)];

  return (
    <Wrapper className="border-t-2 border-solid border-black">
      {/* Title */}
      <SectionTitleContainer>
        <SectionTitle title="Environment" />
      </SectionTitleContainer>

      <div className="flex flex-col lg:flex-row w-full gap-5 lg:h-[658px]">
        {/* Main Article */}
        <div className="w-full border-solid border-gray-200 border-t-2 h-full pt-5 mr-5">
          <Image
            src={arrayArticles[0].article_cover}
            alt="image"
            height={658}
            width={658}
            className="object-cover w-full h-4/5 lg:aspect-[3/2] lg:min-w-[520px] lg:w-[628px] xl:w-full"
          />
          <div className="h-fit flex flex-col gap-2 mt-5">
            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold font-title leading-tight tracking-tighter">
              {arrayArticles[0].article_title}
            </h3>
            <AuthorDetails article={arrayArticles[0]} />
          </div>
        </div>
        {/* Articles */}
        <div className="hidden sm:flex w-full gap-10">
          {groupedArticles.map((article, i) => {
            return (
              <div
                key={i}
                className="w-1/2 border-solid border-gray-200 border-t-2 h-full grid grid-cols-1 grid-rows-2 gap-5 py-5"
              >
                {article.map((elem, i) => {
                  return <GridArticle key={i} article={elem} />;
                })}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col sm:hidden">
          {gridArticles.map((article, i) => {
            return (
              <div
                key={i}
                className="w-full border-solid border-gray-200 border-t-2 py-3"
              >
                <GridArticle key={i} article={article} />
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const AuthorDetails = ({ article }: { article: Article }) => {
  return (
    <span className="text-xs sm:text-sm">
      {"by "}
      {article.article_author.author_first_name}{" "}
      {article.article_author.author_last_name}
    </span>
  );
};

const GridArticle = ({ article }: { article: Article }) => {
  return (
    <div className="flex flex-col overflow-hidden sm:h-[285px] md:h-[calc(100%-(20px-1.25rem))]">
      <Image
        src={article.article_cover}
        alt="article image"
        width={350}
        height={350}
        className="hidden sm:block w-full h-3/4 object-cover"
      />
      <h3 className="font-extrabold font-title leading-tight tracking-tighter text-lg mt-2">
        {article.article_title}
      </h3>
      <AuthorDetails article={article} />
    </div>
  );
};
