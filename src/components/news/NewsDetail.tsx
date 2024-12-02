'use client';
import React, { useEffect, useState } from 'react';
import NextImg from '../common/next-img';
import Link from 'next/link';

type Props = {
  data: any;
  related?: any;
  url?: any;
};

const NewsDetail = ({ data, related, url }: Props) => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  }, []);
  return (
    <div>
      <section className="custom-container mt-8 md:mt-10 lg:mt-12 xl:mt-14 3xl:mt-16 3xl:!max-w-[calc(1280px+48px)]">
        <div
          className="relative w-full pt-[60%] md:pt-[50%] xl:pt-[40%] 3xl:pt-[36%]"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="700"
        >
          <NextImg
            src={process.env.REACT_APP_IMG_URL + data?.thumbnail?.id}
            alt="Capi"
            objectFit="cover"
            className="rounded-[20px]"
          />
        </div>
      </section>
      <section className="custom-container mt-5 lg:mt-7 lg:!max-w-[896px+48px] lg2:mt-9 lg2:!max-w-[1008px+48px] 2xl:mt-10 2xl:!max-w-[calc(1120px+48px)]">
        <div className="flex flex-col gap-6 md:grid md:grid-cols-[auto,260px] lg:gap-8 lg2:gap-12 2xl:gap-[60px]">
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="700">
            <h1 className="text-[18px] font-semibold text-[#15171E] md:text-[20px] lg:text-[28px] lg2:text-[32px] lg2:leading-[40px]">
              {data?.title}
            </h1>
            {/* <div className="mb-8 mt-[18px] flex items-center gap-4">
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
            </div> */}
            <div
              dangerouslySetInnerHTML={{
                __html: render && data?.content,
              }}
              className="mt-5 lg:mt-8 lg2:mt-10"
            ></div>
            {data?.files &&
              data?.files.map((file: any, index: number) => {
                return (
                  <Link
                    key={index}
                    href={
                      process.env.REACT_APP_IMG_URL +
                      file?.directus_files_id?.id
                    }
                    target="_blank"
                    className="mt-3 flex items-center justify-center underline"
                  >
                    <span>Xem tài liệu: {file.directus_files_id?.title}</span>
                  </Link>
                );
              })}

            <div className="mt-5 w-full rounded-[20px] border border-[#ECECEC] bg-[#F6F6F7] p-5">
              <div className="mb-5">
                <p className="text-base font-medium text-[#535662]">
                  Giúp chúng tôi cải thiện hướng dẫn này
                </p>
                <p className="text-[20px] font-semibold text-black lg:text-[28px] lg2:text-[32px]">
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
            <p className="mt-4 text-center text-sm font-medium text-[#535662] md:mt-5 md:text-base lg:mt-6 lg2:mt-[30px]">
              Cập nhật mới nhất: {data?.date_published}
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="700">
            <h4 className="mb-3 text-base font-medium text-[#15171E] xl:mb-5 xl:text-[18px]">
              Thẻ bài viết
            </h4>
            <ul>
              <li className="border-b border-[#E7E9EF] py-3 text-base font-medium text-[#15171E] xl:text-[18px]">
                <Link href={`#`}>Báo cáo ngày</Link>
              </li>
              <li className="border-b border-[#E7E9EF] py-3 text-base font-medium text-[#15171E] xl:text-[18px]">
                <Link href={`#`}>Phân tích từ UPS</Link>
              </li>
              <li className="border-b border-[#E7E9EF] py-3 text-base font-medium text-[#15171E] xl:text-[18px]">
                <Link href={`#`}>Sản phẩm đầu tư mới</Link>
              </li>
              <li className="border-b border-[#E7E9EF] py-3 text-base font-medium text-[#15171E] xl:text-[18px]">
                <Link href={`#`}>Về UPS</Link>
              </li>
              <li className="border-b border-[#E7E9EF] py-3 text-base font-medium text-[#15171E] xl:text-[18px]">
                <Link href={`#`}>Sự kiện doanh nghiệp</Link>
              </li>
              <li className="border-b border-[#E7E9EF] py-3 text-base font-medium text-[#15171E] xl:text-[18px]">
                <Link href={`#`}>Nội bộ UPS</Link>
              </li>
            </ul>
            <div className="mt-5 rounded-[10px] border border-[#C1C7DD] bg-[#F3F5FB] p-[16px] lg:mt-7 lg2:mt-9 2xl:mt-[40px]">
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
                  className="my-[16px] w-full rounded-[8px] bg-[#ECEEF4] px-[10px] py-[8px] text-sm backdrop-blur-[20px] placeholder:text-sm"
                  placeholder="abc@email.com"
                  required
                />
                <div className="inline-block">
                  <Link
                    href="/"
                    className="btn group bg-[#15171E] text-[#02E56A]"
                  >
                    Đăng ký
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 lg:h-6 lg:w-6"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
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
      {related && (
        <section className="custom-container mt-7 lg2:mt-10 xl:mt-12 2xl:mt-[52px] 3xl:mt-[60px] 3xl:!max-w-[calc(1280px+48px)]">
          <h2
            className="mb-5 text-[20px] font-bold text-[#0C1C28] lg:mb-[30px] lg:text-[24px] lg2:mb-10 lg2:text-[32px] 2xl:text-[38px] 3xl:text-[40px]"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
          >
            Cùng chuyên mục
          </h2>

          <div className="grid grid-cols-2 gap-x-3 gap-y-4 md:grid-cols-4 lg:gap-x-4 lg:gap-y-6 lg2:gap-x-5 2xl:gap-x-8 2xl:gap-y-10">
            {related.map((newItem: any, index: number) => {
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
        </section>
      )}
      {data?.tags.length > 0 && (
        <div
          className="custom-container mt-10 flex flex-wrap items-center justify-center gap-6 lg:mt-[60px] lg:gap-10 xl:mt-20 2xl:mb-[-60px] 2xl:mt-[100px] 3xl:mt-[140px] 3xl:!max-w-[calc(1280px+48px)]"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="700"
        >
          {data?.tags?.map(({ tag }: any, index: number) => {
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

export default NewsDetail;
