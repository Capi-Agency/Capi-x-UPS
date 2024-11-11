'use client';
import React, { useState } from 'react';
import NextImg from '../common/next-img';
import NewsBanner from './NewsBanner';
import Link from 'next/link';
type Props = {};
const news = [
  {
    id: 1,
    date: 'Ngày 26, 2023',
    readTime: '9 phút đọc',
    title:
      'Nóng: Thần đồng pickleball Quang Dương đánh bại VĐV số 1 thế giới theo kịch bản khó tin, ngạo nghễ đi sâu tại giải đấu danh tiếng',
    imgSrc: '/assets/image/news.jpg',
  },
  {
    id: 2,
    date: 'Ngày 26, 2023',
    readTime: '9 phút đọc',
    title:
      'Nóng: Thần đồng pickleball Quang Dương đánh bại VĐV số 1 thế giới theo kịch bản khó tin, ngạo nghễ đi sâu tại giải đấu danh tiếng',
    imgSrc: '/assets/image/news.jpg',
  },
  {
    id: 3,
    date: 'Ngày 26, 2023',
    readTime: '9 phút đọc',
    title:
      'Nóng: Thần đồng pickleball Quang Dương đánh bại VĐV số 1 thế giới theo kịch bản khó tin, ngạo nghễ đi sâu tại giải đấu danh tiếng',
    imgSrc: '/assets/image/news.jpg',
  },
  {
    id: 4,
    date: 'Ngày 26, 2023',
    readTime: '9 phút đọc',
    title:
      'Nóng: Thần đồng pickleball Quang Dương đánh bại VĐV số 1 thế giới theo kịch bản khó tin, ngạo nghễ đi sâu tại giải đấu danh tiếng',
    imgSrc: '/assets/image/news.jpg',
  },
  {
    id: 5,
    date: 'Ngày 26, 2023',
    readTime: '9 phút đọc',
    title:
      'Nóng: Thần đồng pickleball Quang Dương đánh bại VĐV số 1 thế giới theo kịch bản khó tin, ngạo nghễ đi sâu tại giải đấu danh tiếng',
    imgSrc: '/assets/image/news.jpg',
  },
  {
    id: 6,
    date: 'Ngày 26, 2023',
    readTime: '9 phút đọc',
    title:
      'Nóng: Thần đồng pickleball Quang Dương đánh bại VĐV số 1 thế giới theo kịch bản khó tin, ngạo nghễ đi sâu tại giải đấu danh tiếng',
    imgSrc: '/assets/image/news.jpg',
  },
  {
    id: 7,
    date: 'Ngày 26, 2023',
    readTime: '9 phút đọc',
    title:
      'Nóng: Thần đồng pickleball Quang Dương đánh bại VĐV số 1 thế giới theo kịch bản khó tin, ngạo nghễ đi sâu tại giải đấu danh tiếng',
    imgSrc: '/assets/image/news.jpg',
  },
  {
    id: 8,
    date: 'Ngày 26, 2023',
    readTime: '9 phút đọc',
    title:
      'Nóng: Thần đồng pickleball Quang Dương đánh bại VĐV số 1 thế giới theo kịch bản khó tin, ngạo nghễ đi sâu tại giải đấu danh tiếng',
    imgSrc: '/assets/image/news.jpg',
  },
  {
    id: 9,
    date: 'Ngày 26, 2023',
    readTime: '9 phút đọc',
    title:
      'Nóng: Thần đồng pickleball Quang Dương đánh bại VĐV số 1 thế giới theo kịch bản khó tin, ngạo nghễ đi sâu tại giải đấu danh tiếng',
    imgSrc: '/assets/image/news.jpg',
  },
  {
    id: 10,
    date: 'Ngày 26, 2023',
    readTime: '9 phút đọc',
    title:
      'Nóng: Thần đồng pickleball Quang Dương đánh bại VĐV số 1 thế giới theo kịch bản khó tin, ngạo nghễ đi sâu tại giải đấu danh tiếng',
    imgSrc: '/assets/image/news.jpg',
  },
  {
    id: 11,
    date: 'Ngày 26, 2023',
    readTime: '9 phút đọc',
    title:
      'Nóng: Thần đồng pickleball Quang Dương đánh bại VĐV số 1 thế giới theo kịch bản khó tin, ngạo nghễ đi sâu tại giải đấu danh tiếng',
    imgSrc: '/assets/image/news.jpg',
  },
  {
    id: 12,
    date: 'Ngày 26, 2023',
    readTime: '9 phút đọc',
    title:
      'Nóng: Thần đồng pickleball Quang Dương đánh bại VĐV số 1 thế giới theo kịch bản khó tin, ngạo nghễ đi sâu tại giải đấu danh tiếng',
    imgSrc: '/assets/image/news.jpg',
  },
];

