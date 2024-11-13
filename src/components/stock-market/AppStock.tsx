import React from 'react';
import NextImg from '../common/next-img';

type Props = {};

const AppStock = (props: Props) => {
  return (
    <div className="custom-container">
      <div className="mt-10 lg:mt-[60px] xl:mt-20 2xl:mt-[100px] 3xl:mt-[160px]">
        <div className="flex flex-col-reverse rounded-[12px] bg-[#D0F500] md:grid md:grid-cols-[214px,auto] md:gap-16 md:rounded-[24px] md:pl-5 lg:grid-cols-[341px,auto] lg:gap-8 lg:pl-8 lg2:gap-2 lg2:pl-[50px]">
          <div
            className="mb-5 mt-6 flex flex-col px-5 md:mt-0 md:place-self-end md:px-0 lg:mb-[50px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4 className="text-[20px] font-bold text-[#000] lg:text-[32px] lg:leading-[46px] lg2:text-[40px] xl:leading-[54px]">
              Cùng UPS chạm tới mục tiêu đầu tư của bạn
            </h4>
            <p className="mt-2 text-[14px] font-medium leading-[22px] text-[#000] lg:mt-4 lg:text-base lg:leading-[28px] lg2:text-[18px]">
              Tăng tốc giao dịch nhanh chóng với ứng dụng di động cá nhân hoá
              riêng cho bạn.
            </p>
            <div className="mt-5 flex flex-col gap-3 lg:mt-6">
              <div className="flex w-[180px] cursor-pointer items-center gap-[9px] rounded-[9px] bg-[#111] p-[10px] lg:w-[60%] lg:pr-[50px]">
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
              </div>
              <div className="flex w-[180px] cursor-pointer items-center gap-[9px] rounded-[9px] bg-[#111] p-[10px] lg:w-[60%] lg:pr-6">
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
              </div>
            </div>
          </div>
          <div
            className="relative h-[316px] w-full md:h-[380px] lg:h-[450px] lg2:h-[600px] 2xl:h-[700px] 3xl:h-[790px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <NextImg
              src="/assets/image/app-stock.png"
              alt="Capi"
              objectFit="contain"
              className="rounded-r-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStock;
