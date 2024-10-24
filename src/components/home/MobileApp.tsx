import React from "react";
import NextImg from "../common/next-img";

type Props = {};

const MobileApp = (props: Props) => {
  return (
    <>
      {/* section 5 */}
      <div className="bg-[#0F1B0E] mb-10 lg:mb-[160px] pt-10 lg:pt-[74px]">
        <div className="custom-container  ">
          <div className="lg:px-[130px] lg:grid lg:grid-cols-2 ">
            <div
              className="flex flex-col gap-5 lg:gap-8 lg:mt-20"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex flex-col gap-1">
                <div className="relative w-[73px] h-[32px] lg:w-[111px] lg:h-[48px]">
                  <NextImg
                    src="/assets/icons/Logo-small.svg"
                    alt="Capi"
                    objectFit="cover"
                    className="object-top"
                  />
                </div>
                <span className="text-[#02E56A] text-sm lg:text-[18px] font-medium leading-[28px]">
                  Mobile App
                </span>
              </div>
              <span className="text-[#FFF] text-[20px] lg:text-[60px] font-bold lg:leading-[60px] w-[75%]">
                Trải nghiệm <span className="text-[#02E56A]">tuyệt vời</span>{" "}
                hơn với ứng dụng
              </span>
              <p className="text-[#8C9AA4] font-medium leading-[28px] text-[14px] lg:text-[18px] lg:w-[80%]">
                UPS là công ty chứng khoán đột phá dành cho thế hệ mới, nơi công
                nghệ và tư duy đổi mới, sáng tạo hợp nhất để đem lại trải nghiệm
                đầu tư thông minh, dễ dàng, và thú vị.
              </p>
              <div className="flex items-center gap-3">
                <div className="bg-[#111] flex items-center gap-[9px] p-[10px] pr-8 lg:pr-[50px] rounded-[9px] cursor-pointer">
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
                <div className="bg-[#111] flex items-center gap-[9px] p-[10px] pr-6 rounded-[9px] cursor-pointer">
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
                    <span className="text-[14px] lg:text-base text-[#FFF]   font-semibold leading-[21px]">
                      App Store
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="relative w-[full] h-[470px] lg:h-[830px] lg:mt-0 mt-10"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <NextImg
                src="/assets/icons/phone-banner.svg"
                alt="Capi"
                objectFit="cover"
                className="object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileApp;
