import React from 'react';
import NextImg from '../common/next-img';
import SlideAbout from './SlideAbout';

type Props = {};

const ServiceAbout = (props: Props) => {
  return (
    <>
      <div className="mt-10 bg-[#0D0C10] py-10 lg:mt-[60px] lg:py-[60px] xl:mt-20 xl:py-20 2xl:mt-[100px] 2xl:py-[100px] 3xl:mt-[160px] 3xl:py-[160px]">
        <div className="flex flex-col">
          <div className="custom-container">
            <div className="flex items-center justify-between">
              <span
                className="text-[20px] font-bold leading-normal text-[#FFF] lg:text-[24px] lg2:text-[30px]"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Dịch vụ chứng khoán
              </span>
              <div
                className="flex cursor-pointer items-center gap-2"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <button className="text-nowrap text-[14px] font-medium leading-[22px] text-[#FFF] lg:text-[18px] lg:leading-[28px]">
                  Xem tất cả
                </button>
                <div className="relative h-4 w-4 lg:h-[24px] lg:w-[24px]">
                  <NextImg
                    src="/assets/icons/arrow_forward.svg"
                    alt="Capi"
                    objectFit="cover"
                    className=""
                  />
                </div>
              </div>
            </div>
            <div
              className="mb-6 mt-3 h-[1px] w-full bg-[#60606B] lg:mb-10 lg:mt-5"
              data-aos="fade-up"
              data-aos-delay="200"
            ></div>
          </div>
          <div className="sm:container-slide lg:custom-container">
            <SlideAbout />
          </div>
          <div className="custom-container mt-10 lg2:mt-20 2xl:mt-[100px]">
            <div className="grid grid-cols-2">
              <div
                className="flex flex-col gap-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className="text-[20px] font-bold text-[#FFF] lg:text-[24px] lg2:text-[40px] lg2:leading-[46px] 2xl:text-[44px] 2xl:leading-[52px] 3xl:text-[48px] 3xl:leading-[56px]">
                  Chứng chỉ <br /> & Giấy phép
                </h3>
                <p className="hidden text-[14px] font-medium leading-[28px] text-[#FFF] lg:block lg:text-base lg2:text-[18px]">
                  Chúng tôi luôn nỗ lực không ngừng để đạt được những mục tiêu
                  đầy tham vọng và tạo ra những giá trị lâu dài
                </p>
              </div>
              <div
                className="mt-2 justify-self-end lg:mt-0 lg:place-self-end"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <p className="text-[14px] font-medium leading-[22px] text-[#FFF] lg:text-base lg:leading-[28px] lg2:text-[18px]">
                  Bạn muốn tìm hiểu thêm?
                </p>
                <p className="cursor-pointer text-right text-[14px] font-medium leading-[22px] text-[#00D763] underline lg:text-base lg:leading-[28px] lg2:text-[18px]">
                  Tải xuống
                </p>
              </div>
            </div>
            <p className="mt-4 block text-[14px] font-medium leading-[22px] text-[#FFF] lg:hidden lg:text-base lg:leading-[28px] lg2:text-[18px]">
              Chúng tôi luôn nỗ lực không ngừng để đạt được những mục tiêu đầy
              tham vọng và tạo ra những giá trị lâu dài
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceAbout;
