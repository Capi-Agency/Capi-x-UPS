import React from "react";
import NextImg from "../common/next-img";

type Props = {};
const logos = [
  {
    src: "/assets/icons/tinder.svg",
  },
  {
    src: "/assets/icons/Electronic-Arts.svg",
  },
  {
    src: "/assets/icons/Amazon.svg",
  },
  {
    src: "/assets/icons/Slack_Technologies.svg",
  },
  {
    src: "/assets/icons/Airbnb.svg",
  },
  {
    src: "/assets/icons/Intel.svg",
  },
  {
    src: "/assets/icons/Walmart.svg",
  },
  {
    src: "/assets/icons/LinkedIn.svg",
  },
  {
    src: "/assets/icons/Google.svg",
  },
  {
    src: "/assets/icons/Lyft.svg",

  },
  {
    src: "/assets/icons/Spotify.svg",
  },
  {
    src: "/assets/icons/national-geographic.svg",
  },
];

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
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`relative w-full h-6 lg:h-9`}
            >
              <NextImg src={logo.src} alt="Capi" objectFit="contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerTech;
