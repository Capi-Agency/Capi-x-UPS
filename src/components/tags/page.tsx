import React from "react";

type Props = {};

const TagsPage = (props: Props) => {
  return (
    <div
      className="flex items-center justify-center gap-10 mt-20 mb-[-60px]"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <p className="text-[#15171E] text-[16px] font-bold leading-normal">
        #tinthitruong
      </p>
      <p className="text-[#15171E] text-[16px] font-bold leading-normal">
        #tinxahoi
      </p>
      <p className="text-[#15171E] text-[16px] font-bold leading-normal">
        #congbomoi
      </p>
      <p className="text-[#15171E] text-[16px] font-bold leading-normal">
        #baocaomoingay
      </p>
      <p className="text-[#15171E] text-[16px] font-bold leading-normal">
        #thegioihanghoa
      </p>
      <p className="text-[#15171E] text-[16px] font-bold leading-normal">
        #phaisinh
      </p>
    </div>
  );
};

export default TagsPage;
