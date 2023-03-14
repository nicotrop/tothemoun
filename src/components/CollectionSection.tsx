import { mockCollectionData } from "@/utils/mockData";
import Image from "next/image";
import Link from "next/link";
import { Wrapper } from "./Layout";

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
      <div className="grid grid-cols-1 xl:grid xl:grid-cols-3 xl:w-full sm:flex overflow-x-scroll gap-4 scrollbar-hide mt-1">
        {data?.collections?.map((collection, i) => {
          return <CollectionCard collection={collection} key={i} />;
        })}
      </div>
    </Wrapper>
  );
};

export const CollectionCard = ({ collection }: { collection: Collection }) => {
  return (
    <figure className="border-solid border-black border-2 relative w-full sm:min-w-[30px] md:min-w-[380px] xl:min-w-0">
      <Link href={collection.link} className="w-full h-full">
        <Image
          src={collection.imageURL}
          alt="card-image"
          height={350}
          width={350}
          className="object-cover h-full w-full aspect-[3/4] max-h-[500px] xl:max-h-none"
        />
      </Link>
      <h3 className="absolute bottom-4 right-4 text-xl font-semibold bg-white py px-2 border-solid border-2 border-black">
        {collection.name}
      </h3>
    </figure>
  );
};
