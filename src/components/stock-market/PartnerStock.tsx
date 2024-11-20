'use client';
import React from 'react';
import NextImg from '../common/next-img';

type Props = {
  data: any;
};
const PartnerStock = ({ data }: Props) => {
  return (
    <div className="custom-container mt-10 lg:mt-[60px] xl:mt-20 2xl:mt-[100px] 3xl:mt-[160px]">
      <div className="flex flex-col gap-10 md:grid md:grid-cols-[260px,auto] lg:grid-cols-[356px,auto] 2xl:grid-cols-[452px,auto]">
        <div
          className="flex flex-col gap-2"
          data-aos="fade-up"
          data-aos-delay="200"
           data-aos-duration="800"
        >
          <h3 className="w-[90%] text-[20px] font-bold text-[#111013] lg:text-[32px] lg2:text-[40px] lg2:leading-[46px] 2xl:text-[44px] 2xl:leading-[52px] 3xl:text-[48px] 3xl:leading-[54px]">
            {data?.title[0].text}{' '}
            <span className="text-[#00D763]">{data?.title[1].text}</span>
          </h3>
          <p className="w-[90%] text-[14px] font-medium leading-[22px] text-[#111013] lg:text-[18px] lg:leading-[18px]">
            {data?.sub_title}
          </p>
        </div>
        <div
          className="grid grid-cols-3 items-center justify-start gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-[50px]"
          data-aos="fade-up"
          data-aos-delay="600"
           data-aos-duration="800"
        >
          {data?.logos.map((logo: any, index: number) => (
            <div key={index}>
              <img
                src={process.env.REACT_APP_IMG_URL + logo.image}
                alt="Capi"
                className="h-6 object-contain lg:h-8 lg2:h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerStock;
