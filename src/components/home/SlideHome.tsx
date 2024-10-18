"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import NextImg from "../common/next-img";
type Props = {};

const SlideHome = (props: Props) => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    "/assets/image/img-slide.png",
    "/assets/image/img-slide.png",
    "/assets/image/img-slide.png",
  ];
  return (
    <div
      className="custom-container   mt-[120px]"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="relative rounded-3xl">
        <Swiper
          ref={swiperRef}
          mousewheel={true}
          keyboard={true}
          loop={true}
          freeMode={true}
          speed={800}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="rounded-3xl"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[560px]">
                <NextImg src={slide} alt="Capi" objectFit="cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          id="prevBtn"
          className="rounded-full bg-[#02E56A] hover:bg-[#15171E] p-6 group absolute top-1/2 -translate-y-1/2 -left-8 z-[10]"
          onClick={() => {
            if (swiperRef.current && swiperRef.current.swiper) {
              swiperRef.current.swiper.slidePrev();
              setActiveIndex(
                (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
              );
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="12"
            viewBox="0 0 16 12"
            className="transition-all duration-300 group-hover:fill-[#02E56A]"
            fill="none"
          >
            <path
              d="M0.398625 5.46967C0.105732 5.76256 0.105732 6.23744 0.398625 6.53033L5.1716 11.3033C5.46449 11.5962 5.93936 11.5962 6.23226 11.3033C6.52515 11.0104 6.52515 10.5355 6.23226 10.2426L1.98962 6L6.23226 1.75736C6.52515 1.46447 6.52515 0.989593 6.23226 0.696699C5.93936 0.403806 5.46449 0.403806 5.1716 0.696699L0.398625 5.46967ZM15.0711 6.75C15.4853 6.75 15.8211 6.41421 15.8211 6C15.8211 5.58579 15.4853 5.25 15.0711 5.25V6.75ZM0.928955 6.75H15.0711V5.25H0.928955V6.75Z"
              className="fill-[#15171E] group-hover:fill-[#02E56A]"
            />
          </svg>
        </button>
        <button
          id="nextBtn"
          className="rounded-full bg-[#02E56A] hover:bg-[#15171E] p-6 group absolute top-1/2 -translate-y-1/2 -right-8 z-[10]"
          onClick={() => {
            if (swiperRef.current && swiperRef.current.swiper) {
              swiperRef.current.swiper.slideNext();
              setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="12"
            viewBox="0 0 16 12"
            className="transition-all duration-300 group-hover:fill-[#02E56A]"
            fill="none"
          >
            <path
              d="M0.928955 5.25C0.514742 5.25 0.178955 5.58579 0.178955 6C0.178955 6.41421 0.514742 6.75 0.928955 6.75V5.25ZM15.6014 6.53033C15.8943 6.23744 15.8943 5.76256 15.6014 5.46967L10.8285 0.696699C10.5356 0.403806 10.0607 0.403806 9.76779 0.696699C9.4749 0.989593 9.4749 1.46447 9.76779 1.75736L14.0104 6L9.76779 10.2426C9.4749 10.5355 9.4749 11.0104 9.76779 11.3033C10.0607 11.5962 10.5356 11.5962 10.8285 11.3033L15.6014 6.53033ZM0.928955 6.75H15.0711V5.25H0.928955V6.75Z"
              className="fill-[#15171E] group-hover:fill-[#02E56A]"
            />
          </svg>
        </button>
        <div className="pagination-custom absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-[20px] h-[4px] transition duration-300 rounded-[20px] ${
                activeIndex === index
                  ? "bg-[#15171E]"
                  : "bg-[rgba(255,255,255,0.50)]"
              }`}
              onClick={() => {
                if (swiperRef.current) {
                  swiperRef.current.swiper.slideTo(index);
                  setActiveIndex(index);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideHome;
