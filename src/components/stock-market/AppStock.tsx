'use client';
import React from 'react';
import NextImg from '../common/next-img';
import Link from 'next/link';

type Props = {
  data: any;
};

const AppStock = ({ data }: Props) => {
  return (
    <div className="custom-container">
      <div className="mt-10 lg:mt-[60px] xl:mt-20 2xl:mt-[100px] 3xl:mt-[160px]">
        <div className="flex flex-col-reverse gap-5 rounded-[12px] bg-[#D0F500] md:grid md:grid-cols-[251px,auto] md:gap-8 md:rounded-[24px] md:pl-5 lg:grid-cols-[290px,auto] lg:gap-[90px] lg:pl-8 lg2:grid-cols-[341px,auto] lg2:gap-[45px] lg2:pl-[50px] 2xl:gap-[85px] 3xl:gap-[99px]">
          <div
            className="mb-5 flex flex-col px-5 md:place-self-end md:px-0 lg:mb-6 lg2:mb-[50px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4 className="text-[20px] font-bold text-[#000] lg:text-[32px] lg:leading-[46px] lg2:text-[40px] xl:leading-[54px]">
              {data?.title}
            </h4>
            <p className="mt-2 text-[14px] font-medium leading-[22px] text-[#000] lg:mt-4 lg:text-base lg:leading-[28px] lg2:text-[18px]">
              {data?.sub_title}
            </p>
            <div className="mt-5 flex flex-col gap-3 lg:mt-6">
              <Link
                href={data?.cta?.url}
                className="flex w-[180px] cursor-pointer items-center gap-[9px] rounded-[9px] bg-[#111] px-[10px] py-[6px] lg:w-[65%] lg:pr-[50px] lg2:w-[60%]"
              >
                <div className="relative h-6 w-6">
                  <NextImg
                    src="/assets/icons/google-play1.svg"
                    alt="Capi"
                    objectFit="cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium uppercase leading-normal text-[rgba(255,255,255,0.79)]">
                    Get it on
                  </span>
                  <span className="text-[14px] font-semibold leading-[21px] text-[#FFF] lg:text-base">
                    Google Play
                  </span>
                </div>
              </Link>
              <Link
                href={data?.cta?.url}
                className="flex w-[180px] cursor-pointer items-center gap-[9px] rounded-[9px] bg-[#111] px-[10px] py-[6px] lg:w-[65%] lg:pr-6 lg2:w-[60%]"
              >
                <div className="relative h-6 w-6">
                  <NextImg
                    src="/assets/icons/apple-logo1.svg"
                    alt="Capi"
                    objectFit="cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium uppercase leading-normal text-[rgba(255,255,255,0.79)]">
                    Download on the
                  </span>
                  <span className="text-[14px] font-semibold leading-[21px] text-[#FFF] lg:text-base">
                    App Store
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div
            className="relative h-[356px] w-full md:h-[380px] lg:h-[460px] lg2:h-[600px] 2xl:h-[700px] 3xl:h-[790px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <NextImg
              src={process.env.REACT_APP_IMG_URL + data.cover}
              alt="Capi"
              objectFit="cover"
              className="object-left-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStock;
