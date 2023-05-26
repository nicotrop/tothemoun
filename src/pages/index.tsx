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
          ... on promotion_banner {
            variation {
              ... on default {
                primary {
                  banner
                  button_text
                  button_link
                }
              }
            }
          }
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
          ... on seo_section {
            variation {
              ... on default {
                primary {
                  title
                  description
                }
              }
            }
          }
          ... on mixed_grid {
            variation {
              ... on default {
                primary {
                  title
                  description
                  main_article {
                    ...on blog_post {
                      article_cover
                      article_title
                      article_content
                      preview
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
                items {
                  article {
                    ...on blog_post {
                      article_cover
                      article_title
                      article_content
                      preview
                      article_author {
                        ...on author {
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
