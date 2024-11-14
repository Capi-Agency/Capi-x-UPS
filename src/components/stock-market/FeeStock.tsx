import React from 'react';
import NextImg from '../common/next-img';

type Props = {};

const FeeStock = (props: Props) => {
  return (
    <div className="custom-container mt-10 lg2:mt-[60px] xl:mt-20 2xl:mt-[120px] 3xl:mt-[160px]">
      <div className="grid gap-6 md:grid-cols-[294px,auto] lg:grid-cols-[398px,auto] lg2:grid-cols-[496px,auto] 2xl:grid-cols-[550px,auto] 2xl:gap-8 3xl:grid-cols-2 3xl:gap-10">
        <div
          className="flex flex-col gap-3 md:gap-4 lg2:gap-5 2xl:gap-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div>
            <span className="text-base font-medium leading-[40px] text-[#1B180E] lg2:text-[18px]">
              Quý 4, 2024
            </span>
            <h2 className="text-[20px] font-bold text-[#141414] md:mt-1 lg:mt-[6px] lg:text-[30px] lg2:text-[40px] lg2:leading-[46px] 2xl:mt-2 2xl:text-[48px] 2xl:leading-[54px]">
              Trao niềm tin <br /> Nhận giá trị
            </h2>
          </div>
          <p className="font-medium text-[#111013] md:text-sm lg:text-base lg:leading-[24px] lg2:text-[18px] lg2:leading-[28px] 2xl:w-[70%]">
            Cổ phiếu là chứng chỉ do công ty cổ phần phát hành, bút toán ghi sổ
            hoặc dữ liệu điện tử xác nhận quyền sở hữu một hoặc một số cổ phần
            của công ty đó. Người mua cổ phiếu sẽ trở thành cổ đông của công ty
            phát hành.
          </p>
          <div>
            <button className="btn bg-[#D0F500] text-[#014227]">
              Mở tài khoản ngay
              <div className="relative h-4 w-4 lg:h-6 lg:w-6">
                <NextImg
                  src="/assets/icons/UPs.svg"
                  alt="Capi"
                  objectFit="cover"
                />
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:grid md:grid-cols-2 lg:gap-4 lg2:gap-6 2xl:gap-[30px]">
          <div
            className="flex flex-col gap-6 rounded-[15px] bg-[#F3F1EB] p-6 shadow-[3px_10px_20px_0px_rgba(0,0,0,0.02)] lg2:p-10"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div>
              <span className="text-base font-medium text-[#1A1711] xl:leading-[24px] 2xl:text-[18px] 2xl:leading-[40px]">
                Mở tài khoản
              </span>
              <h3 className="mt-2 text-[20px] font-bold text-[#1A1711] md:mt-[14px] lg:text-[30px] lg2:text-[40px] lg2:leading-[46px] 2xl:mt-4 2xl:text-[60px] 2xl:leading-[63px] 2xl:tracking-[-2.7px]">
                Miễn phí
              </h3>
            </div>
            <p className="-mb-3 h-[40px] text-xs font-medium text-[#1A1711] md:mb-0 lg:h-[50px] lg:text-base xl:leading-[25px] 2xl:h-[56px] 2xl:text-[18px] 2xl:leading-[28px]">
              Tạo tài khoản eKYC <br />
              chỉ 30 giây
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1 lg:gap-2">
                <div className="relative h-4 w-4 2xl:h-[18px] 2xl:w-[18px]">
                  <NextImg
                    src="/assets/image/tick-cam.svg"
                    alt="Capi"
                    objectFit="cover"
                    className=""
                  />
                </div>
                <p className="text-xs text-[#1A1711] lg:text-base 2xl:text-[18px]">
                  Giao dịch nhanh chóng
                </p>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <div className="relative h-4 w-4 2xl:h-[18px] 2xl:w-[18px]">
                  <NextImg
                    src="/assets/image/tick-cam.svg"
                    alt="Capi"
                    objectFit="cover"
                    className=""
                  />
                </div>
                <p className="text-xs text-[#1A1711] lg:text-base 2xl:text-[18px]">
                  Cá nhân hoá
                </p>
              </div>
            </div>
            <div>
              <button className="btn btn h-[34px] rounded-[12px] bg-[#1A1711] text-[#FFFFFF] md:gap-[6px] md:px-2 lg:h-[41px] lg:px-3">
                Chi tiết biểu phí
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    className="h-[18px] w-[18px] lg:h-5 lg:w-5"
                  >
                    <mask
                      id="mask0_4406_9566"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="20"
                      height="21"
                    >
                      <rect
                        y="0.470703"
                        width="20"
                        height="20"
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_4406_9566)">
                      <path
                        d="M13.125 11.2207H4V9.7207H13.125L8.9375 5.5332L10 4.4707L16 10.4707L10 16.4707L8.9375 15.4082L13.125 11.2207Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </i>
              </button>
            </div>
          </div>
          <div
            className="flex flex-col gap-6 rounded-[15px] bg-[#1A1711] p-6 shadow-[3px_10px_20px_0px_rgba(0,0,0,0.02)] lg2:p-10"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div>
              <span className="text-base font-medium text-[#FFF] xl:leading-[24px] 2xl:text-[18px] 2xl:leading-[40px]">
                Ưu đãi giao dịch
              </span>
              <h3 className="mt-2 text-[20px] font-bold text-[#FFF] md:mt-[14px] lg:text-[30px] lg2:text-[40px] lg2:leading-[46px] 2xl:mt-4 2xl:text-[60px] 2xl:leading-[63px] 2xl:tracking-[-2.7px]">
                0.15%
              </h3>
            </div>
            <p className="-mb-3 h-[40px] text-xs font-medium text-[#FFF] md:mb-0 lg:h-[50px] lg:text-base xl:leading-[25px] 2xl:h-[56px] 2xl:text-[18px] 2xl:leading-[28px]">
              Giao dịch cổ phiếu và chứng chỉ quỹ chỉ từ 0.15%
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1 lg:gap-2">
                <div className="relative h-4 w-4 2xl:h-[18px] 2xl:w-[18px]">
                  <NextImg
                    src="/assets/image/tick-cam.svg"
                    alt="Capi"
                    objectFit="cover"
                    className=""
                  />
                </div>
                <p className="text-xs text-[#FFF] lg:text-base 2xl:text-[18px]">
                  Chi phí ưu đãi
                </p>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <div className="relative h-4 w-4 flex-shrink-0 2xl:h-[18px] 2xl:w-[18px]">
                  <NextImg
                    src="/assets/image/tick-cam.svg"
                    alt="Capi"
                    objectFit="cover"
                    className=""
                  />
                </div>
                <p className="text-nowrap text-xs text-[#FFF] lg:text-base 2xl:text-[18px]">
                  Tích luỹ hạng thành viên
                </p>
              </div>
            </div>
            <div>
              <button className="btn btn h-[34px] rounded-[12px] bg-[#FFF] text-[#1A1711] md:gap-[6px] md:px-2 lg:h-[41px] lg:px-3">
                Chi tiết biểu phí
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    className="h-[18px] w-[18px] lg:h-5 lg:w-5"
                  >
                    <mask
                      id="mask0_4494_6412"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="18"
                      height="18"
                    >
                      <rect width="17.7778" height="17.7778" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_4494_6412)">
                      <path
                        d="M11.8126 9.67461H3.6001V8.32461H11.8126L8.04385 4.55586L9.0001 3.59961L14.4001 8.99961L9.0001 14.3996L8.04385 13.4434L11.8126 9.67461Z"
                        fill="#1A1711"
                      />
                    </g>
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

export default FeeStock;
