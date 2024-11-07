'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import NextImg from '../common/next-img';
import TooltipProgress from '../common/tooltip-progress/page';

type Props = {
  data: any;
};

const UserManual = ({ data }: Props) => {
  // console.log('🚀 ~ UserManual ~ data:', data);
  const apps = [
    { id: 1, name: 'Nền tảng Website' },
    { id: 2, name: 'Nền tảng App Di động' },
    { id: 3, name: 'Nạp tiền đầu tư' },
    { id: 4, name: 'Đặt lệnh đầu tư' },
  ];

  const steps = [
    {
      icon: '/assets/icons/vantay.svg',
      title: '1. Tạo tài khoản tức thì với UPS',
      description: (
        <>
          <span className="font-bold">UPS</span> giúp bạn trở thành nhà đầu tư
          ngay chỉ với 3 bước ngay trên thiết bị của bạn.
          <span className="font-bold"> Tới trang tạo tài khoản</span>
        </>
      ),
    },
    {
      icon: '/assets/icons/TreeStructure.svg',
      title: '2. Nạp tiền đầu tư',
      description: (
        <>
          Thao tác nạp tiền nhanh chóng vào tài khoản đầu tư chỉ với 1 bước đơn
          giản ngay trên{' '}
          <span className="font-bold">trang nạp tiền đầu tư</span>
        </>
      ),
    },
    {
      icon: '/assets/icons/FlagBanner.svg',
      title: '3. Đặt lệnh đầu tư',
      description: (
        <>
          Bắt đầu mua bán các sản phẩm cổ phiếu mà bạn yêu thích.{' '}
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
              className="hidden flex-col gap-6 md:col-span-1 md:flex lg:col-span-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="rounded-2xl bg-[#0F1B0E] sm:p-5 lg2:p-8 2xl:p-10">
                <div className="relative mx-auto w-full rounded-br-2xl sm:w-[calc(100%-64px)] md:h-[200px] lg:w-[calc(100%-48px)] lg2:h-[281px] lg2:w-full 3xl:h-[321px]">
                  <NextImg
                    src="/assets/icons/illustration-2.svg"
                    alt="Capi"
                    objectFit="cover"
                    className=""
                  />
                </div>
                <div className="mt-5 flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <span className="font-bold leading-[140%] -tracking-[0.42px] text-[#FFF] md:text-sm lg:text-base">
                      Hành trình của bạn
                    </span>
                    <TooltipProgress percentage={93} />
                  </div>
                  <p className="text-sm leading-[27px%] -tracking-[0.32px] text-[#FFF] lg:text-base">
                    Chào mừng bạn đã tới UPS, tạo tài khoản ngay để không bỏ lỡ
                    cơ hội đầu tư.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl bg-[#0F1B0E] py-5 sm:px-5 lg2:px-8 2xl:px-10">
                <p className="leading-[27px] tracking-[0.32px] text-[#FFF] md:text-sm lg:text-base">
                  Hoặc đăng ký qua{' '}
                  <span className="font-bold text-[#02E56A]">Tổng đài UPS</span>
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="md:col-span-2 lg:col-span-3"
            >
              <span className="hidden font-bold leading-normal text-[#111013] md:block md:text-[24px] lg2:text-[30px]">
                Dễ dàng tham dự.
              </span>
              <div className="flex flex-col md:grid md:grid-cols-3 md:gap-5 lg:flex lg:flex-col">
                {steps.map((step, index) => (
                  <div key={index}>
                    <div className="mt-6 flex flex-row items-center gap-4 md:flex-col md:items-start lg:mt-5 lg2:mt-6 3xl:mt-8">
                      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#F3F3FB] lg:h-[50px] lg:w-[50px] lg2:h-[60px] lg2:w-[60px]">
                        <div
                          className={`relative w-9 lg2:h-6 ${
                            index === 0 ? 'h-5' : 'h-4'
                          }`}
                        >
                          <NextImg
                            src={step.icon}
                            alt="Capi"
                            objectFit="contain"
                          />
                        </div>
                      </div>
                      <span className="text-[14px] font-bold text-[#111013] md:text-base lg:leading-[30px] lg2:text-[20px]">
                        {step.title}
                      </span>
                    </div>
                    <p className="mt-4 text-[14px] leading-[28px] tracking-[0.36px] text-[#111013] md:text-base lg:mt-2 lg2:text-[18px]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 md:hidden">
                <p className="text-[14px] tracking-[0.28px] text-[#161519]">
                  Tìm kiểu thêm các hướng dẫn khác của{' '}
                  <span className="font-bold">UPS</span>
                </p>
                <div>
                  <button className="btn active !bg-[#014227] !text-[#02E56A]">
                    Hướng dẫn khác
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4 lg:h-6 lg:w-6"
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
              className="hidden flex-col gap-6 md:col-span-1 md:flex lg:col-span-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="rounded-2xl bg-[#0F1B0E] sm:p-5 lg2:p-8 2xl:p-10">
                <div className="relative mx-auto w-full rounded-br-2xl sm:w-[calc(100%-64px)] md:h-[200px] lg:w-[calc(100%-48px)] lg2:h-[281px] lg2:w-full 3xl:h-[321px]">
                  <NextImg
                    src="/assets/icons/illustration-2.svg"
                    alt="Capi"
                    objectFit="cover"
                    className=""
                  />
                </div>
                <div className="mt-5 flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <span className="font-bold leading-[140%] -tracking-[0.42px] text-[#FFF] md:text-sm lg:text-base">
                      Hành trình của bạn
                    </span>
                    <TooltipProgress percentage={93} />
                  </div>
                  <p className="text-sm leading-[27px%] -tracking-[0.32px] text-[#FFF] lg:text-base">
                    Chào mừng bạn đã tới UPS, tạo tài khoản ngay để không bỏ lỡ
                    cơ hội đầu tư.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl bg-[#0F1B0E] py-5 sm:px-5 lg2:px-8 2xl:px-10">
                <p className="leading-[27px] tracking-[0.32px] text-[#FFF] md:text-sm lg:text-base">
                  Hoặc đăng ký qua{' '}
                  <span className="font-bold text-[#02E56A]">Tổng đài UPS</span>
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="md:col-span-2 lg:col-span-3"
            >
              <span className="hidden font-bold leading-normal text-[#111013] md:block md:text-[24px] lg2:text-[30px]">
                Dễ dàng tham dự.
              </span>
              <div className="flex flex-col md:grid md:grid-cols-3 md:gap-5 lg:flex lg:flex-col">
                {steps.map((step, index) => (
                  <div key={index}>
                    <div className="mt-6 flex flex-row items-center gap-4 md:flex-col md:items-start lg:mt-5 lg2:mt-6 3xl:mt-8">
                      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#F3F3FB] lg:h-[50px] lg:w-[50px] lg2:h-[60px] lg2:w-[60px]">
                        <div
                          className={`relative w-9 lg2:h-6 ${
                            index === 0 ? 'h-5' : 'h-4'
                          }`}
                        >
                          <NextImg
                            src={step.icon}
                            alt="Capi"
                            objectFit="contain"
                          />
                        </div>
                      </div>
                      <span className="text-[14px] font-bold text-[#111013] md:text-base lg:leading-[30px] lg2:text-[20px]">
                        {step.title}
                      </span>
                    </div>
                    <p className="mt-4 text-[14px] leading-[28px] tracking-[0.36px] text-[#111013] md:text-base lg:mt-2 lg2:text-[18px]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 md:hidden">
                <p className="text-[14px] tracking-[0.28px] text-[#161519]">
                  Tìm kiểu thêm các hướng dẫn khác của{' '}
                  <span className="font-bold">UPS</span>
                </p>
                <div>
                  <button className="btn active !bg-[#014227] !text-[#02E56A]">
                    Hướng dẫn khác
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4 lg:h-6 lg:w-6"
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
              className="hidden flex-col gap-6 md:col-span-1 md:flex lg:col-span-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="rounded-2xl bg-[#0F1B0E] sm:p-5 lg2:p-8 2xl:p-10">
                <div className="relative mx-auto w-full rounded-br-2xl sm:w-[calc(100%-64px)] md:h-[200px] lg:w-[calc(100%-48px)] lg2:h-[281px] lg2:w-full 3xl:h-[321px]">
                  <NextImg
                    src="/assets/icons/illustration-2.svg"
                    alt="Capi"
                    objectFit="cover"
                    className=""
                  />
                </div>
                <div className="mt-5 flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <span className="font-bold leading-[140%] -tracking-[0.42px] text-[#FFF] md:text-sm lg:text-base">
                      Hành trình của bạn
                    </span>
                    <TooltipProgress percentage={93} />
                  </div>
                  <p className="text-sm leading-[27px%] -tracking-[0.32px] text-[#FFF] lg:text-base">
                    Chào mừng bạn đã tới UPS, tạo tài khoản ngay để không bỏ lỡ
                    cơ hội đầu tư.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl bg-[#0F1B0E] py-5 sm:px-5 lg2:px-8 2xl:px-10">
                <p className="leading-[27px] tracking-[0.32px] text-[#FFF] md:text-sm lg:text-base">
                  Hoặc đăng ký qua{' '}
                  <span className="font-bold text-[#02E56A]">Tổng đài UPS</span>
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="md:col-span-2 lg:col-span-3"
            >
              <span className="hidden font-bold leading-normal text-[#111013] md:block md:text-[24px] lg2:text-[30px]">
                Dễ dàng tham dự.
              </span>
              <div className="flex flex-col md:grid md:grid-cols-3 md:gap-5 lg:flex lg:flex-col">
                {steps.map((step, index) => (
                  <div key={index}>
                    <div className="mt-6 flex flex-row items-center gap-4 md:flex-col md:items-start lg:mt-5 lg2:mt-6 3xl:mt-8">
                      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#F3F3FB] lg:h-[50px] lg:w-[50px] lg2:h-[60px] lg2:w-[60px]">
                        <div
                          className={`relative w-9 lg2:h-6 ${
                            index === 0 ? 'h-5' : 'h-4'
                          }`}
                        >
                          <NextImg
                            src={step.icon}
                            alt="Capi"
                            objectFit="contain"
                          />
                        </div>
                      </div>
                      <span className="text-[14px] font-bold text-[#111013] md:text-base lg:leading-[30px] lg2:text-[20px]">
                        {step.title}
                      </span>
                    </div>
                    <p className="mt-4 text-[14px] leading-[28px] tracking-[0.36px] text-[#111013] md:text-base lg:mt-2 lg2:text-[18px]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 md:hidden">
                <p className="text-[14px] tracking-[0.28px] text-[#161519]">
                  Tìm kiểu thêm các hướng dẫn khác của{' '}
                  <span className="font-bold">UPS</span>
                </p>
                <div>
                  <button className="btn active !bg-[#014227] !text-[#02E56A]">
                    Hướng dẫn khác
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4 lg:h-6 lg:w-6"
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
              className="hidden flex-col gap-6 md:col-span-1 md:flex lg:col-span-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="rounded-2xl bg-[#0F1B0E] sm:p-5 lg2:p-8 2xl:p-10">
                <div className="relative mx-auto w-full rounded-br-2xl sm:w-[calc(100%-64px)] md:h-[200px] lg:w-[calc(100%-48px)] lg2:h-[281px] lg2:w-full 3xl:h-[321px]">
                  <NextImg
                    src="/assets/icons/illustration-2.svg"
                    alt="Capi"
                    objectFit="cover"
                    className=""
                  />
                </div>
                <div className="mt-5 flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <span className="font-bold leading-[140%] -tracking-[0.42px] text-[#FFF] md:text-sm lg:text-base">
                      Hành trình của bạn
                    </span>
                    <TooltipProgress percentage={93} />
                  </div>
                  <p className="text-sm leading-[27px%] -tracking-[0.32px] text-[#FFF] lg:text-base">
                    Chào mừng bạn đã tới UPS, tạo tài khoản ngay để không bỏ lỡ
                    cơ hội đầu tư.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl bg-[#0F1B0E] py-5 sm:px-5 lg2:px-8 2xl:px-10">
                <p className="leading-[27px] tracking-[0.32px] text-[#FFF] md:text-sm lg:text-base">
                  Hoặc đăng ký qua{' '}
                  <span className="font-bold text-[#02E56A]">Tổng đài UPS</span>
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="md:col-span-2 lg:col-span-3"
            >
              <span className="hidden font-bold leading-normal text-[#111013] md:block md:text-[24px] lg2:text-[30px]">
                Dễ dàng tham dự.
              </span>
              <div className="flex flex-col md:grid md:grid-cols-3 md:gap-5 lg:flex lg:flex-col">
                {steps.map((step, index) => (
                  <div key={index}>
                    <div className="mt-6 flex flex-row items-center gap-4 md:flex-col md:items-start lg:mt-5 lg2:mt-6 3xl:mt-8">
                      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#F3F3FB] lg:h-[50px] lg:w-[50px] lg2:h-[60px] lg2:w-[60px]">
                        <div
                          className={`relative w-9 lg2:h-6 ${
                            index === 0 ? 'h-5' : 'h-4'
                          }`}
                        >
                          <NextImg
                            src={step.icon}
                            alt="Capi"
                            objectFit="contain"
                          />
                        </div>
                      </div>
                      <span className="text-[14px] font-bold text-[#111013] md:text-base lg:leading-[30px] lg2:text-[20px]">
                        {step.title}
                      </span>
                    </div>
                    <p className="mt-4 text-[14px] leading-[28px] tracking-[0.36px] text-[#111013] md:text-base lg:mt-2 lg2:text-[18px]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 md:hidden">
                <p className="text-[14px] tracking-[0.28px] text-[#161519]">
                  Tìm kiểu thêm các hướng dẫn khác của{' '}
                  <span className="font-bold">UPS</span>
                </p>
                <div>
                  <button className="btn active !bg-[#014227] !text-[#02E56A]">
                    Hướng dẫn khác
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4 lg:h-6 lg:w-6"
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
      <div className="bg-[linear-gradient(180deg,#FFF_0%,#F3F3FB_100%)] py-10 lg:py-[60px] xl:py-20 2xl:py-[100px] 3xl:py-[160px]">
        <div className="custom-container">
          <div className="rounded-[12px] bg-[#FFF] p-5 shadow-[0px_4px_54px_0px_rgba(0,0,0,0.05)] md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-8 lg:gap-6 lg:rounded-[32px] lg:p-8 lg2:gap-8 2xl:gap-20 2xl:px-10 2xl:py-[60px] 3xl:px-[60px] 3xl:py-[100px]">
            <div
              className="flex flex-col md:col-span-1 lg:col-span-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium uppercase leading-normal text-[#161519] md:text-[16px]">
                  #HDSD
                </span>
                <span className="text-[20px] font-bold leading-normal text-[#111013] md:text-[24px] lg2:text-[40px] lg2:leading-[46px] 2xl:text-[44px] 2xl:leading-[52px] 3xl:text-[48px] 3xl:leading-[54px]">
                  3 bước trở thành{' '}
                  <span className="text-[#00D763]">nhà đầu tư.</span>
                </span>
              </div>
              <Tabs
                defaultValue={currentApp.toString()}
                onValueChange={handleAppClick}
              >
                <TabsList className="scrollbar-hidden mb-0 mt-4 flex max-w-full flex-row gap-3 overflow-x-auto whitespace-nowrap md:my-6 md:flex-col 2xl:my-8 3xl:my-[42px]">
                  {apps.map((app) => (
                    <TabsTrigger
                      key={app.id}
                      value={app.id.toString()}
                      className={`pb-[6px] text-start text-[14px] font-bold text-[#111013] md:text-base lg:pb-0 lg:text-[18px] lg:leading-[28px] ${
                        currentApp === app.id
                          ? 'border-b border-[#111013] md:border-b-0 md:border-r-2'
                          : 'border-none'
                      }`}
                    >
                      {app.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
              <div className="hidden md:block">
                <p className="leading-[28px] tracking-[0.36px] text-[#161519] md:mb-6 md:text-base lg:text-[18px] 2xl:mb-8 3xl:mb-[42px]">
                  Tìm kiểu thêm các hướng dẫn khác của{' '}
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
                    className="h-4 w-4 lg:h-6 lg:w-6"
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
