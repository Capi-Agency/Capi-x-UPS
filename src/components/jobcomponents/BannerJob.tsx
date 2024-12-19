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
    <div className="relative z-0 mx-auto mt-[-15px] pt-20 lg:pt-16 2xl:pt-[90px] 3xl:pt-[100px]">
      <div className="custom-container">
        {/* video */}
        <div className="group relative h-[750px] w-[1068px] bg-black">
          <video
            className="h-full w-full rounded-[24px_0px_0px_24px] object-cover"
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
                  'btn absolute left-[50%] top-[50%] group-hover:block'
                : 'block ' +
                  `btn absolute left-[50%] top-[50%] group-hover:block`
            }
            onClick={handleVideo}
          >
            <img src="/assets/image/Button.svg" alt="" />
          </button>
        </div>
        {/* content */}
        <div>
          {/* lớp phủ */}
          <div className="absolute left-[50%] top-[11.8%] z-[1] flex h-[750px] w-[750px] items-center justify-center rounded-[50%] bg-[#02E56A] px-[156px] mix-blend-darken"></div>
          {/* content */}
          <div className="absolute left-[50%] top-[11.8%] z-[1] flex h-[750px] w-[750px] items-center justify-center rounded-[50%] px-[156px]">
            <div className="flex flex-col gap-[24px]">
              <h1 className="font-hanken text-[60px] font-bold leading-[normal] text-white">
                Kiến tạo sự nghiệp bên vững vẹn toàn
              </h1>
              <p className="font-hanken text-[18px] font-medium leading-[28px] text-white">
                UPS trao cơ hội để bạn được làm việc trong một cộng đồng năng
                động, sáng tạo, nơi mọi ý tưởng đều được trân trọng, mang lại
                nhiều giá trị phát triển bền vững, tạo sự gắn kết.
              </p>
              <div className="block">
                <Link
                  href={`https://onboarding.upstock.com.vn/index.html#/./open-account/check-info`}
                >
                  <button className="btn bg-black text-white">
                    Mở tài khoản ngay
                    <div className="relative h-4 w-4 lg:h-6 lg:w-6">
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
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
