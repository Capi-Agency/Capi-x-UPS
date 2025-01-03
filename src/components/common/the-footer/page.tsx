'use client';
import Link from 'next/link';
import React from 'react';
import NextImg from '../next-img';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

type Props = {};

const TheFooter = (props: Props) => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className="relative mt-10 bg-[#0F1B0E] text-[#FFF] lg:mt-[60px] lg2:mt-20 xl:mt-[100px] 2xl:mt-[120px] 3xl:mt-[160px]">
      <div className="custom-container pb-6 pt-10 md:py-10 lg2:pb-[52px] lg2:pt-[50px] xl:pt-[70px] 3xl:pb-[72px] 3xl:pt-[120px]">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[40%,60%] lg:gap-0 lg2:grid-cols-[45%,55%] 2xl:grid-cols-[50%,50%]">
          <div
            className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-10 lg:flex lg:gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
          >
            <span className="w-[90%] text-[20px] font-bold text-[#FFF] lg:w-[85%] lg:text-[24px] lg2:text-[40px] lg2:leading-[46px] 2xl:w-[70%] 2xl:text-[44px] 2xl:leading-[52px] 3xl:text-[48px] 3xl:leading-[56px]">
              <span className="text-[#02E56A]">
                Kiến tạo tương lai vẹn toàn
              </span>{' '}
              với nền tảng đầu tư đột phá
            </span>
            <p className="text-[14px] font-medium leading-[22px] text-[#8C9AA4] lg:w-[80%] lg:text-base lg:leading-[28px] lg2:text-[18px] 2xl:w-[70%]">
              UPS là công ty chứng khoán đột phá dành cho thế hệ mới, nơi công
              nghệ và tư duy đổi mới, sáng tạo hợp nhất để đem lại trải nghiệm
              đầu tư thông minh, dễ dàng, và thú vị.
            </p>
          </div>
          <div
            className="grid md:grid-cols-2 md:gap-10 lg:grid-cols-[auto,230px] lg:gap-[50px]"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="700"
          >
            <div className="flex flex-col">
              {/* <p className="mb-3 border-b border-[#8C9AA4] pb-3 text-[14px] font-medium leading-[22px] text-[#8C9AA4] lg:mb-4 lg:pb-4 lg:text-base lg:leading-[28px] lg2:text-[18px]">
                UPS là công ty chứng khoán đột phá dành cho thế hệ mới, nơi công
                nghệ và tư duy đổi mới, sáng tạo hợp nhất để đem lại trải
              </p> */}
              <div className="flex flex-col gap-[6px]">
                <div className="flex items-center gap-[6px]">
                  <div className="relative h-[19px] w-[19px]">
                    <NextImg
                      src="/assets/icons/verify.svg"
                      alt="Capi"
                      objectFit="cover"
                      className=""
                    />
                  </div>
                  <p className="text-[14px] font-medium leading-[22px] text-[#8C9AA4] lg:text-base lg:leading-[28px] lg2:text-[18px]">
                    Trung tâm hỗ trợ thuận tiện
                  </p>
                </div>
                <div className="flex items-center gap-[6px]">
                  <div className="relative h-[19px] w-[19px]">
                    <NextImg
                      src="/assets/icons/verify.svg"
                      alt="Capi"
                      objectFit="cover"
                      className=""
                    />
                  </div>
                  <p className="text-[14px] font-medium leading-[22px] text-[#8C9AA4] lg:text-base lg:leading-[28px] lg2:text-[18px]">
                    Chuyên viên tư vấn chuyên nghiệp
                  </p>
                </div>
                <div className="flex items-center gap-[6px]">
                  <div className="relative h-[19px] w-[19px]">
                    <NextImg
                      src="/assets/icons/verify.svg"
                      alt="Capi"
                      objectFit="cover"
                      className=""
                    />
                  </div>
                  <p className="text-[14px] font-medium leading-[22px] text-[#8C9AA4] lg:text-base lg:leading-[28px] lg2:text-[18px]">
                    Phản hồi thông tin nhanh chóng
                  </p>
                </div>
              </div>
            </div>
            <Link
              href={`https://onboarding.upstock.com.vn/index.html#/./open-account/check-info`}
              className="mt-10 md:mt-0"
            >
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
              <p className="mt-6 hidden text-sm font-medium text-[#6E767C] md:block lg:text-base">
                Cảm ơn bạn đã tới với nền tảng giao dịch chứng khoán UP
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="h-[1px] w-full bg-[#014227]"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="700"
      ></div>
      <div className="custom-container pb-10 pt-6 md:py-10 lg:pb-[50px] xl:py-[70px] 3xl:py-[120px]">
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 2xl:grid 2xl:grid-cols-[324px,auto] 2xl:gap-[40px] 3xl:grid-cols-[464px,auto] 3xl:gap-[60px]">
          <div
            className="flex flex-col gap-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
          >
            <Link href="/" title="Ups" className="inline-flex items-center">
              <div className="relative h-10 w-[167px] rounded-br-2xl lg:h-[44px] lg:w-[184px]">
                <NextImg
                  src="/assets/icons/logo-ups.svg"
                  alt="Capi"
                  objectFit="cover"
                  className=""
                />
              </div>
            </Link>
            <div className="flex flex-col gap-5">
              <div className="flex gap-2">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    className="size-5 lg:size-6"
                    fill="none"
                  >
                    <path
                      d="M12 14.2713C13.7231 14.2713 15.12 12.8744 15.12 11.1513C15.12 9.42812 13.7231 8.03125 12 8.03125C10.2769 8.03125 8.88 9.42812 8.88 11.1513C8.88 12.8744 10.2769 14.2713 12 14.2713Z"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M3.62001 9.33082C5.59001 0.670823 18.42 0.680823 20.38 9.34082C21.53 14.4208 18.37 18.7208 15.6 21.3808C13.59 23.3208 10.41 23.3208 8.39001 21.3808C5.63001 18.7208 2.47001 14.4108 3.62001 9.33082Z"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                </i>
                <p className="text-sm text-[#FFF] lg:text-base">
                  Địa chỉ: Tầng 8, Tòa nhà Hapro, 11B Cát Linh, P.Quốc Tử Giám,
                  Q. Đống Đa, TP. Hà Nội
                </p>
              </div>
              <div className="flex gap-2">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    className="size-5 lg:size-6"
                    fill="none"
                  >
                    <path
                      d="M21.97 19.1708C21.97 19.5308 21.89 19.9008 21.72 20.2608C21.55 20.6208 21.33 20.9608 21.04 21.2808C20.55 21.8208 20.01 22.2108 19.4 22.4608C18.8 22.7108 18.15 22.8408 17.45 22.8408C16.43 22.8408 15.34 22.6008 14.19 22.1108C13.04 21.6208 11.89 20.9608 10.75 20.1308C9.6 19.2908 8.51 18.3608 7.47 17.3308C6.44 16.2908 5.51 15.2008 4.68 14.0608C3.86 12.9208 3.2 11.7808 2.72 10.6508C2.24 9.51082 2 8.42082 2 7.38082C2 6.70082 2.12 6.05082 2.36 5.45082C2.6 4.84082 2.98 4.28082 3.51 3.78082C4.15 3.15082 4.85 2.84082 5.59 2.84082C5.87 2.84082 6.15 2.90082 6.4 3.02082C6.66 3.14082 6.89 3.32082 7.07 3.58082L9.39 6.85082C9.57 7.10082 9.7 7.33082 9.79 7.55082C9.88 7.76082 9.93 7.97082 9.93 8.16082C9.93 8.40082 9.86 8.64082 9.72 8.87082C9.59 9.10082 9.4 9.34082 9.16 9.58082L8.4 10.3708C8.29 10.4808 8.24 10.6108 8.24 10.7708C8.24 10.8508 8.25 10.9208 8.27 11.0008C8.3 11.0808 8.33 11.1408 8.35 11.2008C8.53 11.5308 8.84 11.9608 9.28 12.4808C9.73 13.0008 10.21 13.5308 10.73 14.0608C11.27 14.5908 11.79 15.0808 12.32 15.5308C12.84 15.9708 13.27 16.2708 13.61 16.4508C13.66 16.4708 13.72 16.5008 13.79 16.5308C13.87 16.5608 13.95 16.5708 14.04 16.5708C14.21 16.5708 14.34 16.5108 14.45 16.4008L15.21 15.6508C15.46 15.4008 15.7 15.2108 15.93 15.0908C16.16 14.9508 16.39 14.8808 16.64 14.8808C16.83 14.8808 17.03 14.9208 17.25 15.0108C17.47 15.1008 17.7 15.2308 17.95 15.4008L21.26 17.7508C21.52 17.9308 21.7 18.1408 21.81 18.3908C21.91 18.6408 21.97 18.8908 21.97 19.1708Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </i>
                <p className="text-sm text-[#FFF] lg:text-base">
                  Tel: (024) 3 944 6666 - Fax: (024) 3944 6969
                </p>
              </div>
              <div className="flex gap-2">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    className="size-5 lg:size-6"
                    fill="none"
                  >
                    <path
                      d="M2 9.34082C2 5.84082 4 4.34082 7 4.34082H17C20 4.34082 22 5.84082 22 9.34082V16.3408C22 19.8408 20 21.3408 17 21.3408H7"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 9.84082L13.87 12.3408C12.84 13.1608 11.15 13.1608 10.12 12.3408L7 9.84082"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17.3408H8"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 13.3408H5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
                <p className="text-sm text-[#FFF] lg:text-base">
                  Email: info@upstock.com.vn
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col gap-10 lg:gap-[70px]"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="700"
          >
            <div className="grid grid-cols-2 gap-x-3 gap-y-6 md:flex md:justify-between">
              <div>
                <p className="text-[14px] font-bold leading-normal lg:text-base">
                  Khách hàng cá nhân
                </p>
                <ul className="mt-4 space-y-4 lg:mt-6 lg:space-y-6">
                  <li>
                    <div className="h-[1px] w-[10px] bg-[#02E56A]"></div>
                  </li>
                  <li>
                    <a
                      href="/co-phieu"
                      className="link-effect text-[14px] font-medium leading-normal text-[#9BABB6] lg:text-base"
                    >
                      Cổ phiếu
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="link-effect text-[14px] font-medium leading-normal text-[#9BABB6] lg:text-base"
                    >
                      Ưu đãi
                    </a>
                  </li>
                  <li>
                    <a
                      href="/bieu-phi"
                      className="link-effect text-[14px] font-medium leading-normal text-[#9BABB6] lg:text-base"
                    >
                      Biểu phí giao dịch
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-teal-accent-400 text-[14px] font-semibold lg:text-base">
                  Khách hàng doanh nghiệp
                </p>
                <ul className="mt-4 space-y-4 lg:mt-6 lg:space-y-6">
                  <li>
                    <div className="h-[1px] w-[10px] bg-[#02E56A]"></div>
                  </li>
                  <li>
                    <a
                      href="/tu-van"
                      className="link-effect text-[14px] font-medium leading-normal text-[#9BABB6] lg:text-base"
                    >
                      Tư vấn tài chính
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tin-tuc/tin-dau-gia"
                      className="link-effect text-[14px] font-medium leading-normal text-[#9BABB6] lg:text-base"
                    >
                      Tin đấu giá
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-teal-accent-400 text-[14px] font-semibold lg:text-base">
                  Đầu tư cùng UPS
                </p>
                <ul className="mt-4 space-y-4 lg:mt-6 lg:space-y-6">
                  <li>
                    <div className="h-[1px] w-[10px] bg-[#02E56A]"></div>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="link-effect text-[14px] font-medium leading-normal text-[#9BABB6] lg:text-base"
                    >
                      Bản tin thị trường
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="link-effect text-[14px] font-medium leading-normal text-[#9BABB6] lg:text-base"
                    >
                      Báo cáo
                    </a>
                  </li>
                  <li>
                    <a
                      href="/khoa-hoc"
                      className="link-effect text-[14px] font-medium leading-normal text-[#9BABB6] lg:text-base"
                    >
                      Trung tâm kiến thức
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-teal-accent-400 text-[14px] font-semibold lg:text-base">
                  Về UPS
                </p>
                <ul className="mt-4 space-y-4 lg:mt-6 lg:space-y-6">
                  <li>
                    <div className="h-[1px] w-[10px] bg-[#02E56A]"></div>
                  </li>
                  <li>
                    <a
                      href="/gioi-thieu"
                      className="link-effect text-[14px] font-medium leading-normal text-[#9BABB6] lg:text-base"
                    >
                      Về chúng tôi
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tin-tuc"
                      className="link-effect text-[14px] font-medium leading-normal text-[#9BABB6] lg:text-base"
                    >
                      Tin UPS
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tuyen-dung"
                      className="link-effect text-[14px] font-medium leading-normal text-[#9BABB6] lg:text-base"
                    >
                      Gia nhập UPS
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex cursor-pointer items-center gap-[9px] rounded-[9px] bg-[#111] px-[10px] py-[6px] pr-8 lg:pr-[50px]">
                <div className="relative h-6 w-6">
                  <NextImg
                    src="/assets/icons/google-play1.svg"
                    alt="Capi"
                    objectFit="cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium uppercase leading-normal text-[rgba(255,255,255,0.79)]">
                    Get it on
                  </span>
                  <span className="text-[14px] font-semibold leading-[21px] lg:text-base">
                    Google Play
                  </span>
                </div>
              </div>
              <div className="flex cursor-pointer items-center gap-[9px] rounded-[9px] bg-[#111] px-[10px] py-[6px] pr-6">
                <div className="relative h-6 w-6">
                  <NextImg
                    src="/assets/icons/apple-logo1.svg"
                    alt="Capi"
                    objectFit="cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium uppercase leading-normal text-[rgba(255,255,255,0.79)]">
                    Download on the
                  </span>
                  <span className="text-[14px] font-semibold leading-[21px] lg:text-base">
                    App Store
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#060B06]">
        <div className="custom-container flex flex-col items-center justify-between py-5 lg:flex-row xl:py-[30px]">
          <p className="text-sm font-medium leading-normal text-[rgba(255,255,255,0.79)]">
            © 2024 <span className="text-[#02E56A]"> UP Securities</span>. All
            right reserved
          </p>
          <div className="mt-[14px] flex flex-col-reverse items-center gap-[14px] md:mt-0 md:flex-row lg:gap-6">
            <span className="text-sm font-medium leading-normal text-[rgba(255,255,255,0.79)]">
              Điều khoản & Quyền hạn
            </span>
            <span className="text-sm font-medium leading-normal text-[rgba(255,255,255,0.79)]">
              Chính sách bảo mật
            </span>
            <span className="text-sm font-medium leading-normal text-[rgba(255,255,255,0.79)]">
              Trung tâm hỗ trợ khách hàng
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheFooter;
