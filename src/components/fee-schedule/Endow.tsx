import React from 'react';
import NextImg from '../common/next-img';

type Props = {};

const datas = [
  {
    tag: 'Mở tài khoản',
    title: 'Miễn phí',
    subtitle: '',
    description: 'Tạo tài khoản eKYC chỉ 30 giây',
    features: ['Giao dịch nhanh chóng', 'Cá nhân hoá'],
  },
  {
    tag: 'Ưu đãi giao dịch',
    title: '0.15',
    subtitle: '%',
    description: 'Giao dịch cổ phiếu và chứng chỉ quỹ chỉ từ 0.15%',
    features: ['Chi phí ưu đãi', 'Tích luỹ hạng thành viên'],
  },
  {
    tag: 'Giao dịch ký quỹ',
    title: '12',
    subtitle: '% /năm',
    description: 'Lãi suất cho vay trong hạn',
    features: ['Tối ưu hóa dòng tiền', 'Chiến lược đầu tư linh hoạt'],
  },
];
const EndowFeeSchedule = (props: Props) => {
  return (
    <div className="my-10 lg:my-[60px] lg2:my-20 xl:my-[100px] 2xl:my-[120px] 3xl:my-[160px]">
      <div className="custom-container flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-4 lg2:gap-5 2xl:gap-6">
        {datas.map((data, index) => {
          const delay = ((index % 3) + 1) * 200;
          return (
            <div
              data-aos="fade-up"
              data-aos-delay={delay}
              data-aos-duration="700"
            >
              <div
                className={`flex flex-col gap-4 rounded-[15px] bg-[#F3F1EB] p-4 text-[#1A1711] shadow-[3px_10px_20px_0px_rgba(0,0,0,0.02)] lg:p-6 lg2:p-8 xl:p-10 ${index === 1 ? 'bg-[#1A1711] bg-gradient-to-b from-[#FDF2CB] to-[#DABB6B] text-[#4E3A06]' : ''}`}
              >
                <div>
                  <span className="text-sm font-medium lg:text-base xl:leading-[24px] 2xl:text-[18px] 2xl:leading-[40px]">
                    {data.tag}
                  </span>
                  <h3 className="mt-2 text-[20px] font-bold md:mt-[14px] md:text-[24px] lg:text-[32px] lg2:text-[40px] lg2:leading-[46px] 2xl:mt-4 2xl:text-[60px] 2xl:leading-[63px] 2xl:tracking-[-2.7px]">
                    {data.title}
                    <span className="text-[16px] leading-none lg:text-[24px] 2xl:text-[30px]">
                      {' '}
                      {data.subtitle}
                    </span>
                  </h3>
                </div>
                <p className="h-[40px] text-sm font-medium lg:h-[50px] lg:text-base xl:leading-[25px] 2xl:h-[56px] 2xl:text-[18px] 2xl:leading-[28px]">
                  {data.description}
                </p>
                <div className="flex flex-col gap-2">
                  {data.features.map((item, i) => {
                    return (
                      <div className="flex items-center gap-1 lg:gap-2" key={i}>
                        <i>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_4708_45419)">
                              <path
                                d="M6.7498 12.1492L3.5998 8.99922L2.5498 10.0492L6.7498 14.2492L15.7498 5.24922L14.6998 4.19922L6.7498 12.1492Z"
                                className={`${index === 1 ? 'fill-[#403109]' : 'fill-[#099746]'}`}
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_4708_45419">
                                <rect width="18" height="18" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </i>
                        <p className="text-sm lg:text-base 2xl:text-[18px]">
                          {item}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EndowFeeSchedule;
