"use client";
import React, { useState } from "react";
import NextImg from "../common/next-img";

type Props = {};
const QnAItems = [
  {
    id: 1,
    question: `Tôi có thể mở tài khoản giao dịch tại UPS qua các hình thức
										nào?`,
    answer: `Để mở tài khoản giao dịch tại UPS, bạn có thể lựa chọn một
											trong những cách sau đây: Cách 1: Mở tài khoản trực tuyến
											qua website tại đây Cách 2: Mở tài khoản trực tiếp tại
											quầy giao dịch của VPS. Để được hỗ trợ thêm, vui lòng liên
											hệ hotline 0243.944.6666`,
  },
  {
    id: 2,
    question: `Phí giao dịch tại UPS?`,
    answer: `Để mở tài khoản giao dịch tại UPS, bạn có thể lựa chọn một
											trong những cách sau đây: Cách 1: Mở tài khoản trực tuyến
											qua website tại đây Cách 2: Mở tài khoản trực tiếp tại
											quầy giao dịch của VPS. Để được hỗ trợ thêm, vui lòng liên
											hệ hotline 0243.944.6666`,
  },
  {
    id: 3,
    question: `Sự khác biệt của UPS?`,
    answer: `Để mở tài khoản giao dịch tại UPS, bạn có thể lựa chọn một
											trong những cách sau đây: Cách 1: Mở tài khoản trực tuyến
											qua website tại đây Cách 2: Mở tài khoản trực tiếp tại
											quầy giao dịch của VPS. Để được hỗ trợ thêm, vui lòng liên
											hệ hotline 0243.944.6666`,
  },
];
type AccordionItemProps = {
  item: {
    id: number;
    question: string;
    answer: string;
  };
  isOpen: boolean;
  handleOnClick: () => void;
};

const AccordionItem = (props: AccordionItemProps) => {
  const {
    item: { id, question, answer },
    isOpen,
    handleOnClick,
  } = props;
  return (
    <div key={id} className="flex gap-3 lg:gap-5 relative">
      <div className="bg-[#F3F3FB] w-10 h-10 min-w-10 lg:w-[50px] lg:h-[50px] lg:min-w-[50px] flex items-center justify-center rounded-[10px]">
        <div className="relative w-[19px] h-[19px] lg:w-[24px] lg:h-[24px]">
          <NextImg
            src="/assets/icons/document-text.svg"
            alt="Capi"
            objectFit="cover"
            className=""
          />
        </div>
      </div>
      <div className={`flex flex-col`}>
        <span className="text-[#15171E] text-[18px] lg:text-[30px] font-semibold leading-normal mr-8">
          {question}
        </span>
        <div
          className={`grid text-[#535662] text-sm lg:text-[18px] font-medium leading-[28px] overflow-hidden 
						transition-all duration-500 ease-in-out
						${isOpen ? "grid-rows-[1fr] opacity-100 mt-2 lg:mt-4" : "grid-rows-[0fr] opacity-0 mt-0"} `}
        >
          <div className="overflow-hidden">{answer}</div>
        </div>
      </div>
      <div className="absolute top-1 lg:top-2 right-0">
        <div
          className={`relative w-6 h-6 lg:w-[32px] lg:h-[32px] cursor-pointer transform duration-300 ease-in-out ${
            isOpen ? "" : "rotate-180"
          }`}
          onClick={handleOnClick}
        >
          <NextImg
            src="/assets/icons/chevron-down.svg"
            alt="Capi"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

const Support = (props: Props) => {
  const [openItemId, setOpenItemId] = useState(1);

  const handleOpenItem = (item: any) => {
    setOpenItemId(item.id);
    if (item.id === openItemId) {
      setOpenItemId(-1);
    }
  };
  return (
    <>
      <div className="max-w-[1120px] mx-auto mt-[48px] lg:mt-[160px]">
        <div className="xl:grid xl:grid-cols-[600px,auto] lg:flex-wrap flex flex-col gap-6 lg:gap-20">
          <div data-aos="fade-up" data-aos-delay="200">
            <span className="text-[#111013] text-[20px] lg:text-[48px] font-bold lg:leading-[56px]">
              <span className="text-[#01C159]">Câu hỏi</span> thường gặp
            </span>
            <p className="text-[#000] text-[14px] lg:text-[18px] font-medium leading-[22px] lg:leading-[28px] mt-3 lg:mt-8">
              Cập nhật các sản phẩm, dịch vụ mới nhất cũng như các hoạt động, sự
              kiện của UPS
            </p>
            <div className="mt-6 lg:mt-[60px] flex flex-col gap-5 lg:gap-[70px]">
              {QnAItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openItemId === item.id}
                  handleOnClick={() => handleOpenItem(item)}
                />
              ))}
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <div className="relative p-5 lg:p-[60px]">
              <div className="bg-[#F3F3FB] inset-0 w-full h-full absolute -z-10 rounded-3xl"></div>
              <div className="relative w-[240px] h-[260px] lg:w-[324px] lg:h-[350px]">
                <NextImg
                  src="/assets/icons/group-5.svg"
                  alt="Capi"
                  objectFit="cover"
                  className=""
                />
              </div>
              <p className="text-[#535662] text-[14px] lg:text-[18px] font-semibold leading-[22px] lg:leading-[28px] mt-5 lg:mt-[52px] mb-5 lg:mb-[50px]">
                Bạn chưa tìm thấy câu trả lời phù hợp? Đi tới trung tâm hỗ trợ
              </p>
              <button className="btn active !bg-[#014227] !text-[#02E56A]">
                Trung tâm hỗ trợ
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-4 h-4 lg:w-6 lg:h-6"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.7595 5.98943C18.7595 5.79051 18.6804 5.59975 18.5398 5.4591C18.3991 5.31844 18.2084 5.23943 18.0095 5.23943L9.42518 5.23943C9.01096 5.23943 8.67518 5.57521 8.67518 5.98943C8.67518 6.40364 9.01096 6.73943 9.42518 6.73943L16.1992 6.73943L5.45858 17.4801C5.16569 17.773 5.16569 18.2478 5.45858 18.5407C5.75148 18.8336 6.22635 18.8336 6.51925 18.5407L17.2595 7.80053V14.5737C17.2595 14.9879 17.5952 15.3237 18.0095 15.3237C18.4237 15.3237 18.7595 14.9879 18.7595 14.5737L18.7595 5.98943Z"
                    fill="#02E56A"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
