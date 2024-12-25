import React from 'react';
import NextImg from '../common/next-img';

type Props = {};

const Transfer = (props: Props) => {
  return (
    <section className="custom-container mt-10 lg:mt-[60px] xl:mt-20 2xl:mt-[100px] 3xl:mt-[120px] 3xl:!max-w-[calc(1280px+48px)]">
      <div className="flex w-full flex-col gap-3 md:grid md:grid-cols-2 lg:gap-4 xl:gap-5 2xl:gap-6">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="700"
          className="relative col-span-1 overflow-hidden rounded-[16px] bg-[#1d1d1f] lg:rounded-[24px] xl:rounded-[32px] 2xl:rounded-[40px]"
        >
          <div className="flex w-full flex-col gap-1 px-4 pt-4 lg:p-6 xl:gap-2 xl:p-[30px] 2xl:p-10">
            <div className="text-xl font-semibold text-[#F3F3FB] md:text-2xl lg:text-[30px] xl:text-[40px] 2xl:text-5xl">
              Chuyển tiền 24/7
            </div>
            <div className="w-full text-sm font-medium text-[#B3B3B3] lg:text-base xl:w-[90%] 3xl:w-[85%]">
              Bảo mật, tiện lợi và nhanh chóng
            </div>
          </div>

          <div className="relative h-[310px] w-full md:-top-12 md:h-full lg:-top-16 lg2:-top-[88px] xl:-top-28 2xl:-top-32">
            <NextImg
              src="/assets/image/nen-tang-1.png"
              alt="UPS"
              objectFit="contain"
            />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="700"
          className="relative col-span-1 overflow-hidden rounded-[16px] bg-[#F7F7F7] bg-gradient-to-b from-[rgba(230,206,141,0)] to-[rgba(230,206,141,0.4)] lg:rounded-[24px] xl:rounded-[32px] 2xl:rounded-[40px]"
        >
          <div className="flex w-full flex-col gap-1 p-4 lg:p-6 xl:gap-2 xl:p-[30px] 2xl:p-10">
            <div className="text-xl font-semibold text-[#31270b] md:text-2xl lg:text-[30px] xl:text-[40px] 2xl:text-5xl">
              Tài sản
            </div>
            <div className="w-full text-sm font-medium text-[#595959] lg:text-base xl:w-[90%] 3xl:w-[80%]">
              Theo dõi giá trị tài sản của bạn, theo dõi hiệu suất đầu tư và
              nhận thông báo về các sự kiện quan trọng.
            </div>
          </div>
          <div className="relative -bottom-5 mx-auto h-[255px] w-[270px] scale-110 md:bottom-0 md:h-[275px] md:w-[228px] md:scale-100 lg:h-[335px] lg:w-[277px] lg2:h-[440px] lg2:w-[359px] xl:h-[460px] xl:w-[375px] 2xl:h-[510px] 2xl:w-[417px] 3xl:h-[530px]">
            <NextImg
              src="/assets/image/nen-tang-2.png"
              alt="UPS"
              objectFit="contain"
            />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="700"
          className="col-span-2 rounded-[16px] bg-[#FBF5E5] lg:rounded-[24px] xl:rounded-[32px] 2xl:rounded-[40px]"
        >
          <div className="flex flex-col-reverse justify-between overflow-hidden md:flex-row md:gap-0 3xl:gap-[54px]">
            <div className="relative mx-auto h-[250px] w-[294px] md:-bottom-7 md:h-[240px] md:w-[346px] md:pt-0 lg:-bottom-10 lg:ml-7 lg:h-[345px] lg:w-[498px] lg2:-bottom-12 lg2:ml-20 lg2:h-[405px] lg2:w-[590px] xl:h-[420px] xl:w-[610px] 2xl:-bottom-16 2xl:h-[475px] 2xl:w-[670px] 3xl:h-[500px]">
              <NextImg
                src="/assets/image/nen-tang-3.png"
                alt="UPS"
                objectFit="contain"
              />
            </div>

            <div className="basis-full space-y-1 p-4 text-start md:basis-6/12 md:text-end lg:basis-[38%] lg:p-6 xl:basis-[36%] xl:space-y-2 xl:p-[30] 2xl:basis-5/12 2xl:p-10 3xl:space-y-5 3xl:p-[56px_72px_0_0]">
              <div className="w-full text-start text-xl font-semibold text-[#32280B] md:text-end md:text-2xl lg:text-[30px] xl:text-[40px] 2xl:text-5xl">
                Thị trường
              </div>
              <div className="w-full text-start text-sm font-medium text-[#666] md:text-end lg:text-base">
                Công cụ phân tích kỹ thuật, biểu đồ đa dạng hỗ trợ Nhà đầu tư
                đưa ra quyết định nhanh chóng
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transfer;
