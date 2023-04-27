import { mockNavigation } from "@/utils/mockData";
import MockCarouselHero from "./heroArticles";
import { FoodingNav } from "./foodingNav";

export const HeroVideo = () => {
  return (
    <header className="w-screen overflow-hidden relative border-t-2 border-black border-solid">
      <FoodingNav navigation={mockNavigation?.data?.navigation_item} />
      <div
        className={`w-screen h-[calc(100vh-((var(--fooding-height))+250px))] relative border-solid border-b-2 border-b-black`}
      >
        <HeroVideoComp />
      </div>
      <MockCarouselHero />
    </header>
  );
};

export default HeroVideo;

export const HeroVideoComp = () => {
  return (
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
        className={`h-full w-full object-cover bg-black opacity-50`}
      >
        <source
          src="https://res.cloudinary.com/dygjptmlc/video/upload/v1682427097/herovideo_dmthx4.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};
