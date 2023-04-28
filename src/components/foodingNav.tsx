import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import tothemounblack from "../../public/assets/tothemounblack.svg";
import { navigationItemType } from "@/utils/mockData";
import { useState } from "react";
import { MenuDrawer } from "./menuDrawer";
import { NavMenuComp } from "./ecomNav";
import logo from "../../public/assets/logo.svg";

export const FoodingNav = ({
  navigation,
}: {
  navigation: navigationItemType[];
}) => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full h-[var(--fooding-height)] border-solid border-b-black border-b-2 px-5 sm:px-10 sm:flex flex-col justify-between gap-2 sm:pb-2">
      <div className="flex justify-between items-center gap-4 h-full">
        <button
          className="active:outline-none outline-none border-none h-fit"
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Open panel</span>
          <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
        </button>
        <Link href={"/"} className="flex gap-1 items-center sm:max-w-none">
          <Image
            src={logo}
            width={320}
            height={60}
            alt="Name of the website"
            className="object-cover w-11 hidden xs:block"
          />
          <Image
            src={tothemounblack}
            width={320}
            height={60}
            alt="Name of the website"
            className="object-cover w-44"
          />
        </Link>
        <button className="active:outline-none outline-none border-none h-fit">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="w-5 h-5 cursor-pointer"
          />
        </button>
      </div>
      <div className="w-full hidden sm:flex items-start justify-center">
        <NavMenuComp navigation={navigation} flexAlign="justify-center" />
      </div>
      <MenuDrawer navigation={navigation} open={open} setOpen={setOpen} />
    </nav>
  );
};
