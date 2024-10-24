"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import NextImg from "../common/next-img";

type Props = {};

const ReviewTech = (props: Props) => {
  const swiperRef = useRef<any>(null);
  const articles = [
    {
      author: "Colin Lucido",
      date: "26 Tháng 3, 2023 · 9 phút trước",
      title: "Ứng dụng tuyệt vời cho người mới",
      description:
        "Chỉ mất 5 phút tải nhưng tôi thực sự ấn tượng về trải nghiệm sử dụng này",
      avatar: "/assets/image/avatar.jpg",
    },
    {
      author: "Colin Lucido",
      date: "26 Tháng 3, 2023 · 9 phút trước",
      title: "Ứng dụng tuyệt vời cho người mới",
      description:
        "Chỉ mất 5 phút tải nhưng tôi thực sự ấn tượng về trải nghiệm sử dụng này",
      avatar: "/assets/image/avatar.jpg",
    },
    {
      author: "Colin Lucido",
      date: "26 Tháng 3, 2023 · 9 phút trước",
      title: "Ứng dụng tuyệt vời cho người mới",
      description:
        "Chỉ mất 5 phút tải nhưng tôi thực sự ấn tượng về trải nghiệm sử dụng này",
      avatar: "/assets/image/avatar.jpg",
    },
    {
      author: "Colin Lucido",
      date: "26 Tháng 3, 2023 · 9 phút trước",
      title: "Ứng dụng tuyệt vời cho người mới",
      description:
        "Chỉ mất 5 phút tải nhưng tôi thực sự ấn tượng về trải nghiệm sử dụng này",
      avatar: "/assets/image/avatar.jpg",
    },
    {
      author: "Colin Lucido",
      date: "26 Tháng 3, 2023 · 9 phút trước",
      title: "Ứng dụng tuyệt vời cho người mới",
      description:
        "Chỉ mất 5 phút tải nhưng tôi thực sự ấn tượng về trải nghiệm sử dụng này",
      avatar: "/assets/image/avatar.jpg",
    },
  ];
  return (
    <div className="custom-container mt-16 lg:mt-[160px]">
      <div
        className="flex items-center justify-between lg:border-b border-[#60606B] pb-6 lg:pb-5 lg:mb-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h4 className="text-[#111013] text-[20px] lg:text-[30px] font-bold">
          Đánh giá từ khách hàng
        </h4>
        <div className="items-center gap-2 float-right mt-10 lg:flex hidden">
          <button
            id="prevBtn"
            className="rounded-full bg-[#02E56A] hover:bg-[#15171E] w-[42px] h-[28px] flex justify-center items-center group"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="8"
              viewBox="0 0 11 8"
              fill="none"
              className="transition-all duration-300 group-hover:fill-[#02E56A]"
            >
              <path
                d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM10.4281 4.5C10.7042 4.5 10.9281 4.27614 10.9281 4C10.9281 3.72386 10.7042 3.5 10.4281 3.5V4.5ZM1 4.5H10.4281V3.5H1V4.5Z"
                fill="#15171E"
                className="fill-[#15171E] group-hover:fill-[#02E56A]"
              />
            </svg>
          </button>
          <button
            id="nextBtn"
            className="rounded-full bg-[#02E56A] hover:bg-[#15171E] w-[42px] h-[28px] flex justify-center items-center group"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="8"
              viewBox="0 0 11 8"
              fill="none"
              className="transition-all duration-300 group-hover:fill-[#02E56A]"
            >
              <path
                d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM10.7816 4.35355C10.9769 4.15829 10.9769 3.84171 10.7816 3.64645L7.59966 0.464466C7.4044 0.269204 7.08782 0.269204 6.89256 0.464466C6.69729 0.659728 6.69729 0.976311 6.89256 1.17157L9.72098 4L6.89256 6.82843C6.69729 7.02369 6.69729 7.34027 6.89256 7.53553C7.08782 7.7308 7.4044 7.7308 7.59966 7.53553L10.7816 4.35355ZM1 4.5H10.4281V3.5H1V4.5Z"
                fill="#02E56A"
                className="fill-[#15171E] group-hover:fill-[#02E56A]"
              />
            </svg>
          </button>
        </div>
      </div>
      <Swiper
        ref={swiperRef}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          0: {
            slidesPerView: 1.3,
            spaceBetween: 12,
          },
        }}
        className="mySwiper"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {articles.map((article, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                key={index}
                className={`rounded-[16px] p-5 lg:p-10 flex flex-col justify-between h-[327px] lg:h-[460px] bg-[rgba(144,145,156,0.08)]`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-[56px] h-[56px] rounded-full">
                    <NextImg
                      src={article.avatar}
                      alt={article.author}
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#111013] text-[18px] font-medium leading-[28px]">
                      Viết bởi
                    </span>
                    <span className="text-[#111013] text-[14px] lg:text-[22px] font-bold leading-normal">
                      {article.author}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-[#161519] text-[14px] font-medium leading-[22px] lg:leading-[16px] tracking-[0.14px]">
                    {article.date}
                  </span>
                  <p className="text-[#000] text-[20px] lg:text-[32px] font-bold lg:leading-[40px] my-2 lg:my-4">
                    {article.title}
                  </p>
                  <p className="text-[#111013] text-[14px] lg:text-[18px] font-medium leading-[22px] lg:leading-[28px]">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-2 mt-2 lg:mt-4">
                    <button className="text-[#111013] text-[14px] font-medium leading-normal px-2 py-[5px] rounded-[8px] bg-[rgba(144,145,156,0.15)]">
                      App Mobile
                    </button>
                    <button className="text-[#111013] text-[14px] font-medium leading-normal px-2 py-[5px] rounded-[8px] bg-[rgba(144,145,156,0.15)]">
                      Trải nghiệm
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="items-center gap-2 mt-6 lg:hidden flex">
        <button
          id="prevBtn"
          className="rounded-full bg-[#02E56A] hover:bg-[#15171E] w-[42px] h-[28px] flex justify-center items-center group"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
            className="transition-all duration-300 group-hover:fill-[#02E56A]"
          >
            <path
              d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM10.4281 4.5C10.7042 4.5 10.9281 4.27614 10.9281 4C10.9281 3.72386 10.7042 3.5 10.4281 3.5V4.5ZM1 4.5H10.4281V3.5H1V4.5Z"
              fill="#15171E"
              className="fill-[#15171E] group-hover:fill-[#02E56A]"
            />
          </svg>
        </button>
        <button
          id="nextBtn"
          className="rounded-full bg-[#02E56A] hover:bg-[#15171E] w-[42px] h-[28px] flex justify-center items-center group"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
            className="transition-all duration-300 group-hover:fill-[#02E56A]"
          >
            <path
              d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM10.7816 4.35355C10.9769 4.15829 10.9769 3.84171 10.7816 3.64645L7.59966 0.464466C7.4044 0.269204 7.08782 0.269204 6.89256 0.464466C6.69729 0.659728 6.69729 0.976311 6.89256 1.17157L9.72098 4L6.89256 6.82843C6.69729 7.02369 6.69729 7.34027 6.89256 7.53553C7.08782 7.7308 7.4044 7.7308 7.59966 7.53553L10.7816 4.35355ZM1 4.5H10.4281V3.5H1V4.5Z"
              fill="#02E56A"
              className="fill-[#15171E] group-hover:fill-[#02E56A]"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ReviewTech;
