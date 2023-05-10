import Image from "next/image";
import { SectionTitle, SectionTitleContainer, Wrapper } from "./global";
import { Article, arrayArticles } from "@/utils/mockData";

export const InterceptMixedGrid = () => {
  //Remove first article and limit to first 3 articles
  const gridArticles = arrayArticles
    .filter((_: Article, i: number) => i !== 0)
    .splice(0, 3);

  return (
    <Wrapper className="border-t-2 border-solid border-black">
      {/* Title */}
      <SectionTitleContainer>
        <div className="flex flex-col gap-2">
          <SectionTitle title="Environment" className="font-display italic" />
          <span className="font-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum
            explicabo nulla magni beatae tenetur!
          </span>
        </div>
      </SectionTitleContainer>

      <div className="flex flex-col lg:flex-row gap-5 lg:gap-5 lg:h-[658px] xl:h-[700px]">
        {/* Main Article */}
        <div className="w-full lg:w-2/3 border-solid border-gray-200 border-t-2 h-full flex flex-col justify-between gap-5 mr-5 pt-5">
          <Image
            src={arrayArticles[0].article_cover}
            alt="image"
            height={658}
            width={658}
            className="object-cover w-full h-4/5"
          />
          <div className="h-full flex flex-col gap-2">
            <h3 className="text-3xl lg:text-[32px] font-extrabold font-title leading-tight tracking-tighter">
              {arrayArticles[0].article_title}
            </h3>
            <span>
              {arrayArticles[0].article_author.author_first_name}{" "}
              {arrayArticles[0].article_author.author_last_name}
            </span>
          </div>
        </div>
        {/* Articles */}
        <div className="w-full lg:w-1/3 border-solid border-gray-200 border-t-2 h-full grid grid-cols-1 grid-rows-3 gap-5 py-5">
          {/* Articles other than the first one */}
          {gridArticles.map((article, i) => {
            //Extract author name
            let authorName = `${article.article_author.author_first_name} ${article.article_author.author_last_name}`;
            return (
              <div
                key={i}
                className={`${
                  i === gridArticles.length - 1
                    ? ""
                    : "border-solid border-b-2 border-gray-200"
                } w-full pb-5`}
              >
                <div className="w-full flex justify-start gap-3">
                  <Image
                    src={article.article_cover}
                    height={150}
                    width={200}
                    alt="article img"
                    className="aspect-square w-full xs:w-auto xs:max-w-[250px] h-auto max-h-36 sm:max-h-none lg:aspect-auto md:w-1/2 object-cover lg:max-h-36 lg:h-auto lg:w-1/3 min-[1565px]:block"
                  />
                  <div>
                    <h3 className="text-xl w-full font-extrabold font-title leading-tight tracking-tighter">
                      {article.article_title}
                    </h3>
                    <p className="pt-1 tracking-tight">{authorName}</p>
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
