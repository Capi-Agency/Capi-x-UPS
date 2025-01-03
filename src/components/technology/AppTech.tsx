'use client';
import React, { useEffect, useState } from 'react';
import NextImg from '../common/next-img';

type Props = {
  data: any;
};

const AppTech = ({ data }: Props) => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  }, []);

  return (
    <div className="custom-container mt-10 lg:mt-[60px] xl:mt-20 2xl:mt-[100px] 3xl:mt-[120px] 3xl:!max-w-[calc(1280px+48px)]">
      <div className="flex flex-col gap-8 overflow-hidden rounded-[12px] bg-[#1D1D1F] md:grid md:grid-cols-[292px,auto] md:gap-6 md:rounded-[24px] md:pl-6 lg:grid-cols-[334px,auto] lg:gap-16 lg:pl-[30px] lg2:grid-cols-[440px,auto] lg2:pl-10 xl:gap-11 xl:pl-[50px] 2xl:gap-[130px] 2xl:pl-[60px] 3xl:gap-[100px] 3xl:pl-[70px]">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="700"
          className="mt-6 flex flex-col px-5 md:mb-5 md:mt-0 md:place-self-end md:px-0 lg:mb-[50px]"
        >
          <h4 className="text-[20px] font-bold text-[#FFF] lg:text-[32px] lg:leading-[46px] lg2:text-[40px] xl:leading-[54px]">
            <span
              dangerouslySetInnerHTML={{
                __html: render && data?.title,
              }}
            ></span>
          </h4>
          <p className="mt-2 text-[14px] font-medium leading-[22px] text-[#FFF] lg:mt-4 lg:text-base lg:leading-[28px] lg2:text-[18px]">
            {data?.sub_title}
          </p>
          <div className="mt-5 flex flex-col gap-3 lg:mt-6">
            {data?.item_list?.map(({ item }: any, index: any) => {
              return (
                <div
                  className="flex w-[180px] cursor-pointer items-center gap-[9px] rounded-[9px] bg-[#111] px-[10px] py-[6px] lg:pr-6"
                  key={index}
                >
                  <div className="relative h-6 w-6">
                    <NextImg
                      src={process.env.REACT_APP_IMG_URL + item?.icon}
                      alt="Capi"
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium uppercase leading-normal text-[rgba(255,255,255,0.79)]">
                      {item?.hashtag}
                    </span>
                    <span className="text-[14px] font-semibold leading-[21px] text-[#FFF] lg:text-base">
                      {item?.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="700"
          className="relative w-full pt-[80%] md:mr-6 md:mt-[60px] md:h-[305px] md:pt-0 lg:mr-[50px] lg:h-[420px] lg:w-[460px] lg2:mr-[60px] lg2:h-[470px] lg2:w-[517px] xl:-bottom-2 xl:mr-[70px] xl:h-[490px] 2xl:bottom-0 2xl:mr-20 2xl:h-[520px] 2xl:w-[570px] 3xl:mr-[90px] 3xl:h-[542px] 3xl:w-[578px]"
        >
          <NextImg
            src={process.env.REACT_APP_IMG_URL + data?.cover}
            alt="Capi"
            objectFit="contain"
            className="object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default AppTech;
