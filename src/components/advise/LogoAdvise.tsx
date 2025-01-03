import React from 'react';
import NextImg from '../common/next-img';

type Props = {};

const LogoAdvise = (props: Props) => {
  const logos = [
    {
      src: '/assets/icons/tinder.svg',
    },
    {
      src: '/assets/icons/Airbnb.svg',
    },
    {
      src: '/assets/icons/Google.svg',
    },
    {
      src: '/assets/icons/Electronic-Arts.svg',
    },
    {
      src: '/assets/icons/Intel.svg',
    },
    {
      src: '/assets/icons/Lyft.svg',
    },
    {
      src: '/assets/icons/Amazon.svg',
    },
    {
      src: '/assets/icons/Walmart.svg',
    },
    {
      src: '/assets/icons/Spotify.svg',
    },
    {
      src: '/assets/icons/Slack_Technologies.svg',
    },
    {
      src: '/assets/icons/LinkedIn.svg',
    },
    {
      src: '/assets/icons/national-geographic.svg',
    },
  ];
  return (
    <div className="custom-container pt-10 md:p-[60px_0_20px] lg:p-[100px_0_40px] lg2:p-[120px_0_40px] xl:p-[140px_0_40px] 2xl:p-[140px_0_20px] 3xl:p-[160px_0_0]">
      <div className="grid grid-cols-1 gap-10 lg:gap-4 lg2:gap-10 md:grid-cols-[260px,auto] lg:grid-cols-[356px,auto] lg2:grid-cols-[452px,auto]">
        <div
          className="flex flex-col gap-2 lg:pr-[60px]"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="700"
        >
          <h3 className="text-[20px] font-bold text-[#111013] lg:text-[32px] lg2:text-[40px] lg2:leading-[46px] 2xl:text-[44px] 2xl:leading-[52px] 3xl:text-[48px] 3xl:leading-[54px]">
            Thương vụ nổi bật của
            <span className="text-[#00D763]"> UPS</span>
          </h3>
          <p className="text-[14px] font-medium leading-[22px] text-[#111013] lg:text-lg">
            Từ tất cả sự tận tâm cho một mục tiêu bền vững
          </p>
        </div>

        <div
          className="grid grid-cols-3 items-center justify-start gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-[50px]"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="700"
        >
          {logos?.map((logo: any, index: number) => (
            <div key={index}>
              <img
                src={`${logo?.src}`}
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

export default LogoAdvise;
