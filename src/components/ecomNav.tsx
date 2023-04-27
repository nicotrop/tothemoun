import Image from "next/image";
import Link from "next/link";
import tothemounwhite from "../../public/assets/tothemounwhite.svg";
import tothemounsecond from "../../public/assets/tothemounsecond.svg";
import { navigationItemType } from "@/utils/mockData";
import { useState } from "react";
import { MenuDrawer } from "./menuDrawer";
import { Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Script from "next/script";

export const EcomNav = ({
  navigation,
}: {
  navigation: navigationItemType[];
}) => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="absolute top-0 h-header-height px-5 md:px-10 z-50 w-full font-semibold text-sm uppercase text-white bg-transparent transition-all ease-in-out duration-200"
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
        <Link href={"/"} className="flex justify-center w-28 h-fit">
          <Image
            src={tothemounwhite}
            width={124}
            height={60}
            alt="Name of the website"
            className="object-cover w-auto m-0"
            id="logoAbsolute"
          />
          <Image
            src={tothemounsecond}
            width={124}
            height={60}
            alt="Name of the website"
            className="object-cover w-auto m-0 hidden"
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
            <span>Mon histoire</span>
          </Link>
          <CountrySelector />
          <HeartIcon className="w-5 h-5 m-0 p-0 cursor-pointer" />
          <MagnifyingGlassIcon className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
      <MenuDrawer navigation={navigation} open={open} setOpen={setOpen} />
      {/* <StickyHeaderScript /> */}
    </header>
  );
};

const CountrySelector = () => {
  const [current, setCurrent] = useState("FR");

  const handleSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrent(e.currentTarget.value);
  };

  return (
    <div className="text-base md:text-sm font-medium">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex justify-between items-baseline gap-1 rounded-lg text-left focus:outline-none p-2 ${
                open && "hidden"
              }`}
            >
              <span>{current}</span>
              <ChevronDownIcon
                className={`${open ? "rotate-180 transform" : ""} h-3 w-3`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="z-20">
              {({ close }) => (
                <ul
                  className="w-full h-full flex flex-col items-center"
                  id="languageSelect"
                >
                  <li className="w-full px-2 rounded-sm">
                    <button
                      onClick={(e) => {
                        handleSelect(e);
                        close();
                      }}
                      value="FR"
                      className="hover:underline"
                    >
                      FR
                    </button>
                  </li>
                  <li className="w-full px-2 py-1 rounded-sm">
                    <button
                      onClick={(e) => {
                        handleSelect(e);
                        close();
                      }}
                      value="EN"
                      className="hover:underline"
                    >
                      EN
                    </button>
                  </li>
                </ul>
              )}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
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
                  headerMenu?.classList.remove("text-primary");
    
                  logoAbsolute?.classList.add("hidden");
                  logoFixed?.classList.remove("hidden");
              } else {
                  headerMenu?.classList.remove("bg-white");
                  headerMenu?.classList.remove("fixed");
                  headerMenu?.classList.remove("text-secondary");
                  headerMenu?.classList.add("bg-transparent");
                  headerMenu?.classList.add("text-primary");
                  headerMenu?.classList.add("absolute");
    
                  logoAbsolute?.classList.remove("hidden");
                  logoFixed?.classList.add("hidden");
              }
          })
      `}
    </Script>
  );
};

export const NavMenuComp = ({
  navigation,
  flexAlign = "justify-start",
}: {
  navigation: navigationItemType[];
  flexAlign?: "justify-start" | "justify-center" | "justify-end";
}) => {
  return (
    <ul className={`flex ${flexAlign} gap-4 w-full`}>
      {navigation?.map((elem: navigationItemType, i: number) => {
        let editedName;
        if (elem.item_name.includes("Que faire")) editedName = "Que faire?";
        else editedName = elem.item_name;
        return (
          <li key={i}>
            <Link href={"/"}>
              <span>{editedName}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
