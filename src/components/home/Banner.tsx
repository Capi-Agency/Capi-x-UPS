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
    <div className="relative pt-20 lg:pt-16 2xl:pt-[90px] 3xl:pt-[100px] mx-auto bg-[linear-gradient(180deg,#0E1A0D_82%,#060B06_100%)] mt-[-15px]">
      <div className="flex justify-center custom-container" data-aos="fade-up">
        <div className="flex flex-col justify-center items-center mx-auto">
          <div className="relative w-10 h-10 md:w-[56px] md:h-[56px]">
            <NextImg
              src="/assets/icons/ups-icon2.svg"
              alt="Capi"
              objectFit="cover"
            />
          </div>
          <p className="text-[#FFF] text-center text-[14px] lg:text-base font-medium leading-normal pt-2 md:pt-[16px]">
            UP Securities
          </p>
          <h1 className="text-[#FFF] text-center text-[32px] md:text-[40px] lg:text-[46px] xl:text-[56px] 2xl:text-[66px] 3xl:text-[76px] font-bold leading-normal lg:leading-[52px] xl:leading-[62px] 2xl:leading-[72px] 3xl:leading-[82px] -tracking-[0.64px] md:tracking-[-0.8px] lg:tracking-[-0.92px] xl:tracking-[-1.12px] 2xl:tracking-[-1.32px] 3xl:tracking-[-1.52px] mt-[14px]">
            Chính thức ra mắt <br /> dẫn lối hành trình đầu tư <br className="md:block hidden"/> của bạn
          </h1>
          <div className="flex items-center pt-6 md:pt-8 lg:pt-[52px] gap-[20px]">
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
            <p className="text-[#8C9AA4] text-base font-medium leading-normal md:block hidden">
              Nền tảng đầu tư đột phá <br />
              về trải nghiệm người dùng
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex md:flex-row flex-col items-center gap-4 md:gap-6 2xl:gap-9 mt-6 md:mt-10 lg:mt-[50px] 2xl:mt-[60px] 3xl:mt-[70px] max-w-full md:max-w-full lg:max-w-[870px] xl:max-w-[1130px] 2xl:max-w-[1390px] px-6 lg:px-0 mx-auto"
        data-aos="fade-up"
      >
        <p className="text-[#FFF] text-sm lg:text-xl font-medium md:min-w-20 md:w-20 lg:min-w-[110px] lg:w-[110px]">
          Top đầu tư của tuần
        </p>
        <div className="flex items-center gap-3 lg:gap-9 whitespace-nowrap overflow-x-auto scrollbar-hidden max-w-full lg:px-0">
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
    </div>
  );
};

export default Banner;
