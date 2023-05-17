import { ArticleTag, GlobalButton, Wrapper } from "./global";
import { arrayArticles } from "@/utils/mockData";
import Image from "next/image";

export const ALaUne = () => {
  return (
    <div className="pb-10 bg-black">
      <div className="relative aspect-[9/16] sm:aspect-[6/4] lg:max-h-[calc(100vh-80px)] w-full py-16 px-10">
        <Image
          alt="image"
          src={arrayArticles[0].article_cover}
          fill
          className="absolute object-cover top-0 left-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-30 w-full h-full"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:items-center auto-rows-auto gap-4 z-40 mx-8 text-white h-autoborder-solid border-t-2 border-primary pt-5">
        {/* <hr className="border-solid border-t-2 border-primary" /> */}
        {arrayArticles.map((article, i) => {
          if (i < 4) {
            return (
              <div key={i} className="flex h-fit items-center gap-4">
                <div className="max-w-[66px]">
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
                      className={
                        "pt-2 sm:pt-0 flex flex-wrap bg-transparent text-primary"
                      }
                      tags={article?.tags}
                    />
                  )}
                  <h3 className="text-base font-semibold font-title leading-tight tracking-tighter">
                    {article.article_title}
                  </h3>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
