'use client';
import React from 'react';
import NextImg from '../common/next-img';
import Link from 'next/link';

type Props = {
  dataNew?: any;
  url?:string
};

const NewsBanner = ({ dataNew, url='tin-hoat-dong/' }: Props) => {
  return (
    <div className="custom-container overflow-hidden 3xl:!max-w-[calc(1280px+48px)]">
      <div
        className="mt-[18px] flex flex-col-reverse md:grid md:grid-cols-[46%,auto] lg:mt-6 lg2:mt-7 2xl:mt-8 3xl:mt-[60px]"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="700"
      >
        <div className="flex flex-col gap-2 rounded-b-[20px] rounded-tl-none bg-[#15171E] p-5 text-[#FFF] md:gap-3 md:rounded-l-[20px] md:rounded-br-none lg:gap-6 lg:px-[34px] lg:py-8 lg2:px-10 lg2:py-8 2xl:px-11 2xl:py-[34px] 3xl:gap-9 3xl:px-[50px] 3xl:py-11">
          <div className="relative h-[26px] w-[60px] lg:h-[32px] lg:w-[73px] 2xl:h-[48px] 2xl:w-[111px]">
            <NextImg
              src="/assets/icons/Logo-small.svg"
              alt="Capi"
              objectFit="cover"
              className="object-top"
            />
          </div>
          <div>
            <p className="line-clamp-3 text-[18px] font-medium lg:text-[20px] lg2:text-[24px] lg2:leading-[40px] 2xl:text-[28px] 3xl:text-[32px]">
              {dataNew?.short_content?.title}
            </p>
            <div className="my-2 h-[2px] w-[140px] bg-[#02E56A] md:my-3 lg:my-4 lg2:my-5 2xl:my-6"></div>
            <p className="line-clamp-3 text-sm font-medium text-[#8C9AA4] lg:text-base">
              {dataNew?.short_content?.blurb}
            </p>
          </div>
          <Link href={url+dataNew?.short_content?.slug}>
            <button className="flex items-center gap-2 text-sm font-bold lg:gap-3 lg:text-base">
              Xem chi tiết
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  className="h-[10px] w-[14px] lg:h-3 lg:w-4"
                  fill="none"
                >
                  <path
                    d="M1 5.40234C0.585786 5.40234 0.25 5.73813 0.25 6.15234C0.25 6.56656 0.585786 6.90234 1 6.90234V5.40234ZM15.6725 6.68267C15.9654 6.38978 15.9654 5.91491 15.6725 5.62201L10.8995 0.849043C10.6066 0.556149 10.1317 0.556149 9.83883 0.849043C9.54594 1.14194 9.54594 1.61681 9.83883 1.9097L14.0815 6.15234L9.83883 10.395C9.54594 10.6879 9.54594 11.1628 9.83883 11.4556C10.1317 11.7485 10.6066 11.7485 10.8995 11.4556L15.6725 6.68267ZM1 6.90234H15.1421V5.40234H1V6.90234Z"
                    fill="white"
                  />
                </svg>
              </i>
            </button>
          </Link>
        </div>
        <div className="relative h-[300px] w-full md:h-full">
          <NextImg
            src={
              process.env.REACT_APP_IMG_URL + dataNew?.short_content?.cover?.id
            }
            alt="Capi"
            objectFit="cover"
            className="rounded-r-none rounded-t-[20px] md:rounded-r-[20px] md:rounded-tl-none"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsBanner;
