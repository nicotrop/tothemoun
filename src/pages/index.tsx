import { SliceZone } from "@prismicio/react";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { components } from "../../slices/index";
import { Layout } from "@/components/Layout";
import { createClient } from "../../prismicio";

export type StaticPageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({ data }: StaticPageProps) {
  console.log(data);

  return (
    // <Layout navigation={navigation}>
    <Layout>
      {/* <ArticleSection data={mockArticleSectionData} />
      <CollectionGrid data={mockCollectionSectionData} />
      <ArticleSection data={mockArticleSectionData} />
      <ClientPromoSection />
      <ArticleSection2 data={mockBestOfSectionData} />
      <HomeSEOSection /> */}
      <SliceZone
        slices={data.data.slices}
        components={{ ...components }}
        context={data.articles}
      />
    </Layout>
  );
}

export const getStaticProps = async ({
  previewData,
}: GetStaticPropsContext) => {
  const client = createClient({ previewData });

  const page = await client.getSingle("homepage", {
    graphQuery: `
    {
      homepage {
        ...homepageFields
        slices {
          ... on home_hero {
            variation {
              ... on default {
                primary {
                  header
                  subheader
                  hero_video
                  logo
                  opacity_color
                  opacity_percentage
                  navigation {
                    ... on navigation {
                      navigation_item
                    }
                  }
                }
                items {
                  ...itemsFields
                }
              }
            }
          }
          ... on home_collection {
            variation {
              ... on default {
                primary {
                  title
                  description
                }
                items {
                  collections {
                    ...on blog_collection {
                      ...blog_collectionFields
                    }
                  }
                }
              }
            }
          }
          ... on article_carousel {
            variation {
              ... on default {
                primary {
                  title
                  description
                  type
                }
                items {
                  blogpost {
                    ...on blog_post {
                      article_cover
                      preview
                      uid
                      article_title
                      article_content
                      article_author {
                        ... on author {
                          uid
                          author_first_name
                          author_last_name
                          author_avatar
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`,
  });

  const articles = await client.getAllByType("blog_post", {
    graphQuery: `
    {
      blog_post {
        article_cover
        preview
        uid
        article_title
        article_content
        article_author {
          ... on author {
            uid
            author_first_name
            author_last_name
            author_avatar
          }
        }
      }
    }
    `,
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
  });

  const data = { ...page, articles };
  return {
    props: {
      data,
    },
  };
};
