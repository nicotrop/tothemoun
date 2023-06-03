import React from "react";
import { SliceComponentProps } from "@prismicio/react";
import { VideoHeroSlice } from "types.generated";
import { HeroVideo } from "@/components/heroVideo";

/**
 * @typedef {import("@prismicio/client").Content.VideoHeroSlice} VideoHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VideoHeroSlice>} VideoHeroProps
 * @param { VideoHeroProps }
 */
const VideoHero = ({ slice }: SliceComponentProps<VideoHeroSlice>) => {
  const { primary } = slice;

  return <HeroVideo primary={primary} />;
};

export default VideoHero;
