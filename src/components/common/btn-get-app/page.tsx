'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import NextImg from '../next-img';

type Props = {};

const ButtonGetApp = (props: Props) => {
  const [isOpen, setOpen] = useState(true);
  return (
    <div className={`block bg-[#EEF] shadow-md xl:hidden`}>
      {isOpen ? (
        <div className="p-2 md:p-[18px] lg:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:w-auto md:gap-3 lg:gap-[14px]">
              <button onClick={() => setOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.2431 7.75786L7.75781 16.2431M16.2431 16.2431L7.75781 7.75781"
                    stroke="#28303F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="flex size-[60px] min-w-[60px] items-center justify-center rounded-[12px] bg-[#FFF] md:size-[80px] lg:size-[100px]">
                <div className="relative h-[36px] w-[42px] md:h-[37px] md:w-[62px] lg:h-[60px] lg:w-[82px]">
                  <NextImg
                    src="/assets/image/logo-getapp.png"
                    alt="UPS"
                    objectFit="cover"
                    className=""
                  />
                </div>
              </div>
              <div>
                <p className="text-[20px] font-bold text-[#000] md:text-[24px] lg:text-[28px]">
                  Up Securities
                </p>
                <p className="text-sm font-medium text-[#000] md:text-[20px] lg:text-[26px]">
                  Đặt dịch vụ tiện lợi,
                  <br className="block md:hidden" /> chỉ với 1 chạm!
                </p>
              </div>
            </div>
            <Link
              href="https://play.google.com/store/apps/details?id=com.facebook.katana&hl=vi&pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex h-[30px] items-center text-nowrap rounded-[8px] bg-[#02E56A] px-[9px] text-sm font-bold text-[#15171E] md:h-[50px] md:rounded-[16px] md:px-6 md:text-[18px]">
                Tải App Ngay!
              </button>
            </Link>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default ButtonGetApp;
