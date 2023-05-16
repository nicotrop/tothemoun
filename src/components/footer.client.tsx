"use client";

import React, { useEffect, useState } from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { Wrapper } from "@/components/global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faPinterest,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { createClient } from "prismicio";
import {
  FooterDocument,
  NavigationMenuDocumentDataMenuItem,
  SocialsDocumentDataMediaInfoItem,
} from "types.generated";
import { ContentRelationshipField, RichTextField } from "@prismicio/types";

const faIn = faInstagram as IconProp;
const faTik = faTiktok as IconProp;
const faPint = faPinterest as IconProp;

type NavigationMenuData = {
  title: RichTextField | null | undefined;
  menu: NavigationMenuDocumentDataMenuItem[];
};

type NavigationMenuField = ContentRelationshipField<"navigation_menu"> & {
  data: NavigationMenuData;
};

type SocialsData = {
  media_info: SocialsDocumentDataMediaInfoItem[];
};

type SocialsField = ContentRelationshipField<"socials"> & {
  data: SocialsData;
};

export default function FooterClient() {
  const [footerData, setFooterData] = useState<FooterDocument | null>(null);

  useEffect(() => {
    async function fetchFooterData() {
      try {
        const client = createClient();
        const footer = await client.getSingle("footer", {
          graphQuery: `
            {
              footer {
                ...footerFields
                menu_about {
                  ...on navigation_menu {
                    ...navigation_menuFields
                  }
                }
                menu_seo {
                  ...on navigation_menu {
                    ...navigation_menuFields
                  }
                }
                socials {
                  ...on socials {
                    ...socialsFields
                  }
                }
              }
            }
          `,
        });
        setFooterData(footer);
      } catch (error) {
        console.log(error);
      }
    }

    fetchFooterData();
  }, []);

  if (!footerData) {
    return <div>Loading...</div>;
  }

  const data = footerData?.data;

  if (!data) {
    return <div>Failed to download data...</div>;
  }

  const year = new Date().getFullYear();

  const {
    background_color,
    input_border,
    input_btn_bg,
    input_text,
    text_color,
    newsletter_header,
    newsletter_description,
    socials,
    menu_about,
    menu_seo,
  } = data;

  const menu_seo_data = menu_seo as NavigationMenuField;
  const menu_about_data = menu_about as NavigationMenuField;
  const socials_data = socials as SocialsField;

  return (
    <Wrapper
      className={`border-t-2 pb-8 border-solid border-black`}
      style={{
        backgroundColor: background_color ?? "#102F10",
        color: text_color ?? "#F7F1E7",
      }}
    >
      <footer className="flex flex-col justify-center gap-10 min-h-[400px]">
        {/* Desktop Main */}
        <div className="hidden lg:flex justify-between items-start gap-8 h-60">
          {/* Menu section */}
          <MenuSection data={menu_about_data?.data} />
          {/* Newsleter section */}
          <NewsleterSection
            cssProps={{
              input_border,
              input_btn_bg,
              input_text,
              background_color,
            }}
            data={{
              newsletter_header,
              newsletter_description,
            }}
          />
          <MenuSection data={menu_seo_data?.data} />
        </div>
        {/* Mobile Main */}
        <div className="flex flex-col w-full lg:hidden content-between gap-10 sm:w-[550px]">
          <div className="flex flex-col sm:flex-row gap-6 justify-between">
            <MenuSection data={menu_about_data?.data} />
            <MenuSection data={menu_seo_data?.data} />
          </div>
          <NewsleterSection
            cssProps={{
              input_border,
              input_btn_bg,
              input_text,
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
            {socials_data?.data?.media_info.map(
              (elem: SocialsDocumentDataMediaInfoItem, index: number) => {
                return (
                  <PrismicLink
                    key={index}
                    field={elem.social_link}
                    target={"_blank"}
                    className="h-[100%]"
                  >
                    <SocialIcon socialName={elem.social_media} />
                  </PrismicLink>
                );
              }
            )}
          </div>
          <span className="uppercase w-fit">{`©${year}, To the moun`}</span>
        </div>
      </footer>
    </Wrapper>
  );
}

type MenuSectionProps = {
  data: NavigationMenuData;
};

const MenuSection: React.FC<MenuSectionProps> = ({ data }) => {
  return (
    <div className="w-[fit-content] min-w-[215px] h-ful">
      <div className="h-10 flex items-end mb-6">
        <PrismicRichText field={data.title} />
      </div>
      <ul className="flex flex-col gap-2">
        {data?.menu?.map(
          (elem: NavigationMenuDocumentDataMenuItem, index: number) => {
            return (
              <li key={index}>
                <PrismicLink field={elem.link}>
                  <span>{elem.text}</span>
                </PrismicLink>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

type NewsleterSectionProps = {
  data: {
    newsletter_header: RichTextField | null | undefined;
    newsletter_description: RichTextField | null | undefined;
  };
  cssProps: {
    input_border: string | undefined | null;
    input_text: string | undefined | null;
    input_btn_bg: string | undefined | null;
    background_color: string | undefined | null;
  };
};

const NewsleterSection: React.FC<NewsleterSectionProps> = ({
  data,
  cssProps,
}) => {
  return (
    <div className="lg:w-1/2 h-full">
      <span className="h-10 flex customer-flex-center items-end mb-6 uppercase tracking-tighter">
        <PrismicRichText field={data.newsletter_header} />
      </span>
      <div className="custom-text-center leading-relaxed mb-8">
        <PrismicRichText field={data.newsletter_description} />
      </div>
      <form className="w-full flex customer-flex-center">
        <div
          className="w-full  sm:w-[60%] max-w-[330px] py-4 px-1 flex justify-around"
          style={{
            border: `2px solid ${cssProps.input_border}`,
          }}
        >
          <input
            id="emailInput"
            type="email"
            placeholder="Email"
            className="focus:outline-none w-[80%] bg-transparent"
            style={{ color: cssProps.input_text || "#f7f1e7" }}
          />
          <input
            type="submit"
            value={"＞"}
            className="text-sm font-black py-0 px-1 hover:cursor-pointer"
            style={{
              backgroundColor: cssProps.input_btn_bg || "#95a595",
              color: cssProps.background_color || "#102f10",
            }}
          />
        </div>
      </form>
    </div>
  );
};

type SocialName = "Instagram" | "TikTok" | "Pinterest" | "Email";

type SocialIconProps = {
  socialName: SocialName | null | undefined;
};

const SocialIcon: React.FC<SocialIconProps> = ({ socialName }) => {
  switch (socialName) {
    case "Instagram":
      return <FontAwesomeIcon icon={faIn} className="h-[80%]" />;
    case "TikTok":
      return <FontAwesomeIcon icon={faTik} className="h-[80%]" />;
    case "Pinterest":
      return <FontAwesomeIcon icon={faPint} className="h-[80%]" />;
    case "Email":
      return <FontAwesomeIcon icon={faEnvelope} className="h-[80%]" />;
    default:
      return <div>Icon not found</div>;
  }
};
