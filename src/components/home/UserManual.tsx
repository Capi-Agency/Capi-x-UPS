import React from "react";
import NextImg from "../common/next-img";
import TooltipProgress from "../common/tooltip-progress/page";

type Props = {};

const UserManual = (props: Props) => {
  return (
    <>
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
    </>
  );
};

export default UserManual;
