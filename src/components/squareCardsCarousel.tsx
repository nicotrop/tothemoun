import { Article, mockArticleSectionData } from "@/utils/mockData";
import {
  ArticleTag,
  SectionTitle,
  SectionTitleContainer,
  Wrapper,
} from "./global";
import Link from "next/link";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { SwiperImprovedCarousel } from "@/components/sliders";

import "swiper/css";

const SquareCardCarousel = () => {
  const data = mockArticleSectionData.articles;
  return (
    <Wrapper
      padding={false}
      className="px-wrapper_x sm:pb-0 overflow-hidden w-full"
    >
      <SectionTitleContainer containerClassName="border-t-4 border-black sm:border-black border-solid pt-4">
        <div className="flex flex-col gap-2">
          <SectionTitle title="Best of Guadeloupe" />
        </div>
      </SectionTitleContainer>
      <SwiperImprovedCarousel className="h-80" btnPosition="top-pos">
        {data?.map((article: Article, i: number) => {
          return (
            <SwiperSlide key={i}>
              <ArticleCard article={article} />
            </SwiperSlide>
          );
        })}
      </SwiperImprovedCarousel>
    </Wrapper>
  );
};

export const ArticleCard = ({
  article,
}: {
  article: Article;
  type?: string;
}) => {
  return (
    <div className={`flex flex-col items-start gap-2`}>
      <div className="w-full z-50">
        <Link href={"/"} className="img-hover w-full m-0 p-0">
          <Image
            src={article.article_cover}
            height={350}
            width={350}
            alt={article.article_title}
            className="object-cover w-full m-0 rounded-sm overflow-hidden"
          />
        </Link>
      </div>
      <div className="flex flex-col items-start min-h-[40%]">
        {article.tags && (
          <ArticleTag
            className="pb-2 pt-2 sm:pt-0 flex flex-wrap bg-transparent text-secondary"
            tags={article.tags}
          />
        )}
        <Link href={"/"} className="text-hover">
          <h5
            className="md:text-lg text-base font-title font-bold uppercase tracking-tight hover:underline"
            style={{ lineHeight: "1.5rem" }}
          >
            {article.article_title}
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default SquareCardCarousel;
