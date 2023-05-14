import * as prismicH from "@prismicio/helpers";
import { createClient } from "../../../prismicio";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { Layout } from "@/components/global";
import { SliceZone } from "@prismicio/react";
import { components } from "slices";
import { navigationItemType } from "@/utils/mockData";

export type StaticPageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Page({ data, navBar }: StaticPageProps) {
  const navData = navBar?.data?.slices[0]?.primary;

  return (
    <Layout header={navData}>
      {/* <div>{JSON.stringify(data)}</div> */}
      <div>{JSON.stringify(data?.data?.slices)}</div>
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

  // Initialize category and page
  let category;
  let categoryArr;
  let page;

  type justCategoryType = boolean | null;

  let mightJustCategory =
    uidPage !== "que-faire-en-guadeloupe" && params?.uid?.length === 1;

  let justCategory: justCategoryType = mightJustCategory;

  if (mightJustCategory) {
    category = await client.getAllByType("blog_collection");
    categoryArr = category?.map((elem) => elem.uid);
    const isInCategoryArr = categoryArr?.includes(uidPage);
    justCategory = isInCategoryArr;
  }

  // If page uid is not "que-faire-en-guadeloupe" and justCategory is false, fetch blog_post by uid
  if (uidPage !== "que-faire-en-guadeloupe" && justCategory === false) {
    console.log("type blog post");
    page = await client.getByUID("blog_post", uidPage);
    //lse if page uid is not "que-faire-en-guadeloupe" and justCategory is true, fetch blog_collection by uid
  } else if (uidPage !== "que-faire-en-guadeloupe" && justCategory === true) {
    console.log("type blog collection");
    page = await client.getByUID("blog_collection", uidPage);
  } else {
    console.log("type collection");
    // Else fetch "que-faire-en-guadeloupe" collection by uid
    page = await client.getByUID("collection", "que-faire-en-guadeloupe", {
      graphQuery: `
        {
          collection {
            ...collectionFields
            slices {
              ... on footer {
                variation {
                  ... on default {
                    primary {
                      background_color
                      text_color
                      input_border_color
                      input_btn_bg_color
                      input_text_input_color
                      menu_about {
                        ...on navigation_menu {
                          ...navigation_menuFields
                        }
                      }
                      menu_seo {
                        ...on navigation_menu {
                          ...navigation_menuFields
                        }
                      }
                      newsletter_header
                      newsletter_description
                      socials {
                        ...on socials {
                          ...socialsFields
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
    });
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
