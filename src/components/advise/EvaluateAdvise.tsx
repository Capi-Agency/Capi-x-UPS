import React from 'react';
import NextImg from '../common/next-img';
import { MarqueEvaluate } from './MarqueEvaluate';

type Props = {};

const EvaluateAdvise = (props: Props) => {
  return (
    <div className="mt-10 bg-[#000] lg:mt-[60px] lg2:mt-20 xl:mt-[100px] 3xl:mt-[120px]">
      <div className="custom-container py-10 lg:py-[60px] lg2:py-20 xl:py-[100px] 3xl:py-[120px]">
        <div className="flex flex-col gap-[30px] md:grid md:grid-cols-[auto,384px] lg:grid-cols-[auto,520px] lg2:grid-cols-[auto,638px] 2xl:grid-cols-[auto,778px] 3xl:grid-cols-[auto,938px]">
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="700">
            <div className="rounded-[12px] bg-[#131414] py-[30px] md:py-5 lg:rounded-[24px] lg:py-8 lg2:rounded-[32px] lg2:py-10 2xl:py-[52px]">
              <div className="relative mx-auto h-[44px] w-[200px] lg2:h-[56px] lg2:w-[246px]">
                <NextImg
                  src="/assets/icons/logo-ups.svg"
                  alt="Capi"
                  objectFit="cover"
                  className=""
                />
              </div>
            </div>
            <div className="mt-[30px] rounded-[12px] bg-[#131414] p-5 lg:rounded-[24px] lg:p-8 lg2:rounded-[32px] lg2:p-10">
              <div className="relative mx-auto h-[160px] w-[150px] md:h-[270px] md:w-full lg:h-[354px] lg2:h-[396px] 2xl:h-[416px]">
                <NextImg
                  src="/assets/image/star-eval.png"
                  alt="Capi"
                  objectFit="cover"
                  className=""
                />
              </div>
              <div className="mt-2 md:mt-6 lg:mt-10">
                <p className="text-[20px] font-bold text-[#FFF] lg:text-[24px] lg2:text-[32px] 2xl:text-[40px] 2xl:leading-[54px]">
                  5000 lượt đánh giá <br className="hidden md:block" /> năm sao
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="700">
            <div className="rounded-[12px] bg-[#131414] py-5 md:rounded-[20px] lg:rounded-[24px] lg:py-8 lg2:rounded-[32px] lg2:py-10">
              <div className="mb-16 px-5 text-right md:mb-6 lg:mb-[88px] lg:px-8 lg2:mb-[102px] lg2:px-10 2xl:mb-[112px]">
                <span className="text-[18px] font-medium leading-[28px] text-[#00E7FF]">
                  Đối tác
                </span>
                <p className="text-[20px] font-bold text-[#FFF] lg:text-[24px] lg2:text-[32px] 2xl:text-[40px] 2xl:leading-[54px]">
                  20,000 doanh nghiệp tin tưởng <br /> lựa chọn chúng tôi
                </p>
              </div>
              <MarqueEvaluate />
            </div>
            <div className="relative mt-[30px] flex h-[388px] flex-col overflow-hidden rounded-[12px] bg-[#131414] p-5 md:h-[215px] md:flex-row md:p-0 lg:h-[252px] lg:rounded-[24px] lg2:h-[294px] lg2:rounded-[32px] 2xl:h-[332px]">
              <div className="relative z-10 h-[180px] w-[215px] md:-left-8 md:top-12 md:h-[157px] md:w-[187px] lg:-left-12 lg:top-14 lg:h-[205px] lg:w-[246px] lg2:-left-14 lg2:top-0 lg2:h-[294px] lg2:w-[360px] 2xl:-left-7 2xl:h-[332px] 2xl:w-[440px]">
                <NextImg
                  src="/assets/image/banner-review.png"
                  alt="Capi"
                  objectFit="cover"
                  className="object-right-top"
                />
              </div>
              <div className="mt-6 flex-col md:absolute md:right-10 md:top-1/2 md:mt-0 md:flex md:-translate-y-1/2 md:items-end md:text-end">
                <h3 className="text-[20px] font-bold text-[#FFF] md:text-right lg:text-[24px] lg2:text-[32px] 2xl:text-[40px] 2xl:leading-[54px]">
                  Trải nghiệm ngay nào
                </h3>
                <p className="mt-2 text-wrap text-sm text-[#9AA1C0] md:mt-3 md:w-[65%] md:text-right lg:mt-4 lg:w-auto lg:text-base">
                  Trải nghiệm ngay để khám phá sự khác biệt,
                  <br className="hidden lg:block" /> mở ra một hành trình mới
                  đầy thú vị và bất ngờ!
                </p>
                <button className="btn mt-6 bg-[#00D7B0] text-[#000] lg:mt-10">
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
                        fill="#000"
                      />
                    </svg>
                  </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvaluateAdvise;
