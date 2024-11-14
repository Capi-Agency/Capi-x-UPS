import React from 'react';
import NextImg from '../common/next-img';

type Props = {};

const data = [
  {
    title: 'Tối ưu chi phí Tối ưu lợi nhuận',
    description:
      'Các chương trình ưu đãi phí tại UPS giúp bạn yên tâm đầu tư, giảm thiểu chi phí giao dịch.',
    imageSrc: '/assets/image/benefit-1.png',
  },
  {
    title: 'Công cụ phân tích mạnh mẽ',
    description:
      'Công cụ phân tích thị trường và cổ phiếu từ UPS giúp bạn đưa ra quyết định đầu tư thông minh hơn.',
    imageSrc: '/assets/image/benefit-2.png',
  },
  {
    title: 'Đội ngũ chuyên gia hỗ trợ',
    description:
      'Được tư vấn từ chuyên gia chứng khoán từ đội ngũ trung tâm phân tích với nhiều năm kinh nghiệm trong lĩnh vực tài chính.',
    imageSrc: '/assets/image/benefit-3.png',
  },
];

const BenefitStock = (props: Props) => {
  return (
    <div className="mt-[-1px] bg-[#1A1711] py-6 md:py-10 lg2:py-[50px] xl:py-[60px] 2xl:py-20 3xl:py-[90px]">
      <div className="custom-container 3xl:!max-w-[calc(1280px+48px)]">
        <div
          className="flex flex-col text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="text-base font-medium leading-[24px] text-[#A66CFF] lg2:text-[18px] lg2:leading-[40px]">
            #kienthucchungkhoan
          </span>
          <h3 className="mb-3 mt-2 text-[24px] font-bold text-[#FFF] md:mb-4 lg:mb-5 lg:text-[40px] lg:leading-[46px] 2xl:mb-6 2xl:text-[44px] 2xl:leading-[52px] 3xl:text-[48px] 3xl:leading-[54px]">
            Lợi ích khi giao dịch cổ phiếu cùng{' '}
            <span className="text-[#D0F500]">UPS</span>
          </h3>
          <p className="text-base font-medium leading-[28px] text-[#FFF] lg2:text-[18px]">
            Chuyên nghiệp hơn nữa, tự do tài chính hơn nữa
          </p>
        </div>
        <div className="my-[26px] flex flex-col gap-[26px] md:my-5 md:grid md:grid-cols-3 md:gap-[44px] lg:gap-[52px] lg2:gap-[80px] 2xl:my-10 2xl:gap-[100px] 3xl:my-[60px] 3xl:gap-[140px]">
          {data.map((item: any, index: number) => {
            const delay = ((index % 3) + 1) * 200;
            return (
              <div
                key={index}
                className={`flex flex-col gap-3 md:gap-2 lg2:gap-4 2xl:gap-5`}
                data-aos="fade-up"
                data-aos-delay={delay}
              >
                <div className="relative mx-auto size-[100px] md:size-20 lg:size-[120px] lg2:size-[160px] xl:size-[180px] 2xl:size-[200px] 3xl:size-[220px]">
                  <NextImg
                    src={item.imageSrc}
                    alt="Capi"
                    objectFit="contain"
                    className=""
                  />
                </div>
                <div className="mx-auto text-center">
                  <span className="text-base font-medium leading-[24px] text-[#FFF] lg:text-[18px] lg:leading-[40px]">
                    #{index + 1}
                  </span>
                  <h4 className="mx-auto w-[70%] text-[24px] md:text-[20px] font-bold text-[#FFF] lg:text-[24px] lg:leading-[40px] lg2:text-[30px] 2xl:text-[32px]">
                    {item.title}
                  </h4>
                </div>
                <p className="mx-auto text-center text-base font-medium leading-[22px] text-[rgba(255,255,255,0.75)] md:text-[14px] lg:text-[16px] lg:leading-[28px] lg2:text-[18px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
        <button
          className="btn mx-auto !bg-[#D0F500]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Mở tài khoản ngay
          <div className="relative h-4 w-4 lg:h-6 lg:w-6">
            <NextImg src="/assets/icons/UPs.svg" alt="Capi" objectFit="cover" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default BenefitStock;
