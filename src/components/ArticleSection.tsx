// import Image from "next/image";
// import Link from "next/link";
// import { Wrapper } from "./Layout";

// export type Article = {
//   title: string;
//   date: string;
//   imageURL: string;
//   content: string;
//   link: string;
// };

// export type ArticleSectionType = {
//   title: string;
//   subtitle: string;
//   link: string;
//   articles: Article[];
// };

// export const ArticleSection = ({ data }: { data: ArticleSectionType }) => {
//   return (
//     <Wrapper className="flex flex-col gap-3 box-content">
//       <h2 className="text-2xl font-bold">{data.title}</h2>
//       <div className="flex justify-between">
//         <h4>{data.subtitle}</h4>
//         <Link
//           href={data.link}
//           className="hover:underline w-[fit-content] text-right min-w-[100px] break-keep-all"
//         >
//           Voir tout
//         </Link>
//       </div>
//       <div className="xl:grid xl:grid-cols-4 xl:w-full flex overflow-x-scroll xl:overflow-hidden gap-4 scrollbar-hide mt-1">
//         {data?.articles?.map((article, i) => {
//           return <ArticleCard article={article} key={i} />;
//         })}
//       </div>
//     </Wrapper>
//   );
// };

// export const ArticleCard = ({ article }: { article: Article }) => {
//   return (
//     <figure className="border-solid border-black border-2 flex flex-col items-start gap-2 min-w-full sm:min-w-[300px] md:min-w-[335px] xl:min-w-0">
//       <Image
//         src={article.imageURL}
//         alt="card-image"
//         height={350}
//         width={350}
//         className="object-cover w-full aspect-video"
//       />
//       <div className="flex flex-col gap-1 items-start px-4 pb-4">
//         <h5 className="font-bold md:text-lg text-base">{article.title}</h5>
//         <span className="italic text-gray-900 tracking-tighter text-xs sm:text-sm md:text:base">
//           {article.date}
//         </span>
//         <p className="text-sm md:text:base">{article.content}</p>
//         <button className="uppercase font-bold tracking-tight">
//           <a href={article.link}>{"Lire la suite"}</a>
//         </button>
//       </div>
//     </figure>
//   );
// };
