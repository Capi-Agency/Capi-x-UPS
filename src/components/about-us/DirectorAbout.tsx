import React from 'react'
import NextImg from '../common/next-img'

type Props = {}

const DirectorAbout = (props: Props) => {
  return (
    <>
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1600px] px-4 lg:px-20 mt-[160px]">
          <div className="grid grid-cols-2 gap-[30px]">
            <div className="relative w-full h-[700px]" data-aos="fade-up" data-aos-delay="200">
              <NextImg
                src="/assets/image/director-1.jpg"
                alt="Capi"
                objectFit="cover"
                className="rounded-[24px]"
              />
            </div>
            <div className="bg-[#F3F3FB] rounded-[24px] p-10" data-aos="fade-up" data-aos-delay="600">
              <span className="text-[#111013] text-[40px] font-bold leading-[54px]">
                Ông Nguyễn Quang Đạt
              </span>
              <p className="text-[#161519] text-[16px] font-bold leading-[26px] uppercase tracking-[0.32px] my-4">
                Tổng giám đốc
              </p>
              <p className="text-[#111013] text-[18px] font-medium leading-[26px]">
                A global brand entrusted us with a unique challenge: crafting an
                internal tool to share its brand story with every employee, from
                sales to product…
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[30px] mt-[30px]">
            <div className="bg-[#F3F3FB] rounded-[24px] p-10"  data-aos="fade-up" data-aos-delay="200">
              <span className="text-[#111013] text-[40px] font-bold leading-[54px]">
                Ông Nguyễn Quang Đạt
              </span>
              <p className="text-[#161519] text-[16px] font-bold leading-[26px] uppercase tracking-[0.32px] my-4">
                Tổng giám đốc
              </p>
              <p className="text-[#111013] text-[18px] font-medium leading-[26px]">
                A global brand entrusted us with a unique challenge: crafting an
                internal tool to share its brand story with every employee, from
                sales to product…
              </p>
            </div>
            <div className="relative w-full h-[700px]" data-aos="fade-up" data-aos-delay="600">
              <NextImg
                src="/assets/image/director-2.jpg"
                alt="Capi"
                objectFit="cover"
                className="rounded-[24px]"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[30px] mt-[30px]">
            <div className="relative w-full h-[700px]" data-aos="fade-up" data-aos-delay="200">
              <NextImg
                src="/assets/image/director-3.jpg"
                alt="Capi"
                objectFit="cover"
                className="rounded-[24px]"
              />
            </div>
            <div className="bg-[#F3F3FB] rounded-[24px] p-10" data-aos="fade-up" data-aos-delay="600">
              <span className="text-[#111013] text-[40px] font-bold leading-[54px]">
                Ông Nguyễn Quang Đạt
              </span>
              <p className="text-[#161519] text-[16px] font-bold leading-[26px] uppercase tracking-[0.32px] my-4">
                Tổng giám đốc
              </p>
              <p className="text-[#111013] text-[18px] font-medium leading-[26px]">
                A global brand entrusted us with a unique challenge: crafting an
                internal tool to share its brand story with every employee, from
                sales to product…
              </p>
            </div>
          </div>
        </div>
    </>
  )
}

export default DirectorAbout