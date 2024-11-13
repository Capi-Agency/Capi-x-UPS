import React from 'react';
import NextImg from '../common/next-img';
import { cn } from '@/lib/utils';

type Props = {};
const cardsData = [
  {
    id: 1,
    imgSrc: '/assets/image/card-tv1.png',
    title: 'Tư vấn cổ phần hoá và tư vấn chuyển đổi loại hình doanh nghiệp',
    items: [
      'Lập kế hoạch cổ phần hóa.',
      'Sắp xếp lao động.',
      'Tư vấn cổ phần và vốn.',
    ],
  },
  {
    id: 2,
    imgSrc: '/assets/image/card-tv2.png',
    title: 'Tư vấn cổ phần hoá và tư vấn chuyển đổi loại hình doanh nghiệp',
    items: [
      'Lập kế hoạch cổ phần hóa.',
      'Sắp xếp lao động.',
      'Tư vấn cổ phần và vốn.',
    ],
  },
  {
    id: 3,
    imgSrc: '/assets/image/card-tv3.png',
    title: 'Tư vấn cổ phần hoá và tư vấn chuyển đổi loại hình doanh nghiệp',
    items: [
      'Lập kế hoạch cổ phần hóa.',
      'Sắp xếp lao động.',
      'Tư vấn cổ phần và vốn.',
    ],
  },
  {
    id: 4,
    imgSrc: '/assets/image/card-tv4.png',
    title: 'Tư vấn cổ phần hoá và tư vấn chuyển đổi loại hình doanh nghiệp',
    items: [
      'Lập kế hoạch cổ phần hóa.',
      'Sắp xếp lao động.',
      'Tư vấn cổ phần và vốn.',
    ],
  },
];

const NetworkAdvise = (props: Props) => {
  return (
    <div className="custom-container mt-[120px]">
      <div className="text-center">
        <h3 className="text-[40px] font-semibold text-[#1D1E22]">
          Cổ phần hóa và phát hành chứng khoán
        </h3>
        <p className="mx-auto mt-3 w-[55%]">
          Với mạng lưới quan hệ rộng lớn, UPS có khả năng tìm kiếm nhà đầu tư
          tiềm năng cho doanh nghiệp, giúp tổ chức bán cổ phần ra bên ngoài qua
          phương thức đấu giá. Đây là yếu tố rất quan trọng giúp cho quá trình
          cổ phần hoá doanh nghiệp thành công và là lợi thế cạnh tranh của UPS
        </p>
      </div>
      <div className="mt-10">
        <div className="flex gap-6">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className={cn('group', {
                'mt-[128px]': index === 1,
                'mt-[222px]': index === 2,
                'mt-[51px]': index === 3,
              })}
            >
              <div className="relative rounded-[32px] border border-[rgba(115,97,249,0.20)] p-5">
                <div className="relative h-[303px] w-full">
                  <NextImg src={card.imgSrc} alt="Capi" objectFit="contain" />
                </div>
                <p className="mb-6 mt-[10px] text-[20px] font-semibold text-[#040919]">
                  {card.title}
                </p>
                <div className="flex flex-col gap-[6px]">
                  {card.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="size-2 min-h-2 min-w-2 rotate-45 bg-[#4331E8]"></div>
                      <span className="text-base font-medium text-[#040919]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-0 h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:mt-6 group-hover:h-[50px]">
                  <button className="btn bg-[#F51666] text-[#FFF]">
                    Liên hệ tư vấn
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.7594 5.98952C18.7594 5.7906 18.6804 5.59984 18.5398 5.45919C18.3991 5.31853 18.2083 5.23952 18.0094 5.23952L9.42515 5.23952C9.01093 5.23952 8.67515 5.5753 8.67515 5.98952C8.67515 6.40373 9.01093 6.73952 9.42515 6.73952L16.1992 6.73952L5.45855 17.4802C5.16566 17.7731 5.16566 18.2479 5.45855 18.5408C5.75145 18.8337 6.22632 18.8337 6.51921 18.5408L17.2594 7.80062V14.5738C17.2594 14.988 17.5952 15.3238 18.0094 15.3238C18.4236 15.3238 18.7594 14.988 18.7594 14.5738L18.7594 5.98952Z"
                          fill="white"
                        />
                      </svg>
                    </i>
                  </button>
                </div>

                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="196"
                    height="190"
                    viewBox="0 0 196 190"
                    fill="none"
                    className="absolute bottom-0 right-0 hidden rounded-br-[32px] group-hover:block"
                  >
                    <g filter="url(#filter0_f_4334_24314)">
                      <circle cx="189" cy="189.789" r="55" fill="#4C35F5" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_4334_24314"
                        x="0"
                        y="0.789062"
                        width="378"
                        height="378"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="67"
                          result="effect1_foregroundBlur_4334_24314"
                        />
                      </filter>
                    </defs>
                  </svg>
                </i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NetworkAdvise;
