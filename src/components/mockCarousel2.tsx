import { Article, mockArticleSectionData } from "@/utils/mockData";
import { SectionTitle, SectionTitleContainer, Wrapper } from "./global";
import Link from "next/link";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { SwiperCarousel, SwiperImprovedCarousel } from "@/components/sliders";

import "swiper/css";

const MockCarousel2 = () => {
  const data = mockArticleSectionData.articles;
  return (
    <Wrapper
      padding={false}
      className="overflow-hidden border-t-2 border-solid border-black pl-5 pr-0"
    >
      <SwiperImprovedCarousel>
        {data?.map((article: Article, i: number) => {
          return (
            <SwiperSlide key={i} className="last-of-type:pr-5">
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
            className="object-cover w-full m-0"
          />
        </Link>
      </div>
      <div className="flex flex-col items-start pb-4 min-h-[40%]">
        <Link href={"/"} className="text-hover">
          <h5
            className="md:text-lg text-base font-title font-bold uppercase tracking-tight"
            style={{ lineHeight: "1.5rem" }}
          >
            {article.article_title}
          </h5>
        </Link>
        <div className="w-full flex items-center">
          <Link href={`/`} className="text-hover">
            <span className="text-xs tracking-tight">{`by ${article.article_author.author_first_name} ${article.article_author.author_last_name} `}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MockCarousel2;
