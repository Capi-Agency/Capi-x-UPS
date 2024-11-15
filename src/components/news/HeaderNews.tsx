'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import NextImg from '../common/next-img';
import { useState } from 'react';

const HeaderNews = () => {
  const pathname = usePathname();
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (searchTerm === '') {
      setIsFocused(false);
    }
  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log('Tìm kiếm:', searchTerm);
    }
  };

  return (
    <div className="custom-container mt-10 lg:mt-12 xl:mt-14 2xl:mt-16 3xl:mt-[75px] 3xl:!max-w-[calc(1280px+48px)]">
      <div className="mb-[5px] flex items-center justify-between lg:mb-2 2xl:mb-4 3xl:mb-5">
        <h1 className="text-[20px] font-bold text-[#0C1C28] lg:text-[24px] lg2:text-[28px] 2xl:text-[32px] 2xl:leading-[40px] 3xl:text-[40px] 3xl:leading-[54px]">
          Tin tức UPS
        </h1>
        <form className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Tìm kiếm..."
            className={`${isFocused || searchTerm ? 'w-[150px] md:w-[230px] lg:w-[260px]' : 'w-[98px] lg:w-[125px]'} rounded-[6px] px-3 py-[7px] pl-8 text-xs font-medium text-[#525358] transition-all duration-300 ease-in-out placeholder:text-xs placeholder:font-medium placeholder:leading-none placeholder:text-[#525358] lg:pl-11 lg:text-sm lg:placeholder:text-sm`}
          />
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer lg:left-3"
            onClick={handleSearch}
          >
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
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
          </button>
        </form>
      </div>
      <div className="scrollbar-hidden flex items-center justify-between overflow-x-auto whitespace-nowrap">
        <div className="flex items-center gap-3 md:gap-4 lg:gap-6 2xl:gap-8 3xl:gap-10">
          <Link
            href="/tin-tuc"
            className={`py-[7px] text-base font-bold leading-normal text-[#525358] transition-all duration-150 ease-in-out lg:text-[18px] ${pathname === '/tin-tuc' ? 'border-b border-[#E50261] text-[#15171E]' : ''}`}
          >
            Tất cả
          </Link>
          <Link
            href="/tin-tuc/tin-hoat-dong"
            className={`py-[7px] text-base font-bold leading-normal text-[#525358] transition-all duration-150 ease-in-out lg:text-[18px] ${pathname === '/tin-tuc/tin-hoat-dong' ? 'border-b border-[#E50261] text-[#15171E]' : ''}`}
          >
            Tin hoạt động
          </Link>
          <Link
            href="/tin-tuc/tin-dau-gia"
            className={`py-[7px] text-base font-bold leading-normal text-[#525358] transition-all duration-150 ease-in-out lg:text-[18px] ${pathname === '/tin-tuc/tin-dau-gia' ? 'border-b border-[#E50261] text-[#15171E]' : ''}`}
          >
            Tin đấu giá
          </Link>
          <Link
            href="/tin-tuc/cong-bo-thong-tin"
            className={`py-[7px] text-base font-bold leading-normal text-[#525358] transition-all duration-150 ease-in-out lg:text-[18px] ${pathname === '/tin-tuc/cong-bo-thong-tin' ? 'border-b border-[#E50261] text-[#15171E]' : ''}`}
          >
            Công bố thông tin
          </Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div className="relative cursor-pointer rounded-[6px] bg-[rgba(144,145,156,0.08)]">
            <select className="block cursor-pointer appearance-none bg-transparent py-2 pl-3 pr-7 text-xs font-medium text-[#525358] focus:outline-none lg:text-sm">
              <option value="1">Tất cả danh mục</option>
              <option value="2">Tin hoạt động</option>
              <option value="3">Tin đấu giá</option>
              <option value="5">Công bố thông tin</option>
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

          <div className="relative flex cursor-pointer items-center gap-2 rounded-[6px] bg-[rgba(144,145,156,0.08)]">
            <select className="block cursor-pointer appearance-none bg-transparent py-2 pl-3 pr-7 text-xs font-medium text-[#525358] focus:outline-none lg:text-sm">
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
      </div>
    </div>
  );
};

export default HeaderNews;
