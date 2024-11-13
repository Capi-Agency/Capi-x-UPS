import React from 'react';
import NextImg from '../common/next-img';
import Link from 'next/link';

type Props = {};

const NewsBanner = (props: Props) => {
  return (
    <div className="mb-[52px] mt-[60px] grid grid-cols-[592px,auto]">
      <div className="flex flex-col gap-9 rounded-l-[20px] bg-[#15171E] px-[50px] py-11 text-[#FFF]">
        <div className="relative h-[32px] w-[73px] lg:h-[48px] lg:w-[111px]">
          <NextImg
            src="/assets/icons/Logo-small.svg"
            alt="Capi"
            objectFit="cover"
            className="object-top"
          />
        </div>
        <div>
          <p className="text-[32px] font-medium leading-[40px]">
            Ông Trump nói về lạm phát, chỉ trích bà Harris trong cuộc vận động
            tranh cử ở Bắc Carolina
          </p>
          <div className="my-6 h-[2px] w-[140px] bg-[#02E56A]"></div>
          <p className="font-medium text-[#8C9AA4]">
            Ông Trump nói về lạm phát, chỉ trích bà Harris trong cuộc vận động
            tranh cử ở Bắc Carolina
          </p>
        </div>
        <Link href={'/tin-tuc/chi-tiet-tin-tuc'}>
          <button className="flex items-center gap-3 font-bold">
            Xem chi tiết
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="12"
                viewBox="0 0 16 12"
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
      <div className="relative h-full w-full">
        <NextImg
          src="/assets/image/banner-news.jpg"
          alt="Capi"
          objectFit="cover"
          className="rounded-r-[20px]"
        />
      </div>
    </div>
  );
};

export default NewsBanner;
