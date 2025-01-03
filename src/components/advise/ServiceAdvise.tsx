import React from 'react';
import NextImg from '../common/next-img';
import { cn } from '@/lib/utils';

type Props = {};
const items = [
  {
    titles: ['Dịch vụ', 'Thị trường vốn', '(ECM)'],
    items: [
      'Tư vấn toàn diện về phát hành và pháp lý',
      'Hỗ trợ huy động vốn hiệu quả',
      'Bảo lãnh phát hành chuyên nghiệp',
    ],
    imgSrc: '/assets/image/tv-card1.png',
  },
  {
    titles: ['Dịch vụ', 'Thị trường nợ', '(DCM)'],
    items: [
      'Tư vấn phát hành trái phiếu toàn diện',
      'Hỗ trợ phân phối và khảo sát nhu cầu thị trường',
      'Bảo lãnh phát hành trái phiếu',
    ],
    imgSrc: '/assets/image/tv-card2.png',
  },
  {
    titles: ['Tư vấn', 'M&A'],
    items: [
      'Hỗ trợ chuyên sâu trong đàm phán và pháp lý',
      'Khai thác cơ hội đầu tư đa dạng',
      'Dịch vụ M&A toàn diện',
    ],
    imgSrc: '/assets/image/tv-card3.png',
  },
  {
    titles: ['Tư vấn', 'Tài chính doanh nghiệp'],
    items: [
      'Tư vấn phát hành công cụ nợ',
      'Dịch vụ tư vấn cổ phần hóa',
      'Hỗ trợ niêm yết',
    ],
    imgSrc: '/assets/image/tv-card4.png',
  },
];

const ServiceAdvise = (props: Props) => {
  return (
    <div className="custom-container mt-10 lg:mt-[60px] lg2:mt-20 2xl:mt-[100px] 3xl:mt-[120px]">
      <div className="text-center">
        <h2 className="text-[20px] font-semibold text-[#1D1E22] md:text-[24px] lg:text-[32px] lg2:text-[40px]">
          Dịch vụ cốt lõi đối tác xứng tầm <br /> Giải pháp chiến lược cho doanh
          nghiệp phát triển bền vững
        </h2>
        <p className="mt-3 text-sm font-medium text-[#535662] md:text-[16px]">
          Hỗ trợ từ thoái vốn, M&A đến niêm yết và giao dịch chứng khoán.
        </p>
      </div>
      <div className="mt-6 flex grid-cols-2 flex-col md:mt-8 md:grid lg:mt-10 lg2:mt-[60px]">
        {items.map((item, index) => {
          const delay = ((index % 4) + 1) * 200;
          return (
            <div
              key={index}
              className={cn(
                'flex flex-col rounded-[12px] p-5 md:rounded-[20px] lg:rounded-[24px] lg:p-10 lg2:rounded-[32px] lg2:p-[50px] 2xl:rounded-[40px] 2xl:p-[60px] 3xl:p-16',
                index === items.length - 1
                  ? 'bg-[#01372E] text-[#FFF]'
                  : 'bg-[#FFF] text-[#020D31]',
                index === 0 && 'bg-[#F3F3F3]',
              )}
              data-aos="fade-up"
              data-aos-delay={delay}
              data-aos-duration="700"
            >
              <div className="">
                {item.titles.map((title) => (
                  <p className="inline text-[20px] font-semibold md:block lg:text-[24px] lg2:text-[28px]">
                    {title}{' '}
                  </p>
                ))}
              </div>

              <div className="mt-3 flex flex-col gap-[6px] md:mt-6 lg:mt-8 lg2:mt-10">
                {item.items.map((subItem, subIndex) => (
                  <div key={subIndex} className="flex items-center gap-3">
                    <div className="size-2 min-h-2 min-w-2 rotate-45 bg-[#00D7B0]"></div>
                    <span className="text-sm font-medium lg:text-base">
                      {subItem}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-3 md:mt-6 lg:mt-8 lg2:mt-10">
                <button
                  className={cn(
                    'lg:link-effect text-sm font-bold text-[#00D7B0] underline lg:text-base lg:no-underline',
                  )}
                  style={{ '--link-color': '#00D7B0' } as React.CSSProperties}
                >
                  Xem thêm
                </button>
              </div>
              <div className="relative mt-5 h-[190px] w-full md:h-[215px] lg:mt-10 lg:h-[273px] lg2:h-[345px] xl:h-[356px] 2xl:h-[424px]">
                <NextImg
                  src={item.imgSrc}
                  alt="Capi"
                  objectFit="contain"
                  className="object-right"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceAdvise;
