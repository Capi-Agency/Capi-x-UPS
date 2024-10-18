"use client";
import Link from "next/link";
import React from "react";
import NextImg from "../next-img";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {};

const TheFooter = (props: Props) => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className="relative mt-[160px] bg-[#0F1B0E] text-[#FFF]">
      <div className="mx-auto lg:max-w-[1400px]  pt-[120px] pb-[72px]">
        <div className="grid grid-cols-2">
          <div
            className="flex flex-col gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="text-[#FFF] text-[48px] font-bold leading-[56px] w-[70%]">
              <span className="text-[#02E56A]">
                Kiến tạo tương lai vẹn toàn
              </span>{" "}
              với nền tảng đầu tư đột phá
            </span>
            <p className="text-[#8C9AA4] text-[18px] font-medium leading-[28px] w-[70%]">
              UPS là công ty chứng khoán đột phá dành cho thế hệ mới, nơi công
              nghệ và tư duy đổi mới, sáng tạo hợp nhất để đem lại trải nghiệm
              đầu tư thông minh, dễ dàng, và thú vị.
            </p>
          </div>
          <div
            className="grid grid-cols-[auto,230px] gap-[50px]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex flex-col">
              <p className="text-[#8C9AA4] text-[18px] font-medium leading-[28px] border-b border-[#8C9AA4] pb-4 mb-4">
                UPS là công ty chứng khoán đột phá dành cho thế hệ mới, nơi công
                nghệ và tư duy đổi mới, sáng tạo hợp nhất để đem lại trải
              </p>
              <div className="flex flex-col gap-[6px]">
                <div className="flex items-center gap-[6px]">
                  <div className="relative w-[19px] h-[19px]">
                    <NextImg
                      src="/assets/icons/verify.svg"
                      alt="Capi"
                      objectFit="cover"
                      className=""
                    />
                  </div>
                  <p className="text-[#8C9AA4] text-[18px] font-medium leading-[28px]">
                    Trung tâm hỗ trợ thuận tiện
                  </p>
                </div>
                <div className="flex items-center gap-[6px]">
                  <div className="relative w-[19px] h-[19px]">
                    <NextImg
                      src="/assets/icons/verify.svg"
                      alt="Capi"
                      objectFit="cover"
                      className=""
                    />
                  </div>
                  <p className="text-[#8C9AA4] text-[18px] font-medium leading-[28px]">
                    Chuyên viên tư vấn chuyên nghiệp
                  </p>
                </div>
                <div className="flex items-center gap-[6px]">
                  <div className="relative w-[19px] h-[19px]">
                    <NextImg
                      src="/assets/icons/verify.svg"
                      alt="Capi"
                      objectFit="cover"
                      className=""
                    />
                  </div>
                  <p className="text-[#8C9AA4] text-[18px] font-medium leading-[28px]">
                    Phản hồi thông tin nhanh chóng
                  </p>
                </div>
              </div>
            </div>
            <div>
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
              <p className="text-[#6E767C] text-[16px] font-medium leading-[24px] mt-6">
                Cảm ơn bạn đã tới với nền tảng giao dịch chứng khoán <br /> UP
                Securities
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-[#014227] w-full h-[1px]"
        data-aos="fade-up"
        data-aos-delay="200"
      ></div>
      <div className="pt-[120px] mx-auto lg:max-w-[1400px] ">
        <div className="grid grid-cols-[35%,65%] gap-5">
          <div className="" data-aos="fade-up" data-aos-delay="200">
            <Link
              href="/"
              aria-label="Ups"
              title="Ups"
              className="inline-flex items-center"
            >
              <div className="relative w-[210px] h-[50px] rounded-br-2xl">
                <NextImg
                  src="/assets/icons/logo-ups.svg"
                  alt="Capi"
                  objectFit="cover"
                  className=""
                />
              </div>
            </Link>
          </div>
          <div
            className="flex flex-col gap-[70px]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="grid grid-cols-2 gap-[60px] lg:col-span-4 md:grid-cols-4">
              <div>
                <p className="font-bold tracking-wide leading-normal">
                  Khách hàng cá nhân
                </p>
                <ul className="mt-6 space-y-6">
                  <li>
                    <div className="bg-[#02E56A] w-[10px] h-[1px]"></div>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-base text-[#9BABB6] font-medium leading-normal"
                    >
                      Ưu đãi
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-base text-[#9BABB6] font-medium leading-normal"
                    >
                      Biểu phí giao dịch
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  Khách hàng doanh nghiệp
                </p>
                <ul className="mt-6 space-y-6">
                  <li>
                    <div className="bg-[#02E56A] w-[10px] h-[1px]"></div>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-base text-[#9BABB6] font-medium leading-normal"
                    >
                      Tư vấn tài chính
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-base text-[#9BABB6] font-medium leading-normal"
                    >
                      Tin đấu giá
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  Đầu tư cùng UPS
                </p>
                <ul className="mt-6 space-y-6">
                  <li>
                    <div className="bg-[#02E56A] w-[10px] h-[1px]"></div>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-base text-[#9BABB6] font-medium leading-normal"
                    >
                      Nhận định thị trường
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-base text-[#9BABB6] font-medium leading-normal"
                    >
                      Hướng dẫn sử dụng
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  Về UPS
                </p>
                <ul className="mt-6 space-y-6">
                  <li>
                    <div className="bg-[#02E56A] w-[10px] h-[1px]"></div>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-base text-[#9BABB6] font-medium leading-normal"
                    >
                      Công bố thông tin
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-base text-[#9BABB6] font-medium leading-normal"
                    >
                      Gia nhập UPS
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#111] flex items-center gap-[9px] p-[10px] pr-[50px] rounded-[9px] cursor-pointer">
                <div className="relative w-6 h-6">
                  <NextImg
                    src="/assets/icons/google-play1.svg"
                    alt="Capi"
                    objectFit="cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[rgba(255,255,255,0.79)] text-xs font-medium leading-normal uppercase">
                    Get it on
                  </span>
                  <span className="text-base font-semibold leading-[21px]">
                    Google Play
                  </span>
                </div>
              </div>
              <div className="bg-[#111] flex items-center gap-[9px] p-[10px] pr-6 rounded-[9px] cursor-pointer">
                <div className="relative w-6 h-6">
                  <NextImg
                    src="/assets/icons/apple-logo1.svg"
                    alt="Capi"
                    objectFit="cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[rgba(255,255,255,0.79)] font-medium leading-normal text-xs uppercase">
                    Download on the
                  </span>
                  <span className="text-base font-semibold leading-[21px]">
                    App Store
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[120px] bg-[#060B06]">
        <div className="py-[30px] flex items-center justify-between mx-auto lg:max-w-[1400px] ">
          <p className="text-[rgba(255,255,255,0.79)] text-sm font-medium leading-normal">
            © 2024 <span className="text-[#02E56A]"> UP Securities</span>. All
            right reserved
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[rgba(255,255,255,0.79)] text-sm font-medium leading-normal">
              Điều khoản & Quyền hạn
            </span>
            <span className="text-[rgba(255,255,255,0.79)] text-sm font-medium leading-normal">
              Trung tâm hỗ trợ khách hàng
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheFooter;
