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
    <div key={id} className="flex gap-5 relative">
      <div className="bg-[#F3F3FB] w-[50px] h-[50px] min-w-[50px] flex items-center justify-center rounded-[10px]">
        <div className="relative w-[24px] h-[24px]">
          <NextImg
            src="/assets/icons/document-text.svg"
            alt="Capi"
            objectFit="cover"
            className=""
          />
        </div>
      </div>
      <div className={`flex flex-col`}>
        <span className="text-[#15171E] text-[30px] font-semibold leading-normal mr-8">
          {question}
        </span>
        <div
          className={`grid text-[#535662] text-[18px] font-medium leading-[28px] overflow-hidden 
						transition-all duration-500 ease-in-out
						${isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"} `}
        >
          <div className="overflow-hidden">{answer}</div>
        </div>
      </div>
      <div className="absolute top-2 right-0">
        <div
          className={`relative w-[32px] h-[32px] cursor-pointer transform duration-300 ease-in-out ${
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
      <div className="max-w-[1120px] mx-auto mt-[160px]">
        <div className="lg:grid lg:grid-cols-[600px,auto] gap-20">
          <div data-aos="fade-up" data-aos-delay="200">
            <span className="text-[#111013] text-[48px] font-bold leading-[56px]">
              <span className="text-[#01C159]">Câu hỏi</span> thường gặp
            </span>
            <p className="text-[#000] text-[18px] font-medium leading-[28px] mt-8">
              Cập nhật các sản phẩm, dịch vụ mới nhất cũng như các hoạt động, sự
              kiện của UPS
            </p>
            <div className="mt-[60px] flex flex-col gap-[70px]">
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
            <div className="p-[60px] bg-[#F3F3FB] rounded-3xl">
              <div className="relative w-[100px] lg:w-[324px] h-[350px]">
                <NextImg
                  src="/assets/icons/group-5.svg"
                  alt="Capi"
                  objectFit="cover"
                  className=""
                />
              </div>
              <p className="text-[#535662] text-[18px] font-semibold leading-[28px] mt-[52px] mb-[50px]">
                Bạn chưa tìm thấy câu trả lời phù hợp? Đi tới trung tâm hỗ trợ
              </p>
              <button className="flex items-center bg-[#014227] py-3 px-4 rounded-2xl text-[#02E56A] font-bold text-[18px] leading-normal w-[202px] hover:shadow-[-2px_3px_0px_0px_#00813B]">
                Trung tâm hỗ trợ
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="ml-2"
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
