import React from "react";
import NextImg from "../common/next-img";

type Props = {};

const PartnerTech = (props: Props) => {
  return (
    <div className="custom-container   mt-[160px]">
      <div className="grid grid-cols-[452px,auto] gap-10">
        <div
          className="flex flex-col gap-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-[#111013] text-[48px] leading-[54px] font-bold w-[90%]">
            Đối tác tuyệt vời của <span className="text-[#00D763]">UPS</span>
          </h3>
          <p className="text-[#111013] text-[18px] leading-[18px] font-medium w-[90%]">
            Từ tất cả sự tận tâm cho một mục tiêu bền vững
          </p>
        </div>
        <div
          className="grid grid-cols-4 gap-x-10 gap-y-[50px] items-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="relative w-[86px] h-[32px]">
            <NextImg
              src="/assets/icons/tinder.svg"
              alt="Capi"
              objectFit="cover"
            />
          </div>
          <div className="relative w-[52px] h-[52px]">
            <NextImg
              src="/assets/icons/Electronic-Arts.svg"
              alt="Capi"
              objectFit="cover"
            />
          </div>
          <div className="relative w-[110px] h-[32px]">
            <NextImg
              src="/assets/icons/Amazon.svg"
              alt="Capi"
              objectFit="cover"
            />
          </div>
          <div className="relative w-[118px] h-[30px]">
            <NextImg
              src="/assets/icons/Slack_Technologies.svg"
              alt="Capi"
              objectFit="cover"
            />
          </div>
          <div className="relative w-[116px] h-[36px]">
            <NextImg
              src="/assets/icons/Airbnb.svg"
              alt="Capi"
              objectFit="cover"
            />
          </div>
          <div className="relative w-[72px] h-[30px]">
            <NextImg
              src="/assets/icons/Intel.svg"
              alt="Capi"
              objectFit="cover"
            />
          </div>
          <div className="relative w-[133px] h-[32px]">
            <NextImg
              src="/assets/icons/Walmart.svg"
              alt="Capi"
              objectFit="cover"
            />
          </div>
          <div className="relative w-[117px] h-[28px]">
            <NextImg
              src="/assets/icons/LinkedIn.svg"
              alt="Capi"
              objectFit="cover"
            />
          </div>
          <div className="relative w-[106px] h-[36px]">
            <NextImg
              src="/assets/icons/Google.svg"
              alt="Capi"
              objectFit="cover"
            />
          </div>
          <div className="relative w-[57px] h-[40px]">
            <NextImg
              src="/assets/icons/Lyft.svg"
              alt="Capi"
              objectFit="cover"
            />
          </div>
          <div className="relative w-[127px] h-[38px]">
            <NextImg
              src="/assets/icons/Spotify.svg"
              alt="Capi"
              objectFit="cover"
            />
          </div>
          <div className="relative w-[122px] h-[36px]">
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
