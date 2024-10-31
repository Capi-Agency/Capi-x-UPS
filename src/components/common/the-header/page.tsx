"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NextImg from "../next-img";

type Props = {};

const TheHeader = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);
  return (
    <div className="fixed w-full z-[999]">
      <div className="bg-[#0E1A0D] rounded-b-[24px]">
        <div
          className="py-4 lg:py-[20px] mx-auto sm:max-w-full xl:max-w-[1280px] 2xl:max-w-[1440px] 3xl:max-w-[1600px] px-6 md:px-10 xl:px-0"
          data-aos="fade-up"
        >
          <div className="relative flex items-center justify-between">
            <Link
              href="/"
              aria-label="Ups"
              title="Ups"
              className="inline-flex items-center"
            >
              <div className="relative lg:w-[184px] w-[133px] lg:h-[44px] h-[29px] rounded-br-2xl">
                <NextImg
                  src="/assets/icons/logo-ups.svg"
                  alt="Capi"
                  objectFit="cover"
                  className=""
                />
              </div>
            </Link>
            <ul className="items-center hidden space-x-5 2xl:space-x-8 xl:flex">
              <li>
                <Link
                  href="/"
                  aria-label="Our product"
                  title="Our product"
                  className="font-bold text-gray-100 flex items-center gap-[10px] text-base"
                >
                  Sản phẩm
                  <span className="bg-[#AD02C9] text-white text-sm uppercase font-bold me-2 px-2 py-1 rounded-[10px]">
                    NEW
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  aria-label="Invest with UPS"
                  title="Invest with UPS"
                  className="font-bold text-gray-100"
                >
                  Đầu tư cùng UPS
                </Link>
              </li>
              <li>
                <a
                  href="/"
                  aria-label="Technology platform"
                  title="Technology platform"
                  className="font-bold text-gray-100"
                >
                  Nền tảng công nghệ
                </a>
              </li>
              <li>
                <a
                  href="/"
                  aria-label="News"
                  title="News"
                  className="font-bold text-gray-100"
                >
                  Tin tức
                  <span className="rounded-full ml-[10px] bg-[#E50261] px-2 py-1 text-sm">
                    4
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  aria-label="About us"
                  title="About us"
                  className="font-bold text-gray-100"
                >
                  Về UPS
                </a>
              </li>
              <li>
                <a
                  href="/"
                  aria-label="Price list"
                  title="Price list"
                  className="font-bold text-gray-100"
                >
                  Bảng giá
                </a>
              </li>
            </ul>
            <ul className="items-center hidden space-x-5 2xl:space-x-8 xl:flex">
              <li>
                <Link
                  href="/"
                  aria-label="Notification"
                  title="Notification"
                  className="font-bold text-gray-100"
                >
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12.0199 20.5299C9.68987 20.5299 7.35987 20.1599 5.14987 19.4199C4.30987 19.1299 3.66987 18.5399 3.38987 17.7699C3.09987 16.9999 3.19987 16.1499 3.65987 15.3899L4.80987 13.4799C5.04987 13.0799 5.26987 12.2799 5.26987 11.8099V8.91992C5.26987 5.19992 8.29987 2.16992 12.0199 2.16992C15.7399 2.16992 18.7699 5.19992 18.7699 8.91992V11.8099C18.7699 12.2699 18.9899 13.0799 19.2299 13.4899L20.3699 15.3899C20.7999 16.1099 20.8799 16.9799 20.5899 17.7699C20.2999 18.5599 19.6699 19.1599 18.8799 19.4199C16.6799 20.1599 14.3499 20.5299 12.0199 20.5299ZM12.0199 3.66992C9.12987 3.66992 6.76987 6.01992 6.76987 8.91992V11.8099C6.76987 12.5399 6.46987 13.6199 6.09987 14.2499L4.94987 16.1599C4.72987 16.5299 4.66987 16.9199 4.79987 17.2499C4.91987 17.5899 5.21987 17.8499 5.62987 17.9899C9.80987 19.3899 14.2399 19.3899 18.4199 17.9899C18.7799 17.8699 19.0599 17.5999 19.1899 17.2399C19.3199 16.8799 19.2899 16.4899 19.0899 16.1599L17.9399 14.2499C17.5599 13.5999 17.2699 12.5299 17.2699 11.7999V8.91992C17.2699 6.01992 14.9199 3.66992 12.0199 3.66992Z"
                        fill="white"
                      />
                      <path
                        d="M13.8806 3.94018C13.8106 3.94018 13.7406 3.93018 13.6706 3.91018C13.3806 3.83018 13.1006 3.77018 12.8306 3.73018C11.9806 3.62018 11.1606 3.68018 10.3906 3.91018C10.1106 4.00018 9.8106 3.91018 9.6206 3.70018C9.4306 3.49018 9.3706 3.19018 9.4806 2.92018C9.8906 1.87018 10.8906 1.18018 12.0306 1.18018C13.1706 1.18018 14.1706 1.86018 14.5806 2.92018C14.6806 3.19018 14.6306 3.49018 14.4406 3.70018C14.2906 3.86018 14.0806 3.94018 13.8806 3.94018Z"
                        fill="white"
                      />
                      <path
                        d="M12.0195 22.8101C11.0295 22.8101 10.0695 22.4101 9.36953 21.7101C8.66953 21.0101 8.26953 20.0501 8.26953 19.0601H9.76953C9.76953 19.6501 10.0095 20.2301 10.4295 20.6501C10.8495 21.0701 11.4295 21.3101 12.0195 21.3101C13.2595 21.3101 14.2695 20.3001 14.2695 19.0601H15.7695C15.7695 21.1301 14.0895 22.8101 12.0195 22.8101Z"
                        fill="white"
                      />
                      <circle
                        cx="19"
                        cy="5"
                        r="4.5"
                        fill="#FF0000"
                        stroke="#0F1B0E"
                      />
                    </svg>
                  </i>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  aria-label="Search"
                  title="Search"
                  className="font-bold text-gray-100"
                >
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 22L20 20"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </i>
                </Link>
              </li>
              <li>
                <a
                  href="/"
                  className=""
                  aria-label="Mở tài khoản ngay"
                  title="Mở tài khoản ngay"
                >
                  <button className="btn active">
                    Mở tài khoản ngay
                    <div className="relative w-6 h-6">
                      <NextImg
                        src="/assets/icons/UPs.svg"
                        alt="Capi"
                        objectFit="cover"
                      />
                    </div>
                  </button>
                </a>
              </li>
            </ul>
            <div className="xl:hidden">
              <div className="flex items-center gap-4">
                <a
                  href="/"
                  className="md:block hidden"
                  aria-label="Mở tài khoản ngay"
                  title="Mở tài khoản ngay"
                >
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
                </a>
                <Link
                  href="/"
                  aria-label="Notification"
                  title="Notification"
                  className="font-bold text-gray-100"
                >
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12.0199 20.5299C9.68987 20.5299 7.35987 20.1599 5.14987 19.4199C4.30987 19.1299 3.66987 18.5399 3.38987 17.7699C3.09987 16.9999 3.19987 16.1499 3.65987 15.3899L4.80987 13.4799C5.04987 13.0799 5.26987 12.2799 5.26987 11.8099V8.91992C5.26987 5.19992 8.29987 2.16992 12.0199 2.16992C15.7399 2.16992 18.7699 5.19992 18.7699 8.91992V11.8099C18.7699 12.2699 18.9899 13.0799 19.2299 13.4899L20.3699 15.3899C20.7999 16.1099 20.8799 16.9799 20.5899 17.7699C20.2999 18.5599 19.6699 19.1599 18.8799 19.4199C16.6799 20.1599 14.3499 20.5299 12.0199 20.5299ZM12.0199 3.66992C9.12987 3.66992 6.76987 6.01992 6.76987 8.91992V11.8099C6.76987 12.5399 6.46987 13.6199 6.09987 14.2499L4.94987 16.1599C4.72987 16.5299 4.66987 16.9199 4.79987 17.2499C4.91987 17.5899 5.21987 17.8499 5.62987 17.9899C9.80987 19.3899 14.2399 19.3899 18.4199 17.9899C18.7799 17.8699 19.0599 17.5999 19.1899 17.2399C19.3199 16.8799 19.2899 16.4899 19.0899 16.1599L17.9399 14.2499C17.5599 13.5999 17.2699 12.5299 17.2699 11.7999V8.91992C17.2699 6.01992 14.9199 3.66992 12.0199 3.66992Z"
                        fill="white"
                      />
                      <path
                        d="M13.8806 3.94018C13.8106 3.94018 13.7406 3.93018 13.6706 3.91018C13.3806 3.83018 13.1006 3.77018 12.8306 3.73018C11.9806 3.62018 11.1606 3.68018 10.3906 3.91018C10.1106 4.00018 9.8106 3.91018 9.6206 3.70018C9.4306 3.49018 9.3706 3.19018 9.4806 2.92018C9.8906 1.87018 10.8906 1.18018 12.0306 1.18018C13.1706 1.18018 14.1706 1.86018 14.5806 2.92018C14.6806 3.19018 14.6306 3.49018 14.4406 3.70018C14.2906 3.86018 14.0806 3.94018 13.8806 3.94018Z"
                        fill="white"
                      />
                      <path
                        d="M12.0195 22.8101C11.0295 22.8101 10.0695 22.4101 9.36953 21.7101C8.66953 21.0101 8.26953 20.0501 8.26953 19.0601H9.76953C9.76953 19.6501 10.0095 20.2301 10.4295 20.6501C10.8495 21.0701 11.4295 21.3101 12.0195 21.3101C13.2595 21.3101 14.2695 20.3001 14.2695 19.0601H15.7695C15.7695 21.1301 14.0895 22.8101 12.0195 22.8101Z"
                        fill="white"
                      />
                      <circle
                        cx="19"
                        cy="5"
                        r="4.5"
                        fill="#FF0000"
                        stroke="#0F1B0E"
                      />
                    </svg>
                  </i>
                </Link>
                <button
                  aria-label="Open Menu"
                  title="Open Menu"
                  className="p-2 -mr-1 transition duration-100000 ease-in rounded focus:outline-none"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3 7H21"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M3 12H21"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M3 17H21"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#0F1B0E]">
          <div className="py-5 px-6 bg-[#0F1B0E] border rounded w-full h-full">
            <div className="flex items-center justify-between mb-4">
              <div>
                <Link
                  href="/"
                  aria-label="Ups"
                  title="Ups"
                  className="inline-flex items-center"
                >
                  <div className="relative lg:w-[184px] w-[133px] lg:h-[44px] h-[29px] rounded-br-2xl">
                    <NextImg
                      src="/assets/icons/logo-ups.svg"
                      alt="Capi"
                      objectFit="cover"
                      className=""
                    />
                  </div>
                </Link>
              </div>
              <div>
                <button
                  aria-label="Close Menu"
                  title="Close Menu"
                  className="p-2 -mt-2 -mr-2 transition duration-200 rounded focus:outline-none"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5.00098 5L19 18.9991"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.99996 18.9991L18.999 5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <form action="" className="relative border-b border-[#1D2C1C] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                className="absolute top-1/2 left-0 -translate-y-1/2"
              >
                <path
                  d="M11.5 21.5C16.7467 21.5 21 17.2467 21 12C21 6.75329 16.7467 2.5 11.5 2.5C6.25329 2.5 2 6.75329 2 12C2 17.2467 6.25329 21.5 11.5 21.5Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 22.5L20 20.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                placeholder="Tìm kiếm"
                className="text-sm bg-transparent text-[#FFF] placeholder:text-[#E7E9EF] placeholder:text-sm font-semibold py-4 pl-9 outline-none"
              />
            </form>
            <ul className="flex flex-col gap-8 mt-7">
              <li>
                <Link
                  href="/"
                  aria-label="Our product"
                  title="Our product"
                  className="font-bold text-gray-100 flex items-center gap-[10px] text-sm "
                >
                  Sản phẩm
                  <span className="bg-[#AD02C9] text-white text-xs uppercase font-bold me-2 px-2 py-1 rounded-[10px]">
                    NEW
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  aria-label="Invest with UPS"
                  title="Invest with UPS"
                  className="font-bold text-gray-100 text-sm"
                >
                  Đầu tư cùng UPS
                </Link>
              </li>
              <li>
                <a
                  href="/"
                  aria-label="Technology platform"
                  title="Technology platform"
                  className="font-bold text-gray-100 text-sm"
                >
                  Nền tảng công nghệ
                </a>
              </li>
              <li>
                <a
                  href="/"
                  aria-label="News"
                  title="News"
                  className="font-bold text-gray-100 text-sm"
                >
                  Tin tức
                  <span className="rounded-full ml-[10px] bg-[#E50261] px-2 py-1">
                    4
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  aria-label="About us"
                  title="About us"
                  className="font-bold text-gray-100 text-sm"
                >
                  Về UPS
                </a>
              </li>
              <li>
                <a
                  href="/"
                  aria-label="Price list"
                  title="Price list"
                  className="font-bold text-gray-100 text-sm"
                >
                  Bảng giá
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className=""
                  aria-label="Mở tài khoản ngay"
                  title="Mở tài khoản ngay"
                >
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
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default TheHeader;
