import React from "react";

type Props = {};

const TagsPage = (props: Props) => {
  const tags = [
    "#tinthitruong",
    "#tinxahoi",
    "#congbomoi",
    "#baocaomoingay",
    "#thegioihanghoa",
    "#phaisinh",
  ];
  return (
    <div
      className="custom-container flex items-center gap-6 flex-wrap justify-center lg:gap-10 mt-16 lg:mt-[100px] lg:mb-[-60px]"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {tags.map((tag, index) => (
        <p
          key={index}
          className="text-[#15171E] text-sm lg:text-[16px] font-bold leading-normal"
        >
          {tag}
        </p>
      ))}
    </div>
  );
};

export default TagsPage;
