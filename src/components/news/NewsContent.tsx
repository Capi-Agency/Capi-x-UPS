'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import NextImg from '../common/next-img';
import TagsPage from '../tags/page';

const NewsContent = () => {
  const categories = [
    { id: 1, name: 'Biến động thị trường' },
    { id: 2, name: 'Báo cáo ngày' },
    { id: 3, name: 'Tin đấu giá' },
    { id: 4, name: 'Tin nội bộ UPS' },
  ];

  const [currentCategory, setCurrentCategory] = useState<number>(
    categories[0].id,
  );

  const handleCategoryClick = (value: string) => {
    setCurrentCategory(Number(value));
  };

  const renderContent = () => {
    const news = [
      {
        id: 1,
        date: 'Sep 26, 2023',
        readTime: '9 min read',
        title: 'Definitive Guide to Make More Productive Flow.',
        imgSrc: '/assets/image/news.jpg',
      },
      {
        id: 2,
        date: 'Sep 27, 2023',
        readTime: '9 min read',
        title: 'Definitive Guide to Make More Productive Flow.',
        imgSrc: '/assets/image/news.jpg',
      },
      {
        id: 3,
        date: 'Sep 27, 2023',
        readTime: '9 min read',
        title: 'Definitive Guide to Make More Productive Flow.',
        imgSrc: '/assets/image/news.jpg',
      },
      {
        id: 4,
        date: 'Sep 27, 2023',
        readTime: '9 min read',
        title: 'Definitive Guide to Make More Productive Flow.',
        imgSrc: '/assets/image/news.jpg',
      },
      {
        id: 5,
        date: 'Sep 27, 2023',
        readTime: '9 min read',
        title: 'Definitive Guide to Make More Productive Flow.',
        imgSrc: '/assets/image/news.jpg',
      },
      {
        id: 6,
        date: 'Sep 27, 2023',
        readTime: '9 min read',
        title: 'Definitive Guide to Make More Productive Flow.',
        imgSrc: '/assets/image/news.jpg',
      },
      {
        id: 7,
        date: 'Sep 27, 2023',
        readTime: '9 min read',
        title: 'Definitive Guide to Make More Productive Flow.',
        imgSrc: '/assets/image/news.jpg',
      },
      {
        id: 8,
        date: 'Sep 27, 2023',
        readTime: '9 min read',
        title: 'Definitive Guide to Make More Productive Flow.',
        imgSrc: '/assets/image/news.jpg',
      },
      {
        id: 9,
        date: 'Sep 27, 2023',
        readTime: '9 min read',
        title: 'Definitive Guide to Make More Productive Flow.',
        imgSrc: '/assets/image/news.jpg',
      },
    ];
    switch (currentCategory) {
      case 1:
        return (
          <>
            <div className="grid grid-cols-3 gap-8">
              {news.slice(0, 6).map((newItem, index) => {
                const delay = ((index % 3) + 1) * 200;
                return (
                  <div
                    key={newItem.id}
                    className="rounded-t-[8px]"
                    data-aos="fade-up"
                    data-aos-delay={delay}
                  >
                    <div className="relative h-[351px] w-full">
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
                    <p className="text-[30px] font-semibold text-[#15171E]">
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
            {/* tin theo ngày */}
            <div className="mb-[150px]">
              <h4
                className="mb-8 font-bold text-[#15171E]"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Tin theo ngày
              </h4>
              <div className="grid grid-cols-3 gap-8">
                {news.map((newItem, index) => {
                  const delay = ((index % 3) + 1) * 200;
                  return (
                    <div
                      key={newItem.id}
                      className="rounded-t-[8px]"
                      data-aos="fade-up"
                      data-aos-delay={delay}
                    >
                      <div className="relative h-[351px] w-full">
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
                      <p className="text-[30px] font-semibold text-[#15171E]">
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
            </div>
          </>
        );
      case 2:
        return <div>Báo cáo ngày</div>;
      case 3:
        return <div>Tin đấu giá</div>;
      case 4:
        return <div>Tin nội bộ UPS</div>;
      default:
        return null;
    }
  };
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1280px]">
      <Tabs
        defaultValue={currentCategory.toString()}
        onValueChange={handleCategoryClick}
      >
        <h1
          className="mb-8 text-[80px] font-bold leading-[72px] -tracking-[1.6px] text-[#0C1C28]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Tin tức UPS
        </h1>
        <TabsList
          className="flex items-center justify-between"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex items-center gap-10">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id.toString()}
                className={`text-base leading-normal transition-all duration-150 ease-in-out ${
                  currentCategory === category.id
                    ? 'font-bold text-[#15171E]'
                    : 'font-semibold text-[#525358]'
                }`}
              >
                {category.name}
              </TabsTrigger>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="relative cursor-pointer rounded-[6px] bg-[rgba(144,145,156,0.08)]">
              <select className="block cursor-pointer appearance-none bg-transparent py-1 pl-2 pr-6 text-sm font-medium text-[#525358] focus:outline-none">
                <option value="1">Tất cả</option>
                <option value="2">Biến động thị trường</option>
                <option value="3">Báo cáo ngày</option>
                <option value="4">Tin đấu giá</option>
                <option value="5">Tin nội bộ UPS</option>
              </select>
              <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
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
              <select className="block cursor-pointer appearance-none bg-transparent py-1 pl-2 pr-6 text-sm font-medium text-[#525358] focus:outline-none">
                <option value="1">Mới nhất</option>
                <option value="2">Cũ nhất</option>
              </select>
              <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
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
        </TabsList>
        {categories.map((category) => (
          <TabsContent
            key={category.id}
            value={category.id.toString()}
            className="mt-8"
          >
            {renderContent()}
            {/* <TagsPage /> */}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default NewsContent;
