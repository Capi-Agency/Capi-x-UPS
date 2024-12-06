import React from 'react';
import NextImg from '../common/next-img';
import Link from 'next/link';

type Props = {};
const datas = [
  {
    title: '12',
    subtitle: '% /năm',
    description:
      'Phí ứng trước tiền bán chứng khoán là 12%/năm, với mức phí tối thiểu chỉ 50.000 VNĐ/lần, hỗ trợ giao dịch linh hoạt và nhanh chóng.',
  },
  {
    title: '0,2',
    subtitle: '%',
    description:
      'Phí biếu, tặng, cho, thừa kế chứng khoán áp dụng 0,2% giá trị giao dịch, tối thiểu 100.000 VNĐ/bộ hồ sơ, đảm bảo quy trình hợp pháp và thuận tiện.',
  },
  {
    title: '0,05',
    subtitle: '%',
    description:
      'Giao dịch cổ phiếu, chứng chỉ quỹ đăng ký giao dịch (Upcom) trong trường hợp bán (thoái) phần vốn của nhà nước và vốn của doanh nghiệp nhà nước qua hệ thống giao dịch của SGDCK.',
  },
  {
    title: '0,06',
    subtitle: '%',
    description:
      'Giao dịch cổ phiếu, chứng chỉ quỹ niêm yết tại các Sở trong trường hợp bán (thoái) phần vốn của nhà nước và vốn của doanh nghiệp nhà nước qua hệ thống giao dịch của SGDCK.',
  },
  {
    title: '0,27',
    subtitle: 'đồng',
    description:
      'Lưu ký Cổ phiếu, chứng chỉ quỹ chỉ 0,27 đồng/cổ phiếu, chứng chỉ quỹ/tháng.',
  },
  {
    title: '0,2',
    subtitle: 'đồng',
    description:
      'Lưu ký trái phiếu an toàn và hiệu quả. Chi phí hợp lý chỉ 0,2 đồng/trái phiếu mỗi tháng.',
  },
  {
    title: '0,3',
    subtitle: 'đồng',
    description:
      'Phí chuyển khoản chứng khoán (khi đóng tài khoản hoặc theo yêu cầu) chỉ từ 0,3 đồng/chứng khoán/mã, với mức phí tối thiểu 100.000 VNĐ và tối đa 300.000 VNĐ mỗi lần chuyển khoản.',
  },
  {
    title: '0,2',
    subtitle: '%',
    description:
      'Phí chuyển quyền sở hữu chứng khoán: 0,2% giá trị giao dịch (tối thiểu 100.000 VNĐ/bộ hồ sơ) áp dụng cho cả bên chuyển và bên nhận.',
  },
];

