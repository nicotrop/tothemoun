import { InterceptImprovedGrid } from "@/components/mixedGridImproved";
import { SliceComponentProps } from "@prismicio/react";
import { createClient } from "prismicio";
import React, { use, useEffect, useState } from "react";
import {
  BlogPostDocument,
  CollectionDocument,
  MixedGridSlice,
} from "types.generated";
import { ClientComponent } from "./component.client";

/**
 * @typedef {import("@prismicio/client").Content.MixedGridSlice} MixedGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MixedGridSlice>} MixedGridProps
 * @param { MixedGridProps }
 */

export const InterceptGrid = ({
  slice,
}: SliceComponentProps<MixedGridSlice>) => {
  const { primary, items } = slice;
  const { collection, main_article, title, description } = primary;

  const collectionTyped = collection as unknown as CollectionDocument;
  const mainArticleTyped = main_article as unknown as BlogPostDocument;
  const itemsTyped = items as unknown as { article: BlogPostDocument }[];
  const isUsingCollection: Boolean = collectionTyped?.data ? true : false;
  const finalTitle =
    title && isUsingCollection
      ? (collectionTyped.data.title as unknown as string)
      : (title as unknown as string);
  const descriptionTyped = description as unknown as string;

  if (isUsingCollection) {
    return (
      //Client components which fetches the collection data and passes it to mixed grid component
      <ClientComponent
        collection={collectionTyped}
        title={finalTitle}
        description={descriptionTyped}
      />
    );
  }

  //Server components which uses the props from the slice
  return (
    <InterceptImprovedGrid
      mainArticle={mainArticleTyped}
      otherArticles={itemsTyped}
      title={finalTitle}
      description={descriptionTyped}
      collection={collectionTyped}
    />
  );
};

export default InterceptGrid;
