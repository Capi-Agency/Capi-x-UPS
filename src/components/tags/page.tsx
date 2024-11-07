'use client';
import Link from 'next/link';
import React from 'react';

type Props = {
  data: any;
};

const TagsPage = ({ data }: Props) => {
  return (
    <div
      className="custom-container mt-10 flex flex-wrap items-center justify-center gap-6 lg:mt-[60px] lg:gap-10 xl:mt-20 2xl:mb-[-60px] 2xl:mt-[100px] 3xl:mt-[160px]"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {data.map(({ tag }: any, index: number) => (
        <Link href={tag.url} key={index}>
          <p
            key={index}
            className="text-sm font-bold leading-normal text-[#15171E] lg:text-[16px]"
          >
            {tag.text}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default TagsPage;
