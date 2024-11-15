'use client';
import Link from 'next/link';
import NextImg from '../common/next-img';
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

const AuctionNewsPage = (props: Props) => {
  return (
    <div>
      <div className="custom-container mx-auto 3xl:!max-w-[calc(1280px+48px)]">
        {/* Tin đấu giá */}
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

export default AuctionNewsPage;
