import React from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import { Wrapper } from "@/components/Layout";

/**
 * @typedef {import("@prismicio/client").Content.HomeCollectionSlice} HomeCollectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HomeCollectionSlice>} HomeCollectionProps
 * @param { HomeCollectionProps }
 */
const HomeCollection = ({ slice }: SliceComponentProps) => {
  return (
    <Wrapper className="flex flex-col gap-3 box-content">
      <span className="text-2xl font-bold">
        {slice.primary.title ? (
          <PrismicRichText field={slice.primary.title} />
        ) : (
          <h2>Template slice, update me!</h2>
        )}
      </span>
      <span>
        {slice.primary.description ? (
          <PrismicRichText field={slice.primary.description} />
        ) : (
          <p>start by editing this slice from inside Slice Machine!</p>
        )}
      </span>
      <div className="grid grid-cols-1 xl:grid xl:grid-cols-3 xl:w-full sm:flex overflow-x-scroll gap-4 scrollbar-hide mt-1">
        {slice?.items?.map((collection: any, i: number) => {
          return (
            <CollectionCard collection={collection.collections.data} key={i} />
          );
        })}
      </div>
    </Wrapper>
  );
};

export const CollectionCard = ({
  collection,
}: {
  collection: {
    collection_name: string;
    collection_image: any;
    link: string;
  };
}) => {
  return (
    <figure className="border-solid border-black border-2 relative w-full sm:min-w-[30px] md:min-w-[380px] xl:min-w-0">
      <Link href={collection?.link ?? "/"} className="w-full h-full">
        <PrismicNextImage
          field={collection.collection_image}
          height={350}
          width={350}
          className="object-cover h-full w-full aspect-[3/4] max-h-[500px] xl:max-h-none"
        />
      </Link>
      <h3 className="absolute bottom-4 right-4 text-xl font-semibold bg-white py px-2 border-solid border-2 border-black">
        {collection.collection_name}
      </h3>
    </figure>
  );
};

export default HomeCollection;
