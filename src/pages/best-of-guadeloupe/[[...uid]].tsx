import * as prismicH from "@prismicio/helpers";
import { createClient } from "../../../prismicio";
import { GetStaticPropsContext } from "next";

export default function Page({ page }: { page: any }) {
  return <div>hi</div>;
}

// Fetch content from prismic
export async function getStaticProps({
  params,
  previewData,
}: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const uidPage = (params?.uid && params?.uid[params?.uid.length - 1]) || "";
  const page = await client.getByUID("blog_post", uidPage);

  return {
    props: { page },
  };
}

// Define Paths
export async function getStaticPaths() {
  const client = createClient();

  const page = await client.getAllByType("blog_post");

  return {
    paths: page.map((page) => prismicH.asLink(page)),
    fallback: true,
  };
}
