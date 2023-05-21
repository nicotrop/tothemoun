import { ReactNode } from "react";
import { Wrapper } from "./global";
import Image from "next/image";
import { arrayArticles } from "@/utils/mockData";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faPinterest,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const VanityHero = () => {
  return (
    <Wrapper
      padding={false}
      className="h-auto lg:h-[calc(100vh-(var(--header-height)))] lg:px-wrapper_x m-auto py-0 lg:py-wrapper_y"
    >
      {/* Desktop */}
      <div className="hidden lg:flex gap-10">
        <LeftColumn />
        <MainColumn />
        <RightColumn />
      </div>
      {/* Mobile */}
      <div className="flex flex-col gap-5 lg:gap-8 h-full lg:hidden">
        <MainColumn />
        <div className="px-wrapper_x flex flex-col gap-8">
          <LeftColumn />
          <RightColumn />
        </div>
      </div>
    </Wrapper>
  );
};

const SideColumn = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full lg:min-w-[225px] lg:w-4/12 flex flex-col lg:h-full">
      {children}
    </div>
  );
};

const MainColumn = () => {
  return (
    <div className="lg:flex-grow flex flex-col lg:h-fit">
      <Link
        href={"/"}
        className="aspect-[9/12] sm:aspect-[6/4] relative rounded-sm"
      >
        <Image
          src={arrayArticles[0].article_cover}
          alt="cover"
          fill
          className="object-cover w-full"
        />
      </Link>
      <div className="flex flex-col lg:h-fit px-wrapper_x lg:px-0">
        {arrayArticles[0].tags && (
          <span className="pt-5 pb-2 text-xs font-semibold font-title uppercase">
            {arrayArticles[0]?.tags[0]}
          </span>
        )}
        <Link href={"/"}>
          <h3 className="pb-2 text-3xl font-extrabold font-title leading-tight tracking-tighter">
            {arrayArticles[0].article_title}
          </h3>
        </Link>
        <p className="p-0 m-0 text-base">{arrayArticles[0].preview}</p>
        <hr className="mt-8 lg:my-5 border-solid border-t-2 border-gray-200" />
        <span className="hidden lg:block pb-2 text-xs font-semibold font-title uppercase">
          #TOTHEMOUN
        </span>
        <SocialImageGrid />
        <div className="hidden lg:inline-flex items-center gap-2 text-sm font-semibold pt-2">
          <span>Follow us on socials:</span>
          <SocialIcon socialName="Instagram" />
          <SocialIcon socialName="TikTok" />
          <SocialIcon socialName="Pinterest" />
          <SocialIcon socialName="Email" />
        </div>
      </div>
    </div>
  );
};

const LeftColumn = () => {
  return (
    <SideColumn>
      <Link href={"/"} className="aspect-[6/4] relative rounded-sm">
        <Image
          src={arrayArticles[0].article_cover}
          alt="cover"
          fill
          className="object-cover w-full aspect-[6/4]"
        />
      </Link>
      {arrayArticles[0].tags && (
        <span className="pt-5 pb-2 text-xs font-semibold font-title uppercase">
          {arrayArticles[0]?.tags[0]}
        </span>
      )}
      <Link href={"/"}>
        <h3 className="pb-2 text-xl font-extrabold font-title leading-tight tracking-tighter">
          {arrayArticles[0].article_title}
        </h3>
      </Link>
      <hr className="my-5 border-solid border-t-2 border-gray-200" />
      <Link href={"/"} className="aspect-[6/4] relative rounded-sm">
        <Image
          src={arrayArticles[0].article_cover}
          alt="cover"
          fill
          className="object-cover w-full aspect-[6/4]"
        />
      </Link>
      {arrayArticles[0].tags && (
        <span className="pt-5 pb-2 text-xs font-semibold font-title uppercase">
          {arrayArticles[0]?.tags[0]}
        </span>
      )}
      <Link href={"/"}>
        <h3 className="pb-2 text-xl font-extrabold font-title leading-tight tracking-tighter">
          {arrayArticles[0].article_title}
        </h3>
      </Link>
    </SideColumn>
  );
};

const RightColumn = () => {
  return (
    <SideColumn>
      <MobileSeperator />
      <div className="pb-4 pt-4 px-2">
        <h3 className="text-center uppercase text-xl font-bold font-title leading-tight tracking-tighter">
          trending
        </h3>
      </div>
      <ArticleTextElem />
      <ArticleTextElem />
      <ArticleTextElem />
      <SponsoredElem />
    </SideColumn>
  );
};

const SocialImageGrid = ({ className }: { className?: string }) => {
  return (
    <div className={`hidden lg:flex flex-wrap gap-2 w-full h-max ${className}`}>
      <Link
        href={"/"}
        className="rounded-sm object-cover w-[calc((100%/4)-((8px*3)/4))] aspect-square relative"
      >
        <Image src={arrayArticles[0].article_cover} alt="cover article" fill />
      </Link>
      <Link
        href={"/"}
        className="rounded-sm object-cover w-[calc((100%/4)-((8px*3)/4))] aspect-square relative"
      >
        <Image src={arrayArticles[0].article_cover} alt="cover article" fill />
      </Link>
      <Link
        href={"/"}
        className="rounded-sm object-cover w-[calc((100%/4)-((8px*3)/4))] aspect-square relative"
      >
        <Image src={arrayArticles[0].article_cover} alt="cover article" fill />
      </Link>
      <Link
        href={"/"}
        className="rounded-sm object-cover w-[calc((100%/4)-((8px*3)/4))] aspect-square relative"
      >
        <Image src={arrayArticles[0].article_cover} alt="cover article" fill />
      </Link>
    </div>
  );
};

const ArticleTextElem = () => {
  return (
    <Link href={"/"}>
      {arrayArticles[0].tags && (
        <span className="pt-5 pb-2 text-xs font-semibold font-title uppercase">
          {arrayArticles[0]?.tags[0]}
        </span>
      )}
      <h4 className="pb-2 text-xl font-semibold font-title leading-tight tracking-tighter">
        {arrayArticles[0].article_title}
      </h4>
      <hr className="my-5 border-solid border-t-2 border-gray-200" />
    </Link>
  );
};

const SponsoredElem = () => {
  return (
    <div className="h-auto pb-5 flex flex-col items-center text-center">
      {arrayArticles[0].tags && (
        <span className="pb-5 lg:pb-2 text-xs font-semibold font-title uppercase">
          Sponsored
        </span>
      )}
      <h5 className="pb-5 m-0 text-base font-medium ">
        {arrayArticles[0].preview}
      </h5>
      <Link href={"/"} className="aspect-[9/12] w-3/5 relative max-h-[400px]">
        <Image
          src={arrayArticles[0].article_cover}
          alt="cover"
          fill
          className="object-cover w-full aspect-[9/16]"
        />
      </Link>
      <Link href={"/"} className="pt-2">
        <span className="text-xs font-semibold font-title uppercase underline">
          Découvrez ici
        </span>
      </Link>
    </div>
  );
};

const MobileSeperator = () => {
  return (
    <hr className="border-solid border-gray-200 border-t-2 pt-5 lg:hidden" />
  );
};

const SocialIcon = ({ socialName }: { socialName: string }) => {
  switch (socialName) {
    case "Instagram":
      return <FontAwesomeIcon icon={faInstagram} />;
    case "TikTok":
      return <FontAwesomeIcon icon={faTiktok} />;
    case "Pinterest":
      return <FontAwesomeIcon icon={faPinterest} />;
    case "Email":
      return <FontAwesomeIcon icon={faEnvelope} />;
    default:
      return <div>Icon not found</div>;
  }
};
