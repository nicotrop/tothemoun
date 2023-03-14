import { createClient } from "@prismicio/client";
import sm from "../../sm.json";
import {
  mockArticleSectionData,
  mockBestOfSectionData,
  mockCollectionSectionData,
} from "@/utils/mockData";
import { CollectionGrid } from "@/components/CollectionSection";
import ClientPromoSection from "@/components/PromoSection.Client";
import { Layout, Wrapper } from "@/components/Layout";
import { ArticleSection } from "@/components/ArticleSection";
import { ArticleSection2 } from "@/components/ArticleSection2";
import { HomeSEOSection } from "@/components/HomeSEOSection";

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
  const navigationData = await client.getSingle("navigation");
  const navigation = navigationData?.data?.navigation_item || [];

  return {
    props: {
      navigation,
    },
  };
};
