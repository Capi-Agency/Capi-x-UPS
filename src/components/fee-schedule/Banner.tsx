import React from 'react';
import NextImg from '../common/next-img';
import Link from 'next/link';

type Props = {};

const BannerFeeSchedule = (props: Props) => {
  return (
    <div className="rounded-b-[20px] bg-[#000] pb-10 pt-[50px] md:rounded-b-[24px] md:pb-[60px] md:pt-20 lg:rounded-b-[28px] lg:pt-[90px] lg2:rounded-b-[32px] lg2:pt-[115px] xl:pb-[80px] xl:pt-[140px] 2xl:rounded-b-[40px] 2xl:pb-[100px] 3xl:pb-[120px] 3xl:pt-[160px]">
      <div
        className="custom-container flex flex-col items-center justify-center"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="700"
      >
        <p className="mb-[28px] text-[32px] font-medium text-[#FFF] md:text-[40px] md:leading-[46px] lg:mb-[32px] lg2:mb-[38px] lg2:text-[54px] lg2:leading-[62px] xl:mb-[42px] xl:text-[60px] xl:leading-[68px] 2xl:mb-[52px] 2xl:text-[76px] 2xl:leading-[106px] 3xl:mb-[62px] 3xl:text-[96px]">
          Giao dịch
        </p>
        <div className="relative w-full pt-[19.5%] sm:h-[60px] sm:w-[310px] sm:pt-0 md:h-[100px] md:w-[516px] lg:h-[120px] lg:w-[619px] lg2:h-[150px] lg2:w-[774px] xl:h-[170px] xl:w-[877px] 2xl:h-[194px] 2xl:w-[1000px] 3xl:h-[233px] 3xl:w-[1200px]">
          <NextImg
            src="/assets/image/banner-bieu-phi.png"
            alt="Ups"
            className=""
            objectFit="cover"
          />
        </div>
        <p className="mt-10 px-10 text-center text-base font-bold text-[#FFF] md:px-0 lg:mt-[50px] lg:text-[18px] lg2:mt-[60px] lg2:text-[20px] xl:mt-[70px] xl:text-[24px] xl:tracking-[-0.6px] 3xl:mt-20">
          Tham gia ngay hôm nay để trải nghiệm giao dịch chứng khoán với phí 0
          đồng cùng UPS!
        </p>
        <div className="my-4 h-[1px] w-[262px] bg-[#60606B] opacity-65 md:w-[370px] lg:my-6 lg2:my-[30px] 2xl:my-10"></div>
        <Link
          href={`https://onboarding.upstock.com.vn/index.html#/./open-account/check-info`}
        >
          <button className="btn !bg-[#D0F500]">
            Mở tài khoản ngay
            <div className="relative h-4 w-4 lg:h-6 lg:w-6">
              <NextImg
                src="/assets/icons/UPs.svg"
                alt="Capi"
                objectFit="cover"
              />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BannerFeeSchedule;