const ExpenseFeeSchedule = (props: Props) => {
  return (
    <div className="custom-container">
      <div className="flex flex-col gap-8 md:grid md:grid-cols-[231px,auto] md:gap-8 lg:grid-cols-[304px,auto] lg:gap-11 lg2:grid-cols-[360px,auto] lg2:gap-[56px] 2xl:grid-cols-[411px,auto] 2xl:gap-16 3xl:grid-cols-[440px,auto] 3xl:gap-[88px]">
        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="700">
          <p className="text-[14px] font-medium leading-[22px] text-[#79601D] lg:text-base lg:leading-[24px] lg2:text-[18px] lg2:leading-[40px]">
            Mức phí
          </p>
          <p className="text-[20px] font-bold text-[#141414] md:text-[24px] lg:mt-1 lg:text-[32px] lg2:mt-[6px] lg2:text-[40px] lg2:leading-[52px] 2xl:mt-2 2xl:text-[52px] 2xl:leading-[60px]">
            Chi phí tối ưu <br /> Cho đầu tư hiệu quả
          </p>
          <p className="my-3 text-[14px] leading-[22px] text-[#111013] lg:my-4 lg:text-[18px] lg:leading-[30px] lg2:my-5 2xl:my-6">
            Cổ phiếu là chứng chỉ do công ty cổ phần phát hành, bút toán ghi sổ
            hoặc dữ liệu điện tử xác nhận quyền sở hữu một hoặc một số cổ phần
            của công ty đó. Người mua cổ phiếu sẽ trở thành cổ đông của công ty
            phát hành.
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
          className="flex flex-col"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="700"
        >
          <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-x-[30px] md:gap-y-6 lg:gap-x-10 lg:gap-y-6 lg2:gap-x-[54px] lg2:gap-y-[32px] 2xl:gap-x-[68px] 2xl:gap-y-[48px] 3xl:gap-x-20 3xl:gap-y-[60px]">
            {datas.map((data, index) => (
              <div
                key={index}
                className="flex flex-col gap-1 lg:gap-2 lg2:gap-3"
              >
                <h3 className="text-[20px] font-bold lg:text-[30px] lg2:text-[40px] 2xl:text-[44px] 2xl:leading-[52px]">
                  {data.title}
                  <span className="text-[16px] leading-none lg:text-[24px] 2xl:text-[30px]">
                    {' '}
                    {data.subtitle}
                  </span>
                </h3>
                <p className="line-clamp-2 text-sm font-medium lg:h-[50px] lg:text-base xl:leading-[25px] 2xl:h-[56px] 2xl:text-[18px] 2xl:leading-[28px]">
                  {data.description}
                </p>
                <div>
                  <button className="text-sm font-semibold text-[#161519] underline lg:text-base">
                    Xem thêm
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="md:mt-6 lg2:mt-[32px] 2xl:mt-[48px] 3xl:mt-[60px]">
            <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-x-[30px] md:gap-y-6 lg:gap-x-10 lg:gap-y-6 lg2:gap-x-[54px] lg2:gap-y-[32px] 2xl:gap-x-[68px] 2xl:gap-y-[48px] 3xl:gap-x-20 3xl:gap-y-[60px]">
              <div className="flex flex-col gap-1 lg:gap-2 lg2:gap-3">
                <h3 className="text-[20px] font-bold lg:text-[30px] lg2:text-[40px] lg2:leading-[46px] 2xl:text-[60px] 2xl:leading-[63px] 2xl:tracking-[-2.7px]">
                  <span className="text-[18px] leading-none lg:text-[24px] 2xl:text-[30px]">
                    Các dòng tiền Việt
                  </span>
                </h3>
                <p className="line-clamp-2 text-sm font-medium lg:h-[50px] lg:text-base xl:leading-[25px] 2xl:h-[56px] 2xl:text-[18px] 2xl:leading-[28px]">
                  Phí rút chứng khoán chỉ 100.000 VNĐ/ bộ hồ sơ. Phí chuyển
                  nhượng quyền mua chứng khoán chỉ 100.000 VNĐ/ bộ hồ sơ. Phí
                  xác nhận thông tin tài khoản chỉ 100.000 VNĐ/ bộ hồ sơ
                </p>
                <div>
                  <button className="text-sm font-semibold text-[#161519] underline lg:text-base">
                    Xem thêm
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-1 lg:gap-2 lg2:gap-3">
                <h3 className="text-[20px] font-bold lg:text-[30px] lg2:text-[40px] lg2:leading-[46px] 2xl:text-[60px] 2xl:leading-[63px] 2xl:tracking-[-2.7px]">
                  <span className="text-[18px] leading-none lg:text-[24px] 2xl:text-[30px]">
                    Lãi tiền gửi không kỳ hạn
                  </span>
                </h3>
                <p className="line-clamp-2 text-sm font-medium lg:h-[50px] lg:text-base xl:leading-[25px] 2xl:h-[56px] 2xl:text-[18px] 2xl:leading-[28px]">
                  Mức phí
                </p>
                <div className="relative mt-2 h-2 w-full rounded-[4px] bg-gradient-to-r from-[#7544DD] to-[#D80A2D] md:mt-4 lg:mt-0">
                  <span className="absolute bottom-5 right-0 rounded-[6px] bg-[#161519] px-[7px] py-[6px] text-sm text-white lg:text-[18px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="7"
                      viewBox="0 0 15 7"
                      fill="none"
                      className="absolute -bottom-[7px] left-1/2 -translate-x-1/2"
                    >
                      <path d="M7.5 7L14.5 0H0.5L7.5 7Z" fill="#161519" />
                    </svg>
                    0.2%/năm
                  </span>
                </div>
              </div>
              <button className="flex gap-2 text-base font-bold text-[#8E6900] underline xl:leading-[25px] 2xl:text-[18px] 2xl:leading-[28px]">
                Tải PFD xuống
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19 17V17.6C19 18.93 17.93 20 16.6 20H7.4C6.07 20 5 18.93 5 17.6V17"
                      stroke="#8E6900"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 12L12 16M12 16L8 12M12 16L12 4"
                      stroke="#8E6900"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseFeeSchedule;
