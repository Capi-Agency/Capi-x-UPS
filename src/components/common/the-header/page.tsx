'use client';
import React, { useEffect, useRef, useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import NextImg from '../next-img';
import MenuMobile from '@/components/common/menu-mobile/page';
import { usePathname } from 'next/navigation';
import ButtonGetApp from '../btn-get-app/page';
import { CaretDownIcon } from '@radix-ui/react-icons';

interface TheHeaderProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const TheHeader = ({ isOpen, setIsOpen }: TheHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bgColor, setBgColor] = useState('#0E1A0D');
  const [bgBtn, setbgBtn] = useState('#02E56A');
  const pathname = usePathname();
  const handleClose = () => {
    setIsMenuOpen(false);
  };
  const [leftPosition, setLeftPosition] = useState(0);

  const menuItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    const item = menuItemsRef.current[index];
    if (item) {
      const rect = item.getBoundingClientRect();
      const itemWidth = rect.width;
      setLeftPosition(rect.left + itemWidth / 2);
    }
  };
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);
  useEffect(() => {
    switch (pathname) {
      case '/nen-tang-cong-nghe':
        setBgColor('bg-[#000]');
        setbgBtn('#02E56A');
        break;
      case '/khoa-hoc':
        setBgColor('bg-[#1B0C01]');
        setbgBtn('#02E56A');
        break;
      case '/tu-van':
        setBgColor('bg-[#080F25]');
        setbgBtn('#02E56A');
        break;
      case '/co-phieu':
        setBgColor('border-b-[1px] border-[#D0F500] bg-black');
        setbgBtn('#D0F500');
        break;
      case '/bieu-phi':
        setBgColor('border-b-[1px] border-[#D0F500] bg-black');
        setbgBtn('#D0F500');
        break;
      default:
        setBgColor('bg-[#0F1B0E]');
        setbgBtn('#02E56A');
        break;
    }
  }, [pathname]);

  return (
    <>
      <NavigationMenu.Root className="fixed z-[999] w-full">
        {/* tải app */}
        <ButtonGetApp isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className={bgColor + ` rounded-b-[24px]`}>
          <div className="mx-auto px-6 py-3 sm:max-w-full md:px-10 md:py-4 xl:max-w-[1280px] xl:px-0 xl:py-[20px] 2xl:max-w-[1440px] 3xl:max-w-[1600px]">
            <div className="relative flex items-center justify-between">
              <Link href="/" title="Ups" className="inline-flex items-center">
                <div className="relative h-[29px] w-[133px] rounded-br-2xl lg:h-[44px] lg:w-[184px]">
                  <NextImg
                    src="/assets/icons/logo-ups.svg"
                    alt="Capi"
                    objectFit="cover"
                    className=""
                  />
                </div>
              </Link>
              <NavigationMenu.List className="hidden items-center justify-center gap-5 xl:flex 2xl:gap-8">
                <NavigationMenu.Item
                  ref={(el: any) => (menuItemsRef.current[0] = el)}
                  onMouseEnter={() => handleMouseEnter(0)}
                >
                  <NavigationMenu.Trigger className="group flex items-center xl:gap-[6px] 2xl:gap-2">
                    <div className="flex items-center gap-[10px] text-base font-bold text-gray-100">
                      Sản phẩm - Dịch vụ
                      <span className="rounded-[10px] bg-[#AD02C9] px-2 py-1 text-sm font-bold uppercase text-white">
                        NEW
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      className="transition-all duration-300 ease-in-out group-data-[state=open]:-rotate-180 xl:size-5 2xl:size-6"
                    >
                      <path
                        d="M6.5 9L12.5 15L18.5 9"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="absolute left-0 top-0 w-full rounded-3xl sm:w-auto">
                    <div className="grid w-[690px] grid-cols-2 gap-10 px-6 py-5">
                      <ul className="flex flex-col gap-4">
                        <li>
                          <h3 className="text-[24px] font-semibold leading-[32px] text-[#014227]">
                            Khách hàng cá nhân
                          </h3>
                        </li>
                        <Link
                          href="/co-phieu"
                          className="flex items-center gap-5"
                        >
                          <div className="relative h-6 w-6">
                            <NextImg
                              src="/assets/icons/icon-nav1.svg"
                              alt="UPS"
                              objectFit="cover"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-base font-semibold text-[#000]">
                              Cổ phiếu
                            </span>
                            <span className="text-sm font-medium text-[rgba(0,0,0,0.68)]">
                              Đầu tư đơn giản và hiệu quả
                            </span>
                          </div>
                        </Link>
                        <Link
                          href="/bieu-phi"
                          className="flex items-center gap-5"
                        >
                          <div className="relative h-6 w-6">
                            <NextImg
                              src="/assets/icons/icon-nav5.svg"
                              alt="UPS"
                              objectFit="cover"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-base font-semibold text-[#000]">
                              Biểu phí giao dịch
                            </span>
                            <span className="text-sm font-medium text-[rgba(0,0,0,0.68)]">
                              Cập nhật biểu phí từ UPS
                            </span>
                          </div>
                        </Link>
                      </ul>
                      <div>
                        <div className="w-full">
                          <p className="text-left text-2xl font-semibold text-[#014227]">
                            Khách hàng doanh nghiệp
                          </p>

                          <div className="flex flex-col gap-5 py-5">
                            <Link href="/tu-van" className="flex items-center">
                              <div className="relative h-6 w-6">
                                <NextImg
                                  src="/assets/icons/icon-nav6.svg"
                                  alt="UPS"
                                  objectFit="cover"
                                />
                              </div>

                              <div className="ml-5">
                                <p className="text-base font-semibold text-[#000]">
                                  Tư vấn tài chính
                                </p>
                                <p className="text-sm font-medium text-[rgba(0,0,0,0.68)]">
                                  Cùng doanh nghiệp phát triển bền vững
                                </p>
                              </div>
                            </Link>
                          </div>
                          <div className="w-full">
                            <p className="text-left text-2xl font-semibold text-[#014227]">
                              Nền tảng
                            </p>

                            <div className="mt-4 flex flex-col gap-4">
                              <Link
                                href="https://trade.upstock.com.vn/#/price/bang-gia/vn30"
                                target="_blank"
                                className="flex h-[38px] w-[80%] items-center rounded-[10px] bg-[#F1F1F1] px-3 text-sm font-semibold text-[rgba(0,0,0,0.79)]"
                              >
                                Web Trading
                              </Link>
                              <Link
                                href="#"
                                className="flex h-[38px] w-[80%] items-center rounded-[10px] bg-[#F1F1F1] px-3 text-sm font-semibold text-[rgba(0,0,0,0.79)]"
                              >
                                App Trading
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item
                  ref={(el: any) => (menuItemsRef.current[1] = el)}
                  onMouseEnter={() => handleMouseEnter(1)}
                >
                  <NavigationMenu.Trigger className="group flex items-center xl:gap-[6px] 2xl:gap-2">
                    <Link href="#" className="font-bold text-gray-100">
                      Đầu tư cùng UPS
                    </Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      className="transition-all duration-300 ease-in-out group-data-[state=open]:-rotate-180 xl:size-5 2xl:size-6"
                    >
                      <path
                        d="M6.5 9L12.5 15L18.5 9"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="absolute left-0 top-0 w-full rounded-3xl sm:w-auto">
                    <div className="flex w-[400px] flex-col gap-5 px-6 py-5">
                      <Link href="/khoa-hoc" className="flex items-center">
                        <i className="inline-flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M6.87988 18.6501V16.5801"
                              stroke="#00BF52"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M12 18.6498V14.5098"
                              stroke="#00BF52"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M17.1201 18.6502V12.4302"
                              stroke="#00BF52"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M17.1199 6.34961L16.6599 6.88961C14.1099 9.86961 10.6899 11.9796 6.87988 12.9296"
                              stroke="#00BF52"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M14.1904 6.34961H17.1204V9.26961"
                              stroke="#00BF52"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9 22.5H15C20 22.5 22 20.5 22 15.5V9.5C22 4.5 20 2.5 15 2.5H9C4 2.5 2 4.5 2 9.5V15.5C2 20.5 4 22.5 9 22.5Z"
                              stroke="#111111"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </i>

                        <div className="ml-5">
                          <p className="text-base font-semibold text-[#000]">
                            Trung tâm đào tạo
                          </p>
                          <p className="text-sm font-medium text-[rgba(0,0,0,0.68)]">
                          Trung tâm đào tạo và chia sẻ kiến thức
                          </p>
                        </div>
                      </Link>

                      <Link href="#" className="flex items-center">
                        <i className="inline-flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M3.5 18.5V7.5C3.5 3.5 4.5 2.5 8.5 2.5H15.5C19.5 2.5 20.5 3.5 20.5 7.5V17.5C20.5 17.64 20.5 17.78 20.49 17.92"
                              stroke="#00BF52"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.35 15.5H20.5V19C20.5 20.93 18.93 22.5 17 22.5H7C5.07 22.5 3.5 20.93 3.5 19V18.35C3.5 16.78 4.78 15.5 6.35 15.5Z"
                              stroke="#111111"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8 7.5H16"
                              stroke="#00BF52"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8 11H13"
                              stroke="#00BF52"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </i>

                        <div className="ml-5">
                          <p className="text-base font-semibold text-[#000]">
                            Hỗ trợ khách hàng
                          </p>
                          <p className="text-sm font-medium text-[rgba(0,0,0,0.68)]">
                            Khám phá kho tàng kiến thức đỉnh cấp cùng UPS
                          </p>
                        </div>
                      </Link>
                    </div>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <Link
                    href="/nen-tang-cong-nghe"
                    className="font-bold text-gray-100"
                  >
                    Nền tảng công nghệ
                  </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item
                  ref={(el: any) => (menuItemsRef.current[2] = el)}
                  onMouseEnter={() => handleMouseEnter(2)}
                >
                  <NavigationMenu.Trigger className="group flex items-center xl:gap-[6px] 2xl:gap-2">
                    <Link href="/gioi-thieu">
                      <div className="font-bold text-gray-100">Về UPS</div>
                    </Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      className="transition-all duration-300 ease-in-out group-data-[state=open]:-rotate-180 xl:size-5 2xl:size-6"
                    >
                      <path
                        d="M6.5 9L12.5 15L18.5 9"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="absolute left-0 top-0 w-full rounded-3xl sm:w-auto">
                    <div className="flex w-[300px] flex-col gap-5 px-6 py-5">
                      <Link href="/gioi-thieu" className="flex items-center">
                        <i className="inline-flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M17.9976 7.66C17.9376 7.65 17.8676 7.65 17.8076 7.66C16.4276 7.61 15.3276 6.48 15.3276 5.08C15.3276 3.65 16.4776 2.5 17.9076 2.5C19.3376 2.5 20.4876 3.66 20.4876 5.08C20.4776 6.48 19.3776 7.61 17.9976 7.66Z"
                              stroke="#00BF52"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16.9675 14.9402C18.3375 15.1702 19.8475 14.9302 20.9075 14.2202C22.3175 13.2802 22.3175 11.7402 20.9075 10.8002C19.8375 10.0902 18.3075 9.85016 16.9375 10.0902"
                              stroke="#00BF52"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5.96754 7.66C6.02754 7.65 6.09754 7.65 6.15754 7.66C7.53754 7.61 8.63754 6.48 8.63754 5.08C8.63754 3.65 7.48754 2.5 6.05754 2.5C4.62754 2.5 3.47754 3.66 3.47754 5.08C3.48754 6.48 4.58754 7.61 5.96754 7.66Z"
                              stroke="#00BF52"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.9975 14.9402C5.6275 15.1702 4.1175 14.9302 3.0575 14.2202C1.6475 13.2802 1.6475 11.7402 3.0575 10.8002C4.1275 10.0902 5.6575 9.85016 7.0275 10.0902"
                              stroke="#00BF52"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12.0001 15.1302C11.9401 15.1202 11.8701 15.1202 11.8101 15.1302C10.4301 15.0802 9.33008 13.9502 9.33008 12.5502C9.33008 11.1202 10.4801 9.97021 11.9101 9.97021C13.3401 9.97021 14.4901 11.1302 14.4901 12.5502C14.4801 13.9502 13.3801 15.0902 12.0001 15.1302Z"
                              stroke="#111111"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.09021 18.2804C7.68021 19.2204 7.68021 20.7603 9.09021 21.7003C10.6902 22.7703 13.3102 22.7703 14.9102 21.7003C16.3202 20.7603 16.3202 19.2204 14.9102 18.2804C13.3202 17.2204 10.6902 17.2204 9.09021 18.2804Z"
                              stroke="#111111"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </i>

                        <div className="ml-5">
                          <p className="text-base font-semibold text-[#000]">
                            Về chúng tôi
                          </p>
                          <p className="text-sm font-medium text-[rgba(0,0,0,0.68)]">
                            Giới thiệu về UPS
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/tin-tuc"
                        className="flex items-center hover:no-underline"
                      >
                        <div className="flex">
                          <i className="inline-flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                            >
                              <path
                                d="M22 17.2402V5.17019C22 3.97019 21.02 3.08019 19.83 3.18019H19.77C17.67 3.36019 14.48 4.43019 12.7 5.55019L12.53 5.66019C12.24 5.84019 11.76 5.84019 11.47 5.66019L11.22 5.51019C9.44 4.40019 6.26 3.34019 4.16 3.17019C2.97 3.07019 2 3.97019 2 5.16019V17.2402C2 18.2002 2.78 19.1002 3.74 19.2202L4.03 19.2602C6.2 19.5502 9.55 20.6502 11.47 21.7002L11.51 21.7202C11.78 21.8702 12.21 21.8702 12.47 21.7202C14.39 20.6602 17.75 19.5502 19.93 19.2602L20.26 19.2202C21.22 19.1002 22 18.2002 22 17.2402Z"
                                stroke="black"
                                strokeOpacity="0.79"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M12 5.99023V20.9902"
                                stroke="#00BF52"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7.75 8.99023H5.5"
                                stroke="#00BF52"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8.5 11.9902H5.5"
                                stroke="#00BF52"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </i>

                          <div className="ml-5">
                            <p className="text-left text-base font-semibold text-[#000]">
                              Tin UPS
                            </p>
                            <p className="text-left text-sm font-medium text-[rgba(0,0,0,0.68)]">
                              Các thông tin công bố từ UPS
                            </p>
                          </div>
                        </div>
                      </Link>

                      <Link href="/tuyen-dung" className="flex items-center">
                        <i className="inline-flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M15.39 5.71L16.7999 8.52999C16.9899 8.91999 17.4999 9.28999 17.9299 9.36999L20.48 9.78999C22.11 10.06 22.49 11.24 21.32 12.42L19.3299 14.41C18.9999 14.74 18.81 15.39 18.92 15.86L19.4899 18.32C19.9399 20.26 18.9 21.02 17.19 20L14.7999 18.58C14.3699 18.32 13.65 18.32 13.22 18.58L10.8299 20C9.11994 21.01 8.07995 20.26 8.52995 18.32L9.09996 15.86C9.20996 15.4 9.01995 14.75 8.68995 14.41L6.69996 12.42C5.52996 11.25 5.90996 10.07 7.53996 9.78999L10.0899 9.36999C10.5199 9.29999 11.03 8.91999 11.22 8.52999L12.63 5.71C13.38 4.18 14.62 4.18 15.39 5.71Z"
                              stroke="black"
                              strokeOpacity="0.79"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8 5.5H2"
                              stroke="#00BF52"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5 19.5H2"
                              stroke="#00BF52"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M3 12.5H2"
                              stroke="#00BF52"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </i>

                        <div className="ml-5">
                          <p className="text-base font-semibold text-[#000]">
                            Gia nhập UPS
                          </p>
                          <p className="text-sm font-medium text-[rgba(0,0,0,0.68)]">
                            Phát triển sự nghiệp cùng UPS
                          </p>
                        </div>
                      </Link>
                    </div>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <Link href="#">
                    <div className="font-bold text-gray-100">Bảng giá</div>
                  </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Indicator className="top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
                  <div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-white" />
                </NavigationMenu.Indicator>
              </NavigationMenu.List>
              <ul className="hidden items-center space-x-5 xl:flex 2xl:space-x-8">
                <div>
                  <Link
                    href="#"
                    title="Thông báo"
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
                </div>
                <div>
                  <div
                    title="Tìm kiếm"
                    className="cursor-pointer font-bold text-gray-100"
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
                  </div>
                </div>
                <li>
                  <Link
                    href="https://onboarding.upstock.com.vn/index.html#/./open-account/check-info"
                    className=""
                    title="Mở tài khoản ngay"
                  >
                    <button className={`btn active !bg-[${bgBtn}]`}>
                      Mở tài khoản ngay
                      <div className="relative h-6 w-6">
                        <NextImg
                          src="/assets/icons/UPs.svg"
                          alt="Capi"
                          objectFit="cover"
                        />
                      </div>
                    </button>
                  </Link>
                </li>
              </ul>
              <div className="xl:hidden">
                <div className="flex items-center gap-4">
                  <Link
                    href="https://onboarding.upstock.com.vn/index.html#/./open-account/check-info"
                    className="hidden md:block"
                    title="Mở tài khoản ngay"
                  >
                    <button className={`btn active !bg-[${bgBtn}]`}>
                      Mở tài khoản ngay
                      <div className="relative h-4 w-4 lg:h-6 lg:w-6">
                        <NextImg
                          src="/assets/icons/UPs.svg"
                          alt="Capi"
                          objectFit="cover"
                        />
                      </div>
                    </button>
                  </Link>
                  <Link
                    href="#"
                    title="Thông báo"
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
                    title="Mở menu"
                    className="-mr-1 rounded p-2 transition duration-1000 ease-in focus:outline-none"
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
            <div
              className="perspective-[2000px] absolute top-[69px] flex w-fit transition-all duration-300"
              style={{
                left: `${leftPosition}px`,
                transform: 'translateX(-50%)',
              }}
            >
              <NavigationMenu.Viewport className="relative h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden text-nowrap rounded-3xl bg-white text-white shadow-2xl transition-all duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
            </div>
          </div>
        </div>

        {/* Mobile */}
        {isMenuOpen && (
          <div className="fixed left-0 top-0 h-full w-full overflow-y-scroll">
            <div className="h-full w-full overflow-y-auto rounded bg-[#0F1B0E] px-6 py-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <Link
                    href="/"
                    title="Ups"
                    className="inline-flex items-center"
                  >
                    <div className="relative h-[29px] w-[133px] rounded-br-2xl lg:h-[44px] lg:w-[184px]">
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
                    title="Đóng menu"
                    className="-mr-2 -mt-2 rounded p-2 transition duration-200 focus:outline-none"
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
              <form action="" className="relative border-b border-[#1D2C1C]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  className="absolute left-0 top-1/2 -translate-y-1/2"
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
                  className="bg-transparent py-4 pl-9 text-sm font-semibold text-[#FFF] outline-none placeholder:text-sm placeholder:text-[#E7E9EF]"
                />
              </form>
              <MenuMobile handleClose={handleClose} />
            </div>
          </div>
        )}
      </NavigationMenu.Root>
    </>
  );
};

export default TheHeader;
