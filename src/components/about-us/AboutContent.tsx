'use client';
import React from 'react';
import NextImg from '../common/next-img';

type Props = {
  data: any;
};
const AboutContent = ({ data }: Props) => {
  return (
    <>
      <div className="custom-container">
        <div className="mt-10 flex flex-col gap-6 md:mt-0 md:grid md:grid-cols-2 md:gap-0">
          <div
            className="flex flex-col gap-4 place-self-end"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="text-[14px] font-semibold uppercase leading-normal text-[#00D763] lg:text-base lg2:text-[18px] 3xl:text-2xl">
              {data.card_left.title}
            </span>
            <p className="text-[20px] font-bold text-[#141414] lg:text-[24px] lg2:text-[40px] lg2:leading-[46px] 2xl:text-[44px] 2xl:leading-[52px] 3xl:text-[48px] 3xl:leading-[54px]">
              {data.card_left.content}
            </p>
          </div>
          <div
            className="w-full place-content-end justify-self-end bg-[#23252B] p-5 md:h-[320px] md:w-[340px] lg:h-[360px] lg:w-[380px] lg:p-10 lg2:h-[460px] lg2:w-[450px] lg2:p-[50px] 2xl:h-[492px] 2xl:p-[60px]"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="flex h-10 w-10 items-center justify-center bg-[#33363F] lg:h-[60px] lg:w-[60px] 2xl:h-20 2xl:w-20">
              <div className="relative h-3 w-3 lg:h-[18px] lg:w-[18px] 2xl:h-6 2xl:w-6">
                <NextImg
                  src="/assets/icons/share2.svg"
                  alt="Capi"
                  objectFit="cover"
                />
              </div>
            </div>
            <p className="mb-4 mt-3 text-[14px] font-medium leading-[22px] tracking-[0.28px] text-[#FFF] lg:mt-[32px] lg:text-base lg:tracking-[0.4px] lg2:text-[18px] lg2:leading-[28px] 3xl:text-[20px] 3xl:leading-[30px]">
              {data.card_right.content}
            </p>
            <span className="text-[14px] font-semibold uppercase text-[#00D763] lg:text-base lg2:text-[18px] lg2:leading-[28px] 3xl:text-2xl 3xl:leading-normal">
              {data.card_right.title}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
