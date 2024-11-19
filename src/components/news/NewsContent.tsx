'use client';
import Link from 'next/link';
import NextImg from '../common/next-img';
type Props = {
  news: any;
  url?: string;
  title?: string;
};

const NewsAction = ({ news, url, title }: Props) => {
  return (
    <section className="custom-container mt-9 lg:mt-12 lg2:mt-14 2xl:mt-16 3xl:mt-20 3xl:!max-w-[calc(1280px+48px)]">
      <div className="mb-4 flex items-center justify-between lg:mb-6 2xl:mb-8 3xl:mb-10">
        <h2 className="text-[18px] font-bold text-[#141414] lg:text-[20px] lg2:text-[24px] 2xl:text-[28px] 3xl:text-[32px] 3xl:leading-[40px]">
          {title}
        </h2>
        <Link href={`${url}`}>
          <button className="flex items-center gap-1 text-sm font-bold text-[#E50261] lg:gap-2 lg:text-[18px]">
            Xem tất cả
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                className="h-4 w-4 lg:h-6 lg:w-6"
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
      <div className="grid grid-cols-2 gap-x-3 gap-y-4 md:grid-cols-4 lg:gap-x-4 lg:gap-y-6 lg2:gap-x-5 2xl:gap-x-8 2xl:gap-y-10">
        {news?.map((newItem: any, index: any) => {
          const delay = ((index % 4) + 1) * 200;
          return (
            <Link
              href={`${url}${newItem?.short_content?.slug}`}
              key={index}
              data-aos="fade-up"
              data-aos-delay={delay}
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
    </section>
  );
};

export default NewsAction;
