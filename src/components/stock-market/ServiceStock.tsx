'use client';
import React from 'react';
import NextImg from '../common/next-img';
import Link from 'next/link';

type Props = {
  data: any;
};

const ServiceStock = ({ data }: Props) => {
  return (
    <div className="mt-[-1px] bg-[#000] pb-6 pt-12 md:pb-10 md:pt-10 lg:pt-[60px] lg2:pb-20 lg2:pt-[101px] 2xl:pb-[120px]">
      <div className="custom-container">
        <div className="rounded-[12px] bg-[#1A1711] lg:rounded-[24px]">
          <div className="flex flex-col-reverse gap-5 overflow-hidden md:grid md:grid-cols-[35%,auto] md:items-center md:justify-between lg:grid-cols-[40%,auto] lg:gap-0 lg2:grid-cols-[35%,auto] 2xl:grid-cols-[30%,auto] 3xl:grid-cols-[28%,auto]">
            <div
              className="p-5 md:py-0 md:pl-5 md:pr-0 lg:pl-10 lg2:pl-[50px]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-[20px] font-bold text-[#FFF] lg:text-[32px] lg2:text-[40px] lg2:leading-[54px]">
                {data?.title}
              </h3>
              <p className="mb-5 mt-4 text-[14px] font-medium leading-[22px] text-[#FFF] lg:mb-10 lg:text-base lg2:text-[18px] lg2:leading-[28px]">
                {data?.sub_title}
              </p>

              <Link href={data?.cta?.url}>
                <button className="btn !bg-[#D0F500]">
                  {data?.cta?.text}
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
            <div
              className="relative w-full pt-[55%] md:h-[256px] md:w-[390px] lg:h-[340px] lg:w-[500px] lg2:h-[380px] lg2:w-[638px] 2xl:w-[700px]"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <NextImg
                src={process.env.REACT_APP_IMG_URL + data?.cover}
                alt="Capi"
                objectFit="cover"
                className="object-left"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceStock;
