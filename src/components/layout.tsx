import { ReactNode } from "react";
import { NavBar } from "./navBar";
import FooterClient from "./footer.client";
import { MobileBottomNav } from "./global";
import {
  FooterSlice,
  NavigationDocument,
  NavigationMenuDocument,
  SocialsDocument,
} from "types.generated";
import { ColorField, KeyTextField } from "@prismicio/types";

export interface FooterDocumentType {
  menu_about: NavigationMenuDocument;
  menu_seo: NavigationMenuDocument;
  socials: SocialsDocument;
  background_color: ColorField;
  text_color: ColorField;
  input_border: ColorField;
  input_btn_bg: ColorField;
  input_text: ColorField;
  newsletter_header: KeyTextField;
  newsletter_description: KeyTextField;
  slices: FooterSlice;
}

export const Layout = ({
  children,
  header,
  footer,
}: {
  children: ReactNode;
  footer: FooterDocumentType;
  header: NavigationDocument["data"];
}) => {
  return (
    <>
      <NavBar navigation={header.navigation_item} logo={header.logo} />
      <main className="overflow-hidden">{children}</main>
      <FooterClient />
      <MobileBottomNav />
    </>
  );
};
