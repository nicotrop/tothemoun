import heroVideo from "../../public/herovideo.mp4";
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

export const Header = ({ navigation }: any) => {
  return (
    <header>
      <div className="h-[350px] sm:h-3/5 md:h-4/6 lg:h-5/6 xl:h-screen relative border-solid border-red-500 border-2">
        <video autoPlay muted loop className="h-full w-full object-cover">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-40 lg:opacity-20 z-10"></div>
        {/* Mobile navigation */}
        <nav className="flex lg:hidden absolute w-full overflow-hidden z-20 text-base top-0 items-center justify-between py-4 px-4">
          <FontAwesomeIcon icon={faBars} color="#FFFF" />
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              width={60}
              height={60}
              alt="To the Moun logo"
              className="w-9"
            />
            <h1 className="text-3xl font-black tracking-tighter uppercase text-white">
              to the moun
            </h1>
          </div>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" color="#FFFF" />
          {/* </div> */}
        </nav>
        {/* Desktop navigation */}
        <nav className="hidden lg:flex absolute top-10 left-14 z-20 gap-6 text-base">
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

export const NavIcon = ({
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
