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
  ArrowLongDownIcon,
  ChevronDoubleRightIcon,
  GlobeAmericasIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Script from "next/script";

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

export const HeroVideo = () => {
  return (
    <div className="overflow-hidden relative">
      <EcomNav navigation={mockNavigation?.data?.navigation_item} />
      <div className="w-screen h-[100vh] relative">
        <HeroVideoComp />
        <HeroTitleComp />
        <NextSectionBtn />
      </div>
    </div>
  );
};

export const HeroTitleComp = ({
  title = "Consectetur adipisicing",
  subtitle = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ut!",
}: {
  title?: string;
  subtitle?: string;
}) => {
  return (
    <div className="absolute left-[calc((100vw-(300px))/2)] top-[calc((100vh-(270px))/2)] max-w-[300px] w-full text-white m-0">
      <h1 className="font-display text-[70px] font-light tracking-tighter leading-[70px] text text-center italic">
        {title}
      </h1>
      <p className="uppercase tracking-wider leading-5 font-semibold text-center pt-6 pb-8">
        {subtitle}
      </p>
      <button className="focus:outline-none outline-none border-none h-fit w-full flex justify-center cursor-pointer">
        <Link
          href={"/"}
          className="flex items-center gap-2 justify-center rounded-sm h-11 py-0 px-4 font-semibold text-sm tracking-wider uppercase font-title text-secondary bg-white whitespace-nowrap border-solid border-white border-2 hover:bg-[#FFFFFF26] hover:text-white ease-in-out duration-300"
        >
          <span>{"Découvrir les plages"}</span>
          <ChevronDoubleRightIcon className="w-3 h-3" />
        </Link>
      </button>
    </div>
  );
};

export const ScrollDown = () => {
  return (
    <Script id="down-arrow" strategy="lazyOnload">
      {`// Select all sections on the page
        const sections = document.querySelectorAll('section');

        // Add a click event listener to the button
        const btn = document.getElementById("down-btn");
        btn.addEventListener("click", () => {
          // Find the currently active section
          let currentSection = 0;
          sections.forEach((section, index) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop >= 0 && sectionTop < window.innerHeight) {
              currentSection = index;
            }
          });

          // Find the next section and scroll to it
          const nextSection = currentSection + 1;
          if (nextSection < sections.length) {
            sections[nextSection].scrollIntoView({ behavior: "smooth" });
          }
        });
      `}
    </Script>
  );
};

export const NextSectionBtn = () => {
  return (
    <button
      className="m-0 focus:outline-none outline-none py-2 px-4 animate-bounce"
      id="down-btn"
    >
      <ArrowLongDownIcon className="absolute left-[calc((100vw-(40px))/2)] bottom-14 h-10 text-white" />
      <ScrollDown />
    </button>
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

export const HeroVideoComp = () => {
  return (
    <div
      className="h-full"
      style={{
        backgroundColor: "#000000",
      }}
    >
      <video
        autoPlay
        muted
        loop
        className={`h-full w-full object-cover bg-black opacity-50`}
      >
        <source
          src="https://res.cloudinary.com/dygjptmlc/video/upload/v1682427097/herovideo_dmthx4.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};
