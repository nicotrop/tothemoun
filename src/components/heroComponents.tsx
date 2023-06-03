import Image from "next/image";
import { Article, arrayArticles, mockNavigation } from "@/utils/mockData";
import { SwiperHeroArticles } from "./sliders";
import { SwiperSlide } from "swiper/react";
import Link from "next/link";
import { ThemeButton } from "./global";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { EcomNav } from "./ecomNav";
import { GlobeAmericasIcon, UserIcon } from "@heroicons/react/24/outline";

export const HeroSliders = () => {
  return (
    <div className="max-h-screen w-full overflow-hidden relative">
      <EcomNav navigation={mockNavigation?.data?.navigation_item} />
      <div className="w-screen h-[calc(100vh-var(--marquee-height))] relative">
        <HeroSliderComp />
      </div>
      <MarqueeBanner>
        <div className="inline-flex items-center gap-2">
          <GlobeAmericasIcon className="w-5 h-5 text-secondary" />
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, at.
          </span>
        </div>
        <div className="inline-flex items-center gap-2">
          <UserIcon className="w-5 h-5" />
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, at.
          </span>
        </div>
        <div className="inline-flex items-center gap-2">
          <GlobeAmericasIcon className="w-5 h-5" />
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, at.
          </span>
        </div>
        <div className="inline-flex items-center gap-2">
          <UserIcon className="w-5 h-5" />
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, at.
          </span>
        </div>
        <div className="inline-flex items-center gap-2">
          <GlobeAmericasIcon className="w-5 h-5" />
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, at.
          </span>
        </div>
        <div className="inline-flex items-center gap-2">
          <UserIcon className="w-5 h-5" />
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, at.
          </span>
        </div>
        <div className="inline-flex items-center gap-2">
          <GlobeAmericasIcon className="w-5 h-5" />
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, at.
          </span>
        </div>
        <div className="inline-flex items-center gap-2">
          <UserIcon className="w-5 h-5" />
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, at.
          </span>
        </div>
      </MarqueeBanner>
    </div>
  );
};

export const HeroArticleCard = ({ article }: { article: Article }) => {
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

export const MarqueeBanner = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-scrolling-bar w-fit flex items-center overflow-hidden border-solid border-secondary border-y-2 bg-primary">
      <div className="w-fit flex items-center whitespace-nowrap overflow-hidden gap-4 relative animate-marquee font-display text-2xl italic text-secondary">
        {children}
      </div>
    </div>
  );
};

export const HeroSliderComp = () => {
  return (
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
  );
};
