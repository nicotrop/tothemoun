import * as prismicH from "@prismicio/helpers";
import { createClient } from "../../../prismicio";
import { GetStaticPropsContext } from "next";
import { SliceZone } from "@prismicio/react";
import { components } from "slices";
import { useMemo } from "react";
import { Layout } from "@/components/layout";

export default function Page({ data, navBar }: any) {
  const navData = useMemo(() => navBar?.data?.slices[0]?.primary, [navBar]);

  return (
    <Layout header={navData}>
      <SliceZone slices={data?.data?.slices} components={{ ...components }} />
    </Layout>
  );
}

// Fetch content from prismic
export async function getStaticProps({
  params,
  previewData,
}: GetStaticPropsContext) {
  const client = createClient({ previewData });

  // Set page uid - if no uid, set to "que-faire-en-guadeloupe" else set dynamic uid
  const uidPage = params?.uid?.slice(-1)[0] || "que-faire-en-guadeloupe";

  // Initialize and page
  let page;

  type justCategoryType = boolean | null;

  let mightJustCategory =
    uidPage !== "que-faire-en-guadeloupe" && params?.uid?.length === 1;

  let justCategory: justCategoryType = mightJustCategory;

  // If page uid is not "que-faire-en-guadeloupe" and justCategory is false, fetch blog_post by uid
  if (uidPage !== "que-faire-en-guadeloupe" && justCategory === false) {
    console.log("type blog post");
    page = await client.getByUID("blog_post", uidPage);
  } else {
    console.log("type collection");
    // Else fetch "que-faire-en-guadeloupe" collection by uid
    page = await client.getByUID("collection", "que-faire-en-guadeloupe");
  }

  const header = await client.getByUID("navbar", "navbar", {
    graphQuery: `
      {
        navbar {
          ...navbarFields
          slices {
            ... on navbar {
              variation {
                ... on default {
                  primary {
                    navigation {
                      ... on navigation {
                        ...navigationFields
                      }
                    }
                    logo
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: { data: page, navBar: header },
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
