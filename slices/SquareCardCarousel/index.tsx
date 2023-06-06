import React from "react";
import { SliceComponentProps } from "@prismicio/react";
import {
  BlogPostDocument,
  CollectionDocument,
  SquareCardCarouselSlice,
} from "types.generated";
import { SquareCardCarouselComp } from "@/components/squareCardsCarousel";
import { ClientCollection } from "./component.client";

/**
 * @typedef {import("@prismicio/client").Content.SquareCardCarouselSlice} SquareCardCarouselSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SquareCardCarouselSlice>} SquareCardCarouselProps
 * @param { SquareCardCarouselProps }
 */

export interface ArticlesTyped {
  article: BlogPostDocument;
}
[];

export type Articles = ArticlesTyped[];

const SquareCardCarousel = ({
  slice,
}: SliceComponentProps<SquareCardCarouselSlice>) => {
  const { items, primary } = slice;
  const { collection: colRaw, title } = primary;

  const articles = items as unknown as Articles;
  const collection = colRaw as unknown as CollectionDocument;
  const isCollection = collection.data ? true : false;

  if (!isCollection) {
    return <SquareCardCarouselComp articles={articles} title={title} />;
  } else {
    return <ClientCollection collection={collection} />;
  }
};

export default SquareCardCarousel;
