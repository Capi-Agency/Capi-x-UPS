import React from "react";
import NextImg from "../common/next-img";

type Props = {};
const features = [
  {
    id: 1,
    title: "Sáng tạo",
    description:
      "Tiên phong trong công nghệ tài chính, mang đến giải pháp đầu tư đột phá và khác biệt, giúp khách hàng trải nghiệm đầu tư một cách dễ dàng và thú vị.",
  },
  {
    id: 2,
    title: "Tin cậy",
    description:
      "Xây dựng niềm tin vững chắc qua sự trung thực và minh bạch trong mọi hoạt động, luôn đặt lợi ích và trải nghiệm của khách hàng lên hàng đầu.",
  },
  {
    id: 3,
    title: "Hiệu quả",
    description:
      "Tập trung tối ưu hóa kết quả đầu tư, tạo ra giá trị thực và cộng đồng đầu tư bền vững cho khách hàng.",
  },
];

const AboutContent = (props: Props) => {
  return (
    <>
      <div className="custom-container  ">
        <div className="md:grid md:grid-cols-2 md:gap-0 gap-6 flex flex-col md:mt-0 mt-10">
          <div
            className="flex flex-col gap-4 place-self-end"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="text-[#00D763] text-[14px] lg:text-base lg2:text-[18px] 3xl:text-2xl font-semibold uppercase leading-normal">
              Tầm nhìn
            </span>
            <p className="text-[#141414] text-[20px] lg:text-[24px] lg2:text-[40px] 2xl:text-[44px] 3xl:text-[48px] font-bold lg2:leading-[46px] 2xl:leading-[52px] 3xl:leading-[54px]">
              Trở thành Công ty chứng khoán bán lẻ hàng đầu cung cấp các giải
              pháp tài chính đầu tư cá nhân dành cho thế hệ trẻ
            </p>
          </div>
          <div
            className="bg-[#23252B] p-5 lg:p-10 lg2:p-[50px] 2xl:p-[60px] w-full md:w-[340px] md:h-[320px] lg:w-[380px] lg:h-[360px] lg2:w-[450px] lg2:h-[460px] 2xl:h-[492px] place-content-end justify-self-end "
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="bg-[#33363F] w-10 h-10 lg:w-[60px] lg:h-[60px] 2xl:w-20 2xl:h-20 flex items-center justify-center">
              <div className="relative w-3 h-3 lg:w-[18px] lg:h-[18px] 2xl:w-6 2xl:h-6">
                <NextImg
                  src="/assets/icons/share2.svg"
                  alt="Capi"
                  objectFit="cover"
                />
              </div>
            </div>
            <p className="text-[14px] lg:text-base lg2:text-[18px] 3xl:text-[20px] font-medium tracking-[0.28px] lg:tracking-[0.4px] leading-[22px] lg2:leading-[28px] 3xl:leading-[30px] text-[#FFF] mt-3 lg:mt-[32px] mb-4">
              Tạo ra không gian đầu tư độc đáo, mới mẻ tràn đầy hứng khởi, từ đó
              định hình lại cách nhà đầu tư tiếp cận và trải nghiệm đầu tư tài
              chính cá nhân.
            </p>
            <span className="text-[#00D763] text-[14px] lg:text-base lg2:text-[18px] 3xl:text-2xl font-semibold lg2:leading-[28px] 3xl:leading-normal uppercase">
              Sứ mệnh
            </span>
          </div>
        </div>
      </div>
      <div className="custom-container mt-10 md:mt-20 lg:mt-[100px] 3xl:mt-[130px]">
        <div className="md:grid md:grid-cols-[278px,auto] lg:grid-cols-2 lg:gap-[30px] flex flex-col gap-10">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-col justify-between"
          >
            <div>
              <span className="text-[#111013] text-[14px] md:text-[20px] lg:text-[30px] 2xl:text-[32px] font-bold leading-[40px]">
                Giá trị cốt lõi
              </span>
              <div className="bg-[#60606B] w-full h-[1px] my-3 md:my-2 lg:my-4 lg:mb-8"></div>
              <p className="text-[#111013] text-[14px] lg:text-[18px] font-medium leading-[28px]">
                Chúng tôi không ngừng nỗ lực cho mục tiêu
              </p>
            </div>
            <div className="relative w-[186px] h-[200px] lg:w-[233px] lg:h-[250px] lg:mt-0 mt-10">
              <NextImg
                src="/assets/image/ups-box.png"
                alt="Capi"
                objectFit="cover"
              />
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="600">
            <div className="md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-6 lg:gap-x-[30px] lg:gap-y-[50px] flex flex-col gap-10">
              {features.map(({ id, title, description }) => (
                <div key={id} className="col-span-1">
                  <span className="text-[#111013] text-[14px] lg:text-[18px] font-medium leading-[40px]">
                    #{id}
                  </span>
                  <div className="w-full bg-[#60606B] h-[1px] my-3 md:my-2 lg:my-4"></div>
                  <h4 className="text-[#111013] text-[20px] lg:text-[30px] 2xl:text-[32px] font-bold 2xl:leading-[40px] lg2:mb-5 mb-2">
                    {title}
                  </h4>
                  <p className="text-[#111013] text-[14px] lg:text-[18px] font-medium leading-[22px] lg:leading-[28px]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
