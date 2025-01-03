'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import NextImg from '../common/next-img';
import { cn } from '@/lib/utils';

type Props = {
  data: any;
};

const ReviewTech = ({ data }: Props) => {
  const swiperRef = useRef<any>(null);
  return (
    <div className="mt-10 lg:mt-[60px] xl:mt-20 2xl:mt-[100px] 3xl:mt-[160px]">
      <div className="custom-container 3xl:!max-w-[calc(1280px+48px)]">
        <div className="mb-6 flex items-center justify-between border-[#60606B] md:border-b md:pb-5 lg:mb-10">
          <h4
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
            className="text-[20px] font-bold text-[#111013] lg:text-[24px] lg2:text-[30px]"
          >
            {data?.title}
          </h4>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="700"
            className="float-right hidden items-center gap-2 md:flex"
          >
            <button
              id="prevBtn"
              className="group flex h-[28px] w-[42px] items-center justify-center rounded-full bg-[#EAD498] hover:bg-[#15171E]"
              onClick={() => swiperRef.current.swiper.slidePrev()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                className="transition-all duration-300 group-hover:fill-[#EAD498]"
              >
                <path
                  d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM10.4281 4.5C10.7042 4.5 10.9281 4.27614 10.9281 4C10.9281 3.72386 10.7042 3.5 10.4281 3.5V4.5ZM1 4.5H10.4281V3.5H1V4.5Z"
                  fill="#15171E"
                  className="fill-[#15171E] group-hover:fill-[#EAD498]"
                />
              </svg>
            </button>
            <button
              id="nextBtn"
              className="group flex h-[28px] w-[42px] items-center justify-center rounded-full bg-[#EAD498] hover:bg-[#15171E]"
              onClick={() => swiperRef.current.swiper.slideNext()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                className="transition-all duration-300 group-hover:fill-[#EAD498]"
              >
                <path
                  d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM10.7816 4.35355C10.9769 4.15829 10.9769 3.84171 10.7816 3.64645L7.59966 0.464466C7.4044 0.269204 7.08782 0.269204 6.89256 0.464466C6.69729 0.659728 6.69729 0.976311 6.89256 1.17157L9.72098 4L6.89256 6.82843C6.69729 7.02369 6.69729 7.34027 6.89256 7.53553C7.08782 7.7308 7.4044 7.7308 7.59966 7.53553L10.7816 4.35355ZM1 4.5H10.4281V3.5H1V4.5Z"
                  fill="#02E56A"
                  className="fill-[#15171E] group-hover:fill-[#EAD498]"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="lg:custom-container 3xl:!max-w-[calc(1280px+48px)]">
        <Swiper
          ref={swiperRef}
          breakpoints={{
            1600: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2.6,
              spaceBetween: 24,
            },
            0: {
              slidesPerView: 1.3,
              spaceBetween: 24,
            },
          }}
          className="mySwiper !px-6 lg:!px-0"
        >
          {data?.item_list?.map(({ item }: any, index: any) => {
            const delay = ((index % 3) + 1) * 200;
            return (
              <SwiperSlide key={index}>
                <div
                  data-aos="fade-up"
                  data-aos-delay={delay}
                  data-aos-duration="700"
                  className={`flex flex-col justify-between rounded-[16px] bg-[rgba(251,245,229,0.70)] p-5 lg2:p-[30px] 2xl:p-10`}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-[56px] w-[56px] rounded-full">
                      <NextImg
                        src={process.env.REACT_APP_IMG_URL + item.avatar}
                        alt="UPS"
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[18px] font-medium leading-[28px] text-[#111013]">
                        Viết bởi
                      </span>
                      <span className="text-[14px] font-bold leading-normal text-[#111013] lg:text-base lg2:text-[22px]">
                        {item.author}
                      </span>
                    </div>
                  </div>
                  <div className="mt-[60px]">
                    <span className="text-[14px] font-medium leading-[22px] tracking-[0.14px] text-[#161519] lg:leading-[16px]">
                      {item.date}
                    </span>
                    <p className="my-2 text-[20px] font-bold text-[#000] lg:my-4 lg:text-[24px] lg2:text-[30px] 2xl:text-[32px] 2xl:leading-[40px]">
                      {item.title}
                    </p>
                    <p className="text-[14px] font-medium leading-[22px] text-[#111013] lg:text-base lg:leading-[28px] lg2:text-[18px]">
                      {item.description}
                    </p>
                    <div className="mt-2 flex items-center gap-2 lg:mt-4">
                      <button className="rounded-[8px] bg-[rgba(144,145,156,0.15)] px-2 py-[5px] text-[14px] font-medium leading-normal text-[#111013]">
                        App Mobile
                      </button>
                      <button className="rounded-[8px] bg-[rgba(144,145,156,0.15)] px-2 py-[5px] text-[14px] font-medium leading-normal text-[#111013]">
                        Trải nghiệm
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="700"
        className="custom-container mt-6 flex items-center gap-2 md:hidden"
      >
        <button
          id="prevBtn"
          className="group flex h-[28px] w-[42px] items-center justify-center rounded-full bg-[#EAD498] hover:bg-[#15171E]"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
            className="transition-all duration-300 group-hover:fill-[#EAD498]"
          >
            <path
              d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM10.4281 4.5C10.7042 4.5 10.9281 4.27614 10.9281 4C10.9281 3.72386 10.7042 3.5 10.4281 3.5V4.5ZM1 4.5H10.4281V3.5H1V4.5Z"
              fill="#15171E"
              className="fill-[#15171E] group-hover:fill-[#EAD498]"
            />
          </svg>
        </button>
        <button
          id="nextBtn"
          className="group flex h-[28px] w-[42px] items-center justify-center rounded-full bg-[#EAD498] hover:bg-[#15171E]"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
            className="transition-all duration-300 group-hover:fill-[#EAD498]"
          >
            <path
              d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM10.7816 4.35355C10.9769 4.15829 10.9769 3.84171 10.7816 3.64645L7.59966 0.464466C7.4044 0.269204 7.08782 0.269204 6.89256 0.464466C6.69729 0.659728 6.69729 0.976311 6.89256 1.17157L9.72098 4L6.89256 6.82843C6.69729 7.02369 6.69729 7.34027 6.89256 7.53553C7.08782 7.7308 7.4044 7.7308 7.59966 7.53553L10.7816 4.35355ZM1 4.5H10.4281V3.5H1V4.5Z"
              fill="#02E56A"
              className="fill-[#15171E] group-hover:fill-[#EAD498]"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ReviewTech;
