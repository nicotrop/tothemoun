import logo from "../../public/assets/logo.svg";
import { mockNavigation } from "@/utils/mockData";
import NavMenu from "./mobileNav";
import { YelpNav } from "./yelpNav";
import MockCarouselHero from "./heroArticles";

export const HeroVideo = () => {
  return (
    <header className="w-screen overflow-hidden relative">
      <div
        className={`w-screen max-h-[85vh] min-h-[65vh] aspect-[9/16] md:aspect-auto xl:max-h-none relative`}
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
      </div>

      {/* Mobile navigation */}
      <NavMenu navigation={mockNavigation?.data?.navigation_item} logo={logo} />

      {/* Desktop navigation */}
      <YelpNav navigation={mockNavigation?.data?.navigation_item} logo={logo} />
    </header>
  );
};

export default HeroVideo;
