"use client";
import React from "react";
import { MarqueeDemo } from "./Marquee";
import NextImg from "../common/next-img";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Props = {};
interface User {
  name: string;
  image: string;
  percentage: string;
}

const userData: User[] = [
  {
    name: "Trần Hoài Trang",
    image: "/assets/image/user1.jpg",
    percentage: "+7.90%",
  },
  {
    name: "Phí Ngọc Thắng",
    image: "/assets/image/user2.jpg",
    percentage: "+ 8.30%",
  },
  {
    name: "Nguyễn Trung Anh",
    image: "/assets/image/user3.jpg",
    percentage: "+ 11.40%",
  },
  {
    name: "Nguyễn Thái Nhi",
    image: "/assets/image/user4.jpg",
    percentage: "+ 5.60%",
  },
  {
    name: "Trần Anh Tuấn",
    image: "/assets/image/user5.jpg",
    percentage: "+ 6.20%",
  },
];
const Banner = (props: Props) => {
  return (
    <>
      <div className="flex justify-center " data-aos="fade-up">
        <div className="flex flex-col justify-center items-center w-[800px] mx-auto">
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
            UP Securities
          </p>
          <h1 className="text-white text-center text-[76px] font-bold leading-[82px] tracking-[-1.52px] pt-[14px]">
            Chính thức ra mắt dẫn lối hành trình đầu tư của bạn
          </h1>
          <div className="flex items-center pt-[52px] gap-[20px]">
            <button className="btn active">
              Mở tài khoản ngay
              <div className="relative w-6 h-6">
                <NextImg
                  src="/assets/icons/UPs.svg"
                  alt="Capi"
                  objectFit="cover"
                />
              </div>
            </button>
            <div>
              <p className="text-[#8C9AA4] text-base font-medium leading-normal">
                Nền tảng đầu tư đột phá <br />
                về trải nghiệm người dùng
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex items-center gap-9 mt-[70px] mx-auto lg:max-w-[1440px]  "
        data-aos="fade-up"
      >
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
            },
          }}
          spaceBetween={24}
        >
          {userData.map((user, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center gap-5">
                <div className="relative w-[54px] h-[54px]">
                  <NextImg
                    src={user.image}
                    alt={user.name}
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#FFF] text-xl font-medium">
                    {user.name}
                  </span>
                  <span className="text-[#05BE5A] text-base font-medium">
                    {user.percentage}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div data-aos="fade-up">
        <MarqueeDemo />
      </div>
    </>
  );
};

export default Banner;
