import { ArticleTag, GlobalButton, Wrapper } from "./global";
import { arrayArticles } from "@/utils/mockData";
import Image from "next/image";
import Link from "next/link";
export const OneArticleBlock = () => {
  return (
    <Wrapper className="border-t-2 border-solid border-black bg-primary text-secondary sm:text-white sm:bg-black">
      <div className="flex flex-wrap sm:flex-nowrap min-h-[350px] h-full w-full gap-3 sm:gap-6 md:gap-8 lg:gap-10 py-4">
        <div className="w-full sm:w-3/5 h-auto">
          <div className="w-full h-full relative aspect-[6/4] rounded-sm overflow-hidden">
            <Image
              alt="image"
              src={arrayArticles[0].article_cover}
              fill
              priority={false}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="w-full sm:w-2/5 h-2/5 lg:h-full">
          <Link href={"/"} className="h-fit flex flex-col gap-2 py-3">
            {arrayArticles[0].tags && (
              <ArticleTag
                className={
                  "pt-2 sm:pt-0 flex flex-wrap bg-transparent text-secondary sm:text-primary"
                }
                tags={arrayArticles[0]?.tags}
              />
            )}
            <h3 className="text-xl lg:text-2xl font-semibold font-title leading-tight tracking-tighter hover:cursor-pointer hover:underline">
              {arrayArticles[0].article_title}
            </h3>
          </Link>
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
