import React from "react";
import { SliceComponentProps } from "@prismicio/react";
import { PhotoBannerSlice } from "types.generated";
import { PhotoBannerComp } from "slices/PhotoBanner/photoBanner";

/**
 * @typedef {import("@prismicio/client").Content.PhotoBannerSlice} PhotoBannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PhotoBannerSlice>} PhotoBannerProps
 * @param { PhotoBannerProps }
 */

const PhotoBanner = ({ slice }: SliceComponentProps<PhotoBannerSlice>) => {
  const { primary } = slice;

  return <PhotoBannerComp data={primary} />;
};

export default PhotoBanner;
