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
      <div className="flex justify-center custom-container" data-aos="fade-up">
        <div className="flex flex-col justify-center items-center mx-auto">
          <div className="relative w-10 h-10 lg:w-[56px] lg:h-[56px]">
            <NextImg
              src="/assets/icons/ups-icon2.svg"
              alt="Capi"
              objectFit="cover"
            />
          </div>
          <p className="text-[#FFF] text-center text-[14px] lg:text-base font-medium leading-normal pt-2 lg:pt-[16px]">
            UP Securities
          </p>
          <h1 className="text-[#FFF] text-center text-[32px] lg:w-[810px] lg:text-[76px] font-bold leading-normal lg:leading-[82px] -tracking-[0.64px] lg:tracking-[-1.52px] pt-[14px]">
            Chính thức ra mắt <br /> dẫn lối hành trình đầu tư của bạn
          </h1>
          <div className="flex items-center pt-6 lg:pt-[52px] gap-[20px]">
            <button className="btn active">
              Mở tài khoản ngay
              <div className="relative w-4 h-4 lg:w-6 lg:h-6">
                <NextImg
                  src="/assets/icons/UPs.svg"
                  alt="Capi"
                  objectFit="cover"
                />
              </div>
            </button>
            <p className="text-[#8C9AA4] text-base font-medium leading-normal lg:block hidden">
              Nền tảng đầu tư đột phá <br />
              về trải nghiệm người dùng
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex lg:flex-row flex-col items-center gap-4 lg:gap-9 mt-6 lg:mt-[70px] max-w-[1390px] mx-auto"
        data-aos="fade-up"
      >
        <p className="text-[#FFF] text-sm lg:text-xl font-medium lg:w-[110px]">
          Top đầu tư của tuần
        </p>
        <div className="flex items-center gap-3 lg:gap-9 whitespace-nowrap overflow-x-auto scrollbar-hidden max-w-full lg:px-0 px-6">
          {userData.map((user, index) => (
            <div className="flex items-center gap-5" key={index}>
              <div className="relative w-10 h-10 lg:w-[54px] lg:h-[54px]">
                <NextImg
                  src={user.image}
                  alt={user.name}
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[#FFF] text-sm lg:text-xl font-medium">
                  {user.name}
                </span>
                <span className="text-[#05BE5A] text-xs lg:text-base font-medium">
                  {user.percentage}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div data-aos="fade-up">
        <MarqueeDemo />
      </div>
    </>
  );
};

export default Banner;
