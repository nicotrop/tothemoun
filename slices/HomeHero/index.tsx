import React, { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

// /**
//  * @typedef {import("@prismicio/client").Content.HomeHeroSlice} HomeHeroSlice
//  * @typedef {import("@prismicio/react").SliceComponentProps<HomeHeroSlice>} HomeHeroProps
//  * @param { HomeHeroProps }
//  */

export const HomeHero = ({ slice }: SliceComponentProps) => {
  const navigation = useMemo(() => {
    return slice?.primary?.navigation?.data?.navigation_item;
  }, [slice]);

  return (
    <header>
      <div
        className={`w-screen h-[350px] sm:h-3/5 md:h-4/6 lg:h-5/6 xl:h-screen relative`}
        style={{
          borderBottom: `2px solid black`,
        }}
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
          className={`flex lg:hidden absolute top-0 z-20 py-6 px-4 w-full h-auto overflow-hidden text-base items-center justify-between text-primary sm:px-6 md:px-8 lg:px-10 xl:px-12`}
        >
          <FontAwesomeIcon icon={faBars} />
          <div className="flex items-center h-6 gap-1">
            <PrismicNextImage
              field={slice?.primary?.logo}
              width={30}
              height={30}
              className="object-contain aspect-square h-full w-auto"
            />
            <h1
              className={`text-2xl font-extrabold uppercase text-white"
              }`}
            >
              to the moun
            </h1>
          </div>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </nav>
        {/* Desktop navigation */}
        <nav
          className={`hidden lg:flex absolute top-8 z-20 left-14 py-2 gap-6 text-base lg:px-8 xl:px-10`}
        >
          <Link href={"/"}>
            <PrismicNextImage
              field={slice?.primary?.logo}
              width={60}
              height={60}
              className="object-contain aspect-square w-auto h-auto border-solid"
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
              {navigation?.map((elem: any, i: number) => {
                return (
                  <Link key={i} href={`${elem.item_link?.slug}`}>
                    <li className="flex items-center justify-start gap-2 border-solid border-2 border-black bg-white py-1 px-3 h-11 w-auto">
                      <PrismicNextImage
                        field={elem?.item_icon}
                        className="object-contain w-4 h-auto"
                      />
                      <span>{elem.item_name}</span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HomeHero;
