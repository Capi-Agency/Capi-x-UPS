import React from 'react';
import NextImg from '../common/next-img';

type Props = {};

const BannerAdvise = (props: Props) => {
  return (
    <div className="custom-container">
      <div className="relative flex justify-end overflow-hidden rounded-b-[40px] bg-[#0D0D59] p-[60px]">
        <div
          className="absolute bottom-[60px] left-[60px]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="leading- text-[18px] font-medium text-[#F51666]">
            #UPS
          </span>
          <h1 className="text-[60px] font-bold capitalize text-[#FFF]">
            Tư vấn <br />{' '}
            <span className="text-[#BEB7FF]">tài chính doanh nghiệp</span>
          </h1>
          <p className="mb-16 mt-5 w-[62%] text-[18px] leading-[150%] text-[#BEB7FF]">
            Với mạng lưới quan hệ rộng lớn, UPS có khả năng tìm kiếm nhà đầu tư
            tiềm năng cho doanh nghiệp, giúp tổ chức bán cổ phần ra bên ngoài
            qua phương thức đấu giá.
          </p>
          <button className="btn mt-[60px] bg-[#F51666] text-[#FFF]">
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
        <div
          className="relative -mb-6 h-[693px] w-[782px]"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <NextImg
            src="/assets/image/banner-tuvan.png"
            alt="Capi"
            objectFit="contain"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default BannerAdvise;
