import React from "react";
import NextImg from "../common/next-img";

type Props = {};

const ContentTech = (props: Props) => {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1600px] px-4 lg:px-20 mt-[160px]">
      <div className="bg-[#F3F3FB] rounded-[24px] px-[60px] py-[80px] ">
        <div className="grid grid-cols-[538px,auto] gap-10">
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="bg-[#111013] w-[60px] h-[60px] rounded-full flex items-center justify-center filter drop-shadow">
              <div className="relative w-[24px] h-[24px] rounded-full">
                <NextImg
                  src="/assets/icons/stop.svg"
                  alt="Capi"
                  objectFit="cover"
                />
              </div>
            </div>
            <p className="mt-6 mb-2 text-[#111013] text-[18px] font-medium leading-[40px]">
              #datatracking app
            </p>
            <p className="text-[#141414] text-[48px] font-bold leading-[54px] w-[90%]">
              Siêu ứng dụng <br /> đầu tư tích hợp cho mọi nhu cầu của bạn
            </p>
            <p className="text-[#111013] text-[18px] tracking-[0.3px] leading-[30px] mt-6">
              So how does it work? Let’s check our{" "}
              <span className="font-bold">Getting Started</span> <br />
              tutorial or choose from pre-made templates.
            </p>
            <button className="flex items-center bg-[#014227] py-3 px-4 rounded-2xl text-[#02E56A] font-bold text-[18px] leading-normal w-[196px] hover:shadow-[-2px_3px_0px_0px_#00813B] mt-6">
              Khám phá ngay
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
          <div data-aos="fade-up" data-aos-delay="600">
            <div className="relative w-full h-[464px] rounded-full">
              <NextImg
                src="/assets/image/content-1.png"
                alt="Capi"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-3 gap-10">
            <div
              className="border-t border-[#60606B] opacity-[0.65] pt-12 flex flex-col gap-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-[60px] h-[60px] bg-[#FFF] flex justify-center items-center rounded-full">
                <div className="relative w-7 h-6">
                  <NextImg
                    src="/assets/icons/tech-icon3.svg"
                    alt="Capi"
                    objectFit="cover"
                  />
                </div>
              </div>
              <p className="text-[#111013] text-[32px] font-bold leading-[40px]">
                Bảo mật
              </p>
              <p className="text-[#111013] text-[18px] font-medium leading-[28px]">
                Create a scalable statistics system that’s accessible for your
                company.
              </p>
              <div>
                <button className="bg-[#111013] py-1 px-3 rounded-[8px] text-[#FFF] font-medium leading-[28px] flex items-center gap-2">
                  Đọc thêm
                  <div className="relative w-[20px] h-[20px]">
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
            <div
              className="border-t border-[#60606B] opacity-[0.65] pt-12 flex flex-col gap-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="w-[60px] h-[60px] bg-[#FFF] flex justify-center items-center rounded-full">
                <div className="relative w-6 h-6">
                  <NextImg
                    src="/assets/icons/tech-icon1.svg"
                    alt="Capi"
                    objectFit="cover"
                  />
                </div>
              </div>
              <p className="text-[#111013] text-[32px] font-bold leading-[40px]">
                Tốc độ
              </p>
              <p className="text-[#111013] text-[18px] font-medium leading-[28px]">
                Packed with API features you will love to collaborate with
                issues and change business.
              </p>
              <div>
                <button className="bg-[#111013] py-1 px-3 rounded-[8px] text-[#FFF] font-medium leading-[28px] flex items-center gap-2">
                  Đọc thêm
                  <div className="relative w-[20px] h-[20px]">
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
            <div
              className="border-t border-[#60606B] opacity-[0.65] pt-12 flex flex-col gap-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="w-[60px] h-[60px] bg-[#FFF] flex justify-center items-center rounded-full">
                <div className="relative w-7 h-6">
                  <NextImg
                    src="/assets/icons/tech-icon2.svg"
                    alt="Capi"
                    objectFit="cover"
                  />
                </div>
              </div>
              <p className="text-[#111013] text-[32px] font-bold leading-[40px]">
                Trải nghiệm
              </p>
              <p className="text-[#111013] text-[18px] font-medium leading-[28px]">
                Get insights from your customers directly using the app API and
                test funnels earlier.
              </p>
              <div>
                <button className="bg-[#111013] py-1 px-3 rounded-[8px] text-[#FFF] font-medium leading-[28px] flex items-center gap-2">
                  Đọc thêm
                  <div className="relative w-[20px] h-[20px]">
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
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[30px] mt-[30px]">
        <div
          className="bg-[#F3F3FB] hover:bg-[#4C35F5] group p-10 rounded-[16px] flex flex-col items-center justify-center transition-all ease-in-out duration-500 "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="relative w-[180px] h-[180px] mx-auto">
            <NextImg
              src="/assets/icons/tech-icon4.svg"
              alt="Capi"
              objectFit="cover"
            />
          </div>
          <p className="text-[#111013] text-[32px] font-bold leading-[40px] mt-6 mb-4 group-hover:text-[#FFF]">
            Nền tảng “Lõi”
          </p>
          <p className="text-[#111013] text-[18px] font-medium leading-[28px] group-hover:text-[#FFF] w-[85%] text-center">
            Creating a higher spacing and how people move through a unique and
            impactful campaign.
          </p>
        </div>
        <div
          className="bg-[#F3F3FB] hover:bg-[#4C35F5] group p-10 rounded-[16px] flex flex-col items-center justify-center transition-all ease-in-out duration-500"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="relative w-[180px] h-[180px] mx-auto">
            <NextImg
              src="/assets/icons/tech-icon5.svg"
              alt="Capi"
              objectFit="cover"
            />
          </div>
          <p className="text-[#111013] text-[32px] font-bold leading-[40px] mt-6 mb-4 group-hover:text-[#FFF]">
            Trung tâm dữ liệu
          </p>
          <p className="text-[#111013] text-[18px] font-medium leading-[28px] group-hover:text-[#FFF] w-[85%] text-center">
            Creating a higher spacing and how people move through a unique and
            impactful campaign.
          </p>
        </div>
        <div
          className="bg-[#F3F3FB] hover:bg-[#4C35F5] group p-10 rounded-[16px] flex flex-col items-center justify-center transition-all ease-in-out duration-500"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="relative w-[180px] h-[180px] mx-auto">
            <NextImg
              src="/assets/icons/tech-icon6.svg"
              alt="Capi"
              objectFit="cover"
            />
          </div>
          <p className="text-[#111013] text-[32px] font-bold leading-[40px] mt-6 mb-4 group-hover:text-[#FFF]">
            Hệ thống phần mềm
          </p>
          <p className="text-[#111013] text-[18px] font-medium leading-[28px] group-hover:text-[#FFF] w-[85%] text-center">
            Creating a higher spacing and how people move through a unique and
            impactful campaign.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentTech;
