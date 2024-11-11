'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import NextImg from '../common/next-img';
import NewsBanner from './NewsBanner';
import Link from 'next/link';

const NewsContent = () => {
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

  return (
    <div className="mx-auto mt-16 custom-container 3xl:!max-w-[calc(1280px+48px)]">
      <h1 className="mb-7 text-[40px] font-bold leading-[54px] text-[#0C1C28]">
        Tin tức UPS
      </h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link
            href={'tin-tuc'}
            className={`border-b border-[#E50261] pb-[7px] text-base font-bold leading-normal text-[#15171E] transition-all duration-150 ease-in-out`}
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
            className={`pb-[7px] text-base font-bold leading-normal text-[#525358] transition-all duration-150 ease-in-out`}
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
      {/* Tất cả */}
      <section>
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-[32px] font-bold leading-[40px] text-[#141414]">
            Tin hoạt động
          </h2>
          <button className="flex items-center gap-3 text-[18px] font-bold text-[#E50261]">
            Xem tất cả
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.7595 6.64186C18.7595 6.44295 18.6804 6.25218 18.5398 6.11153C18.3991 5.97088 18.2084 5.89186 18.0095 5.89186L9.42518 5.89186C9.01096 5.89186 8.67518 6.22765 8.67518 6.64186C8.67518 7.05607 9.01096 7.39186 9.42518 7.39186L16.1992 7.39186L5.45858 18.1325C5.16569 18.4254 5.16569 18.9003 5.45858 19.1932C5.75148 19.4861 6.22635 19.4861 6.51925 19.1932L17.2595 8.45296V15.2261C17.2595 15.6403 17.5952 15.9761 18.0095 15.9761C18.4237 15.9761 18.7595 15.6403 18.7595 15.2261L18.7595 6.64186Z"
                  fill="#E50261"
                />
              </svg>
            </i>
          </button>
        </div>
        <div className="grid grid-cols-4 gap-x-8 gap-y-10">
          {news.map((newItem, index) => {
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

      {/* banner */}
      <div className="relative my-20 flex rounded-[40px] bg-[#150900]">
        <div
          className="relative h-[310px] w-[55%]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <NextImg
            src="/assets/image/news-banner1.png"
            alt="Capi"
            objectFit="cover"
            className="rounded-l-[40px]"
          />
        </div>
        <div
          className="absolute right-12 top-11 flex w-[53%] flex-col"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <span className="text-[18px] font-medium leading-[40px] text-[#FFF]">
            #trungtamdaotao
          </span>
          <p className="mb-6 mt-2 text-[40px] font-bold leading-[49px] text-[#FFBC00]">
            Trở thành nhà đầu tư chuyên nghiệp với UPS Academy
          </p>
          <div>
            <button className="flex items-center gap-3 rounded-2xl bg-[#FF6D00] p-3 pl-4 text-[18px] font-bold leading-normal text-[#FFF] hover:shadow-[-2px_3px_0px_0px_#00813B]">
              Khám phá ngay
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.7594 6.48952C18.7594 6.2906 18.6804 6.09984 18.5398 5.95919C18.3991 5.81853 18.2083 5.73952 18.0094 5.73952L9.42515 5.73952C9.01093 5.73952 8.67515 6.0753 8.67515 6.48952C8.67515 6.90373 9.01093 7.23952 9.42515 7.23952L16.1992 7.23952L5.45855 17.9802C5.16566 18.2731 5.16566 18.7479 5.45855 19.0408C5.75145 19.3337 6.22632 19.3337 6.51921 19.0408L17.2594 8.30062V15.0738C17.2594 15.488 17.5952 15.8238 18.0094 15.8238C18.4236 15.8238 18.7594 15.488 18.7594 15.0738L18.7594 6.48952Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Tin đấu giá */}
      <section className="mb-20">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-[32px] font-bold leading-[40px] text-[#141414]">
            Tin đấu giá
          </h2>
          <button className="flex items-center gap-3 text-[18px] font-bold text-[#E50261]">
            Xem tất cả
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.7595 6.64186C18.7595 6.44295 18.6804 6.25218 18.5398 6.11153C18.3991 5.97088 18.2084 5.89186 18.0095 5.89186L9.42518 5.89186C9.01096 5.89186 8.67518 6.22765 8.67518 6.64186C8.67518 7.05607 9.01096 7.39186 9.42518 7.39186L16.1992 7.39186L5.45858 18.1325C5.16569 18.4254 5.16569 18.9003 5.45858 19.1932C5.75148 19.4861 6.22635 19.4861 6.51925 19.1932L17.2595 8.45296V15.2261C17.2595 15.6403 17.5952 15.9761 18.0095 15.9761C18.4237 15.9761 18.7595 15.6403 18.7595 15.2261L18.7595 6.64186Z"
                  fill="#E50261"
                />
              </svg>
            </i>
          </button>
        </div>
        <div className="grid grid-cols-4 gap-x-8 gap-y-10">
          {news.slice(0, 4).map((newItem, index) => {
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

      {/* Công bố thông tin */}
      <section className="mb-20">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-[32px] font-bold leading-[40px] text-[#141414]">
            Công bố thông tin
          </h2>
          <button className="flex items-center gap-3 text-[18px] font-bold text-[#E50261]">
            Xem tất cả
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.7595 6.64186C18.7595 6.44295 18.6804 6.25218 18.5398 6.11153C18.3991 5.97088 18.2084 5.89186 18.0095 5.89186L9.42518 5.89186C9.01096 5.89186 8.67518 6.22765 8.67518 6.64186C8.67518 7.05607 9.01096 7.39186 9.42518 7.39186L16.1992 7.39186L5.45858 18.1325C5.16569 18.4254 5.16569 18.9003 5.45858 19.1932C5.75148 19.4861 6.22635 19.4861 6.51925 19.1932L17.2595 8.45296V15.2261C17.2595 15.6403 17.5952 15.9761 18.0095 15.9761C18.4237 15.9761 18.7595 15.6403 18.7595 15.2261L18.7595 6.64186Z"
                  fill="#E50261"
                />
              </svg>
            </i>
          </button>
        </div>
        <div className="grid grid-cols-4 gap-x-8 gap-y-10">
          {news.slice(0, 4).map((newItem, index) => {
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
      {/* <TagsPage /> */}
    </div>
  );
};

export default NewsContent;
