import Image from "next/image";
import logo from "../../public/assets/logo.svg";
import {
  Article,
  arrayArticles,
  mockNavigation,
  navigationItemType,
} from "@/utils/mockData";
import NavMenu from "./mobileNav";
import { SwiperHeroArticles } from "./sliders";
import { SwiperSlide } from "swiper/react";
import Link from "next/link";
import { ThemeButton } from "./global";
import tothemoun from "../../public/assets/tothemoun.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FoodingNav } from "./foodingNav";

export const HeroSliders = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      {/* <nav className="w-full border-solid border-black border-b-2">
        <div className="flex justify-between gap-4 mx-4 sm:h-28">
          <button
            className="active:outline-none outline-none border-none"
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">Open panel</span>
            <FontAwesomeIcon icon={faBars} className="w-5 h-auto" />
          </button>
          <Link
            href={"/"}
            className="flex flex-col justify-center max-w-[192px] xs:max-w-[275px] sm:max-w-none"
          >
            <Image
              src={tothemoun}
              width={275}
              height={70}
              alt="Name of the website"
              className="object-cover w-auto m-0 text-black"
            />
          </Link>
          <button className="active:outline-none outline-none border-none">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="w-5 h-auto cursor-pointer"
            />
          </button>
        </div>
        <div className="h-14 w-full hidden sm:flex flex-col items-start justify-center border-b-2 border-black border-solid">
          <ul className="w-full flex justify-center gap-2">
            {mockNavigation?.data?.navigation_item?.map(
              (elem: navigationItemType, i: number) => {
                return (
                  <li key={i} className="inline-block mx-2">
                    <Link
                      href={"/"}
                      className="font-semibold text-sm hover:bg-primary hover:rounded-sm hover:ease-in hover:duration-100 px-2 py-1"
                    >
                      <span>{elem.item_name}</span>
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </nav> */}
      <FoodingNav navigation={mockNavigation?.data?.navigation_item} />
      <div className="w-screen max-h-[85vh] aspect-[9/16] md:aspect-auto lg:aspect-video relative">
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
    </header>
  );
};

export default HeroSliders;

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
