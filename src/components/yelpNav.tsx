import { navigationItemType } from "@/utils/mockData";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export const YelpNav = ({
  navigation,
  logo,
}: {
  navigation: navigationItemType[];
  logo: string;
}) => {
  return (
    <nav
      className={`hidden lg:flex absolute top-8 z-20 left-14 py-2 gap-6 text-base lg:px-8 xl:px-10`}
    >
      <Link href={"/"}>
        <Image
          src={logo}
          width={60}
          height={60}
          alt="logo"
          className="object-contain aspect-square w-20 h-auto border-solid"
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
          {navigation?.map((elem: navigationItemType, i: number) => {
            return (
              <Link key={i} href={`${elem.item_link?.slug}`}>
                <li className="flex items-center justify-start gap-2 border-solid border-2 border-black bg-white py-1 px-3 h-11 w-auto">
                  <Image
                    src={elem.item_icon?.url}
                    width={20}
                    height={20}
                    alt="icon"
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
  );
};
