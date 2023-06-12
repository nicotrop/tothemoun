import React from "react";
import { SliceComponentProps } from "@prismicio/react";
import { VanityHeroSlice } from "types.generated";
import { VanityComponent } from "slices/VanityHero/vanityHero";

// /**
//  * @typedef {import("@prismicio/client").Content.VanityHeroSlice} VanityHeroSlice
//  * @typedef {import("@prismicio/react").SliceComponentProps<VanityHeroSlice>} VanityHeroProps
//  * @param { VanityHeroProps }
//  */

const VanityHero = ({ slice }: SliceComponentProps<VanityHeroSlice>) => {
  return <VanityComponent props={slice} />;
};

export default VanityHero;
