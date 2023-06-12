import { BlogPostDocument } from "types.generated";

export const checkTag = (tag: string, articles: BlogPostDocument[]) => {
  let response = false;
  if (tag.length < 1 || tag === undefined || tag === null)
    return (response = false);
  articles.forEach((item) => {
    if (item.tags.includes(tag)) return (response = true);
  });
  return response;
};

export const sortArticles = (articles: BlogPostDocument[], tag: string) => {
  let response;
  response = articles
    .sort((a, b) => {
      return (
        (new Date(b.first_publication_date) as any) -
        (new Date(a.first_publication_date) as any)
      );
    })
    .filter((item) => {
      return item.tags.includes(tag);
    });

  const formatOtherArticles = response.slice(1, 4).map((item) => {
    return { article: item };
  });

  const formattedResponse = {
    mainArticle: response[0],
    otherArticles: formatOtherArticles,
  };
  return formattedResponse;
};

export const footerQuery = `{
  footer {
    background_color
    text_color
    input_border
    input_btn_bg
    input_text
    uid
    newsletter_description
    menu_about {
      ... on navigation_menu {
        ...navigation_menuFields
      }
    }
    menu_seo {
      ... on navigation_menu {
        ...navigation_menuFields
      }
    }
    socials {
      ... on socials {
        ...socialsFields
      }
    }
  }
}`;

export const navBarQuery = `{
  navigation {
    navigation_item
    logo
  }
}`;
