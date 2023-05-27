import { ReactNode } from "react";
import { Wrapper } from "./global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faPinterest,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import {
  MainArticle,
  OtherArticles,
  Promo,
  SocialAccts,
  SocialPosts,
  TrendingArticles,
} from "slices/VanityHero/type";
import { VanityHeroSlice } from "types.generated";

export const VanityComponent = ({ props }: { props: VanityHeroSlice }) => {
  //Extract the props
  const { primary, items } = props;
  const {
    main_article: raw_main_article,
    promo: raw_promo,
    social_posts: raw_social_posts,
    socials_accounts: raw_social_accounts,
  } = primary;

  //Updated typing for the extracted content relationship fields
  const socials_accounts = raw_social_accounts as SocialAccts;
  const social_posts = raw_social_posts as SocialPosts;
  const promo = raw_promo as Promo;
  const main_article = raw_main_article as MainArticle;
  const trending_articles = items.map(
    (item) => item.trending_articles
  ) as TrendingArticles[];
  const raw_other_articles = items.map(
    (item) => item.other_articles
  ) as OtherArticles[];

  //Filter out empty other articles
  const other_articles = raw_other_articles.filter((item) => item.data);

  return (
    <Wrapper
      padding={false}
      className="h-auto lg:h-[calc(100vh-(var(--header-height)))] lg:px-wrapper_x m-auto py-0 lg:py-wrapper_y 2xl:h-fit"
    >
      {/* Desktop */}
      <div className="hidden lg:flex gap-10">
        <LeftColumn others={other_articles} />
        <MainColumn
          article={main_article}
          posts={social_posts}
          socials={socials_accounts}
        />
        <RightColumn trending={trending_articles} promo={promo} />
      </div>

      {/* Mobile */}
      <div className="flex flex-col gap-5 lg:gap-8 h-full lg:hidden">
        <MainColumn
          article={main_article}
          posts={social_posts}
          socials={socials_accounts}
        />
        <div className="px-wrapper_x flex flex-col gap-8">
          <LeftColumn others={other_articles} />
          <RightColumn trending={trending_articles} promo={promo} />
        </div>
      </div>
    </Wrapper>
  );
};

const SideColumn = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full lg:min-w-[225px] lg:w-4/12 flex flex-col lg:h-full">
      {children}
    </div>
  );
};

