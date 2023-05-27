import { ContentRelationshipField } from "@prismicio/types";
import {
  BlogPostDocument,
  SocialsDocument,
  SocialsDocumentDataMediaInfoItem,
  VanitySponsoringDocument,
  VanitysocialpostsDocument,
  VanitysocialpostsDocumentDataPostItem,
} from "types.generated";

//Fix typing for the extracted content relationship fields
interface ElemDetails {
  first_publication_date: string;
  id: string;
  isBroken: boolean;
  lang: string;
  last_publication_date: string;
  link_type: string;
  slug: string;
  tags: string[];
  type: string;
  uid: string;
  url: string;
}

interface MainArticleContent extends ElemDetails {
  data: {
    article_cover: BlogPostDocument["data"]["article_cover"];
    article_title: BlogPostDocument["data"]["article_title"];
    preview: BlogPostDocument["data"]["preview"];
  };
}
interface TrendingArticlesContent extends ElemDetails {
  data: {
    article_title: BlogPostDocument["data"]["article_title"];
  };
}
interface OtherArticlesContent extends ElemDetails {
  data: {
    article_title: BlogPostDocument["data"]["article_title"];
    article_cover: BlogPostDocument["data"]["article_cover"];
  };
}
interface PromoContent extends ElemDetails {
  data: {
    promo_img: VanitySponsoringDocument["data"]["promo_img"];
    promo_cta_text: VanitySponsoringDocument["data"]["promo_cta_text"];
    promo_link: {
      link_type: string;
      url: string;
    };
    promo_text: VanitySponsoringDocument["data"]["promo_text"];
    uid: VanitySponsoringDocument["uid"];
  };
}
interface SocialPostsContent extends ElemDetails {
  data: {
    post: VanitysocialpostsDocumentDataPostItem[];
    title: VanitysocialpostsDocument["data"]["title"];
  };
}
interface SocialAcctsContent extends ElemDetails {
  data: {
    media_info: SocialsDocumentDataMediaInfoItem[];
    cta: SocialsDocument["data"]["cta"];
  };
}

export type MainArticle = ContentRelationshipField<"blog_post"> &
  MainArticleContent;
export type TrendingArticles = ContentRelationshipField<"blog_post"> &
  TrendingArticlesContent;
export type OtherArticles = ContentRelationshipField<"blog_post"> &
  OtherArticlesContent;
export type Promo = ContentRelationshipField<"vanity_sponsoring"> &
  PromoContent;
export type SocialPosts = ContentRelationshipField<"vanitysocialposts"> &
  SocialPostsContent;
export type SocialAccts = ContentRelationshipField<"socials"> &
  SocialAcctsContent;
