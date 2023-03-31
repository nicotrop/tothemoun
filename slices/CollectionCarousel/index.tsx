import React from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import { Wrapper } from "@/components/Layout";
import { SwiperCarousel, SwiperColCarousel } from "@/components/SwiperCarousel";
import { SwiperSlide } from "swiper/react";

/**
 * @typedef {import("@prismicio/client").Content.HomeCollectionSlice} HomeCollectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HomeCollectionSlice>} HomeCollectionProps
 * @param { HomeCollectionProps }
 */
const HomeCollection = ({ slice }: SliceComponentProps) => {
  return (
    <Wrapper className="flex flex-col gap-3 box-content">
      <Link href={"/"} className="carousel-link-title">
        {slice.primary.title ? (
          <PrismicRichText field={slice.primary.title} />
        ) : (
          <h2>Template slice, update me!</h2>
        )}
        <span>{" > "}</span>
      </Link>
      <span>
        {slice.primary.description ? (
          <PrismicRichText field={slice.primary.description} />
        ) : (
          <p>start by editing this slice from inside Slice Machine!</p>
        )}
      </span>
      <hr className="py-1 border-solid border-b-2 border-black" />
      <SwiperColCarousel>
        {slice?.items?.map((collection: any, i: number) => {
          return (
            <SwiperSlide key={i}>
              <CollectionCard collection={collection} key={i} />
            </SwiperSlide>
          );
        })}
      </SwiperColCarousel>
    </Wrapper>
  );
};

export const CollectionCard = ({
  collection,
}: {
  collection: {
    collections: {
      data: {
        collection_image: {
          alt: string | null;
          dimensions: { width: number; height: number };
          url: string;
          copyright: string | null;
        };
        collection_name: string;
        uid: string;
      };
    };
  };
}) => {
  return (
    <div className="border-solid border-black border-2 relative">
      <Link href={"/"} className="img-hover">
        <PrismicNextImage
          field={collection.collections.data.collection_image}
          className="object-cover w-full aspect-[3/4] h-48"
          style={{ height: "100%" }}
        />
      </Link>
      <h3 className="absolute bottom-4 right-4 text-xl font-semibold bg-white py px-2 border-solid border-2 border-black">
        {collection.collections.data.collection_name}
      </h3>
    </div>
  );
};

export default HomeCollection;
