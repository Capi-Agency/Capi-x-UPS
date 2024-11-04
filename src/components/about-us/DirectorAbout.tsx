import React from 'react';
import NextImg from '../common/next-img';

type Props = {};
const directors = [
  {
    name: 'Ông Nguyễn Quang Đạt',
    position: 'Tổng giám đốc',
    description:
      'A global brand entrusted us with a unique challenge: crafting an internal tool to share its brand story with every employee, from sales to product…',
    imageSrc: '/assets/image/director-1.jpg',
  },
  {
    name: 'Ông Nguyễn Quang Đạt',
    position: 'Tổng giám đốc',
    description:
      'A global brand entrusted us with a unique challenge: crafting an internal tool to share its brand story with every employee, from sales to product…',
    imageSrc: '/assets/image/director-2.jpg',
  },
  {
    name: 'Ông Nguyễn Quang Đạt',
    position: 'Tổng giám đốc',
    description:
      'A global brand entrusted us with a unique challenge: crafting an internal tool to share its brand story with every employee, from sales to product…',
    imageSrc: '/assets/image/director-3.jpg',
  },
];
const DirectorAbout = (props: Props) => {
  return (
    <div className="custom-container mt-10 lg:mt-[60px] xl:mt-20 2xl:mt-[100px] 3xl:mt-[160px]">
      {directors.map((director, index) => {
        return (
          <div
            key={index}
            className={`flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-3 lg:gap-6 3xl:gap-[30px] ${
              index === 0 ? 'mt-0' : 'mt-6 md:mt-3 3xl:mt-[30px]'
            }`}
          >
            <div
              className={`relative w-full pt-[100%] ${
                index % 2 !== 0 ? 'md:order-2' : 'order-1'
              }`}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <NextImg
                src={director.imageSrc}
                alt="Capi"
                objectFit="cover"
                className="rounded-[12px] lg:rounded-[24px]"
              />
            </div>
            <div
              className={`rounded-[12px] bg-[#F3F3FB] p-5 pb-[20%] lg:rounded-[24px] lg:p-10 ${
                index % 2 !== 0 ? 'lg:order-1' : 'order-2'
              }`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <span className="text-[20px] font-bold text-[#111013] lg:text-[24px] lg2:text-[30px] 2xl:text-[32px] 2xl:leading-[40px] 3xl:text-[40px] 3xl:leading-[54px]">
                {director.name}
              </span>
              <p className="my-2 text-[14px] font-bold uppercase leading-[22px] tracking-[0.28px] text-[#161519] md:text-[16px] lg:my-4 lg:leading-[26px] lg:tracking-[0.32px]">
                {director.position}
              </p>
              <p className="text-[14px] font-medium leading-[22px] text-[#111013] lg:text-[18px] lg:leading-[26px]">
                {director.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DirectorAbout;
