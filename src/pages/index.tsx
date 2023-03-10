import { createClient } from "@prismicio/client";
import sm from "../../sm.json";
import { Layout } from "@/components/layout";
import { mockSectionData } from "@/utils/mockData";
import { ArticleCarousel } from "@/components/ArticleCarousel";
import Image from "next/image";
import Link from "next/link";

export default function Home({ navigation }: { navigation: any }) {
  return (
    <Layout navigation={navigation}>
      <ArticleCarousel data={mockSectionData} />
      <CollectionGrid data={mockCollectionSectionData} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const client = createClient(sm.apiEndpoint);
  const navigation = await client.getSingle("navigation");

  return {
    props: {
      navigation,
    },
  };
};

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

export const mockCollectionData: Collection[] = [
  {
    name: "Collection 1",
    imageURL:
      "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    link: "#",
  },
  {
    name: "Collection 2",
    imageURL:
      "https://images.unsplash.com/photo-1574724713425-fee7e2eacf84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1652&q=80",
    link: "#",
  },
  {
    name: "Collection 3",
    imageURL:
      "https://images.unsplash.com/photo-1593351415075-3bac9f45c877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    link: "#",
  },
];

export const mockCollectionSectionData: CollectionGridType = {
  title: "Collection",
  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  collections: mockCollectionData,
};

export const CollectionGrid = ({ data }: { data: CollectionGridType }) => {
  return (
    <section className="flex flex-col gap-3 my-6 box-content">
      <h2 className="text-2xl font-bold">{data.title}</h2>
      <h4>{data.subtitle}</h4>
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-1"> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-1">
        {data?.collections?.map((collection, i) => {
          return <CollectionCard collection={collection} key={i} />;
        })}
      </div>
    </section>
  );
};

export const CollectionCard = ({ collection }: { collection: Collection }) => {
  return (
    <figure className="border-solid border-black border-2 flex flex-col items-start gap-2 w-full relative">
      <Link href={collection.link} className="w-full h-full">
        <Image
          src={collection.imageURL}
          alt="card-image"
          height={350}
          width={350}
          className="object-cover h-full w-full aspect-[3/4]"
        />
      </Link>
      <h3 className="absolute bottom-0 right-4 text-xl font-semibold">
        {collection.name}
      </h3>
    </figure>
  );
};
