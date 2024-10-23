import React from "react";
import NextImg from "../common/next-img";

type Props = {};

const DirectorAbout = (props: Props) => {
  return (
    <>
      <div className="custom-container mt-10 lg:mt-[160px]">
        <div className="lg:grid lg:grid-cols-2 lg:gap-[30px] flex flex-col gap-3 mt-3 lg:mt-[30px]">
          <div
            className="relative w-full pt-[100%]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <NextImg
              src="/assets/image/director-1.jpg"
              alt="Capi"
              objectFit="cover"
              className="rounded-[24px]"
            />
          </div>
          <div
            className="bg-[#F3F3FB] rounded-[24px] p-5 lg:p-10 pb-[20%]"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <span className="text-[#111013] text-[20px] lg:text-[40px] font-bold lg:leading-[54px]">
              Ông Nguyễn Quang Đạt
            </span>
            <p className="text-[#161519] text-[14px] lg:text-[16px] font-bold leading-[22px] lg:leading-[26px] uppercase tracking-[0.28px] lg:tracking-[0.32px] my-2 lg:my-4">
              Tổng giám đốc
            </p>
            <p className="text-[#111013] text-[14px] lg:text-[18px] font-medium leading-[22px] lg:leading-[26px]">
              A global brand entrusted us with a unique challenge: crafting an
              internal tool to share its brand story with every employee, from
              sales to product…
            </p>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-[30px] flex flex-col gap-3 mt-3 lg:mt-[30px]">
          <div
            className="relative w-full pt-[100%]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <NextImg
              src="/assets/image/director-2.jpg"
              alt="Capi"
              objectFit="cover"
              className="rounded-[24px]"
            />
          </div>
          <div
            className="bg-[#F3F3FB] rounded-[24px] p-5 lg:p-10 pb-[20%]"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <span className="text-[#111013] text-[20px] lg:text-[40px] font-bold lg:leading-[54px]">
              Ông Nguyễn Quang Đạt
            </span>
            <p className="text-[#161519] text-[14px] lg:text-[16px] font-bold leading-[22px] lg:leading-[26px] uppercase tracking-[0.28px] lg:tracking-[0.32px] my-2 lg:my-4">
              Tổng giám đốc
            </p>
            <p className="text-[#111013] text-[14px] lg:text-[18px] font-medium leading-[22px] lg:leading-[26px]">
              A global brand entrusted us with a unique challenge: crafting an
              internal tool to share its brand story with every employee, from
              sales to product…
            </p>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-[30px] flex flex-col gap-3 mt-3 lg:mt-[30px]">
          <div
            className="relative w-full pt-[100%]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <NextImg
              src="/assets/image/director-3.jpg"
              alt="Capi"
              objectFit="cover"
              className="rounded-[24px]"
            />
          </div>
          <div
            className="bg-[#F3F3FB] rounded-[24px] p-5 lg:p-10 pb-[20%]"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <span className="text-[#111013] text-[20px] lg:text-[40px] font-bold lg:leading-[54px]">
              Ông Nguyễn Quang Đạt
            </span>
            <p className="text-[#161519] text-[14px] lg:text-[16px] font-bold leading-[22px] lg:leading-[26px] uppercase tracking-[0.28px] lg:tracking-[0.32px] my-2 lg:my-4">
              Tổng giám đốc
            </p>
            <p className="text-[#111013] text-[14px] lg:text-[18px] font-medium leading-[22px] lg:leading-[26px]">
              A global brand entrusted us with a unique challenge: crafting an
              internal tool to share its brand story with every employee, from
              sales to product…
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectorAbout;
