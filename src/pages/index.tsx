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
          ... on collection_slider {
            variation {
              ... on default {
                primary {
                  title
                }
                items {
                  collection {
                    ... on collection {
                      ...collectionFields
                    }
                  }
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
                    ... on blog_post {
                      ...blog_postFields
                    }
                  }
                  collection {
                    ... on collection {
                      ...collectionFields
                    }
                  }
                }
                items {
                  article {
                    ... on blog_post {
                      ...blog_postFields
                    }
                  }
                }
              }
            }
          }
          ... on featured_article {
            variation {
              ... on default {
                primary {
                  blog_post {
                    ... on blog_post {
                      ...blog_postFields
                    }
                  }
                }
              }
            }
          }
          ... on video_hero {
            variation {
              ... on default {
                primary {
                  video
                  blog_post {
                    ... on blog_post {
                      ...blog_postFields
                    }
                  }
                  title
                  subtitle
                  cta
                  show_down_arrow
                }
              }
            }
          }
          ... on square_card_carousel {
            variation {
              ... on default {
                primary {
                  title
                  collection {
                    ... on collection {
                      ...collectionFields
                    }
                  }
                }
                items {
                  article {
                    ... on blog_post {
                      ...blog_postFields
                    }
                  }
                }
              }
            }
          }
          ... on photo_banner {
            variation {
              ... on default {
                primary {
                  title
                  subtitle
                  image
                }
              }
            }
          }
          ... on marquee_banner {
            variation {
              ... on default {
                primary {
                  text_size
                  text_color
                }
                items {
                  text_content
                }
              }
            }
          }
        }
      }
    }`,
  });

  //TODO retrieve nav bar and footer and pass to layout
  //TODO insert logic to pass navbar to layout only if transparent background is set to true

  const data = { ...page };

  return {
    props: {
      data,
    },
  };
};
