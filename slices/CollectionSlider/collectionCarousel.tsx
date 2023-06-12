import {
  SectionTitle,
  SectionTitleContainer,
  Wrapper,
} from "../../src/components/global";
import { SwiperSlide } from "swiper/react";
import { SwiperImprovedCarousel } from "@/components/sliders";

import "swiper/css";
import { CollectionDocument } from "types.generated";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink } from "@prismicio/react";
import {
  CollectionProps,
  CollectionSlider,
} from "slices/CollectionSlider/type";

export const CollectionCarousel = ({
  data,
  title,
}: {
  data: CollectionSlider;
  title: string;
}) => {
  return (
    <Wrapper
      padding={false}
      className="sm:pb-0 overflow-hidden w-full py-wrapper_y"
    >
      <SectionTitleContainer containerClassName="mx-8 border-t-4 border-black sm:border-black border-solid pt-4">
        <div className="flex flex-col gap-2">
          <SectionTitle title={title} />
        </div>
      </SectionTitleContainer>
      <SwiperImprovedCarousel className="max-h-[580px]" btnPosition="mid-pos">
        <ul>
          {data?.map((article: CollectionProps, i: number) => {
            return (
              <SwiperSlide tag="li" key={i} className="aspect-[9/16]">
                <PrismicLink document={article?.collection}>
                  <ArticleCard article={article.collection} />
                </PrismicLink>
              </SwiperSlide>
            );
          })}
        </ul>
      </SwiperImprovedCarousel>
    </Wrapper>
  );
};

export const ArticleCard = ({ article }: { article: CollectionDocument }) => {
  return (
    <article className="w-full z-50 h-full relative rounded-sm overflow-hidden">
      <div className="img-hover w-full h-full m-0 p-0 relative">
        <PrismicNextImage
          field={article.data.image}
          fill
          className="object-cover w-full m-0 h-full"
        />
      </div>
      <picture className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50 hover:opacity-20 cursor-pointer hover:ease-in hover:duration-200"></picture>
      <div className="absolute left-6 top-6 w-[calc(100%-(2*1.5rem))] sm:w-[85%] m-auto">
        <h5
          className="md:text-2xl text-xl font-display italic font-extrabold uppercase text-white"
          style={{ lineHeight: "1.5rem" }}
        >
          {article.data.title}
        </h5>
      </div>
    </article>
  );
};
