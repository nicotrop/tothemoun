import React from "react";
import { SliceComponentProps } from "@prismicio/react";
import { CollectionSliderSlice } from "types.generated";
import { CollectionCarousel } from "@/components/collectionCarousel";
import { CollectionSlider } from "./type";

/**
 * @typedef {import("@prismicio/client").Content.CollectionSliderSlice} CollectionSliderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CollectionSliderSlice>} CollectionSliderProps
 * @param { CollectionSliderProps }
 */

const CollectionSlider = ({
  slice,
}: SliceComponentProps<CollectionSliderSlice>) => {
  const items = slice.items as unknown as CollectionSlider;
  const title = slice.primary.title as unknown as string;

  return <CollectionCarousel data={items} title={title} />;
};

export default CollectionSlider;
