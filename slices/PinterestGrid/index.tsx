import React from "react";
import { SliceComponentProps } from "@prismicio/react";
import { PinterestGridSlice, PinterestItemsDocument } from "types.generated";
import { PinterestGridComp } from "@/components/pinterestGrid";

/**
 * @typedef {import("@prismicio/client").Content.PinterestGridSlice} PinterestGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PinterestGridSlice>} PinterestGridProps
 * @param { PinterestGridProps }
 */
const PinterestGrid = ({ slice }: SliceComponentProps<PinterestGridSlice>) => {
  const {
    primary: { data },
  } = slice;

  const props = data as unknown as PinterestItemsDocument;

  return <PinterestGridComp elem={props} />;
};
export default PinterestGrid;
