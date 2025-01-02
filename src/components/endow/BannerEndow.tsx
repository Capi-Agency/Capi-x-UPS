import React from 'react';
import NextImg from '../common/next-img';

type Props = {};

const BannerEndow = (props: Props) => {
  return (
    <div className="-mt-4">
      <div className="relative h-[352px] w-full md:h-[334px] lg:h-[398px] lg2:h-[438px] xl:h-[536px] 2xl:h-[636px] 3xl:h-[696px]">
        <NextImg
          src="/assets/image/banner-uu-dai.png"
          alt="UPS"
          objectFit="cover"
        />
        <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-16 lg2:bottom-10 lg2:left-20 xl:bottom-10 xl:left-[160px] 2xl:bottom-[60px] 3xl:bottom-16 3xl:left-[240px]">
          <p className="text-[32px] font-bold leading-normal text-[#FFF] lg:text-[32px] lg:leading-[40px] lg2:text-[40px] lg2:leading-[46px] xl:text-[60px] xl:leading-[68px] xl:tracking-[-1.2px] 2xl:text-[70px] 2xl:leading-[80px] 2xl:tracking-[-1.4px] 3xl:text-[80px] 3xl:leading-[88px] 3xl:tracking-[-1.6px]">
            Khám phá <br /> ưu đãi đặc biệt <br />
            dành cho bạn.
          </p>
          <button className="btn mt-6 bg-[#F51666] text-[#FFF]">
            Liên hệ tư vấn
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                className="size-4 lg:size-6"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.7609 6.10866C18.7609 5.90975 18.6819 5.71898 18.5412 5.57833C18.4006 5.43768 18.2098 5.35866 18.0109 5.35866L9.42661 5.35866C9.0124 5.35866 8.67661 5.69444 8.67661 6.10866C8.67661 6.52287 9.0124 6.85866 9.42661 6.85866L16.2007 6.85866L5.46002 17.5993C5.16713 17.8922 5.16713 18.3671 5.46002 18.66C5.75291 18.9529 6.22779 18.9529 6.52068 18.66L17.2609 7.91976V14.6929C17.2609 15.1071 17.5967 15.4429 18.0109 15.4429C18.4251 15.4429 18.7609 15.1071 18.7609 14.6929L18.7609 6.10866Z"
                  fill="white"
                />
              </svg>
            </i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerEndow;
