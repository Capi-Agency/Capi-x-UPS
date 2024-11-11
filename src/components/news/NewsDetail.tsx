import React from 'react';
import NextImg from '../common/next-img';
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
const NewsDetail = (props: Props) => {
  return (
    <div>
      <section className="custom-container 3xl:!max-w-[calc(1280px+48px)] mt-16">
        <div
          className="relative h-[400px] w-full"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <NextImg
            src="/assets/image/banner-new-detail.jpg"
            alt="Capi"
            objectFit="cover"
            className="rounded-[20px]"
          />
        </div>
      </section>
      <section className="custom-container 2xl:!max-w-[calc(1120px+48px)] mt-10">
        <div className="grid grid-cols-[auto,260px] gap-[60px]">
          <div data-aos="fade-up" data-aos-delay="200">
            <h1 className="text-[32px] font-semibold leading-[40px] text-[#15171E]">
              Ông Trump nói về lạm phát, chỉ trích bà Harris trong cuộc vận động
              tranh cử ở Bắc Carolina
            </h1>
            <div className="mb-8 mt-[18px] flex items-center gap-4">
              <span className="text-base font-bold text-[#525358]">
                Tin cổ đông
              </span>
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                  fill="none"
                >
                  <path
                    d="M0 9.60606L0.910026 10.5L6 5.5L0.910026 0.5L0 1.39394L4.17995 5.5L0 9.60606Z"
                    fill="#161519"
                  />
                </svg>
              </i>
              <span className="text-base font-bold text-[#525358]">
                Báo cáo tài chính
              </span>
            </div>
            <p className="text-base leading-[26px] text-[#696B75]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div className="mt-[18px] w-full rounded-[20px] border border-[#ECECEC] bg-[#F6F6F7] p-5">
              <div className="mb-5">
                <p className="text-base font-medium text-[#535662]">
                  Giúp chúng tôi cải thiện hướng dẫn này
                </p>
                <p className="text-[32px] font-semibold text-black">
                  Chấm điểm độ hữu dụng của bài viết
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <div className="cursor-pointer rounded-[12px] border-[1px] border-[#ECECEC] bg-white px-6 py-3 text-base font-semibold hover:bg-black hover:text-[#02E56A]">
                  Còn nhiều hạn chế 😡
                </div>
                <div className="cursor-pointer rounded-[12px] border-[1px] border-[#ECECEC] bg-white px-6 py-3 text-base font-semibold hover:bg-black hover:text-[#02E56A]">
                  Đủ hữu dụng 😘
                </div>
                <div className="cursor-pointer rounded-[12px] border-[1px] border-[#ECECEC] bg-white px-6 py-3 text-base font-semibold hover:bg-black hover:text-[#02E56A]">
                  Nội dung tuyệt vời 😍
                </div>
              </div>
            </div>
            <p className="mt-[30px] text-center text-base font-medium text-[#535662]">
              Cập nhật mới nhất: 20/08/2024
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="600">
            <h4 className="mb-5 text-[18px] font-medium text-[#15171E]">
              Thẻ bài viết
            </h4>
            <ul>
              <li className="border-b border-[#E7E9EF] py-3 text-[18px] font-medium text-[#15171E]">
                Báo cáo ngày
              </li>
              <li className="border-b border-[#E7E9EF] py-3 text-[18px] font-medium text-[#15171E]">
                Phân tích từ UPS
              </li>
              <li className="border-b border-[#E7E9EF] py-3 text-[18px] font-medium text-[#15171E]">
                Sản phẩm đầu tư mới
              </li>
              <li className="border-b border-[#E7E9EF] py-3 text-[18px] font-medium text-[#15171E]">
                Về UPS
              </li>
              <li className="border-b border-[#E7E9EF] py-3 text-[18px] font-medium text-[#15171E]">
                Sự kiện doanh nghiệp
              </li>
              <li className="border-b border-[#E7E9EF] py-3 text-[18px] font-medium text-[#15171E]">
                Nội bộ UPS
              </li>
            </ul>
            <div className="mt-[40px] rounded-[10px] border border-[#C1C7DD] bg-[#F3F5FB] p-[16px]">
              <h5 className="font-hanken-grotesk mb-[8px] text-[16px] font-bold leading-normal text-[#15171E]">
                Tôi muốn đọc nhiều hơn
              </h5>
              <p className="font-hanken-grotesk text-[14px] font-medium leading-normal text-[#535662]">
                Đăng ký nhận thêm các hưỡng dẫn giao dịch tuyệt vời từ UPS qua
                email của bạn
              </p>
              <form action="">
                <input
                  type="text"
                  className="my-[16px] w-full rounded-[8px] bg-[#ECEEF4] px-[10px] py-[8px] backdrop-blur-[20px]"
                  placeholder="abc@email.com"
                  required
                />
                <div className="hidden xl:inline-flex">
                  <Link
                    href="/"
                    className="btn active group !bg-[#15171E] !text-[#02E56A]"
                  >
                    Đăng ký
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.7599 5.98952C18.7599 5.7906 18.6809 5.59984 18.5402 5.45919C18.3996 5.31853 18.2088 5.23952 18.0099 5.23952L9.42564 5.23952C9.01142 5.23952 8.67564 5.5753 8.67564 5.98952C8.67564 6.40373 9.01142 6.73952 9.42564 6.73952L16.1997 6.73952L5.45904 17.4802C5.16615 17.7731 5.16615 18.2479 5.45904 18.5408C5.75194 18.8337 6.22681 18.8337 6.5197 18.5408L17.2599 7.80062V14.5738C17.2599 14.988 17.5957 15.3238 18.0099 15.3238C18.4241 15.3238 18.7599 14.988 18.7599 14.5738L18.7599 5.98952Z"
                          fill="#02E56A"
                        />
                      </svg>
                    </i>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Cùng chuyên mục */}
      <section className="custom-container 3xl:!max-w-[calc(1280px+48px)] mt-[60px]">
        <h2
          className="text-[40px] font-bold text-[#0C1C28]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Cùng chuyên mục
        </h2>

        <div className="mt-10 grid grid-cols-4 gap-x-8 gap-y-10">
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
    </div>
  );
};

export default NewsDetail;
