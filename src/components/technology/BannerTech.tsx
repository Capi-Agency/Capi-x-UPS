"use client";
import React from "react";

import NextImg from "../common/next-img";

type Props = {};

const BannerTech = (props: Props) => {
  return (
    <div
      className="bg-[url('/assets/image/bg-technology.png')] w-full h-[960px] bg-cover bg-no-repeat relative overflow-hidden"
      data-aos="fade-up"
    >
      <div className="flex flex-col gap-5 justify-center items-center pt-11 pb-10">
        <p className="text-[44px] text-[#FFF] font-bold -tracking-[0.88px]">
          Nền tảng công nghệ <span className="text-[#02E56A]">vượt trội.</span>
        </p>
        <div className="bg-[#60606B] opacity-[0.65] w-[20%] h-[1px]"></div>
        <p className="text-[#FFF] text-[17px] font-bold -tracking-[0.42px] leading-[140%]">
          Bền bỉ - nhanh chóng - thuận tiện - dễ dàng
        </p>
      </div>
      <div className="relative w-[966px] h-[658px] mt-[30px] mx-auto">
        <NextImg
          src="/assets/image/banner-tech-img.png"
          alt="Capi"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default BannerTech;
