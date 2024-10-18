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
            <div className="grid grid-cols-10 border-b border-[#60606B] border-opacity-65 py-6 gap-10">
              <p className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px] col-span-3">
                Tại sao nên nắm giữ ít nhất 1 cổ phiếu BĐS
              </p>
              <div className="flex flex-col col-span-2">
                <p className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px]">
                  Nguyễn Tuấn
                </p>
                <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px]">
                  Chuyên gia đầu tư
                </p>
              </div>
              <div className="flex flex-col col-span-4">
                <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px]">
                  ~12 phút,
                </p>
                <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px]">
                  140 người đặt lịch xem
                </p>
              </div>
              <a
                href=""
                className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px] flex items-center gap-2 col-span-1"
              >
                Chi tiết
                <div className="relative w-[20px] h-[20px]">
                  <NextImg
                    src="/assets/icons/arrow_forward-b.svg"
                    alt="Capi"
                    objectFit="cover"
                    className=""
                  />
                </div>
              </a>
            </div>
            <div className="grid grid-cols-10 border-b border-[#60606B] border-opacity-65 py-6 gap-10">
              <p className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px] col-span-3">
                12 cách thức giúp bạn nhận định mã cổ phiếu tăng trưởng bền vững
              </p>
              <div className="flex flex-col col-span-2">
                <p className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px]">
                  Trung Kiên
                </p>
                <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px]">
                  Chuyên gia đầu tư
                </p>
              </div>
              <div className="flex flex-col col-span-4">
                <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px]">
                  ~20 phút,
                </p>
                <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px]">
                  241 người đặt lịch xem
                </p>
              </div>
              <a
                href=""
                className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px] flex items-center gap-2 col-span-1"
              >
                Chi tiết
                <div className="relative w-[20px] h-[20px]">
                  <NextImg
                    src="/assets/icons/arrow_forward-b.svg"
                    alt="Capi"
                    objectFit="cover"
                    className=""
                  />
                </div>
              </a>
            </div>
            <div className="grid grid-cols-10 border-b border-[#60606B] border-opacity-65 py-6 gap-10">
              <p className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px] col-span-3">
                Vào tiền thế nào, đầu tư ra sao với chuyên gia đặt lệnh
              </p>
              <div className="flex flex-col col-span-2">
                <p className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px]">
                  Thái Sơn
                </p>
                <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px]">
                  Chuyên gia đầu tư
                </p>
              </div>
              <div className="flex flex-col col-span-4">
                <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px]">
                  ~30 phút,
                </p>
                <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px]">
                  400 người đặt lịch xem
                </p>
              </div>
              <a
                href=""
                className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px] flex items-center gap-2 col-span-1"
              >
                Chi tiết
                <div className="relative w-[20px] h-[20px]">
                  <NextImg
                    src="/assets/icons/arrow_forward-b.svg"
                    alt="Capi"
                    objectFit="cover"
                    className=""
                  />
                </div>
              </a>
            </div>
          </div>
        );
      case 2:
        return (
          <>
            <div className="grid grid-cols-10 border-b border-[#60606B] border-opacity-65 py-6 gap-10">
              <p className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px] col-span-3">
                12 cách thức giúp bạn nhận định mã cổ phiếu tăng trưởng bền vững
              </p>
              <div className="flex flex-col col-span-2">
                <p className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px]">
                  Trung Kiên
                </p>
                <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px]">
                  Chuyên gia đầu tư
                </p>
              </div>
              <div className="flex flex-col col-span-4">
                <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px]">
                  ~20 phút,
                </p>
                <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px]">
                  241 người đặt lịch xem
                </p>
              </div>
              <a
                href=""
                className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px] flex items-center gap-2 col-span-1"
              >
                Chi tiết
                <div className="relative w-[20px] h-[20px]">
                  <NextImg
                    src="/assets/icons/arrow_forward-b.svg"
                    alt="Capi"
                    objectFit="cover"
                    className=""
                  />
                </div>
              </a>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="grid grid-cols-10 border-b border-[#60606B] border-opacity-65 py-6 gap-10">
              <p className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px] col-span-3">
                12 cách thức giúp bạn nhận định mã cổ phiếu tăng trưởng bền vững
              </p>
              <div className="flex flex-col col-span-2">
                <p className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px]">
                  Văn Thành
                </p>
                <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px]">
                  Chuyên gia đầu tư
                </p>
              </div>
              <div className="flex flex-col col-span-4">
                <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px]">
                  ~20 phút,
                </p>
                <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px]">
                  241 người đặt lịch xem
                </p>
              </div>
              <a
                href=""
                className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px] flex items-center gap-2 col-span-1"
              >
                Chi tiết
                <div className="relative w-[20px] h-[20px]">
                  <NextImg
                    src="/assets/icons/arrow_forward-b.svg"
                    alt="Capi"
                    objectFit="cover"
                    className=""
                  />
                </div>
              </a>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className="grid grid-cols-10 border-b border-[#60606B] border-opacity-65 py-6 gap-10">
              <p className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px] col-span-3">
                12 cách thức giúp bạn nhận định mã cổ phiếu tăng trưởng bền vững
              </p>
              <div className="flex flex-col col-span-2">
                <p className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px]">
                  Trung Kiên
                </p>
                <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px]">
                  Chuyên gia đầu tư
                </p>
              </div>
              <div className="flex flex-col col-span-4">
                <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px]">
                  ~20 phút,
                </p>
                <p className="text-[#0C1C28] leading-[27px] tracking-[0.328px]">
                  241 người đặt lịch xem
                </p>
              </div>
              <a
                href=""
                className="text-[#0C1C28] font-bold leading-[27px] tracking-[0.328px] flex items-center gap-2 col-span-1"
              >
                Chi tiết
                <div className="relative w-[20px] h-[20px]">
                  <NextImg
                    src="/assets/icons/arrow_forward-b.svg"
                    alt="Capi"
                    objectFit="cover"
                    className=""
                  />
                </div>
              </a>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1280px] mt-[160px]">
      <Tabs
        defaultValue={currentSchedule.toString()}
        onValueChange={handleScheduleClick}
        data-aos="fade-up" data-aos-delay="200"
      >
        <div>
          <span className="text-[18px] text-[#FF6D00] font-medium leading-[40px]">
            Quý 4, 2024
          </span>
          <h2 className="text-[48px] text-[#141414] font-bold leading-[54px] mt-2 mb-5">
            Lịch trình ra mắt
          </h2>
        </div>
        <TabsList className="flex gap-10">
          {schedules.map((schedule) => (
            <TabsTrigger
              key={schedule.id}
              value={schedule.id.toString()}
              className={`text-[18px] font-medium pb-[9px] leading-[28px] text-[#111013]  ${
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
            className="mt-[40px]"
          >
            {renderContent()}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default CourseSchedule;
