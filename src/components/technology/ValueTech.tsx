'use client';
import React, { useEffect, useState } from 'react';
import NextImg from '../common/next-img';
import Link from 'next/link';

type Props = {
  data: any;
};

const ValueTech = ({ data }: Props) => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  }, []);

  return (
    <section className="custom-container mt-10 lg:mt-[60px] xl:mt-20 2xl:mt-[100px] 3xl:mt-[120px] 3xl:!max-w-[calc(1280px+48px)]">
      <div className="flex w-full flex-col items-start gap-6 text-black md:flex-row 2xl:gap-10">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="700"
          className="xl:[496px] w-full md:w-[294px] lg:w-[398px] 2xl:w-[560px]"
        >
          <div className="flex w-full flex-col gap-4 xl:gap-5 2xl:gap-6">
            <div className="text-xl font-bold leading-[1.3] text-[#141414] lg:text-[30px] xl:text-[40px] 2xl:text-5xl 3xl:leading-[54px]">
              <span
                dangerouslySetInnerHTML={{
                  __html: render && data?.title,
                }}
              ></span>
            </div>
            <div className="w-full text-sm font-medium text-[#111013] lg:text-base xl:text-lg 2xl:w-[86%]">
              {data?.sub_title}
            </div>
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
        </div>

        <div className="grid w-full flex-1 grid-cols-1 gap-6 md:h-[256px] md:grid-cols-2 md:gap-3 lg:h-[320px] lg:gap-4 xl:h-[376px] xl:gap-6 2xl:h-[432px] 2xl:gap-[30px]">
          {/* First Box */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="700"
            className="col-span-1 rounded-[15px] bg-[#FBF5E5] p-6 xl:p-10"
          >
            <div className="flex flex-col gap-3 lg:gap-5 xl:gap-6">
              <div className="space-y-3 lg:space-y-4">
                <div className="text-sm font-medium text-[#1A1711] lg:text-base 2xl:text-lg 3xl:leading-[40px]">
                  {data?.card_1?.hashtag}
                </div>
                <div className="text-xl font-bold text-[#1A1711] lg:text-[30px] xl:text-[40px] 2xl:text-6xl">
                  {data?.card_1?.title}
                </div>
              </div>

              <div className="text-sm font-medium text-[#1A1711] md:min-h-[50px] lg:text-base 2xl:min-h-[56px] 2xl:text-lg">
                {data?.card_1?.sub_title}
              </div>

              <div className="flex w-full flex-col gap-2">
                {data?.card_1?.item_list?.map(({ item }: any, index: any) => {
                  return (
                    <div className="flex items-center gap-2" key={index}>
                      <div className="relative size-4 xl:size-[18px]">
                        <NextImg
                          src={process.env.REACT_APP_IMG_URL + item?.icon}
                          alt="UPS"
                          className="object-cover"
                        />
                      </div>

                      <div className="text-sm font-normal text-[#1A1711] lg:text-base 2xl:text-lg">
                        {item?.title}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Second Box */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="700"
            className="col-span-1 rounded-[15px] bg-[#1D1D1F] p-6 shadow-[3px_15px_20px_0px_rgba(0,0,0,0.08)] xl:p-10"
          >
            <div className="flex flex-col gap-3 lg:gap-5 xl:gap-6">
              <div className="space-y-3 lg:space-y-4">
                <div className="text-sm font-medium text-white lg:text-base 2xl:text-lg 3xl:leading-[40px]">
                  {data?.card_2?.hashtag}
                </div>
                <div className="text-xl font-bold text-white lg:text-[30px] xl:text-[40px] 2xl:text-6xl">
                  {data?.card_2?.title}
                  <span className="text-sm font-bold text-white lg:text-2xl xl:text-[32px]">
                    {data?.card_2?.title_highlight}
                  </span>
                </div>
              </div>

              <div className="text-sm font-medium text-white md:min-h-[50px] lg:text-base 2xl:min-h-[56px] 2xl:text-lg">
                {data?.card_2?.sub_title}
              </div>

              <div className="flex w-full flex-col gap-2">
                {data?.card_2?.item_list?.map(({ item }: any, index: any) => {
                  return (
                    <div className="flex items-center gap-2" key={index}>
                      <div className="relative size-4 xl:size-[18px]">
                        <NextImg
                          src={process.env.REACT_APP_IMG_URL + item?.icon}
                          alt="UPS"
                          className="object-cover"
                        />
                      </div>

                      <div className="text-sm font-normal text-white lg:text-base 2xl:text-lg">
                        {item?.title}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueTech;
