'use client';
import Link from 'next/link';
import NextImg from '../common/next-img';
import { useEffect, useState } from 'react';
type Props = {
  news: any;
  url: any;
  dataCateAndTags: any;
  slugCate?: any;
  currentPage?: any;
  setCurrentPage?: any;
  length?: any;
};

const NewsContentPage = ({
  news,
  url,
  dataCateAndTags,
  slugCate,
  currentPage,
  setCurrentPage,
  length = 12,
}: Props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleCategoryClick = (index: number, slug: string) => {
    setCurrentPage(1);
    setActiveIndex(index);
    slugCate(slug);
  };
  return (
    <div>
      <div className="custom-container mx-auto mt-6 lg:mt-7 xl:mt-8 2xl:mt-9 3xl:mt-12 3xl:!max-w-[calc(1280px+48px)]">
        <section>
          <div className="scrollbar-hidden mb-5 flex items-center gap-3 overflow-x-auto whitespace-nowrap lg:mb-6 lg:gap-4 2xl:mb-8 3xl:mb-10">
            {dataCateAndTags?.a_categories?.map((cate: any, index: number) => {
              return (
                <div key={index} className="flex items-center gap-3 lg:gap-4">
                  <h4
                    className={`cursor-pointer text-sm font-bold lg:text-base ${
                      activeIndex === index
                        ? 'text-[#0C1C28] underline'
                        : 'text-[#525358]'
                    }`}
                    onClick={() => handleCategoryClick(index, cate?.slug)}
                  >
                    {cate.title}
                  </h4>
                  <div
                    className={`size-1 rounded-full bg-black ${index === dataCateAndTags.a_categories.length - 1 ? 'hidden' : 'block'}`}
                  />
                </div>
              );
            })}
          </div>
          {news && news.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-3 gap-y-4 md:grid-cols-4 lg:gap-x-4 lg:gap-y-6 lg2:gap-x-5 2xl:gap-x-8 2xl:gap-y-10">
              {news?.map((newItem: any, index: any) => {
                const delay = 200;
                return (
                  <Link
                    href={`${url}${newItem?.short_content?.slug}`}
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={delay}
                    data-aos-duration="700"
                    className="group"
                  >
                    <div className="relative h-[165px] w-full overflow-hidden rounded-[16px] md:h-[171px] lg:h-[224px] lg2:h-[265px] 2xl:h-[296px]">
                      <NextImg
                        src={
                          process.env.REACT_APP_IMG_URL +
                          newItem?.short_content?.cover?.id
                        }
                        alt="Capi"
                        objectFit="cover"
                        className="rounded-[16px] transition-all duration-300 group-hover:scale-110"
                      />
                    </div>
                    <span className="mb-1 mt-2 inline-block text-xs font-medium leading-[16px] tracking-[0.14] lg:mb-2 lg:mt-4 lg:text-sm 2xl:mb-3 3xl:mt-5">
                      {newItem?.short_content?.date_published}
                    </span>
                    <p className="line-clamp-3 h-[60px] text-sm font-semibold text-[#15171E] lg:h-[72px] lg:text-base lg2:text-[18px]">
                      {newItem?.short_content?.title}
                    </p>
                    <div className="mt-2 flex items-center gap-2 lg:mt-3 2xl:mt-4">
                      <button className="rounded-[8px] bg-[rgba(144,145,156,0.15)] px-2 py-[5px] text-xs font-medium leading-normal text-[#111013] lg:text-sm">
                        App Mobile
                      </button>
                      <button className="rounded-[8px] bg-[rgba(144,145,156,0.15)] px-2 py-[5px] text-xs font-medium leading-normal text-[#111013] lg:text-sm">
                        Trải nghiệm
                      </button>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div>
              <p className="text-sm font-medium text-[#8C9AA4] lg:text-base">
                Không có dữ liệu
              </p>
            </div>
          )}
        </section>
        <button
          className={`btn mx-auto mt-[18px] bg-[#15171E] font-bold text-[#FFF] lg:mt-6 lg2:mt-7 2xl:mt-8 3xl:mt-[60px] ${length < 12 ? 'hidden' : ''}`}
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="700"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Tải thêm
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            className="h-4 w-4 lg:h-6 lg:w-6"
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
      {dataCateAndTags?.a_tags.length > 0 && (
        <div
          className="custom-container mt-10 flex flex-wrap items-center justify-center gap-6 lg:mt-[60px] lg:gap-10 xl:mt-20 2xl:mb-[-60px] 2xl:mt-[100px] 3xl:mt-[140px]"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="700"
        >
          {dataCateAndTags?.a_tags?.map((tag: any, index: number) => {
            return (
              <Link href={`#`} key={index}>
                <p
                  key={index}
                  className="text-sm font-bold leading-normal text-[#15171E] lg:text-[16px]"
                >
                  {tag.title}
                </p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NewsContentPage;
