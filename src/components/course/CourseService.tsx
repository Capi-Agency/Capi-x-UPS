'use client';
import React from 'react';
import NextImg from '../common/next-img';
import Link from 'next/link';

type Props = {
  data: any;
};

const CourseService = ({ data }: Props) => {
  return (
    <div className="custom-container mt-12 lg2:mt-20 2xl:mt-[100px] 3xl:mt-[120px] 3xl:!max-w-[1280px]">
      {/* banner 2 */}
      <div className="overflow-hidden rounded-[12px] bg-[#000] lg:rounded-[24px]">
        <div className="flex flex-col-reverse gap-5 md:grid md:grid-cols-[40%,auto] md:items-center md:justify-between lg:gap-0 lg2:grid-cols-[34%,auto]">
          <div
            className="p-5 md:py-0 md:pl-5 md:pr-0 lg:pl-10 lg2:pl-[50px]"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
          >
            <h3 className="text-[20px] font-bold text-[#FFF] lg:text-[32px] lg2:text-[40px] lg2:leading-[54px]">
              {data?.title}
            </h3>
            <p className="mb-5 mt-4 text-[14px] font-medium leading-[22px] text-[#FFF] lg:mb-10 lg:text-base lg2:text-[18px] lg2:leading-[28px]">
              {data?.sub_title}
            </p>
            <Link href={data?.cta?.url}>
              <button className="btn active">
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
            data-aos-duration="700"
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
  );
};

export default CourseService;
