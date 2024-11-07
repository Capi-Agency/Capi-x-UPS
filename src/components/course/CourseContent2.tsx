'use client';
import React from 'react';
import NextImg from '../common/next-img';
import TagsPage from '../tags/page';
import CourseActicle from './CourseActicle';

type Props = {
  data: any;
};

const CourseContent2 = ({ data }: Props) => {
  return (
    <div>
      <div className="custom-container 3xl:!max-w-[1280px]">
        {/* section 2 */}
        <div
          className="mt-16 lg:mt-10 2xl:mt-20"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="text-[14px] font-medium leading-[22px] text-[#FF6D00] lg:text-[16px] lg2:text-[18px] xl:leading-[40px]">
            {data.tag}
          </span>
          <h2 className="mb-3 mt-2 text-[20px] font-bold text-[#141414] lg:text-[24px] lg2:mb-5 lg2:text-[40px] lg2:leading-[46px] 2xl:text-[44px] 2xl:leading-[52px] 3xl:text-[48px] 3xl:leading-[54px]">
            {data.title}
          </h2>
          <p className="text-[14px] font-medium leading-[28px] text-[#111013] lg:text-[16px] lg2:text-[18px]">
            {data.sub_title}
          </p>
        </div>
        <div className="mt-6 lg:mt-10 2xl:mt-20">
          <div className="flex flex-col gap-3 md:grid md:grid-cols-3 lg:gap-6 2xl:gap-10">
            {data.list.map(({ item }: any, index: number) => {
              const delay = ((index % 3) + 1) * 200;

              return (
                <div
                  key={index}
                  className="flex flex-col justify-between gap-10 rounded-[12px] bg-[#FFF1DD] p-5 transition-all duration-300 ease-in hover:bg-[#FFAD36] md:gap-6 lg:rounded-2xl lg:p-[30px] lg2:gap-10 lg2:p-10 2xl:gap-6"
                  data-aos="fade-up"
                  data-aos-delay={delay}
                >
                  <div>
                    <h4 className="text-[20px] font-bold text-[#111013] lg:text-[24px] lg:leading-[40px] lg2:text-[30px] 2xl:text-[32px]">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-[14px] font-medium leading-[22px] text-[#111013] lg:mt-3 lg:text-[16px] lg:leading-[28px] lg2:mt-4 lg2:text-[18px]">
                      {item.content}
                    </p>
                  </div>
                  <div className="relative h-[190px] w-full md:h-[160px] lg:h-[240px] 2xl:h-[288px]">
                    <NextImg
                      src={process.env.REACT_APP_IMG_URL + item.cover}
                      alt="Capi"
                      objectFit="contain"
                      className=""
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <CourseActicle data={data} />
      </div>
    </div>
  );
};

export default CourseContent2;
