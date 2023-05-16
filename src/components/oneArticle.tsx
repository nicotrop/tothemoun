import { GlobalButton, Wrapper } from "./global";
import { arrayArticles } from "@/utils/mockData";
import Image from "next/image";

export const OneArticleBlock = () => {
  return (
    <Wrapper className="border-t-2 border-solid border-black bg-primary text-secondary sm:text-primary sm:bg-secondary">
      <div className="flex flex-wrap sm:flex-nowrap min-h-[350px] h-full w-full gap-6 md:gap-8 lg:gap-10 py-4">
        <div className="w-full sm:w-3/5 h-auto">
          <Image
            alt="image"
            src={arrayArticles[0].article_cover}
            width={550}
            height={450}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="w-full sm:w-2/5 h-2/5 lg:h-full">
          <div className="h-fit flex flex-col gap-2 py-3">
            <span className="uppercase text-xs font-title tracking-tight">
              Immerse Yourself
            </span>
            <h3 className="text-xl lg:text-2xl font-semibold font-title leading-tight tracking-tighter">
              {arrayArticles[0].article_title}
            </h3>
          </div>
          <div className="h-fit flex flex-col items-start gap-2 py-3">
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              fugit ex? Impedit illo odio inventore, vitae vel magni nemo,
              minima blanditiis aut facilis ducimus. Quas, laudantium.
              Recusandae quia adipisci vel.
            </p>
            <GlobalButton text="Lire l'article" className="mt-2" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
