import React from 'react';
import NextImg from '../common/next-img';

type Props = {};

const services = [
  'Tư vấn thường niên về lĩnh vực chứng khoán',
  'Hỗ trợ về công bố thông tin phù hợp với pháp luật',
  'Hỗ trợ tổ chức đại hội đồng thường niên và bất thường',
  'Hỗ trợ soạn thảo tài liệu họp ĐHCĐ',
  'Tư vấn bầu lại Hội đồng quản trị, ban kiểm soát',
  'Trả cổ tức bằng tiền mặt hoặc cổ phiếu',
  'Phát hành cổ phiếu thưởng cho cổ đông hiện hữu',
  'Mua/ bán cổ phiếu quỹ',
];

const ServiceAdvise = (props: Props) => {
  return (
    <div className="custom-container mt-[160px]">
      <div className="relative overflow-hidden rounded-[40px] bg-[#4C35F5] p-[60px]">
        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="700">
          <h3 className="text-[32px] font-medium text-[#FFF]">
            Hỗ trợ doanh nghiệp <br />
            các vấn đề thường niên
          </h3>
          <button className="btn mb-[60px] mt-5 bg-[#F51666] text-[#FFF]">
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
          <div className="grid w-[65%] grid-cols-2 gap-x-8 gap-y-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="size-2 min-h-2 min-w-2 rotate-45 bg-[#FFF]"></div>
                <p className="text-base font-medium text-[#FFF]">{service}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="absolute right-0 top-0"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="700"
        >
          <div className="relative h-[422px] w-[515px]">
            <NextImg
              src="/assets/image/service-tv.png"
              alt="Capi"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAdvise;
