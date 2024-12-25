'use client';
import React from 'react';
import NextImg from '../common/next-img';
import SlideAbout from './SlideAbout';
import Chungchi from './Chungchi';

type Props = {
  data: any;
};

const ServiceAbout = ({ data }: Props) => {
  return (
    <>
      <div className="mt-10 bg-[#0D0C10] pt-10 lg:mt-[60px] lg:pt-[60px] xl:mt-20 xl:pt-20 2xl:mt-[100px] 2xl:pt-[100px] 3xl:mt-[160px] 3xl:pt-[160px]">
        <div className="flex flex-col">
          <div className="custom-container">
            <div className="flex items-center justify-between">
              <span
                className="text-[20px] font-bold leading-normal text-[#FFF] lg:text-[24px] lg2:text-[30px]"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="700"
              >
                Dịch vụ chứng khoán
              </span>
              <div
                className="flex cursor-pointer items-center gap-2"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="700"
              >
                <button className="text-nowrap text-[14px] font-medium leading-[22px] text-[#FFF] lg:text-[18px] lg:leading-[28px]">
                  Xem tất cả
                </button>
                <div className="relative h-4 w-4 lg:h-[24px] lg:w-[24px]">
                  <NextImg
                    src="/assets/icons/arrow_forward.svg"
                    alt="Capi"
                    objectFit="cover"
                    className=""
                  />
                </div>
              </div>
            </div>
            <div
              className="mb-6 mt-3 h-[1px] w-full bg-[#60606B] lg:mb-10 lg:mt-5"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="700"
            ></div>
          </div>
          <div className="lg:custom-container">
            <SlideAbout data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceAbout;
