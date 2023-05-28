import React from "react";
import { SliceComponentProps } from "@prismicio/react";
import { BlogPostDocument, TopStorySlice } from "types.generated";
import { TopStoryComp } from "@/components/topStories";

/**
 * @typedef {import("@prismicio/client").Content.TopStorySlice} TopStorySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TopStorySlice>} TopStoryProps
 * @param { TopStoryProps }
 */

export type OtherStories = {
  other_articles: BlogPostDocument;
}[];

const TopStory = ({ slice }: SliceComponentProps<TopStorySlice>) => {
  const { primary, items } = slice;
  const others = items as unknown as OtherStories;
  const topArticle = primary?.main_article as unknown as BlogPostDocument;
  const title = primary?.section_title as string;

  return (
    <TopStoryComp topArticle={topArticle} sideArticles={others} title={title} />
  );
};

export default TopStory;
