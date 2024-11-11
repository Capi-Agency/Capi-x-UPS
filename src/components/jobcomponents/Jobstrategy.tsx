import React from 'react';
import NextImg from '../common/next-img';

type Props = {};

const Jobstrategy = (props: Props) => {
  const lists = [
    {
      icon: '/assets/icons/personalcard.svg',
      title: 'Tuyển dụng',
      description:
        'Luôn dẫn đầu xu hướng, tạo ra sáng kiến giúp trải nghiệm đầu tư dễ dàng và thú vị.',
    },
    {
      icon: '/assets/icons/status-up.svg',
      title: 'Đào tạo và phát triển',
      description:
        'Luôn dẫn đầu xu hướng, tạo ra sáng kiến giúp trải nghiệm đầu tư dễ dàng và thú vị.',
    },
    {
      icon: '/assets/icons/note-2.svg',
      title: 'Đánh giá hiệu quả',
      description:
        'Luôn dẫn đầu xu hướng, tạo ra sáng kiến giúp trải nghiệm đầu tư dễ dàng và thú vị.',
    },
    {
      icon: '/assets/icons/card-coin.svg',
      title: 'Phúc lợi',
      description:
        'Luôn dẫn đầu xu hướng, tạo ra sáng kiến giúp trải nghiệm đầu tư dễ dàng và thú vị.',
    },
  ];
  
  return (
    <div className="mb-[160px] mt-[60px] bg-[#0F1B0E]">
      <div className="custom-container">
        <div className="flex gap-[240px] py-[120px]">
          {/* col-left */}
          <div className="">
            <div className="">
              <h6 className="font-hanken text-[14px] font-medium uppercase leading-[21px] text-white">
                Chiến lược nhân sự
              </h6>
              <div className="my-[16px] border-t"></div>
              <h2 className="font-hanken text-[48px] font-bold leading-[54px] text-white">
                Vì một tương lại bền vững của bạn
              </h2>
              <p className="my-[32px] font-hanken text-[18px] font-normal leading-[28px] text-[#F9F9F9]">
                Kiến tạo một môi trường làm việc chuyên nghiệp không những cho
                doanh nghiệp mà còn cho chính nhân viên.
              </p>
              <button className="btn active">
                Mở tài khoản ngay
                <div className="relative h-6 w-6">
                  <NextImg
                    src="/assets/icons/UPs.svg"
                    alt="Capi"
                    objectFit="cover"
                  />
                </div>
              </button>
            </div>
          </div>
          {/* col-right */}
          <div className="flex flex-col gap-[60px]">
            <div>
              <p className="font-hanken text-[18px] font-normal leading-[28px] text-[#F9F9F9]">
                Chúng tôi tin rằng nhân sự là cốt lõi của mọi doanh nghiệp và là
                tiền đề của thành công, vì vậy chúng tôi chú trọng vào việc tìm
                kiếm những nhân sự nhiệt huyết và năng động, đặc biệt trong lĩnh
                vực chứng khoán
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-[40px] gap-y-[60px]">
              {lists &&
                lists.map((item: any, index: any) => {
                  return (
                    <div key={index} className="text-start">
                      <div className="relative h-[32px] w-[32px]">
                        <NextImg src={item.icon} alt="capi" />
                      </div>
                      <p className="pb-[8px] pt-[16px] font-hanken text-[20px] font-semibold leading-[32px] text-white">
                        {item.title}
                      </p>
                      <p className="font-hanken text-[16px] font-normal leading-[24px] text-[#91929B]">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobstrategy;
