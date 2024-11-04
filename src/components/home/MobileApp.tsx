import React from 'react';
import NextImg from '../common/next-img';

type Props = {};

const MobileApp = (props: Props) => {
  return (
    <>
      {/* section 5 */}
      <div className="mb-10 bg-[#0F1B0E] pt-10 lg:mb-[60px] lg2:pt-16 xl:mb-20 2xl:mb-[100px] 2xl:pt-[74px] 3xl:mb-[160px]">
        <div className="custom-container">
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-10 lg:gap-0 lg2:px-[107px] 3xl:px-[128px]">
            <div
              className="flex flex-col gap-5 md:my-auto lg:gap-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex flex-col gap-1">
                <div className="relative h-[32px] w-[73px] lg:h-[48px] lg:w-[111px]">
                  <NextImg
                    src="/assets/icons/Logo-small.svg"
                    alt="Capi"
                    objectFit="cover"
                    className="object-top"
                  />
                </div>
                <span className="text-sm font-medium leading-[28px] text-[#02E56A] lg:text-[18px]">
                  Mobile App
                </span>
              </div>
              <span className="text-[20px] font-bold text-[#FFF] lg:w-[80%] lg:text-[40px] lg:leading-[46px] lg2:w-[75%] lg2:text-[56px] lg2:leading-[58px] 2xl:text-[58px] 3xl:text-[60px] 3xl:leading-[60px]">
                Trải nghiệm <span className="text-[#02E56A]">tuyệt vời</span>{' '}
                hơn với ứng dụng
              </span>
              <p className="text-[14px] font-medium text-[#8C9AA4] lg:w-[80%] lg:text-base lg:leading-[24px] lg2:text-[18px] lg2:leading-[28px]">
                UPS là công ty chứng khoán đột phá dành cho thế hệ mới, nơi công
                nghệ và tư duy đổi mới, sáng tạo hợp nhất để đem lại trải nghiệm
                đầu tư thông minh, dễ dàng, và thú vị.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex cursor-pointer items-center gap-[9px] rounded-[9px] bg-[#111] p-[10px] pr-8 md:pr-6 lg:pr-[50px]">
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
                <div className="flex cursor-pointer items-center gap-[9px] rounded-[9px] bg-[#111] p-[10px] pr-6">
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
              className="relative mt-10 h-[390px] w-full sm:h-[470px] md:pt-[141%] lg:mt-0"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <NextImg
                src="/assets/image/phone-home.png"
                alt="Capi"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileApp;
