import React from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FooterSlice } from "types.generated";
import { Wrapper } from "@/components/global";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faPinterest,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const faIn = faInstagram as IconProp;
const faTik = faTiktok as IconProp;
const faPint = faPinterest as IconProp;

const Footer = ({ data }: SliceComponentProps<FooterSlice> | any) => {
  const year = new Date().getFullYear();

  const {
    background_color,
    input_border_color,
    input_btn_bg_color,
    input_text_input_color,
    text_color,
    newsletter_header,
    newsletter_description,
  } = data;

  const { data: about_menu } = data?.menu_about;
  const { data: seo_menu } = data?.menu_seo;
  const { data: socials } = data?.socials;

  return (
    <Wrapper
      className={`border-t-2 border-solid border-black`}
      style={{ backgroundColor: background_color, color: text_color }}
    >
      <footer className="flex flex-col justify-center gap-10 min-h-[400px]">
        {/* Desktop Main */}
        <div className="hidden lg:flex justify-evenly items-start gap-8 h-60">
          {/* Menu section */}
          <MenuSection menu={about_menu} />
          {/* Newsleter section */}
          <NewsleterSection
            cssProps={{
              input_border_color,
              input_btn_bg_color,
              input_text_input_color,
              background_color,
            }}
            data={{
              newsletter_header,
              newsletter_description,
            }}
          />
          <MenuSection menu={seo_menu} />
        </div>
        {/* Mobile Main */}
        <div className="flex flex-col w-full lg:hidden content-between gap-10 sm:w-[550px]">
          <div className="flex flex-col sm:flex-row gap-6 justify-between">
            <MenuSection menu={about_menu} />
            <MenuSection menu={seo_menu} />
          </div>
          <NewsleterSection
            cssProps={{
              input_border_color,
              input_btn_bg_color,
              input_text_input_color,
              background_color,
            }}
            data={{
              newsletter_header,
              newsletter_description,
            }}
          />
        </div>
        {/* Socials */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 w-full h-7 sm:items-center text-base">
          <div className="flex sm:items-center gap-4 w-fit sm:justify-end h-full">
            {socials.media_info.map((elem: any, index: number) => {
              return (
                <Link
                  key={index}
                  href={`${elem.social_link.url}`}
                  target="_blank"
                  className="h-[100%]"
                >
                  <SocialIcon socialName={elem.social_media} />
                </Link>
              );
            })}
          </div>
          <span className="uppercase w-fit">{`©${year}, To the moun 🌘.`}</span>
        </div>
      </footer>
    </Wrapper>
  );
};

const MenuSection = ({
  menu,
}: {
  menu: {
    // title: RichTextField | null | undefined;
    title: any;
    menu: any[];
  };
}) => {
  return (
    <div className="w-[fit-content] min-w-[215px] h-ful">
      <div className="h-10 flex items-end mb-6">
        <PrismicRichText field={menu.title} />
      </div>
      <ul className="flex flex-col gap-2">
        {menu.menu.map((elem: any, index: number) => {
          return (
            <li key={index}>
              <Link href={`/${elem.link.slug}`}>
                <span>{elem.text}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const NewsleterSection = ({
  data,
  cssProps,
}: {
  data: {
    // newsletter_header: RichTextField | null | undefined;
    newsletter_header: any;
    // newsletter_description: RichTextField | null | undefined;
    newsletter_description: any;
  };
  cssProps: {
    input_border_color: string;
    input_text_input_color: string;
    input_btn_bg_color: string;
    background_color: string;
  };
}) => {
  return (
    <div className="lg:w-1/2 h-full">
      <span className="h-10 flex customer-flex-center items-end mb-6">
        <PrismicRichText field={data.newsletter_header} />
      </span>
      <div className="custom-text-center leading-relaxed mb-8">
        <PrismicRichText field={data.newsletter_description} />
      </div>
      <form className="w-full flex customer-flex-center">
        <div
          className="w-full  sm:w-[60%] max-w-[330px] py-4 px-1 flex justify-around"
          style={{
            border: `2px solid ${cssProps.input_border_color}`,
          }}
        >
          <input
            id="emailInput"
            type="email"
            placeholder="Email"
            className="focus:outline-none w-[80%] bg-transparent"
            style={{ color: cssProps.input_text_input_color }}
          />
          <input
            type="submit"
            value={"＞"}
            className="text-sm font-black py-0 px-1 hover:cursor-pointer"
            style={{
              backgroundColor: cssProps.input_btn_bg_color,
              color: cssProps.background_color,
            }}
          />
        </div>
      </form>
    </div>
  );
};

type SocialName = "Instagram" | "TikTok" | "Pinterest" | "Email";

const SocialIcon = ({ socialName }: { socialName: SocialName }) => {
  switch (socialName) {
    case "Instagram":
      return <FontAwesomeIcon icon={faIn} className="h-[80%]" />;
    case "TikTok":
      return <FontAwesomeIcon icon={faTik} className="h-[80%]" />;
    case "Pinterest":
      return <FontAwesomeIcon icon={faPint} className="h-[80%]" />;
    case "Email":
      return <FontAwesomeIcon icon={faEnvelope} className="h-[80%]" />;
  }
};

export default Footer;
