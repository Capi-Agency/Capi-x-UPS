"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import NextImg from "../common/next-img";
import TooltipProgress from "../common/tooltip-progress/page";

type Props = {};

const UserManual = (props: Props) => {
  const apps = [
    { id: 1, name: "Nền tảng Website" },
    { id: 2, name: "Nền tảng App Di động" },
    { id: 3, name: "Nạp tiền đầu tư" },
    { id: 4, name: "Đặt lệnh đầu tư" },
  ];
  const [currentApp, setCurrentApp] = useState<number>(apps[0].id);

  const handleAppClick = (value: string) => {
    setCurrentApp(Number(value));
  };

  const renderApp = () => {
    switch (currentApp) {
      case 1:
        return (
          <>
            <div
              className="lg:flex flex-col gap-6 hidden"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="bg-[#0F1B0E] p-10 rounded-2xl h-[534px]">
                <div className="relative w-[100px] lg:w-[340px] h-[321px] rounded-br-2xl">
                  <NextImg
                    src="/assets/icons/illustration-2.svg"
                    alt="Capi"
                    objectFit="cover"
                    className=""
                  />
                </div>
                <div className="flex flex-col mt-5 gap-5">
                  <div className="flex flex-col gap-2">
                    <span className="text-[#FFF] font-bold leading-[140%] -tracking-[0.42px]">
                      Hành trình của bạn
                    </span>
                    <TooltipProgress percentage={93} />
                  </div>
                  <p className="text-[#FFF] leading-[27px%] -tracking-[0.32px]">
                    Chào mừng bạn đã tới UPS, tạo tài khoản ngay để không bỏ lỡ
                    cơ hội đầu tư.
                  </p>
                </div>
              </div>
              <div className="bg-[#0F1B0E] px-10 py-5 rounded-2xl">
                <p className="text-[#FFF] leading-[27px] tracking-[0.32px]">
                  Hoặc đăng ký qua{" "}
                  <span className="text-[#02E56A] font-bold">Tổng đài UPS</span>
                </p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <span className="text-[#111013] font-bold text-[30px] leading-normal lg:block hidden">
                Dễ dàng tham dự.
              </span>
              <div className="flex lg:flex-col flex-row lg:items-start items-center mt-6 lg:mt-8 gap-4">
                <div className="bg-[#F3F3FB] min-11 h-11 min-w-11 lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full">
                  <div className="relative w-10 h-10 lg:w-[52px] lg:h-[52px]">
                    <NextImg
                      src="/assets/icons/vantay.svg"
                      alt="Capi"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <span className="text-[#111013] font-bold text-[14px] lg:text-[20px] lg:leading-[30px]">
                  1. Tạo tài khoản tức thì với UPS
                </span>
              </div>
              <p className="text-[#111013] text-[14px] lg:text-[18px] leading-[28px] tracking-[0.36px] mt-4 lg:mt-2">
                <span className="font-bold">UPS</span> giúp bạn trở thành nhà
                đầu tư ngay chỉ với 3 bước ngay trên thiết bị của bạn.
                <span className="font-bold"> Tới trang tạo tài khoản</span>
              </p>
              <div className="flex lg:flex-col flex-row lg:items-start items-center mt-8 gap-4">
                <div className="bg-[#F3F3FB] min-11 h-11 min-w-11 lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full">
                  <div className="relative w-[18px] h-4 lg:w-[29px] lg:h-[26px]">
                    <NextImg
                      src="/assets/icons/TreeStructure.svg"
                      alt="Capi"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <span className="text-[#111013] font-bold text-[14px] lg:text-[20px] lg:leading-[30px]">
                  2. Nạp tiền đầu tư
                </span>
              </div>
              <p className="text-[#111013] text-[14px] lg:text-[18px] leading-[28px] tracking-[0.36px] mt-4 lg:mt-2">
                Thao tác nạp tiền nhanh chóng vào tài khoản đầu tư chỉ với 1
                bước đơn giải ngay trên{" "}
                <span className="font-bold">trang nạp tiền đầu tư</span>
              </p>
              <div className="flex lg:flex-col flex-row lg:items-start items-center mt-8 gap-4">
                <div className="bg-[#F3F3FB] min-11 h-11 min-w-11 lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full">
                  <div className="relative w-[17.5px] h-[16px] lg:w-[27.5px] lg:h-[26px]">
                    <NextImg
                      src="/assets/icons/FlagBanner.svg"
                      alt="Capi"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <span className="text-[#111013] font-bold text-[14px] lg:text-[20px] lg:leading-[30px]">
                  3. Đặt lệnh đầu tư
                </span>
              </div>
              <p className="text-[#111013] text-[14px] lg:text-[18px] leading-[28px] tracking-[0.36px] mt-4 lg:mt-2">
                Bắt đầu mua bán các sản phẩm cổ phiếu mà bạn yêu thích.{" "}
                <span className="font-bold">Tới trang đặt lệnh đầu tư</span>
              </p>
              <div className="lg:hidden mt-6 flex flex-col gap-3">
                <p className="text-[#161519] text-[14px] tracking-[0.28px]">
                  Tìm kiểu thêm các hướng dẫn khác của{" "}
                  <span className="font-bold">UPS</span>
                </p>
                <div>
                  <button className="btn active !bg-[#014227] !text-[#02E56A]">
                    Hướng dẫn khác
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-4 h-4 lg:w-6 lg:h-6"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.7595 5.98943C18.7595 5.79051 18.6804 5.59975 18.5398 5.4591C18.3991 5.31844 18.2084 5.23943 18.0095 5.23943L9.42518 5.23943C9.01096 5.23943 8.67518 5.57521 8.67518 5.98943C8.67518 6.40364 9.01096 6.73943 9.42518 6.73943L16.1992 6.73943L5.45858 17.4801C5.16569 17.773 5.16569 18.2478 5.45858 18.5407C5.75148 18.8336 6.22635 18.8336 6.51925 18.5407L17.2595 7.80053V14.5737C17.2595 14.9879 17.5952 15.3237 18.0095 15.3237C18.4237 15.3237 18.7595 14.9879 18.7595 14.5737L18.7595 5.98943Z"
                        fill="#02E56A"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div
              className="lg:flex flex-col gap-6 hidden"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="bg-[#0F1B0E] p-10 rounded-2xl h-[534px]">
                <div className="relative w-[100px] lg:w-[340px] h-[321px] rounded-br-2xl">
                  <NextImg
                    src="/assets/icons/illustration-2.svg"
                    alt="Capi"
                    objectFit="cover"
                    className=""
                  />
                </div>
                <div className="flex flex-col mt-5 gap-5">
                  <div className="flex flex-col gap-2">
                    <span className="text-[#FFF] font-bold leading-[140%] -tracking-[0.42px]">
                      Hành trình của bạn
                    </span>
                    <TooltipProgress percentage={93} />
                  </div>
                  <p className="text-[#FFF] leading-[27px%] -tracking-[0.32px]">
                    Chào mừng bạn đã tới UPS, tạo tài khoản ngay để không bỏ lỡ
                    cơ hội đầu tư.
                  </p>
                </div>
              </div>
              <div className="bg-[#0F1B0E] px-10 py-5 rounded-2xl">
                <p className="text-[#FFF] leading-[27px] tracking-[0.32px]">
                  Hoặc đăng ký qua{" "}
                  <span className="text-[#02E56A] font-bold">Tổng đài UPS</span>
                </p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <span className="text-[#111013] font-bold text-[30px] leading-normal lg:block hidden">
                Dễ dàng tham dự.
              </span>
              <div className="flex lg:flex-col flex-row lg:items-start items-center mt-6 lg:mt-8 gap-4">
                <div className="bg-[#F3F3FB] min-11 h-11 min-w-11 lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full">
                  <div className="relative w-10 h-10 lg:w-[52px] lg:h-[52px]">
                    <NextImg
                      src="/assets/icons/vantay.svg"
                      alt="Capi"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <span className="text-[#111013] font-bold text-[14px] lg:text-[20px] lg:leading-[30px]">
                  1. Tạo tài khoản tức thì với UPS
                </span>
              </div>
              <p className="text-[#111013] text-[14px] lg:text-[18px] leading-[28px] tracking-[0.36px] mt-4 lg:mt-2">
                <span className="font-bold">UPS</span> giúp bạn trở thành nhà
                đầu tư ngay chỉ với 3 bước ngay trên thiết bị của bạn.
                <span className="font-bold"> Tới trang tạo tài khoản</span>
              </p>
              <div className="flex lg:flex-col flex-row lg:items-start items-center mt-8 gap-4">
                <div className="bg-[#F3F3FB] min-11 h-11 min-w-11 lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full">
                  <div className="relative w-[18px] h-4 lg:w-[29px] lg:h-[26px]">
                    <NextImg
                      src="/assets/icons/TreeStructure.svg"
                      alt="Capi"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <span className="text-[#111013] font-bold text-[14px] lg:text-[20px] lg:leading-[30px]">
                  2. Nạp tiền đầu tư
                </span>
              </div>
              <p className="text-[#111013] text-[14px] lg:text-[18px] leading-[28px] tracking-[0.36px] mt-4 lg:mt-2">
                Thao tác nạp tiền nhanh chóng vào tài khoản đầu tư chỉ với 1
                bước đơn giải ngay trên{" "}
                <span className="font-bold">trang nạp tiền đầu tư</span>
              </p>
              <div className="flex lg:flex-col flex-row lg:items-start items-center mt-8 gap-4">
                <div className="bg-[#F3F3FB] min-11 h-11 min-w-11 lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full">
                  <div className="relative w-[17.5px] h-[16px] lg:w-[27.5px] lg:h-[26px]">
                    <NextImg
                      src="/assets/icons/FlagBanner.svg"
                      alt="Capi"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <span className="text-[#111013] font-bold text-[14px] lg:text-[20px] lg:leading-[30px]">
                  3. Đặt lệnh đầu tư
                </span>
              </div>
              <p className="text-[#111013] text-[14px] lg:text-[18px] leading-[28px] tracking-[0.36px] mt-4 lg:mt-2">
                Bắt đầu mua bán các sản phẩm cổ phiếu mà bạn yêu thích.{" "}
                <span className="font-bold">Tới trang đặt lệnh đầu tư</span>
              </p>
              <div className="lg:hidden mt-6 flex flex-col gap-3">
                <p className="text-[#161519] text-[14px] tracking-[0.28px]">
                  Tìm kiểu thêm các hướng dẫn khác của{" "}
                  <span className="font-bold">UPS</span>
                </p>
                <div>
                  <button className="btn active !bg-[#014227] !text-[#02E56A]">
                    Hướng dẫn khác
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-4 h-4 lg:w-6 lg:h-6"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.7595 5.98943C18.7595 5.79051 18.6804 5.59975 18.5398 5.4591C18.3991 5.31844 18.2084 5.23943 18.0095 5.23943L9.42518 5.23943C9.01096 5.23943 8.67518 5.57521 8.67518 5.98943C8.67518 6.40364 9.01096 6.73943 9.42518 6.73943L16.1992 6.73943L5.45858 17.4801C5.16569 17.773 5.16569 18.2478 5.45858 18.5407C5.75148 18.8336 6.22635 18.8336 6.51925 18.5407L17.2595 7.80053V14.5737C17.2595 14.9879 17.5952 15.3237 18.0095 15.3237C18.4237 15.3237 18.7595 14.9879 18.7595 14.5737L18.7595 5.98943Z"
                        fill="#02E56A"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div
              className="lg:flex flex-col gap-6 hidden"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="bg-[#0F1B0E] p-10 rounded-2xl h-[534px]">
                <div className="relative w-[100px] lg:w-[340px] h-[321px] rounded-br-2xl">
                  <NextImg
                    src="/assets/icons/illustration-2.svg"
                    alt="Capi"
                    objectFit="cover"
                    className=""
                  />
                </div>
                <div className="flex flex-col mt-5 gap-5">
                  <div className="flex flex-col gap-2">
                    <span className="text-[#FFF] font-bold leading-[140%] -tracking-[0.42px]">
                      Hành trình của bạn
                    </span>
                    <TooltipProgress percentage={93} />
                  </div>
                  <p className="text-[#FFF] leading-[27px%] -tracking-[0.32px]">
                    Chào mừng bạn đã tới UPS, tạo tài khoản ngay để không bỏ lỡ
                    cơ hội đầu tư.
                  </p>
                </div>
              </div>
              <div className="bg-[#0F1B0E] px-10 py-5 rounded-2xl">
                <p className="text-[#FFF] leading-[27px] tracking-[0.32px]">
                  Hoặc đăng ký qua{" "}
                  <span className="text-[#02E56A] font-bold">Tổng đài UPS</span>
                </p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <span className="text-[#111013] font-bold text-[30px] leading-normal lg:block hidden">
                Dễ dàng tham dự.
              </span>
              <div className="flex lg:flex-col flex-row lg:items-start items-center mt-6 lg:mt-8 gap-4">
                <div className="bg-[#F3F3FB] min-11 h-11 min-w-11 lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full">
                  <div className="relative w-10 h-10 lg:w-[52px] lg:h-[52px]">
                    <NextImg
                      src="/assets/icons/vantay.svg"
                      alt="Capi"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <span className="text-[#111013] font-bold text-[14px] lg:text-[20px] lg:leading-[30px]">
                  1. Tạo tài khoản tức thì với UPS
                </span>
              </div>
              <p className="text-[#111013] text-[14px] lg:text-[18px] leading-[28px] tracking-[0.36px] mt-4 lg:mt-2">
                <span className="font-bold">UPS</span> giúp bạn trở thành nhà
                đầu tư ngay chỉ với 3 bước ngay trên thiết bị của bạn.
                <span className="font-bold"> Tới trang tạo tài khoản</span>
              </p>
              <div className="flex lg:flex-col flex-row lg:items-start items-center mt-8 gap-4">
                <div className="bg-[#F3F3FB] min-11 h-11 min-w-11 lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full">
                  <div className="relative w-[18px] h-4 lg:w-[29px] lg:h-[26px]">
                    <NextImg
                      src="/assets/icons/TreeStructure.svg"
                      alt="Capi"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <span className="text-[#111013] font-bold text-[14px] lg:text-[20px] lg:leading-[30px]">
                  2. Nạp tiền đầu tư
                </span>
              </div>
              <p className="text-[#111013] text-[14px] lg:text-[18px] leading-[28px] tracking-[0.36px] mt-4 lg:mt-2">
                Thao tác nạp tiền nhanh chóng vào tài khoản đầu tư chỉ với 1
                bước đơn giải ngay trên{" "}
                <span className="font-bold">trang nạp tiền đầu tư</span>
              </p>
              <div className="flex lg:flex-col flex-row lg:items-start items-center mt-8 gap-4">
                <div className="bg-[#F3F3FB] min-11 h-11 min-w-11 lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full">
                  <div className="relative w-[17.5px] h-[16px] lg:w-[27.5px] lg:h-[26px]">
                    <NextImg
                      src="/assets/icons/FlagBanner.svg"
                      alt="Capi"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <span className="text-[#111013] font-bold text-[14px] lg:text-[20px] lg:leading-[30px]">
                  3. Đặt lệnh đầu tư
                </span>
              </div>
              <p className="text-[#111013] text-[14px] lg:text-[18px] leading-[28px] tracking-[0.36px] mt-4 lg:mt-2">
                Bắt đầu mua bán các sản phẩm cổ phiếu mà bạn yêu thích.{" "}
                <span className="font-bold">Tới trang đặt lệnh đầu tư</span>
              </p>
              <div className="lg:hidden mt-6 flex flex-col gap-3">
                <p className="text-[#161519] text-[14px] tracking-[0.28px]">
                  Tìm kiểu thêm các hướng dẫn khác của{" "}
                  <span className="font-bold">UPS</span>
                </p>
                <div>
                  <button className="btn active !bg-[#014227] !text-[#02E56A]">
                    Hướng dẫn khác
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-4 h-4 lg:w-6 lg:h-6"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.7595 5.98943C18.7595 5.79051 18.6804 5.59975 18.5398 5.4591C18.3991 5.31844 18.2084 5.23943 18.0095 5.23943L9.42518 5.23943C9.01096 5.23943 8.67518 5.57521 8.67518 5.98943C8.67518 6.40364 9.01096 6.73943 9.42518 6.73943L16.1992 6.73943L5.45858 17.4801C5.16569 17.773 5.16569 18.2478 5.45858 18.5407C5.75148 18.8336 6.22635 18.8336 6.51925 18.5407L17.2595 7.80053V14.5737C17.2595 14.9879 17.5952 15.3237 18.0095 15.3237C18.4237 15.3237 18.7595 14.9879 18.7595 14.5737L18.7595 5.98943Z"
                        fill="#02E56A"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div
              className="lg:flex flex-col gap-6 hidden"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="bg-[#0F1B0E] p-10 rounded-2xl h-[534px]">
                <div className="relative w-[100px] lg:w-[340px] h-[321px] rounded-br-2xl">
                  <NextImg
                    src="/assets/icons/illustration-2.svg"
                    alt="Capi"
                    objectFit="cover"
                    className=""
                  />
                </div>
                <div className="flex flex-col mt-5 gap-5">
                  <div className="flex flex-col gap-2">
                    <span className="text-[#FFF] font-bold leading-[140%] -tracking-[0.42px]">
                      Hành trình của bạn
                    </span>
                    <TooltipProgress percentage={93} />
                  </div>
                  <p className="text-[#FFF] leading-[27px%] -tracking-[0.32px]">
                    Chào mừng bạn đã tới UPS, tạo tài khoản ngay để không bỏ lỡ
                    cơ hội đầu tư.
                  </p>
                </div>
              </div>
              <div className="bg-[#0F1B0E] px-10 py-5 rounded-2xl">
                <p className="text-[#FFF] leading-[27px] tracking-[0.32px]">
                  Hoặc đăng ký qua{" "}
                  <span className="text-[#02E56A] font-bold">Tổng đài UPS</span>
                </p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <span className="text-[#111013] font-bold text-[30px] leading-normal lg:block hidden">
                Dễ dàng tham dự.
              </span>
              <div className="flex lg:flex-col flex-row lg:items-start items-center mt-6 lg:mt-8 gap-4">
                <div className="bg-[#F3F3FB] min-11 h-11 min-w-11 lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full">
                  <div className="relative w-10 h-10 lg:w-[52px] lg:h-[52px]">
                    <NextImg
                      src="/assets/icons/vantay.svg"
                      alt="Capi"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <span className="text-[#111013] font-bold text-[14px] lg:text-[20px] lg:leading-[30px]">
                  1. Tạo tài khoản tức thì với UPS
                </span>
              </div>
              <p className="text-[#111013] text-[14px] lg:text-[18px] leading-[28px] tracking-[0.36px] mt-4 lg:mt-2">
                <span className="font-bold">UPS</span> giúp bạn trở thành nhà
                đầu tư ngay chỉ với 3 bước ngay trên thiết bị của bạn.
                <span className="font-bold"> Tới trang tạo tài khoản</span>
              </p>
              <div className="flex lg:flex-col flex-row lg:items-start items-center mt-8 gap-4">
                <div className="bg-[#F3F3FB] min-11 h-11 min-w-11 lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full">
                  <div className="relative w-[18px] h-4 lg:w-[29px] lg:h-[26px]">
                    <NextImg
                      src="/assets/icons/TreeStructure.svg"
                      alt="Capi"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <span className="text-[#111013] font-bold text-[14px] lg:text-[20px] lg:leading-[30px]">
                  2. Nạp tiền đầu tư
                </span>
              </div>
              <p className="text-[#111013] text-[14px] lg:text-[18px] leading-[28px] tracking-[0.36px] mt-4 lg:mt-2">
                Thao tác nạp tiền nhanh chóng vào tài khoản đầu tư chỉ với 1
                bước đơn giải ngay trên{" "}
                <span className="font-bold">trang nạp tiền đầu tư</span>
              </p>
              <div className="flex lg:flex-col flex-row lg:items-start items-center mt-8 gap-4">
                <div className="bg-[#F3F3FB] min-11 h-11 min-w-11 lg:w-[60px] lg:h-[60px] flex items-center justify-center rounded-full">
                  <div className="relative w-[17.5px] h-[16px] lg:w-[27.5px] lg:h-[26px]">
                    <NextImg
                      src="/assets/icons/FlagBanner.svg"
                      alt="Capi"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <span className="text-[#111013] font-bold text-[14px] lg:text-[20px] lg:leading-[30px]">
                  3. Đặt lệnh đầu tư
                </span>
              </div>
              <p className="text-[#111013] text-[14px] lg:text-[18px] leading-[28px] tracking-[0.36px] mt-4 lg:mt-2">
                Bắt đầu mua bán các sản phẩm cổ phiếu mà bạn yêu thích.{" "}
                <span className="font-bold">Tới trang đặt lệnh đầu tư</span>
              </p>
              <div className="lg:hidden mt-6 flex flex-col gap-3">
                <p className="text-[#161519] text-[14px] tracking-[0.28px]">
                  Tìm kiểu thêm các hướng dẫn khác của{" "}
                  <span className="font-bold">UPS</span>
                </p>
                <div>
                  <button className="btn active !bg-[#014227] !text-[#02E56A]">
                    Hướng dẫn khác
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-4 h-4 lg:w-6 lg:h-6"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.7595 5.98943C18.7595 5.79051 18.6804 5.59975 18.5398 5.4591C18.3991 5.31844 18.2084 5.23943 18.0095 5.23943L9.42518 5.23943C9.01096 5.23943 8.67518 5.57521 8.67518 5.98943C8.67518 6.40364 9.01096 6.73943 9.42518 6.73943L16.1992 6.73943L5.45858 17.4801C5.16569 17.773 5.16569 18.2478 5.45858 18.5407C5.75148 18.8336 6.22635 18.8336 6.51925 18.5407L17.2595 7.80053V14.5737C17.2595 14.9879 17.5952 15.3237 18.0095 15.3237C18.4237 15.3237 18.7595 14.9879 18.7595 14.5737L18.7595 5.98943Z"
                        fill="#02E56A"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };
  return (
    <>
      <div className="bg-[linear-gradient(180deg,#FFF_0%,#F3F3FB_100%)] py-10 lg:py-[160px]">
        <div className="custom-container  ">
          <div className="p-5 lg:px-[60px] lg:py-[100px] lg:grid lg:grid-cols-[240px,420px,auto] gap-20 shadow-[0px_4px_54px_0px_rgba(0,0,0,0.05)] rounded-[12px] lg:rounded-[32px] bg-[#FFF]">
            <div
              className="flex flex-col"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[#161519] text-sm lg:text-[16px] font-medium leading-normal uppercase">
                  #HDSD
                </span>
                <span className="text-[#111013] text-[20px] lg:text-[48px] font-bold lg:leading-[54px]">
                  3 bước trở thành{" "}
                  <span className="text-[#00D763]">nhà đầu tư.</span>
                </span>
              </div>
              <Tabs
                defaultValue={currentApp.toString()}
                onValueChange={handleAppClick}
              >
                <TabsList className="flex lg:flex-col flex-row gap-3 mt-4 mb-0 lg:my-[42px] whitespace-nowrap overflow-x-auto scrollbar-hidden max-w-full">
                  {apps.map((app) => (
                    <TabsTrigger
                      key={app.id}
                      value={app.id.toString()}
                      className={`text-[#111013] text-[14px] lg:text-[18px] font-bold lg:leading-[28px] text-start lg:pb-0 pb-[6px] ${
                        currentApp === app.id
                          ? "lg:border-r-2 lg:border-b-0 border-b border-[#111013] "
                          : "border-none"
                      }`}
                    >
                      {app.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
              <div className="lg:block hidden">
                <p className="text-[#161519] text-[18px] leading-[28px] tracking-[0.36px] mb-[42px]">
                  Tìm kiểu thêm các hướng dẫn khác của{" "}
                  <span className="font-bold">UPS</span>
                </p>
                <button className="btn active !bg-[#014227] !text-[#02E56A]">
                  Hướng dẫn khác
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="ml-2"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.7595 5.98943C18.7595 5.79051 18.6804 5.59975 18.5398 5.4591C18.3991 5.31844 18.2084 5.23943 18.0095 5.23943L9.42518 5.23943C9.01096 5.23943 8.67518 5.57521 8.67518 5.98943C8.67518 6.40364 9.01096 6.73943 9.42518 6.73943L16.1992 6.73943L5.45858 17.4801C5.16569 17.773 5.16569 18.2478 5.45858 18.5407C5.75148 18.8336 6.22635 18.8336 6.51925 18.5407L17.2595 7.80053V14.5737C17.2595 14.9879 17.5952 15.3237 18.0095 15.3237C18.4237 15.3237 18.7595 14.9879 18.7595 14.5737L18.7595 5.98943Z"
                      fill="#02E56A"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {renderApp()}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserManual;
