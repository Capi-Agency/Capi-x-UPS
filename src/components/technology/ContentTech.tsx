'use client';
import React from 'react';
import NextImg from '../common/next-img';
import Link from 'next/link';

type Props = {
  data: any;
};

const ContentTech = ({ data }: Props) => {
  return (
    <div className="custom-container mt-10 lg:mt-[60px] xl:mt-20 2xl:mt-[100px] 3xl:mt-[160px]">
      <div className="rounded-[12px] bg-[#F3F3FB] px-6 py-5 lg:rounded-[24px] lg:px-10 lg:py-10 lg2:px-[60px] lg2:py-[60px] 2xl:py-[80px]">
        <div className="flex flex-col gap-10 md:grid md:grid-cols-[346px,auto] lg2:grid-cols-[435px,auto] 2xl:grid-cols-[520px,auto] 3xl:gap-14">
          <div data-aos="fade-up" data-aos-delay="200"  data-aos-duration="800">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111013] drop-shadow filter lg:h-[60px] lg:w-[60px]">
              <div className="relative h-4 w-4 rounded-full lg:h-[24px] lg:w-[24px]">
                <NextImg
                  src="/assets/icons/stop.svg"
                  alt="Capi"
                  objectFit="cover"
                />
              </div>
            </div>
            <p className="mb-2 mt-5 text-[14px] font-medium leading-[22px] text-[#111013] lg:mt-6 lg:text-base lg:leading-[40px] lg2:text-[18px]">
              #datatracking app
            </p>
            <p className="text-[20px] font-bold text-[#141414] lg:w-[90%] lg:text-[24px] lg2:text-[40px] lg2:leading-[46px] 2xl:text-[44px] 2xl:leading-[52px] 3xl:text-[48px] 3xl:leading-[56px]">
              {data?.title[0].text} <br className="hidden lg:block" />
              {data?.title[1].text}
            </p>
            <p className="mt-2 text-[14px] leading-[22px] text-[#111013] lg:mt-6 lg:text-base lg2:text-[18px] lg2:leading-[28px] xl:leading-[30px]">
              {data?.sub_title}
            </p>
            <Link href={data?.cta.url}>
              <button className="btn active mt-5 !bg-[#014227] !text-[#02E56A] lg:mt-6">
                {data?.cta.text}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 lg:h-6 lg:w-6"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.7595 5.98943C18.7595 5.79051 18.6804 5.59975 18.5398 5.4591C18.3991 5.31844 18.2084 5.23943 18.0095 5.23943L9.42518 5.23943C9.01096 5.23943 8.67518 5.57521 8.67518 5.98943C8.67518 6.40364 9.01096 6.73943 9.42518 6.73943L16.1992 6.73943L5.45858 17.4801C5.16569 17.773 5.16569 18.2478 5.45858 18.5407C5.75148 18.8336 6.22635 18.8336 6.51925 18.5407L17.2595 7.80053V14.5737C17.2595 14.9879 17.5952 15.3237 18.0095 15.3237C18.4237 15.3237 18.7595 14.9879 18.7595 14.5737L18.7595 5.98943Z"
                    fill="#02E56A"
                  />
                </svg>
              </button>
            </Link>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
             data-aos-duration="800"
            className="place-content-end"
          >
            <div className="relative h-[184px] w-full rounded-full lg:h-[274px] lg2:h-[328px] 2xl:h-[374px] 3xl:h-[464px]">
              <NextImg
                src={process.env.REACT_APP_IMG_URL + data.cover}
                alt="Capi"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-12">
          <div className="flex flex-col gap-6 md:grid md:grid-cols-3 lg:gap-10">
            {data.list.map(({ item }: any, index: number) => {
              const delay = ((index % 3) + 1) * 200;
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between gap-3 border-t border-[#60606B] pt-6 opacity-[0.65] lg:gap-4 lg:pt-8 lg2:pt-10 2xl:pt-12"
                  data-aos="fade-up"
                  data-aos-delay={delay}
                   data-aos-duration="800"
                >
                  <div className="flex flex-row items-center gap-3 lg:flex-col lg:items-start lg:gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF] lg:h-[50px] lg:w-[50px] lg2:h-[60px] lg2:w-[60px]">
                      <div
                        className={`relative h-4 w-4 lg:h-5 lg:w-5 lg2:h-6 lg2:w-6`}
                      >
                        <NextImg
                          src={process.env.REACT_APP_IMG_URL + item.icon}
                          alt="Capi"
                          objectFit="contain"
                        />
                      </div>
                    </div>
                    <p className="text-[20px] font-bold leading-[40px] text-[#111013] lg:text-[24px] lg2:text-[30px] 2xl:text-[32px]">
                      {item.title}
                    </p>
                  </div>
                  <p className="text-[14px] font-medium leading-[22px] text-[#111013] lg:text-base lg:leading-[28px] lg2:text-[18px]">
                    {item.description}
                  </p>
                  <div className="">
                    <button className="flex items-center gap-2 rounded-[8px] bg-[#111013] px-3 py-1 text-sm font-medium leading-[28px] text-[#FFF] lg:text-[18px]">
                      Đọc thêm
                      <div className="relative h-[20px] w-[20px]">
                        <NextImg
                          src="/assets/icons/arrow_forward.svg"
                          alt="Capi"
                          objectFit="cover"
                          className=""
                        />
                      </div>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTech;
