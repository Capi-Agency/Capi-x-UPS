import React from "react";
import NextImg from "../common/next-img";

type Props = {};

const CourseBanner = (props: Props) => {
  return (
    <div className="bg-[#FFECD2]">
      <div className="pt-11 lg:pt-5 lg:pb-0 pb-6 custom-container">
        <div className="lg:grid grid-cols-[52%,48%] items-center">
          <div
            className="relative w-full lg:h-[661px] pt-[88%]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <NextImg
              src="/assets/image/banner-course.svg"
              alt="Capi"
              objectFit="cover"
              className=""
            />
          </div>
          <div
            className="lg:w-[80%] lg:justify-self-end lg:mt-0 mt-10"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <span className="text-[#0C1C28] text-[14px] lg:text-lg font-bold leading-[22px] lg:leading-[26px]">
              Chuỗi nội dung mới
            </span>
            <p className="text-[#0C1C28] text-[14px] lg:ext-lg leading-[22px] lg:leading-[26px]">
              Hà Nội, Việt Nam 20-23 tháng 11, 2024
            </p>
            <h1 className="text-[#0C1C28] text-[32px] lg:text-[80px] font-bold lg:leading-[92%] -tracking-[1.6px] my-1 lg:my-2">
              UPS Academy
            </h1>
            <h3 className="text-[#0C1C28] text-[20px] lg:text-[48px] font-bold lg:leading-[56px]">
              Trung tâm đào tạo và chia sẻ kiến thức
            </h3>
            <div className="grid grid-cols-3 mt-6 lg:mt-[94px] gap-3 lg:gap-10">
              <div className="bg-[#FF6D00] p-6 flex items-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className=""
                >
                  <path
                    d="M24 0V23.9377H17.0709V11.4551H15.7372C15.6253 11.9217 15.4526 12.596 15.2207 13.4029C14.7825 14.9209 14.5538 15.7214 14.1716 16.6019C13.3609 18.4985 12.2783 19.7688 11.8177 20.3105C11.0197 21.2469 10.121 21.9835 9.12154 22.5236C8.6274 22.7888 8.10128 23.0173 7.54637 23.1979C6.58689 23.575 5.56983 23.8274 4.51759 23.9377C4.11301 23.976 3.70203 24 3.28145 24C2.86088 24 2.45309 23.976 2.05011 23.9377C1.35608 23.8642 0.684436 23.7348 0.0415794 23.5494C0.0271871 23.5462 0.0143923 23.543 0 23.5382V14.678C0.0143923 14.6892 0.0271871 14.6988 0.0415794 14.7084C3.78838 17.5142 9.14712 16.6961 12.0448 13.077C12.8427 12.0799 13.4568 10.947 13.919 9.76458C13.9973 9.56485 14.4531 7.93342 14.7074 6.92836H0.0415794V0H24Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="pt-3 lg:pt-6 border-t border-[#60606B] flex flex-col gap-2">
                <p>
                  <span className="text-[#0C1C28] text-[20px] lg:text-[40px] font-bold leading-[105%] tracking-[0.4px]">
                    95
                  </span>
                  <span className="text-[#0C1C28] text-[20px] lg:text-[32px] font-bold leading-[105%]">
                    +
                  </span>
                </p>
                <p className="text-[#0C1C28] text-[14px] lg:text-[16px] font-medium leading-[22px] lg:leading-[25px] tracking-[0.28px] lg:tracking-[0.328px]">
                  Video bài giảng
                </p>
              </div>
              <div className="pt-3 lg:pt-6 border-t border-[#60606B] flex flex-col gap-2">
                <p>
                  <span className="text-[#0C1C28] text-[20px] lg:text-[40px] font-bold leading-[105%] tracking-[0.4px]">
                    285
                  </span>
                  <span className="text-[#0C1C28] text-[20px] lg:text-[32px] font-bold leading-[105%]">
                    +
                  </span>
                </p>
                <p className="text-[#0C1C28] text-[14px] lg:text-[16px] font-medium leading-[22px] lg:leading-[25px] tracking-[0.28px] lg:tracking-[0.328px]">
                  Nội dung thiết thực
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBanner;
