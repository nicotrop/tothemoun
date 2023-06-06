import { MarqueeBannerComp } from "@/components/marqueeBanner";
import { SliceComponentProps } from "@prismicio/react";
import React from "react";
import { MarqueeBannerSlice } from "types.generated";

/**
 * @typedef {import("@prismicio/client").Content.MarqueeBannerSlice} MarqueeBannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MarqueeBannerSlice>} MarqueeBannerProps
 * @param { MarqueeBannerProps }
 */
const MarqueeBanner = ({ slice }: SliceComponentProps<MarqueeBannerSlice>) => {
  const { items, primary } = slice;

  return <MarqueeBannerComp items={items} primary={primary} />;
};

export default MarqueeBanner;
