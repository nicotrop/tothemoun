import Link from "next/link";
import { useState } from "react";
import { MenuDrawer } from "./menuDrawer";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { CountrySelector, NavMenuComp } from "./ecomNav";
import { ImageFieldImage } from "@prismicio/types";
import { NavigationDocumentDataNavigationItemItem } from "types.generated";
import Script from "next/script";
import Image from "next/image";
import tothemounwhite from "../../public/assets/tothemounwhite.svg";
import tothemounsecond from "../../public/assets/tothemounsecond.svg";

export const NavBar = ({
  navigation,
  logo,
  navType = "white",
}: {
  navigation: NavigationDocumentDataNavigationItemItem[];
  logo: ImageFieldImage;
  navType?: "transparent" | "white";
}) => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`h-header-height px-5 md:px-10 z-50 w-screen font-semibold text-sm uppercase transition-all ease-in-out duration-200 fixed top-0 ${
        navType === "transparent"
          ? "text-white bg-transparent"
          : "text-secondary bg-white"
      }`}
      id="ecomNav"
    >
      <div className="h-full flex justify-between items-center ease-in-out duration-75">
        {/* Mobile left hand side - burger + country selector */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            className="active:outline-none outline-none border-none h-fit"
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">Open panel</span>
            <Bars3Icon className="w-5 h-5" />
          </button>
          <CountrySelector />
        </div>
        {/* Destop left hand side - navigation menu */}
        <nav className="hidden md:block flex-1">
          <NavMenuComp navigation={navigation} />
        </nav>
        {/* Center component - logo with homepage link */}
        {/* TODO ADD WHITE AND COLORED LOGO */}
        <Link href={"/"} className="flex justify-center w-28 h-fit">
          <Image
            src={tothemounwhite}
            width={124}
            height={60}
            alt="Name of the website"
            className={`object-cover w-auto m-0 ${
              navType === "white" && "hidden"
            }`}
            id="logoAbsolute"
          />
          <Image
            src={tothemounsecond}
            width={124}
            height={60}
            alt="Name of the website"
            className={`object-cover w-auto m-0 ${
              navType === "transparent" && "hidden"
            }`}
            id="logoFixed"
          />
        </Link>
        {/* Mobile Right handside - Favorites + Search icons  */}
        <div className="flex gap-2 md:hidden">
          <MagnifyingGlassIcon className="w-5 h-5 cursor-pointer" />
          <HeartIcon className="w-5 h-auto cursor-pointer" />
        </div>
        {/* Desktop Right handside - Support pages, Favorites, Country selector, and Search */}
        <div className="hidden md:flex justify-end gap-4 flex-1 items-center">
          <Link href={"/"}>
            <span>About us</span>
          </Link>
          <CountrySelector />
          <HeartIcon className="w-5 h-5 m-0 p-0 cursor-pointer" />
          <MagnifyingGlassIcon className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
      <MenuDrawer
        navigation={navigation}
        open={open}
        setOpen={setOpen}
        logo={logo}
      />
      {navType === "transparent" && <StickyHeaderScript />}
    </header>
  );
};

const StickyHeaderScript = () => {
  return (
    <Script id="sticky-header" strategy="lazyOnload">
      {`
          const headerMenu = document.querySelector("#ecomNav");
          const logoAbsolute = document.querySelector("#logoAbsolute");
          const logoFixed = document.querySelector("#logoFixed");
          let scrollPosition = window.scrollY;
          let menuPosition;
          if (scrollPosition > 0) {
            menuPosition = headerMenu?.getBoundingClientRect()?.top + headerMenu?.getBoundingClientRect()?.height + scrollPosition;
          } else {
            menuPosition = headerMenu?.getBoundingClientRect()?.top + headerMenu?.getBoundingClientRect()?.height;
          }
          window.addEventListener("scroll", () => {
              scrollPosition = window.scrollY;
              if (scrollPosition > menuPosition ) {
                  headerMenu?.classList.add("bg-white");
                  headerMenu?.classList.add("fixed");
                  headerMenu?.classList.add("text-secondary");
                  headerMenu?.classList.remove("bg-transparent");
                  headerMenu?.classList.remove("absolute");
                  headerMenu?.classList.remove("text-white");
                  logoAbsolute?.classList.add("hidden");
                  logoFixed?.classList.remove("hidden");
              } else {
                  headerMenu?.classList.remove("bg-white");
                  headerMenu?.classList.remove("fixed");
                  headerMenu?.classList.remove("text-secondary");
                  headerMenu?.classList.add("bg-transparent");
                  headerMenu?.classList.add("text-white");
                  headerMenu?.classList.add("absolute");
                  logoAbsolute?.classList.remove("hidden");
                  logoFixed?.classList.add("hidden");
                  
              }
          })
      `}
    </Script>
  );
};
