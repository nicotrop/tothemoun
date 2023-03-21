import { SliceZone } from "@prismicio/react";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { components } from "../../slices/index";
import { Layout } from "@/components/Layout";
import { createClient } from "../../prismicio";

export type StaticPageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({ page }: StaticPageProps) {
  console.log(page);

  return (
    // <Layout navigation={navigation}>
    <Layout>
      {/* <ArticleSection data={mockArticleSectionData} />
      <CollectionGrid data={mockCollectionSectionData} />
      <ArticleSection data={mockArticleSectionData} />
      <ClientPromoSection />
      <ArticleSection2 data={mockBestOfSectionData} />
      <HomeSEOSection /> */}
      <SliceZone slices={page.data.slices} components={{ ...components }} />
    </Layout>
  );
}

export const getStaticProps = async ({
  previewData,
}: GetStaticPropsContext) => {
  const client = createClient({ previewData });

  // const navigationData = await client.getSingle("navigation");
  // const navigation = navigationData?.data?.navigation_item || [];
  const page = await client.getSingle("homepage", {
    fetchLinks: "navigation.navigation_item",
  });
  return {
    props: {
      page,
    },
  };
};
