import { SliceZone } from "@prismicio/react";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { components } from "../../slices/index";
import { Layout } from "@/components/global";
import { createClient } from "../../prismicio";
import "swiper/swiper.min.css";
import "swiper/css/bundle";

export type StaticPageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({ data }: StaticPageProps) {
  return (
    <Layout>
      <SliceZone slices={data.data.slices} components={{ ...components }} />
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
          ... on vanity_hero {
            variation {
              ... on default {
                primary {
                  main_article {
                    ... on blog_post {
                      article_cover
                      article_title
                      preview
                    }
                  }
                  social_posts {
                    ... on vanitysocialposts {
                      ...vanitysocialpostsFields
                    }
                  }
                  socials_accounts {
                    ... on socials {
                      ...socialsFields
                    }
                  }
                  promo {
                    ... on vanity_sponsoring {
                      ...vanity_sponsoringFields
                    }
                  }
                }
                items {
                  trending_articles {
                    ... on blog_post {
                      article_title
                    }
                  }
                  other_articles {
                    ... on blog_post {
                      article_title
                      article_cover
                    }
                  }
                }
              }
            }
          }
          ... on collection_grid {
            variation {
              ... on default {
                primary {
                  collection_uid
                  title
                }
              }
            }
          }
          ... on top_story {
            variation {
              ... on default {
                primary {
                  main_article {
                    ... on blog_post {
                      ...blog_postFields
                    }
                  }
                  section_title
                }
                items {
                  other_articles {
                    ... on blog_post {
                      ...blog_postFields
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

  console.log(page);
  const data = { ...page };

  return {
    props: {
      data,
    },
  };
};
