import React, { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.HomeHeroSlice} HomeHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HomeHeroSlice>} HomeHeroProps
 * @param { HomeHeroProps }
 */

export const HomeHero = ({ slice }: SliceComponentProps) => {
  console.log(slice);

  const navigation = useMemo(() => {
    return slice?.primary?.navigation?.data?.navigation_item;
  }, [slice]);

  return (
    <header>
      <div
        className={`w-screen h-[350px] sm:h-3/5 md:h-4/6 lg:h-5/6 xl:h-screen relative border-solid border-black border-2`}
      >
        <video autoPlay muted loop className={`h-full w-full object-cover z-0`}>
          <source src={slice?.primary?.hero_video?.url} type="video/mp4" />
        </video>
        <div
          className={"absolute inset-0 lg:opacity-20 z-10"}
          style={{
            backgroundColor: `${slice?.primary?.opacity_color}`,
            opacity: `${slice?.primary?.opacity_percentage / 100}`,
          }}
        ></div>
        {/* Mobile navigation */}
        <nav
          className={`flex lg:hidden absolute top-0 z-20 py-3 px-4 w-full overflow-hidden text-base items-center justify-between text-white`}
        >
          <FontAwesomeIcon icon={faBars} color={`#FFFF`} />
          <div className="flex items-center gap-1">
            <PrismicNextImage
              field={slice?.primary?.logo}
              width={40}
              height={40}
              className="object-contain aspect-square w-auto"
            />
            <h1
              className={`text-3xl font-black tracking-tighter uppercase text-white"
              }`}
            >
              to the moun
            </h1>
          </div>
          <FontAwesomeIcon icon={faMagnifyingGlass} color={`#FFFF`} />
        </nav>
        {/* Desktop navigation */}
        <nav
          className={`hidden lg:flex absolute top-8 z-20 left-14 py-2 gap-6 text-base`}
        >
          <Link href={"/"}>
            <PrismicNextImage
              field={slice?.primary?.logo}
              width={60}
              height={60}
              className="object-contain aspect-square w-auto"
            />
          </Link>
          <div className="flex flex-col justify-center">
            <div className="flex items-center px-4 py-2 h-11 border-solid border-black border-2 bg-white">
              <FontAwesomeIcon icon={faSearch} />
              <input
                className="w-full px-2 active:outline-none outline-none"
                type="text"
                name="search"
                id="searchBar"
              />
            </div>
            <ul className="flex gap-1 mt-1">
              {/* {navigation?.map((item: itemType, i: number) => { */}
              {navigation?.map((elem: any, i: number) => {
                return (
                  <Link key={i} href={`${elem.item_link?.slug}`}>
                    <li className="flex items-center justify-start gap-2 border-solid border-2 border-black bg-white py-1 px-3 h-11">
                      <PrismicNextImage
                        field={elem?.item_icon}
                        width={20}
                        height={20}
                      />
                      <span>{elem.item_name}</span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </nav>
        <div className="custom-text-class text-white md:max-w-[800px] border-solid border-2 border-black px-4 py-2">
          <h1>{slice?.primary?.header[0]?.text}</h1>
          <p>{slice?.primary?.subheader[0]?.text}</p>
        </div>
      </div>
    </header>
  );
};

export default HomeHero;
