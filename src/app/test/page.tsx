import ButtonPositionAware from '@/components/common/button-position-aware/page';
import NextImg from '@/components/common/next-img';
import { GlareCard } from '@/components/ui/glare-card';
import { MagicCard } from '@/components/ui/magic-card';
import { AnimatedTestimonials } from '@/components/ui/slide-animation';
import React from 'react';

type Props = {};
const courses = [
  {
    title: 'Đầu tư là gì?',
    description:
      'Creating a higher spacing and how people move through a unique and impactful campaign.',
    imageSrc: '/assets/image/card-course1.svg',
  },
  {
    title: 'Cổ phiếu là gì?',
    description:
      'Creating a higher spacing and how people move through a unique and impactful campaign.',
    imageSrc: '/assets/image/card-course2.svg',
  },
  {
    title: 'Ban kiếm tiền như thế nào?',
    description:
      'Creating a higher spacing and how people move through a unique and impactful campaign.',
    imageSrc: '/assets/image/card-course3.svg',
  },
  {
    title: 'Phân tích cơ bản từ A-Z',
    description:
      'Creating a higher spacing and how people move through a unique and impactful campaign.',
    imageSrc: '/assets/image/card-course1.svg',
  },
  {
    title: 'Chiến lược giao dịch tối ưu',
    description:
      'Creating a higher spacing and how people move through a unique and impactful campaign.',
    imageSrc: '/assets/image/card-course1.svg',
  },
];
const Test = (props: Props) => {
  return (
    <div className="mt-20 text-center">
      <p className="gradient1 mb-10 text-6xl font-bold leading-[68px]">
        Kết nối cùng UPS ngay <br />
        hôm nay!
      </p>
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
      <div className="mt-10">
        <AnimatedTestimonials testimonials={courses} />
      </div>
    </div>
  );
};

export default Test;
