import { PhotoBannerSlice } from "types.generated";
import { PrismicNextImage } from "@prismicio/next";
import { KeyTextField } from "@prismicio/types";

export const PhotoBannerComp = ({
  data,
}: {
  data: PhotoBannerSlice["primary"];
}) => {
  return (
    <section className="max-h-[85vh] sm:max-h-[65vh] w-full overflow-hidden relative">
      <div className="w-full aspect-[9/16] sm:aspect-[6/4] relative">
        <picture className="absolute top-0 left-0 w-full h-full bg-black opacity-25 z-20"></picture>
        <PrismicNextImage
          field={data.image}
          fill
          className="w-full object-cover object-center"
        />
      </div>
      <HeroTitleComp title={data.title} subtitle={data.subtitle} />
    </section>
  );
};

export const HeroTitleComp = ({
  title = "Consectetur adipisicing",
  subtitle = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ut!",
}: {
  title?: string | KeyTextField;
  subtitle?: string | KeyTextField;
}) => {
  return (
    <div className="absolute h-[200px] flex flex-col justify-center left-[calc((100%-(300px))/2)] top-[calc((100%-(200px))/2)] max-w-[300px] w-full text-white m-0 z-40">
      <h3 className="font-display text-4xl font-bold tracking-tighter leading-relaxed text-center italic">
        {title}
      </h3>
      <p className="uppercase tracking-wider leading-5 font-semibold text-center py-4">
        {subtitle}
      </p>
    </div>
  );
};
