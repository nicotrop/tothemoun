import { ReactNode, useRef, useState } from "react";
import { Swiper } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export const SwiperImprovedCarousel = ({
  children,
  className,
  btnPosition = "top-pos",
}: {
  children: ReactNode;
  className?: string;
  btnPosition?: "mid-pos" | "top-pos";
}) => {
  const [swiperState, setSwiperState] = useState<{
    isBeginning?: boolean;
    isEnd?: boolean;
  }>({
    isBeginning: true,
    isEnd: false,
  });

  const swiperRef = useRef<SwiperCore>();

  return (
    <Swiper
      className={`w-full relative ${className}`}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
      onSlideChange={(swiper) => {
        const { isBeginning, isEnd } = swiper;
        setSwiperState({
          isBeginning,
          isEnd,
        });
      }}
      speed={400}
      breakpoints={{
        250: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        650: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1050: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1450: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
      }}
    >
      {children}
      <button
        className={`custom-slider-btn customarrow-left ${btnPosition}`}
        hidden={swiperState.isBeginning}
        disabled={swiperState.isBeginning}
        onClick={() => {
          swiperRef.current?.slidePrev();
        }}
      >
        {"←"}
      </button>
      <button
        className={`custom-slider-btn customarrow-right ${btnPosition}`}
        hidden={swiperState.isEnd}
        disabled={swiperState.isEnd}
        onClick={() => {
          swiperRef.current?.slideNext();
        }}
      >
        {"→"}
      </button>
    </Swiper>
  );
};
