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
          ... on article_carousel_v2 {
            variation {
              ... on default {
                primary {
                  title
                  description
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
