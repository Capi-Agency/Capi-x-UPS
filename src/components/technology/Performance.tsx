import React from 'react';
import NextImg from '../common/next-img';

type Props = {};

const Performance = (props: Props) => {
  return (
    <section className="mt-10 overflow-hidden bg-[#1D1D1F] lg:mt-[60px] xl:mt-20 2xl:mt-[100px] 3xl:mt-[120px]">
      <div className="custom-container justify-between pb-10 xl:pb-[60px] 2xl:pb-20 3xl:!max-w-[calc(1280px+48px)]">
        <div className="flex flex-col-reverse gap-12 md:grid md:grid-cols-[381px,auto] md:gap-[10px] lg:grid-cols-[500px,auto] lg:gap-[45px] xl:gap-[53px] 2xl:gap-[132px] 3xl:gap-[105px]">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
            className="mt-10 xl:mt-[60px] 2xl:mt-20"
          >
            <span className="text-sm font-medium text-[#FFF] lg:text-base xl:text-[18px] xl:leading-[40px]">
              #datatracking app
            </span>
            <h4 className="mt-1 text-[20px] font-bold text-[#FFF] lg:text-[30px] xl:mt-2 xl:text-[40px] xl:leading-[46px] 2xl:text-[48px] 2xl:leading-[54px]">
              Siêu ứng dụng <br />
              đầu tư tích hợp cho <br />
              mọi nhu cầu của bạn
            </h4>
            <p className="my-2 mb-4 text-sm font-medium leading-[28px] text-[#FFF] lg:my-4 lg:w-[80%] lg:text-base xl:my-6 xl:w-full xl:text-[18px] 2xl:my-8">
              Bạn có thể đầu tư chứng khoán, quỹ và nhiều hơn nữa, tất cả chỉ
              trong một ứng dụng.
            </p>
            <button className="btn bg-gradient-to-b from-[#FDF2CB] to-[#DABB6B]">
              Khám phá ngay
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="size-4 lg:size-6"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.7589 5.98952C18.7589 5.7906 18.6799 5.59984 18.5393 5.45919C18.3986 5.31853 18.2078 5.23952 18.0089 5.23952L9.42466 5.23952C9.01045 5.23952 8.67466 5.5753 8.67466 5.98952C8.67466 6.40373 9.01045 6.73952 9.42466 6.73952L16.1987 6.73952L5.45807 17.4802C5.16517 17.7731 5.16517 18.2479 5.45807 18.5408C5.75096 18.8337 6.22583 18.8337 6.51873 18.5408L17.2589 7.80062V14.5738C17.2589 14.988 17.5947 15.3238 18.0089 15.3238C18.4231 15.3238 18.7589 14.988 18.7589 14.5738L18.7589 5.98952Z"
                  fill="#111111"
                />
              </svg>
            </button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="700"
            className="relative hidden h-full w-full pt-[75%] md:block md:pt-0 lg:-right-5 lg2:-right-24 xl:-right-16 2xl:-right-20"
          >
            <NextImg
              src="/assets/image/ntcn3.png"
              alt="UPS"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-10 lg2:mt-[120px]">
          <div className="flex flex-col gap-6 md:grid md:grid-cols-[196px,auto] md:gap-[56px] lg:grid-cols-[416px,auto] lg:gap-10 xl:grid-cols-[500px,auto] 2xl:gap-[120px]">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="700"
            >
              <span className="text-sm font-medium leading-[24px] text-[#FFF] lg:text-base lg:leading-[40px] xl:text-[18px]">
                #datatracking app
              </span>
              <p className="mt-2 text-[20px] font-bold text-[#FFF] lg:text-[24px] xl:text-[30px]">
                Hiệu năng nổi bật của <br className="hidden md:block" />
                ứng dụng
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="700"
              className="grid gap-6 md:grid-cols-2 md:gap-10"
            >
              <div className="flex flex-col gap-4 2xl:ml-10">
                <div className="flex items-center gap-3 2xl:gap-4">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="34"
                      viewBox="0 0 40 34"
                      className="h-[16px] w-[19px] lg:h-[20px] lg:w-[24px] xl:h-[26px] xl:w-[31px] 2xl:h-[34px] 2xl:w-10"
                      fill="none"
                    >
                      <path
                        d="M4.90625 32.375V19.4375H14.9688M37.9688 32.375H2.03125M14.9688 32.375V10.8125H25.0312M25.0312 2.1875H35.0938V32.375H25.0312V2.1875Z"
                        stroke="white"
                        strokeWidth="2.55556"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </i>
                  <span className="text-[20px] font-bold text-[#FFF] xl:text-[30px] 2xl:text-[32px] 2xl:leading-[40px]">
                    Bảo mật
                  </span>
                </div>
                <p className="text-sm text-[#FFF] xl:text-base 2xl:tracking-[0.328px]">
                  Bảo mật tối ưu, dữ liệu của bạn luôn được bảo vệ an toàn tuyệt
                  đối.
                </p>
              </div>

              <div className="flex flex-col gap-4 2xl:ml-10">
                <div className="flex items-center gap-3 2xl:gap-4">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      className="size-[16.5px] lg:size-[21px] xl:size-7 2xl:h-9 2xl:w-9"
                    >
                      <path
                        d="M27.3438 22.3125V32.375M32.375 27.3438H22.3125M15.125 8.65625C15.125 12.2288 12.2288 15.125 8.65625 15.125C5.08366 15.125 2.1875 12.2288 2.1875 8.65625C2.1875 5.08366 5.08366 2.1875 8.65625 2.1875C12.2288 2.1875 15.125 5.08366 15.125 8.65625ZM33.8125 8.65625C33.8125 12.2288 30.9163 15.125 27.3438 15.125C23.7712 15.125 20.875 12.2288 20.875 8.65625C20.875 5.08366 23.7712 2.1875 27.3438 2.1875C30.9163 2.1875 33.8125 5.08366 33.8125 8.65625ZM15.125 27.3438C15.125 30.9163 12.2288 33.8125 8.65625 33.8125C5.08366 33.8125 2.1875 30.9163 2.1875 27.3438C2.1875 23.7712 5.08366 20.875 8.65625 20.875C12.2288 20.875 15.125 23.7712 15.125 27.3438Z"
                        stroke="white"
                        strokeWidth="2.55556"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </i>
                  <span className="text-[20px] font-bold text-[#FFF] xl:text-[30px] 2xl:text-[32px] 2xl:leading-[40px]">
                    Tốc độ
                  </span>
                </div>
                <p className="text-sm text-[#FFF] xl:text-base 2xl:tracking-[0.328px]">
                  Nâng cao hiệu quả giao dịch với tốc độ xử lý lệnh cực nhanh.
                </p>
              </div>

              <div className="flex flex-col gap-4 2xl:ml-10">
                <div className="flex items-center gap-3 2xl:gap-4">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="35"
                      viewBox="0 0 40 35"
                      fill="none"
                      className="h-[17px] w-[19px] lg:h-[21px] lg:w-[24px] xl:h-[28px] xl:w-[32px] 2xl:h-[35px] 2xl:w-[40px]"
                    >
                      <path
                        d="M11.9609 17.4824H19.1484M26.3359 27.5449H23.4609C22.3172 27.5449 21.2203 27.0906 20.4115 26.2818C19.6028 25.4731 19.1484 24.3762 19.1484 23.2324V11.7324C19.1484 10.5887 19.6028 9.49177 20.4115 8.68302C21.2203 7.87427 22.3172 7.41992 23.4609 7.41992H26.3359M3.33594 12.4512H10.5234C11.3173 12.4512 11.9609 13.0948 11.9609 13.8887V21.0762C11.9609 21.8701 11.3173 22.5137 10.5234 22.5137H3.33594C2.54203 22.5137 1.89844 21.8701 1.89844 21.0762V13.8887C1.89844 13.0948 2.54203 12.4512 3.33594 12.4512ZM27.7734 1.66992H36.3984C37.1923 1.66992 37.8359 2.31351 37.8359 3.10742V11.7324C37.8359 12.5263 37.1923 13.1699 36.3984 13.1699H27.7734C26.9795 13.1699 26.3359 12.5263 26.3359 11.7324V3.10742C26.3359 2.31351 26.9795 1.66992 27.7734 1.66992ZM27.7734 21.7949H36.3984C37.1923 21.7949 37.8359 22.4385 37.8359 23.2324V31.8574C37.8359 32.6513 37.1923 33.2949 36.3984 33.2949H27.7734C26.9795 33.2949 26.3359 32.6513 26.3359 31.8574V23.2324C26.3359 22.4385 26.9795 21.7949 27.7734 21.7949Z"
                        stroke="white"
                        strokeWidth="2.55556"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </i>
                  <span className="text-[20px] font-bold text-[#FFF] xl:text-[30px] 2xl:text-[32px] 2xl:leading-[40px]">
                    Trải nghiệm
                  </span>
                </div>
                <p className="text-sm text-[#FFF] xl:text-base 2xl:tracking-[0.328px]">
                  Tích hợp tính năng, cá nhân hóa trải nghiệm đầu tư.
                </p>
              </div>
              <div className="flex flex-col gap-[10px] 2xl:ml-10">
                <span className="text-base font-bold tracking-[-0.42px] text-[#FFF] md:text-[17px]">
                  Đánh giá sự hài lòng
                </span>
                <div className="relative h-2 w-full rounded-[4px] bg-[rgba(255,255,255,0.15)]">
                  <div
                    className="absolute left-0 top-0 h-full rounded-[4px]"
                    style={{
                      width: `${93}%`,
                      background:
                        'linear-gradient(272deg, #FDF2CB 1.35%, #DABB6B 98.65%)',
                    }}
                  >
                    <span className="absolute -right-4 bottom-5 rounded-[6px] bg-[#FDF2CB] px-[7px] py-1 text-xs font-semibold text-[#000] lg:text-[13px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="7"
                        viewBox="0 0 15 7"
                        fill="none"
                        className="absolute -bottom-[7px] left-1/2 -translate-x-1/2"
                      >
                        <path d="M7.5 7L14.5 0H0.5L7.5 7Z" fill="#FDF2CB" />
                      </svg>
                      93%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
