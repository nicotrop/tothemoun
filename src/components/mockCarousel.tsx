import { Article, mockArticleSectionData } from "@/utils/mockData";
import { SectionTitle, SectionTitleContainer, Wrapper } from "./global";
import Link from "next/link";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { SwiperCarousel } from "@/components/sliders";

import "swiper/css";

const MockCarousel = () => {
  const data = mockArticleSectionData.articles;
  return (
    <Wrapper
      padding={false}
      className="box-content overflow-hidden border-t-2 border-solid border-black"
    >
      {/* <SectionTitleContainer>
        <SectionTitle
          title={mockArticleSectionData.title}
          className="text-hover"
        />
        <p className="pt-4 text-hover">{mockArticleSectionData.description}</p>
      </SectionTitleContainer>
      <hr className="border-solid border-gray-200 border-t-2 pt-5" /> */}
      <SwiperCarousel>
        {data?.map((article: Article, i: number) => {
          return (
            <SwiperSlide key={i}>
              <ArticleCard article={article} />
            </SwiperSlide>
          );
        })}
      </SwiperCarousel>
    </Wrapper>
  );
};

export const ArticleCard = ({
  article,
}: {
  article: Article;
  type?: string;
}) => {
  return (
    <div
      className={`border-solid border-black border-2 flex flex-col items-start gap-2`}
    >
      <div className="w-full z-50">
        <Link href={"/"} className="img-hover w-full m-0 p-0">
          {/* <PrismicNextImage */}
          {/* field={article.article_cover} */}
          <Image
            src={article.article_cover}
            height={350}
            width={350}
            alt={article.article_title}
            className="object-cover w-full m-0"
          />
        </Link>
      </div>
      <div className="flex flex-col items-start px-6 pb-4 min-h-[40%]">
        <Link href={"/"} className="text-hover">
          <h5
            className="md:text-lg text-base font-title font-bold uppercase tracking-tight"
            style={{ lineHeight: "1.5rem" }}
          >
            {article.article_title}
          </h5>
        </Link>
        <span className="text-gray-900 tracking-tighter text-xs sm:text-sm md:text:base capitalize font-semibold py-1">
          {/* {format(parseISO(article.date), "dd MMMM yyyy", { locale: fr })} */}
          {article.date}
        </span>
        <Link
          href={"/"}
          className="text-hover flex items-center"
          style={{ height: "45px" }}
        >
          <p
            className="text-sm md:text:base w-full font-serif"
            style={{ lineHeight: "1.25" }}
          >
            {article.preview ??
              "Start by editing this slice from inside Slice Machine!"}
          </p>
        </Link>
        <div
          className="w-full flex items-center"
          style={{ height: "25px", gap: "3px" }}
        >
          {/* <PrismicNextImage */}
          {/* field={article.article_author.author_avatar.url} */}
          <Image
            src={article.article_author.author_avatar.url}
            height={25}
            width={25}
            alt={article.article_author.author_first_name}
            className="object-cover aspect-square h-full"
            style={{ borderRadius: "50%" }}
          />
          <Link href={`/`} className="text-hover">
            <span className="text-xs tracking-tight">{`${article.article_author.author_first_name} ${article.article_author.author_last_name} `}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MockCarousel;
