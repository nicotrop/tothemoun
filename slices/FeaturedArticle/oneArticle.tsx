import { PrismicNextImage } from "@prismicio/next";
import { GlobalButton, Wrapper } from "../../src/components/global";
import { BlogPostDocument } from "types.generated";
import { PrismicLink } from "@prismicio/react";

export const OneArticleBlock = ({ article }: { article: BlogPostDocument }) => {
  return (
    <Wrapper className="border-t-2 border-solid border-black bg-primary text-secondary sm:text-white sm:bg-black overflow-hidden">
      <div className="flex flex-wrap sm:flex-nowrap min-h-[350px] h-full w-full gap-3 sm:gap-6 md:gap-8 lg:gap-10">
        <div className="w-full sm:w-3/5 h-auto">
          <div className="w-full h-full relative aspect-[6/4] rounded-sm overflow-hidden">
            <PrismicNextImage
              field={article.data.article_cover}
              fill
              priority={false}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="w-full sm:w-2/5 h-2/5 lg:h-full">
          <PrismicLink
            document={article}
            className="h-fit flex flex-col gap-2 py-3"
          >
            {article.tags && (
              <span
                className={`uppercase text-xs font-title tracking-tight font-semibold`}
              >
                {article.tags[0]}
              </span>
            )}
            <h3 className="text-xl lg:text-2xl font-semibold font-title leading-tight tracking-tighter hover:cursor-pointer hover:underline">
              {article.data.article_title}
            </h3>
          </PrismicLink>
          <div className="h-fit flex flex-col items-start gap-2 py-3">
            <p className="text-base">{article.data.preview}</p>
            <GlobalButton text="Lire l'article" className="mt-2" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
