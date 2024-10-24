import React from "react";
import NextImg from "../common/next-img";
import CourseActicle from "./CourseActicle";

type Props = {};
const courses = [
  {
    title: "Đầu tư là gì?",
    description:
      "Creating a higher spacing and how people move through a unique and impactful campaign.",
    imageSrc: "/assets/image/card-course1.svg",
    bgColor: "#FFF1DD",
    aosDelay: 200,
  },
  {
    title: "Cổ phiếu là gì?",
    description:
      "Creating a higher spacing and how people move through a unique and impactful campaign.",
    imageSrc: "/assets/image/card-course2.svg",
    bgColor: "#FFD495",
    aosDelay: 400,
  },
  {
    title: "Ban kiếm tiền như thế nào?",
    description:
      "Creating a higher spacing and how people move through a unique and impactful campaign.",
    imageSrc: "/assets/image/card-course3.svg",
    bgColor: "#FFAD36",
    aosDelay: 600,
  },
];

const CourseContent = (props: Props) => {
  return (
    <div className="custom-container 3xl:!max-w-[1280px] pt-10 lg:pt-[100px]">
      <div className="flex flex-col" data-aos="fade-up" data-aos-delay="200">
        <span className="text-[#FF6D00] text-[14px] lg:text-[18px] font-medium leading-[22px] lg:leading-[40px]">
          #kienthucchungkhoan
        </span>
        <h3 className="text-[#141414] text-[20px] lg:text-[48px] font-bold lg:leading-[54px] mt-2 mb-2 lg:mb-5">
          Dành cho người mới bắt đầu
        </h3>
        <p className="text-[#111013] text-[14px] lg:text-[18px] font-medium leading-[28px]">
          Tìm hiểu thông tin cơ bản trước khi bạn trở thành một nhà đầu tư hoàn
          hảo.
        </p>
      </div>
      <div className="mt-6 lg:mt-20 lg:grid lg:grid-cols-3 flex flex-col gap-3 lg:gap-10">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`p-5 lg:p-10 rounded-2xl flex flex-col justify-between h-[352px] lg:h-[572px]`}
            style={{ backgroundColor: course.bgColor }}
            data-aos="fade-up"
            data-aos-delay={course.aosDelay}
          >
            <div>
              <h4 className="text-[#111013] text-[20px] lg:text-[32px] font-bold lg:leading-[40px]">
                {course.title}
              </h4>
              <p className="text-[#111013] text-[14px] lg:text-[18px] font-medium leading-[22px] lg:leading-[28px] mt-2 lg:mt-4">
                {course.description}
              </p>
            </div>
            <div className="relative w-full h-[194px] lg:h-[288px]">
              <NextImg
                src={course.imageSrc}
                alt="Capi"
                objectFit="contain"
                className=""
              />
            </div>
          </div>
        ))}
      </div>
      <CourseActicle />
    </div>
  );
};

export default CourseContent;
