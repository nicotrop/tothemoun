import React from "react";
import { SliceComponentProps } from "@prismicio/react";
import { SeoSectionSlice } from "types.generated";
import { SEOsectionComp } from "slices/SeoSection/seoSection";

/**
 * @typedef {import("@prismicio/client").Content.SeoSectionSlice} SeoSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SeoSectionSlice>} SeoSectionProps
 * @param { SeoSectionProps }
 */
const SeoSection = ({ slice }: SliceComponentProps<SeoSectionSlice>) => {
  const {
    primary: { title, content },
  } = slice;
  return <SEOsectionComp content={content} title={title} />;
};

export default SeoSection;
