'use client';
import React, { useRef, useState } from 'react';
import NextImg from '../common/next-img';
import Link from 'next/link';

type Props = {};

const BannerJob = (props: Props) => {
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
    <div className="relative z-0 mx-auto mt-11 md:mt-[52px] lg:mt-[60px] 2xl:mt-20">
      <div className="custom-container">
        {/* video */}
        <div className="md:rounded-r-0 group relative w-full rounded-l-[16px] rounded-r-[16px] bg-black pt-[40%] md:h-[440px] md:w-[500px] md:pt-0 lg:h-[540px] lg:w-[674px] lg:rounded-l-[20px] lg2:h-[620px] lg2:w-[810px] lg2:rounded-l-[24px] xl:h-[660px] xl:w-[790px] 2xl:h-[700px] 2xl:w-[925px] 3xl:h-[750px] 3xl:w-[1068px]">
          <video
            className="h-full w-full rounded-[16px] object-cover md:rounded-[16px_0px_0px_16px] lg:rounded-[20px_0px_0px_20px] lg2:rounded-[24px_0px_0px_24px]"
            autoPlay
            muted
            loop
            ref={videoRef}
          >
            <source src="/assets/image/video_job.mp4" type="video/mp4" />
            <source
              src="/assest/image/job_preview_banner.png"
              type="video/ogg"
            />
            Your browser does not support HTML video.
          </video>
          <button
            className={
              isPlaying
                ? 'hidden ' +
                  'btn absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 group-hover:block'
                : 'block ' +
                  `btn absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 group-hover:block`
            }
            onClick={handleVideo}
          >
            <img
              src="/assets/image/Button.svg"
              alt=""
              className="size-[60px] lg:size-[72px] 2xl:size-[92px]"
            />
          </button>
        </div>
        {/* content */}
        <div>
          {/* lớp phủ */}
          <div className="top-0 z-[1] flex items-center justify-center rounded-[50%] bg-[#02E56A] mix-blend-multiply md:absolute md:left-[39.5%] md:size-[440px] lg:left-[43.2%] lg:size-[540px] lg2:left-[45.2%] lg2:size-[620px] xl:left-[43%] xl:size-[660px] 2xl:left-[46.2%] 2xl:size-[700px] 3xl:left-[48.5%] 3xl:size-[750px]"></div>
          {/* content */}
          <div className="top-0 z-[1] flex items-center justify-center rounded-[50%] md:absolute md:left-[39.5%] md:size-[440px] md:px-[60px] lg:left-[43.2%] lg:size-[540px] lg:pl-[110px] lg:pr-[68px] lg2:left-[45.5%] lg2:size-[620px] lg2:px-[129px] xl:left-[43%] xl:size-[660px] xl:px-[131px] 2xl:left-[46.2%] 2xl:size-[700px] 3xl:left-[48.5%] 3xl:size-[750px] 3xl:px-[135px]">
            <div className="mt-[30px] flex flex-col gap-6 md:mt-0 md:gap-5 xl:gap-[24px]">
              <h1 className="text-center text-[32px] font-bold text-black md:text-start md:text-[24px] md:text-white lg:text-[40px] lg:leading-[46px] lg2:text-[48px] lg2:leading-[46px] xl:text-[48px] xl:leading-[54px] 2xl:text-[54px] 2xl:leading-[62px] 3xl:text-[60px] 3xl:leading-[78px]">
                Kiến tạo sự nghiệp bền vững và hạnh phúc cùng UPS
              </h1>
              <p className="text-center text-sm font-medium leading-[22px] text-black md:text-start md:text-base md:text-white lg:text-[18px] lg:leading-[28px]">
                UPS trao cơ hội để bạn được làm việc trong một cộng đồng trẻ
                trung, năng động và sáng tạo, nơi mỗi ý tưởng đều được trân
                trọng, đóng góp vào sự phát triển chung.
              </p>
              <div className="mx-auto block md:mx-0">
                <Link
                  href={`https://onboarding.upstock.com.vn/index.html#/./open-account/check-info`}
                >
                  <button className="btn bg-black text-white">
                    Gia nhập UPS
                    <div className="relative">
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="h-4 w-4 lg:h-6 lg:w-6"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.7594 5.98952C18.7594 5.7906 18.6804 5.59984 18.5398 5.45919C18.3991 5.31853 18.2083 5.23952 18.0094 5.23952L9.42515 5.23952C9.01093 5.23952 8.67515 5.5753 8.67515 5.98952C8.67515 6.40373 9.01093 6.73952 9.42515 6.73952L16.1992 6.73952L5.45855 17.4802C5.16566 17.7731 5.16566 18.2479 5.45855 18.5408C5.75145 18.8337 6.22632 18.8337 6.51921 18.5408L17.2594 7.80062V14.5738C17.2594 14.988 17.5952 15.3238 18.0094 15.3238C18.4236 15.3238 18.7594 14.988 18.7594 14.5738L18.7594 5.98952Z"
                            fill="white"
                          />
                        </svg>
                      </i>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerJob;
