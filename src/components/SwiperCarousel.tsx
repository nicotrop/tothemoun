import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Mousewheel, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";

export const SwiperCarousel = ({
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
      className={`relative w-full ${className}`}
      modules={[Mousewheel]}
      mousewheel={true}
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
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1350: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
      }}
    >
      {children}
      <button
        className={`custom_prev ${
          swiperState.isBeginning && "custom_disabled"
        }`}
        onClick={() => {
          swiperRef.current?.slidePrev();
        }}
      >
        {"←"}
      </button>
      <button
        className={`custom_next ${swiperState.isEnd && "custom_disabled"}`}
        onClick={() => {
          swiperRef.current?.slideNext();
        }}
      >
        {"→"}
      </button>
    </Swiper>
  );
};

export const SwiperCarouselFixedHeight = ({
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
      className={`relative w-full ${className && className}`}
      modules={[Mousewheel]}
      mousewheel={true}
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
          height: 370,
        },
        450: {
          slidesPerView: 1,
          spaceBetween: 20,
          height: 390,
        },
        650: {
          slidesPerView: 2,
          spaceBetween: 15,
          height: 450,
        },
        850: {
          slidesPerView: 2,
          spaceBetween: 20,
          height: 390,
        },
        1050: {
          slidesPerView: 3,
          spaceBetween: 15,
          height: 430,
        },
        1250: {
          slidesPerView: 3,
          spaceBetween: 20,
          height: 380,
        },
        1350: {
          slidesPerView: 4,
          spaceBetween: 15,
          height: 350,
        },
      }}
    >
      {children}
      <button
        className={`custom_prev ${
          swiperState.isBeginning && "custom_disabled"
        }`}
        onClick={() => {
          swiperRef.current?.slidePrev();
        }}
      >
        {"←"}
      </button>
      <button
        className={`custom_next ${swiperState.isEnd && "custom_disabled"}`}
        onClick={() => {
          swiperRef.current?.slideNext();
        }}
      >
        {"→"}
      </button>
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

export const MyUniqueSwiperTest = () => {
  const swiperRef = useRef<SwiperCore>();

  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={3}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      <SwiperSlide>
        <div>
          <h1>Slide 1</h1>
          <Image
            src="https://images.unsplash.com/photo-1545579133-99bb5ab189bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="hello"
            width={800}
            height={100}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h1>Slide 2</h1>
          <Image
            src="https://images.unsplash.com/photo-1545579133-99bb5ab189bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="hello"
            width={800}
            height={100}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h1>Slide 3</h1>
          <Image
            src="https://images.unsplash.com/photo-1545579133-99bb5ab189bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="hello"
            width={800}
            height={100}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h1>Slide 4</h1>
          <Image
            src="https://images.unsplash.com/photo-1545579133-99bb5ab189bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="hello"
            width={800}
            height={100}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h1>Slide 5</h1>
          <Image
            src="https://images.unsplash.com/photo-1545579133-99bb5ab189bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="hello"
            width={800}
            height={100}
          />
        </div>
      </SwiperSlide>
      <button
        className="w-10 h-10 border-solid border-2 border-black"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        {"←"}
      </button>
      <button
        className="w-10 h-10 border-solid border-2 border-black"
        onClick={() => swiperRef.current?.slideNext()}
      >
        {"→"}
      </button>
    </Swiper>
  );
};