import React from "react";
import NextImg from "../common/next-img";

type Props = {};

const ServiceTech = (props: Props) => {
  return (
    <div className="custom-container mt-10 lg:mt-[60px] xl:mt-20 2xl:mt-[100px] 3xl:mt-[160px]">
      <div className="bg-[#0D0344] rounded-[12px] md:rounded-[24px] md:grid md:grid-cols-[214px,auto] lg:grid-cols-[341px,auto] md:pl-5 lg:pl-8 lg2:pl-[50px] md:gap-16 lg:gap-8 lg2:gap-2 flex flex-col-reverse">
        <div
          className="flex flex-col mb-5 lg:mb-[50px] md:place-self-end md:mt-0 mt-6 md:px-0 px-5"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h4 className="text-[20px] lg:text-[32px] lg2:text-[40px] text-[#FFF] font-bold lg:leading-[46px] xl:leading-[54px]">
            Hơn cả một trải nghiệm đầu tư
          </h4>
          <p className="text-[14px] lg:text-base lg2:text-[18px] text-[#FFF] font-medium leading-[22px] lg:leading-[28px] mt-2 lg:mt-4">
            Tăng tốc giao dịch nhanh chóng với ứng dụng di động cá nhân hoá
            riêng cho bạn.
          </p>
          <div className="flex flex-col gap-3 mt-5 lg:mt-6">
            <div className="bg-[#111] flex items-center gap-[9px] p-[10px] lg:pr-[50px] rounded-[9px] cursor-pointer w-[180px] lg:w-[60%]">
              <div className="relative w-6 h-6">
                <NextImg
                  src="/assets/icons/google-play1.svg"
                  alt="Capi"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[rgba(255,255,255,0.79)] text-xs font-medium leading-normal uppercase">
                  Get it on
                </span>
                <span className="text-[#FFF] text-[14px] lg:text-base font-semibold leading-[21px]">
                  Google Play
                </span>
              </div>
            </div>
            <div className="bg-[#111] flex items-center gap-[9px] p-[10px] lg:pr-6 rounded-[9px] cursor-pointer w-[180px] lg:w-[60%]">
              <div className="relative w-6 h-6">
                <NextImg
                  src="/assets/icons/apple-logo1.svg"
                  alt="Capi"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[rgba(255,255,255,0.79)] font-medium leading-normal text-xs uppercase">
                  Download on the
                </span>
                <span className="text-[14px] lg:text-base text-[#FFF]  font-semibold leading-[21px]">
                  App Store
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative w-full h-[316px] md:h-[380px] lg:h-[450px] lg2:h-[600px] 2xl:h-[700px] 3xl:h-[790px]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <NextImg
            src="/assets/image/service-tech.png"
            alt="Capi"
            objectFit="cover"
            className="rounded-r-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceTech;
