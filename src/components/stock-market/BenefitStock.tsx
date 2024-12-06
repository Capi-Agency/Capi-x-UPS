'use client';
import React from 'react';
import NextImg from '../common/next-img';
import Link from 'next/link';

type Props = {
  data: any;
};

const BenefitStock = ({ data }: Props) => {
  return (
    <div className="mt-[-1px] bg-[#1A1711] py-6 md:py-10 lg2:py-[50px] xl:py-[60px] 2xl:py-20 3xl:py-[90px]">
      <div className="custom-container 3xl:!max-w-[calc(1280px+48px)]">
        <div
          className="flex flex-col text-center"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="700"
        >
          <span className="text-base font-medium leading-[24px] text-[#A66CFF] lg2:text-[18px] lg2:leading-[40px]">
            {data?.tag}
          </span>
          <h3 className="mb-3 mt-2 text-[24px] font-bold text-[#FFF] md:mb-4 lg:mb-5 lg:text-[40px] lg:leading-[46px] 2xl:mb-6 2xl:text-[44px] 2xl:leading-[52px] 3xl:text-[48px] 3xl:leading-[54px]">
            {data?.title[0].text}{' '}
            <span className="text-[#D0F500]"> {data?.title[1].text}</span>
          </h3>
          <p className="text-base font-medium leading-[28px] text-[#FFF] lg2:text-[18px]">
            {data?.sub_title}
          </p>
        </div>
        <div className="my-[26px] flex flex-col gap-[26px] md:my-5 md:grid md:grid-cols-3 md:gap-[44px] lg:gap-[52px] lg2:gap-[80px] 2xl:my-10 2xl:gap-[100px] 3xl:my-[60px] 3xl:gap-[140px]">
          {data?.lists.map(({ item }: any, index: number) => {
            const delay = ((index % 3) + 1) * 200;
            return (
              <div
                key={index}
                className={`flex flex-col gap-3 md:gap-2 lg2:gap-4 2xl:gap-5`}
                data-aos="fade-up"
                data-aos-delay={delay}
                data-aos-duration="700"
              >
                <div className="relative mx-auto size-[100px] md:size-20 lg:size-[120px] lg2:size-[160px] xl:size-[180px] 2xl:size-[200px] 3xl:size-[220px]">
                  <NextImg
                    src={process.env.REACT_APP_IMG_URL + item?.icon}
                    alt="UPS"
                    objectFit="contain"
                    className=""
                  />
                </div>
                <div className="mx-auto text-center">
                  <span className="text-base font-medium leading-[24px] text-[#FFF] lg:text-[18px] lg:leading-[40px]">
                    #{index + 1}
                  </span>
                  <h4 className="mx-auto w-[70%] text-[24px] font-bold text-[#FFF] md:text-[20px] lg:text-[24px] lg:leading-[40px] lg2:text-[30px] 2xl:text-[32px]">
                    {item?.title}
                  </h4>
                </div>
                <p className="mx-auto text-center text-base font-medium leading-[22px] text-[rgba(255,255,255,0.75)] md:text-[14px] lg:text-[16px] lg:leading-[28px] lg2:text-[18px]">
                  {item?.content}
                </p>
              </div>
            );
          })}
        </div>
        <Link
          href={`https://onboarding.upstock.com.vn/index.html#/./open-account/check-info`}
        >
          <button
            className="btn mx-auto !bg-[#D0F500]"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
          >
            Mở tài khoản ngay
            <div className="relative h-4 w-4 lg:h-6 lg:w-6">
              <NextImg
                src="/assets/icons/UPs.svg"
                alt="Capi"
                objectFit="cover"
              />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BenefitStock;
