'use client';
import React, { useEffect, useRef, useState } from 'react';
import NextImg from '../common/next-img';
import { gsap } from 'gsap';

type Props = {
  data: any;
};
type ImgData = {
  size: number;
  imgUrl: string;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
};
const imgDataDesktop: ImgData[] = [
  { size: 44, imgUrl: '/assets/image/investor1.jpg', left: 4, bottom: 4 },
  { size: 261.2, imgUrl: '/assets/image/investor2.jpg', left: 4, bottom: 4 },
  { size: 65, imgUrl: '/assets/image/investor3.jpg', top: 115, left: 260 },
  { size: 38.5, imgUrl: '/assets/image/investor4.jpg', top: 167, left: 308 },
  { size: 119, imgUrl: '/assets/image/investor5.jpg', left: 251, bottom: 4 },
  {
    size: 317,
    imgUrl: '/assets/image/investor6.jpg',
    top: 7,
    bottom: 4,
    left: 347,
  },
  { size: 38.5, imgUrl: '/assets/image/investor7.jpg', left: 663, bottom: 175 },
  { size: 77, imgUrl: '/assets/image/investor8.jpg', left: 624.6, bottom: 4 },
  { size: 233, imgUrl: '/assets/image/investor9.jpg', right: 524, bottom: 4 },
  {
    size: 77,
    imgUrl: '/assets/icons/svg-investor.svg',
    right: 499,
    top: 50,
  },
  { size: 64, imgUrl: '/assets/image/investor10.jpg', right: 485, bottom: 4 },
  { size: 281, imgUrl: '/assets/image/investor11.jpg', right: 242, bottom: 4 },
  { size: 77, imgUrl: '/assets/image/investor12.jpg', top: 82, right: 174.5 },
  { size: 41, imgUrl: '/assets/image/investor13.jpg', bottom: 70, right: 210 },
  { size: 67, imgUrl: '/assets/image/investor14.jpg', bottom: 4, right: 208 },
  { size: 207, imgUrl: '/assets/image/investor15.jpg', bottom: 4, right: 4 },
  { size: 41, imgUrl: '/assets/image/investor16.jpg', top: 105, right: 4 },
];

const imgDataMobile: ImgData[] = [
  { size: 16, imgUrl: '/assets/image/investor1.jpg', left: 0, bottom: 0 },
  { size: 99, imgUrl: '/assets/image/investor2.jpg', left: 0, bottom: 0 },
  { size: 24, imgUrl: '/assets/image/investor10.jpg', top: 42, left: 0 },
  { size: 14.5, imgUrl: '/assets/image/investor7.jpg', top: 40, left: 46 },
  { size: 59, imgUrl: '/assets/image/investor15.jpg', left: 59, top: 4 },
  {
    size: 25,
    imgUrl: '/assets/image/investor14.jpg',
    bottom: 0,
    left: 89,
    top: 129,
  },
  { size: 120, imgUrl: '/assets/image/investor6.jpg', left: 99, bottom: 0 },
  {
    size: 24.6,
    imgUrl: '/assets/image/investor3.jpg',
    left: 117,
    top: 15.5,
  },
  { size: 29, imgUrl: '/assets/icons/svg-investor.svg', right: 124, top: 19 },
  {
    size: 45,
    imgUrl: '/assets/image/investor5.jpg',
    right: 83,
    top: 30,
  },
  { size: 14.5, imgUrl: '/assets/image/investor4.jpg', right: 108, bottom: 64 },
  { size: 29, imgUrl: '/assets/image/investor8.jpg', right: 108, bottom: 0 },
  {
    size: 88,
    imgUrl: '/assets/image/investor9.jpg',
    bottom: 0,
    right: 27,
    top: 66,
  },
  { size: 68, imgUrl: '/assets/image/investor11.jpg', top: 0, right: 17 },
  { size: 36, imgUrl: '/assets/image/investor12.jpg', top: 57, right: 0 },
  { size: 21, imgUrl: '/assets/image/investor16.jpg', bottom: 33, right: 0 },
  {
    size: 31,
    imgUrl: '/assets/image/investor13.jpg',
    bottom: 0,
    right: 0,
    top: 122,
  },
];

