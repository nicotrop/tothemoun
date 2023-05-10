import * as prismicH from "@prismicio/helpers";
import { createClient } from "../../../prismicio";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";

export default function Page({ page }: { page: any }) {
  return <div>hi</div>;
}

// Fetch content from prismic
export async function getStaticProps({
  params,
  previewData,
}: GetStaticPropsContext) {
  const client = createClient({ previewData });
  console.log(params);

  //TODO if que-faire-en-guadeloupe/category/blank - redirect to category page

  // Set page uid - if no uid, set to "que-faire-en-guadeloupe" else set dynamic uid
  const uidPage = params?.uid?.slice(-1)[0] || "que-faire-en-guadeloupe";

  // Set category uid - if no uid, set to null else set dynamic uid
  const uidCategory =
    params?.uid && params?.uid?.length > 1 ? params?.uid[0] : null;

  console.log("category", uidCategory);
  console.log("blog", uidPage);

  // Initialize category and page
  let category;
  let categoryArr;
  let page;

  type justCategoryType = boolean | null;

  let justCategory: justCategoryType = category
    ? uidPage !== "que-faire-en-guadeloupe"
    : null;

  if (params?.uid?.length === 1 && !justCategory === null) {
    category = await client.getAllByType("blog_collection");
    categoryArr = category?.map((elem) => elem.uid);
    const isInCategoryArr = categoryArr?.includes(uidPage);
    if (isInCategoryArr) justCategory = true;
  }

  // If page uid is not "que-faire-en-guadeloupe" and justCategory is false, fetch blog_post by uid
  if (justCategory === false) {
    console.log("in category");
    page = await client.getByUID("blog_post", uidPage);
    //TODO else if page uid is not "que-faire-en-guadeloupe" and justCategory is true, fetch blog_collection by uid
  } else {
    console.log("not in category");
    // Else fetch "que-faire-en-guadeloupe" collection by uid
    page = await client.getByUID("collection", "que-faire-en-guadeloupe");
  }

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
