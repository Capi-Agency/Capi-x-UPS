import React from 'react';
import NextImg from '../common/next-img';

type Props = {};

const BannerFeeSchedule = (props: Props) => {
  return (
    <div className="rounded-b-[20px] bg-[#000] pb-10 pt-[50px] md:rounded-b-[24px] md:pb-[60px] md:pt-20 lg:rounded-b-[28px] lg:pt-[90px] lg2:rounded-b-[32px] lg2:pt-[115px] xl:pb-[80px] xl:pt-[140px] 2xl:rounded-b-[40px] 2xl:pb-[100px] 3xl:pb-[120px] 3xl:pt-[180px]">
      <div
        className="custom-container flex flex-col items-center justify-center"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="700"
      >
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-end lg:gap-[34px] lg2:gap-[46px] xl:gap-[48px] 2xl:gap-[58px] 3xl:gap-[62px]">
          <span className="text-[32px] font-medium leading-[30px] text-[#FFF] md:text-[40px] md:leading-[116px] lg:text-[48px] lg:leading-[134px] lg2:text-[54px] lg2:leading-[129px] xl:text-[60px] xl:leading-[144px] 2xl:text-[72px] 2xl:leading-[165px] 3xl:text-[96px] 3xl:leading-[176px]">
            Với
          </span>
          <div className="relative h-[131px] w-[255px] md:h-[156px] md:w-[303px] lg:h-[178px] lg:w-[345px] lg2:h-[202px] lg2:w-[391px] xl:h-[221px] xl:w-[427px] 2xl:h-[247px] 2xl:w-[477px] 3xl:h-[269px] 3xl:w-[519px]">
            <NextImg
              src="/assets/image/banner-bieu-phi.png"
              alt="Ups"
              className=""
              objectFit="cover"
            />
          </div>
          <span className="text-[32px] font-medium leading-[30px] text-[#FFF] md:text-[40px] md:leading-[116px] lg:text-[48px] lg:leading-[134px] lg2:text-[54px] lg2:leading-[129px] xl:text-[60px] xl:leading-[144px] 2xl:text-[72px] 2xl:leading-[165px] 3xl:text-[96px] 3xl:leading-[176px]">
            lãi suất
          </span>
        </div>
        <p className="mt-[18px] px-10 text-center text-base font-bold text-[#FFF] md:px-0 lg:mt-6 lg:text-[18px] lg2:mt-[36px] lg2:text-[20px] xl:text-[24px] xl:tracking-[-0.6px] 2xl:mt-[48px] 3xl:mt-[50px]">
          Áp dụng trên tài khoản tiền gửi của Nhà đầu tư từ ngày 15/02/2019
        </p>
        <div className="my-4 h-[1px] w-[262px] bg-[#60606B] opacity-65 md:w-[370px] lg:my-6 lg2:my-[30px] 2xl:my-10"></div>
        <button className="btn !bg-[#D0F500]">
          Mở tài khoản ngay
          <div className="relative h-4 w-4 lg:h-6 lg:w-6">
            <NextImg src="/assets/icons/UPs.svg" alt="Capi" objectFit="cover" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default BannerFeeSchedule;
