import Image from "next/image";
import { Wrapper } from "./global";
import { arrayArticles } from "@/utils/mockData";

export const InterceptMixedGrid = () => {
  return (
    <Wrapper className="border-t-2 border-solid border-black">
      {/* <hr className="border-t-2 border-black border-solid py-2" /> */}
      <h2 className="pb-10 text-[32px] lg:text-[52px] font-extrabold tracking-tighter font-header">
        {"Environment >"}
      </h2>
      <div className="flex flex-col lg:flex-row gap-5 lg:h-[658px]">
        <div className="w-full lg:w-2/3 border-solid border-gray-200 border-t-2 h-full flex flex-col gap-5 py-5 mr-5">
          {/* <picture className="aspect-video"> */}
          <Image
            src={arrayArticles[0].imageURL}
            alt="image"
            height={658}
            width={658}
            className="object-cover w-full h-3/4"
          />
          <div className="h-fit flex flex-col gap-2">
            <h3 className="text-3xl lg:text-[32px] font-extrabold font-title leading-tight tracking-tighter">
              {arrayArticles[0].title}
            </h3>
            <span>Jon Schwartz</span>
          </div>
        </div>
        <div className="w-full lg:w-1/3 border-solid border-gray-200 border-t-2 h-full grid grid-cols-1 grid-rows-3 gap-5 py-5">
          {arrayArticles
            .filter((_, i) => i !== 0)
            .map((article, i) => {
              return (
                <div
                  key={i}
                  className="border-solid border-b-2 border-gray-200 w-full pb-5"
                >
                  <div className="w-full flex justify-start gap-3">
                    <Image
                      src={article.imageURL}
                      height={150}
                      width={200}
                      alt="article img"
                      className="aspect-[2/3] xs:aspect-[2/1] md:aspect-auto md:w-1/2 object-cover lg:h-auto lg:w-1/3 lg:aspect-square"
                    />
                    <div>
                      <h3 className="text-xl w-full font-extrabold font-title leading-tight tracking-tighter">
                        {article.title}
                        <p className="pt-1">Jon Schwartz</p>
                      </h3>
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
