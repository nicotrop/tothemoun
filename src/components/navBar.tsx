import Link from "next/link";
import { navigationItemType } from "@/utils/mockData";
import { useState } from "react";
import { MenuDrawer } from "./menuDrawer";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Script from "next/script";
import { PrismicNextImage } from "@prismicio/next";
import { CountrySelector, NavMenuComp } from "./ecomNav";
import { ImageFieldImage } from "@prismicio/types";

export const NavBar = ({
  navigation,
  logo,
}: {
  navigation: navigationItemType[];
  logo?: ImageFieldImage;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="h-header-height px-5 md:px-10 z-50 w-screen font-semibold text-sm uppercase text-secondary bg-white transition-all ease-in-out duration-200"
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
          <PrismicNextImage
            field={logo}
            width={124}
            height={60}
            className="object-cover w-auto m-0"
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
      <MenuDrawer navigation={navigation} open={open} setOpen={setOpen} />
      {/* <StickyHeaderScript /> */}
    </header>
  );
};

// const StickyHeaderScript = () => {
//   return (
//     <Script id="sticky-header" strategy="lazyOnload">
//       {`
//           const headerMenu = document.querySelector("#ecomNav");
//           const logoAbsolute = document.querySelector("#logoAbsolute");
//           const logoFixed = document.querySelector("#logoFixed");
//           let scrollPosition = window.scrollY;
//           let menuPosition;
//           if (scrollPosition > 0) {
//             menuPosition = headerMenu?.getBoundingClientRect()?.top + headerMenu?.getBoundingClientRect()?.height + scrollPosition;
//           } else {
//             menuPosition = headerMenu?.getBoundingClientRect()?.top + headerMenu?.getBoundingClientRect()?.height;
//           }
//           window.addEventListener("scroll", () => {
//               scrollPosition = window.scrollY;
//               if (scrollPosition > menuPosition ) {
//                   headerMenu?.classList.add("fixed");
//                   headerMenu?.classList.add("top-0");
//               } else {
//                   headerMenu?.classList.remove("fixed");
//                   headerMenu?.classList.remove("top-0");
//               }
//           })
//       `}
//     </Script>
//   );
// };
