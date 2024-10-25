import React from "react";
import NextImg from "../common/next-img";
import SlideAbout from "./SlideAbout";

type Props = {};

const ServiceAbout = (props: Props) => {
  return (
    <>
      <div className="bg-[#0D0C10] py-10 lg:py-[160px] mt-10 lg:mt-[160px]">
        <div className="flex flex-col ">
          <div className="custom-container">
            <div className="flex items-center justify-between">
              <span
                className="text-[#FFF] text-[20px] lg:text-[30px] font-bold leading-normal"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Dịch vụ chứng khoán
              </span>
              <div
                className="flex items-center gap-2 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <button className="text-[#FFF] text-[14px] lg:text-[18px] font-medium leading-[22px] lg:leading-[28px]">
                  Xem tất cả
                </button>
                <div className="relative w-4 h-4 lg:w-[24px] lg:h-[24px]">
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
              className="w-full bg-[#60606B] h-[1px] mt-3 lg:mt-5 mb-6 lg:mb-10"
              data-aos="fade-up"
              data-aos-delay="200"
            ></div>
          </div>
          <div className="">
            <SlideAbout />
          </div>
          <div className="mt-10 lg:mt-[100px] custom-container">
            <div className="grid grid-cols-2 ">
              <div
                className="flex flex-col gap-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className="text-[#FFF] text-[20px] lg:text-[48px] font-bold lg:leading-[56px]">
                  Chứng chỉ <br /> & Giấy phép
                </h3>
                <p className="text-[#FFF] text-[18px] font-medium leading-[28px] lg:block hidden">
                  Chúng tôi luôn nỗ lực không ngừng để đạt được những mục tiêu
                  đầy tham vọng và tạo ra những giá trị lâu dài
                </p>
              </div>
              <div
                className="lg:place-self-end justify-self-end lg:mt-0 mt-2"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <p className="text-[#FFF] text-[14px] lg:text-[18px] font-medium leading-[22px] lg:leading-[28px]">
                  Bạn muốn tìm hiểu thêm?
                </p>
                <p className="text-[#00D763] text-[14px] lg:text-[18px] font-medium leading-[22px] lg:leading-[28px] underline text-right cursor-pointer">
                  Tải xuống
                </p>
              </div>
            </div>
            <p className="text-[#FFF] text-[14px] lg:text-[18px] font-medium leading-[22px] lg:leading-[28px] lg:hidden block mt-4">
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
