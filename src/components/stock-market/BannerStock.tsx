'use client';
import React from 'react';
import NextImg from '../common/next-img';
import Link from 'next/link';

type Props = {
  data: any;
};

const BannerStock = ({ data }: Props) => {
  return (
    <div className="bg-[#000] pt-16">
      <div className="custom-container">
        <div className="relative hidden w-full items-center justify-center md:flex md:h-[340px] lg:h-[400px] lg2:h-[460px] xl:h-[500px] 2xl:h-[585px] 3xl:h-[658px]">
          <div
            className="absolute inset-0"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
          >
            <div className="relative mx-auto w-full md:h-[340px] lg:h-[400px] lg2:h-[460px] xl:h-[500px] 2xl:h-[585px] 3xl:h-[658px]">
              <NextImg
                src={process.env.REACT_APP_IMG_URL + data?.cover}
                alt="UPS"
                objectFit="cover"
                className=""
              />
            </div>
          </div>
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="700"
          >
            <h1 className="font-bold text-[#D0F500] md:text-[40px] md:leading-[46px] lg2:text-[48px] lg2:leading-[54px] xl:text-[54px] xl:leading-[62px] 2xl:text-[60px] 2xl:leading-[68px] 3xl:text-[72px] 3xl:leading-[80px]">
              {data?.title}
            </h1>
            <p className="mt-[10px] font-bold text-[#FFF] md:text-sm lg:text-base lg2:mt-3 2xl:mt-4">
              {data?.sub_title}
            </p>
          </div>
        </div>
        {/* mobile */}
        <div className="mt-4 block md:hidden">
          <div className="relative mx-auto h-[189px] w-[210px]">
            <NextImg
              src={process.env.REACT_APP_IMG_URL + data?.cover_mb}
              alt="UPS"
              objectFit="cover"
              className=""
            />
          </div>
          <div
            className="mt-5 text-center"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="700"
          >
            <h1 className="text-[32px] font-bold text-[#D0F500]">
              {' '}
              {data?.title}
            </h1>
            <p className="mt-2 font-bold text-[#FFF]">{data?.sub_title}</p>
          </div>
        </div>
        <div
          className="mx-auto mt-10 text-center lg:mt-[60px]"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="700"
        >
          <p className="mx-auto w-full text-sm font-bold text-[#FFF] md:w-[582px] lg:w-[665px] lg:text-base">
            {data?.content}
          </p>
          <div className="mx-auto my-4 h-[1px] w-[242px] bg-[#60606B] bg-opacity-65 md:w-[370px] lg:my-5"></div>
          <Link href={data?.cta?.url}>
            <button className="btn mx-auto !bg-[#A66CFF] !text-[#FFF]">
              {data?.cta?.text}
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  className="h-4 w-4 lg:h-6 lg:w-6"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.7594 6.96022C18.7594 6.76131 18.6804 6.57054 18.5398 6.42989C18.3991 6.28924 18.2083 6.21022 18.0094 6.21022L9.42515 6.21022C9.01093 6.21022 8.67515 6.54601 8.67515 6.96022C8.67515 7.37443 9.01093 7.71022 9.42515 7.71022L16.1992 7.71022L5.45855 18.4509C5.16566 18.7438 5.16566 19.2186 5.45855 19.5115C5.75145 19.8044 6.22632 19.8044 6.51921 19.5115L17.2594 8.77132V15.5445C17.2594 15.9587 17.5952 16.2945 18.0094 16.2945C18.4236 16.2945 18.7594 15.9587 18.7594 15.5445L18.7594 6.96022Z"
                    fill="white"
                  />
                </svg>
              </i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerStock;
