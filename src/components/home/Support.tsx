'use client';
import React, { useEffect, useState } from 'react';
import NextImg from '../common/next-img';
import Link from 'next/link';

type Props = {
  data: any;
};

const Support = ({ data }: Props) => {
  const [openItemId, setOpenItemId] = useState<number>(0);
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  }, []);
  const handleOpenItem = (index: number) => {
    if (openItemId === index) {
      setOpenItemId(-1);
    } else {
      setOpenItemId(index);
    }
  };
  return (
    <div className="custom-container">
      <div className="mx-auto mt-10 max-w-[1120px] lg:mt-[60px] xl:mt-20 2xl:mt-[100px] 3xl:mt-[160px]">
        <div className="flex flex-col gap-6 md:flex-row lg:gap-10 lg2:gap-20 xl:grid xl:grid-cols-[600px,auto]">
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="700">
            <h3 className="text-[20px] font-bold text-[#111013] lg:text-[24px] lg2:text-[40px] lg2:leading-[46px] 2xl:text-[44px] 2xl:leading-[52px] 3xl:text-[48px] 3xl:leading-[56px]">
              <span className="text-[#01C159]">{data?.title[0]?.title}</span>{' '}
              {data?.title[1].title}
            </h3>
            <p className="mt-3 text-[14px] font-medium leading-[22px] text-[#000] lg:mt-3 lg:text-base lg:leading-[28px] lg2:mt-8 lg2:text-[18px]">
              {data?.sub_title}
            </p>
            <div className="mt-6 flex flex-col gap-5 lg:mt-[60px] lg:gap-[70px]">
              {data?.questions.map(({ question }: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="relative flex cursor-pointer gap-3 lg:gap-5"
                    onClick={() => handleOpenItem(index)}
                  >
                    <div className="flex h-10 w-10 min-w-10 items-center justify-center rounded-[10px] bg-[#F3F3FB] lg:h-[50px] lg:w-[50px] lg:min-w-[50px]">
                      <div className="relative h-[19px] w-[19px] lg:h-[24px] lg:w-[24px]">
                        <NextImg
                          src="/assets/icons/document-text.svg"
                          alt="Capi"
                          objectFit="cover"
                        />
                      </div>
                    </div>
                    <div className={`flex flex-col`}>
                      <span className="mr-[54px] text-sm font-semibold leading-normal text-[#15171E] lg:mr-[62px] lg:text-base lg:leading-[24px] lg2:text-[30px] lg2:leading-9">
                        {question?.ask}
                      </span>
                      <div
                        className={`grid overflow-hidden text-sm font-medium leading-[28px] text-[#535662] transition-all duration-500 ease-in-out lg:text-base lg2:text-[18px] ${openItemId === index ? 'mt-2 grid-rows-[1fr] opacity-100 lg:mt-4' : 'mt-0 grid-rows-[0fr] opacity-0'} `}
                      >
                        <p
                          dangerouslySetInnerHTML={{
                            __html: render && question?.answer,
                          }}
                          className="overflow-hidden"
                        ></p>
                      </div>
                    </div>
                    <div className="absolute right-0 top-0">
                      <div
                        className={`relative h-6 w-6 transform cursor-pointer duration-300 ease-in-out lg:h-[32px] lg:w-[32px] ${
                          openItemId === index ? '' : 'rotate-180'
                        }`}
                      >
                        <NextImg
                          src="/assets/icons/chevron-down.svg"
                          alt="Capi"
                          objectFit="cover"
                          className="h-full w-full"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="700">
            <div className="relative p-5 lg:p-6 lg2:p-[50px] 3xl:p-[60px]">
              <div className="absolute inset-0 -z-10 h-full w-full rounded-[12px] bg-[#F3F3FB] lg:rounded-3xl"></div>
              <div className="relative h-[260px] w-[240px] lg2:h-[330px] lg2:w-[303px] 3xl:h-[350px] 3xl:w-[324px]">
                <NextImg
                  src={process.env.REACT_APP_IMG_URL + data?.card_cover?.cover}
                  alt="Capi"
                  objectFit="cover"
                  className=""
                />
              </div>
              <p className="mb-5 mt-5 text-[14px] font-semibold leading-[22px] text-[#535662] lg:mt-[52px] lg:text-base lg:leading-[28px] lg2:mb-[50px] lg2:text-[18px]">
                {data?.card_cover?.text}
              </p>
              <Link href={data.card_cover.cta.url}>
                <button className="btn active !bg-[#014227] !text-[#02E56A]">
                  {data?.card_cover?.cta?.text}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
