import { Wrapper } from "../../src/components/global";
import {
  PinterestItemsDocument,
  PinterestItemsDocumentDataPostItem,
} from "types.generated";
import { SelectField } from "@prismicio/types";
import { PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export const PinterestGridComp = ({
  elem,
}: {
  elem: PinterestItemsDocument;
}) => {
  return (
    <Wrapper>
      <ul className="pin_container">
        {elem.data.post.map((item, index) => {
          return (
            <PinterestCard key={index} type={item.card_type} post={item} />
          );
        })}
      </ul>
    </Wrapper>
  );
};

const PinterestCard = ({
  type,
  post,
}: {
  type: SelectField<"small" | "medium" | "large">;
  post: PinterestItemsDocumentDataPostItem;
}) => {
  let currentClass = "";
  switch (type) {
    case "small":
      currentClass = "card_small";
      break;
    case "medium":
      currentClass = "card_medium";
      break;
    case "large":
      currentClass = "card_large";
      break;
    default:
      currentClass = "card_medium";
      break;
  }

  return (
    <li className={`card ${currentClass} relative overflow-hidden`}>
      <PrismicLink field={post.link}>
        <PrismicNextImage
          field={post.media}
          fill
          className="object-cover w-full h-full"
        />
      </PrismicLink>
    </li>
  );
};
