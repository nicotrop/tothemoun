import Image from "next/image";
import Link from "next/link";
import { Wrapper } from "./Layout";
// import { ArticleCard } from "./ArticleSection";

export type Article = {
  title: string;
  date: string;
  imageURL: string;
  content: string;
  link: string;
};

export type ArticleSectionType = {
  title: string;
  subtitle: string;
  link: string;
  articles: Article[];
};

export const ArticleSection2 = ({ data }: { data: ArticleSectionType }) => {
  return (
    <Wrapper className="flex flex-col gap-3 box-content">
      <h2 className="text-2xl font-bold">{data.title}</h2>
      <div className="flex justify-between">
        <h4>{data.subtitle}</h4>
        <Link
          href={data.link}
          className="hover:underline w-[fit-content] text-right min-w-[100px] break-keep-all"
        >
          Voir tout
        </Link>
      </div>
      <div className="xl:grid xl:grid-cols-5 xl:w-full flex overflow-x-scroll xl:overflow-hidden gap-4 scrollbar-hide mt-1">
        {data?.articles?.map((article, i) => {
          return i < 1 ? (
            <ArticleCard2 article={article} key={i} />
          ) : (
            <ArticleCard article={article} key={i} />
          );
          //   return <ArticleCard article={article} key={i} />;
        })}
      </div>
    </Wrapper>
  );
};

export const ArticleCard = ({ article }: { article: Article }) => {
  return (
    // <figure className="border-solid border-black border-2 flex flex-col items-start gap-2 min-w-full sm:min-w-[300px] md:min-w-[335px] xl:min-w-0">
    <figure className="border-solid border-black border-2 flex flex-col items-start gap-2 min-w-full sm:min-w-[300px] md:min-w-[335px] xl:min-w-0">
      <Image
        src={article.imageURL}
        alt="card-image"
        height={350}
        width={350}
        className="object-cover w-full aspect-video"
      />
      <div className="flex flex-col gap-1 items-start px-4 pb-4">
        <h5 className="font-bold md:text-lg text-base">{article.title}</h5>
        <span className="italic text-gray-900 tracking-tighter text-xs sm:text-sm md:text:base">
          {article.date}
        </span>
        <p className="text-sm md:text:base">{article.content}</p>
        <button className="uppercase font-bold tracking-tight">
          <a href={article.link}>{"Lire la suite"}</a>
        </button>
      </div>
    </figure>
  );
};

export const ArticleCard2 = ({ article }: { article: Article }) => {
  return (
    <figure className="col-span-2 border-solid border-black border-2 flex items-start min-w-full sm:min-w-[430px] md:min-w-[465px] xl:min-w-0">
      <div className="flex flex-col justify-end gap-1 items-start px-4 py-4 w-1/2 h-full border-r-2 border-solid border-black">
        <div className="h-[85%] flex flex-col justify-between items-start">
          <h4 className="font-bold md:text-xl text-lg">{article.title}</h4>
          <span className="italic text-gray-900 tracking-tighter text-xs sm:text-sm md:text:base">
            {article.date}
          </span>
          <p className="text-sm md:text:base max-h-[180px] md:max-h-[200px] text-ellipsis break-words overflow-hidden">
            {article.content}
          </p>
          <button className="uppercase font-bold tracking-tight">
            <a href={article.link}>{"Lire la suite"}</a>
          </button>
        </div>
      </div>
      <Image
        src={article.imageURL}
        alt="card-image"
        height={350}
        width={350}
        className="object-cover h-full w-1/2"
      />
    </figure>
  );
};
