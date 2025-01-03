'use client';
import { cn } from '@/lib/utils';
import Marquee from '@/components/ui/marquee';
import { useRef, useState } from 'react';

const reviews = [
  {
    id: 1,
    img: '/assets/image/partner-01.png',
  },
  {
    id: 2,
    img: '/assets/image/partner-02.png',
  },
  {
    id: 3,
    img: '/assets/image/partner-03.png',
  },
  {
    id: 4,
    img: '/assets/image/partner-04.png',
  },
  {
    id: 5,
    img: '/assets/image/partner-05.png',
  },
  {
    id: 6,
    img: '/assets/image/partner-06.png',
  },
  {
    id: 7,
    img: '/assets/image/partner-07.png',
  },
  {
    id: 8,
    img: '/assets/image/partner-08.png',
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }: { img: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  return (
    <div className="group/card relative">
      <figure className={cn('z-1')} ref={cardRef}>
        <div className="flex flex-row items-center gap-5">
          <img
            alt=""
            className="h-10 cursor-pointer object-contain grayscale transition-all duration-200 hover:grayscale-0 lg:h-[50px] lg2:h-[56px]"
            src={img}
          />
        </div>
      </figure>
    </div>
  );
};

export function MarqueEvaluate() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee className="pb-8 [--duration:20s] [--gap:3rem]" repeat={10}>
        {firstRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <Marquee reverse repeat={10} className="[--duration:20s] [--gap:3rem]">
        {secondRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l dark:from-background"></div>
    </div>
  );
}
