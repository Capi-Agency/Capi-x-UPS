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
        <div className="px-4 py-3">
          <div className="flex items-center justify-between gap-2">
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
              <div
                className="flex size-9 min-w-9 items-center justify-center rounded-[8px]"
                style={{
                  background:
                    'linear-gradient(135deg, #00BD57 0%, #00F06E 100%)',
                }}
              >
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M15.1988 0.798828V15.1614H11.0414V7.6719H10.2412C10.174 7.95185 10.0704 8.35643 9.93124 8.84059C9.66834 9.75137 9.53114 10.2317 9.30182 10.7599C8.81536 11.898 8.16578 12.6601 7.88945 12.9851C7.41066 13.547 6.87143 13.9889 6.27175 14.313C5.97527 14.4721 5.6596 14.6092 5.32665 14.7176C4.75096 14.9438 4.14073 15.0953 3.50938 15.1614C3.26663 15.1844 3.02005 15.1988 2.7677 15.1988C2.51535 15.1988 2.27068 15.1844 2.02889 15.1614C1.61247 15.1173 1.20949 15.0397 0.823776 14.9285C0.81514 14.9266 0.807464 14.9246 0.798828 14.9218V9.60565C0.807464 9.61236 0.81514 9.61811 0.823776 9.62386C3.07186 11.3074 6.2871 10.8165 8.02569 8.64501C8.50448 8.04677 8.87292 7.36703 9.15022 6.65758C9.19723 6.53774 9.47069 5.55888 9.62324 4.95585H0.823776V0.798828H15.1988Z"
                      fill="white"
                    />
                  </svg>
                </i>
              </div>
              <div>
                <p className="text-base font-bold text-[#000]">Up Securities</p>
                <p className="text-wrap text-[12px] font-medium leading-[16px] text-[#4D4D4D]">
                  Đặt dịch vụ tiện lợi, chỉ với 1 chạm!
                </p>
              </div>
            </div>
            <Link href={url} target="_blank" rel="noopener noreferrer">
              <button className="flex h-[32px] items-center text-nowrap rounded-[8px] bg-[#02E56A] px-[10px] py-2 text-[12px] font-bold text-[#014227]">
                Mở Ngay!
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
