import NextImg from "../common/next-img";

type Props = {};

const Content = (props: Props) => {
  return (
    <>
      <div className="custom-container   mt-[160px]">
        {/* section 1 */}
        <div className="grid grid-cols-3 gap-[30px]">
          <div
            className="bg-[url('/assets/image/bg-card.png')] w-full h-[534px] bg-cover bg-center rounded-3xl p-10 flex flex-col justify-between"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex flex-col gap-4">
              <span className="text-[#FFF] text-[40px] font-bold leading-[50px]">
                Cộng đồng chất lượng của UPS
              </span>
              <span className="text-[#FFF] text-[18px] font-medium leading-[28px]">
                Cho chặng đường đầu tư luôn có UPS đồng hành bên bạn
              </span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex flex-col gap-3">
                <div className="border border-[#FFF] rounded-full w-[50px] h-[50px] flex items-center justify-center">
                  <div className="relative w-[18px] h-[14px]">
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
                <div className="border border-[#FFF] rounded-full w-[50px] h-[50px] flex items-center justify-center">
                  <div className="relative w-[10px] h-[21px]">
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
                <div className="border border-[#FFF] rounded-full w-[50px] h-[50px] flex items-center justify-center">
                  <div className="relative w-[18px] h-[18px]">
                    <NextImg
                      src="/assets/image/zalo.png"
                      alt="Capi"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[#FFF] text-sm font-bold leading-normal">
                    Nhóm Zalo
                  </span>
                  <span className="text-[#FFF] text-xs font-medium leading-normal">
                    12k người dùng
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-[url('/assets/image/bg-card2.png')] w-full h-[534px] bg-cover bg-center rounded-3xl relative p-10"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <span className="text-[#111013] text-[40px] font-bold leading-[50px] absolute bottom-20">
              Nền tảng ứng dụng di động mới
            </span>
            <span className="text-[#111013] text-[18px] font-medium leading-[28px] absolute bottom-10">
              Tải ngay nền tảng di động.
            </span>
          </div>
          <div
            className="bg-[#00D763] p-10 rounded-3xl relative"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="bg-[#014227] w-20 h-20 flex items-center justify-center rounded-[20px]">
              <div className="relative w-6 h-6">
                <NextImg
                  src="/assets/icons/share.svg"
                  alt="Capi"
                  objectFit="cover"
                />
              </div>
            </div>
            <h3 className="text-[#014227] text-[40px] font-bold leading-[50px] mt-8 mb-4">
              UP Securities <br /> Dẫn lối hành trình đầu tư của bạn
            </h3>
            <span className="text-[#126240] text-[18px] font-medium leading-[28px]">
              Chính thức ra mắt dẫn lỗi hành trình đầu tư của bạn
            </span>
            <button className="absolute bottom-10 flex items-center bg-[#FFF] py-3 px-6 rounded-2xl text-[#014227] font-bold text-[18px] leading-normal hover:shadow-[-2px_3px_0px_0px_#00813B]">
              Mở tài khoản ngay
              <div className="relative w-6 h-6 ml-2">
                <NextImg
                  src="/assets/icons/UPs.svg"
                  alt="Capi"
                  objectFit="cover"
                />
              </div>
            </button>
          </div>
        </div>
        {/*  section 2*/}
        <div className="bg-[#150900] rounded-[40px] mt-[160px] flex relative">
          <div
            className="relative w-[60%] h-[400px] "
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
            className="flex flex-col absolute top-10 right-12 w-[50%]"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <span className="text-[#FFF] text-[18px] font-medium leading-[40px]">
              #trungtamdaotao
            </span>
            <p className="text-[#FFBC00] text-[48px] font-bold leading-[54px] mt-2">
              Trở thành nhà đầu tư chuyên nghiệp với UPS Academy
            </p>
            <p className="text-[#FFF] text-[18px] leading-[29px] tracking-[0.276px] my-6 w-[70%]">
              So how does it work? Let’s check our Getting Started tutorial or
              choose from pre-made templates.
            </p>
            <div>
              <button className="flex items-center gap-3 bg-[#FF6D00] p-3 pl-4 rounded-2xl text-[#FFF] font-bold text-[18px] leading-normal">
                Khám phá ngay
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
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
