import React from "react";
import NextImg from "../common/next-img";

type Props = {};

const ContentTech = (props: Props) => {
  const platforms = [
    {
      icon: "/assets/icons/tech-icon4.svg",
      title: "Nền tảng “Lõi”",
      description:
        "Creating a higher spacing and how people move through a unique and impactful campaign.",
    },
    {
      icon: "/assets/icons/tech-icon5.svg",
      title: "Trung tâm dữ liệu",
      description:
        "Creating a higher spacing and how people move through a unique and impactful campaign.",
    },
    {
      icon: "/assets/icons/tech-icon6.svg",
      title: "Hệ thống phần mềm",
      description:
        "Creating a higher spacing and how people move through a unique and impactful campaign.",
    },
  ];

  const features = [
    {
      title: "Bảo mật",
      description:
        "Create a scalable statistics system that’s accessible for your company.",
      icon: "/assets/icons/tech-icon3.svg",
    },
    {
      title: "Tốc độ",
      description:
        "Packed with API features you will love to collaborate with issues and change business.",
      icon: "/assets/icons/tech-icon1.svg",
    },
    {
      title: "Trải nghiệm",
      description:
        "Get insights from your customers directly using the app API and test funnels earlier.",
      icon: "/assets/icons/tech-icon2.svg",
    },
  ];

  return (
    <div className="custom-container mt-10 lg:mt-[60px] xl:mt-20 2xl:mt-[100px] 3xl:mt-[160px]">
      <div className="rounded-[12px] bg-[#F3F3FB] px-6 py-5 lg:rounded-[24px] lg:px-10 lg:py-10 lg2:px-[60px] lg2:py-[60px] 2xl:py-[80px]">
        <div className="flex flex-col gap-10 md:grid md:grid-cols-[346px,auto] lg2:grid-cols-[435px,auto] 2xl:grid-cols-[520px,auto] 3xl:gap-14">
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111013] drop-shadow filter lg:h-[60px] lg:w-[60px]">
              <div className="relative h-4 w-4 rounded-full lg:h-[24px] lg:w-[24px]">
                <NextImg
                  src="/assets/icons/stop.svg"
                  alt="Capi"
                  objectFit="cover"
                />
              </div>
            </div>
            <p className="mb-2 mt-5 text-[14px] font-medium leading-[22px] text-[#111013] lg:mt-6 lg:text-base lg:leading-[40px] lg2:text-[18px]">
              #datatracking app
            </p>
            <p className="text-[20px] font-bold text-[#141414] lg:w-[90%] lg:text-[24px] lg2:text-[40px] lg2:leading-[46px] 2xl:text-[44px] 2xl:leading-[52px] 3xl:text-[48px] 3xl:leading-[56px]">
              Siêu ứng dụng <br className="hidden lg:block" /> đầu tư tích hợp
              cho mọi nhu cầu của bạn
            </p>
            <p className="mt-2 text-[14px] leading-[22px] text-[#111013] lg:mt-6 lg:text-base lg2:text-[18px] lg2:leading-[28px] xl:leading-[30px]">
              So how does it work? Let’s check our{" "}
              <span className="font-bold">Getting Started</span>{" "}
              <br className="hidden lg2:block" />
              tutorial or choose from pre-made templates.
            </p>
            <button className="btn active mt-5 !bg-[#014227] !text-[#02E56A] lg:mt-6">
              Khám phá ngay
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
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="place-content-end"
          >
            <div className="relative h-[184px] w-full rounded-full lg:h-[274px] lg2:h-[328px] 2xl:h-[374px] 3xl:h-[464px]">
              <NextImg
                src="/assets/image/content-1.png"
                alt="Capi"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-12">
          <div className="flex flex-col gap-6 md:grid md:grid-cols-3 lg:gap-10">
            {features.map((item, index) => {
              const delay = ((index % 3) + 1) * 200;
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between gap-3 border-t border-[#60606B] pt-6 opacity-[0.65] lg:gap-4 lg:pt-8 lg2:pt-10 2xl:pt-12"
                  data-aos="fade-up"
                  data-aos-delay={delay}
                >
                  <div className="flex flex-row items-center gap-3 lg:flex-col lg:items-start lg:gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF] lg:h-[50px] lg:w-[50px] lg2:h-[60px] lg2:w-[60px]">
                      <div
                        className={`relative h-4 w-4 lg:h-5 lg:w-5 lg2:h-6 lg2:w-6`}
                      >
                        <NextImg
                          src={item.icon}
                          alt="Capi"
                          objectFit="contain"
                        />
                      </div>
                    </div>
                    <p className="text-[20px] font-bold leading-[40px] text-[#111013] lg:text-[24px] lg2:text-[30px] 2xl:text-[32px]">
                      {item.title}
                    </p>
                  </div>
                  <p className="text-[14px] font-medium leading-[22px] text-[#111013] lg:text-base lg:leading-[28px] lg2:text-[18px]">
                    {item.description}
                  </p>
                  <div className="">
                    <button className="flex items-center gap-2 rounded-[8px] bg-[#111013] px-3 py-1 text-sm font-medium leading-[28px] text-[#FFF] lg:text-[18px]">
                      Đọc thêm
                      <div className="relative h-[20px] w-[20px]">
                        <NextImg
                          src="/assets/icons/arrow_forward.svg"
                          alt="Capi"
                          objectFit="cover"
                          className=""
                        />
                      </div>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-rows-3 gap-3 md:grid-cols-3 md:grid-rows-none lg:mt-[30px] lg:gap-[30px]">
        {platforms.map((platform, index) => {
          const delay = ((index % 3) + 1) * 200;
          return (
            <div
              key={index}
              className="group flex flex-col items-center justify-center rounded-[12px] bg-[#F3F3FB] p-5 transition-all duration-500 ease-in-out hover:bg-[#4C35F5] lg:rounded-[16px] lg2:p-8 2xl:p-10"
              data-aos="fade-up"
              data-aos-delay={delay}
            >
              <div className="relative mx-auto h-[160px] w-[160px] md:h-[120px] md:w-[120px] lg:h-[160px] lg:w-[160px] lg2:h-[180px] lg2:w-[180px]">
                <NextImg
                  src={platform.icon}
                  alt={platform.title}
                  objectFit="cover"
                />
              </div>
              <p className="mb-2 mt-6 text-[20px] font-bold text-[#111013] group-hover:text-[#FFF] lg:mb-4 lg:text-[24px] lg2:text-[30px] 2xl:text-[32px] 2xl:leading-[40px]">
                {platform.title}
              </p>
              <p className="text-center text-[14px] font-medium leading-[22px] text-[#111013] group-hover:text-[#FFF] lg:text-base lg:leading-[28px] lg2:text-[18px] 3xl:w-[85%]">
                {platform.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContentTech;
