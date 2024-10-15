import React from "react";
import NextImg from "../common/next-img";
import SlideAbout from "./SlideAbout";

type Props = {};

const ServiceAbout = (props: Props) => {
  return (
    <>
      <div className="bg-[#23252B] py-[160px] mt-[160px]">
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1600px] px-4 lg:px-20">
          <div className="flex flex-col gap-[100px]">
            <div>
              <div className="flex items-center justify-between" >
                <span className="text-[#FFF] text-[30px] font-bold leading-normal" data-aos="fade-up" data-aos-delay="200">
                  Dịch vụ chứng khoán
                </span>
                <div className="flex items-center gap-2 cursor-pointer" data-aos="fade-up" data-aos-delay="600">
                  <button className="text-[#FFF] text-[18px] font-medium leading-[28px]">
                    Xem tất cả
                  </button>
                  <div className="relative w-[24px] h-[24px]">
                    <NextImg
                      src="/assets/icons/arrow_forward.svg"
                      alt="Capi"
                      objectFit="cover"
                      className=""
                    />
                  </div>
                </div>
              </div>
              <div className="w-full bg-[#60606B] h-[1px] mt-5 mb-10"  data-aos="fade-up" data-aos-delay="200"></div>
              <div className="">
                <SlideAbout />
              </div>
            </div>
            <div className="grid grid-cols-2 ">
              <div className="flex flex-col gap-6"  data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-[#FFF] text-[48px] font-bold leading-[56px]">
                  Chứng chỉ <br /> & Giấy phép
                </h3>
                <p className="text-[#FFF] text-[18px] font-medium leading-[28px]">
                  Chúng tôi luôn nỗ lực không ngừng để đạt được những mục tiêu
                  đầy tham vọng và tạo ra những giá trị lâu dài
                </p>
              </div>
              <div className="place-self-end justify-self-end"  data-aos="fade-up" data-aos-delay="600">
                <p className="text-[#FFF] text-[18px] font-medium leading-[28px]">
                  Bạn muốn tìm hiểu thêm?
                </p>
                <p className="text-[#00D763] text-[18px] font-medium leading-[28px] underline text-right cursor-pointer">
                  Tải xuống
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceAbout;
