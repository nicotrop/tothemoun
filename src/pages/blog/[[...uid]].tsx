import * as prismicH from "@prismicio/helpers";
import { createClient } from "../../../prismicio";
import { GetStaticPropsContext } from "next";

export default function Page({ page }: { page: any }) {
  return <div>hi</div>;
}

// Fetch content from prismic
// export async function getStaticProps({
//   params,
//   previewData,
// }: GetStaticPropsContext) {
//   const client = createClient({ previewData });

//   const uidPage = (params?.uid && params?.uid[params?.uid.length - 1]) || "";
//   const uidCollection =
//     params?.uid && params?.uid.length > 1 ? params?.uid[0] : null;
//   const uidCategory =
//     params?.uid && params?.uid.length > 2 ? params?.uid[1] : null;

//   let collection;
//   let category;

//   const page = await client.getByUID("blog_post", uidPage);
//   //   const collection =
//   //     uidCollection && (await client.getByUID("blog_collection", uidCollection));

//   if (uidCollection)
//     collection = await client.getByUID("collection", uidCollection);

//   if (uidCategory)
//     category = await client.getByUID("blog_collection", uidCategory);

//   return {
//     props: { page },
//   };
// }

// Define Paths
export async function getStaticPaths() {
  const client = createClient();

  const page = await client.getAllByType("blog_post");

  return {
    paths: page.map((page) => prismicH.asLink(page)),
    fallback: true,
  };
}
