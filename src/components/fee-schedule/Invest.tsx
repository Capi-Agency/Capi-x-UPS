import React from 'react';
import NextImg from '../common/next-img';
import ButtonEffect from '../common/button-position-aware/page';
import Link from 'next/link';

type Props = {};

const InvestFeeSchedule = (props: Props) => {
  return (
    <div className="mt-10 lg:mt-[60px] lg2:mt-20 xl:mt-[100px] 2xl:mt-[120px]">
      <div className="custom-container flex flex-col-reverse items-center justify-between md:grid md:grid-cols-[302px,325px] lg:grid-cols-[360px,459px] lg2:grid-cols-[436px,533px] 2xl:grid-cols-[520px,647px] 3xl:grid-cols-[520px,689px]">
        <div
          className="mt-5 md:mt-0"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="700"
        >
          <p className="text-[14px] font-medium leading-[22px] text-[#111013] lg:text-base lg:leading-[24px] lg2:text-[18px] lg2:leading-[40px]">
            #daututhongminh
          </p>
          <p className="text-[20px] font-bold text-[#141414] md:text-[24px] lg:mt-1 lg:text-[32px] lg2:mt-[6px] lg2:text-[40px] lg2:leading-[52px] 2xl:mt-2 2xl:text-[52px] 2xl:leading-[60px]">
            Siêu ứng dụng <br className="hidden lg:block" /> đầu tư tích hợp cho
            mọi nhu cầu của bạn
          </p>
          <p className="my-3 text-[14px] leading-[22px] text-[#111013] lg:my-4 lg:text-[18px] lg:leading-[30px] lg2:my-5 2xl:my-6">
            Một nền tảng duy nhất đáp ứng mọi nhu cầu đầu tư từ cổ phiếu, trái
            phiếu đến quỹ mở, giúp bạn quản lý tài sản dễ dàng, hiệu quả và
            thông minh hơn bao giờ hết.
          </p>
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
        <div
          className="relative w-full pt-[86%] md:h-[290px] md:pt-0 lg:h-[396px] lg2:h-[458px] 2xl:h-[556px] 3xl:h-[592px]"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="700"
        >
          <NextImg
            src="/assets/image/fee-1.png"
            alt="Ups"
            className=""
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default InvestFeeSchedule;
