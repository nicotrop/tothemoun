import { mockCollectionData } from "@/utils/mockData";
import Image from "next/image";
import Link from "next/link";
import { Wrapper } from "./Layout";
import { SwiperSlide } from "swiper/react";
import { SwiperColCarousel } from "./SwiperCarousel";

export type Collection = {
  name: string;
  imageURL: string;
  link: string;
};

export type CollectionGridType = {
  title: string;
  subtitle: string;
  collections: Collection[];
};

export const CollectionGrid = ({ data }: { data: CollectionGridType }) => {
  return (
    <Wrapper className="flex flex-col gap-3 box-content">
      <h2 className="text-2xl font-bold">{data.title}</h2>
      <h4>{data.subtitle}</h4>
      <SwiperColCarousel>
        {data?.collections?.map((collection, i) => {
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

export const CollectionCard = ({ collection }: { collection: Collection }) => {
  return (
    <figure className="border-solid border-black border-2 relative">
      <Link href={collection.link}>
        <Image
          src={collection.imageURL}
          alt="card-image"
          height={350}
          width={350}
          className="object-cover w-full aspect-[3/4]"
        />
      </Link>
      <h3 className="absolute bottom-4 right-4 text-xl font-semibold bg-white py px-2 border-solid border-2 border-black">
        {collection.name}
      </h3>
    </figure>
  );
};
