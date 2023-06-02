import React from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { CollectionDocument, CollectionSliderSlice } from "types.generated";
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
  //   console.log(slice);

  const items = slice.items as unknown as CollectionSlider;
  const title = slice.primary.title as unknown as string;

  return <CollectionCarousel data={items} title={title} />;
  //   return <section>hello</section>;
};

export default CollectionSlider;
