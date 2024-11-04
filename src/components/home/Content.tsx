import NextImg from '../common/next-img';

type Props = {};

const Content = (props: Props) => {
  return (
    <>
      <div className="custom-container mt-10 lg:mt-[60px] xl:mt-20 2xl:mt-[100px] 3xl:mt-[160px]">
        {/* section 1 */}
        <div className="grid grid-rows-3 gap-3 md:grid-cols-3 md:grid-rows-none lg:gap-5 lg2:gap-[30px]">
          <div
            className="flex w-full flex-col justify-between rounded-[12px] bg-[url('/assets/image/bg-card.png')] bg-cover bg-center p-5 lg:rounded-3xl lg2:p-8 xl:p-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex flex-col gap-1 md:gap-2 lg:gap-3 2xl:gap-4">
              <span className="text-[20px] font-bold leading-normal text-[#FFF] lg:text-[24px] lg:leading-[40px] lg2:text-[32px] 2xl:text-[38px] 2xl:leading-[48px] 3xl:text-[40px] 3xl:leading-[50px]">
                Cộng đồng chất lượng của UPS
              </span>
              <span className="text-[14px] font-medium leading-[22px] text-[#FFF] lg:text-[18px] lg:leading-[28px]">
                Cho chặng đường đầu tư luôn có UPS đồng hành bên bạn
              </span>
            </div>
            <div className="flex gap-5 md:gap-3 lg:gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#FFF] lg:h-[50px] lg:w-[50px]">
                  <div className="relative h-[11px] w-[13px] lg:h-[14px] lg:w-[18px]">
                    <NextImg
                      src="/assets/icons/tele.svg"
                      alt="Capi"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold leading-normal text-[#FFF]">
                    Telegram
                  </span>
                  <span className="text-xs font-medium leading-normal text-[#FFF]">
                    3k người dùng
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#FFF] lg:h-[50px] lg:w-[50px]">
                  <div className="relative h-[17px] w-[8px] lg:h-[21px] lg:w-[10px]">
                    <NextImg
                      src="/assets/icons/fb.svg"
                      alt="Capi"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold leading-normal text-[#FFF]">
                    Facebook
                  </span>
                  <span className="text-xs font-medium leading-normal text-[#FFF]">
                    8k người dùng
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#FFF] lg:h-[50px] lg:w-[50px]">
                  <div className="relative h-[14.4px] w-[14.4px] lg:h-[18px] lg:w-[18px]">
                    <NextImg
                      src="/assets/image/zalo.png"
                      alt="Capi"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="item-center flex gap-1 text-sm font-bold leading-normal text-[#FFF]">
                    <span className="block md:hidden lg:block">Nhóm </span> Zalo
                  </p>
                  <span className="text-xs font-medium leading-normal text-[#FFF]">
                    12k người dùng
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex w-full items-end rounded-[12px] bg-[url('/assets/image/bg-card2.png')] bg-cover bg-center p-5 lg:rounded-3xl lg2:p-8 xl:p-10"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[20px] font-bold leading-normal text-[#111013] lg:text-[24px] lg:leading-[40px] lg2:text-[32px] 2xl:text-[38px] 2xl:leading-[48px] 3xl:text-[40px] 3xl:leading-[50px]">
                Nền tảng ứng dụng di động mới
              </span>
              <span className="text-sm font-medium text-[#111013] lg:text-[18px] lg:leading-[28px]">
                Tải ngay nền tảng di động.
              </span>
            </div>
          </div>
          <div
            className="relative flex flex-col justify-between rounded-[12px] bg-[#00D763] p-5 lg:rounded-3xl lg2:p-8 xl:p-10"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#014227] lg:h-[60px] lg:w-[60px] lg:rounded-[20px] lg2:h-20 lg2:w-20">
                <div className="relative h-3 w-3 lg:h-[18px] lg:w-[18px] lg2:h-6 lg2:w-6">
                  <NextImg
                    src="/assets/icons/share.svg"
                    alt="Capi"
                    objectFit="cover"
                  />
                </div>
              </div>
              <h3 className="mb-2 mt-3 text-[20px] font-bold leading-normal text-[#014227] lg:mb-3 lg:mt-6 lg:text-[24px] lg:leading-[40px] lg2:text-[32px] 2xl:mb-4 2xl:mt-8 2xl:text-[38px] 2xl:leading-[48px] 3xl:text-[40px] 3xl:leading-[50px]">
                UP Securities <br /> Dẫn lối hành trình đầu tư của bạn
              </h3>
              <span className="text-[14px] font-medium leading-[22px] text-[#126240] lg:text-base lg:leading-[28px] lg2:text-[18px]">
                Chính thức ra mắt <br /> dẫn lỗi hành trình đầu tư của bạn
              </span>
            </div>
            <div>
              <button className="btn active mt-3 flex items-center !bg-[#FFF] !text-[#014227] md:mt-6 lg:mt-12 2xl:mt-[42px] 3xl:mt-[70px]">
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
        </div>
        {/*  section 2*/}
        <div className="relative mt-10 flex flex-col gap-5 rounded-[16px] bg-[#150900] p-5 md:grid md:grid-cols-[auto,52%] md:items-center md:gap-10 md:px-5 md:py-0 lg:mt-[60px] lg:gap-14 lg:rounded-[40px] lg:px-10 lg2:gap-20 lg2:px-[50px] xl:mt-20 2xl:mt-[100px] 3xl:mt-[160px]">
          <div
            className="relative flex h-[234px] w-[240px] place-content-start justify-start md:h-[276px] md:w-[273px] lg:h-[320px] lg:w-[340px] lg2:h-[400px] lg2:w-[430px] 2xl:w-[482px] 3xl:w-[564px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <NextImg
              src="/assets/icons/home-banner2.svg"
              alt="Capi"
              objectFit="cover"
              className=""
            />
          </div>
          <div
            className="flex flex-col"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <span className="text-[14px] font-medium text-[#FFF] lg:text-base lg:leading-[40px] lg2:text-[18px]">
              #trungtamdaotao
            </span>
            <p className="mt-1 text-[20px] font-bold leading-normal text-[#FFBC00] lg:mt-2 lg:text-[24px] lg2:text-[40px] lg2:leading-[46px] 2xl:text-[44px] 2xl:leading-[52px] 3xl:text-[48px] 3xl:leading-[54px]">
              Trở thành nhà đầu tư chuyên nghiệp với UPS Academy
            </p>
            <p className="mb-5 mt-2 text-[14px] leading-[22px] tracking-[0.276px] text-[#FFF] lg:my-6 lg:text-base lg:leading-[29px] lg2:text-[18px]">
              So how does it work? Let’s check our{' '}
              <span className="font-bold">Getting Started</span>{' '}
              <br className="hidden lg:block" /> tutorial or choose from
              pre-made templates.
            </p>
            <div>
              <button className="btn !bg-[#FF6D00] !text-[#FFF]">
                Khám phá ngay
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 lg:h-6 lg:w-6"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.7594 6.48952C18.7594 6.2906 18.6804 6.09984 18.5398 5.95919C18.3991 5.81853 18.2083 5.73952 18.0094 5.73952L9.42515 5.73952C9.01093 5.73952 8.67515 6.0753 8.67515 6.48952C8.67515 6.90373 9.01093 7.23952 9.42515 7.23952L16.1992 7.23952L5.45855 17.9802C5.16566 18.2731 5.16566 18.7479 5.45855 19.0408C5.75145 19.3337 6.22632 19.3337 6.51921 19.0408L17.2594 8.30062V15.0738C17.2594 15.488 17.5952 15.8238 18.0094 15.8238C18.4236 15.8238 18.7594 15.488 18.7594 15.0738L18.7594 6.48952Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
