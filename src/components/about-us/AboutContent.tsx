import React from 'react';
import NextImg from '../common/next-img';

type Props = {};
const features = [
  {
    id: 1,
    title: 'Sáng tạo',
    description:
      'Tiên phong trong công nghệ tài chính, mang đến giải pháp đầu tư đột phá và khác biệt, giúp khách hàng trải nghiệm đầu tư một cách dễ dàng và thú vị.',
  },
  {
    id: 2,
    title: 'Tin cậy',
    description:
      'Xây dựng niềm tin vững chắc qua sự trung thực và minh bạch trong mọi hoạt động, luôn đặt lợi ích và trải nghiệm của khách hàng lên hàng đầu.',
  },
  {
    id: 3,
    title: 'Hiệu quả',
    description:
      'Tập trung tối ưu hóa kết quả đầu tư, tạo ra giá trị thực và cộng đồng đầu tư bền vững cho khách hàng.',
  },
];

const AboutContent = (props: Props) => {
  return (
    <>
      <div className="custom-container">
        <div className="mt-10 flex flex-col gap-6 md:mt-0 md:grid md:grid-cols-2 md:gap-0">
          <div
            className="flex flex-col gap-4 place-self-end"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="text-[14px] font-semibold uppercase leading-normal text-[#00D763] lg:text-base lg2:text-[18px] 3xl:text-2xl">
              Tầm nhìn
            </span>
            <p className="text-[20px] font-bold text-[#141414] lg:text-[24px] lg2:text-[40px] lg2:leading-[46px] 2xl:text-[44px] 2xl:leading-[52px] 3xl:text-[48px] 3xl:leading-[54px]">
              Trở thành Công ty chứng khoán bán lẻ hàng đầu cung cấp các giải
              pháp tài chính đầu tư cá nhân dành cho thế hệ trẻ
            </p>
          </div>
          <div
            className="w-full place-content-end justify-self-end bg-[#23252B] p-5 md:h-[320px] md:w-[340px] lg:h-[360px] lg:w-[380px] lg:p-10 lg2:h-[460px] lg2:w-[450px] lg2:p-[50px] 2xl:h-[492px] 2xl:p-[60px]"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="flex h-10 w-10 items-center justify-center bg-[#33363F] lg:h-[60px] lg:w-[60px] 2xl:h-20 2xl:w-20">
              <div className="relative h-3 w-3 lg:h-[18px] lg:w-[18px] 2xl:h-6 2xl:w-6">
                <NextImg
                  src="/assets/icons/share2.svg"
                  alt="Capi"
                  objectFit="cover"
                />
              </div>
            </div>
            <p className="mb-4 mt-3 text-[14px] font-medium leading-[22px] tracking-[0.28px] text-[#FFF] lg:mt-[32px] lg:text-base lg:tracking-[0.4px] lg2:text-[18px] lg2:leading-[28px] 3xl:text-[20px] 3xl:leading-[30px]">
              Tạo ra không gian đầu tư độc đáo, mới mẻ tràn đầy hứng khởi, từ đó
              định hình lại cách nhà đầu tư tiếp cận và trải nghiệm đầu tư tài
              chính cá nhân.
            </p>
            <span className="text-[14px] font-semibold uppercase text-[#00D763] lg:text-base lg2:text-[18px] lg2:leading-[28px] 3xl:text-2xl 3xl:leading-normal">
              Sứ mệnh
            </span>
          </div>
        </div>
      </div>
      <div className="custom-container mt-10 md:mt-20 lg:mt-[100px] 3xl:mt-[130px]">
        <div className="flex flex-col gap-10 md:grid md:grid-cols-[278px,auto] lg:grid-cols-2 lg:gap-[30px]">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-col justify-between"
          >
            <div>
              <span className="text-[14px] font-bold leading-[40px] text-[#111013] md:text-[20px] lg:text-[30px] 2xl:text-[32px]">
                Giá trị cốt lõi
              </span>
              <div className="my-3 h-[1px] w-full bg-[#60606B] md:my-2 lg:my-4 lg:mb-8"></div>
              <p className="text-[14px] font-medium leading-[28px] text-[#111013] lg:text-[18px]">
                Chúng tôi không ngừng nỗ lực cho mục tiêu
              </p>
            </div>
            <div className="relative mt-10 h-[200px] w-[186px] lg:mt-0 lg:h-[250px] lg:w-[233px]">
              <NextImg
                src="/assets/image/ups-box.png"
                alt="Capi"
                objectFit="cover"
              />
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="600">
            <div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-6 lg:gap-x-[30px] lg:gap-y-[50px]">
              {features.map(({ id, title, description }) => (
                <div key={id} className="col-span-1">
                  <span className="text-[14px] font-medium leading-[40px] text-[#111013] lg:text-[18px]">
                    #{id}
                  </span>
                  <div className="my-3 h-[1px] w-full bg-[#60606B] md:my-2 lg:my-4"></div>
                  <h4 className="mb-2 text-[20px] font-bold text-[#111013] lg:text-[30px] lg2:mb-5 2xl:text-[32px] 2xl:leading-[40px]">
                    {title}
                  </h4>
                  <p className="text-[14px] font-medium leading-[22px] text-[#111013] lg:text-[18px] lg:leading-[28px]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
