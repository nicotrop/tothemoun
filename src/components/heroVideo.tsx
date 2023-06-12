import { mockNavigation } from "@/utils/mockData";
import { EcomNav } from "./ecomNav";
import {
  ArrowLongDownIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import { BlogPostDocument, VideoHeroSlice } from "types.generated";
import { FilledLinkToMediaField, KeyTextField } from "@prismicio/types";
import { PrismicLink } from "@prismicio/react";
import Script from "next/script";

export const HeroVideo = ({
  primary,
}: {
  primary: VideoHeroSlice["primary"];
}) => {
  const { blog_post, cta, show_down_arrow, subtitle, title, video } = primary;

  const videoTyped = video as unknown as FilledLinkToMediaField;
  const blogTyped = blog_post as unknown as BlogPostDocument;
  let finalTitle;

  if (!title && blogTyped?.data.article_title) {
    finalTitle = blogTyped?.data.article_title;
  } else {
    finalTitle = title;
  }

  return (
    <div className="overflow-hidden relative">
      {/* TODO get navbar conditionally from context - pass it here only if set background transparent */}
      <EcomNav navigation={mockNavigation?.data?.navigation_item} />
      <div className="w-screen h-[100vh] relative">
        <HeroVideoComp source={videoTyped.url} />
        <HeroTitleComp
          title={finalTitle}
          subtitle={subtitle}
          cta={cta}
          article={blogTyped}
        />
        {show_down_arrow && <NextSectionBtn />}
      </div>
    </div>
  );
};

export const HeroVideoComp = ({ source }: { source: string }) => {
  return (
    <div
      className="h-[calc(100%-var(--mobile-bottom-nav-height))] sm:h-full"
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
        <source src={source} type="video/mp4" />
      </video>
    </div>
  );
};

export const HeroTitleComp = ({
  title,
  subtitle,
  cta,
  article,
}: {
  title?: string | KeyTextField;
  subtitle?: string | KeyTextField;
  cta?: string | KeyTextField;
  article?: BlogPostDocument;
}) => {
  return (
    <div className="absolute left-[calc((100vw-(350px))/2)] top-[calc((100vh-(270px))/2)] max-w-[380px] w-full text-white m-0">
      <h2 className="font-display text-4xl md:text-4xl lg:text-6xl font-light tracking-tighter md:leading-8 lg:leading-[70px] text text-center italic">
        {title}
      </h2>
      {subtitle && (
        <p className="uppercase tracking-wider leading-5 font-semibold text-center pt-6 pb-8">
          {subtitle}
        </p>
      )}
      {article && (
        <button className="focus:outline-none outline-none border-none h-fit w-full flex justify-center cursor-pointer">
          <PrismicLink
            document={article}
            className="flex items-center gap-2 justify-center rounded-sm h-11 py-0 px-4 font-semibold text-sm tracking-wider uppercase font-title text-secondary bg-white whitespace-nowrap border-solid border-white border-2 hover:bg-[#FFFFFF26] hover:text-white ease-in-out duration-300"
          >
            <span>{cta}</span>
            <ChevronDoubleRightIcon className="w-3 h-3" />
          </PrismicLink>
        </button>
      )}
    </div>
  );
};

export const NextSectionBtn = () => {
  return (
    <button
      className="m-0 focus:outline-none outline-none py-2 px-4 animate-bounce"
      id="down-btn"
    >
      <ArrowLongDownIcon className="absolute left-[calc((100vw-(40px))/2)] bottom-14 h-10 text-white" />
      <ScrollDown />
    </button>
  );
};

export const ScrollDown = () => {
  return (
    <Script id="down-arrow" strategy="lazyOnload">
      {`// Select all sections on the page
        const sections = document.querySelectorAll('section');

        //Get navbar height
        const navHeight = document.getElementById("ecomNav").offsetHeight;

        // Add a click event listener to the button
        const btn = document.getElementById("down-btn");
        btn.addEventListener("click", () => {
          // Scroll down by 100vh
          window.scrollBy({
            top: window.innerHeight - navHeight,
            left: 0,
            behavior: 'smooth'
          });
        });
      `}
    </Script>
  );
};
