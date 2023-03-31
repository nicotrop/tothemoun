import React from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Wrapper } from "@/components/Layout";
import { SeoSectionSlice } from "../../.slicemachine/prismicio";

/**
 * @typedef {import("@prismicio/client").Content.SeoSectionSlice} SeoSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SeoSectionSlice>} SeoSectionProps
 * @param { SeoSectionProps }
 */
const SeoSection = ({ slice }: SliceComponentProps<SeoSectionSlice>) => {
  return (
    <Wrapper
      padding={false}
      className="py-10 lg:h-[350px] bg-gray-300 flex flex-col items-center justify-center xl:h-[550px]"
    >
      <div className=" py-6 px-6 flex flex-col gap-12">
        <span className="uppercase text-center text-2xl lg:text-3xl font-bold">
          {slice.primary.title ? (
            <PrismicRichText field={slice.primary.title} />
          ) : (
            <h2>Template slice, update me!</h2>
          )}
        </span>
        <span className="indent-4">
          {slice.primary.description ? (
            <PrismicRichText field={slice.primary.description} />
          ) : (
            <p>Template slice, update me!</p>
          )}
        </span>
      </div>
    </Wrapper>
  );
};

export default SeoSection;
