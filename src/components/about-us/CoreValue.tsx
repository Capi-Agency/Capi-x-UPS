'use client';
import React from 'react';
import NextImg from '../common/next-img';

type Props = {
  data: any;
};

const CoreValue = ({ data }: Props) => {
  return (
    <div className="custom-container mt-10 md:mt-20 lg:mt-[100px] 3xl:mt-[130px]">
      <div className="flex flex-col gap-10 md:grid md:grid-cols-[278px,auto] lg:grid-cols-2 lg:gap-[30px]">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="700"
          className="flex flex-col justify-between"
        >
          <div>
            <span className="text-[14px] font-bold leading-[40px] text-[#111013] md:text-[20px] lg:text-[30px] 2xl:text-[32px]">
              {data?.section_content?.title}
            </span>
            <div className="my-3 h-[1px] w-full bg-[#60606B] md:my-2 lg:my-4 lg:mb-8"></div>
            <p className="text-[14px] font-medium leading-[28px] text-[#111013] lg:text-[18px]">
              {data?.section_content?.sub_title}
            </p>
          </div>
          <div className="relative mt-10 h-[200px] w-[186px] lg:mt-0 lg:h-[250px] lg:w-[233px]">
            <NextImg
              src="/assets/image/ups-box.png"
              alt="Capi"
              objectFit="cover"
            />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="700">
          <div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-6 lg:gap-x-[30px] lg:gap-y-[50px]">
            {data?.list?.map(({ item }: any, index: number) => (
              <div key={index} className="col-span-1">
                <span className="text-[14px] font-medium leading-[40px] text-[#111013] lg:text-[18px]">
                  #{index + 1}
                </span>
                <div className="my-3 h-[1px] w-full bg-[#60606B] md:my-2 lg:my-4"></div>
                <h4 className="mb-2 text-[20px] font-bold text-[#111013] lg:text-[30px] lg2:mb-5 2xl:text-[32px] 2xl:leading-[40px]">
                  {item.title}
                </h4>
                <p className="text-[14px] font-medium leading-[22px] text-[#111013] lg:text-[18px] lg:leading-[28px]">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValue;
