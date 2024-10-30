import React from "react";
import NextImg from "../common/next-img";

type Props = {};
const directors = [
  {
    name: "Ông Nguyễn Quang Đạt",
    position: "Tổng giám đốc",
    description:
      "A global brand entrusted us with a unique challenge: crafting an internal tool to share its brand story with every employee, from sales to product…",
    imageSrc: "/assets/image/director-1.jpg",
  },
  {
    name: "Ông Nguyễn Quang Đạt",
    position: "Tổng giám đốc",
    description:
      "A global brand entrusted us with a unique challenge: crafting an internal tool to share its brand story with every employee, from sales to product…",
    imageSrc: "/assets/image/director-2.jpg",
  },
  {
    name: "Ông Nguyễn Quang Đạt",
    position: "Tổng giám đốc",
    description:
      "A global brand entrusted us with a unique challenge: crafting an internal tool to share its brand story with every employee, from sales to product…",
    imageSrc: "/assets/image/director-3.jpg",
  },
];
const DirectorAbout = (props: Props) => {
  return (
    <div className="custom-container mt-10 lg:mt-[60px] xl:mt-20 2xl:mt-[100px] 3xl:mt-[160px]">
      {directors.map((director, index) => {
        return (
          <div
            key={index}
            className={`md:grid md:grid-cols-2 md:gap-3 lg:gap-6 3xl:gap-[30px] flex flex-col gap-3 ${
              index === 0 ? "mt-0" : "md:mt-3 3xl:mt-[30px] mt-6"
            }`}
          >
            <div
              className={`relative w-full pt-[100%] ${
                index % 2 !== 0 ? "md:order-2" : "order-1"
              }`}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <NextImg
                src={director.imageSrc}
                alt="Capi"
                objectFit="cover"
                className="rounded-[24px]"
              />
            </div>
            <div
              className={`bg-[#F3F3FB] rounded-[24px] p-5 lg:p-10 pb-[20%] ${
                index % 2 !== 0 ? "lg:order-1" : "order-2"
              }`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <span className="text-[#111013] text-[20px] lg:text-[24px] lg2:text-[30px] 2xl:text-[32px] 3xl:text-[40px] font-bold 2xl:leading-[40px] 3xl:leading-[54px]">
                {director.name}
              </span>
              <p className="text-[#161519] text-[14px] md:text-[16px] font-bold leading-[22px] lg:leading-[26px] uppercase tracking-[0.28px] lg:tracking-[0.32px] my-2 lg:my-4">
                {director.position}
              </p>
              <p className="text-[#111013] text-[14px] lg:text-[18px] font-medium leading-[22px] lg:leading-[26px]">
                {director.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DirectorAbout;
