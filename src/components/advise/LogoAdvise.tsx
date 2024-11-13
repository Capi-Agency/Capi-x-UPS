import React from 'react';
import NextImg from '../common/next-img';

type Props = {};

const LogoAdvise = (props: Props) => {
  return (
    <div className="flex h-[640px] items-center justify-center bg-[#040919] -mb-[160px]">
      <div className="custom-container">
        <div className="relative mx-auto h-[100px] w-[420px]">
          <NextImg
            src="/assets/image/logo-ups-red.png"
            alt="Capi"
            objectFit="contain"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default LogoAdvise;
