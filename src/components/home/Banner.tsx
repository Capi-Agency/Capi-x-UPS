"use client";
import React from "react";
import { MarqueeDemo } from "./Marquee";
import NextImg from "../common/next-img";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Props = {};

const Banner = (props: Props) => {
  return (
    <>
      <div className="flex justify-center ">
        <div className="flex flex-col justify-center items-center w-[808px] mx-auto">
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
            >
              <rect width="56" height="56" rx="28" fill="#02E56A" />
              <path
                d="M40.5001 16V39.9377H33.571V27.4551H32.2373C32.1253 27.9217 31.9526 28.596 31.7208 29.4029C31.2826 30.9209 31.0539 31.7214 30.6717 32.6019C29.861 34.4985 28.7783 35.7688 28.3178 36.3105C27.5198 37.2469 26.6211 37.9835 25.6216 38.5236C25.1275 38.7888 24.6014 39.0173 24.0465 39.1979C23.087 39.575 22.0699 39.8274 21.0177 39.9377C20.6131 39.976 20.2021 40 19.7815 40C19.361 40 18.9532 39.976 18.5502 39.9377C17.8562 39.8642 17.1845 39.7348 16.5417 39.5494C16.5273 39.5462 16.5145 39.543 16.5001 39.5382V30.678C16.5145 30.6892 16.5273 30.6988 16.5417 30.7084C20.2885 33.5142 25.6472 32.6961 28.5449 29.077C29.3428 28.0799 29.9569 26.947 30.4191 25.7646C30.4974 25.5648 30.9532 23.9334 31.2074 22.9284H16.5417V16H40.5001Z"
                fill="#014227"
              />
            </svg>
          </i>
          <p className="text-white text-center text-base font-medium leading-normal pt-[16px]">
            UP Secirities
          </p>
          <h1 className="text-white text-center text-[76px] font-bold leading-[82px] tracking-[-1.52px] pt-[14px]">
            Chính thức ra mắt dẫn lối hành trình đầu tư của bạn
          </h1>
          <div className="flex items-center pt-[52px] gap-[20px]">
            <div className="btn active group flex item-center">
              <span> Mở tài khoản ngay </span>
              <div className="inline-flex gap-1 w-[24px] h-[24px] overflow-hidden relative">
                <i className="w-full h-full group-hover:inline-flex hidden absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.7595 5.98952C18.7595 5.7906 18.6805 5.59984 18.5398 5.45919C18.3992 5.31853 18.2084 5.23952 18.0095 5.23952L9.42521 5.23952C9.01099 5.23952 8.67521 5.5753 8.67521 5.98952C8.67521 6.40373 9.01099 6.73952 9.42521 6.73952L16.1993 6.73952L5.45862 17.4802C5.16572 17.7731 5.16572 18.2479 5.45862 18.5408C5.75151 18.8337 6.22638 18.8337 6.51928 18.5408L17.2595 7.80062V14.5738C17.2595 14.988 17.5953 15.3238 18.0095 15.3238C18.4237 15.3238 18.7595 14.988 18.7595 14.5738L18.7595 5.98952Z"
                      fill="#014227"
                    />
                  </svg>
                </i>

                <i className="w-full h-full group-hover:hidden inline-flex absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.7595 5.98952C18.7595 5.7906 18.6805 5.59984 18.5398 5.45919C18.3992 5.31853 18.2084 5.23952 18.0095 5.23952L9.42521 5.23952C9.01099 5.23952 8.67521 5.5753 8.67521 5.98952C8.67521 6.40373 9.01099 6.73952 9.42521 6.73952L16.1993 6.73952L5.45862 17.4802C5.16572 17.7731 5.16572 18.2479 5.45862 18.5408C5.75151 18.8337 6.22638 18.8337 6.51928 18.5408L17.2595 7.80062V14.5738C17.2595 14.988 17.5953 15.3238 18.0095 15.3238C18.4237 15.3238 18.7595 14.988 18.7595 14.5738L18.7595 5.98952Z"
                      fill="#02e56a"
                    />
                  </svg>
                </i>
              </div>
            </div>
            <div>
              <p className="text-[#8C9AA4] text-base font-medium leading-normal">
                Nền tảng đầu tư đột phá <br />
                về trải nghiệm người dùng
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex items-center gap-9 mt-[70px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1600px] px-4 lg:px-20">
        <span className="text-[#FFF] text-xl font-medium w-[110px]">
          Top đầu tư của tuần
        </span>
        <div className="flex items-center gap-5">
          <div className="relative w-[54px] h-[54px]">
            <NextImg
              src="/assets/image/user1.jpg"
              alt="Capi"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#FFF] text-xl font-medium">
              Trần Hoài Trang
            </span>
            <span className="text-[#05BE5A] text-base font-medium">
              + 7.90%
            </span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="relative w-[54px] h-[54px]">
            <NextImg
              src="/assets/image/user1.jpg"
              alt="Capi"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#FFF] text-xl font-medium">
              Trần Hoài Trang
            </span>
            <span className="text-[#05BE5A] text-base font-medium">
              + 7.90%
            </span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="relative w-[54px] h-[54px]">
            <NextImg
              src="/assets/image/user1.jpg"
              alt="Capi"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#FFF] text-xl font-medium">
              Trần Hoài Trang
            </span>
            <span className="text-[#05BE5A] text-base font-medium">
              + 7.90%
            </span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="relative w-[54px] h-[54px]">
            <NextImg
              src="/assets/image/user1.jpg"
              alt="Capi"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#FFF] text-xl font-medium">
              Trần Hoài Trang
            </span>
            <span className="text-[#05BE5A] text-base font-medium">
              + 7.90%
            </span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="relative w-[54px] h-[54px]">
            <NextImg
              src="/assets/image/user1.jpg"
              alt="Capi"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#FFF] text-xl font-medium">
              Trần Hoài Trang
            </span>
            <span className="text-[#05BE5A] text-base font-medium">
              + 7.90%
            </span>
          </div>
        </div>
      </div> */}
      <div className="flex items-center gap-9 mt-[70px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1600px] px-4 lg:px-20">
        <div>
          <p className="text-[#FFF] text-xl font-medium w-[110px]">
            Top đầu tư của tuần
          </p>
        </div>
        <Swiper
         breakpoints={{
          1600: {
            slidesPerView: 5, 
          },
          1440: {
            slidesPerView: 4, 
          },
          1280: {
            slidesPerView: 3, 
          },
          640: {
            slidesPerView: 3, 
          }
        }}
          spaceBetween={24}
        >
          <SwiperSlide>
            <div className="flex items-center gap-5">
              <div className="relative w-[54px] h-[54px]">
                <NextImg
                  src="/assets/image/user1.jpg"
                  alt="Capi"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[#FFF] text-xl font-medium">
                  Trần Hoài Trang
                </span>
                <span className="text-[#05BE5A] text-base font-medium">
                  + 7.90%
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center gap-5">
              <div className="relative w-[54px] h-[54px]">
                <NextImg
                  src="/assets/image/user1.jpg"
                  alt="Capi"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[#FFF] text-xl font-medium">
                  Trần Hoài Trang
                </span>
                <span className="text-[#05BE5A] text-base font-medium">
                  + 7.90%
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center gap-5">
              <div className="relative w-[54px] h-[54px]">
                <NextImg
                  src="/assets/image/user1.jpg"
                  alt="Capi"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[#FFF] text-xl font-medium">
                  Trần Hoài Trang
                </span>
                <span className="text-[#05BE5A] text-base font-medium">
                  + 7.90%
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center gap-5">
              <div className="relative w-[54px] h-[54px]">
                <NextImg
                  src="/assets/image/user1.jpg"
                  alt="Capi"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[#FFF] text-xl font-medium">
                  Trần Hoài Trang
                </span>
                <span className="text-[#05BE5A] text-base font-medium">
                  + 7.90%
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center gap-5">
              <div className="relative w-[54px] h-[54px]">
                <NextImg
                  src="/assets/image/user1.jpg"
                  alt="Capi"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[#FFF] text-xl font-medium">
                  Trần Hoài Trang
                </span>
                <span className="text-[#05BE5A] text-base font-medium">
                  + 7.90%
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <MarqueeDemo />
      </div>
    </>
  );
};

export default Banner;
