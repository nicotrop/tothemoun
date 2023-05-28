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
    <Wrapper
      padding={false}
      className="sm:pb-0 overflow-hidden w-full py-wrapper_y"
    >
      <SectionTitleContainer containerClassName="mx-8 border-t-4 border-black sm:border-black border-solid pt-4">
        <div className="flex flex-col gap-2">
          <SectionTitle title="Collections" />
        </div>
      </SectionTitleContainer>
      <SwiperImprovedCarousel className="max-h-[580px]" btnPosition="mid-pos">
        <ul>
          {data?.map((article: Article, i: number) => {
            return (
              <SwiperSlide tag="li" key={i} className="aspect-[9/16]">
                <Link href={"/"}>
                  <ArticleCard article={article} />
                </Link>
              </SwiperSlide>
            );
          })}
        </ul>
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
    <article className="w-full z-50 h-full relative rounded-sm overflow-hidden">
      <div className="img-hover w-full h-full m-0 p-0 relative">
        <Image
          src={article.article_cover}
          fill
          alt={"hello"}
          className="object-cover w-full m-0 h-full"
        />
      </div>
      <picture className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-30"></picture>
      <div className="absolute left-6 top-6 w-[calc(100%-(2*1.5rem))] sm:w-[85%] m-auto">
        <h5
          className="md:text-2xl text-xl font-display italic font-extrabold uppercase text-white"
          style={{ lineHeight: "1.5rem" }}
        >
          {article.article_title}
        </h5>
      </div>
    </article>
  );
};
