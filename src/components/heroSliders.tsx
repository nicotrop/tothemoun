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
import {
  ChevronDoubleRightIcon,
  GlobeAmericasIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { HeroVideoComp } from "./heroVideo";

export const HeroSliders = () => {
  return (
    <div className="max-h-screen overflow-hidden relative">
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

export const EcomVideo = () => {
  return (
    <div className="max-h-screen overflow-hidden relative">
      <EcomNav navigation={mockNavigation?.data?.navigation_item} />
      <div className="w-screen h-[calc(100vh-var(--marquee-height))] relative">
        <HeroVideoComp />
        <div className="absolute left-[calc((100vw-(300px))/2)] top-[calc((100vh-(270px))/2)] max-w-[300px] w-full text-white m-0">
          <h1 className="m-0 font-display text-6xl tracking-tighter leading-[60px] text-center">
            Lorem ipsum.
          </h1>
          <p className="m-0 uppercase tracking-wider leading-5 font-semibold text-center mt-3 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ut!
          </p>
          <button className="focus:outline-none outline-none border-none h-fit w-full flex justify-center cursor-pointer">
            <Link
              href={"/"}
              className="flex items-center gap-2 justify-center rounded-sm h-11 py-0 px-4 font-semibold text-sm tracking-wider uppercase font-title text-secondary bg-white whitespace-nowrap border-solid border-white border-2 hover:bg-transparent hover:text-white ease-in-out duration-300"
            >
              <span>{"Découvrir les plages"}</span>
              <ChevronDoubleRightIcon className="w-3 h-3" />
            </Link>
          </button>
        </div>
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
