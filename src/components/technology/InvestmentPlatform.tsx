import React from 'react';
import NextImg from '../common/next-img';

type Props = {};

const InvestmentPlatform = (props: Props) => {
  return (
    <section className="custom-container mt-10 lg:mt-[60px] xl:mt-20 2xl:mt-[100px] 3xl:mt-[120px] 3xl:!max-w-[calc(1280px+48px)]">
      <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="700">
        <h1 className="text-center text-[20px] font-bold text-[#141414] lg:text-[30px] xl:text-[40px] 2xl:text-[48px]">
          Nền tảng đầu tư <br />
          xây dựng theo{' '}
          <span className="text-[#D1AB47]">tiêu chuẩn toàn cầu</span>
        </h1>
      </div>

      <div className="mt-6 flex flex-col gap-3 md:grid md:grid-cols-[auto,236px] lg:grid-cols-[auto,310px] lg:gap-4 xl:mt-[50px] xl:grid-cols-[auto,380px] xl:gap-6 2xl:mt-[60px]">
        {/* First Card */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="700"
          className="rounded-[16px] bg-[#FBF5E5] px-5 py-5 md:p-9 lg:rounded-[24px] lg:px-[55px] lg:py-[42px] xl:px-[77px] xl:py-[50px] 2xl:px-[88px] 3xl:px-20 3xl:py-[60px]"
        >
          <h4 className="text-center text-[20px] font-bold text-[#141414] lg:text-[24px] xl:text-[32px]">
            Giao dịch trực tuyến <br className="block md:hidden" />
            <span className="text-[#D1AB47]">nhanh chóng</span>
          </h4>
          <div className="relative mt-3 w-full pt-[75%] md:h-[296px] md:pt-0 lg:mt-4 lg:h-[376px] xl:mt-5 xl:h-[416px] 2xl:mt-6 2xl:h-[516px] 3xl:mt-7 3xl:h-[548px]">
            <NextImg
              src="/assets/image/ntcn1.png"
              alt="UPS"
              className="object-cover"
            />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="700"
          className="flex flex-col gap-3 lg:gap-4 xl:gap-6"
        >
          {/* Second Card 1 */}
          <div className="flex flex-col items-center justify-center rounded-[16px] bg-[#1D1D1F] py-[120px] text-center md:py-[55px] lg:rounded-[24px] lg:py-20 xl:py-[87px] 2xl:py-[100px]">
            <span className="text-sm font-medium text-[rgba(255,255,255,0.50)]">
              #baomatcao
            </span>
            <p
              className="text-[20px] font-bold text-transparent md:text-[24px] xl:mt-2 xl:text-[32px] xl:leading-[48px] 2xl:text-[40px]"
              style={{
                background:
                  'radial-gradient(264.71% 50% at 50% 50%, #DABB6B 0%, #FDF2CB 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Bảo vệ thông tin <br />
              khách hàng
            </p>
          </div>

          {/* Second Card 2 */}
          <div
            className="overflow-hidden rounded-[16px] pt-6 text-center md:px-9 lg:rounded-[24px] xl:px-[42px] xl:pt-7"
            style={{
              background:
                'linear-gradient(180deg, rgba(230, 206, 141, 0.00) 0%, rgba(230, 206, 141, 0.30) 100%), #F7F7F7',
            }}
          >
            <span className="text-[14px] font-medium text-[rgba(0,0,0,0.50)]">
              App Trading
            </span>
            <h4 className="mt-1 text-[20px] font-bold text-[#000] md:text-base lg:text-[18px] xl:text-[20px] 2xl:mt-2 2xl:text-[24px] 2xl:leading-[32px]">
              Ứng dụng tuyệt vời <br /> cho người mới
            </h4>
            <div className="relative -bottom-8 mx-auto mt-[10px] h-[222px] w-full scale-125 md:bottom-0 md:h-[105px] md:scale-100 lg:mt-6 lg:h-[130px] lg2:h-[155px] xl:mt-5 xl:h-[160px] 2xl:mt-6 2xl:h-[210px] 3xl:mt-7 3xl:h-[250px]">
              <NextImg
                src="/assets/image/ntcn2.png"
                alt="UPS"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlatform;
