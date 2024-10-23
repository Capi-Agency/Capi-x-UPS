"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { cn } from "@/lib/utils";

type Props = {};

const SlideAbout = (props: Props) => {
  const swiperRef = useRef<any>(null);
  const slides = [
    {
      tag: "Connection",
      title: "Highly accessible",
      description:
        "We track how people move through an impactful campaign that allows us to discover better others miss.",
    },
    {
      tag: "Collaboration",
      title: "Creative networking",
      description:
        "Creating a higher spacing and how people move through a unique and impactful campaign.",
    },
    {
      tag: "Innovation",
      title: "Ongoing optimization",
      description:
        "We track how people move through an impactful campaign that allows us to discover better others miss.",
    },
    {
      tag: "Experience",
      title: "Collaborative discovery",
      description:
        "Spaces of each debt in the digital world can help you with overall simplest authentic.",
    },
    {
      tag: "Connection",
      title: "Highly accessible",
      description:
        "We track how people move through an impactful campaign that allows us to discover better others miss.",
    },
  ];
  return (
    <div>
      <Swiper
        ref={swiperRef}
        breakpoints={{
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          0: {
            slidesPerView: 1.6,
            spaceBetween: 12,
          },
        }}
        className="mySwiper"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {slides.map((slide, index) => {
          const [position, setPosition] = useState({ x: 0, y: 0 });
          const [isHovered, setIsHovered] = useState(false);
          const cardRef = useRef<HTMLDivElement>(null);

          const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
            if (!cardRef.current) return;

            const rect = cardRef.current.getBoundingClientRect();
            const mouseX = e.clientX - rect.left - rect.width / 2;
            const mouseY = e.clientY - rect.top - rect.height / 2;

            setPosition({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            });

            let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
            angle = (angle + 360) % 360;

            cardRef.current.style.setProperty("--start", `${angle + 60}`);
          };

          const handleMouseEnter = () => {
            setIsHovered(true);
          };

          const handleMouseLeave = () => {
            setIsHovered(false);
          };
          return (
            <SwiperSlide key={index}>
              <div
                ref={cardRef}
                className={`card rounded-[12px] lg:rounded-[16px] p-5 lg:p-[32px] flex flex-col justify-between h-[320px] lg:h-[430px] relative overflow-hidden bg-[#161519]`}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex flex-col gap-2">
                  <span className="text-[#FFF] text-[14px] lg:text-[18px] font-medium leading-[22px] lg:leading-[28px]">
                    {slide.tag}
                  </span>
                  <h4 className="text-[#FFF] text-[20px] lg:text-[32px] font-bold lg:leading-[40px]">
                    {slide.title}
                  </h4>
                </div>
                <p className="text-[#FFF] text-[14px] lg:text-[18px] font-medium leading-[22px] lg:leading-[28px]">
                  {slide.description}
                </p>
                <div
                  className={cn(
                    "absolute top-0 left-0 z-[99] w-[250px] h-[250px] rounded-full bg-green-500 opacity-50 pointer-events-none",
                    { hidden: !isHovered }
                  )}
                  style={{
                    transform: `translate(${position.x - 120}px, ${
                      position.y - 120
                    }px)`,
                    background:
                      "radial-gradient(circle, rgba(0,255,0,0.5) 0%, rgba(0,255,0,0) 70%)",
                  }}
                ></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div
        className="flex items-center gap-2 float-right mt-6 lg:mt-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
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

export default SlideAbout;
