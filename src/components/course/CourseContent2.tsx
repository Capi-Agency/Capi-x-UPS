import React from "react";
import NextImg from "../common/next-img";
import TagsPage from "../tags/page";
import CourseActicle from "./CourseActicle";

type Props = {};

const CourseContent2 = (props: Props) => {
  const courses = [
    {
      title: "Margin là gì?",
      description:
        "Creating a higher spacing and how people move through a unique and impactful campaign.",
      imgSrc: "/assets/image/card-course4.svg",
    },
    {
      title: "Sử dụng Đòn bẩy Margin hiệu quả",
      description:
        "Creating a higher spacing and how people move through a unique and impactful campaign.",
      imgSrc: "/assets/image/card-course5.svg",
    },
    {
      title: "Phân bổ tài sản hợp lý trong 3 bước",
      description:
        "Creating a higher spacing and how people move through a unique and impactful campaign.",
      imgSrc: "/assets/image/card-course6.svg",
    },
    {
      title: "Lựa chọn cổ phiếu tiềm năng",
      description:
        "Creating a higher spacing and how people move through a unique and impactful campaign.",
      imgSrc: "/assets/image/card-course7.svg",
    },
    {
      title: "Bạn có đang đầu tư hiệu quả",
      description:
        "Creating a higher spacing and how people move through a unique and impactful campaign.",
      imgSrc: "/assets/image/card-course8.svg",
    },
    {
      title: "Nạp rút tiền tối ưu qua đâu?",
      description:
        "Creating a higher spacing and how people move through a unique and impactful campaign.",
      imgSrc: "/assets/image/card-course9.svg",
    },
  ];
  return (
    <div>
      <div className="custom-container 3xl:!max-w-[1280px] mt-12 lg:mt-[120px]">
        {/* banner 2 */}
        <div className="bg-[#000] rounded-[24px]">
          <div className="flex lg:flex-row lg:items-center lg:justify-between flex-col-reverse lg:gap-0 gap-5">
            <div
              className="lg:py-[55px] lg:pl-[50px] lg:pr-0 p-5 lg:w-[30%]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-[#FFF] text-[20px] lg:text-[40px] font-bold lg:leading-[54px]">
                Đừng bỏ lỡ cơ hội đầu tư của bạn
              </h3>
              <p className="text-[#FFF] text-[14px] lg:text-[18px] font-medium leading-[22px] lg:leading-[28px] mt-4 mb-5 lg:mb-10">
                Tăng tốc giao dịch nhanh chóng với ứng dụng di động cá nhân hoá
                riêng cho bạn.
              </p>
              <div>
                <button className="btn active">
                  Mở tài khoản ngay
                  <div className="relative w-4 h-4 lg:w-6 lg:h-6">
                    <NextImg
                      src="/assets/icons/UPs.svg"
                      alt="Capi"
                      objectFit="cover"
                    />
                  </div>
                </button>
              </div>
            </div>
            <div
              className="relative w-[55%] pt-[30%] lg:block hidden"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <NextImg
                src="/assets/image/banner-course2.png"
                alt="Capi"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            <div
              className="relative w-full h-[255px] flex justify-start lg:hidden"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <NextImg
                src="/assets/image/banner-course3.png"
                alt="Capi"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        {/* section 2 */}
        <div className="mt-16 lg:mt-[120px]" data-aos="fade-up" data-aos-delay="200">
          <span className="text-[14px] lg:text-[18px] text-[#FF6D00] font-medium leading-[22px] lg:leading-[40px]">
            #kienthucchungkhoan
          </span>
          <h2 className="text-[20px] lg:text-[48px] text-[#141414] font-bold lg:leading-[54px] mt-2 mb-2 lg:mb-5">
            Kiến thức nâng cao
          </h2>
          <p className="text-[14px] lg:text-[18px] text-[#111013] font-medium leading-[28px]">
            Chuyên nghiệp hơn nữa, tự do tài chính hơn nữa
          </p>
        </div>
        <div className="mt-6 lg:mt-20">
          <div className="lg:grid grid-cols-3 flex flex-col gap-3 lg:gap-10">
            {courses.map((course, index) => {
              const delay = ((index % 3) + 1) * 200;

              return (
                <div
                  key={index}
                  className="p-5 lg:p-10 rounded-2xl bg-[#FFF1DD] flex flex-col justify-between h-[350px] lg:h-[572px] hover:bg-[#FFAD36] transition-all duration-300 ease-in"
                  data-aos="fade-up"
                  data-aos-delay={delay}
                >
                  <div>
                    <h4 className="text-[#111013] text-[20px] lg:text-[32px] font-bold lg:leading-[40px]">
                      {course.title}
                    </h4>
                    <p className="text-[#111013] text-[14px] lg:text-[18px] font-medium leading-[22px] lg:leading-[28px] mt-2 lg:mt-4">
                      {course.description}
                    </p>
                  </div>
                  <div className="relative lg:h-[288px] lg:w-full w-[67%] h-[191px] mx-auto flex justify-start">
                    <NextImg
                      src={course.imgSrc}
                      alt="Capi"
                      objectFit="contain"
                      className=""
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <CourseActicle />
      </div>
      {/* tags */}
      <TagsPage />
    </div>
  );
};

export default CourseContent2;
