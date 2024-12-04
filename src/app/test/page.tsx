import ButtonPositionAware from '@/components/common/button-position-aware/page';
import NextImg from '@/components/common/next-img';
import { GlareCard } from '@/components/ui/glare-card';
import React from 'react';

type Props = {};

const Test = (props: Props) => {
  return (
    <div className="mt-20 text-center">
      <ButtonPositionAware text="Mở tài khoản ngay" bgHover="#D0F500" />
      <GlareCard>
        <div
          className="relative w-full pt-[95%] md:h-[380px] md:pt-0 lg:h-[460px] lg2:h-[600px] 2xl:h-[700px] 3xl:h-[790px]"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="700"
        >
          <NextImg
            src="/assets/image/app-fee.png"
            alt="Capi"
            objectFit="cover"
            className="md:object-right-top"
          />
        </div>
      </GlareCard>
    </div>
  );
};

export default Test;
