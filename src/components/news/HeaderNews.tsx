'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import NextImg from '../common/next-img';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <>
      <h1 className="mb-7 text-[40px] font-bold leading-[54px] text-[#0C1C28]">
        Tin tức UPS
      </h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link
            href="/tin-tuc"
            className={`pb-[7px] text-base font-bold leading-normal text-[#525358] transition-all duration-150 ease-in-out ${pathname === '/tin-tuc' ? 'border-b border-[#E50261] text-[#15171E]' : ''}`}
          >
            Tất cả
          </Link>
          <Link
            href="/tin-tuc/tin-hoat-dong"
            className={`pb-[7px] text-base font-bold leading-normal text-[#525358] transition-all duration-150 ease-in-out ${pathname === '/tin-tuc/tin-hoat-dong' ? 'border-b border-[#E50261] text-[#15171E]' : ''}`}
          >
            Tin hoạt động
          </Link>
          <Link
            href="/tin-tuc/tin-dau-gia"
            className={`pb-[7px] text-base font-bold leading-normal text-[#525358] transition-all duration-150 ease-in-out ${pathname === '/tin-tuc/tin-dau-gia' ? 'border-b border-[#E50261] text-[#15171E]' : ''}`}
          >
            Tin đấu giá
          </Link>
          <Link
            href="/tin-tuc/cong-bo-thong-tin"
            className={`pb-[7px] text-base font-bold leading-normal text-[#525358] transition-all duration-150 ease-in-out ${pathname === '/tin-tuc/cong-bo-thong-tin' ? 'border-b border-[#E50261] text-[#15171E]' : ''}`}
          >
            Công bố thông tin
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="w-[250px] rounded-[6px] bg-[rgba(144,145,156,0.08)] px-3 py-[7px] outline-none placeholder:text-sm placeholder:font-medium placeholder:leading-none placeholder:text-[#525358]"
            />
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
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
          </div>

          <div className="relative cursor-pointer rounded-[6px] bg-[rgba(144,145,156,0.08)]">
            <select className="block cursor-pointer appearance-none bg-transparent py-2 pl-3 pr-7 text-sm font-medium text-[#525358] focus:outline-none">
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
            <select className="block cursor-pointer appearance-none bg-transparent py-2 pl-3 pr-7 text-sm font-medium text-[#525358] focus:outline-none">
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
    </>
  );
};

export default Navigation;