const InformationDisclosure = (props: Props) => {
  return (
    <div>
      <div className="mx-auto mt-16 custom-container 3xl:!max-w-[calc(1280px+48px)]">
        <h1 className="mb-7 text-[40px] font-bold leading-[54px] text-[#0C1C28]">
          Tin tức UPS
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link
              href={'tin-tuc'}
              className={`pb-[7px] text-base font-bold leading-normal text-[#525358] transition-all duration-150 ease-in-out`}
            >
              Tất cả
            </Link>
            <Link
              href={'tin-hoat-dong'}
              className={`pb-[7px] text-base font-bold leading-normal text-[#525358] transition-all duration-150 ease-in-out`}
            >
              Tin hoạt động
            </Link>
            <Link
              href={'tin-dau-gia'}
              className={`pb-[7px] text-base font-bold leading-normal text-[#525358] transition-all duration-150 ease-in-out`}
            >
              Tin đấu giá
            </Link>
            <Link
              href={'cong-bo-thong-tin'}
              className={`border-b border-[#E50261] pb-[7px] text-base font-bold leading-normal text-[#15171E] transition-all duration-150 ease-in-out`}
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
        <NewsBanner />
        {/* Tin hoạt động */}
        <section>
          <div className="mb-10 flex items-center gap-4">
            <div>
              <h4
                className={`flex items-center gap-4 text-base font-bold text-[#0C1C28] underline`}
              >
                Tin cổ đông
                <div className={`size-1 rounded-full bg-black`}></div>
              </h4>
            </div>
            <div>
              <h4
                className={`flex items-center gap-4 text-base font-bold text-[#525358]`}
              >
                Báo cáo tài chính
                <div className={`size-1 rounded-full bg-black`}></div>
              </h4>
            </div>
            <div>
              <h4
                className={`flex items-center gap-4 text-base font-bold text-[#525358]`}
              >
                Quan hệ cổ đông
                <div className={`size-1 rounded-full bg-black`}></div>
              </h4>
            </div>
            <div>
              <h4
                className={`flex items-center gap-4 text-base font-bold text-[#525358]`}
              >
                Thông tin Quản trị
                <div className={`size-1 rounded-full bg-black`}></div>
              </h4>
            </div>
            <div>
              <h4
                className={`flex items-center gap-4 text-base font-bold text-[#525358]`}
              >
                Báo cáo thường niên
              </h4>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-x-8 gap-y-10">
            {news &&
              news.map((newItem: any, index: number) => {
                const delay = ((index % 4) + 1) * 200;
                return (
                  <div
                    key={newItem.id}
                    className="rounded-t-[8px]"
                    data-aos="fade-up"
                    data-aos-delay={delay}
                  >
                    <div className="relative h-[296px] w-full">
                      <NextImg
                        src={newItem.imgSrc}
                        alt="Capi"
                        objectFit="cover"
                        className="rounded-[8px]"
                      />
                    </div>
                    <span className="mb-3 mt-8 inline-block text-sm font-medium leading-[16px] tracking-[0.14]">
                      {newItem.date} · {newItem.readTime}
                    </span>
                    <p className="line-clamp-3 text-[18px] font-semibold text-[#15171E]">
                      {newItem.title}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <button className="rounded-[8px] bg-[rgba(144,145,156,0.15)] px-2 py-[5px] text-[14px] font-medium leading-normal text-[#111013]">
                        App Mobile
                      </button>
                      <button className="rounded-[8px] bg-[rgba(144,145,156,0.15)] px-2 py-[5px] text-[14px] font-medium leading-normal text-[#111013]">
                        Trải nghiệm
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
        <button
          className="mx-auto mt-[60px] flex items-center gap-3 rounded-[16px] bg-[#15171E] py-3 pl-6 pr-4 text-[18px] font-bold text-[#FFF]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Tải thêm
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.2594 5.98952C19.2594 5.7906 19.1804 5.59984 19.0398 5.45919C18.8991 5.31853 18.7083 5.23952 18.5094 5.23952L9.92515 5.23952C9.51093 5.23952 9.17515 5.5753 9.17515 5.98952C9.17515 6.40373 9.51093 6.73952 9.92515 6.73952L16.6992 6.73952L5.95855 17.4802C5.66566 17.7731 5.66566 18.2479 5.95855 18.5408C6.25145 18.8337 6.72632 18.8337 7.01921 18.5408L17.7594 7.80062V14.5738C17.7594 14.988 18.0952 15.3238 18.5094 15.3238C18.9236 15.3238 19.2594 14.988 19.2594 14.5738L19.2594 5.98952Z"
              fill="white"
            />
          </svg>
        </button>
        {/* <TagsPage /> */}
      </div>
    </div>
  );
};

export default InformationDisclosure;
