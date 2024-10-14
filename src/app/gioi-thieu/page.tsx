import BannerAbout from "@/components/about-us/Banner-about";
import SlideAbout from "@/components/about-us/SlideAbout";
import NextImg from "@/components/common/next-img";
import React from "react";

type Props = {};

const GioiThieu = (props: Props) => {
  return (
    <>
      {/* Banner Giới thiệu */}
      <BannerAbout />
      <div>
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1600px] px-4 lg:px-20">
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-4 place-self-end">
              <span className="text-[#00D763] text-2xl font-semibold uppercase leading-normal">
                Tầm nhìn
              </span>
              <p className="text-[#141414] text-[48px] font-bold leading-[54px]">
                Trở thành Công ty chứng khoán bán lẻ hàng đầu cung cấp các giải
                pháp tài chính đầu tư cá nhân dành cho thế hệ trẻ
              </p>
            </div>
            <div className="bg-[#23252B] p-[60px] w-[62%] justify-self-end">
              <div className="bg-[#33363F] w-20 h-20 flex items-center justify-center mt-[60px]">
                <div className="relative w-6 h-6">
                  <NextImg
                    src="/assets/icons/share2.svg"
                    alt="Capi"
                    objectFit="cover"
                  />
                </div>
              </div>
              <p className="text-[20px] font-medium tracking-[0.4px] leading-[30px] text-[#FFF] mt-[32px] mb-4">
                Tạo ra không gian đầu tư độc đáo, mới mẻ tràn đầy hứng khởi, từ
                đó định hình lại cách nhà đầu tư tiếp cận và trải nghiệm đầu tư
                tài chính cá nhân.
              </p>
              <span className="text-[#00D763] text-2xl font-semibold uppercase">
                Sứ mệnh
              </span>
            </div>
          </div>
        </div>
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1600px] px-4 lg:px-20 mt-[160px]">
          <div className="grid grid-cols-2 gap-[30px]">
            <div>
              <span className="text-[#111013] text-[32px] font-bold leading-[40px]">
                Giá trị cốt lõi
              </span>
              <div className="bg-[#60606B] w-[60%] h-[1px] mt-4"></div>
              <p className="text-[#111013] text-[18px] font-medium leading-[28px] mt-8">
                Chúng tôi không ngừng nỗ lực cho mục tiêu
              </p>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-[30px]">
                <div className="flex flex-col gap-[30px]">
                  <div>
                    <span className="text-[#111013] text-[18px] font-medium leading-[40px]">
                      #1
                    </span>
                    <div className="w-full bg-[#60606B] h-[1px] my-4"></div>
                    <h4 className="text-[#111013] text-[32px] font-bold leading-[40px]">
                      Sáng tạo
                    </h4>
                    <p className="text-[#111013] text-[18px] font-medium leading-[28px]">
                      Tiên phong trong công nghệ tài chính, mang đến giải pháp
                      đầu tư đột phá và khác biệt, giúp khách hàng trải nghiệm
                      đầu tư một cách dễ dàng và thú vị.
                    </p>
                  </div>
                  <div>
                    <span className="text-[#111013] text-[18px] font-medium leading-[40px]">
                      #3
                    </span>
                    <div className="w-full bg-[#60606B] h-[1px] my-4"></div>
                    <h4 className="text-[#111013] text-[32px] font-bold leading-[40px]">
                      Hiệu quả
                    </h4>
                    <p className="text-[#111013] text-[18px] font-medium leading-[28px]">
                      Tập trung tối ưu hóa kết quả đầu tư, tạo ra giá trị thực
                      và cộng đồng đầu tư bền vững cho khách hàng.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <span className="text-[#111013] text-[18px] font-medium leading-[40px]">
                      #2
                    </span>
                    <div className="w-full bg-[#60606B] h-[1px] my-4"></div>
                    <h4 className="text-[#111013] text-[32px] font-bold leading-[40px]">
                      Tin cậy
                    </h4>
                    <p className="text-[#111013] text-[18px] font-medium leading-[28px]">
                      Xây dựng niềm tin vững chắc qua sự trung thực và minh bạch
                      trong mọi hoạt động, luôn đặt lợi ích và trải nghiệm của
                      khách hàng lên hàng đầu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1600px] px-4 lg:px-20 mt-[160px]">
          <div className="grid grid-cols-2 gap-[30px]">
            <div className="relative w-full h-[700px]">
              <NextImg
                src="/assets/image/director-1.jpg"
                alt="Capi"
                objectFit="cover"
                className="rounded-[24px]"
              />
            </div>
            <div className="bg-[#F3F3FB] rounded-[24px] p-10">
              <span className="text-[#111013] text-[40px] font-bold leading-[54px]">
                Ông Nguyễn Quang Đạt
              </span>
              <p className="text-[#161519] text-[16px] font-bold leading-[26px] uppercase tracking-[0.32px] my-4">
                Tổng giám đốc
              </p>
              <p className="text-[#111013] text-[18px] font-medium leading-[26px]">
                A global brand entrusted us with a unique challenge: crafting an
                internal tool to share its brand story with every employee, from
                sales to product…
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[30px] mt-[30px]">
            <div className="bg-[#F3F3FB] rounded-[24px] p-10">
              <span className="text-[#111013] text-[40px] font-bold leading-[54px]">
                Ông Nguyễn Quang Đạt
              </span>
              <p className="text-[#161519] text-[16px] font-bold leading-[26px] uppercase tracking-[0.32px] my-4">
                Tổng giám đốc
              </p>
              <p className="text-[#111013] text-[18px] font-medium leading-[26px]">
                A global brand entrusted us with a unique challenge: crafting an
                internal tool to share its brand story with every employee, from
                sales to product…
              </p>
            </div>
            <div className="relative w-full h-[700px]">
              <NextImg
                src="/assets/image/director-2.jpg"
                alt="Capi"
                objectFit="cover"
                className="rounded-[24px]"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[30px] mt-[30px]">
            <div className="relative w-full h-[700px]">
              <NextImg
                src="/assets/image/director-3.jpg"
                alt="Capi"
                objectFit="cover"
                className="rounded-[24px]"
              />
            </div>
            <div className="bg-[#F3F3FB] rounded-[24px] p-10">
              <span className="text-[#111013] text-[40px] font-bold leading-[54px]">
                Ông Nguyễn Quang Đạt
              </span>
              <p className="text-[#161519] text-[16px] font-bold leading-[26px] uppercase tracking-[0.32px] my-4">
                Tổng giám đốc
              </p>
              <p className="text-[#111013] text-[18px] font-medium leading-[26px]">
                A global brand entrusted us with a unique challenge: crafting an
                internal tool to share its brand story with every employee, from
                sales to product…
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#23252B] py-[160px] my-[160px]">
          <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1600px] px-4 lg:px-20">
            <div className="flex flex-col gap-[100px]">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[#FFF] text-[30px] font-bold leading-normal">
                    Dịch vụ chứng khoán
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#FFF] text-[18px] font-medium leading-[28px]">
                      Xem tất cả
                    </span>
                    <div className="relative w-[24px] h-[24px]">
                      <NextImg
                        src="/assets/icons/arrow_forward.svg"
                        alt="Capi"
                        objectFit="cover"
                        className=""
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full bg-[#60606B] h-[1px] mt-5 mb-10"></div>
                <div className="">
                  <SlideAbout />
                </div>
              </div>
              <div>123</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GioiThieu;
