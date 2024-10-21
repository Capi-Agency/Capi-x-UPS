"use client";
import { ModeToggle } from "@/components/admin-panel/mode-toggle";
import Link from "next/link";
import React, { useState } from "react";
import NextImg from "../next-img";

type Props = {};

const TheHeader = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="fixed w-full z-[999]">
      <div className="bg-[#0E1A0D] rounded-b-[24px]">
        <div
          className="px-4 py-4 md:py-[20px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1600px] md:px-24 lg:px-8"
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
            <ul className="items-center hidden space-x-8 lg:flex">
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
            <ul className="items-center hidden space-x-8 lg:flex">
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
            <div className="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full">
                  <div className="p-5 bg-white border rounded">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <a
                          href="/"
                          aria-label="Company"
                          title="Company"
                          className="inline-flex items-center"
                        >
                          <svg
                            className="w-8 text-deep-purple-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            stroke="currentColor"
                            fill="none"
                          >
                            <rect x="3" y="1" width="7" height="12" />
                            <rect x="3" y="17" width="7" height="6" />
                            <rect x="14" y="1" width="7" height="6" />
                            <rect x="14" y="11" width="7" height="12" />
                          </svg>
                          <span className="ml-2 text-xl font-bold text-gray-800 uppercase">
                            Company
                          </span>
                        </a>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg
                            className="w-5 text-gray-600"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                        <li>
                          <a
                            href="/"
                            aria-label="Our product"
                            title="Our product"
                            className="font-bold text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Product
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="Our product"
                            title="Our product"
                            className="font-bold text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Features
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="Product pricing"
                            title="Product pricing"
                            className="font-bold text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Pricing
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="About us"
                            title="About us"
                            className="font-bold text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            About us
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-bold text-white transition duration-200 rounded bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                          >
                            <div className="hidden xl:inline-flex">
                              <div className="btn active group flex item-center">
                                <span> Mở tài khoản ngay </span>
                                <div className="inline-flex gap-1 w-4 h-4 overflow-hidden relative">
                                  <i className="w-full h-full group-hover:inline-flex hidden absolute">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M18.7595 5.98952C18.7595 5.7906 18.6805 5.59984 18.5398 5.45919C18.3992 5.31853 18.2084 5.23952 18.0095 5.23952L9.42521 5.23952C9.01099 5.23952 8.67521 5.5753 8.67521 5.98952C8.67521 6.40373 9.01099 6.73952 9.42521 6.73952L16.1993 6.73952L5.45862 17.4802C5.16572 17.7731 5.16572 18.2479 5.45862 18.5408C5.75151 18.8337 6.22638 18.8337 6.51928 18.5408L17.2595 7.80062V14.5738C17.2595 14.988 17.5953 15.3238 18.0095 15.3238C18.4237 15.3238 18.7595 14.988 18.7595 14.5738L18.7595 5.98952Z"
                                        fill="#014227"
                                      />
                                    </svg>
                                  </i>

                                  <i className="w-full h-full group-hover:hidden inline-flex absolute">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M18.7595 5.98952C18.7595 5.7906 18.6805 5.59984 18.5398 5.45919C18.3992 5.31853 18.2084 5.23952 18.0095 5.23952L9.42521 5.23952C9.01099 5.23952 8.67521 5.5753 8.67521 5.98952C8.67521 6.40373 9.01099 6.73952 9.42521 6.73952L16.1993 6.73952L5.45862 17.4802C5.16572 17.7731 5.16572 18.2479 5.45862 18.5408C5.75151 18.8337 6.22638 18.8337 6.51928 18.5408L17.2595 7.80062V14.5738C17.2595 14.988 17.5953 15.3238 18.0095 15.3238C18.4237 15.3238 18.7595 14.988 18.7595 14.5738L18.7595 5.98952Z"
                                        fill="#02e56a"
                                      />
                                    </svg>
                                  </i>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheHeader;
