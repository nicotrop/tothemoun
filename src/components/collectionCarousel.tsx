import { Article, mockArticleSectionData } from "@/utils/mockData";
import { SectionTitle, SectionTitleContainer, Wrapper } from "./global";
import Link from "next/link";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { SwiperImprovedCarousel } from "@/components/sliders";

import "swiper/css";

export const CollectionCarousel = () => {
  const data = mockArticleSectionData.articles;
  return (
    <Wrapper padding={true} className="overflow-hidden w-full">
      <SectionTitleContainer containerClassName="border-t-4 border-primary sm:border-black border-solid pt-4">
        <div className="flex flex-col gap-2">
          <SectionTitle title="Collections" />
        </div>
      </SectionTitleContainer>
      <hr className="border-solid border-gray-200 border-t-2 pb-5" />
      <SwiperImprovedCarousel className="max-h-[580px]" btnPosition="mid-pos">
        {data?.map((article: Article, i: number) => {
          return (
            <SwiperSlide key={i} className="aspect-[9/16]">
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
    <div className="w-full z-50 h-full relative">
      <Link href={"/"}>
        <div className="img-hover w-full h-full m-0 p-0">
          <Image
            src={article.article_cover}
            fill
            alt={article.article_title}
            className="object-cover w-full m-0 h-full hover:opacity-80 transition-opacity duration-300 ease-in-out"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-30"></div>
        <div className="absolute left-6 top-6 w-[85%]">
          <h5
            className="md:text-xl text-base font-display italic font-extrabold uppercase tracking-tight text-white"
            style={{ lineHeight: "1.5rem" }}
          >
            {article.article_title}
          </h5>
        </div>
      </Link>
    </div>
  );
};
