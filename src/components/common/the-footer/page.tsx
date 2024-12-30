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
        <div className="lg:grid lg:grid-cols-[25%,75%] xl:grid-cols-[32%,68%]">
          <div
            className=""
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
          </div>
          <div
            className="flex flex-col gap-10 lg:gap-[70px]"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="700"
          >
            <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-6 lg:mt-0 lg:flex lg:justify-between">
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
                      className="link-effect-g text-[14px] font-medium leading-normal text-[#9BABB6] lg:text-base"
                    >
                      Cổ phiếu
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="link-effect-g text-[14px] font-medium leading-normal text-[#9BABB6] lg:text-base"
                    >
                      Ưu đãi
                    </a>
                  </li>
                  <li>
                    <a
                      href="/bieu-phi"
                      className="link-effect-g text-[14px] font-medium leading-normal text-[#9BABB6] lg:text-base"
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
                      className="link-effect-g text-[14px] font-medium leading-normal text-[#9BABB6] lg:text-base"
                    >
                      Tư vấn tài chính
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tin-tuc/tin-dau-gia"
                      className="link-effect-g text-[14px] font-medium leading-normal text-[#9BABB6] lg:text-base"
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
                      className="link-effect-g text-[14px] font-medium leading-normal text-[#9BABB6] lg:text-base"
                    >
                      Bản tin thị trường
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="link-effect-g text-[14px] font-medium leading-normal text-[#9BABB6] lg:text-base"
                    >
                      Báo cáo
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="link-effect-g text-[14px] font-medium leading-normal text-[#9BABB6] lg:text-base"
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
                      className="link-effect-g text-[14px] font-medium leading-normal text-[#9BABB6] lg:text-base"
                    >
                      Về chúng tôi
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tin-tuc"
                      className="link-effect-g text-[14px] font-medium leading-normal text-[#9BABB6] lg:text-base"
                    >
                      Tin UPS
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tuyen-dung"
                      className="link-effect-g text-[14px] font-medium leading-normal text-[#9BABB6] lg:text-base"
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
