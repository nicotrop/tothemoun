import Image from "next/image";
import logo from "../../public/assets/logo.svg";
import { Article, arrayArticles, mockNavigation } from "@/utils/mockData";
import NavMenu from "./mobileNav";
import { SwiperHeroArticles } from "./sliders";
import { SwiperSlide } from "swiper/react";
import Link from "next/link";
import { ThemeButton } from "./global";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export const HeroSliders = () => {
  return (
    <header className="w-screen overflow-hidden relative">
      <div
        className={`w-screen max-h-[85vh] aspect-[9/16] md:aspect-auto lg:aspect-video relative`}
        style={{
          borderBottom: `2px solid black`,
        }}
      >
        <SwiperHeroArticles>
          {arrayArticles?.map((elem: Article, i: number) => {
            return (
              <SwiperSlide key={i} className="relative">
                <Image
                  src={elem.article_cover}
                  alt={elem.article_title}
                  className="object-cover w-full m-0"
                  fill
                  sizes="100vw"
                />
                <div className="bg-gray-800 opacity-30 absolute inset-0 w-full"></div>
                <HeroArticleCard article={elem} />
              </SwiperSlide>
            );
          })}
        </SwiperHeroArticles>
      </div>

      {/* Mobile navigation */}
      <NavMenu navigation={mockNavigation?.data?.navigation_item} logo={logo} />

      {/* Desktop navigation */}
      {/* <YelpNav navigation={mockNavigation?.data?.navigation_item} logo={logo} /> */}
    </header>
  );
};

export default HeroSliders;

const HeroArticleCard = ({ article }: { article: Article }) => {
  return (
    <div className="absolute bottom-4 py-8 px-4 md:px-4 max-w-xl flex flex-col gap-3">
      <article className="text-primary from-transparent">
        <Link href="/" className="text-hover-light">
          <h2 className="text-3xl uppercase tracking-tight font-bold">
            {article.article_title}
          </h2>
        </Link>
        <span className="text-sm md:text-base">
          {" by "}
          {article.article_author.author_first_name}{" "}
          {article.article_author.author_last_name}
        </span>
      </article>
      <ThemeButton>
        <Link href={`/`}>Read More</Link>
      </ThemeButton>
    </div>
  );
};
