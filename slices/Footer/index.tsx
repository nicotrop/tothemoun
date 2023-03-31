import React from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FooterSlice } from "../../.slicemachine/prismicio";

/**
 * @typedef {import("@prismicio/client").Content.FooterSlice} FooterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterSlice>} FooterProps
 * @param { FooterProps }
 */
const Footer = ({ slice }: SliceComponentProps<FooterSlice> | any) => {
  console.log(slice);

  return <span>hello</span>;
};

export default Footer;
