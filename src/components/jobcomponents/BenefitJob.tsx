import React from 'react';
import NextImg from '../common/next-img';

type Props = {};

const BenefitJob = (props: Props) => {
  const lists = [
    {
      cover: '/assets/image/cardjob-1.png',
      title: 'Sứ mệnh tầm nhìn',
      description:
        'UPS trao cơ hội để bạn được làm việc trong một cộng đồng năng động, sáng tạo, nơi mọi ý tưởng đều được trân trọng, mang lại nhiều giá trị phát triển bền vững, tạo sự gắn kết',
    },
    {
      cover: '/assets/image/card-job-2.png',
      title: 'Sứ mệnh tầm nhìn',
      description:
        'UPS trao cơ hội để bạn được làm việc trong một cộng đồng năng động, sáng tạo, nơi mọi ý tưởng đều được trân trọng, mang lại nhiều giá trị phát triển bền vững, tạo sự gắn kết',
    },
    {
      cover: '/assets/image/card-job-3.png',
      title: 'Sứ mệnh tầm nhìn',
      description:
        'UPS trao cơ hội để bạn được làm việc trong một cộng đồng năng động, sáng tạo, nơi mọi ý tưởng đều được trân trọng, mang lại nhiều giá trị phát triển bền vững, tạo sự gắn kết',
    },
    {
      cover: '/assets/image/card-job-4.png',
      title: 'Sứ mệnh tầm nhìn',
      description:
        'UPS trao cơ hội để bạn được làm việc trong một cộng đồng năng động, sáng tạo, nơi mọi ý tưởng đều được trân trọng, mang lại nhiều giá trị phát triển bền vững, tạo sự gắn kết',
    },
    {
      cover: '/assets/image/card-job-5.png',
      title: 'Sứ mệnh tầm nhìn',
      description:
        'UPS trao cơ hội để bạn được làm việc trong một cộng đồng năng động, sáng tạo, nơi mọi ý tưởng đều được trân trọng, mang lại nhiều giá trị phát triển bền vững, tạo sự gắn kết',
    },
  ];
  return (
    <div className="custom-container">
      <div className="flex items-center justify-between">
        <h1 className="font-hanken text-[48px] font-bold leading-[54px] text-black">
          Điều tuyệt vời khi bạn
          <br /> gia nhập <span className="text-[#E50261]">UPS</span>
        </h1>
        <div className="flex w-[30%] flex-col gap-[20px]">
          <div className="flex items-center justify-start gap-[4px]">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M15.8327 10.8346L4.16602 10.8346V9.16797L15.8327 9.16797V10.8346Z"
                  fill="#161519"
                />
              </svg>
            </i>
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clip="evenodd"
                  d="M20.625 2.75C20.625 2.38533 20.4801 2.03559 20.2223 1.77773C19.9644 1.51987 19.6147 1.375 19.25 1.375H2.75C2.38533 1.375 2.03559 1.51987 1.77773 1.77773C1.51987 2.03559 1.375 2.38533 1.375 2.75V19.25C1.375 19.6147 1.51987 19.9644 1.77773 20.2223C2.03559 20.4801 2.38533 20.625 2.75 20.625H19.25C19.6147 20.625 19.9644 20.4801 20.2223 20.2223C20.4801 19.9644 20.625 19.6147 20.625 19.25V2.75ZM0 2.75C0 2.02065 0.289731 1.32118 0.805456 0.805456C1.32118 0.289731 2.02065 0 2.75 0L19.25 0C19.9793 0 20.6788 0.289731 21.1945 0.805456C21.7103 1.32118 22 2.02065 22 2.75V19.25C22 19.9793 21.7103 20.6788 21.1945 21.1945C20.6788 21.7103 19.9793 22 19.25 22H2.75C2.02065 22 1.32118 21.7103 0.805456 21.1945C0.289731 20.6788 0 19.9793 0 19.25V2.75ZM8.04925 14.8541C7.92034 14.9832 7.74542 15.0558 7.56299 15.0559C7.38055 15.0561 7.20553 14.9837 7.07644 14.8548C6.94734 14.7259 6.87475 14.551 6.87462 14.3685C6.87449 14.1861 6.94684 14.0111 7.07575 13.882L12.7091 8.25H8.90312C8.72079 8.25 8.54592 8.17757 8.41699 8.04864C8.28806 7.9197 8.21562 7.74484 8.21562 7.5625C8.21562 7.38016 8.28806 7.2053 8.41699 7.07636C8.54592 6.94743 8.72079 6.875 8.90312 6.875H14.3687C14.5511 6.875 14.726 6.94743 14.8549 7.07636C14.9838 7.2053 15.0562 7.38016 15.0562 7.5625V13.0281C15.0562 13.2105 14.9838 13.3853 14.8549 13.5143C14.726 13.6432 14.5511 13.7156 14.3687 13.7156C14.1864 13.7156 14.0115 13.6432 13.8826 13.5143C13.7537 13.3853 13.6812 13.2105 13.6812 13.0281V9.22213L8.04925 14.8541Z"
                  fill="#161519"
                />
              </svg>
            </i>
            <p className="font-hanken text-[16px] font-semibold leading-[1.4] text-[#111013]">
              Website & Mobile App Design
            </p>
          </div>
          <p className="font-hanken text-[18px] font-normal leading-[28px] text-[#161519]">
            We’ve created a full-stack structure for our working workflow
            processes,{' '}
            <span className="font-semibold">
              were from the funny the century initial all
            </span>{' '}
            the made, have spare to negatives.
          </p>
        </div>
      </div>
      {/* lists */}
      <div className="mt-[60px] pb-[40px] grid grid-cols-3 gap-[40px]">
        {lists.map((item: any, index: any) => {
          return (
            <div
              key={index}
              className={`flex h-[430px] flex-col gap-[16px] justify-end p-[16px] bg-center bg-no-repeat bg-cover rounded-2xl ${index === 0 ? 'col-span-2' : 'col-span-1'}`}
              style={{ backgroundImage: `url('${item.cover}')` }}
            >
              <div className='rounded-[12px] bg-[rgba(0,0,0,0.5)] px-[24px] py-[20px]'>
                <h3 className="text-white font-hanken-grotesk text-2xl font-semibold leading-[40px]">
                  {item.title}
                </h3>
                <p className={`overflow-hidden text-white/80  font-hanken-grotesk text-base font-normal leading-6 trun-cate line-clamp-2 pt-[8px]`}>
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BenefitJob;
