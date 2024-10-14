"use client";
import { ModeToggle } from "@/components/admin-panel/mode-toggle";
import Link from "next/link";
import React, { useState } from "react";
import NextImg from "../next-img";

type Props = {};

const TheHeader = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-[#00D763]">
      <div className="bg-[#0E1A0D] rounded-b-2xl">
        <div className="px-4 py-[40px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1600px] md:px-24 lg:px-8" data-aos="fade-up">
          <div className="relative flex items-center justify-between">
            <Link
              href="/"
              aria-label="Ups"
              title="Ups"
              className="inline-flex items-center"
            >
              <div className="relative w-[210px] h-[50px] rounded-br-2xl">
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
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
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
                <Link
                  href="/"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 flex items-center gap-[10px]"
                >
                  Sản phẩm
                  <span className="bg-[#AD02C9] text-white text-xs font-medium me-2 px-2 py-1 rounded-[10px] dark:bg-blue-900 dark:text-blue-300">
                    NEW
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Đầu tư cùng UPS
                </Link>
              </li>
              <li>
                <a
                  href="/"
                  aria-label="Financial technology"
                  title="Financial technology"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Công nghệ tài chính
                </a>
              </li>
              <li>
                <a
                  href="/"
                  aria-label="About us"
                  title="About us"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Về UPS
                </a>
              </li>
              <li>
                <a
                  href="/"
                  aria-label="Price list"
                  title="Price list"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Bảng giá
                </a>
              </li>
            </ul>
            <ul className="items-center hidden space-x-8 lg:flex">
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
                          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
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
                          <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
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
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Product
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="Our product"
                            title="Our product"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Features
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="Product pricing"
                            title="Product pricing"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Pricing
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="About us"
                            title="About us"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            About us
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:outline-none"
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
