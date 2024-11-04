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
      <div className="custom-container mt-12 lg2:mt-20 2xl:mt-[100px] 3xl:mt-[120px] 3xl:!max-w-[1280px]">
        {/* banner 2 */}
        <div className="rounded-[12px] bg-[#000] lg:rounded-[24px]">
          <div className="flex flex-col-reverse gap-5 md:grid md:grid-cols-[40%,auto] md:items-center md:justify-between lg:gap-0 lg2:grid-cols-[32%,auto]">
            <div
              className="p-5 md:py-0 md:pl-5 md:pr-0 lg:pl-10 lg2:pl-[50px]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-[20px] font-bold text-[#FFF] lg:text-[32px] lg2:text-[40px] lg2:leading-[54px]">
                Đừng bỏ lỡ cơ hội đầu tư của bạn
              </h3>
              <p className="mb-5 mt-4 text-[14px] font-medium leading-[22px] text-[#FFF] lg:mb-10 lg:text-base lg2:text-[18px] lg2:leading-[28px]">
                Tăng tốc giao dịch nhanh chóng với ứng dụng di động cá nhân hoá
                riêng cho bạn.
              </p>
              <div>
                <button className="btn active">
                  Mở tài khoản ngay
                  <div className="relative h-4 w-4 lg:h-6 lg:w-6">
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
              className="relative w-full pt-[55%] md:h-[256px] md:w-[390px] lg:h-[340px] lg:w-[500px] lg2:h-[380px] lg2:w-[638px] 2xl:w-[700px]"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <NextImg
                src="/assets/image/banner-course2.png"
                alt="Capi"
                objectFit="cover"
                className="object-left"
              />
            </div>
            {/* <div
              className="relative w-full h-[255px] flex justify-start lg:hidden"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <NextImg
                src="/assets/image/banner-course3.png"
                alt="Capi"
                objectFit="contain"
              />
            </div> */}
          </div>
        </div>
        {/* section 2 */}
        <div
          className="mt-16 lg:mt-[120px]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="text-[14px] font-medium leading-[22px] text-[#FF6D00] lg:text-[16px] lg2:text-[18px] xl:leading-[40px]">
            #kienthucchungkhoan
          </span>
          <h2 className="mb-3 mt-2 text-[20px] font-bold text-[#141414] lg:text-[24px] lg2:mb-5 lg2:text-[40px] lg2:leading-[46px] 2xl:text-[44px] 2xl:leading-[52px] 3xl:text-[48px] 3xl:leading-[54px]">
            Kiến thức nâng cao
          </h2>
          <p className="text-[14px] font-medium leading-[28px] text-[#111013] lg:text-[16px] lg2:text-[18px]">
            Chuyên nghiệp hơn nữa, tự do tài chính hơn nữa
          </p>
        </div>
        <div className="mt-6 lg:mt-10 2xl:mt-20">
          <div className="flex flex-col gap-3 md:grid md:grid-cols-3 lg:gap-6 2xl:gap-10">
            {courses.map((course, index) => {
              const delay = ((index % 3) + 1) * 200;

              return (
                <div
                  key={index}
                  className="flex flex-col justify-between gap-10 rounded-[12px] bg-[#FFF1DD] p-5 transition-all duration-300 ease-in hover:bg-[#FFAD36] md:gap-6 lg:rounded-2xl lg:p-[30px] lg2:gap-10 lg2:p-10 2xl:gap-6"
                  data-aos="fade-up"
                  data-aos-delay={delay}
                >
                  <div>
                    <h4 className="text-[20px] font-bold text-[#111013] lg:text-[24px] lg:leading-[40px] lg2:text-[30px] 2xl:text-[32px]">
                      {course.title}
                    </h4>
                    <p className="mt-2 text-[14px] font-medium leading-[22px] text-[#111013] lg:mt-3 lg:text-[16px] lg:leading-[28px] lg2:mt-4 lg2:text-[18px]">
                      {course.description}
                    </p>
                  </div>
                  <div className="relative h-[190px] w-full md:h-[160px] lg:h-[240px] 2xl:h-[288px]">
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
