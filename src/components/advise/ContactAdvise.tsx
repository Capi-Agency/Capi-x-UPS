import React from 'react';
import NextImg from '../common/next-img';

type Props = {};

const ContactAdvise = (props: Props) => {
  return (
    <div className="custom-container my-10 lg:my-[60px] lg2:my-[80px] xl:my-[100px] 3xl:my-[120px]">
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="700"
        className="relative flex w-full flex-col items-center gap-5 overflow-hidden rounded-[12px] bg-black p-0 md:flex-row md:gap-0 md:rounded-[20px] md:p-[44px_38px] lg:rounded-[24px] lg:p-[42px] lg2:rounded-[32px] lg2:p-[55px_50px] 2xl:rounded-[40px]"
      >
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="700"
          className="flex w-full basis-full flex-col gap-5 p-5 md:basis-5/12 md:gap-10 md:p-0 lg:basis-[40%] lg2:basis-4/12 2xl:basis-[28%] 3xl:basis-[24%]"
        >
          <div className="space-y-2 md:space-y-4">
            <div className="text-xl font-bold text-white md:text-2xl lg:text-[32px] lg:leading-[1.3] lg2:text-[40px]">
              Tìm kiếm đối tác <br className="hidden md:block" />
              đồng hành?
            </div>
            <div className="text-sm font-medium leading-[1.58] text-white md:text-base lg:text-lg">
              Đừng chần chờ, hãy để UPS đồng hành cùng doanh nghiệp của bạn
            </div>
          </div>

          <button className="btn w-fit bg-[#00D7B0] text-sm text-black lg:text-lg">
            Liên hệ tư vấn
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
                fill="black"
              />
            </svg>
          </button>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="700"
          className="relative h-[240px] w-[342px] md:absolute md:right-[20px] md:top-[28px] md:block md:h-[279px] md:w-[359px] lg:right-[42px] lg:top-[19px] lg:h-[358px] lg:w-[460px] lg2:right-[63px] lg2:top-[15px] lg2:h-[424px] lg2:w-[544px] 2xl:right-[63px] 2xl:top-[-5px] 2xl:h-[463px] 2xl:w-[594px]"
        >
          <div className="absolute left-0 top-0 h-[266px] w-full md:h-full">
            <div className="relative h-full w-full">
              <NextImg
                src="/assets/image/services_advise_image.png"
                alt="UPS"
                objectFit="cover"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAdvise;
