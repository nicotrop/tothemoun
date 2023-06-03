import React from "react";
import { SliceComponentProps } from "@prismicio/react";
import { BlogPostDocument, FeaturedArticleSlice } from "types.generated";
import { OneArticleBlock } from "@/components/oneArticle";

/**
 * @typedef {import("@prismicio/client").Content.FeaturedArticleSlice} FeaturedArticleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturedArticleSlice>} FeaturedArticleProps
 * @param { FeaturedArticleProps }
 */
const FeaturedArticle = ({
  slice,
}: SliceComponentProps<FeaturedArticleSlice>) => {
  console.log(slice);
  return (
    <OneArticleBlock
      article={slice.primary.blog_post as unknown as BlogPostDocument}
    />
  );
};

export default FeaturedArticle;
