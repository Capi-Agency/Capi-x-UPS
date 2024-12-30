import React from 'react';
import NextImg from '../common/next-img';
import Link from 'next/link';

type Props = {};

const Jobstrategy = (props: Props) => {
  const lists = [
    {
      icon: '/assets/icons/personalcard.svg',
      title: 'Thu hút và giữ chân nhân tài',
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
      icon: '/assets/icons/card-coin.svg',
      title: 'Phúc lợi',
      description:
        'Luôn dẫn đầu xu hướng, tạo ra sáng kiến giúp trải nghiệm đầu tư dễ dàng và thú vị.',
    },
  ];

  return (
    <div className="mt-6 bg-[#0F1B0E] md:mt-8 lg:mt-10 2xl:mt-[60px]">
      <div className="custom-container">
        <div className="grid gap-10 py-6 md:grid-cols-[284px,auto] md:gap-[60px] md:py-10 lg:grid-cols-[364px,auto] lg:gap-20 lg:py-[60px] lg2:grid-cols-[452px,auto] lg2:gap-[100px] lg2:py-20 2xl:grid-cols-[481px,auto] 2xl:gap-[120px] 2xl:py-[100px] 3xl:grid-cols-[520px,auto] 3xl:gap-[240px] 3xl:py-[120px]">
          {/* col-left */}
          <div
            className=""
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
          >
            <div className="">
              <h6 className="text-[14px] font-medium uppercase leading-[21px] text-[#FFF]">
                Chiến lược nhân sự
              </h6>
              <div className="my-3 border-t border-[#60606B] md:my-2 lg:my-3 2xl:my-[16px]"></div>
              <h2 className="text-[20px] font-bold text-[#FFF] md:text-[24px] lg:text-[32px] lg2:text-[40px] lg2:leading-[46px] 2xl:text-[48px] 2xl:leading-[54px]">
                Kết nối tài năng,
                <br className="hidden md:block" /> phát triển bền vững,
                <br className="hidden md:block" /> vun đắp hạnh phúc
              </h2>
              <p className="my-3 text-sm font-normal text-[#A6A6A6] md:my-6 md:text-base lg:text-[18px] lg:leading-[28px] lg2:my-7 2xl:my-[32px]">
                UPS tin rằng, bằng việc đầu tư vào con người, chúng tôi sẽ xây
                dựng được một đội ngũ nhân sự vững mạnh, giàu năng lực và đầy
                nhiệt huyết, góp phần vào sự phát triển bền vững của công ty
                trong 5 năm tới và xa hơn nữa
              </p>
              <Link href={`#`}>
                <button className="btn active">
                  Gia nhập UPS
                  <div className="relative size-4 lg:size-6">
                    <NextImg
                      src="/assets/icons/UPs.svg"
                      alt="Capi"
                      objectFit="cover"
                    />
                  </div>
                </button>
              </Link>
            </div>
          </div>
          {/* col-right */}
          <div
            className="flex flex-col gap-5 md:gap-6 lg:gap-[30px] lg2:gap-[60px]"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="700"
          >
            <div>
              <p className="text-sm text-[#A6A6A6] md:text-base lg:text-lg">
                Chúng tôi tin rằng con người là cốt lõi của mọi doanh nghiệp và
                là tiền đề của thành công, vì vậy chúng tôi chú trọng vào việc
                tìm kiếm những tài năng trẻ, nhiệt huyết và đam mê phát triển
                trong lĩnh vực chứng khoán, đầu tư.
              </p>
            </div>
            <div className="flex grid-cols-2 flex-col gap-x-6 gap-y-5 md:grid md:gap-y-6 lg:gap-x-[40px] lg:gap-y-[30px] 3xl:gap-y-[60px]">
              <div>
                <div className="relative size-6 md:size-8">
                  <NextImg src="/assets/icons/personalcard.svg" alt="ups" />
                </div>
                <p className="pt-2 text-[20px] font-semibold leading-[32px] text-white md:pb-2 md:pt-4 md:text-[18px] md:leading-[28px] lg:text-[20px]">
                  Thu hút và giữ chân nhân tài
                </p>
                <ul className="">
                  <li className="flex">
                    <span className="m-[10px] size-1 min-w-1 bg-[#A6A6A6]"></span>
                    <p className="text-sm text-[#91929B] md:text-base">
                      Xây dựng thương hiệu nhà tuyển dụng hấp dẫn
                    </p>
                  </li>
                  <li className="flex">
                    <span className="m-[10px] size-1 min-w-1 bg-[#A6A6A6]"></span>
                    <p className="text-sm text-[#91929B] md:text-base">
                      Mở rộng mạng lưới kết nối
                    </p>
                  </li>
                  <li className="flex">
                    <span className="m-[10px] size-1 min-w-1 bg-[#A6A6A6]"></span>
                    <p className="text-sm text-[#91929B] md:text-base">
                      Cung cấp chế độ đãi ngộ cạnh tranh
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <div className="relative size-6 md:size-8">
                  <NextImg src="/assets/icons/status-up.svg" alt="ups" />
                </div>
                <p className="pt-2 text-[20px] font-semibold leading-[32px] text-white md:pb-2 md:pt-4 md:text-[18px] md:leading-[28px] lg:text-[20px]">
                  Phát triển năng lực nhân viên
                </p>
                <ul className="">
                  <li className="flex">
                    <span className="m-[10px] size-1 min-w-1 bg-[#A6A6A6]"></span>
                    <p className="text-sm text-[#91929B] md:text-base">
                      Đầu tư vào đạo tạo và phát triển
                    </p>
                  </li>
                  <li className="flex">
                    <span className="m-[10px] size-1 min-w-1 bg-[#A6A6A6]"></span>
                    <p className="text-sm text-[#91929B] md:text-base">
                      Khuyến khích học tập và phát triển cá nhân
                    </p>
                  </li>
                  <li className="flex">
                    <span className="m-[10px] size-1 min-w-1 bg-[#A6A6A6]"></span>
                    <p className="text-sm text-[#91929B] md:text-base">
                      Thúc đẩy sự sáng tạo và đổi mới
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-span-2">
                <div className="relative size-6 md:size-8">
                  <NextImg src="/assets/icons/card-coin.svg" alt="ups" />
                </div>
                <p className="pt-2 text-[20px] font-semibold leading-[32px] text-white md:pb-2 md:pt-4 md:text-[18px] md:leading-[28px] lg:text-[20px]">
                  Xây dựng môi trường làm việc hạnh phúc và bền vững
                </p>
                <ul className="">
                  <li className="flex">
                    <span className="m-[10px] size-1 min-w-1 bg-[#A6A6A6]"></span>
                    <p className="text-sm text-[#91929B] md:text-base">
                      Thúc đấy sự cân bằng giữa công việc và cuộc sống
                    </p>
                  </li>
                  <li className="flex">
                    <span className="m-[10px] size-1 min-w-1 bg-[#A6A6A6]"></span>
                    <p className="text-sm text-[#91929B] md:text-base">
                      Xây dựng văn hoá doanh nghiệp tích cực
                    </p>
                  </li>
                  <li className="flex">
                    <span className="m-[10px] size-1 min-w-1 bg-[#A6A6A6]"></span>
                    <p className="text-sm text-[#91929B] md:text-base">
                      Chú trọng đến sức khoẻ và tinh thần của nhân viên
                    </p>
                  </li>
                  <li className="flex">
                    <span className="m-[10px] size-1 min-w-1 bg-[#A6A6A6]"></span>
                    <p className="text-sm text-[#91929B] md:text-base">
                      Đóng góp cho cộng đồng
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobstrategy;
