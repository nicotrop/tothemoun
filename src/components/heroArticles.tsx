import { Article, mockArticleSectionData } from "@/utils/mockData";
import Link from "next/link";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { SwiperHeroCarousel } from "@/components/sliders";

import "swiper/css";

const MockCarouselHero = () => {
  const data = mockArticleSectionData.articles.filter((elem, i) => i < 5);
  return (
    <div className="w-full block bottom-4 h-fit">
      <SwiperHeroCarousel>
        {data?.map((article: Article, i: number) => {
          return (
            <SwiperSlide key={i}>
              <ArticleCard article={article} />
            </SwiperSlide>
          );
        })}
      </SwiperHeroCarousel>
    </div>
  );
};

export const ArticleCard = ({
  article,
}: {
  article: Article;
  type?: string;
}) => {
  let charLimit = 50;
  let title;
  let titleArr = article.article_title.split("");
  title =
    titleArr.length > charLimit &&
    titleArr.filter((char, i) => charLimit > i).join("") + "...";

  return (
    <div
      className={`flex flex-col items-start h-full gap-2 bg-white z-1000 p-3 rounded-sm`}
    >
      <div className="w-full z-50 flex flex-col justify-between gap-2 text-ellipsis">
        <Link href={"/"} className="img-hover w-full flex-1">
          <Image
            src={article.article_cover}
            height={350}
            width={350}
            alt={article.article_title}
            className="object-cover w-full h-auto"
          />
        </Link>
        <div className="flex-2">
          <Link href={"/"} className="text-hover">
            <h5
              className="text-base lg:text-lg font-title font-bold tracking-tight"
              style={{ lineHeight: "1.5rem" }}
            >
              {title}
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MockCarouselHero;
