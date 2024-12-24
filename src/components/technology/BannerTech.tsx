'use client';
import React from 'react';

import NextImg from '../common/next-img';

type Props = {};

const BannerTech = () => {
  return (
    <section
      className="-mt-4"
      style={{
        background:
          'radial-gradient(29.93% 48.26% at 50% 53.95%, #837848 0%, #000 100%)',
      }}
    >
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="700"
        className="custom-container pb-7 pt-16 md:pb-5 lg:pt-[70px] xl:pt-20 2xl:pb-9 3xl:!max-w-[calc(1440px+48px)] 3xl:pb-11"
      >
        <div className="flex flex-col items-center justify-center">
          <div>
            <p className="text-center text-[30px] font-bold leading-normal tracking-[-0.88px] text-[#FFF] lg:text-[40px] xl:text-[44px]">
              Nền tảng công nghệ{' '}
              <span
                className="text-transparent"
                style={{
                  background:
                    'radial-gradient(1952.95% 60.53% at 63.86% 39.47%, #FDF2CB 0%, #DABB6B 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <br className="block md:hidden" />
                vượt trội.
              </span>
            </p>
          </div>
          <div className="my-3 h-[1px] w-[140px] bg-[#FDF2CB] md:my-4 md:w-[370px] lg:my-5"></div>
          <p className="text-sm font-bold tracking-[-0.35px] text-[rgba(255,255,255,0.60)] md:text-base md:tracking-[-0.42px]">
            Bền bỉ - nhanh chóng - thuận tiện - dễ dàng
          </p>
        </div>
        <div className="relative mx-auto mt-2 h-[200px] w-full md:mt-5 md:h-[300px] lg:mt-[30px] lg:h-[449px] xl:mt-11 xl:h-[540px] 2xl:mt-[54px] 2xl:h-[628px] 3xl:mt-16 3xl:h-[658px]">
          <NextImg
            src="/assets/image/banner-nen-tang.png"
            alt="UPS"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerTech;
