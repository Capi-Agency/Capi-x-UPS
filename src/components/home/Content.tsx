import NextImg from "../common/next-img";

type Props = {};

const Content = (props: Props) => {
  return (
    <>
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1600px] px-4 lg:px-20 mt-[160px]">
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
        <div className="grid grid-cols-2 gap-[30px] mt-[30px]">
          <div
            className="bg-[url('/assets/image/bg-card3.png')] w-full h-[700px] bg-cover bg-center rounded-3xl pt-10 pl-10 relative"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="text-[#111013] text-[18px] leading-[28px] font-medium bg-[#02E56A] rounded-[10px] px-2 py-[2px]">
              Giao diện mới
            </span>
            <h3 className="text-[#014227] text-[40px] font-bold leading-[50px] mt-[18px] mb-4 w-[80%]">
              Mang trải nghiệm tối ưu tới nhà đầu tư của UPS
            </h3>
            <p className="text-[#126240] text-[18px] font-medium leading-[28px] w-[80%]">
              Lời hứa liên tục cập nhật sản phẩm và phát triển không ngừng vì
              trải nghiệm sử dụng của khác hàng
            </p>
            <div className="absolute left-10 bottom-0 right-0">
              <div className="relative w-full h-[422px] rounded-br-2xl">
                <NextImg
                  src="/assets/image/b752f4850174e5719c9f1eba8e43d4de.png"
                  alt="Capi"
                  objectFit="cover"
                  className="rounded-br-2xl rounded-tl-2xl object-top"
                />
              </div>
            </div>
          </div>
          <div
            className="bg-[#F3F3FB] w-full h-[700px] bg-cover bg-center rounded-3xl relative pt-10 pl-10"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <span className="text-[#FFFFFF] text-[18px] leading-[28px] font-medium bg-[#FE3B1F] rounded-[10px] px-2 py-[2px]">
              Khuyến mãi
            </span>
            <h3 className="text-[#014227] text-[40px] font-bold leading-[50px] mt-[18px] mb-4 w-[70%]">
              Tạo tài khoản ngay rinh quà liền tay
            </h3>
            <p className="text-[#126240] text-[18px] font-medium leading-[28px] w-[80%]">
              Margin lên tới 8.6% dành riêng cho người dùng mở mới sau
              20/10/2024
            </p>
            <div className="absolute left-10 bottom-0 right-10">
              <div className="relative w-full h-[422px] rounded-br-2xl">
                <NextImg
                  src="/assets/image/Frame 47205.png"
                  alt="Capi"
                  objectFit="cover"
                  className="rounded-t-2xl w-full h-full "
                />
                <div className="absolute bottom-7 right-9">
                  <span className="text-[#FFF] text-[40px] font-medium leading-normal">
                    Margin
                  </span>
                  <span className="text-[#FFF] text-[170px] font-light leading-none">
                    8.6<span className="text-[40px] font-semibold">%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section 3 */}
        <div className="grid grid-cols-3 gap-[30px] mt-[30px]">
          <div
            className="bg-[#F3F3FB] w-full h-[534px] rounded-3xl p-10 relative"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex flex-col gap-4">
              <span className="text-[#111013] text-[140px] font-bold leading-[140px]">
                9
              </span>
              <span className="text-[#111013] text-[40px] font-bold leading-[50px]">
                Dịch vụ tư vấn tài chính doanh nghiệp
              </span>
              <span className="text-[#111013] text-[18px] font-medium leading-[28px]">
                Chính thức ra mắt dẫn lỗi hành trình đầu tư của bạn
              </span>
              <div className="bg-[#E7E7EA] rounded-full flex items-center justify-center w-[214px] h-[30px] absolute bottom-10">
                <div className="bg-[linear-gradient(90deg,#1A4EF8_0%,#1DF553_100%)] w-[194px] h-[10px] rounded-3xl"></div>
              </div>
            </div>
          </div>
          <div
            className="bg-[#F3F3FB] w-full h-[534px] rounded-3xl relative p-10"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="relative w-[384px] h-[290px] rounded-br-2xl">
              <NextImg
                src="/assets/image/bieuphi.png"
                alt="Capi"
                objectFit="cover"
                className=""
              />
            </div>
            <div className="flex flex-col gap-4 mt-[70px]">
              <span className="text-[#111013] text-[40px] font-bold leading-[50px]">
                Biểu phí
              </span>
              <span className="text-[#111013] text-[18px] font-medium leading-[28px]">
                Cập nhật tới 12/20/2024
              </span>
            </div>
          </div>
          <div
            className="bg-[url('/assets/image/Frame16.png')] w-full h-[534px] bg-cover bg-center rounded-3xl p-10"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="bg-[#FFF] w-20 h-20 flex items-center justify-center rounded-[20px]">
              <div className="relative w-6 h-6">
                <NextImg
                  src="/assets/icons/share2.svg"
                  alt="Capi"
                  objectFit="cover"
                />
              </div>
            </div>
            <h3 className="text-[#FFF] text-[40px] font-bold leading-[50px] mt-8 mb-4 w-[90%]">
              Báo cáo tài chính doanh nghiệp
            </h3>
            <span className="text-[#CBC6D6] text-[18px] font-medium leading-[28px]">
              Liên tục cập nhật thông tin mới nhất
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
