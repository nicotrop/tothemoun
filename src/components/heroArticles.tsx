import { Article, mockArticleSectionData } from "@/utils/mockData";
import Link from "next/link";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { SwiperHeroCarousel } from "@/components/sliders";

import "swiper/css";

const MockCarouselHero = () => {
  const data = mockArticleSectionData.articles;
  return (
    <div className=" w-full absolute bottom-4">
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
  let charLimit = 40;
  let title;
  let titleArr = article.article_title.split("");
  title =
    titleArr.length > charLimit &&
    titleArr.filter((char, i) => charLimit > i).join("") + "...";

  return (
    <div className={`flex flex-col items-start gap-2 bg-white z-1000 p-3`}>
      <div className="w-full z-50 flex justify-between gap-2 text-ellipsis">
        <Link href={"/"} className="img-hover w-full flex-1">
          <Image
            src={article.article_cover}
            height={350}
            width={350}
            alt={article.article_title}
            className="object-cover min-w-[122px] h-auto"
          />
        </Link>
        <div className="flex-1">
          <Link href={"/"} className="text-hover max-h-[100px] text-ellipsis">
            <h5
              className="text-base lg:text-lg xl:text-xl font-title font-bold lg:uppercase tracking-tighter"
              style={{ lineHeight: "1.5rem" }}
            >
              {title}
            </h5>
          </Link>
          <Link href={`/`} className="text-hover">
            <span className="text-xs tracking-tight">{`by ${article.article_author.author_first_name} ${article.article_author.author_last_name} `}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MockCarouselHero;