const Community = ({ data }: Props) => {
  console.log('🚀 ~ Community ~ data:', data);
  const [imgData, setImgData] = useState(imgDataDesktop);
  const imgRef = useRef<HTMLDivElement[]>([]);
  const triggerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animation when the element is in the viewport
          gsap.fromTo(
            imgRef.current,
            { y: -300, opacity: 0, scale: 0.5 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1.5,
              ease: 'bounce.out',
              stagger: 0.05,
            },
          );
          observer.disconnect(); // Stop observing after the animation
        }
      });
    });

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => {
      if (triggerRef.current) {
        observer.unobserve(triggerRef.current);
      }
    };
  }, []);
  return (
    <div className="custom-container">
      <div
        className="flex flex-col text-center"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="700"
      >
        <div className="relative mx-auto h-[32px] w-[74px] lg:h-[40px] lg:w-[92px] lg2:h-[48px] lg2:w-[111px]">
          <NextImg
            src="/assets/icons/logo-small2.svg"
            alt="Capi"
            objectFit="cover"
            className=""
          />
        </div>
        <span className="mt-2 text-[20px] font-bold text-[#111013] lg:text-[24px] lg2:text-[40px] lg2:leading-[46px] 2xl:text-[44px] 2xl:leading-[52px] 3xl:text-[48px] 3xl:leading-[56px]">
          {data[0].title} <br />
          <span className="text-[#02E56A]">{data[1].title}</span>
        </span>
        <div className="mx-auto mt-6 grid grid-cols-2 gap-4 lg:mt-10 lg:grid-cols-4">
          <div className="flex h-10 w-[140px] cursor-pointer items-center gap-3 rounded-xl bg-[#002013] pl-[14px]">
            <div className="relative h-[19px] w-[19px]">
              <NextImg
                src="/assets/icons/logo-bt.svg"
                alt="Capi"
                objectFit="cover"
                className=""
              />
            </div>
            <span className="text-[14px] font-bold leading-normal text-[#FFF] lg:text-[16px]">
              Cộng đồng
            </span>
          </div>
          <div className="flex h-10 w-[140px] cursor-pointer items-center gap-3 rounded-xl bg-[#002013] pl-[14px]">
            <div className="relative h-[31px] w-[16px] place-items-end">
              <NextImg
                src="/assets/icons/fb2.svg"
                alt="Capi"
                objectFit="cover"
                className=""
              />
            </div>
            <span className="text-[14px] font-bold leading-normal text-[#FFF] lg:text-[16px]">
              Facebook
            </span>
          </div>
          <div className="flex h-10 w-[140px] cursor-pointer items-center gap-3 rounded-xl bg-[#002013] pl-[14px]">
            <div className="relative h-[18px] w-[22px]">
              <NextImg
                src="/assets/icons/Path-3.svg"
                alt="Capi"
                objectFit="cover"
                className=""
              />
            </div>
            <span className="text-[14px] font-bold leading-normal text-[#FFF] lg:text-[16px]">
              Telegram
            </span>
          </div>
          <div className="flex h-10 w-[140px] cursor-pointer items-center gap-3 rounded-xl bg-[#002013] pl-[14px]">
            <div className="relative h-[24px] w-[24px]">
              <NextImg
                src="/assets/image/zalo.png"
                alt="Capi"
                objectFit="cover"
                className=""
              />
            </div>
            <span className="text-[14px] font-bold leading-normal text-[#FFF] lg:text-[16px]">
              Zalo
            </span>
          </div>
        </div>
      </div>
      {/* Trigger element for the animation */}
      <div
        ref={triggerRef}
        className="relative mt-10 hidden h-[154px] lg:h-[328px] xl:mt-[50px] 3xl:mt-20 3xl:block"
      >
        {imgData.map((img, index) => (
          <div
            key={index}
            className={`absolute rounded-full`}
            style={{
              top: `${img.top}px`,
              left: `${img.left}px`,
              bottom: `${img.bottom}px`,
              right: `${img.right}px`,
            }}
            ref={(el) => {
              if (el && !imgRef.current.includes(el)) {
                imgRef.current[index] = el;
              }
            }}
          >
            <div
              className={`relative rounded-full`}
              style={{ width: `${img.size}px`, height: `${img.size}px` }}
            >
              <NextImg
                src={img.imgUrl}
                alt="Ups"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
      <div
        className="relative mt-10 block w-full pt-[22%] xl:mt-[50px] 3xl:mt-20 3xl:hidden"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="700"
      >
        <NextImg
          src="/assets/image/Frame 1597881493.png"
          alt="Capi"
          objectFit="contain"
          className=""
        />
      </div>
    </div>
  );
};

export default Community;
