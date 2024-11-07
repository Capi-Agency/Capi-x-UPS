'use client';
import React from 'react';
import NextImg from '../common/next-img';

type Props = {
  data: any;
};

const CourseBanner = ({ data }: Props) => {
  return (
    <div className="bg-[#FFECD2]">
      <div className="custom-container pb-6 pt-8 md:pb-0 md:pt-12 lg:pt-10 lg2:pt-16 2xl:pt-14 3xl:pt-6">
        <div className="md:grid md:grid-cols-[auto,342px] md:gap-10 lg:grid-cols-[auto,420px] lg:items-center lg:gap-12 lg2:grid-cols-[auto,528px] lg2:items-stretch lg2:gap-[74px] 2xl:grid-cols-[auto,560px] 2xl:items-center 2xl:gap-[90px] 3xl:gap-[136px]">
          <div
            className="relative w-full pt-[85%] md:h-[300px] lg:h-[380px] lg2:h-[460px] 2xl:h-[560px] 3xl:h-[661px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <NextImg
              src={process.env.REACT_APP_IMG_URL + data.cover}
              alt="Capi"
              objectFit="contain"
              className=""
            />
          </div>
          <div
            className="mt-10 md:mt-0 lg:justify-self-end"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <span className="text-[14px] font-bold text-[#0C1C28] lg:text-base lg2:text-lg">
              {data.content.text}
            </span>
            <p className="text-[14px] text-[#0C1C28] lg:text-base lg2:text-lg">
              {data.content.addres}
            </p>
            <h1 className="my-1 text-[32px] font-bold -tracking-[1.6px] text-[#0C1C28] lg:my-2 lg:text-[40px] lg2:text-[52px] 2xl:text-[60px] 3xl:text-[80px]">
              {data.title}
            </h1>
            <h3 className="text-[20px] font-bold text-[#0C1C28] md:w-[85%] lg:text-[24px] lg2:text-[32px] 2xl:w-full 2xl:text-[40px] 2xl:leading-[54px] 3xl:text-[48px] 3xl:leading-[56px]">
              {data.sub_title}
            </h3>
            <div className="mt-6 grid grid-cols-3 gap-3 lg:gap-6 lg2:mt-20 2xl:mt-[94px] 2xl:gap-10">
              <div className="flex items-end bg-[#FF6D00] p-5 lg:p-6">
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
              <div className="flex flex-col gap-2 border-t border-[#60606B] pt-3 lg:pt-4 lg2:pt-6">
                <p>
                  <span className="text-[20px] font-bold leading-none tracking-[0.4px] text-[#0C1C28] lg:text-[24px] lg2:text-[40px]">
                    {data.total.video_count}
                  </span>
                  <span className="text-[20px] font-bold leading-none text-[#0C1C28] lg:text-[24px] lg2:text-[32px]">
                    +
                  </span>
                </p>
                <p className="text-[14px] font-medium tracking-[0.28px] text-[#0C1C28] lg:text-base lg:tracking-[0.328px] 3xl:text-[18px]">
                  Video bài giảng
                </p>
              </div>
              <div className="flex flex-col gap-2 border-t border-[#60606B] pt-3 lg:pt-4 lg2:pt-6">
                <p>
                  <span className="text-[20px] font-bold leading-none tracking-[0.4px] text-[#0C1C28] lg:text-[24px] lg2:text-[40px]">
                    {data.total.content_count}
                  </span>
                  <span className="text-[20px] font-bold leading-none text-[#0C1C28] lg:text-[24px] lg2:text-[32px]">
                    +
                  </span>
                </p>
                <p className="w-[80%] text-[14px] font-medium leading-[22px] tracking-[0.28px] text-[#0C1C28] lg:text-base lg:leading-[25px] lg:tracking-[0.328px] lg2:w-full 3xl:text-[18px]">
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
