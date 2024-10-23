import React from "react";
import NextImg from "../common/next-img";

type Props = {};

const PartnerTech = (props: Props) => {
  return (
    <div className="custom-container mt-16 lg:mt-[160px]">
      <div className="lg:grid lg:grid-cols-[452px,auto] gap-10 flex flex-col">
        <div
          className="flex flex-col gap-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-[#111013] text-[20px] lg:text-[48px] lg:leading-[54px] font-bold w-[90%]">
            Đối tác tuyệt vời của <span className="text-[#00D763]">UPS</span>
          </h3>
          <p className="text-[#111013] text-[14px] lg:text-[18px] leading-[22px] lg:leading-[18px] font-medium w-[90%]">
            Từ tất cả sự tận tâm cho một mục tiêu bền vững
          </p>
        </div>
        <div
          className="grid lg:grid-cols-4 grid-cols-3 lg:gap-x-10 gap-x-6 gap-y-10 lg:gap-y-[50px] items-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="relative w-[64px] h-[24px] lg:w-[86px] lg:h-[32px]">
            <NextImg
              src="/assets/icons/tinder.svg"
              alt="Capi"
              objectFit="cover"
            />
          </div>
          <div className="relative w-[38.5px] h-[38.5px] lg:w-[52px] lg:h-[52px]">
            <NextImg
              src="/assets/icons/Electronic-Arts.svg"
              alt="Capi"
              objectFit="cover"
            />
          </div>
          <div className="relative w-[82px] h-[24px] lg:w-[110px] lg:h-[32px]">
            <NextImg
              src="/assets/icons/Amazon.svg"
              alt="Capi"
              objectFit="cover"
            />
          </div>
          <div className="relative w-[88px] h-[23px] lg:w-[118px] lg:h-[30px]">
            <NextImg
              src="/assets/icons/Slack_Technologies.svg"
              alt="Capi"
              objectFit="cover"
            />
          </div>
          <div className="relative w-[86px] h-[27px] lg:w-[116px] lg:h-[36px]">
            <NextImg
              src="/assets/icons/Airbnb.svg"
              alt="Capi"
              objectFit="cover"
            />
          </div>
          <div className="relative w-[54px] h-[23px] lg:w-[72px] lg:h-[30px]">
            <NextImg
              src="/assets/icons/Intel.svg"
              alt="Capi"
              objectFit="cover"
            />
          </div>
          <div className="relative w-[99px] h-[24px] lg:w-[133px] lg:h-[32px]">
            <NextImg
              src="/assets/icons/Walmart.svg"
              alt="Capi"
              objectFit="cover"
            />
          </div>
          <div className="relative w-[87px] h-[21px] lg:w-[117px] lg:h-[28px]">
            <NextImg
              src="/assets/icons/LinkedIn.svg"
              alt="Capi"
              objectFit="cover"
            />
          </div>
          <div className="relative w-[79px] h-[27px] lg:w-[106px] lg:h-[36px]">
            <NextImg
              src="/assets/icons/Google.svg"
              alt="Capi"
              objectFit="cover"
            />
          </div>
          <div className="relative w-[43px] h-[30px] lg:w-[57px] lg:h-[40px]">
            <NextImg
              src="/assets/icons/Lyft.svg"
              alt="Capi"
              objectFit="cover"
            />
          </div>
          <div className="relative w-[94px] h-[28px] lg:w-[127px] lg:h-[38px]">
            <NextImg
              src="/assets/icons/Spotify.svg"
              alt="Capi"
              objectFit="cover"
            />
          </div>
          <div className="relative w-[91px] h-[27px] lg:w-[122px] lg:h-[36px]">
            <NextImg 
              src="/assets/icons/national-geographic.svg"
              alt="Capi"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerTech;
