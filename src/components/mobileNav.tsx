import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { navigationItemType } from "@/utils/mockData";
import { FontLogo } from "./global";
import { MenuDrawer } from "./menuDrawer";

export default function NavMenu({
  navigation,
  logo,
}: {
  navigation: navigationItemType[];
  logo: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex absolute top-0 lg:hidden z-10 py-8 px-4 w-full h-auto overflow-hidden text-base items-center justify-between text-white sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <button
        className="active:outline-none outline-none border-none"
        onClick={() => setOpen(true)}
      >
        <span className="sr-only">Open panel</span>
        <FontAwesomeIcon icon={faBars} className="w-5 h-auto" />
      </button>
      <div className="flex items-center h-6 gap-1">
        <Image
          src={logo}
          width={40}
          height={40}
          alt="logo"
          className="object-contain aspect-square h-full w-auto"
        />
        <FontLogo />
      </div>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="w-5 h-auto cursor-pointer"
      />
      <MenuDrawer navigation={navigation} open={open} setOpen={setOpen} />
    </nav>
  );
}
