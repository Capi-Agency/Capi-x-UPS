'use client'
import React from "react";
import NextImg from "../common/next-img";
import { TypeAnimation } from 'react-type-animation';
type Props = {};

const BannerAbout = (props: Props) => {
  return (
    <>
      <div className="pt-[76px] lg:pt-[120px] pb-10 lg:pb-[70px] bg-[#00D763]">
        <div className="flex lg:flex-row flex-col items-center custom-container relative">
          <div
            className="w-full lg:w-[50%]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="relative w-full pt-[76%] z-1">
              <NextImg
                src="/assets/icons/icon-banner-about.svg"
                alt="Capi"
                objectFit="cover"
                className="absolute w-full h-full"
              />
            </div>
          </div>
          <div
            className="text-right flex flex-col items-end justify-end self-end lg:absolute right-0 z-10"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h1 className="text-[#0F1B0E] text-right font-hanken-grotesk text-[32px] lg:text-[100px] font-bold lg:leading-[120px] tracking-[-0.64px] lg:tracking-[-2px]">
              Tự hào
              <br />
              tiên phong
              <br />
              trong trải nghiệm
            </h1>
            <TypeAnimation
            className="text-white text-right font-hanken-grotesk text-[32px] lg:text-[100px] font-bold lg:leading-[120px] tracking-[-0.64px] lg:tracking-[-2px]"
              sequence={[
                'chứng khoán', // Types 'One'
                3000, // Waits 3s
                'UPS', // Deletes 'One' and types 'Two'
                3000, // Waits 3s
                'upsecurities', // Types 'Three' without deleting 'Two'
                3000,
                () => {
                  console.log('Sequence completed');
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{display: 'inline-block' }}
            />
          </div>
        </div>
        <div
          className="flex custom-container items-end justify-between mt-6 lg:mt-[30px]"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="border-t-[1px] border-[#000] pt-3 lg:pt-[40px] w-full lg:w-[400px]">
            <p className="text-[#074E28] text-[14px] lg:text-[20px] font-medium leading-[22px] lg:leading-[28px]">
              UPS hướng đến mục tiêu trở thành một điểm tựa vững chắc khuyến
              khích người trẻ tự tin khám phá thế giới tài chính.
            </p>
          </div>
          <div className="cursor-pointer lg:block hidden">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M46.8983 14.9735C46.8983 14.4763 46.7008 13.9994 46.3491 13.6477C45.9975 13.2961 45.5206 13.0985 45.0233 13.0985L23.5626 13.0985C22.5271 13.0985 21.6876 13.938 21.6876 14.9735C21.6876 16.0091 22.5271 16.8485 23.5626 16.8485L40.499 16.8485L13.6459 43.7016C12.9137 44.4338 12.9137 45.621 13.6459 46.3533C14.3782 47.0855 15.5653 47.0855 16.2976 46.3533L43.1483 19.5025L43.1483 36.4342C43.1483 37.4698 43.9878 38.3092 45.0233 38.3092C46.0589 38.3092 46.8983 37.4698 46.8983 36.4342L46.8983 14.9735Z"
                  fill="#014227"
                />
              </svg>
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerAbout;
