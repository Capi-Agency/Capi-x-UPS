'use client';
import React, { useEffect, useState } from 'react';
import NextImg from '../common/next-img';
import Link from 'next/link';

type Props = {
  data: any;
};

const Performance = ({ data }: Props) => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  }, []);
  return (
    <section className="mt-10 overflow-hidden bg-[#1D1D1F] lg:mt-[60px] xl:mt-20 2xl:mt-[100px] 3xl:mt-[120px]">
      <div className="custom-container justify-between pb-10 xl:pb-[60px] 2xl:pb-20 3xl:!max-w-[calc(1280px+48px)]">
        <div className="flex flex-col-reverse gap-12 md:grid md:grid-cols-[381px,auto] md:gap-[10px] lg:grid-cols-[500px,auto] lg:gap-[45px] xl:gap-[53px] 2xl:gap-[132px] 3xl:gap-[105px]">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
            className="mt-10 xl:mt-[60px] 2xl:mt-20"
          >
            <span className="text-sm font-medium text-[#FFF] lg:text-base xl:text-[18px] xl:leading-[40px]">
              {data?.hashtag}
            </span>
            <h4 className="mt-1 text-[20px] font-bold text-[#FFF] lg:text-[30px] xl:mt-2 xl:text-[40px] xl:leading-[46px] 2xl:text-[48px] 2xl:leading-[54px]">
              <span
                dangerouslySetInnerHTML={{
                  __html: render && data?.title,
                }}
              ></span>
            </h4>
            <p className="my-2 mb-4 text-sm font-medium leading-[28px] text-[#FFF] lg:my-4 lg:w-[80%] lg:text-base xl:my-6 xl:w-full xl:text-[18px] 2xl:my-8">
              {data?.sub_title}
            </p>
            <Link href={data?.cta?.url}>
              <button className="btn bg-gradient-to-b from-[#FDF2CB] to-[#DABB6B]">
                {data?.cta?.text}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="size-4 lg:size-6"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.7589 5.98952C18.7589 5.7906 18.6799 5.59984 18.5393 5.45919C18.3986 5.31853 18.2078 5.23952 18.0089 5.23952L9.42466 5.23952C9.01045 5.23952 8.67466 5.5753 8.67466 5.98952C8.67466 6.40373 9.01045 6.73952 9.42466 6.73952L16.1987 6.73952L5.45807 17.4802C5.16517 17.7731 5.16517 18.2479 5.45807 18.5408C5.75096 18.8337 6.22583 18.8337 6.51873 18.5408L17.2589 7.80062V14.5738C17.2589 14.988 17.5947 15.3238 18.0089 15.3238C18.4231 15.3238 18.7589 14.988 18.7589 14.5738L18.7589 5.98952Z"
                    fill="#111111"
                  />
                </svg>
              </button>
            </Link>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="700"
            className="relative hidden h-full w-full pt-[75%] md:block md:pt-0 lg:-right-5 lg2:-right-24 xl:-right-16 2xl:-right-20"
          >
            <NextImg
              src={process.env.REACT_APP_IMG_URL + data?.cover}
              alt="UPS"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-10 lg2:mt-[120px]">
          <div className="flex flex-col gap-6 md:grid md:grid-cols-[196px,auto] md:gap-[56px] lg:grid-cols-[416px,auto] lg:gap-10 xl:grid-cols-[500px,auto] 2xl:gap-[120px]">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="700"
            >
              <span className="text-sm font-medium leading-[24px] text-[#FFF] lg:text-base lg:leading-[40px] xl:text-[18px]">
                {data?.hashtag_2}
              </span>
              <p className="mt-2 text-[20px] font-bold text-[#FFF] lg:text-[24px] xl:text-[30px]">
                {data?.title_2}
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="700"
              className="grid gap-6 md:grid-cols-2 md:gap-10"
            >
              <div className="flex flex-col gap-4 2xl:ml-10">
                <div className="flex items-center gap-3 2xl:gap-4">
                  <div className="relative h-[16px] w-[19px] lg:h-[20px] lg:w-[24px] xl:h-[26px] xl:w-[31px] 2xl:h-[34px] 2xl:w-10">
                    <NextImg
                      src={
                        process.env.REACT_APP_IMG_URL +
                        data?.item_list[0]?.item?.icon
                      }
                      alt="UPS"
                      className="object-cover"
                    />
                  </div>

                  <span className="text-[20px] font-bold text-[#FFF] xl:text-[30px] 2xl:text-[32px] 2xl:leading-[40px]">
                    {data?.item_list[0]?.item?.title}
                  </span>
                </div>
                <p className="text-sm text-[#FFF] xl:text-base 2xl:tracking-[0.328px]">
                  {data?.item_list[0]?.item?.sub_title}
                </p>
              </div>

              <div className="flex flex-col gap-4 2xl:ml-10">
                <div className="flex items-center gap-3 2xl:gap-4">
                  <div className="relative size-[16.5px] lg:size-[21px] xl:size-7 2xl:h-9 2xl:w-9">
                    <NextImg
                      src={
                        process.env.REACT_APP_IMG_URL +
                        data?.item_list[1]?.item?.icon
                      }
                      alt="UPS"
                      className="object-cover"
                    />
                  </div>

                  <span className="text-[20px] font-bold text-[#FFF] xl:text-[30px] 2xl:text-[32px] 2xl:leading-[40px]">
                    {data?.item_list[1]?.item?.title}
                  </span>
                </div>
                <p className="text-sm text-[#FFF] xl:text-base 2xl:tracking-[0.328px]">
                  {data?.item_list[1]?.item?.sub_title}
                </p>
              </div>

              <div className="flex flex-col gap-4 2xl:ml-10">
                <div className="flex items-center gap-3 2xl:gap-4">
                  <div className="relative h-[17px] w-[19px] lg:h-[21px] lg:w-[24px] xl:h-[28px] xl:w-[32px] 2xl:h-[35px] 2xl:w-[40px]">
                    <NextImg
                      src={
                        process.env.REACT_APP_IMG_URL +
                        data?.item_list[2]?.item?.icon
                      }
                      alt="UPS"
                      className="object-cover"
                    />
                  </div>

                  <span className="text-[20px] font-bold text-[#FFF] xl:text-[30px] 2xl:text-[32px] 2xl:leading-[40px]">
                    {data?.item_list[2]?.item?.title}
                  </span>
                </div>
                <p className="text-sm text-[#FFF] xl:text-base 2xl:tracking-[0.328px]">
                  {data?.item_list[2]?.item?.sub_title}
                </p>
              </div>
              <div className="flex flex-col gap-[10px] 2xl:ml-10">
                <span className="text-base font-bold tracking-[-0.42px] text-[#FFF] md:text-[17px]">
                  {data?.do_hai_long?.title}
                </span>
                <div className="relative h-2 w-full rounded-[4px] bg-[rgba(255,255,255,0.15)]">
                  <div
                    className="absolute left-0 top-0 h-full rounded-[4px]"
                    style={{
                      width: `${93}%`,
                      background:
                        'linear-gradient(272deg, #FDF2CB 1.35%, #DABB6B 98.65%)',
                    }}
                  >
                    <span className="absolute -right-4 bottom-5 rounded-[6px] bg-[#FDF2CB] px-[7px] py-1 text-xs font-semibold text-[#000] lg:text-[13px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="7"
                        viewBox="0 0 15 7"
                        fill="none"
                        className="absolute -bottom-[7px] left-1/2 -translate-x-1/2"
                      >
                        <path d="M7.5 7L14.5 0H0.5L7.5 7Z" fill="#FDF2CB" />
                      </svg>
                      {data?.do_hai_long?.percent}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
