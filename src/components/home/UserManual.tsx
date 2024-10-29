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

  const steps = [
    {
      icon: "/assets/icons/vantay.svg",
      title: "1. Tạo tài khoản tức thì với UPS",
      description: (
        <>
          <span className="font-bold">UPS</span> giúp bạn trở thành nhà đầu tư
          ngay chỉ với 3 bước ngay trên thiết bị của bạn.
          <span className="font-bold"> Tới trang tạo tài khoản</span>
        </>
      ),
    },
    {
      icon: "/assets/icons/TreeStructure.svg",
      title: "2. Nạp tiền đầu tư",
      description: (
        <>
          Thao tác nạp tiền nhanh chóng vào tài khoản đầu tư chỉ với 1 bước đơn
          giản ngay trên{" "}
          <span className="font-bold">trang nạp tiền đầu tư</span>
        </>
      ),
    },
    {
      icon: "/assets/icons/FlagBanner.svg",
      title: "3. Đặt lệnh đầu tư",
      description: (
        <>
          Bắt đầu mua bán các sản phẩm cổ phiếu mà bạn yêu thích.{" "}
          <span className="font-bold">Tới trang đặt lệnh đầu tư</span>
        </>
      ),
    },
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
              className="md:flex flex-col gap-6 hidden md:col-span-1 lg:col-span-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="bg-[#0F1B0E] sm:p-5 lg2:p-8 2xl:p-10 rounded-2xl">
                <div className="relative w-full md:h-[200px] lg2:h-[281px] 3xl:h-[321px] rounded-br-2xl sm:w-[calc(100%-64px)] lg:w-[calc(100%-48px)] lg2:w-full mx-auto">
                  <NextImg
                    src="/assets/icons/illustration-2.svg"
                    alt="Capi"
                    objectFit="cover"
                    className=""
                  />
                </div>
                <div className="flex flex-col mt-5 gap-5">
                  <div className="flex flex-col gap-2">
                    <span className="text-[#FFF] md:text-sm lg:text-base font-bold leading-[140%] -tracking-[0.42px]">
                      Hành trình của bạn
                    </span>
                    <TooltipProgress percentage={93} />
                  </div>
                  <p className="text-[#FFF] text-sm lg:text-base leading-[27px%] -tracking-[0.32px]">
                    Chào mừng bạn đã tới UPS, tạo tài khoản ngay để không bỏ lỡ
                    cơ hội đầu tư.
                  </p>
                </div>
              </div>
              <div className="bg-[#0F1B0E] sm:px-5 lg2:px-8 2xl:px-10 py-5 rounded-2xl">
                <p className="text-[#FFF] md:text-sm lg:text-base leading-[27px] tracking-[0.32px]">
                  Hoặc đăng ký qua{" "}
                  <span className="text-[#02E56A] font-bold">Tổng đài UPS</span>
                </p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="600" className="md:col-span-2 lg:col-span-3">
              <span className="text-[#111013] font-bold md:text-[24px] lg2:text-[30px] leading-normal md:block hidden">
                Dễ dàng tham dự.
              </span>
              <div className="flex flex-col lg:flex lg:flex-col md:grid md:grid-cols-3 md:gap-5">
                {steps.map((step, index) => (
                  <div key={index}>
                    <div className="flex md:flex-col flex-row md:items-start items-center mt-6 lg:mt-5 lg2:mt-6 3xl:mt-8 gap-4">
                      <div className="bg-[#F3F3FB] w-[44px] h-[44px] lg:h-[50px] lg:w-[50px] lg2:w-[60px] lg2:h-[60px] flex items-center justify-center rounded-full">
                        <div
                          className={`relative w-9 lg2:h-6 ${
                            index === 0 ? "h-5" : "h-4"
                          }`}
                        >
                          <NextImg
                            src={step.icon}
                            alt="Capi"
                            objectFit="contain"
                          />
                        </div>
                      </div>
                      <span className="text-[#111013] font-bold text-[14px] md:text-base lg2:text-[20px] lg:leading-[30px]">
                        {step.title}
                      </span>
                    </div>
                    <p className="text-[#111013] text-[14px] md:text-base lg2:text-[18px] leading-[28px] tracking-[0.36px] mt-4 lg:mt-2">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="md:hidden mt-6 flex flex-col gap-3">
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
           
          </>
        );
      case 3:
        return (
        <></>
        );
      case 4:
        return (
         <></>
        );
      default:
        return null;
    }
  };
  return (
    <>
      <div className="bg-[linear-gradient(180deg,#FFF_0%,#F3F3FB_100%)] py-10 lg:py-[60px] xl:py-20 2xl:py-[100px] 3xl:py-[160px]">
        <div className="custom-container  ">
          <div className="p-5 lg:p-8 2xl:px-10 2xl:py-[60px] 3xl:px-[60px] 3xl:py-[100px] md:grid md:grid-cols-2 lg:grid-cols-8 lg:gap-6 lg2:gap-8 md:gap-10 2xl:gap-20 shadow-[0px_4px_54px_0px_rgba(0,0,0,0.05)] rounded-[12px] lg:rounded-[32px] bg-[#FFF]">
            <div
              className="flex flex-col md:col-span-1 lg:col-span-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[#161519] text-sm md:text-[16px] font-medium leading-normal uppercase">
                  #HDSD
                </span>
                <span className="text-[#111013] text-[20px] md:text-[24px] lg2:text-[40px] 2xl:text-[44px] 3xl:text-[48px] font-bold leading-normal lg2:leading-[46px] 2xl:leading-[52px] 3xl:leading-[54px]">
                  3 bước trở thành{" "}
                  <span className="text-[#00D763]">nhà đầu tư.</span>
                </span>
              </div>
              <Tabs
                defaultValue={currentApp.toString()}
                onValueChange={handleAppClick}
              >
                <TabsList className="flex md:flex-col flex-row gap-3 mt-4 mb-0 md:my-6 2xl:my-8 3xl:my-[42px] whitespace-nowrap overflow-x-auto scrollbar-hidden max-w-full">
                  {apps.map((app) => (
                    <TabsTrigger
                      key={app.id}
                      value={app.id.toString()}
                      className={`text-[#111013] text-[14px] md:text-base lg:text-[18px] font-bold lg:leading-[28px] text-start lg:pb-0 pb-[6px] ${
                        currentApp === app.id
                          ? "md:border-r-2 md:border-b-0 border-b border-[#111013] "
                          : "border-none"
                      }`}
                    >
                      {app.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
              <div className="md:block hidden">
                <p className="text-[#161519] md:text-base lg:text-[18px] leading-[28px] tracking-[0.36px] md:mb-6 2xl:mb-8 3xl:mb-[42px]">
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
            {renderApp()}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserManual;
