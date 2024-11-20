import React from 'react';
import NextImg from '../common/next-img';
import { cn } from '@/lib/utils';

type Props = {};
const items = [
  {
    titles: [
      'Tư vấn thoái phần vốn Nhà nước',
      'tại Công ty cổ phần',
      'và Công ty TNHH',
    ],
    items: [
      'Tư vấn lưu ký chứng khoán: Chốt danh sách cổ đông để thực hiện quyền, Giải tỏa hạn chế chuyển nhượng …',
      'Tư vấn quản lý và quan hệ cổ đông',
      'Tư vấn quản trị Doanh nghiệp',
    ],
    imgSrc: '/assets/image/tv-card1.png',
    buttonText: 'Xem thêm',
  },
  {
    titles: [
      'Tư vấn trình tự, thủ tục',
      'các nghiệp vụ liên quan tới chứng khoán',
      'và thị trường chứng khoán',
    ],
    items: [
      'Tư vấn lưu ký chứng khoán: Chốt danh sách cổ đông để thực hiện quyền, Giải tỏa hạn chế chuyển nhượng …',
      'Tư vấn quản lý và quan hệ cổ đông',
      'Tư vấn quản trị Doanh nghiệp',
    ],
    imgSrc: '/assets/image/tv-card2.png',
    buttonText: 'Xem thêm',
  },
  {
    titles: ['Tư vấn mua bán, sáp nhập', 'doanh nghiệp'],
    items: [
      'Tư vấn lưu ký chứng khoán: Chốt danh sách cổ đông để thực hiện quyền, Giải tỏa hạn chế chuyển nhượng …',
      'Tư vấn quản lý và quan hệ cổ đông',
      'Tư vấn quản trị Doanh nghiệp',
    ],
    imgSrc: '/assets/image/tv-card3.png',
    buttonText: 'Xem thêm',
  },
  {
    titles: ['Tư vấn đăng ký niêm yết', 'và đăng ký giao dịch'],
    items: [
      'Tư vấn lưu ký chứng khoán: Chốt danh sách cổ đông để thực hiện quyền, Giải tỏa hạn chế chuyển nhượng …',
      'Tư vấn quản lý và quan hệ cổ đông',
      'Tư vấn quản trị Doanh nghiệp',
    ],
    imgSrc: '/assets/image/tv-card4.png',
    buttonText: 'Xem thêm',
  },
];

const ContentAdvise = (props: Props) => {
  return (
    <div className="custom-container">
      <div className="grid grid-cols-2">
        {items.map((item, index) => {
          const delay = ((index % 4) + 1) * 200;
          return (
            <div
              key={index}
              className={cn(
                'flex flex-col gap-10 p-16',
                index === items.length - 1
                  ? 'bg-[#080835] text-[#FFF]'
                  : 'bg-[#FFF] text-[#020D31]',
                index === 0 && 'bg-[#E7E7EE]',
              )}
              data-aos="fade-up"
              data-aos-delay={delay}
               data-aos-duration="800"
            >
              <div>
                {item.titles.map((title) => (
                  <h4 className="text-[28px] font-semibold">
                    {title} <br />
                  </h4>
                ))}
              </div>

              <div className="flex flex-col gap-[6px]">
                {item.items.map((subItem, subIndex) => (
                  <div key={subIndex} className="flex items-center gap-3">
                    <div className="size-2 min-h-2 min-w-2 rotate-45 bg-[#4331E8]"></div>
                    <span className="text-base font-medium">{subItem}</span>
                  </div>
                ))}
              </div>
              <div>
                <button
                  className={cn(
                    'text-base font-bold lg:no-underline underline',
                    index === items.length - 1
                      ? 'link-effect'
                      : 'link-effect-b',
                  )}
                >
                  {item.buttonText}
                </button>
              </div>
              <div className="relative h-[415px] w-full">
                <NextImg
                  src={item.imgSrc}
                  alt="Capi"
                  objectFit="cover"
                  className=""
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContentAdvise;
