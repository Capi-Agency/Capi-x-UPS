import React from 'react';
import NextImg from '../common/next-img';

type Props = {};

const FeeStock = (props: Props) => {
  return (
    <div className="custom-container mt-[160px]">
      <div className="grid grid-cols-2 gap-10">
        <div
          className="flex flex-col gap-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div>
            <span className="text-[18px] font-medium leading-[48px] text-[#1B180E]">
              Quý 4, 2024
            </span>
            <h2 className="mt-2 text-[48px] font-bold leading-[54px] text-[#141414]">
              Trao niềm tin <br /> Nhận giá trị
            </h2>
          </div>
          <p className="w-[70%] text-[18px] font-medium leading-[28px] text-[#111013]">
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
        <div className="grid grid-cols-2 gap-[30px]">
          <div
            className="rounded-[15px] bg-[#F3F1EB] p-10 shadow-[3px_10px_20px_0px_rgba(0,0,0,0.02)]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <span className="text-[18px] font-medium leading-[40px] text-[#1A1711]">
              Mở tài khoản
            </span>
            <h3 className="mb-6 mt-4 text-[60px] font-bold leading-[105%] tracking-[-2.7px] text-[#1A1711]">
              Miễn phí
            </h3>
            <p className="h-[56px] text-[18px] font-medium leading-[28px] text-[#1A1711]">
              Tạo tài khoản eKYC chỉ 30 giây
            </p>
            <div className="my-6 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_4320_96161)">
                      <path
                        d="M6.7498 13.1199L3.5998 9.96992L2.5498 11.0199L6.7498 15.2199L15.7498 6.21992L14.6998 5.16992L6.7498 13.1199Z"
                        fill="#FE4A23"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4320_96161">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0 0.970703)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </i>
                <p className="text-[18px] text-[#1A1711]">
                  Giao dịch nhanh chóng
                </p>
              </div>
              <div className="flex items-center gap-2">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_4320_96161)">
                      <path
                        d="M6.7498 13.1199L3.5998 9.96992L2.5498 11.0199L6.7498 15.2199L15.7498 6.21992L14.6998 5.16992L6.7498 13.1199Z"
                        fill="#FE4A23"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4320_96161">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0 0.970703)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </i>
                <p className="text-[18px] text-[#1A1711]">Cá nhân hoá</p>
              </div>
            </div>
            <div>
              <button className="btn btn h-[41px] rounded-[12px] bg-[#1A1711] text-[#FFFFFF]">
                Chi tiết biểu phí
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
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
            className="rounded-[15px] bg-[#1A1711] p-10 shadow-[3px_15px_20px_0px_rgba(0,0,0,0.02)]"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <span className="text-[18px] font-medium leading-[40px] text-[#FFF]">
              Ưu đãi giao dịch
            </span>
            <h3 className="mb-6 mt-4 text-[60px] font-bold leading-[105%] tracking-[-2.7px] text-[#FFF]">
              0.15%
            </h3>
            <p className="h-[56px] text-[18px] font-medium leading-[28px] text-[#FFF]">
              Giao dịch cổ phiếu và chứng chỉ quỹ chỉ từ 0.15%
            </p>
            <div className="my-6 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_4320_96161)">
                      <path
                        d="M6.7498 13.1199L3.5998 9.96992L2.5498 11.0199L6.7498 15.2199L15.7498 6.21992L14.6998 5.16992L6.7498 13.1199Z"
                        fill="#FE4A23"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4320_96161">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0 0.970703)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </i>
                <p className="text-[18px] text-[#FFF]">Giao dịch nhanh chóng</p>
              </div>
              <div className="flex items-center gap-2">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_4320_96161)">
                      <path
                        d="M6.7498 13.1199L3.5998 9.96992L2.5498 11.0199L6.7498 15.2199L15.7498 6.21992L14.6998 5.16992L6.7498 13.1199Z"
                        fill="#FE4A23"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4320_96161">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0 0.970703)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </i>
                <p className="text-[18px] text-[#FFF]">Cá nhân hoá</p>
              </div>
            </div>
            <div>
              <button className="btn h-[41px] rounded-[12px] bg-[#FFF] text-[#1A1711]">
                Chi tiết biểu phí
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <mask
                      id="mask0_4406_14874"
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
                    <g mask="url(#mask0_4406_14874)">
                      <path
                        d="M13.125 11.2207H4V9.7207H13.125L8.9375 5.5332L10 4.4707L16 10.4707L10 16.4707L8.9375 15.4082L13.125 11.2207Z"
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
