import { SliceZone } from "@prismicio/react";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { components } from "../../slices/index";
import { Layout, Wrapper } from "@/components/Layout";
import { createClient } from "../../prismicio";
import "swiper/swiper.min.css";
import "swiper/css/bundle";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export type StaticPageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({ data }: StaticPageProps) {
  // const year = new Date().getFullYear();

  return (
    <Layout>
      <SliceZone
        slices={data.data.slices}
        components={{ ...components }}
        context={data.articles}
      />
      {/* <Wrapper className="bg-secondary text-primary border-t-2 border-solid border-black">
        <footer className="flex flex-col justify-center gap-8 min-h-[400px]">
          <div className="hidden lg:flex justify-between items-start gap-3 h-60">
            <div className="w-[fit-content] min-w-[215px] h-full">
              <div className="h-10 flex items-end mb-6">
                <h3 className="font-semibold text-lg">À propos</h3>
              </div>
              <ul className="flex flex-col gap-2">
                <Link href={"/"}>
                  <li>Qui sommes-nous?</li>
                </Link>
                <Link href={"/"}>
                  <li>Confiance et securite</li>
                </Link>
                <Link href={"/"}>
                  <li>Contactez-nous</li>
                </Link>
                <Link href={"/"}>
                  <li>{"Politique d'accessibilité"}</li>
                </Link>
              </ul>
            </div>
            <div className="w-1/2 h-full">
              <div className="h-10 flex justify-center items-end mb-6">
                <h2 className="text-3xl font-extrabold tracking-tight">
                  {"STAY IN THE KNOW"}
                </h2>
              </div>
              <p className="mb-8 text-center leading-relaxed">
                {
                  "Inscrivez-vous à notre newsletter pour être informé(e) en avant-première de nos nouveaux articles, nos dernières publications, nos promotions exclusives et bien plus encore!"
                }
              </p>
              <form className="w-full flex justify-center">
                <div className=" w-[60%] max-w-[330px] py-4 px-1 flex justify-around border-solid border-2 border-tertiary">
                  <input
                    id="emailInput"
                    type="email"
                    placeholder="Entrer votre email..."
                    className="focus:outline-none w-[80%] bg-transparent placeholder:texr-tertiary"
                  />
                  <input
                    type="submit"
                    value={"＞"}
                    className="text-sm font-black py-0 px-1 bg-tertiary text-secondary hover:cursor-pointer"
                  />
                </div>
              </form>
            </div>
            <div className="w-[fit-content] min-w-[215px] h-full">
              <div className="h-10 text-lg font-bold flex items-end mb-6">
                <h3 className="font-semibold text-lg">
                  Explorez La Guadeloupe
                </h3>
              </div>
              <ul className="flex flex-col gap-2">
                <Link href={"/"}>
                  <li>Best of plages Guadeloupe</li>
                </Link>
                <Link href={"/"}>
                  <li>Pointe-Noire</li>
                </Link>
                <Link href={"/"}>
                  <li>Bouillante</li>
                </Link>
                <Link href={"/"}>
                  <li>Sainte-Anne</li>
                </Link>
                <Link href={"/"}>
                  <li>{"Politique d'accessibilité"}</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-full lg:hidden content-between gap-10 sm:w-[550px]">
            <div className="flex flex-col sm:flex-row gap-6 justify-between">
              <div className="w-[fit-content] min-w-[215px] h-full">
                <div className="h-10 flex items-end mb-4">
                  <h3 className="font-semibold text-lg">À propos</h3>
                </div>
                <ul className="flex flex-col gap-2">
                  <Link href={"/"}>
                    <li>Qui sommes-nous?</li>
                  </Link>
                  <Link href={"/"}>
                    <li>Confiance et securite</li>
                  </Link>
                  <Link href={"/"}>
                    <li>Contactez-nous</li>
                  </Link>
                  <Link href={"/"}>
                    <li>{"Politique d'accessibilité"}</li>
                  </Link>
                </ul>
              </div>
              <div className="w-[fit-content] min-w-[215px] h-full">
                <div className="h-10 text-lg font-bold flex items-end mb-4">
                  <h3 className="font-semibold text-lg">
                    Explorez La Guadeloupe
                  </h3>
                </div>
                <ul className="flex flex-col gap-2">
                  <Link href={"/"}>
                    <li>Best of plages Guadeloupe</li>
                  </Link>
                  <Link href={"/"}>
                    <li>Pointe-Noire</li>
                  </Link>
                  <Link href={"/"}>
                    <li>Bouillante</li>
                  </Link>
                  <Link href={"/"}>
                    <li>Sainte-Anne</li>
                  </Link>
                  <Link href={"/"}>
                    <li>{"Politique d'accessibilité"}</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="h-full">
              <div className="flex justify-start items-end mb-4">
                <h2 className="text-3xl font-extrabold tracking-tight">
                  {"STAY IN THE KNOW"}
                </h2>
              </div>
              <p className="mb-8 leading-relaxed">
                {
                  "Inscrivez-vous à notre newsletter pour être informé(e) en avant-première de nos nouveaux articles, nos dernières publications, nos promotions exclusives et bien plus encore!"
                }
              </p>
              <form className="w-full flex justify-start">
                <div className=" w-[60%] max-w-[330px] py-4 px-1 flex justify-around border-solid border-2 border-tertiary">
                  <input
                    id="emailInput"
                    type="email"
                    placeholder="Entrer votre email..."
                    className="focus:outline-none w-[80%] bg-transparent placeholder:texr-tertiary"
                  />
                  <input
                    type="submit"
                    value={"＞"}
                    className="text-sm font-black py-0 px-1 bg-tertiary text-secondary hover:cursor-pointer"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="flex justify-between h-7 items-center text-base text-primary">
            <span>{`©${year}, To the moun.`}</span>
            <div className="flex items-center gap-4 w-1/3 justify-end h-full">
              <Link href={"/"} className="h-[100%]">
                <FontAwesomeIcon icon={faInstagram} className="h-[80%]" />
              </Link>
              <Link href={"/"} className="h-[100%]">
                <FontAwesomeIcon icon={faTwitter} className="h-[80%]" />
              </Link>
            </div>
          </div>
        </footer>
      </Wrapper> */}
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
