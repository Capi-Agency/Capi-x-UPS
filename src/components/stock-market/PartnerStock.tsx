import React from 'react';
import NextImg from '../common/next-img';

type Props = {};
const logos = [
  {
    src: '/assets/icons/tinder.svg',
  },
  {
    src: '/assets/icons/Electronic-Arts.svg',
  },
  {
    src: '/assets/icons/Amazon.svg',
  },
  {
    src: '/assets/icons/Slack_Technologies.svg',
  },
  {
    src: '/assets/icons/Airbnb.svg',
  },
  {
    src: '/assets/icons/Intel.svg',
  },
  {
    src: '/assets/icons/Walmart.svg',
  },
  {
    src: '/assets/icons/LinkedIn.svg',
  },
  {
    src: '/assets/icons/Google.svg',
  },
  {
    src: '/assets/icons/Lyft.svg',
  },
  {
    src: '/assets/icons/Spotify.svg',
  },
  {
    src: '/assets/icons/national-geographic.svg',
  },
];
const PartnerStock = (props: Props) => {
  return (
    <div className="custom-container mt-10 lg:mt-[60px] xl:mt-20 2xl:mt-[100px] 3xl:mt-[160px]">
      <div className="flex flex-col gap-10 md:grid md:grid-cols-[260px,auto] lg:grid-cols-[356px,auto] 2xl:grid-cols-[452px,auto]">
        <div
          className="flex flex-col gap-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="w-[90%] text-[20px] font-bold text-[#111013] lg:text-[32px] lg2:text-[40px] lg2:leading-[46px] 2xl:text-[44px] 2xl:leading-[52px] 3xl:text-[48px] 3xl:leading-[54px]">
            Đối tác tuyệt vời của <span className="text-[#00D763]">UPS</span>
          </h3>
          <p className="w-[90%] text-[14px] font-medium leading-[22px] text-[#111013] lg:text-[18px] lg:leading-[18px]">
            Từ tất cả sự tận tâm cho một mục tiêu bền vững
          </p>
        </div>
        <div
          className="grid grid-cols-3 items-center gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-[50px]"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {logos.map((logo: any, index: number) => (
            <div key={index}>
              <img
                src={logo.src}
                alt="Capi"
                className="h-6 object-contain lg:h-8 lg2:h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerStock;
