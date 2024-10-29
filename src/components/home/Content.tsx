import NextImg from "../common/next-img";

type Props = {};

const Content = (props: Props) => {
  return (
    <>
      <div className="custom-container mt-10 lg:mt-[60px] xl:mt-20 2xl:mt-[100px] 3xl:mt-[160px]">
        {/* section 1 */}
        <div className="grid md:grid-cols-3 md:grid-rows-none grid-rows-3 gap-3 lg:gap-5 lg2:gap-[30px]">
          <div
            className="bg-[url('/assets/image/bg-card.png')] w-full  bg-cover bg-center rounded-[12px] lg:rounded-3xl p-5 lg2:p-8 xl:p-10 flex flex-col justify-between"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex flex-col gap-1 md:gap-2 lg:gap-3 2xl:gap-4">
              <span className="text-[#FFF] text-[20px] lg:text-[24px] lg2:text-[32px] 2xl:text-[38px] 3xl:text-[40px] font-bold leading-normal lg:leading-[40px] 2xl:leading-[48px] 3xl:leading-[50px]">
                Cộng đồng chất lượng của UPS
              </span>
              <span className="text-[#FFF] text-[14px] lg:text-[18px] font-medium leading-[22px] lg:leading-[28px]">
                Cho chặng đường đầu tư luôn có UPS đồng hành bên bạn
              </span>
            </div>
            <div className="flex gap-5 md:gap-3 lg:gap-6">
              <div className="flex flex-col gap-3">
                <div className="border border-[#FFF] rounded-full w-10 h-10 lg:w-[50px] lg:h-[50px] flex items-center justify-center">
                  <div className="relative w-[13px] h-[11px] lg:w-[18px] lg:h-[14px]">
                    <NextImg
                      src="/assets/icons/tele.svg"
                      alt="Capi"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[#FFF] text-sm font-bold leading-normal">
                    Telegram
                  </span>
                  <span className="text-[#FFF] text-xs font-medium leading-normal">
                    3k người dùng
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="border border-[#FFF] rounded-full w-10 h-10 lg:w-[50px] lg:h-[50px] flex items-center justify-center">
                  <div className="relative w-[8px] h-[17px] lg:w-[10px] lg:h-[21px]">
                    <NextImg
                      src="/assets/icons/fb.svg"
                      alt="Capi"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[#FFF] text-sm font-bold leading-normal">
                    Facebook
                  </span>
                  <span className="text-[#FFF] text-xs font-medium leading-normal">
                    8k người dùng
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="border border-[#FFF] rounded-full w-10 h-10 lg:w-[50px] lg:h-[50px] flex items-center justify-center">
                  <div className="relative w-[14.4px] h-[14.4px] lg:w-[18px] lg:h-[18px]">
                    <NextImg
                      src="/assets/image/zalo.png"
                      alt="Capi"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[#FFF] text-sm font-bold leading-normal flex item-center gap-1">
                    <span className="block md:hidden lg:block">Nhóm </span> Zalo
                  </p>
                  <span className="text-[#FFF] text-xs font-medium leading-normal">
                    12k người dùng
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex items-end bg-[url('/assets/image/bg-card2.png')] w-full  bg-cover bg-center rounded-[12px] lg:rounded-3xl p-5 lg2:p-8 xl:p-10"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[#111013] text-[20px] lg:text-[24px] lg2:text-[32px] 2xl:text-[38px] 3xl:text-[40px] font-bold leading-normal lg:leading-[40px] 2xl:leading-[48px] 3xl:leading-[50px] ">
                Nền tảng ứng dụng di động mới
              </span>
              <span className="text-[#111013] text-sm lg:text-[18px] font-medium lg:leading-[28px]">
                Tải ngay nền tảng di động.
              </span>
            </div>
          </div>
          <div
            className="flex flex-col justify-between bg-[#00D763] p-5 lg2:p-8 xl:p-10 rounded-[12px] lg:rounded-3xl relative "
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div>
              <div className="bg-[#014227] w-10 h-10 lg:w-[60px] lg:h-[60px] lg2:w-20 lg2:h-20 flex items-center justify-center rounded-[10px] lg:rounded-[20px]">
                <div className="relative w-3 h-3 lg:w-[18px] lg:h-[18px] lg2:w-6 lg2:h-6">
                  <NextImg
                    src="/assets/icons/share.svg"
                    alt="Capi"
                    objectFit="cover"
                  />
                </div>
              </div>
              <h3 className="text-[#014227] text-[20px] lg:text-[24px] lg2:text-[32px] 2xl:text-[38px] 3xl:text-[40px] font-bold leading-normal lg:leading-[40px] 2xl:leading-[48px] 3xl:leading-[50px] mt-3 mb-2 lg:mt-6 lg:mb-3 2xl:mt-8 2xl:mb-4">
                UP Securities <br /> Dẫn lối hành trình đầu tư của bạn
              </h3>
              <span className="text-[#126240] text-[14px] lg:text-base lg2:text-[18px] font-medium leading-[22px] lg:leading-[28px]">
                Chính thức ra mắt <br /> dẫn lỗi hành trình đầu tư của bạn
              </span>
            </div>
            <div>
              <button className="flex items-center !bg-[#FFF] btn active !text-[#014227] mt-3 md:mt-6 lg:mt-12 2xl:mt-[42px] 3xl:mt-[70px]">
                Mở tài khoản ngay
                <div className="relative w-4 h-4 lg:w-6 lg:h-6">
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
        <div className="bg-[#150900] rounded-[20px] lg:rounded-[40px] mt-10 lg:mt-[60px] xl:mt-20 2xl:mt-[100px] 3xl:mt-[160px] relative md:grid md:grid-cols-[auto,52%] md:items-center flex flex-col md:px-5 lg:px-10 lg2:px-[50px] md:py-0 p-5 md:gap-10 lg:gap-14 lg2:gap-20 gap-5">
          <div
            className="relative w-[240px] md:w-[273px] lg:w-[340px] lg2:w-[430px] 2xl:w-[482px] 3xl:w-[564px] h-[234px] md:h-[276px] lg:h-[320px] lg2:h-[400px] flex justify-start place-content-start"
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
            <span className="text-[#FFF] text-[14px] lg:text-base lg2:text-[18px] font-medium lg:leading-[40px]">
              #trungtamdaotao
            </span>
            <p className="text-[#FFBC00] text-[20px] lg:text-[24px] lg2:text-[40px] 2xl:text-[44px] 3xl:text-[48px] font-bold  leading-normal lg2:leading-[46px] 2xl:leading-[52px] 3xl:leading-[54px] mt-1 lg:mt-2">
              Trở thành nhà đầu tư chuyên nghiệp với UPS Academy
            </p>
            <p className="text-[#FFF] text-[14px] lg:text-base lg2:text-[18px] leading-[22px] lg:leading-[29px] tracking-[0.276px] mt-2 mb-5 lg:my-6">
              So how does it work? Let’s check our{" "}
              <span className="font-bold">Getting Started</span> <br className="lg:block hidden"/> tutorial or
              choose from pre-made templates.
            </p>
            <div>
              <button className="btn !text-[#FFF] !bg-[#FF6D00]">
                Khám phá ngay
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 lg:w-6 lg:h-6"
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
