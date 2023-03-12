import { createClient } from "@prismicio/client";
import sm from "../../sm.json";
import {
  mockArticleSectionData,
  mockBestOfSectionData,
} from "@/utils/mockData";
import {
  CollectionGrid,
  mockCollectionSectionData,
} from "@/components/CollectionSection";
import ClientPromoSection from "@/components/PromoSection.Client";
import { Layout } from "@/components/layout";
import { ArticleSection } from "@/components/ArticleSection";
import { ArticleSection2 } from "@/components/ArticleSection2";

export default function Home({ navigation }: { navigation: any }) {
  return (
    <Layout navigation={navigation}>
      <ArticleSection data={mockArticleSectionData} />
      <CollectionGrid data={mockCollectionSectionData} />
      <ArticleSection data={mockArticleSectionData} />
      <ClientPromoSection />
      <ArticleSection2 data={mockBestOfSectionData} />
      <HomeSEOSection />
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

export const HomeSEOSection = () => {
  return (
    <section className="py-6">
      <div className="bg-gray-300 py-6 px-6 flex flex-col gap-4">
        <h2 className="uppercase text-center text-2xl font-bold">
          #moongwadloup
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          perspiciatis rerum doloremque inventore aliquam. Doloribus voluptatum,
          nemo odit libero illo vel distinctio rem, nobis, veritatis aliquid
          dicta explicabo voluptatem pariatur quisquam modi odio ea. Quidem
          quaerat suscipit architecto, commodi consectetur possimus molestias ut
          magni ad dignissimos? Assumenda omnis architecto, voluptatum debitis
          neque repudiandae atque excepturi eius perspiciatis totam voluptas.
          Consectetur saepe, veniam minima sunt libero possimus placeat repellat
          quasi rem consequuntur esse delectus. Ab illum illo distinctio? Ex,
          rem molestias dolore dignissimos placeat cum aut dolor ea excepturi
          odit? Sunt, a! Doloremque ab vitae qui voluptatum sunt esse cumque in.
        </p>
      </div>
    </section>
  );
};
