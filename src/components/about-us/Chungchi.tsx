'use client';
import Link from 'next/link';
import React from 'react';

type Props = {
  data: any;
};

const Chungchi = ({ data }: Props) => {
  return (
    <div className="-mt-[1px] bg-[#0D0C10]">
      <div className="custom-container pb-10 pt-10 lg:pb-[60px] lg2:pt-20 xl:pb-20 2xl:pb-[100px] 2xl:pt-[100px] 3xl:pb-[160px]">
        <div className="grid grid-cols-2">
          <div
            className="flex flex-col gap-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
          >
            <h3 className="text-[20px] font-bold text-[#FFF] lg:text-[24px] lg2:text-[40px] lg2:leading-[46px] 2xl:text-[44px] 2xl:leading-[52px] 3xl:text-[48px] 3xl:leading-[56px]">
              {data?.titles[0].title} <br /> {data?.titles[1].title}
            </h3>
            <p className="hidden text-[14px] font-medium leading-[28px] text-[#FFF] md:block lg:text-base lg2:text-[18px]">
              {data?.sub_title}
            </p>
          </div>
          <div
            className="mt-2 justify-self-end md:mt-0 md:place-self-end"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="700"
          >
            <p className="text-[14px] font-medium leading-[22px] text-[#FFF] lg:text-base lg:leading-[28px] lg2:text-[18px]">
              Bạn muốn tìm hiểu thêm?
            </p>
            <Link href={data?.cta?.url}>
              <p className="cursor-pointer text-right text-[14px] font-medium leading-[22px] text-[#00D763] underline lg:text-base lg:leading-[28px] lg2:text-[18px]">
                {data?.cta?.text}
              </p>
            </Link>
          </div>
        </div>
        <p className="mt-4 block text-[14px] font-medium leading-[22px] text-[#FFF] md:hidden lg:text-base lg:leading-[28px] lg2:text-[18px]">
          {data?.sub_title}
        </p>
      </div>
    </div>
  );
};

export default Chungchi;
