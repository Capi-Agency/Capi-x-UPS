import React from 'react';
import NextImg from '../common/next-img';

type Props = {};

const BannerStock = (props: Props) => {
  return (
    <div className="bg-[#000] pb-10 pt-16">
      <div className="custom-container">
        <div className="flex h-[658px] w-full items-center justify-center bg-[url('/assets/image/banner-stock.png')] bg-cover bg-center">
          <div className="" data-aos="fade-up" data-aos-delay="200">
            <h1 className="text-[72px] font-bold leading-[80px] text-[#D0F500]">
              Cổ Phiếu
            </h1>
            <p className="mt-4 text-base font-bold text-[#FFF]">
              Đặc quyền vượt trội tại Chứng khoán UPS
            </p>
          </div>
        </div>
        <div
          className="mx-auto mt-[60px] w-[47%] text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="mt-4 text-base font-bold text-[#FFF]">
            Tham gia giao dịch Cổ phiếu là giải pháp đơn giản và dễ dàng giúp
            bạn hiện thực hóa ước mơ tăng trưởng tài chính và chinh phục những
            đỉnh cao cuộc sống.
          </p>
          <div className="mx-auto my-5 h-[1px] w-[370px] bg-[#60606B] bg-opacity-65"></div>
          <button className="btn mx-auto !bg-[#A66CFF] !text-[#FFF]">
            Mở tài khoản ngay
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.7594 6.96022C18.7594 6.76131 18.6804 6.57054 18.5398 6.42989C18.3991 6.28924 18.2083 6.21022 18.0094 6.21022L9.42515 6.21022C9.01093 6.21022 8.67515 6.54601 8.67515 6.96022C8.67515 7.37443 9.01093 7.71022 9.42515 7.71022L16.1992 7.71022L5.45855 18.4509C5.16566 18.7438 5.16566 19.2186 5.45855 19.5115C5.75145 19.8044 6.22632 19.8044 6.51921 19.5115L17.2594 8.77132V15.5445C17.2594 15.9587 17.5952 16.2945 18.0094 16.2945C18.4236 16.2945 18.7594 15.9587 18.7594 15.5445L18.7594 6.96022Z"
                  fill="white"
                />
              </svg>
            </i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerStock;
