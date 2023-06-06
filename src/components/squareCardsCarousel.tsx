import {
  ArticleTag,
  SectionTitle,
  SectionTitleContainer,
  Wrapper,
} from "./global";
import { SwiperSlide } from "swiper/react";
import { SwiperImprovedCarousel } from "@/components/sliders";
import { KeyTextField } from "@prismicio/types";
import { Articles, ArticlesTyped } from "slices/SquareCardCarousel";
import { BlogPostDocument } from "types.generated";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink } from "@prismicio/react";

import "swiper/css";

export const SquareCardCarouselComp = ({
  title,
  articles,
}: {
  title: KeyTextField;
  articles: Articles | null;
}) => {
  return (
    <Wrapper
      padding={true}
      className="px-wrapper_x sm:pb-0 overflow-hidden w-full"
    >
      <SectionTitleContainer containerClassName="border-t-4 border-black sm:border-black border-solid pt-4">
        <div className="flex flex-col gap-2">
          <SectionTitle title={title} />
        </div>
      </SectionTitleContainer>
      <SwiperImprovedCarousel className="h-auto" btnPosition="top-pos">
        {articles?.map((elem: ArticlesTyped, i: number) => {
          return (
            <SwiperSlide key={i}>
              <ArticleCard article={elem.article} />
            </SwiperSlide>
          );
        })}
      </SwiperImprovedCarousel>
    </Wrapper>
  );
};

const ArticleCard = ({ article }: { article: BlogPostDocument }) => {
  return (
    <div className={`flex flex-col items-start gap-2`}>
      <div className="w-full z-50">
        <PrismicLink document={article} className="img-hover w-full m-0 p-0">
          <div className="w-full relative aspect-square">
            <PrismicNextImage
              field={article.data.article_cover}
              fill
              className="object-cover w-full m-0 rounded-sm overflow-hidden"
            />
          </div>
        </PrismicLink>
      </div>
      <div className="flex flex-col items-start min-h-[40%]">
        {article.tags && (
          <ArticleTag
            className="pb-2 pt-2 sm:pt-0 flex flex-wrap bg-transparent text-secondary"
            tags={article.tags}
          />
        )}
        <PrismicLink document={article} className="text-hover">
          <h5
            className="md:text-lg text-base font-title font-bold uppercase tracking-tight hover:underline"
            style={{ lineHeight: "1.5rem" }}
          >
            {article.data.article_title}
          </h5>
        </PrismicLink>
      </div>
    </div>
  );
};
