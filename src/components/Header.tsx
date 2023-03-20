// import heroVideo from "../../public/herovideo.mp4";
import logo from "../../public/to-the-moun-logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBolt,
  faPersonBiking,
  faUtensils,
  faHouse,
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useMemo } from "react";
import Link from "next/link";

export type itemLinkType = {
  first_publication_date: string;
  id: string;
  isBroken: boolean;
  lang: string;
  last_publication_date: string;
  link_type: string;
  slug: string;
  tags: string[];
  type: string;
  uid: string;
};

export type itemType = {
  item_name: "Que faire en Guadeloupe?" | "Food & Drinks" | "Où loger?";
  item_link?: itemLinkType;
  item_icon?: string;
};

export const Header = ({ navigation }: { navigation: itemType[] }) => {
  const { pathname } = useRouter();
  const isHome = useMemo(() => pathname === "/", [pathname]);
  return (
    <header>
      <div
        className={`${
          isHome
            ? "w-screen h-[350px] sm:h-3/5 md:h-4/6 lg:h-5/6 xl:h-screen relative"
            : "bg-white px-4 py-2"
        }`}
      >
        {/* <video
          autoPlay
          muted
          loop
          className={`${!isHome ? "hidden" : "h-full w-full object-cover"}`}
        >
          <source src={heroVideo} type="video/mp4" />
        </video> */}
        <div
          className={`${
            isHome
              ? "absolute inset-0 bg-black opacity-40 lg:opacity-20 z-10"
              : "hidden"
          }`}
        ></div>
        {/* Mobile navigation */}
        <nav
          className={`flex lg:hidden ${
            isHome && "absolute top-0 z-20 py-3 px-4"
          } w-full overflow-hidden text-base items-center justify-between py-4`}
        >
          <FontAwesomeIcon
            icon={faBars}
            color={`${isHome ? "#FFFF" : "#000000"}`}
          />
          <div className="flex items-center gap-1">
            <Image
              src={logo}
              width={60}
              height={60}
              alt="To the Moun logo"
              className="w-9"
            />
            <h1
              className={`text-3xl font-black tracking-tighter uppercase ${
                isHome ? "text-white" : "text-black"
              }`}
            >
              to the moun
            </h1>
          </div>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            color={`${isHome ? "#FFFF" : "#000000"}`}
          />
        </nav>
        {/* Desktop navigation */}
        <nav
          className={`hidden lg:flex ${
            isHome && "absolute top-8 z-20 left-14"
          }  py-2 gap-6 text-base`}
        >
          <Link href={"/"}>
            <Image
              src={logo}
              width={60}
              height={60}
              alt="To the Moun logo"
              className="h-fit p-0"
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
              {navigation?.map((item: itemType, i: number) => {
                return (
                  <Link key={i} href={`${item.item_link?.slug}`}>
                    <li className="flex items-center justify-start gap-2 border-solid border-2 border-black bg-white py-1 px-3 h-11">
                      <NavIcon item={item} />
                      <span>{item.item_name}</span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
      {!isHome && <hr className="border-t-2 border-solid border-black mx-4" />}
    </header>
  );
};

export const NavIcon = ({ item }: { item: itemType }) => {
  switch (item.item_name) {
    case "Que faire en Guadeloupe?":
      return <FontAwesomeIcon icon={faPersonBiking} />;
    case "Food & Drinks":
      return <FontAwesomeIcon icon={faUtensils} />;
    case "Où loger?":
      return <FontAwesomeIcon icon={faHouse} />;
    default:
      return <FontAwesomeIcon icon={faBolt} />;
  }
};
