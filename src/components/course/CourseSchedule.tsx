"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import NextImg from "../common/next-img";

type Props = {};

const CourseSchedule = (props: Props) => {
  const schedules = [
    { id: 1, name: "Thứ 3, 15/12" },
    { id: 2, name: "Thứ 7, 18/12" },
    { id: 3, name: "Thứ 2, 22/12" },
    { id: 4, name: "Thứ 5, 30/12" },
  ];
  const contentData = [
    {
      title: "Tại sao nên nắm giữ ít nhất 1 cổ phiếu BĐS",
      author: "Nguyễn Tuấn",
      role: "Chuyên gia đầu tư",
      duration: "~12 phút",
      viewers: "140 người đặt lịch xem",
    },
    {
      title: "12 cách thức giúp bạn nhận định mã cổ phiếu tăng trưởng bền vững",
      author: "Trung Kiên",
      role: "Chuyên gia đầu tư",
      duration: "~20 phút",
      viewers: "241 người đặt lịch xem",
    },
    {
      title: "Vào tiền thế nào, đầu tư ra sao với chuyên gia đặt lệnh",
      author: "Thái Sơn",
      role: "Chuyên gia đầu tư",
      duration: "~30 phút",
      viewers: "400 người đặt lịch xem",
    },
  ];
  const [currentSchedule, setCurrentSchedule] = useState<number>(
    schedules[0].id
  );

  const handleScheduleClick = (value: string) => {
    setCurrentSchedule(Number(value));
  };

  const renderContent = () => {
    switch (currentSchedule) {
      case 1:
        return (
          <div>
            {contentData.map((item, index) => (
              <div
                key={index}
                className={`md:grid grid-cols-12 border-[#60606B] border-opacity-65 py-5 md:py-6 gap-10 md:gap-6 lg:gap-10 w-full ${
                  index === contentData.length - 1 ? "border-none" : "border-b"
                } `}
              >
                <div className="flex md:items-start items-center col-span-4 justify-between gap-4 md:mb-0 mb-6">
                  <p className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px] text-sm md:text-base">
                    {item.title}
                  </p>
                  <div className="group md:hidden block">
                    <a
                      href=""
                      className="text-[#FF6D00] font-bold leading-[27px] tracking-[0.328px] flex items-center gap-2 text-sm md::text-base text-nowrap"
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
                <div className="flex col-span-6 gap-10 md:justify-evenly justify-between">
                  <div className="flex flex-col col-span-3">
                    <p className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px] text-sm md:text-base">
                      {item.author}
                    </p>
                    <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px] text-sm md:text-base">
                      {item.role}
                    </p>
                  </div>
                  <div className="flex flex-col col-span-3">
                    <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px] text-sm md:text-base">
                      {item.duration}
                    </p>
                    <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px] text-sm md:text-base">
                      {item.viewers}
                    </p>
                  </div>
                </div>
                <div className="group col-span-2 md:block hidden justify-self-end">
                  <a
                    href=""
                    className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px] flex items-center gap-2 group-hover:text-[#FF6D00]  text-nowrap"
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
      case 2:
        return (
          <div>
            {contentData.map((item, index) => (
              <div
                key={index}
                className={`lg:grid grid-cols-12 border-[#60606B] border-opacity-65 py-5 lg:py-6 gap-10 w-full ${
                  index === contentData.length - 1 ? "border-none" : "border-b"
                } `}
              >
                <div className="flex lg:items-start items-center col-span-4 justify-between gap-4 lg:mb-0 mb-6">
                  <p className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px] text-sm lg:text-base">
                    {item.title}
                  </p>
                  <div className="group lg:hidden block">
                    <a
                      href=""
                      className="text-[#FF6D00] font-bold leading-[27px] tracking-[0.328px] flex items-center gap-2 text-sm lg:text-base text-nowrap"
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
                <div className="flex col-span-6 gap-10 lg:justify-evenly justify-between">
                  <div className="flex flex-col col-span-3">
                    <p className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px] text-sm lg:text-base">
                      {item.author}
                    </p>
                    <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px] text-sm lg:text-base">
                      {item.role}
                    </p>
                  </div>
                  <div className="flex flex-col col-span-3">
                    <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px] text-sm lg:text-base">
                      {item.duration}
                    </p>
                    <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px] text-sm lg:text-base">
                      {item.viewers}
                    </p>
                  </div>
                </div>
                <div className="group col-span-2 lg:block hidden justify-self-end">
                  <a
                    href=""
                    className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px] flex items-center gap-2 group-hover:text-[#FF6D00]  text-nowrap"
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
                className={`lg:grid grid-cols-12 border-[#60606B] border-opacity-65 py-5 lg:py-6 gap-10 w-full ${
                  index === contentData.length - 1 ? "border-none" : "border-b"
                } `}
              >
                <div className="flex lg:items-start items-center col-span-4 justify-between gap-4 lg:mb-0 mb-6">
                  <p className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px] text-sm lg:text-base">
                    {item.title}
                  </p>
                  <div className="group lg:hidden block">
                    <a
                      href=""
                      className="text-[#FF6D00] font-bold leading-[27px] tracking-[0.328px] flex items-center gap-2 text-sm lg:text-base text-nowrap"
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
                <div className="flex col-span-6 gap-10 lg:justify-evenly justify-between">
                  <div className="flex flex-col col-span-3">
                    <p className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px] text-sm lg:text-base">
                      {item.author}
                    </p>
                    <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px] text-sm lg:text-base">
                      {item.role}
                    </p>
                  </div>
                  <div className="flex flex-col col-span-3">
                    <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px] text-sm lg:text-base">
                      {item.duration}
                    </p>
                    <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px] text-sm lg:text-base">
                      {item.viewers}
                    </p>
                  </div>
                </div>
                <div className="group col-span-2 lg:block hidden justify-self-end">
                  <a
                    href=""
                    className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px] flex items-center gap-2 group-hover:text-[#FF6D00]  text-nowrap"
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
                className={`lg:grid grid-cols-12 border-[#60606B] border-opacity-65 py-5 lg:py-6 gap-10 w-full ${
                  index === contentData.length - 1 ? "border-none" : "border-b"
                } `}
              >
                <div className="flex lg:items-start items-center col-span-4 justify-between gap-4 lg:mb-0 mb-6">
                  <p className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px] text-sm lg:text-base">
                    {item.title}
                  </p>
                  <div className="group lg:hidden block">
                    <a
                      href=""
                      className="text-[#FF6D00] font-bold leading-[27px] tracking-[0.328px] flex items-center gap-2 text-sm lg:text-base text-nowrap"
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
                <div className="flex col-span-6 gap-10 lg:justify-evenly justify-between">
                  <div className="flex flex-col col-span-3">
                    <p className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px] text-sm lg:text-base">
                      {item.author}
                    </p>
                    <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px] text-sm lg:text-base">
                      {item.role}
                    </p>
                  </div>
                  <div className="flex flex-col col-span-3">
                    <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px] text-sm lg:text-base">
                      {item.duration}
                    </p>
                    <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px] text-sm lg:text-base">
                      {item.viewers}
                    </p>
                  </div>
                </div>
                <div className="group col-span-2 lg:block hidden justify-self-end">
                  <a
                    href=""
                    className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px] flex items-center gap-2 group-hover:text-[#FF6D00]  text-nowrap"
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
    <div className="custom-container 3xl:!max-w-[1280px] mt-16 lg2:mt-20 2xl:mt-[100px] 3xl:mt-[120px]">
      <Tabs
        defaultValue={currentSchedule.toString()}
        onValueChange={handleScheduleClick}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div>
          <span className="text-[14px] lg:text-[16px] lg2:text-[18px] text-[#FF6D00] font-medium leading-[22px] lg:leading-[40px]">
            Quý 4, 2024
          </span>
          <h2 className="text-[#141414] text-[20px] lg:text-[24px] lg2:text-[40px] 2xl:text-[44px] 3xl:text-[48px] font-bold lg2:leading-[46px] 2xl:leading-[52px] 3xl:leading-[54px] mt-2 mb-3 lg2:mb-5">
            Lịch trình ra mắt
          </h2>
        </div>
        <TabsList className="flex gap-6 lg:gap-10 whitespace-nowrap overflow-x-auto scrollbar-hidden max-w-full">
          {schedules.map((schedule) => (
            <TabsTrigger
              key={schedule.id}
              value={schedule.id.toString()}
              className={`text-[14px] lg:text-[16px] lg2:text-[18px]  font-medium py-[9px] leading-[22px] lg:leading-[28px] text-[#111013]  ${
                currentSchedule === schedule.id
                  ? "border-b-2 border-[#0C1C28]"
                  : "border-none"
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
