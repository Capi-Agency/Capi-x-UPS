import React from 'react';
import NextImg from '../common/next-img';

type Props = {};

const UdemyStock = (props: Props) => {
  return (
    <div className="custom-container">
      <div className="relative mt-10 flex flex-col gap-5 overflow-hidden rounded-[16px] bg-[#150900] p-5 md:grid md:grid-cols-[auto,52%] md:items-center md:gap-10 md:px-5 md:py-0 lg:mt-[60px] lg:gap-14 lg:rounded-[40px] lg:px-10 lg2:gap-20 lg2:px-[50px] xl:mt-20 2xl:mt-[100px] 3xl:mt-[160px]">
        <div
          className="relative flex h-[234px] w-[240px] place-content-start justify-start md:h-[276px] md:w-[273px] lg:h-[320px] lg:w-[340px] lg2:h-[400px] lg2:w-[430px] 2xl:w-[482px] 3xl:w-[564px]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <NextImg
            src="/assets/icons/home-banner2.svg"
            alt="Capi"
            objectFit="cover"
            className=""
          />
        </div>
        <div className="flex flex-col" data-aos="fade-up" data-aos-delay="600">
          <span className="text-[14px] font-medium text-[#FFF] lg:text-base lg:leading-[40px] lg2:text-[18px]">
            #trungtamdaotao
          </span>
          <p className="mt-1 text-[20px] font-bold leading-normal text-[#FFBC00] lg:mt-2 lg:text-[24px] lg2:text-[40px] lg2:leading-[46px] 2xl:text-[44px] 2xl:leading-[52px] 3xl:text-[48px] 3xl:leading-[54px]">
            Trở thành nhà đầu tư chuyên nghiệp với UPS Academy
          </p>
          <p className="mb-5 mt-2 text-[14px] leading-[22px] tracking-[0.276px] text-[#FFF] lg:my-6 lg:text-base lg:leading-[29px] lg2:text-[18px]">
            So how does it work? Let’s check our{' '}
            <span className="font-bold">Getting Started</span>{' '}
            <br className="hidden lg:block" /> tutorial or choose from pre-made
            templates.
          </p>
          <div>
            <button className="btn !bg-[#FF6D00] !text-[#FFF]">
              Khám phá ngay
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 lg:h-6 lg:w-6"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.7594 6.48952C18.7594 6.2906 18.6804 6.09984 18.5398 5.95919C18.3991 5.81853 18.2083 5.73952 18.0094 5.73952L9.42515 5.73952C9.01093 5.73952 8.67515 6.0753 8.67515 6.48952C8.67515 6.90373 9.01093 7.23952 9.42515 7.23952L16.1992 7.23952L5.45855 17.9802C5.16566 18.2731 5.16566 18.7479 5.45855 19.0408C5.75145 19.3337 6.22632 19.3337 6.51921 19.0408L17.2594 8.30062V15.0738C17.2594 15.488 17.5952 15.8238 18.0094 15.8238C18.4236 15.8238 18.7594 15.488 18.7594 15.0738L18.7594 6.48952Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>{' '}
    </div>
  );
};

export default UdemyStock;