const MainColumn = ({
  article,
  socials,
  posts,
}: {
  article: MainArticle;
  socials?: SocialAccts;
  posts?: SocialPosts;
}) => {
  return (
    <div className="lg:flex-grow flex flex-col lg:h-fit">
      <PrismicLink
        field={article}
        className="aspect-[9/13] sm:aspect-[6/4] relative rounded-sm"
      >
        <PrismicNextImage
          field={article?.data.article_cover}
          fill
          className="object-cover w-full"
        />
      </PrismicLink>
      <div className="flex flex-col lg:h-fit px-wrapper_x lg:px-0">
        {article?.tags && (
          <span className="pt-5 pb-2 text-xs font-semibold font-title uppercase">
            {article?.tags[0]}
          </span>
        )}
        <PrismicLink field={article}>
          <h3 className="pb-2 text-3xl font-extrabold font-title leading-tight tracking-tighter">
            {article?.data.article_title}
          </h3>
        </PrismicLink>
        <p className="p-0 m-0 text-base">{article?.data.preview}</p>
        <hr className="mt-8 lg:my-5 border-solid border-t-2 border-gray-200" />
        <span className="hidden lg:block pb-2 text-xs font-semibold font-title uppercase">
          {posts?.data.title}
        </span>
        <SocialImageGrid socialPost={posts} />
        <div className="hidden lg:inline-flex items-center gap-2 text-sm font-semibold pt-2">
          <span>{socials?.data.cta}</span>
          {socials?.data.media_info.map((item, index) => {
            return (
              item.social_media && (
                <PrismicLink
                  field={item.social_link}
                  key={index}
                  target={"_blank"}
                >
                  <SocialIcon socialName={item?.social_media} />
                </PrismicLink>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

const SocialImageGrid = ({ socialPost }: { socialPost?: SocialPosts }) => {
  return (
    <div className="hidden lg:flex flex-wrap gap-2 w-full h-max">
      {socialPost?.data.post.map((elem, index) => {
        return (
          <PrismicLink
            field={elem.postlink}
            key={index}
            className="rounded-sm object-cover w-[calc((100%/4)-((8px*3)/4))] aspect-square relative"
          >
            <PrismicNextImage
              field={elem.postimg}
              fill
              className="object-cover w-full"
            />
          </PrismicLink>
        );
      })}
    </div>
  );
};

const LeftColumn = ({ others }: { others: OtherArticles[] }) => {
  return (
    <SideColumn>
      {others?.map((item, index) => {
        return (
          <article key={index}>
            <div className="aspect-[6/4] w-full relative rounded-sm">
              <PrismicLink field={item}>
                <PrismicNextImage
                  field={item?.data.article_cover}
                  fill
                  className="object-cover"
                />
              </PrismicLink>
            </div>
            {item?.tags && (
              <span className="pt-5 pb-2 text-xs font-semibold font-title uppercase">
                {item?.tags[0]}
              </span>
            )}
            <PrismicLink field={item}>
              <h3 className="pb-2 text-xl font-extrabold font-title leading-tight tracking-tighter">
                {item?.data.article_title}
              </h3>
            </PrismicLink>
            {index < 1 && (
              <hr className="my-5 border-solid border-t-2 border-gray-200" />
            )}
          </article>
        );
      })}
    </SideColumn>
  );
};

const RightColumn = ({
  trending,
  promo,
}: {
  trending: TrendingArticles[];
  promo: Promo;
}) => {
  return (
    <SideColumn>
      <MobileSeperator />
      <div className="pb-4 pt-4 px-2">
        <h3 className="text-center uppercase text-xl font-bold font-title leading-tight tracking-tighter">
          trending
        </h3>
      </div>
      {trending?.map((item, index) => {
        return <ArticleTextElem key={index} article={item} />;
      })}
      <SponsoredElem promo={promo} />
    </SideColumn>
  );
};

const ArticleTextElem = ({ article }: { article: TrendingArticles }) => {
  return (
    <PrismicLink href={article.url}>
      {article.tags && (
        <span className="pt-5 pb-2 text-xs font-semibold font-title uppercase">
          {article?.tags[0]}
        </span>
      )}
      <h4 className="pb-2 text-xl font-semibold font-title leading-tight tracking-tighter">
        {article?.data?.article_title}
      </h4>
      <hr className="my-5 border-solid border-t-2 border-gray-200" />
    </PrismicLink>
  );
};

const SponsoredElem = ({ promo }: { promo: Promo }) => {
  return (
    <div className="h-auto pb-5 flex flex-col items-center text-center">
      <span className="pb-5 lg:pb-2 text-xs font-semibold font-title uppercase">
        Sponsored
      </span>
      <h5 className="pb-5 m-0 text-base font-medium ">
        {promo.data.promo_text}
      </h5>
      <PrismicLink
        href={promo.data.promo_link.url}
        className="aspect-[9/12] w-3/5 relative max-h-[400px]"
      >
        <PrismicNextImage
          field={promo.data.promo_img}
          fill
          className="object-cover w-full aspect-[9/16]"
        />
      </PrismicLink>
      <PrismicLink href={promo.data.promo_link.url} className="pt-2">
        <span className="text-xs font-semibold font-title uppercase underline">
          {promo.data.promo_cta_text}
        </span>
      </PrismicLink>
    </div>
  );
};

const MobileSeperator = () => {
  return (
    <hr className="border-solid border-gray-200 border-t-2 pt-5 lg:hidden" />
  );
};

const SocialIcon = ({ socialName }: { socialName: string }) => {
  switch (socialName) {
    case "Instagram":
      return <FontAwesomeIcon icon={faInstagram} />;
    case "TikTok":
      return <FontAwesomeIcon icon={faTiktok} />;
    case "Pinterest":
      return <FontAwesomeIcon icon={faPinterest} />;
    case "Email":
      return <FontAwesomeIcon icon={faEnvelope} />;
    default:
      return null;
  }
};
