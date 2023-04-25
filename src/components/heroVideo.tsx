import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import logo from "../../public/assets/logo.svg";
import Link from "next/link";
import { mockNavigation, navigationItemType } from "@/utils/mockData";
import NavMenu from "./mobileNav";
import { YelpNav } from "./yelpNav";
import MockCarouselHero from "./heroArticles";

export const HeroVideo = () => {
  return (
    <header className="w-screen overflow-hidden">
      <div
        // className={`w-screen h-[350px] sm:h-3/5 md:h-4/6 lg:h-5/6 xl:h-screen relative`}
        className={`w-screen aspect-[9/16] md:aspect-auto relative`}
        style={{
          borderBottom: `2px solid black`,
        }}
      >
        <MockCarouselHero />
        <div
          className="h-full"
          style={{
            backgroundColor: "#000000",
          }}
        >
          <video
            autoPlay
            muted
            loop
            className={`h-full w-full object-cover z-0 bg-black opacity-50`}
          >
            <source
              src="https://res.cloudinary.com/dygjptmlc/video/upload/v1682427097/herovideo_dmthx4.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        {/* Mobile navigation */}
        <NavMenu
          navigation={mockNavigation?.data?.navigation_item}
          logo={logo}
        />
        {/* Desktop navigation */}
        <YelpNav
          navigation={mockNavigation?.data?.navigation_item}
          logo={logo}
        />
      </div>
    </header>
  );
};

export default HeroVideo;
