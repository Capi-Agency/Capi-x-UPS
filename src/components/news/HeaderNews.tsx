'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import NextImg from '../common/next-img';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
interface Props {
  setTextValue?: any;
  setSort?: any;
  setDate?: any
}
const HeaderNews = ({ setTextValue, setSort, setDate }: Props) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };
  const pathname = usePathname();
  const handleSelect = (value: any) => {
    if (value == '1') setSort(true);
    if (value == '2') setSort(false);
  };
  return (
    <div className="custom-container mt-10 lg:mt-12 xl:mt-14 2xl:mt-16 3xl:mt-[75px] 3xl:!max-w-[calc(1280px+48px)]">
      <div className="mb-[5px] flex items-center justify-between lg:mb-2 2xl:mb-4 3xl:mb-5">
        <h1 className="text-[20px] font-bold text-[#0C1C28] lg:text-[24px] lg2:text-[28px] 2xl:text-[32px] 2xl:leading-[40px] 3xl:text-[40px] 3xl:leading-[54px]">
          Tin tức UPS
        </h1>
      </div>
      <div className="flex flex-col justify-between gap-3 lg2:flex-row lg2:items-center lg2:gap-0">
        <div className="scrollbar-hidden flex items-center gap-3 overflow-x-auto whitespace-nowrap md:gap-4 lg:gap-6 2xl:gap-8 3xl:gap-10">
          <Link
            href="/tin-tuc"
            className={`py-[7px] text-base font-bold leading-normal transition-all duration-150 ease-in-out lg:text-[18px] ${pathname === '/tin-tuc' ? 'border-b border-[#E50261] text-[#15171E]' : 'text-[#525358]'}`}
          >
            Tất cả
          </Link>
          <Link
            href="/tin-tuc/tin-hoat-dong"
            className={`py-[7px] text-base font-bold leading-normal transition-all duration-150 ease-in-out lg:text-[18px] ${pathname === '/tin-tuc/tin-hoat-dong' ? 'border-b border-[#E50261] text-[#15171E]' : 'text-[#525358]'}`}
          >
            Tin hoạt động
          </Link>
          <Link
            href="/tin-tuc/tin-dau-gia"
            className={`py-[7px] text-base font-bold leading-normal transition-all duration-150 ease-in-out lg:text-[18px] ${pathname === '/tin-tuc/tin-dau-gia' ? 'border-b border-[#E50261] text-[#15171E]' : 'text-[#525358]'}`}
          >
            Tin đấu giá
          </Link>
          <Link
            href="/tin-tuc/cong-bo-thong-tin"
            className={`py-[7px] text-base font-bold leading-normal transition-all duration-150 ease-in-out lg:text-[18px] ${pathname === '/tin-tuc/cong-bo-thong-tin' ? 'border-b border-[#E50261] text-[#15171E]' : 'text-[#525358]'}`}
          >
            Công bố thông tin
          </Link>
        </div>

        <div className="flex items-center justify-between gap-3">
          <form className="relative flex-1 lg:flex-none">
            <input
              type="text"
              onChange={(e) => setTextValue(e.target.value)}
              placeholder="Tìm kiếm..."
              className={`w-full rounded-[6px] bg-[rgba(144,145,156,0.08)] px-3 py-2 pl-3 text-xs font-medium text-[#525358] outline-none transition-all duration-300 ease-in-out placeholder:text-xs placeholder:font-medium placeholder:leading-none placeholder:text-[#525358] lg:w-[300px] lg:text-sm lg:placeholder:text-sm lg2:w-[250px]`}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5 lg:h-6 lg:w-6"
                >
                  <path
                    d="M11.5 21.5C16.7467 21.5 21 17.2467 21 12C21 6.75329 16.7467 2.5 11.5 2.5C6.25329 2.5 2 6.75329 2 12C2 17.2467 6.25329 21.5 11.5 21.5Z"
                    stroke="#161519"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 22.5L20 20.5"
                    stroke="#161519"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
            </div>
          </form>
          <div className="flex items-center gap-3">
            {/* <div className="relative cursor-pointer rounded-[6px] bg-[rgba(144,145,156,0.08)]">
              <select className="block cursor-pointer appearance-none bg-transparent py-2 pl-3 pr-7 text-xs font-medium text-[#525358] focus:outline-none lg:text-sm">
                <option value="1">Tất cả danh mục</option>
                <option value="2">Tin hoạt động</option>
                <option value="3">Tin đấu giá</option>
                <option value="4">Công bố thông tin</option>
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                <div className="relative h-[6px] w-[10px]">
                  <NextImg
                    src="/assets/icons/expand_more.svg"
                    alt="UPS"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div> */}
            <input
              type="date"
              onChange={(e) => setDate(e.target.value)}
              className={`hidden cursor-pointer rounded-[6px] bg-[rgba(144,145,156,0.08)] px-3 py-2 text-xs font-medium text-[#525358] focus:outline-none lg:text-sm ${pathname === '/tin-tuc/cong-bo-thong-tin' ? 'md:block' : ''}`}
            />

            <div className="relative flex cursor-pointer items-center gap-2 rounded-[6px] bg-[rgba(144,145,156,0.08)]">
              <select
                className="block cursor-pointer appearance-none bg-transparent py-2 pl-3 pr-7 text-xs font-medium text-[#525358] focus:outline-none lg:text-sm"
                onChange={(e) => handleSelect(e.target.value)}
              >
                <option value="1">Mới nhất</option>
                <option value="2">Cũ nhất</option>
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                <div className="relative h-[6px] w-[10px]">
                  <NextImg
                    src="/assets/icons/expand_more.svg"
                    alt="UPS"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="group relative">
            <div className={`block 2xl:hidden`}>
              <button
                onClick={toggleMenu}
                className="flex items-center gap-2 rounded-[6px] bg-[rgba(144,145,156,0.08)] px-3 py-1 text-xs font-medium text-[#525358] outline-none lg:py-[6px] lg:text-sm"
              >
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M18.8188 2.5H5.18117C3.442 2.5 2.40466 4.41555 3.36937 5.84564L9.09107 13.3274C9.56799 14.0344 9.82249 14.8651 9.82249 15.7148V21.4219C9.82249 22.3805 10.9952 22.8605 11.6811 22.1827L13.8586 20.0307C14.0628 19.829 14.1775 19.5553 14.1775 19.2699V15.7148C14.1775 14.8651 14.432 14.0344 14.9089 13.3274L20.6306 5.84564C21.5953 4.41555 20.558 2.5 18.8188 2.5Z"
                      stroke="#161519"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>{' '}
                Lọc
              </button>

              <div
                className={`${isOpen ? 'absolute right-0 top-full z-50 block min-w-[100px] rounded-md bg-white p-2 shadow-lg group-hover:block' : 'hidden'} `}
              >
                <div
                  className={`${pathname === '/tin-tuc/cong-bo-thong-tin' ? 'block' : 'hidden'}`}
                >
                  <div className="px-2 pb-2 text-xs font-medium text-black lg:text-sm">
                    Chọn ngày
                  </div>
                  <input
                    type="date"
                    className={`cursor-pointer rounded-[6px] bg-[rgba(144,145,156,0.08)] px-3 py-2 text-xs font-medium text-[#525358] focus:outline-none lg:text-sm`}
                  />
                </div>

                <div className="p-2 px-2 pt-3 text-xs font-medium text-black lg:text-sm">
                  Sắp xếp
                </div>
                <div>
                  <div
                    onClick={() => handleSelect('1')}
                    className="flex cursor-pointer items-center rounded-md px-3 py-2 text-xs font-medium text-[#525358] outline-none hover:bg-black hover:text-white lg:text-sm"
                  >
                    Mới nhất
                  </div>
                  <div
                    onClick={() => handleSelect('2')}
                    className="flex cursor-pointer items-center rounded-md px-3 py-2 text-xs font-medium text-[#525358] outline-none hover:bg-black hover:text-white lg:text-sm"
                  >
                    Cũ nhất
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeaderNews;
