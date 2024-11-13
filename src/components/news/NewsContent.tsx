'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import NextImg from '../common/next-img';
import NewsBanner from './NewsBanner';
import Link from 'next/link';
import HeaderNews from './HeaderNews';

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
    <div className="custom-container mx-auto mt-16 3xl:!max-w-[calc(1280px+48px)]">
      <HeaderNews />
      <NewsBanner />
      {/* Tất cả */}
      <section>
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-[32px] font-bold leading-[40px] text-[#141414]">
            Tin hoạt động
          </h2>
          <Link href={'/tin-tuc/tin-hoat-dong'}>
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
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-x-8 gap-y-10">
          {news.map((newItem, index) => {
            const delay = ((index % 4) + 1) * 200;
            return (
              <Link
                href={'/tin-tuc/chi-tiet-tin-tuc'}
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
              </Link>
            );
          })}
        </div>
      </section>

      {/* banner */}
      <div className="relative my-20 flex overflow-hidden rounded-[40px] bg-[#150900]">
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
          <Link href={'/tin-tuc/tin-dau-gia'}>
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
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-x-8 gap-y-10">
          {news.slice(0, 4).map((newItem, index) => {
            const delay = ((index % 4) + 1) * 200;
            return (
              <Link
                href={'/tin-tuc/chi-tiet-tin-tuc'}
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
              </Link>
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
          <Link href={'/tin-tuc/cong-bo-thong-tin'}>
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
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-x-8 gap-y-10">
          {news.slice(0, 4).map((newItem, index) => {
            const delay = ((index % 4) + 1) * 200;
            return (
              <Link
                href={'/tin-tuc/chi-tiet-tin-tuc'}
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
              </Link>
            );
          })}
        </div>
      </section>
      {/* <TagsPage /> */}
    </div>
  );
};

export default NewsContent;
