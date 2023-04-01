import React from "react";
import { SliceComponentProps } from "@prismicio/react";
import { Wrapper } from "@/components/global";
import { PromotionBannerSlice } from "types.generated";
import { PrismicNextImage } from "@prismicio/next";

// /**
//  * @typedef {import("@prismicio/client").Content.PromotionBannerSlice} PromotionBannerSlice
//  * @typedef {import("@prismicio/react").SliceComponentProps<PromotionBannerSlice>} PromotionBannerProps
//  * @param { PromotionBannerProps }
//  */

const PromotionBanner = ({
  slice,
}: SliceComponentProps<PromotionBannerSlice>) => {
  const { primary } = slice;

  return (
    <Wrapper className="py-6">
      <figure className="relative w-full sm:min-w-[30px] md:min-w-[380px] xl:min-w-0 img-hover">
        <PrismicNextImage
          field={primary.banner}
          className={`aspect-[3/4] lg:aspect-video object-cover h-full w-full max-h-[450px] xl:max-h-[600px] overflow-hidden border-solid border-2 border-black`}
        />
      </figure>
    </Wrapper>
  );
};

export default PromotionBanner;
