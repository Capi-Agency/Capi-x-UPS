import React from "react";
import NextImg from "../common/next-img";

type Props = {};

const AboutContent = (props: Props) => {
  return (
    <>
      <div className="custom-container  ">
        <div className="lg:grid lg:grid-cols-2 lg:gap-0 gap-6 flex flex-col lg:mt-0 mt-10">
          <div
            className="flex flex-col gap-4 place-self-end"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="text-[#00D763] text-[14px] lg:text-2xl font-semibold uppercase leading-normal">
              Tầm nhìn
            </span>
            <p className="text-[#141414] text-[20px] lg:text-[48px] font-bold lg:leading-[54px]">
              Trở thành Công ty chứng khoán bán lẻ hàng đầu cung cấp các giải
              pháp tài chính đầu tư cá nhân dành cho thế hệ trẻ
            </p>
          </div>
          <div
            className="bg-[#23252B] p-5 lg:p-[60px] w-full lg:w-[62%] justify-self-end"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="bg-[#33363F] w-10 h-10 lg:w-20 lg:h-20 flex items-center justify-center mt-0 lg:mt-[60px]">
              <div className="relative w-3 h-3 lg:w-6 lg:h-6">
                <NextImg
                  src="/assets/icons/share2.svg"
                  alt="Capi"
                  objectFit="cover"
                />
              </div>
            </div>
            <p className="text-[14px] lg:text-[20px] font-medium tracking-[0.28px] lg:tracking-[0.4px] leading-[22px] lg:leading-[30px] text-[#FFF] mt-3 lg:mt-[32px] mb-4">
              Tạo ra không gian đầu tư độc đáo, mới mẻ tràn đầy hứng khởi, từ đó
              định hình lại cách nhà đầu tư tiếp cận và trải nghiệm đầu tư tài
              chính cá nhân.
            </p>
            <span className="text-[#00D763] text-[14px] lg:text-2xl font-semibold uppercase">
              Sứ mệnh
            </span>
          </div>
        </div>
      </div>
      <div className="custom-container mt-10 lg:mt-[160px]">
        <div className="lg:grid lg:grid-cols-2 lg:gap-[30px] flex flex-col gap-10">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-col justify-between"
          >
            <div>
              <span className="text-[#111013] text-[14px] lg:text-[32px] font-bold lg:leading-[40px]">
                Giá trị cốt lõi
              </span>
              <div className="bg-[#60606B] w-full h-[1px] mt-3 lg:mt-4"></div>
              <p className="text-[#111013] text-[14px] lg:text-[18px] font-medium leading-[28px] mt-3 lg:mt-8">
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
            <div className="flex flex-col lg:gap-[50px] gap-10">
              <div className="lg:grid lg:grid-cols-2 lg:gap-[30px] flex flex-col gap-10">
                <div>
                  <span className="text-[#111013] text-[14px] lg:text-[18px] font-medium leading-[40px]">
                    #1
                  </span>
                  <div className="w-full bg-[#60606B] h-[1px] my-2 lg:my-4"></div>
                  <h4 className="text-[#111013] text-[20px] lg:text-[32px] font-bold leading-[40px]">
                    Sáng tạo
                  </h4>
                  <p className="text-[#111013] text-[14px] lg:text-[18px] font-medium leading-[22px] lg:leading-[28px]">
                    Tiên phong trong công nghệ tài chính, mang đến giải pháp đầu
                    tư đột phá và khác biệt, giúp khách hàng trải nghiệm đầu tư
                    một cách dễ dàng và thú vị.
                  </p>
                </div>
                <div>
                  <span className="text-[#111013] text-[14px] lg:text-[18px] font-medium leading-[40px]">
                    #2
                  </span>
                  <div className="w-full bg-[#60606B] h-[1px] my-2 lg:my-4"></div>
                  <h4 className="text-[#111013] text-[20px] lg:text-[32px] font-bold leading-[40px]">
                    Tin cậy
                  </h4>
                  <p className="text-[#111013] text-[14px] lg:text-[18px] font-medium leading-[22px] lg:leading-[28px]">
                    Xây dựng niềm tin vững chắc qua sự trung thực và minh bạch
                    trong mọi hoạt động, luôn đặt lợi ích và trải nghiệm của
                    khách hàng lên hàng đầu.
                  </p>
                </div>
              </div>

              <div className="lg:w-[50%]">
                <span className="text-[#111013] text-[14px] lg:text-[18px] font-medium leading-[40px]">
                  #3
                </span>
                <div className="w-full bg-[#60606B] h-[1px] my-2 lg:my-4"></div>
                <h4 className="text-[#111013] text-[20px] lg:text-[32px] font-bold leading-[40px]">
                  Hiệu quả
                </h4>
                <p className="text-[#111013] text-[14px] lg:text-[18px] font-medium leading-[22px] lg:leading-[28px]">
                  Tập trung tối ưu hóa kết quả đầu tư, tạo ra giá trị thực và
                  cộng đồng đầu tư bền vững cho khách hàng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
