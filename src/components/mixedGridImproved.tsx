import Image from "next/image";
import {
  ArticleTag,
  SectionTitle,
  SectionTitleContainer,
  Wrapper,
} from "./global";
import { Article, arrayArticles } from "@/utils/mockData";

export const InterceptImprovedGrid = () => {
  //Remove first article and limit to first 3 articles
  const gridArticles = arrayArticles
    .filter((_: Article, i: number) => i !== 0)
    .splice(0, 3);

  return (
    <Wrapper className="border-t-2 border-solid border-black bg-secondary text-primary sm:bg-white sm:text-black">
      {/* Title */}
      <SectionTitleContainer>
        <div className="flex flex-col gap-2">
          <SectionTitle title="Environment" />
          <span className="font-title font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum
            explicabo nulla magni beatae tenetur!
          </span>
        </div>
      </SectionTitleContainer>

      <div className="flex flex-col lg:flex-row lg:gap-7 pb-8">
        {/* Main Article */}
        <div className="w-full border-solid border-gray-200 border-t-2 lg:w-[calc(55%)] h-full lg:h-auto flex flex-col pt-5">
          <Image
            src={arrayArticles[0].article_cover}
            alt="image"
            height={658}
            width={658}
            className="object-cover w-full h-full"
          />
          <div className="h-fit flex flex-col gap-2 py-3">
            <h3 className="text-xl lg:text-2xl font-extrabold font-title leading-tight tracking-tighter">
              {arrayArticles[0].article_title}
            </h3>
            <p className="text-base w-full">{arrayArticles[0].preview}</p>
          </div>
        </div>
        {/* Articles */}
        <div className="w-full lg:w-[45%] border-solid border-gray-200 border-t-2 h-full lg:h-auto grid grid-cols-1 grid-rows-3 gap-5 pt-5 mt-5 lg:mt-0">
          {/* Articles other than the first one */}
          {gridArticles.map((article, i) => {
            return (
              <div key={i} className={`w-full`}>
                <div className="w-full flex h-full">
                  <div className="flex flex-wrap sm:flex-nowrap w-full h-full">
                    <Image
                      src={article.article_cover}
                      height={658}
                      width={658}
                      alt="article img"
                      className="w-full sm:w-1/2 sm:h-full object-cover"
                    />
                    <div className="py-2 sm:p-3 flex flex-col gap-2 w-full">
                      {article.tags && (
                        <ArticleTag
                          className={
                            "pt-2 sm:pt-0 flex flex-wrap bg-transparent text-primary sm:text-black"
                          }
                          tags={article?.tags}
                        />
                      )}
                      <h3 className="text-lg w-full font-extrabold font-title leading-tight tracking-tighter">
                        {article.article_title}
                      </h3>
                      <p className="text-base w-full">{article.preview}</p>
                    </div>
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
