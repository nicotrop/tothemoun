import { Article, mockArticleSectionData } from "@/utils/mockData";
import { SectionTitle, SectionTitleContainer, Wrapper } from "./global";
import Link from "next/link";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { SwiperImprovedCarousel } from "@/components/sliders";

import "swiper/css";

const MockCarousel3 = () => {
  const data = mockArticleSectionData.articles;
  return (
    <Wrapper
      padding={false}
      className="box-content overflow-hidden border-t-2 border-solid border-black w-full"
    >
      <SwiperImprovedCarousel btnPosition="mid-pos">
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
    <div className="w-full z-50 h-[340px] relative">
      <Link href={"/"} className="img-hover w-full m-0 p-0">
        <Image
          src={article.article_cover}
          height={350}
          width={350}
          alt={article.article_title}
          className="object-cover w-full m-0 h-full"
        />
      </Link>
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-30"></div>
      <div className="absolute left-4 top-4 w-[85%]">
        <h5
          className="md:text-2xl text-base font-title font-extrabold uppercase tracking-tight text-white"
          style={{ lineHeight: "1.5rem" }}
        >
          {article.article_title}
        </h5>
      </div>
    </div>
  );
};

export default MockCarousel3;
