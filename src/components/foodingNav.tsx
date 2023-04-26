import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.svg";
import tothemoun from "../../public/assets/tothemoun.svg";
import { navigationItemType } from "@/utils/mockData";
import { useState } from "react";
import { MenuDrawer } from "./menuDrawer";

export const FoodingNav = ({
  navigation,
}: {
  navigation: navigationItemType[];
}) => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full border-solid border-black border-b-2">
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
          className="flex justify-center max-w-[192px] xs:max-w-[275px] sm:max-w-none"
        >
          <Image
            src={tothemoun}
            width={275}
            height={70}
            alt="Name of the website"
            className="object-cover w-auto m-0 text-black h-fit"
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
          {navigation?.map((elem: navigationItemType, i: number) => {
            return (
              <li key={i} className="inline-block mx-2">
                <Link
                  href={"/"}
                  className="font-semibold text-sm hover:bg-primary hover:font-bold hover:text-secondary hover:rounded-sm hover:transition hover:ease-in-out hover:duration-15000 px-2 py-2"
                >
                  <span>{elem.item_name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <MenuDrawer navigation={navigation} open={open} setOpen={setOpen} />
    </nav>
  );
};
