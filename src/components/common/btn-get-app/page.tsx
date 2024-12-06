'use client';
import Link from 'next/link';
import React, { useState } from 'react';

type Props = {};

const ButtonGetApp = (props: Props) => {
  const [isOpen, setOpen] = useState(true);
  return (
    <div className={`bg-[#EEF] shadow-md xl:hidden block`}>
      {isOpen ? (
        <div className="custom-container">
          <div className="flex items-center py-3">
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
            <Link
              href="https://play.google.com/store/apps/details?id=com.facebook.katana&hl=vi&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-500 px-6 py-2 text-lg font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-600"
            >
              Tải ứng dụng
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
