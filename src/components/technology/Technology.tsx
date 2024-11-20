'use client';
import React from 'react';
import NextImg from '../common/next-img';

type Props = {
  data: any;
};
const Technology = ({ data }: Props) => {
  return (
    <div className="custom-container">
      <div className="mt-6 grid grid-rows-3 gap-3 md:grid-cols-3 md:grid-rows-none lg:mt-[30px] lg:gap-[30px]">
        {data?.map(({ item }: any, index: number) => {
          const delay = ((index % 3) + 1) * 200;
          return (
            <div
              key={index}
              className="group flex flex-col items-center justify-center rounded-[12px] bg-[#F3F3FB] p-5 transition-all duration-500 ease-in-out hover:bg-[#4C35F5] lg:rounded-[16px] lg2:p-8 2xl:p-10"
              data-aos="fade-up"
              data-aos-delay={delay}
               data-aos-duration="800"
            >
              <div className="relative mx-auto h-[160px] w-[160px] md:h-[120px] md:w-[120px] lg:h-[160px] lg:w-[160px] lg2:h-[180px] lg2:w-[180px]">
                <NextImg
                  src={process.env.REACT_APP_IMG_URL + item.cover}
                  alt="UPS"
                  objectFit="cover"
                />
              </div>
              <p className="mb-2 mt-6 text-[20px] font-bold text-[#111013] group-hover:text-[#FFF] lg:mb-4 lg:text-[24px] lg2:text-[30px] 2xl:text-[32px] 2xl:leading-[40px]">
                {item.title}
              </p>
              <p className="text-center text-[14px] font-medium leading-[22px] text-[#111013] group-hover:text-[#FFF] lg:text-base lg:leading-[28px] lg2:text-[18px] 3xl:w-[85%]">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technology;
