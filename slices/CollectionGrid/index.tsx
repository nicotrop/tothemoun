"use client";

import React, { useEffect, useState } from "react";
import { SliceComponentProps } from "@prismicio/react";
import { BlogPostDocument, CollectionGridSlice } from "types.generated";
import { createClient } from "prismicio";
import { CollectionGridComp } from "@/components/collectionGrid";
import { Wrapper } from "@/components/global";
import { SkeletonLoader } from "@/components/skeletonLoader";

/**
 * @typedef {import("@prismicio/client").Content.CollectionGridSlice} CollectionGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CollectionGridSlice>} CollectionGridProps
 * @param { CollectionGridProps }
 */

const CollectionGrid = ({
  slice,
}: SliceComponentProps<CollectionGridSlice>) => {
  const [data, setData] = useState<BlogPostDocument<string>[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const tag = slice?.primary?.collection_uid?.toLowerCase();
  const title = slice.primary.title;

  useEffect(() => {
    async function fetchData() {
      try {
        const client = createClient();
        let response = await client.getAllByType("blog_post");
        tag &&
          response.filter((item) => {
            item.tags.forEach((elem) => {
              elem.toLocaleLowerCase() === tag;
            });
          });
        setData(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [tag]);

  return isLoading ? (
    <GridLoader />
  ) : (
    <CollectionGridComp
      articles={data}
      title={title || "Collection"}
      tag={tag}
    />
  );
};

export default CollectionGrid;

const GridLoader = () => {
  return (
    <Wrapper>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 h-fit">
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
      </div>
    </Wrapper>
  );
};
