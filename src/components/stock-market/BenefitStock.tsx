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
    <div className="bg-[#1A1711] py-[90px]">
      <div className="custom-container 3xl:!max-w-[calc(1280px+48px)]">
        <div
          className="flex flex-col text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="text-[18px] font-medium leading-[40px] text-[#A66CFF]">
            #kienthucchungkhoan
          </span>
          <h3 className="mb-6 mt-2 text-[48px] font-bold leading-[54px] text-[#FFF]">
            Lợi ích khi giao dịch cổ phiếu cùng{' '}
            <span className="text-[#D0F500]">UPS</span>
          </h3>
          <p className="text-[18px] font-medium leading-[28px] text-[#FFF]">
            Chuyên nghiệp hơn nữa, tự do tài chính hơn nữa
          </p>
        </div>
        <div className="mt-[60px] flex flex-col gap-[140px] md:grid md:grid-cols-3">
          {data.map((item: any, index: number) => {
            const delay = ((index % 3) + 1) * 200;
            return (
              <div
                key={index}
                className={`flex flex-col justify-between`}
                data-aos="fade-up"
                data-aos-delay={delay}
              >
                <div className="relative mx-auto h-[220px] w-[220px]">
                  <NextImg
                    src={item.imageSrc}
                    alt="Capi"
                    objectFit="contain"
                    className=""
                  />
                </div>
                <div className="mx-auto mt-5 text-center">
                  <span className="text-[18px] font-medium leading-[40px] text-[#FFF]">
                    #{index + 1}
                  </span>
                  <h4 className="mx-auto mb-5 mt-2 w-[70%] text-[20px] font-bold text-[#FFF] lg:text-[24px] lg:leading-[40px] lg2:text-[30px] 2xl:text-[32px]">
                    {item.title}
                  </h4>
                  <p className="text-[14px] font-medium leading-[22px] text-[rgba(255,255,255,0.75)] lg:text-[16px] lg:leading-[28px] lg2:text-[18px]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="btn mx-auto mt-[60px] !bg-[#D0F500]"
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
