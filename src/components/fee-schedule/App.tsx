import React from 'react';
import NextImg from '../common/next-img';
import Link from 'next/link';

type Props = {};

const AppFeeSchedule = (props: Props) => {
  return (
    <div className="custom-container mt-10 lg:mt-[60px] lg2:mt-20 xl:mt-[100px] 2xl:mt-[120px]">
      <div className="flex flex-col-reverse gap-5 rounded-[12px] bg-gradient-to-r from-[#FDF2CB] to-[#DABB6B] md:grid md:grid-cols-[251px,auto] md:gap-8 md:rounded-[24px] md:pl-5 lg:grid-cols-[290px,auto] lg:gap-[90px] lg:pl-8 lg2:grid-cols-[341px,auto] lg2:gap-[60px] lg2:pl-[50px] 2xl:gap-[100px] 3xl:gap-[100px]">
        <div
          className="mb-5 flex flex-col px-5 md:place-self-end md:px-0 lg:mb-6 lg2:mb-[50px]"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="700"
        >
          <h4 className="text-[20px] font-bold text-[#000] md:w-[80%] lg:w-full lg:text-[32px] lg:leading-[46px] lg2:text-[40px] xl:leading-[54px]">
            Giao dịch liền tay phí hoàn ngay
          </h4>
          <p className="mt-2 text-[14px] font-medium leading-[22px] text-[#000] lg:mt-4 lg:text-base lg:leading-[28px] lg2:text-[18px]">
            Tăng tốc giao dịch nhanh chóng với ứng dụng di động cá nhân hoá
            riêng cho bạn.
          </p>
          <div className="mt-5 flex flex-col gap-3 lg:mt-6">
            <Link
              href="#"
              className="flex w-[180px] cursor-pointer items-center gap-[9px] rounded-[9px] bg-[#111] px-[10px] py-[6px] lg:w-[65%] lg:pr-[50px] lg2:w-[60%]"
            >
              <div className="relative h-6 w-6">
                <NextImg
                  src="/assets/icons/google-play1.svg"
                  alt="Capi"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium uppercase leading-normal text-[rgba(255,255,255,0.79)]">
                  Get it on
                </span>
                <span className="text-[14px] font-semibold leading-[21px] text-[#FFF] lg:text-base">
                  Google Play
                </span>
              </div>
            </Link>
            <Link
              href="#"
              className="flex w-[180px] cursor-pointer items-center gap-[9px] rounded-[9px] bg-[#111] px-[10px] py-[6px] lg:w-[65%] lg:pr-6 lg2:w-[60%]"
            >
              <div className="relative h-6 w-6">
                <NextImg
                  src="/assets/icons/apple-logo1.svg"
                  alt="Capi"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium uppercase leading-normal text-[rgba(255,255,255,0.79)]">
                  Download on the
                </span>
                <span className="text-[14px] font-semibold leading-[21px] text-[#FFF] lg:text-base">
                  App Store
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div
          className="relative w-full pt-[95%] md:h-[380px] md:pt-0 lg:h-[460px] lg2:h-[600px] 2xl:h-[700px] 3xl:h-[790px]"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="700"
        >
          <NextImg
            src="/assets/image/app-fee.png"
            alt="Capi"
            objectFit="cover"
            className="md:object-right-top"
          />
        </div>
      </div>
    </div>
  );
};

export default AppFeeSchedule;
