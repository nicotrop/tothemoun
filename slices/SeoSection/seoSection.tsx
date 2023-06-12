import { KeyTextField, RichTextField } from "@prismicio/types";
import { Wrapper } from "../../src/components/global";
import { PrismicRichText } from "@prismicio/react";

export const SEOsectionComp = ({
  title,
  content,
}: {
  title: KeyTextField;
  content: RichTextField;
}) => {
  return (
    <Wrapper>
      <article className="max-w-3xl m-auto flex flex-col items-center text-center gap-4 lg:gap-6">
        <h4 className="text-3xl lg:text-4xl font-black tracking-tighter font-header">
          {title}
        </h4>
        <PrismicRichText field={content} />
      </article>
    </Wrapper>
  );
};
