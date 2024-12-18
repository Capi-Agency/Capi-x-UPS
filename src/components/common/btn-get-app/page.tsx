'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import NextImg from '../next-img';

interface ButtonGetAppProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const ButtonGetApp = ({ isOpen, setIsOpen }: ButtonGetAppProps) => {
  const [url, setUrl] = useState<any>('#');
  useEffect(() => {
    (() => {
      const userAgent =
        navigator.userAgent || (window as any).opera || navigator.vendor;

      // Kiểm tra hệ điều hành Android
      if (/android/i.test(userAgent)) {
        setUrl(
          'https://play.google.com/store/apps/details?id=com.bolt.upstock',
        );
        return;
      }
      // Kiểm tra hệ điều hành iOS
      if (/iPhone|iPad|iPod/i.test(userAgent)) {
        setUrl('https://apps.apple.com/vn/app/upstock/id6738768610?l=vi');

        return;
      }
    })();
  }, []);

  return (
    <div className={`block bg-[#EEF] shadow-md md:hidden`}>
      {isOpen ? (
        <div className="p-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button onClick={() => setIsOpen(false)}>
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
              <div className="flex size-[60px] min-w-[60px] items-center justify-center rounded-[12px] bg-[#FFF]">
                <div className="relative h-[36px] w-[42px]">
                  <NextImg
                    src="/assets/image/logo-getapp.png"
                    alt="UPS"
                    objectFit="cover"
                    className=""
                  />
                </div>
              </div>
              <div>
                <p className="text-[20px] font-bold text-[#000]">
                  Up Securities
                </p>
                <p className="text-sm font-medium text-[#000]">
                  Đặt dịch vụ tiện lợi,
                  <br /> chỉ với 1 chạm!
                </p>
              </div>
            </div>
            <Link href={url} target="_blank" rel="noopener noreferrer">
              <button className="flex h-[30px] items-center text-nowrap rounded-[8px] bg-[#02E56A] px-[9px] text-sm font-bold text-[#15171E]">
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
