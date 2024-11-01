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
      <div className="custom-container 3xl:!max-w-[1280px] mt-12 lg2:mt-20 2xl:mt-[100px] 3xl:mt-[120px]">
        {/* banner 2 */}
        <div className="bg-[#000] rounded-[12px] lg:rounded-[24px]">
          <div className="flex flex-col-reverse md:grid md:grid-cols-[40%,auto] lg2:grid-cols-[32%,auto] md:items-center md:justify-between lg:gap-0 gap-5">
            <div
              className="md:py-0 md:pl-5 lg:pl-10 lg2:pl-[50px] md:pr-0 p-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-[#FFF] text-[20px] lg:text-[32px] lg2:text-[40px] font-bold lg2:leading-[54px]">
                Đừng bỏ lỡ cơ hội đầu tư của bạn
              </h3>
              <p className="text-[#FFF] text-[14px] lg:text-base lg2:text-[18px] font-medium leading-[22px] lg2:leading-[28px] mt-4 mb-5 lg:mb-10">
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
              className="relative w-full pt-[55%] md:w-[390px] md:h-[256px] lg:w-[500px] lg:h-[340px] lg2:w-[638px] 2xl:w-[700px] lg2:h-[380px]"
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
          <span className="text-[#FF6D00] text-[14px] lg:text-[16px] lg2:text-[18px] font-medium leading-[22px] xl:leading-[40px]">
            #kienthucchungkhoan
          </span>
          <h2 className="text-[#141414] text-[20px] lg:text-[24px] lg2:text-[40px] 2xl:text-[44px] 3xl:text-[48px] font-bold lg2:leading-[46px] 2xl:leading-[52px] 3xl:leading-[54px] mt-2 mb-3 lg2:mb-5">
            Kiến thức nâng cao
          </h2>
          <p className="text-[#111013] text-[14px] lg:text-[16px] lg2:text-[18px] font-medium leading-[28px]">
            Chuyên nghiệp hơn nữa, tự do tài chính hơn nữa
          </p>
        </div>
        <div className="mt-6 lg:mt-10 2xl:mt-20">
          <div className="md:grid md:grid-cols-3 flex flex-col gap-3 lg:gap-6 2xl:gap-10">
            {courses.map((course, index) => {
              const delay = ((index % 3) + 1) * 200;

              return (
                <div
                  key={index}
                  className="p-5 lg:p-[30px] lg2:p-10 rounded-[12px] lg:rounded-2xl bg-[#FFF1DD] flex flex-col justify-between gap-10 md:gap-6 lg2:gap-10 2xl:gap-6 hover:bg-[#FFAD36] transition-all duration-300 ease-in "
                  data-aos="fade-up"
                  data-aos-delay={delay}
                >
                  <div>
                    <h4 className="text-[#111013] text-[20px] lg:text-[24px] lg2:text-[30px] 2xl:text-[32px] font-bold lg:leading-[40px]">
                      {course.title}
                    </h4>
                    <p className="text-[#111013] text-[14px] lg:text-[16px] lg2:text-[18px] font-medium leading-[22px] lg:leading-[28px] mt-2 lg:mt-3 lg2:mt-4">
                      {course.description}
                    </p>
                  </div>
                  <div className="relative  w-full h-[190px] md:h-[160px] lg:h-[240px] 2xl:h-[288px]">
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
