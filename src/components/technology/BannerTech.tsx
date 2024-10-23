"use client";
import React from "react";

import NextImg from "../common/next-img";

type Props = {};

const BannerTech = (props: Props) => {
  return (
    <div className="bg-[#0D0344]">
      <div className="custom-container pt-16 lg:pt-20 pb-10 lg:pb-12" data-aos="fade-up">
        <div className="flex flex-col gap-3 lg:gap-5 justify-center items-center pb-10 lg:pb-16">
          <p className="text-[32px] lg:text-[44px] text-[#FFF] font-bold -tracking-[0.88px] text-center">
            Nền tảng công nghệ{" "}
            <span className="text-[#02E56A]"><br className="lg:hidden block"/>vượt trội.</span>
          </p>
          <div className="bg-[#60606B] opacity-[0.65] w-[35%] lg:w-[20%] h-[1px]"></div>
          <p className="text-[#FFF] text-sm lg:text-[17px] font-bold -tracking-[0.42px] leading-[140%]">
            Bền bỉ - nhanh chóng - thuận tiện - dễ dàng
          </p>
        </div>
        <div className="relative w-full pt-[46%] mx-auto lg:block hidden">
          <NextImg
            src="/assets/image/banner-tech-img.png"
            alt="Capi"
            objectFit="cover"
          />
        </div>
        <div className="relative w-full pt-[70%] mx-auto lg:hidden block">
          <NextImg
            src="/assets/image/banner-tech-mb.svg"
            alt="Capi"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerTech;
