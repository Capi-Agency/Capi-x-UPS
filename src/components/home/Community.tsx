"use client";
import React, { useEffect, useRef, useState } from "react";
import NextImg from "../common/next-img";
import { gsap } from "gsap";

type Props = {};
const imgDataDesktop = [
  { size: 44, imgUrl: "/assets/image/investor1.jpg", left: 4, bottom: 4 },
  { size: 261.2, imgUrl: "/assets/image/investor2.jpg", left: 4, bottom: 4 },
  { size: 65, imgUrl: "/assets/image/investor3.jpg", top: 115, left: 260 },
  { size: 38.5, imgUrl: "/assets/image/investor4.jpg", top: 167, left: 308 },
  { size: 119, imgUrl: "/assets/image/investor5.jpg", left: 251, bottom: 4 },
  {
    size: 317,
    imgUrl: "/assets/image/investor6.jpg",
    top: 7,
    bottom: 4,
    left: 347,
  },
  { size: 38.5, imgUrl: "/assets/image/investor7.jpg", left: 663, bottom: 175 },
  { size: 77, imgUrl: "/assets/image/investor8.jpg", left: 624.6, bottom: 4 },
  { size: 233, imgUrl: "/assets/image/investor9.jpg", right: 524, bottom: 4 },
  {
    size: 77,
    imgUrl: "/assets/icons/svg-investor.svg",
    right: 499,
    top: 50,
  },
  { size: 64, imgUrl: "/assets/image/investor10.jpg", right: 485, bottom: 4 },
  { size: 281, imgUrl: "/assets/image/investor11.jpg", right: 242, bottom: 4 },
  { size: 77, imgUrl: "/assets/image/investor12.jpg", top: 82, right: 174.5 },
  { size: 41, imgUrl: "/assets/image/investor13.jpg", bottom: 70, right: 210 },
  { size: 67, imgUrl: "/assets/image/investor14.jpg", bottom: 4, right: 208 },
  { size: 207, imgUrl: "/assets/image/investor15.jpg", bottom: 4, right: 4 },
  { size: 41, imgUrl: "/assets/image/investor16.jpg", top: 105, right: 4 },
];

const imgDataMobile = [
  { size: 16, imgUrl: "/assets/image/investor1.jpg", left: 0, bottom: 0 },
  { size: 99, imgUrl: "/assets/image/investor2.jpg", left: 0, bottom: 0 },
  { size: 24, imgUrl: "/assets/image/investor10.jpg", top: 42, left: 0 },
  { size: 14.5, imgUrl: "/assets/image/investor7.jpg", top: 40, left: 46 },
  { size: 59, imgUrl: "/assets/image/investor15.jpg", left: 59, top: 4 },
  {
    size: 25,
    imgUrl: "/assets/image/investor14.jpg",
    bottom: 0,
    left: 89,
  },
  { size: 120, imgUrl: "/assets/image/investor6.jpg", left: 99, bottom: 0 },
  {
    size: 24.6,
    imgUrl: "/assets/image/investor3.jpg",
    left: 117,
    top: 15.5,
  },
  { size: 29, imgUrl: "/assets/icons/svg-investor.svg", right: 124, top: 19 },
  {
    size: 45,
    imgUrl: "/assets/image/investor5.jpg",
    right: 499,
    top: 83,
  },
  { size: 14.5, imgUrl: "/assets/image/investor4.jpg", right: 108, bottom: 64 },
  { size: 29, imgUrl: "/assets/image/investor8.jpg", right: 108, bottom: 0 },
  { size: 88, imgUrl: "/assets/image/investor9.jpg", bottom: 0, right: 27 },
  { size: 68, imgUrl: "/assets/image/investor11.jpg", top: 0, right: 17 },
  { size: 36, imgUrl: "/assets/image/investor12.jpg", top: 57, right: 0 },
  { size: 21, imgUrl: "/assets/image/investor16.jpg", bottom: 31, right: 0 },
  { size: 31, imgUrl: "/assets/image/investor13.jpg", bottom: 0, right: 0 },
];

const Community = (props: Props) => {
  const [imgData, setImgData] = useState(imgDataDesktop);
  useEffect(() => {
    const handleResize = () => {
      setImgData(window.innerWidth < 768 ? imgDataMobile : imgDataDesktop);
    };

    // Thiết lập imgData ban đầu
    handleResize();

    // Thêm trình lắng nghe sự kiện resize
    window.addEventListener("resize", handleResize);

    // Dọn dẹp listener khi component bị gỡ
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const imgRef = useRef<HTMLDivElement[]>([]);
  const triggerRef = useRef<HTMLDivElement>(null); // Ref for the trigger element

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
              ease: "bounce.out",
              stagger: 0.05,
            }
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
    <>
      <div
        className="flex flex-col text-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="relative w-[74px] h-[32px] lg:w-[111px] lg:h-[48px] mx-auto">
          <NextImg
            src="/assets/icons/logo-small2.svg"
            alt="Capi"
            objectFit="cover"
            className=""
          />
        </div>
        <span className="text-[#111013] text-[20px] lg:text-[48px] font-bold lg:leading-[56px] mt-2">
          Tham gia ngay cộng đồng <br />
          <span className="text-[#02E56A]">Nhà đầu tư UPS</span>
        </span>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mx-auto mt-6 lg:mt-10">
          <div className="flex items-center bg-[#002013] rounded-xl gap-3 w-[140px] h-10 pl-[14px] cursor-pointer">
            <div className="relative w-[19px] h-[19px]">
              <NextImg
                src="/assets/icons/logo-bt.svg"
                alt="Capi"
                objectFit="cover"
                className=""
              />
            </div>
            <span className="text-[#FFF] text-[14px] lg:text-[16px] font-bold leading-normal">
              Cộng đồng
            </span>
          </div>
          <div className="flex items-center bg-[#002013] rounded-xl gap-3 w-[140px] h-10 pl-[14px] cursor-pointer">
            <div className="relative w-[16px] h-[31px] place-items-end">
              <NextImg
                src="/assets/icons/fb2.svg"
                alt="Capi"
                objectFit="cover"
                className=""
              />
            </div>
            <span className="text-[#FFF] text-[14px] lg:text-[16px] font-bold leading-normal">
              Facebook
            </span>
          </div>
          <div className="flex items-center bg-[#002013] rounded-xl gap-3 w-[140px] h-10 pl-[14px] cursor-pointer">
            <div className="relative w-[22px] h-[18px]">
              <NextImg
                src="/assets/icons/Path-3.svg"
                alt="Capi"
                objectFit="cover"
                className=""
              />
            </div>
            <span className="text-[#FFF] text-[14px] lg:text-[16px] font-bold leading-normal">
              Telegram
            </span>
          </div>
          <div className="flex items-center bg-[#002013] rounded-xl gap-3 w-[140px] h-10 pl-[14px] cursor-pointer">
            <div className="relative w-[24px] h-[24px]">
              <NextImg
                src="/assets/image/zalo.png"
                alt="Capi"
                objectFit="cover"
                className=""
              />
            </div>
            <span className="text-[#FFF] text-[14px] lg:text-[16px] font-bold leading-normal">
              Zalo
            </span>
          </div>
        </div>
      </div>
      {/* Trigger element for the animation */}
      <div
        ref={triggerRef}
        className="relative h-[154px] lg:h-[328px] mt-10 lg:mt-20"
      >
        {imgData.map((img, index) => (
          <div
            key={index}
            className={`rounded-full absolute flex items-center justify-center`}
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
    </>
  );
};

export default Community;
