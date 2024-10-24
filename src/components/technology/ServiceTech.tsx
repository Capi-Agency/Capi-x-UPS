import React from "react";
import NextImg from "../common/next-img";

type Props = {};

const ServiceTech = (props: Props) => {
  return (
    <div className="custom-container mt-[48px] lg:mt-[160px]">
      <div className="bg-[#0D0344] rounded-[24px] lg:grid lg:grid-cols-[341px,auto] lg:pl-[50px] flex flex-col-reverse">
        <div
          className="flex flex-col mb-5 lg:mb-[50px] lg:place-self-end lg:mt-0 mt-6 lg:px-0 px-5"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h4 className="text-[20px] lg:text-[40px] text-[#FFF] font-bold lg:leading-[54px]">
            Hơn cả một trải nghiệm đầu tư
          </h4>
          <p className="text-[14px] lg:text-[18px] text-[#FFF] font-medium leading-[22px] lg:leading-[28px] mt-4">
            Tăng tốc giao dịch nhanh chóng với ứng dụng di động cá nhân hoá
            riêng cho bạn.
          </p>
          <div className="flex flex-col gap-3 mt-6">
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
          className="relative w-full lg:h-[790px] h-[316px]"
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
