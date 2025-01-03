'use client';

import React, { useRef, useState } from 'react';
import NextImg from '../common/next-img';

type Props = {};

const BannerAdvise = (props: Props) => {
  const videoRef = useRef<any>(null);
  const [isPlaying, setPlay] = useState<boolean>(true);
  const handleVideo = () => {
    if (isPlaying == true) {
      videoRef.current.pause();
      setPlay(!isPlaying);
      return;
    } else {
      videoRef.current.play();
      setPlay(!isPlaying);
      return;
    }
  };
  return (
    <div className="relative mt-[-45px] flex h-[920px] w-full flex-col text-black md:mt-[-56px] md:h-[100vh] md:flex-row lg:mt-[-64px] xl:mt-[-70px]">
      <video
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="700"
        className="h-full w-full object-cover"
        muted
        loop
        autoPlay
        ref={videoRef}
      >
        <source src="/assets/image/video_job.mp4" type="video/mp4" />
        <source src="/assest/image/job_preview_banner.png" type="video/ogg" />
        Your browser does not support HTML video.
      </video>

      <div
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="700"
        className="h-full w-full md:absolute md:left-0 md:top-0"
      >
        <div className="md:custom-container flex h-full flex-col items-stretch justify-end md:flex-row">
          <div className="flex h-full w-full flex-col justify-center gap-3 bg-black/80 px-6 py-10 md:w-[342px] md:gap-2 md:px-8 md:py-0 lg:w-[452px] lg:gap-[10px] lg:px-10 lg2:w-[492px] xl:w-[522px] xl:px-[60px] 2xl:w-[532px]">
            <button
              className="size-fit rounded-full shadow-[0px_0px_0px_12px_rgba(144,145,156,0.20)]"
              onClick={handleVideo}
            >
              <img
                src="/assets/icons/VideoButtonWhite.svg"
                alt=""
                className="size-[40px] lg:size-[60px]"
              />
            </button>

            <div className="flex flex-col gap-2 pt-4 md:gap-4">
              <div className="text-sm font-normal text-[#E7E7EE] lg:text-base">
                UI/UX, Strategy <span className="text-[#D90A2C]">•</span> June
                03, 2024
              </div>

              <div className="text-[32px] font-bold leading-[1.3] text-white lg:text-[40px] lg2:text-[48px] xl:text-[56px]">
                Tư vấn <br />
                tài chính
              </div>
            </div>

            <div className="flex flex-col gap-8 pt-2 md:gap-[36px] md:pt-3 lg:gap-[48px]">
              <div className="text-sm font-normal leading-[1.6] text-white md:text-base lg:text-lg">
                Với mạng lưới quan hệ rộng lớn, UPS có khả năng tìm kiếm nhà đầu
                tư tiềm năng cho doanh nghiệp, giúp tổ chức bán cổ phần ra bên
                ngoài qua phương thức đấu giá.
              </div>

              <button className="btn w-fit bg-[#00D7B0] text-sm text-black lg:text-lg">
                Liên hệ tư vấn
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="size-4 lg:size-6"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.7589 5.98952C18.7589 5.7906 18.6799 5.59984 18.5393 5.45919C18.3986 5.31853 18.2078 5.23952 18.0089 5.23952L9.42466 5.23952C9.01045 5.23952 8.67466 5.5753 8.67466 5.98952C8.67466 6.40373 9.01045 6.73952 9.42466 6.73952L16.1987 6.73952L5.45807 17.4802C5.16517 17.7731 5.16517 18.2479 5.45807 18.5408C5.75096 18.8337 6.22583 18.8337 6.51873 18.5408L17.2589 7.80062V14.5738C17.2589 14.988 17.5947 15.3238 18.0089 15.3238C18.4231 15.3238 18.7589 14.988 18.7589 14.5738L18.7589 5.98952Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerAdvise;
