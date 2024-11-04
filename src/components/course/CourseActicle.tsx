import React from "react";
import NextImg from "../common/next-img";

type Props = {};
const articles = [
  {
    title: "Ba điều cần làm trước khi bạn bắt đầu đầu tư",
    icon: "/assets/icons/document-text2.svg",
  },
  {
    title: "Quy tắc 6 túi là gì và cách áp dụng chúng vào đầu tư hiệu quả",
    icon: "/assets/icons/document-text2.svg",
  },
  {
    title: "Mở tài khoản UPS qua ứng dụng điện thoại nhanh nhất",
    icon: "/assets/icons/document-text2.svg",
  },
];

const CourseActicle = (props: Props) => {
  return (
    <div
      className="mx-auto mt-10 md:max-w-[520px] lg:mt-[60px] lg:max-w-[700px] lg2:mt-20 lg2:max-w-[820px] xl:max-w-[900px] 2xl:max-w-[1024px]"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="grid grid-rows-3">
        {articles.map((article, index) => (
          <a
            key={index}
            href=""
            className={`flex items-center justify-between gap-[30px] border-[#60606B] border-opacity-65 py-3 lg:py-6 ${
              index === 0 ? "border-y" : "border-b"
            } `}
          >
            <div className="flex items-center gap-3 lg:gap-5">
              <div className="relative h-[24px] w-[24px] min-w-6">
                <NextImg src={article.icon} alt="Capi" objectFit="cover" />
              </div>
              <p className="text-[14px] font-medium leading-[22px] text-[#15171E] lg:text-[18px] lg:leading-normal lg2:text-[24px]">
                {article.title}
              </p>
            </div>
            <div className="relative h-[24px] w-[24px] cursor-pointer lg:h-7 lg:w-7 lg2:h-[32px] lg2:w-[32px]">
              <NextImg
                src="/assets/icons/chevron-down.svg"
                alt="Capi"
                objectFit="cover"
                className="rotate-90"
              />
            </div>
          </a>
        ))}
      </div>
      <button className="btn active1 mx-auto mt-6 !bg-[#15171E] !text-[#FFF] lg:mt-[50px]">
        Xem tất cả bài viết
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25 24"
          fill="none"
          className="h-4 w-4 lg:h-6 lg:w-6"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.2594 5.98952C19.2594 5.7906 19.1804 5.59984 19.0398 5.45919C18.8991 5.31853 18.7083 5.23952 18.5094 5.23952L9.92515 5.23952C9.51093 5.23952 9.17515 5.5753 9.17515 5.98952C9.17515 6.40373 9.51093 6.73952 9.92515 6.73952L16.6992 6.73952L5.95855 17.4802C5.66566 17.7731 5.66566 18.2479 5.95855 18.5408C6.25145 18.8337 6.72632 18.8337 7.01921 18.5408L17.7594 7.80062V14.5738C17.7594 14.988 18.0952 15.3238 18.5094 15.3238C18.9236 15.3238 19.2594 14.988 19.2594 14.5738L19.2594 5.98952Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default CourseActicle;
