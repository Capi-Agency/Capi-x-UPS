'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import NextImg from '../common/next-img';
import Link from 'next/link';
type Props = {
  data: any;
};

const SlideHome = ({ data }: Props) => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  return (
    <div
      className="custom-container mt-6 md:mt-10 lg:mt-11 xl:mt-16 2xl:mt-20 3xl:mt-[120px]"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="700"
    >
      <div className="relative rounded-[12px] lg:rounded-3xl">
        <Swiper
          ref={swiperRef}
          mousewheel={true}
          keyboard={true}
          loop={true}
          freeMode={true}
          breakpoints={{
            1024: {
              speed: 800,
            },
            0: {
              speed: 400,
            },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="rounded-[12px] lg:rounded-3xl"
        >
          {data.map((slide: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <Link href={slide?.image_ads.url}>
                  <div className="relative h-[342px] w-full md:h-[360px] lg:h-[400px] lg2:h-[440px] 2xl:h-[500px] 3xl:h-[560px]">
                    <NextImg
                      src={
                        process.env.REACT_APP_IMG_URL + slide?.image_ads.cover
                      }
                      alt="Capi"
                      objectFit="cover"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          id="prevBtn"
          className="group absolute -left-8 top-1/2 z-[10] hidden -translate-y-1/2 rounded-full bg-[#02E56A] p-6 hover:bg-[#15171E] lg2:block"
          onClick={() => {
            if (swiperRef.current && swiperRef.current.swiper) {
              if (!isAnimating) {
                setIsAnimating(true);
                swiperRef.current.swiper.slidePrev();
                setActiveIndex(
                  (prevIndex) => (prevIndex - 1 + data.length) % data.length,
                );
                setTimeout(() => {
                  setIsAnimating(false);
                }, 800);
              }
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
          className="group absolute -right-8 top-1/2 z-[10] hidden -translate-y-1/2 rounded-full bg-[#02E56A] p-6 hover:bg-[#15171E] lg2:block"
          onClick={() => {
            if (swiperRef.current && swiperRef.current.swiper) {
              if (!isAnimating) {
                setIsAnimating(true);
                swiperRef.current.swiper.slideNext();
                setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);

                setTimeout(() => {
                  setIsAnimating(false);
                }, 800);
              }
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
        <div className="pagination-custom absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 justify-center space-x-3">
          {data.map((_: any, index: number) => (
            <button
              key={index}
              className={`h-[4px] w-[20px] rounded-[20px] transition duration-300 ${
                activeIndex === index
                  ? 'bg-[#15171E]'
                  : 'bg-[rgba(255,255,255,0.50)]'
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
