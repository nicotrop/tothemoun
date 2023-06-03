import {
  ArticleTag,
  SectionTitle,
  SectionTitleContainer,
  Wrapper,
} from "./global";
import { KeyTextField } from "@prismicio/types";
import { BlogPostDocument, CollectionDocument } from "types.generated";
import { PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export const InterceptImprovedGrid = ({
  title,
  mainArticle,
  otherArticles,
  description,
  collection,
}: {
  title: string;
  mainArticle: BlogPostDocument;
  otherArticles: { article: BlogPostDocument }[];
  description?: KeyTextField;
  collection?: CollectionDocument;
}) => {
  return (
    <Wrapper className="bg-secondary text-primary sm:bg-white sm:text-black">
      {/* Title */}
      <SectionTitleContainer containerClassName="border-t-4 border-white sm:border-black border-solid pt-4">
        <PrismicLink
          href={collection?.url || "/"}
          className="flex flex-col gap-2"
        >
          {title ? (
            <SectionTitle title={title} />
          ) : (
            <SectionTitle title={"Sample title"} />
          )}
          {description && (
            <span className="font-title font-normal">{description}</span>
          )}
        </PrismicLink>
      </SectionTitleContainer>
      {/* Main Component */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-10">
        {/* Main Article */}
        <MainArticle article={mainArticle} />
        {/* Articles */}
        <OtherArticlesInterceptGrid gridArticles={otherArticles} />
      </div>
    </Wrapper>
  );
};

const MainArticle = ({ article }: { article: BlogPostDocument }) => {
  const preview = reducePreview(article.data.preview);
  return (
    <PrismicLink
      document={article}
      className="w-full lg:w-[55%] h-full lg:h-auto flex flex-col border-solid border-b-2 border-white sm:border-gray-200 pb-4 lg:border-none sm:pb-0"
    >
      <picture className="relative h-full aspect-[6/4]">
        <PrismicNextImage
          field={article.data.article_cover}
          fill
          priority={false}
          className="object-cover w-full h-full rounded-sm overflow-hidden"
        />
      </picture>
      <article className="h-fit flex flex-col gap-2 py-3">
        {article.tags && (
          <ArticleTag
            className={
              "pt-4 sm:pt-2 flex flex-wrap bg-transparent text-primary sm:text-secondary"
            }
            tags={article?.tags}
          />
        )}
        <h3 className="text-2xl lg:text-3xl font-extrabold font-title leading-tight tracking-tighter hover:underline">
          {article.data.article_title}
        </h3>
        <p className="text-base w-full">
          {preview}
          <span className="font-medium hover:underline">
            {"(Lire le reste)"}
          </span>
        </p>
      </article>
    </PrismicLink>
  );
};

//TODO add fallback component if no image is provided or array is empty
const OtherArticlesInterceptGrid = ({
  gridArticles,
}: {
  gridArticles: { article: BlogPostDocument }[];
}) => {
  return (
    <div className="w-full lg:w-[45%] h-full lg:h-auto grid grid-cols-1 grid-rows-3 gap-5 mt-5 lg:mt-0">
      {/* Articles other than the first one */}
      {gridArticles.map((elem, i) => {
        const preview = reducePreview(elem.article.data.preview, 20);
        return (
          i < 3 && (
            <PrismicLink
              key={i}
              document={elem.article}
              className={`w-full border-solid border-b-2 border-white sm:border-gray-200 pb-4 last-of-type:border-none last-of-type:pb-0`}
            >
              <article className="w-full flex h-full">
                <div className="flex flex-wrap sm:flex-nowrap items-start w-full h-full sm:gap-2">
                  <PrismicNextImage
                    field={elem.article.data.article_cover}
                    height={658}
                    width={658}
                    className="w-full sm:w-1/2 sm:h-full object-cover hidden sm:block rounded-sm overflow-hidden lg:aspect-square max-w-[150px] max-h-[150px]"
                  />
                  <div className="py-2 sm:p-0 flex flex-col gap-2 w-full">
                    {elem.article.tags && (
                      <ArticleTag
                        className={
                          "pt-2 sm:pt-0 flex flex-wrap bg-transparent text-primary sm:text-secondary"
                        }
                        tags={elem?.article.tags}
                      />
                    )}
                    <h3 className="text-lg w-full font-extrabold font-title leading-tight tracking-tighter hover:underline">
                      {elem.article.data.article_title}
                    </h3>
                    <p className="text-base w-full">
                      {preview}
                      <span className="font-medium hover:underline">
                        {"(Lire le reste)"}
                      </span>
                    </p>
                  </div>
                </div>
              </article>
            </PrismicLink>
          )
        );
      })}
    </div>
  );
};

const reducePreview = (preview: string | KeyTextField, limit?: number) => {
  const previewLimit = limit ? limit : 50;
  const response = preview
    ?.split(" ")
    .filter((_, i) => i < previewLimit)
    .join(" ")
    .concat("...");
  return response;
};
