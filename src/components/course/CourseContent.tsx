import React from "react";
import NextImg from "../common/next-img";

type Props = {};

const CourseContent = (props: Props) => {
  return (
    <div className="custom-container 3xl:!max-w-[1280px] pt-[100px]">
      <div className="flex flex-col" data-aos="fade-up" data-aos-delay="200">
        <span className="text-[#FF6D00] text-[18px] font-medium leading-[40px]">
          #kienthucchungkhoan
        </span>
        <h3 className="text-[#141414] text-[48px] font-bold leading-[54px] mt-2 mb-5">
          Dành cho người mới bắt đầu
        </h3>
        <p className="text-[#111013] text-[18px] font-medium leading-[28px]">
          Tìm hiểu thông tin cơ bản trước khi bạn trở thành một nhà đầu tư hoàn
          hảo.
        </p>
      </div>
      <div className="mt-20 grid grid-cols-3 gap-10">
        <div
          className="p-10 rounded-2xl bg-[#FFF1DD] flex flex-col justify-between h-[572px]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div>
            <h4 className="text-[#111013] text-[32px] font-bold leading-[40px]">
              Đầu tư là gì?
            </h4>
            <p className="text-[#111013] text-[18px] font-medium leading-[28px] mt-4">
              Creating a higher spacing and how people move through a unique and
              impactful campaign.
            </p>
          </div>
          <div className="relative w-full h-[288px]">
            <NextImg
              src="/assets/image/card-course1.svg"
              alt="Capi"
              objectFit="cover"
              className=""
            />
          </div>
        </div>
        <div
          className="p-10 rounded-2xl bg-[#FFD495] flex flex-col justify-between h-[572px]"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div>
            <h4 className="text-[#111013] text-[32px] font-bold leading-[40px]">
              Cổ phiếu là gì?
            </h4>
            <p className="text-[#111013] text-[18px] font-medium leading-[28px] mt-4">
              Creating a higher spacing and how people move through a unique and
              impactful campaign.
            </p>
          </div>
          <div className="relative w-full h-[288px]">
            <NextImg
              src="/assets/image/card-course2.svg"
              alt="Capi"
              objectFit="cover"
              className=""
            />
          </div>
        </div>
        <div
          className="p-10 rounded-2xl bg-[#FFAD36] flex flex-col justify-between h-[572px]"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div>
            <h4 className="text-[#111013] text-[32px] font-bold leading-[40px]">
              Ban kiếm tiền như thế nào?
            </h4>
            <p className="text-[#111013] text-[18px] font-medium leading-[28px] mt-4 ">
              Creating a higher spacing and how people move through a unique and
              impactful campaign.
            </p>
          </div>
          <div className="relative w-full h-[288px]">
            <NextImg
              src="/assets/image/card-course3.svg"
              alt="Capi"
              objectFit="cover"
              className=""
            />
          </div>
        </div>
      </div>
      <div
        className="max-w-[1024px] mx-auto mt-20"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="flex flex-col">
           <a href="" className="flex items-center justify-between gap-[30px] border-y border-[#60606B] border-opacity-65 py-6">
            <div className="flex items-center gap-5">
              <div className="relative w-[24px] h-[24px] ">
                <NextImg
                  src="/assets/icons/document-text2.svg"
                  alt="Capi"
                  objectFit="cover"
                  className=""
                />
              </div>
              <p className="text-[#15171E] text-[24px] font-medium ">
                Ba điều cần làm trước khi bạn bắt đầu đầu tư
              </p>
            </div>
            <div className="relative w-[32px] h-[32px] cursor-pointer">
              <NextImg
                src="/assets/icons/chevron-down.svg"
                alt="Capi"
                objectFit="cover"
                className="rotate-90"
              />
            </div>
          </a>
          <a href="" className="flex items-center justify-between gap-[30px] border-b border-[#60606B] border-opacity-65 py-6">
            <div className="flex items-center gap-5">
              <div className="relative w-[24px] h-[24px] ">
                <NextImg
                  src="/assets/icons/document-text2.svg"
                  alt="Capi"
                  objectFit="cover"
                  className=""
                />
              </div>
              <p className="text-[#15171E] text-[24px] font-medium ">
                Quy tắc 6 túi là gì và cách áp dụng chúng vào đầu tư hiệu quả
              </p>
            </div>
            <div className="relative w-[32px] h-[32px] cursor-pointer">
              <NextImg
                src="/assets/icons/chevron-down.svg"
                alt="Capi"
                objectFit="cover"
                className="rotate-90"
              />
            </div>
          </a>
          <a href="" className="flex items-center justify-between gap-[30px] border-b border-[#60606B] border-opacity-65 py-6">
            <div className="flex items-center gap-5">
              <div className="relative w-[24px] h-[24px] ">
                <NextImg
                  src="/assets/icons/document-text2.svg"
                  alt="Capi"
                  objectFit="cover"
                  className=""
                />
              </div>
              <p className="text-[#15171E] text-[24px] font-medium ">
                Mở tài khoản UPS qua ứng dụng điện thoại nhanh nhất
              </p>
            </div>
            <div className="relative w-[32px] h-[32px] cursor-pointer">
              <NextImg
                src="/assets/icons/chevron-down.svg"
                alt="Capi"
                objectFit="cover"
                className="rotate-90"
              />
            </div>
          </a>
        </div>
        <button className="bg-[#15171E] text-[#FFF] text-[18px] font-bold pl-6 pr-4 py-3 rounded-[16px] flex items-center gap-3 mt-[50px] mx-auto">
          Xem tất cả bài viết
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.2594 5.98952C19.2594 5.7906 19.1804 5.59984 19.0398 5.45919C18.8991 5.31853 18.7083 5.23952 18.5094 5.23952L9.92515 5.23952C9.51093 5.23952 9.17515 5.5753 9.17515 5.98952C9.17515 6.40373 9.51093 6.73952 9.92515 6.73952L16.6992 6.73952L5.95855 17.4802C5.66566 17.7731 5.66566 18.2479 5.95855 18.5408C6.25145 18.8337 6.72632 18.8337 7.01921 18.5408L17.7594 7.80062V14.5738C17.7594 14.988 18.0952 15.3238 18.5094 15.3238C18.9236 15.3238 19.2594 14.988 19.2594 14.5738L19.2594 5.98952Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CourseContent;
