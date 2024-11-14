'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import NextImg from '../common/next-img';

type Props = {};

const CourseSchedule = (props: Props) => {
  const schedules = [
    { id: 1, name: 'Thứ 3, 15/12' },
    { id: 2, name: 'Thứ 7, 18/12' },
    { id: 3, name: 'Thứ 2, 22/12' },
    { id: 4, name: 'Thứ 5, 30/12' },
  ];
  const contentData = [
    {
      title: 'Tại sao nên nắm giữ ít nhất 1 cổ phiếu BĐS',
      author: 'Nguyễn Tuấn',
      role: 'Chuyên gia đầu tư',
      duration: '~12 phút',
      viewers: '140 người đặt lịch xem',
    },
    {
      title: '12 cách thức giúp bạn nhận định mã cổ phiếu tăng trưởng bền vững',
      author: 'Trung Kiên',
      role: 'Chuyên gia đầu tư',
      duration: '~20 phút',
      viewers: '241 người đặt lịch xem',
    },
    {
      title: 'Vào tiền thế nào, đầu tư ra sao với chuyên gia đặt lệnh',
      author: 'Thái Sơn',
      role: 'Chuyên gia đầu tư',
      duration: '~30 phút',
      viewers: '400 người đặt lịch xem',
    },
  ];
  const [currentSchedule, setCurrentSchedule] = useState<number>(
    schedules[0].id,
  );

  const handleScheduleClick = (value: string) => {
    setCurrentSchedule(Number(value));
  };

  const renderContent = () => {
    switch (currentSchedule) {
      case 1:
        return (
          <div>
            {contentData.map((item, index) => {
              const delay = ((index % 3) + 1) * 200;
              return (
                <div
                  key={index}
                  className={`w-full grid-cols-12 gap-10 border-[#60606B] border-opacity-65 py-5 md:grid md:gap-6 md:py-6 lg:gap-10 ${
                    index === contentData.length - 1
                      ? 'border-none'
                      : 'border-b'
                  } `}
                  data-aos="fade-up"
                  data-aos-delay={delay}
                >
                  <div className="col-span-4 mb-6 flex items-center justify-between gap-4 md:mb-0 md:items-start">
                    <p className="text-sm font-bold leading-[27px] tracking-[0.328px] text-[#0C1C28] md:text-base">
                      {item.title}
                    </p>
                    <div className="group block md:hidden">
                      <a
                        href=""
                        className="md::text-base flex items-center gap-2 text-nowrap text-sm font-bold leading-[27px] tracking-[0.328px] text-[#FF6D00]"
                      >
                        Chi tiết
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <mask
                            id="mask0_3803_10961"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                          >
                            <rect width="20" height="20" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_3803_10961)">
                            <path
                              d="M13.125 10.75H4V9.25H13.125L8.9375 5.0625L10 4L16 10L10 16L8.9375 14.9375L13.125 10.75Z"
                              fill="#FF6D00"
                            />
                          </g>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="col-span-6 flex justify-between gap-10 md:justify-evenly">
                    <div className="col-span-3 flex flex-col">
                      <p className="text-sm font-bold leading-[27px] tracking-[0.328px] text-[#0C1C28] md:text-base">
                        {item.author}
                      </p>
                      <p className="text-sm leading-[27px] tracking-[0.328px] text-[#0C1C28] md:text-base">
                        {item.role}
                      </p>
                    </div>
                    <div className="col-span-3 flex flex-col">
                      <p className="text-sm leading-[27px] tracking-[0.328px] text-[#0C1C28] md:text-base">
                        {item.duration}
                      </p>
                      <p className="text-sm leading-[27px] tracking-[0.328px] text-[#0C1C28] md:text-base">
                        {item.viewers}
                      </p>
                    </div>
                  </div>
                  <div className="group col-span-2 hidden justify-self-end md:block">
                    <a
                      href=""
                      className="flex items-center gap-2 text-nowrap font-bold leading-[27px] tracking-[0.328px] text-[#0C1C28] group-hover:text-[#FF6D00]"
                    >
                      Chi tiết
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <mask
                          id="mask0_3803_10961"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                        >
                          <rect width="20" height="20" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_3803_10961)">
                          <path
                            d="M13.125 10.75H4V9.25H13.125L8.9375 5.0625L10 4L16 10L10 16L8.9375 14.9375L13.125 10.75Z"
                            fill="#0C1C28"
                            className="group-hover:fill-[#FF6D00]"
                          />
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        );
      case 2:
        return (
          <div>
            {contentData.map((item, index) => (
              <div
                key={index}
                className={`w-full grid-cols-12 gap-10 border-[#60606B] border-opacity-65 py-5 lg:grid lg:py-6 ${
                  index === contentData.length - 1 ? 'border-none' : 'border-b'
                } `}
              >
                <div className="col-span-4 mb-6 flex items-center justify-between gap-4 lg:mb-0 lg:items-start">
                  <p className="text-sm font-bold leading-[27px] tracking-[0.328px] text-[#0C1C28] lg:text-base">
                    {item.title}
                  </p>
                  <div className="group block lg:hidden">
                    <a
                      href=""
                      className="flex items-center gap-2 text-nowrap text-sm font-bold leading-[27px] tracking-[0.328px] text-[#FF6D00] lg:text-base"
                    >
                      Chi tiết
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <mask
                          id="mask0_3803_10961"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                        >
                          <rect width="20" height="20" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_3803_10961)">
                          <path
                            d="M13.125 10.75H4V9.25H13.125L8.9375 5.0625L10 4L16 10L10 16L8.9375 14.9375L13.125 10.75Z"
                            fill="#FF6D00"
                          />
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="col-span-6 flex justify-between gap-10 lg:justify-evenly">
                  <div className="col-span-3 flex flex-col">
                    <p className="text-sm font-bold leading-[27px] tracking-[0.328px] text-[#0C1C28] lg:text-base">
                      {item.author}
                    </p>
                    <p className="text-sm leading-[27px] tracking-[0.328px] text-[#0C1C28] lg:text-base">
                      {item.role}
                    </p>
                  </div>
                  <div className="col-span-3 flex flex-col">
                    <p className="text-sm leading-[27px] tracking-[0.328px] text-[#0C1C28] lg:text-base">
                      {item.duration}
                    </p>
                    <p className="text-sm leading-[27px] tracking-[0.328px] text-[#0C1C28] lg:text-base">
                      {item.viewers}
                    </p>
                  </div>
                </div>
                <div className="group col-span-2 hidden justify-self-end lg:block">
                  <a
                    href=""
                    className="flex items-center gap-2 text-nowrap font-bold leading-[27px] tracking-[0.328px] text-[#0C1C28] group-hover:text-[#FF6D00]"
                  >
                    Chi tiết
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <mask
                        id="mask0_3803_10961"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                      >
                        <rect width="20" height="20" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_3803_10961)">
                        <path
                          d="M13.125 10.75H4V9.25H13.125L8.9375 5.0625L10 4L16 10L10 16L8.9375 14.9375L13.125 10.75Z"
                          fill="#0C1C28"
                          className="group-hover:fill-[#FF6D00]"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        );
      case 3:
        return (
          <div>
            {contentData.map((item, index) => (
              <div
                key={index}
                className={`w-full grid-cols-12 gap-10 border-[#60606B] border-opacity-65 py-5 lg:grid lg:py-6 ${
                  index === contentData.length - 1 ? 'border-none' : 'border-b'
                } `}
              >
                <div className="col-span-4 mb-6 flex items-center justify-between gap-4 lg:mb-0 lg:items-start">
                  <p className="text-sm font-bold leading-[27px] tracking-[0.328px] text-[#0C1C28] lg:text-base">
                    {item.title}
                  </p>
                  <div className="group block lg:hidden">
                    <a
                      href=""
                      className="flex items-center gap-2 text-nowrap text-sm font-bold leading-[27px] tracking-[0.328px] text-[#FF6D00] lg:text-base"
                    >
                      Chi tiết
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <mask
                          id="mask0_3803_10961"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                        >
                          <rect width="20" height="20" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_3803_10961)">
                          <path
                            d="M13.125 10.75H4V9.25H13.125L8.9375 5.0625L10 4L16 10L10 16L8.9375 14.9375L13.125 10.75Z"
                            fill="#FF6D00"
                          />
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="col-span-6 flex justify-between gap-10 lg:justify-evenly">
                  <div className="col-span-3 flex flex-col">
                    <p className="text-sm font-bold leading-[27px] tracking-[0.328px] text-[#0C1C28] lg:text-base">
                      {item.author}
                    </p>
                    <p className="text-sm leading-[27px] tracking-[0.328px] text-[#0C1C28] lg:text-base">
                      {item.role}
                    </p>
                  </div>
                  <div className="col-span-3 flex flex-col">
                    <p className="text-sm leading-[27px] tracking-[0.328px] text-[#0C1C28] lg:text-base">
                      {item.duration}
                    </p>
                    <p className="text-sm leading-[27px] tracking-[0.328px] text-[#0C1C28] lg:text-base">
                      {item.viewers}
                    </p>
                  </div>
                </div>
                <div className="group col-span-2 hidden justify-self-end lg:block">
                  <a
                    href=""
                    className="flex items-center gap-2 text-nowrap font-bold leading-[27px] tracking-[0.328px] text-[#0C1C28] group-hover:text-[#FF6D00]"
                  >
                    Chi tiết
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <mask
                        id="mask0_3803_10961"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                      >
                        <rect width="20" height="20" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_3803_10961)">
                        <path
                          d="M13.125 10.75H4V9.25H13.125L8.9375 5.0625L10 4L16 10L10 16L8.9375 14.9375L13.125 10.75Z"
                          fill="#0C1C28"
                          className="group-hover:fill-[#FF6D00]"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        );
      case 4:
        return (
          <div>
            {contentData.map((item, index) => (
              <div
                key={index}
                className={`w-full grid-cols-12 gap-10 border-[#60606B] border-opacity-65 py-5 lg:grid lg:py-6 ${
                  index === contentData.length - 1 ? 'border-none' : 'border-b'
                } `}
              >
                <div className="col-span-4 mb-6 flex items-center justify-between gap-4 lg:mb-0 lg:items-start">
                  <p className="text-sm font-bold leading-[27px] tracking-[0.328px] text-[#0C1C28] lg:text-base">
                    {item.title}
                  </p>
                  <div className="group block lg:hidden">
                    <a
                      href=""
                      className="flex items-center gap-2 text-nowrap text-sm font-bold leading-[27px] tracking-[0.328px] text-[#FF6D00] lg:text-base"
                    >
                      Chi tiết
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <mask
                          id="mask0_3803_10961"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                        >
                          <rect width="20" height="20" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_3803_10961)">
                          <path
                            d="M13.125 10.75H4V9.25H13.125L8.9375 5.0625L10 4L16 10L10 16L8.9375 14.9375L13.125 10.75Z"
                            fill="#FF6D00"
                          />
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="col-span-6 flex justify-between gap-10 lg:justify-evenly">
                  <div className="col-span-3 flex flex-col">
                    <p className="text-sm font-bold leading-[27px] tracking-[0.328px] text-[#0C1C28] lg:text-base">
                      {item.author}
                    </p>
                    <p className="text-sm leading-[27px] tracking-[0.328px] text-[#0C1C28] lg:text-base">
                      {item.role}
                    </p>
                  </div>
                  <div className="col-span-3 flex flex-col">
                    <p className="text-sm leading-[27px] tracking-[0.328px] text-[#0C1C28] lg:text-base">
                      {item.duration}
                    </p>
                    <p className="text-sm leading-[27px] tracking-[0.328px] text-[#0C1C28] lg:text-base">
                      {item.viewers}
                    </p>
                  </div>
                </div>
                <div className="group col-span-2 hidden justify-self-end lg:block">
                  <a
                    href=""
                    className="flex items-center gap-2 text-nowrap font-bold leading-[27px] tracking-[0.328px] text-[#0C1C28] group-hover:text-[#FF6D00]"
                  >
                    Chi tiết
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <mask
                        id="mask0_3803_10961"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                      >
                        <rect width="20" height="20" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_3803_10961)">
                        <path
                          d="M13.125 10.75H4V9.25H13.125L8.9375 5.0625L10 4L16 10L10 16L8.9375 14.9375L13.125 10.75Z"
                          fill="#0C1C28"
                          className="group-hover:fill-[#FF6D00]"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="custom-container mt-16 lg2:mt-20 2xl:mt-[100px] 3xl:mt-[120px] 3xl:!max-w-[1280px]">
      <Tabs
        defaultValue={currentSchedule.toString()}
        onValueChange={handleScheduleClick}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div>
          <span className="text-[14px] font-medium leading-[22px] text-[#FF6D00] lg:text-[16px] lg:leading-[40px] lg2:text-[18px]">
            Quý 4, 2024
          </span>
          <h2 className="mb-3 mt-2 text-[20px] font-bold text-[#141414] lg:text-[24px] lg2:mb-5 lg2:text-[40px] lg2:leading-[46px] 2xl:text-[44px] 2xl:leading-[52px] 3xl:text-[48px] 3xl:leading-[54px]">
            Lịch trình ra mắt
          </h2>
        </div>
        <TabsList className="scrollbar-hidden flex max-w-full gap-6 overflow-x-auto whitespace-nowrap lg:gap-10">
          {schedules.map((schedule) => (
            <TabsTrigger
              key={schedule.id}
              value={schedule.id.toString()}
              className={`py-[9px] text-[14px] font-medium leading-[22px] text-[#111013] lg:text-[16px] lg:leading-[28px] lg2:text-[18px] ${
                currentSchedule === schedule.id
                  ? 'border-b-2 border-[#0C1C28]'
                  : 'border-none'
              }`}
            >
              {schedule.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {schedules.map((schedule) => (
          <TabsContent
            key={schedule.id}
            value={schedule.id.toString()}
            className="mt-3 lg:mt-6 lg2:mt-[40px]"
          >
            {renderContent()}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default CourseSchedule;
