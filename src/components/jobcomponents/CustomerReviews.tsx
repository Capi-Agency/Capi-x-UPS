import React from 'react';
import NextImg from '../common/next-img';

type Props = {};

const CustomerReviews = (props: Props) => {
  const lists = [
    {
      avatar: '/assets/image/avatar.jpg',
      name: 'Colin Lucido',
      content:
        'I tell you what, there has never been an issue that Cory from the colabrio support team hasnt been able to solve for me.',
      position: 'UI Designer · Interactive Media',
      tag: 'Design Quality',
    },
    {
      avatar: '/assets/image/avatar.jpg',
      name: 'Colin Lucido',
      content:
        'I tell you what, there has never been an issue that Cory from the colabrio support team hasnt been able to solve for me.',
      position: 'UI Designer · Interactive Media',
      tag: 'Design Quality',
    },
    {
      avatar: '/assets/image/avatar.jpg',
      name: 'Colin Lucido',
      content:
        'I tell you what, there has never been an issue that Cory from the colabrio support team hasnt been able to solve for me.',
      position: 'UI Designer · Interactive Media',
      tag: 'Design Quality',
    },
  ];
  return (
    <div className="bg-[#F2F2F8] py-[100px]">
      <div className="custom-container">
        <div className="pb-8 text-center">
          <h5 className="pb-2 text-center text-[14px] font-medium uppercase leading-[150%] text-[#604D3C]">
            Nhân viên đánh giá
          </h5>
          <h2 className="text-center text-[48px] font-bold leading-[54px] text-[#111013]">
            Từ UPS với <span className="text-[#E50261]">Sự yêu thương</span>
          </h2>
        </div>
        <div className="flex items-center justify-between gap-10">
          {lists &&
            lists.map((item: any, index: any) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-4"
                >
                  <div className="relative h-[56px] w-[56px] rounded-full">
                    <NextImg
                      src={item.avatar}
                      alt="UPS"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <div className="rounded-[5px] bg-[rgba(144,145,156,0.15)] px-[8px] py-[4px]">
                    {item.tag}
                  </div>
                  <p className="text-center text-[18px] font-normal leading-[28px] text-[#283742]">
                    {item.content}
                  </p>
                  <p className="text-[18px] font-semibold leading-[24px] text-[#283742]">
                    {item.name}
                  </p>
                  <p className="font-hanken-grotesk text-base font-semibold leading-6 text-[#60606B]">
                    {item.position}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
