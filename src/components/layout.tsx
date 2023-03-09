import { ReactNode } from "react";
import heroVideo from "../../public/herovideo.mp4";
import logo from "../../public/to-the-moun-logo.png";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBurger,
  faPersonHiking,
  faBed,
  faBolt,
  faPersonBiking,
  faUtensils,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

export const Layout = ({
  children,
  navigation,
}: {
  children: ReactNode;
  navigation: any;
}) => {
  return (
    <div>
      <section className="h-screen">
        <Header navigation={navigation} />
        <main>{children}</main>
      </section>
      <Footer />
    </div>
  );
};

const Header = ({ navigation }: any) => {
  return (
    <header className="h-full">
      <div className="relative min-h-[50%] max-h-full overflow-hidden">
        <video autoPlay muted loop>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
        <nav className="absolute top-10 left-14 z-20 flex gap-6 text-base">
          <Image
            src={logo}
            width={60}
            height={60}
            alt="To the Moun logo"
            className="h-fit p-0"
          />
          <div className="flex flex-col justify-center">
            <div className="flex items-center p-2 h-11 border-solid border-black border-2 bg-white">
              <FontAwesomeIcon icon={faSearch} />
              <input
                className="w-full pl-1 active:outline-none outline-none"
                type="text"
                name="search"
                id="searchBar"
              />
            </div>
            <ul className="flex gap-1 mt-1">
              {navigation?.data?.navigation_item?.map(
                (item: any, i: number) => {
                  console.log(item);
                  return (
                    <li
                      key={i}
                      className="flex items-center justify-start gap-2 border-solid border-2 border-black bg-white py-1 px-3 h-11"
                    >
                      <NavIcon item={item} />
                      <span>{item.item_name}</span>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

const NavIcon = ({
  item,
}: {
  item: {
    item_name: "Que faire en Guadeloupe?" | "Food & Drinks" | "Où loger?";
    item_url?: string;
    item_icon?: string;
  };
}) => {
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

const Footer = () => {
  return <footer>Footer</footer>;
};
