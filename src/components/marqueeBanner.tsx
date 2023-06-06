import { ColorField, KeyTextField } from "@prismicio/types";
import { MarqueeBannerSlice } from "types.generated";
import { Wrapper } from "./global";

export const MarqueeBannerComp = ({
  items,
  primary,
}: {
  items: MarqueeBannerSlice["items"];
  primary: MarqueeBannerSlice["primary"];
}) => {
  return (
    <Wrapper
      padding={false}
      className="lg:pt-3 lg:pb-3 sm:pt-0 h-full"
      style={{
        backgroundColor: primary.background_color
          ? primary.background_color
          : "white",
      }}
    >
      <OtherMarquee size={primary.text_size} color={primary.text_color}>
        {items.map((elem, index) => {
          return (
            <div key={index} className="inline-flex items-center">
              <span>{elem.text_content}</span>
            </div>
          );
        })}
      </OtherMarquee>
    </Wrapper>
  );
};

const OtherMarquee = ({
  children,
  size,
  color,
}: {
  children: React.ReactNode;
  size: KeyTextField;
  color: ColorField;
}) => {
  let sizeClass = "text-7xl xl:text-9xl gap-10 lg:gap-20";
  switch (size) {
    case "L":
      sizeClass = "text-3xl xl:text-5xl py-3 gap-6 lg:gap-12";
      break;
    case "XL":
      sizeClass = "text-5xl xl:text-7xl py-3 gap-8 lg:gap-16";
      break;
    case "XXL":
      sizeClass = "text-7xl xl:text-9xl gap-10 lg:gap-20";
      break;
    default:
      sizeClass = "text-7xl xl:text-9xl gap-10 lg:gap-20";
  }
  return (
    <div
      className={`w-fit flex font-bebas font-extrabold items-center whitespace-nowrap overflow-hidden relative animate-fasterMarquee uppercase tracking-tighter ${sizeClass}`}
      style={{
        color: color ? color : "black",
      }}
    >
      {children}
    </div>
  );
};
