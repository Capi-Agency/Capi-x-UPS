"use client";
import React, { useState } from "react";
import NextImg from "../common/next-img";
import TooltipProgress from "../common/tooltip-progress/page";

type Props = {};

interface OpenItemsState {
  item1: boolean;
  item2: boolean;
  item3: boolean;
}
const Content = (props: Props) => {
  const [openItems, setOpenItems] = useState<OpenItemsState>({
    item1: false,
    item2: false,
    item3: false,
  });

  const toggleAccordion = (item: keyof OpenItemsState) => {
    setOpenItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };
  return (
    <>
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1600px] px-4 lg:px-20 mt-[160px]">
        {/* section 1 */}
        <div className="grid grid-cols-3 gap-[30px]">
          <div className="bg-[url('/assets/image/bg-card.png')] w-full h-[534px] bg-cover bg-center rounded-3xl p-10 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <span className="text-[#FFF] text-[40px] font-bold leading-[50px]">
                Cộng đồng chất lượng của UPS
              </span>
              <span className="text-[#FFF] text-[18px] font-medium leading-[28px]">
                Cho chặng đường đầu tư luôn có UPS đồng hành bên bạn
              </span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex flex-col gap-3">
                <div className="border border-[#FFF] rounded-full w-[50px] h-[50px] flex items-center justify-center">
                  <div className="relative w-[18px] h-[14px]">
                    <NextImg
                      src="/assets/icons/tele.svg"
                      alt="Capi"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[#FFF] text-sm font-bold leading-normal">
                    Telegram
                  </span>
                  <span className="text-[#FFF] text-xs font-medium leading-normal">
                    3k người dùng
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="border border-[#FFF] rounded-full w-[50px] h-[50px] flex items-center justify-center">
                  <div className="relative w-[10px] h-[21px]">
                    <NextImg
                      src="/assets/icons/fb.svg"
                      alt="Capi"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[#FFF] text-sm font-bold leading-normal">
                    Facebook
                  </span>
                  <span className="text-[#FFF] text-xs font-medium leading-normal">
                    8k người dùng
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="border border-[#FFF] rounded-full w-[50px] h-[50px] flex items-center justify-center">
                  <div className="relative w-[18px] h-[18px]">
                    <NextImg
                      src="/assets/image/zalo.png"
                      alt="Capi"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[#FFF] text-sm font-bold leading-normal">
                    Nhóm Zalo
                  </span>
                  <span className="text-[#FFF] text-xs font-medium leading-normal">
                    12k người dùng
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[url('/assets/image/bg-card2.png')] w-full h-[534px] bg-cover bg-center rounded-3xl relative p-10">
            <span className="text-[#111013] text-[40px] font-bold leading-[50px] absolute bottom-20">
              Nền tảng ứng dụng di động mới
            </span>
            <span className="text-[#111013] text-[18px] font-medium leading-[28px] absolute bottom-10">
              Tải ngay nền tảng di động.
            </span>
          </div>
          <div className="bg-[#00D763] p-10 rounded-3xl relative">
            <div className="bg-[#014227] w-20 h-20 flex items-center justify-center rounded-[20px]">
              <div className="relative w-6 h-6">
                <NextImg
                  src="/assets/icons/share.svg"
                  alt="Capi"
                  objectFit="cover"
                />
              </div>
            </div>
            <h3 className="text-[#014227] text-[40px] font-bold leading-[50px] mt-8 mb-4">
              UP Securities <br /> Dẫn lối hành trình đầu tư của bạn
            </h3>
            <span className="text-[#126240] text-[18px] font-medium leading-[28px]">
              Chính thức ra mắt dẫn lỗi hành trình đầu tư của bạn
            </span>
            <button className="absolute bottom-10 flex items-center bg-[#FFF] py-3 px-6 rounded-2xl text-[#014227] font-bold text-[18px] leading-normal">
              Mở tài khoản ngay
              <div className="relative w-6 h-6 ml-2">
                <NextImg
                  src="/assets/icons/UPs.svg"
                  alt="Capi"
                  objectFit="cover"
                />
              </div>
            </button>
          </div>
        </div>
        {/*  section 2*/}
        <div className="grid grid-cols-2 gap-[30px] mt-[30px]">
          <div className="bg-[url('/assets/image/bg-card3.png')] w-full h-[700px] bg-cover bg-center rounded-3xl pt-10 pl-10 relative">
            <span className="text-[#111013] text-[18px] leading-[28px] font-medium bg-[#02E56A] rounded-[10px] px-2 py-[2px]">
              Giao diện mới
            </span>
            <h3 className="text-[#014227] text-[40px] font-bold leading-[50px] mt-[18px] mb-4 w-[80%]">
              Mang trải nghiệm tối ưu tới nhà đầu tư của UPS
            </h3>
            <p className="text-[#126240] text-[18px] font-medium leading-[28px] w-[80%]">
              Lời hứa liên tục cập nhật sản phẩm và phát triển không ngừng vì
              trải nghiệm sử dụng của khác hàng
            </p>
            <div className="absolute left-10 bottom-0 right-0">
              <div className="relative w-full h-[422px] rounded-br-2xl">
                <NextImg
                  src="/assets/image/b752f4850174e5719c9f1eba8e43d4de.png"
                  alt="Capi"
                  objectFit="cover"
                  className="rounded-br-2xl rounded-tl-2xl object-top"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#F3F3FB] w-full h-[700px] bg-cover bg-center rounded-3xl relative pt-10 pl-10">
            <span className="text-[#FFFFFF] text-[18px] leading-[28px] font-medium bg-[#FE3B1F] rounded-[10px] px-2 py-[2px]">
              Khuyến mãi
            </span>
            <h3 className="text-[#014227] text-[40px] font-bold leading-[50px] mt-[18px] mb-4 w-[70%]">
              Tạo tài khoản ngay rinh quà liền tay
            </h3>
            <p className="text-[#126240] text-[18px] font-medium leading-[28px] w-[80%]">
              Margin lên tới 8.6% dành riêng cho người dùng mở mới sau
              20/10/2024
            </p>
            <div className="absolute left-10 bottom-0 right-10">
              <div className="relative w-full h-[422px] rounded-br-2xl">
                <NextImg
                  src="/assets/image/Frame 47205.png"
                  alt="Capi"
                  objectFit="cover"
                  className="rounded-t-2xl w-full h-full "
                />
                <div className="absolute bottom-7 right-9">
                  <span className="text-[#FFF] text-[40px] font-medium leading-normal">
                    Margin
                  </span>
                  <span className="text-[#FFF] text-[170px] font-light leading-none">
                    8.6<span className="text-[40px] font-semibold">%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section 3 */}
        <div className="grid grid-cols-3 gap-[30px] mt-[30px]">
          <div className="bg-[#F3F3FB] w-full h-[534px] rounded-3xl p-10 relative">
            <div className="flex flex-col gap-4">
              <span className="text-[#111013] text-[140px] font-bold leading-[140px]">
                9
              </span>
              <span className="text-[#111013] text-[40px] font-bold leading-[50px]">
                Dịch vụ tư vấn tài chính doanh nghiệp
              </span>
              <span className="text-[#111013] text-[18px] font-medium leading-[28px]">
                Chính thức ra mắt dẫn lỗi hành trình đầu tư của bạn
              </span>
              <div className="bg-[#E7E7EA] rounded-full flex items-center justify-center w-[214px] h-[30px] absolute bottom-10">
                <div className="bg-[linear-gradient(90deg,#1A4EF8_0%,#1DF553_100%)] w-[194px] h-[10px] rounded-3xl"></div>
              </div>
            </div>
          </div>
          <div className="bg-[#F3F3FB] w-full h-[534px] rounded-3xl relative p-10">
            <div className="relative w-[384px] h-[290px] rounded-br-2xl">
              <NextImg
                src="/assets/image/bieuphi.png"
                alt="Capi"
                objectFit="cover"
                className=""
              />
            </div>
            <div className="flex flex-col gap-4 mt-[70px]">
              <span className="text-[#111013] text-[40px] font-bold leading-[50px]">
                Biểu phí
              </span>
              <span className="text-[#111013] text-[18px] font-medium leading-[28px]">
                Cập nhật tới 12/20/2024
              </span>
            </div>
          </div>
          <div className="bg-[url('/assets/image/Frame16.png')] w-full h-[534px] bg-cover bg-center rounded-3xl p-10">
            <div className="bg-[#FFF] w-20 h-20 flex items-center justify-center rounded-[20px]">
              <div className="relative w-6 h-6">
                <NextImg
                  src="/assets/icons/share2.svg"
                  alt="Capi"
                  objectFit="cover"
                />
              </div>
            </div>
            <h3 className="text-[#FFF] text-[40px] font-bold leading-[50px] mt-8 mb-4 w-[90%]">
              Báo cáo tài chính doanh nghiệp
            </h3>
            <span className="text-[#CBC6D6] text-[18px] font-medium leading-[28px]">
              Liên tục cập nhật thông tin mới nhất
            </span>
          </div>
        </div>
      </div>
      {/* section 4 */}
      <div className="bg-[linear-gradient(180deg,#FFF_0%,#F3F3FB_100%)] py-[160px]">
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1600px] px-4 lg:px-20">
          <div className="px-[60px] py-[100px] grid grid-cols-[240px,420px,auto] gap-20 shadow-[0px_4px_54px_0px_rgba(0,0,0,0.05)] rounded-[32px] bg-[#FFF]">
            <div className="flex flex-col">
              <div className="flex flex-col gap-1">
                <span className="text-[#161519] text-[16px] font-medium leading-normal uppercase">
                  #HDSD
                </span>
                <span className="text-[#111013] text-[48px] font-bold leading-[54px]">
                  3 bước trở thành{" "}
                  <span className="text-[#00D763]">nhà đầu tư.</span>
                </span>
              </div>
              <div className="flex flex-col gap-3 my-[42px]">
                <span className="text-[#111013] text-[18px] font-bold leading-[28px] border-r-2 border-[#111013]">
                  Nền tảng Website
                </span>
                <span className="text-[#111013] text-[18px] font-bold leading-[28px]">
                  Nền tảng App Di động
                </span>
                <span className="text-[#111013] text-[18px] font-bold leading-[28px]">
                  Nạp tiền đầu tư
                </span>
                <span className="text-[#111013] text-[18px] font-bold leading-[28px]">
                  Đặt lệnh đầu tư
                </span>
              </div>
              <p className="text-[#161519] text-[18px] leading-[28px] tracking-[0.36px] mb-[42px]">
                Tìm kiểu thêm các hướng dẫn khác của{" "}
                <span className="font-bold">UPS</span>
              </p>
              <button className="flex items-center bg-[#014227] py-3 px-4 rounded-2xl text-[#02E56A] font-bold text-[18px] leading-normal w-[196px]">
                Hướng dẫn khác
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="ml-2"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.7595 5.98943C18.7595 5.79051 18.6804 5.59975 18.5398 5.4591C18.3991 5.31844 18.2084 5.23943 18.0095 5.23943L9.42518 5.23943C9.01096 5.23943 8.67518 5.57521 8.67518 5.98943C8.67518 6.40364 9.01096 6.73943 9.42518 6.73943L16.1992 6.73943L5.45858 17.4801C5.16569 17.773 5.16569 18.2478 5.45858 18.5407C5.75148 18.8336 6.22635 18.8336 6.51925 18.5407L17.2595 7.80053V14.5737C17.2595 14.9879 17.5952 15.3237 18.0095 15.3237C18.4237 15.3237 18.7595 14.9879 18.7595 14.5737L18.7595 5.98943Z"
                    fill="#02E56A"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-[#0F1B0E] p-10 rounded-2xl h-[534px]">
                <div className="relative w-[340px] h-[321px] rounded-br-2xl">
                  <NextImg
                    src="/assets/icons/illustration-2.svg"
                    alt="Capi"
                    objectFit="cover"
                    className=""
                  />
                </div>
                <div className="flex flex-col mt-5 gap-5">
                  <div className="flex flex-col gap-2">
                    <span className="text-[#FFF] font-bold leading-[140%] -tracking-[0.42px]">
                      Hành trình của bạn
                    </span>
                    <TooltipProgress percentage={93} />
                  </div>
                  <p className="text-[#FFF] leading-[27px%] -tracking-[0.32px]">
                    Chào mừng bạn đã tới UPS, tạo tài khoản ngay để không bỏ lỡ
                    cơ hội đầu tư.
                  </p>
                </div>
              </div>
              <div className="bg-[#0F1B0E] px-10 py-5 rounded-2xl">
                <p className="text-[#FFF] leading-[27px] tracking-[0.32px]">
                  Hoặc đăng ký qua{" "}
                  <span className="text-[#02E56A] font-bold">Tổng đài UPS</span>
                </p>
              </div>
            </div>

            <div>
              <span className="text-[#111013] font-bold text-[30px] leading-normal">
                Dễ dàng tham dự.
              </span>
              <div className="bg-[#F3F3FB] w-[60px] h-[60px] flex items-center justify-center rounded-full mt-8 mb-4">
                <div className="relative w-[52px] h-[52px]">
                  <NextImg
                    src="/assets/icons/vantay.svg"
                    alt="Capi"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[#111013] font-bold text-[20px] leading-[30px]">
                  1. Tạo tài khoản tức thì với UPS
                </span>
                <p className="text-[#111013] text-[18px] leading-[28px] tracking-[0.36px]">
                  <span className="font-bold">UPS</span> giúp bạn trở thành nhà
                  đầu tư ngay chỉ với 3 bước ngay trên thiết bị của bạn.
                  <span className="font-bold"> Tới trang tạo tài khoản</span>
                </p>
              </div>
              <div className="bg-[#F3F3FB] w-[60px] h-[60px] flex items-center justify-center rounded-full mt-8 mb-4">
                <div className="relative w-[29px] h-[26px]">
                  <NextImg
                    src="/assets/icons/TreeStructure.svg"
                    alt="Capi"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[#111013] font-bold text-[20px] leading-[30px]">
                  2. Nạp tiền đầu tư
                </span>
                <p className="text-[#111013] text-[18px] leading-[28px] tracking-[0.36px]">
                  Thao tác nạp tiền nhanh chóng vào tài khoản đầu tư chỉ với 1
                  bước đơn giải ngay trên{" "}
                  <span className="font-bold">trang nạp tiền đầu tư</span>
                </p>
              </div>
              <div className="bg-[#F3F3FB] w-[60px] h-[60px] flex items-center justify-center rounded-full mt-8 mb-4">
                <div className="relative w-[27px] h-[26px]">
                  <NextImg
                    src="/assets/icons/FlagBanner.svg"
                    alt="Capi"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[#111013] font-bold text-[20px] leading-[30px]">
                  3. Đặt lệnh đầu tư
                </span>
                <p className="text-[#111013] text-[18px] leading-[28px] tracking-[0.36px]">
                  Bắt đầu mua bán các sản phẩm cổ phiếu mà bạn yêu thích.{" "}
                  <span className="font-bold">Tới trang đặt lệnh đầu tư</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 5 */}
      <div className="bg-[#0F1B0E] mb-[180px] pt-[74px]">
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1600px] px-4 lg:px-20">
          <div className="px-[130px] grid grid-cols-2 ">
            <div className="flex flex-col gap-8 mt-20">
              <div className="flex flex-col gap-1">
                <div className="relative w-[111px] h-[48px]">
                  <NextImg
                    src="/assets/icons/Logo-small.svg"
                    alt="Capi"
                    objectFit="cover"
                    className="object-top"
                  />
                </div>
                <span className="text-[#02E56A] text-[18px] font-medium leading-[28px]">
                  Mobile App
                </span>
              </div>
              <span className="text-[#FFF] text-[60px] font-bold leading-[60px] w-[75%]">
                Trải nghiệm <span className="text-[#02E56A]">tuyệt vời</span>{" "}
                hơn với ứng dụng
              </span>
              <p className="text-[#8C9AA4] font-medium leading-[28px] text-[18px] w-[80%]">
                UPS là công ty chứng khoán đột phá dành cho thế hệ mới, nơi công
                nghệ và tư duy đổi mới, sáng tạo hợp nhất để đem lại trải nghiệm
                đầu tư thông minh, dễ dàng, và thú vị.
              </p>
              <div className="flex items-center gap-3">
                <div className="bg-[#111] flex items-center gap-[9px] p-[10px] pr-[50px] rounded-[9px]">
                  <div className="relative w-6 h-6">
                    <NextImg
                      src="/assets/icons/google-play1.svg"
                      alt="Capi"
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[rgba(255,255,255,0.79)] text-xs font-medium leading-normal uppercase">
                      Get it on
                    </span>
                    <span className="text-[#FFF] text-base font-semibold leading-[21px]">
                      Google Play
                    </span>
                  </div>
                </div>
                <div className="bg-[#111] flex items-center gap-[9px] p-[10px] pr-6 rounded-[9px]">
                  <div className="relative w-6 h-6">
                    <NextImg
                      src="/assets/icons/apple-logo1.svg"
                      alt="Capi"
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[rgba(255,255,255,0.79)] font-medium leading-normal text-xs uppercase">
                      Download on the
                    </span>
                    <span className="text-base text-[#FFF]   font-semibold leading-[21px]">
                      App Store
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[full] h-[830px]">
              <NextImg
                src="/assets/icons/Group47221.svg"
                alt="Capi"
                objectFit="cover"
                className="object-top"
              />
            </div>
          </div>
        </div>
      </div>
      {/* section 6 */}
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1600px] px-4 lg:px-20 mt-[160px]">
        <div className="flex flex-col text-center gap-2">
          <div className="relative w-[111px] h-[48px] mx-auto">
            <NextImg
              src="/assets/icons/logo-small2.svg"
              alt="Capi"
              objectFit="cover"
              className=""
            />
          </div>
          <span className="text-[#111013] text-[48px] font-bold leading-[56px]">
            Tham gia ngay cộng đồng <br />
            <span className="text-[#02E56A]">Nhà đầu tư UPS</span>
          </span>
          <div className="flex items-center gap-4 mx-auto mt-10">
            <div className="flex items-center bg-[#002013] rounded-xl gap-3 w-[140px] h-10 pl-[14px]">
              <div className="relative w-[19px] h-[19px]">
                <NextImg
                  src="/assets/icons/logo-bt.svg"
                  alt="Capi"
                  objectFit="cover"
                  className=""
                />
              </div>
              <span className="text-[#FFF] text-[16px] font-bold leading-normal">
                Cộng đồng
              </span>
            </div>
            <div className="flex items-center bg-[#002013] rounded-xl gap-3 w-[140px] h-10 pl-[14px]">
              <div className="relative w-[16px] h-[31px] place-items-end">
                <NextImg
                  src="/assets/icons/fb2.svg"
                  alt="Capi"
                  objectFit="cover"
                  className=""
                />
              </div>
              <span className="text-[#FFF] text-[16px] font-bold leading-normal">
                Facebook
              </span>
            </div>
            <div className="flex items-center bg-[#002013] rounded-xl gap-3 w-[140px] h-10 pl-[14px]">
              <div className="relative w-[22px] h-[18px]">
                <NextImg
                  src="/assets/icons/Path-3.svg"
                  alt="Capi"
                  objectFit="cover"
                  className=""
                />
              </div>
              <span className="text-[#FFF] text-[16px] font-bold leading-normal">
                Telegram
              </span>
            </div>
            <div className="flex items-center bg-[#002013] rounded-xl gap-3 w-[140px] h-10 pl-[14px]">
              <div className="relative w-[24px] h-[24px]">
                <NextImg
                  src="/assets/image/zalo.png"
                  alt="Capi"
                  objectFit="cover"
                  className=""
                />
              </div>
              <span className="text-[#FFF] text-[16px] font-bold leading-normal">
                Zalo
              </span>
            </div>
          </div>
        </div>
        {/* circle */}
        <div className="mt-20">
          <div className="relative w-full h-[317px]">
            <NextImg
              src="/assets/image/Frame 1597881493.png"
              alt="Capi"
              objectFit="cover"
              className=""
            />
          </div>
        </div>
        <div className="px-[160px] mt-[160px]">
          <div className="grid grid-cols-[600px,auto] gap-20">
            <div>
              <span className="text-[#111013] text-[48px] font-bold leading-[56px]">
                <span className="text-[#01C159]">Câu hỏi</span> thường gặp
              </span>
              <p className="text-[#000] text-[18px] font-medium leading-[28px] mt-8">
                Cập nhật các sản phẩm, dịch vụ mới nhất cũng như các hoạt động,
                sự kiện của UPS
              </p>
              <div className="mt-[60px] flex flex-col gap-[70px]">
                <div className="flex gap-5 relative">
                  <div className="bg-[#F3F3FB] w-[50px] h-[50px] min-w-[50px] flex items-center justify-center rounded-[10px]">
                    <div className="relative w-[24px] h-[24px]">
                      <NextImg
                        src="/assets/icons/document-text.svg"
                        alt="Capi"
                        objectFit="cover"
                        className=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <span className="text-[#15171E] text-[30px] font-semibold leading-normal mr-8">
                      Tôi có thể mở tài khoản giao dịch tại UPS qua các hình
                      thức nào?
                    </span>
                    {openItems.item1 && (
                      <p className="text-[#535662] text-[18px] font-medium leading-[28px]">
                        Để mở tài khoản giao dịch tại UPS, bạn có thể lựa chọn
                        một trong những cách sau đây: Cách 1: Mở tài khoản trực
                        tuyến qua website tại đây Cách 2: Mở tài khoản trực tiếp
                        tại quầy giao dịch của VPS. Để được hỗ trợ thêm, vui
                        lòng liên hệ hotline 0243.944.6666
                      </p>
                    )}
                  </div>
                  <div className="absolute top-2 right-0">
                    <div
                      className={`relative w-[32px] h-[32px] cursor-pointer transform duration-300 ease-in-out ${
                        openItems.item1 ? "" : "rotate-180"
                      }`}
                      onClick={() => toggleAccordion("item1")}
                    >
                      <NextImg
                        src="/assets/icons/chevron-down.svg"
                        alt="Capi"
                        objectFit="cover"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 relative">
                  <div className="bg-[#F3F3FB] w-[50px] h-[50px] min-w-[50px] flex items-center justify-center rounded-[10px]">
                    <div className="relative w-[24px] h-[24px]">
                      <NextImg
                        src="/assets/icons/document-text.svg"
                        alt="Capi"
                        objectFit="cover"
                        className=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <span className="text-[#15171E] text-[30px] font-semibold leading-normal mr-8">
                      Phí giao dịch tại UPS?
                    </span>
                    {openItems.item2 && (
                      <p className="text-[#535662] text-[18px] font-medium leading-[28px]">
                        Để mở tài khoản giao dịch tại UPS, bạn có thể lựa chọn
                        một trong những cách sau đây: Cách 1: Mở tài khoản trực
                        tuyến qua website tại đây Cách 2: Mở tài khoản trực tiếp
                        tại quầy giao dịch của VPS. Để được hỗ trợ thêm, vui
                        lòng liên hệ hotline 0243.944.6666
                      </p>
                    )}
                  </div>
                  <div className="absolute top-2 right-0">
                    <div
                      className={`relative w-[32px] h-[32px] cursor-pointer transform duration-300 ease-in-out ${
                        openItems.item2 ? "" : "rotate-180"
                      }`}
                      onClick={() => toggleAccordion("item2")}
                    >
                      <NextImg
                        src="/assets/icons/chevron-down.svg"
                        alt="Capi"
                        objectFit="cover"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 relative">
                  <div className="bg-[#F3F3FB] w-[50px] h-[50px] min-w-[50px] flex items-center justify-center rounded-[10px]">
                    <div className="relative w-[24px] h-[24px]">
                      <NextImg
                        src="/assets/icons/document-text.svg"
                        alt="Capi"
                        objectFit="cover"
                        className=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <span className="text-[#15171E] text-[30px] font-semibold leading-normal mr-8">
                      Sự khác biệt của UPS?
                    </span>
                    {openItems.item3 && (
                      <p className="text-[#535662] text-[18px] font-medium leading-[28px]">
                        Để mở tài khoản giao dịch tại UPS, bạn có thể lựa chọn
                        một trong những cách sau đây: Cách 1: Mở tài khoản trực
                        tuyến qua website tại đây Cách 2: Mở tài khoản trực tiếp
                        tại quầy giao dịch của VPS. Để được hỗ trợ thêm, vui
                        lòng liên hệ hotline 0243.944.6666
                      </p>
                    )}
                  </div>
                  <div className="absolute top-2 right-0">
                    <div
                      className={`relative w-[32px] h-[32px] cursor-pointer transform duration-300 ease-in-out ${
                        openItems.item3 ? "" : "rotate-180"
                      }`}
                      onClick={() => toggleAccordion("item3")}
                    >
                      <NextImg
                        src="/assets/icons/chevron-down.svg"
                        alt="Capi"
                        objectFit="cover"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-[60px] bg-[#F3F3FB] rounded-3xl">
              <div className="relative w-[324px] h-[350px]">
                <NextImg
                  src="/assets/icons/group-5.svg"
                  alt="Capi"
                  objectFit="cover"
                  className=""
                />
              </div>
              <p className="text-[#535662] text-[18px] font-semibold leading-[28px] mt-[52px] mb-[50px]">
                Bạn chưa tìm thấy câu trả lời phù hợp? Đi tới trung tâm hỗ trợ
              </p>
              <button className="flex items-center bg-[#014227] py-3 px-4 rounded-2xl text-[#02E56A] font-bold text-[18px] leading-normal w-[202px]">
                Trung tâm hỗ trợ
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="ml-2"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.7595 5.98943C18.7595 5.79051 18.6804 5.59975 18.5398 5.4591C18.3991 5.31844 18.2084 5.23943 18.0095 5.23943L9.42518 5.23943C9.01096 5.23943 8.67518 5.57521 8.67518 5.98943C8.67518 6.40364 9.01096 6.73943 9.42518 6.73943L16.1992 6.73943L5.45858 17.4801C5.16569 17.773 5.16569 18.2478 5.45858 18.5407C5.75148 18.8336 6.22635 18.8336 6.51925 18.5407L17.2595 7.80053V14.5737C17.2595 14.9879 17.5952 15.3237 18.0095 15.3237C18.4237 15.3237 18.7595 14.9879 18.7595 14.5737L18.7595 5.98943Z"
                    fill="#02E56A"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
