import Link from 'next/link';
import React from 'react';

type Props = {
  dataCateAndTags: any;
};

const TagNews = ({ dataCateAndTags }: Props) => {
  return (
    <div>
      {dataCateAndTags?.a_tags.length > 0 && (
        <div
          className="custom-container mt-10 flex flex-wrap items-center justify-center gap-6 lg:mt-[60px] lg:gap-10 xl:mt-20 2xl:mb-[-60px] 2xl:mt-[100px] 3xl:mt-[140px]"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="700"
        >
          {dataCateAndTags?.a_tags?.map((tag: any, index: number) => {
            return (
              <Link href={`#`} key={index}>
                <p
                  key={index}
                  className="text-sm font-bold leading-normal text-[#15171E] lg:text-[16px]"
                >
                  {tag.title}
                </p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TagNews;
