import React from 'react';
import NextImg from '../common/next-img';
import { MarqueEvaluate } from './MarqueEvaluate';

type Props = {};

const EvaluateAdvise = (props: Props) => {
  return (
    <div className="mt-[120px] bg-[#0D0D59]">
      <div className="custom-container py-[120px]">
        <div className="grid grid-cols-[auto,938px] gap-[30px]">
          <div>
            <div className="rounded-[32px] bg-[#020D31] px-[108px] py-[52px]">
              <div className="relative mx-auto h-[56px] w-full">
                <NextImg
                  src="/assets/icons/logo-ups.svg"
                  alt="Capi"
                  objectFit="cover"
                  className=""
                />
              </div>
            </div>
            <div className="mt-[30px] rounded-[32px] bg-[#020D31] p-10">
              <div className="relative h-[416px] w-full">
                <NextImg
                  src="/assets/image/star-eval.png"
                  alt="Capi"
                  objectFit="cover"
                  className=""
                />
              </div>
              <div className="mt-10">
                <p className="text-[40px] font-bold leading-[54px] text-[#FFF]">
                  5000 lượt đánh giá năm sao
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-[32px] bg-[#020D31] py-10">
              <div className="px-10 text-right">
                <span className="text-[18px] font-medium leading-[28px] text-[#F51666]">
                  Đối tác
                </span>
                <p className="text-[40px] font-bold leading-[54px] text-[#FFF]">
                  20,000 doanh nghiệp tin tưởng <br /> lựa chọn chúng tôi
                </p>
              </div>
              <MarqueEvaluate />
            </div>
            <div className="mt-[30px] flex items-center justify-between rounded-[32px] bg-[#020D31]">
              <div className="relative h-[332px] w-[45%]">
                <NextImg
                  src="/assets/image/banner-review.png"
                  alt="Capi"
                  objectFit="cover"
                  className=""
                />
              </div>
              <div className="pr-10">
                <h3 className="text-[40px] font-bold leading-[54px] text-[#FFF]">
                  Trải nghiệm ngay nào
                </h3>
                <p className="mb-10 mt-4 text-right text-[#9AA1C0]">
                  Trải nghiệm ngay để khám phá sự khác biệt,
                  <br /> mở ra một hành trình mới đầy thú vị và bất ngờ!
                </p>
                <button className="btn float-end bg-[#F51666] text-[#FFF]">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvaluateAdvise;
