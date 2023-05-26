import { ReactNode, useRef, useState } from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export const SwiperCarousel = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
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
          slidesPerView: 1,
          spaceBetween: 15,
        },
        450: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        650: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        850: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1050: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1250: {
          slidesPerView: 3.25,
          spaceBetween: 20,
        },
        // 1350: {
        //   slidesPerView: 4,
        //   spaceBetween: 15,
        // },
      }}
    >
      {children}
      <button
        className={`custom_prev`}
        disabled={swiperState.isBeginning}
        onClick={() => {
          swiperRef.current?.slidePrev();
        }}
      >
        {"←"}
      </button>
      <button
        className={`custom_next`}
        onClick={() => {
          swiperRef.current?.slideNext();
        }}
        disabled={swiperState.isEnd}
      >
        {"→"}
      </button>
    </Swiper>
  );
};

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

export const SwiperHeroArticles = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
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
      className={`relative h-full ${className}`}
      slidesPerView={1}
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
      autoplay={{
        delay: 4000,
        pauseOnMouseEnter: true,
        stopOnLastSlide: false,
      }}
      speed={950}
      pagination={{
        bulletClass: "custom-pagination-bullet",
        bulletActiveClass: "custom-pagination-bullet-active",
        clickable: true,
      }}
      effect={"fade"}
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
    >
      {children}
    </Swiper>
  );
};

export const SwiperColCarousel = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative w-full">
      <button className="custom_next">→</button>
      <button className="custom_prev">←</button>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom_next",
          prevEl: ".custom_prev",
          disabledClass: "custom_disabled",
          hiddenClass: "custom_hidden",
        }}
        speed={400}
        breakpoints={{
          250: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          450: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          650: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          850: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1050: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1250: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1350: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        }}
      >
        {children}
      </Swiper>
    </div>
  );
};
