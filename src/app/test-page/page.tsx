import NextImg from "@/components/common/next-img";
import React from "react";

type Props = {};

const TestPage = (props: Props) => {
  return (
    <div className="container-product my-[300px]">
      <div className="relative w-full">
        <svg viewBox="0 0 1440 888" width="100%" height="100%">
          <path d="M40,0 L1400,0 Q1440,0 1440,40, L1440,758 Q1440,790 1440,790 Q1320," />
        </svg>
        <div className="absolute bottom-0 left-0 text-[18px] md:text-[32px] lg:text-[46px] xl:text-[56px] 2xl:text-[64px] 3xl:text-[80px] font-bold leading-[1.4] tracking-tighter">
          <span className="text-[#F51666]">Tư vấn</span> <br />
          Tài chính <br /> Doanh nghiệp
        </div>
      </div>
    </div>
  );
};

export default TestPage;
