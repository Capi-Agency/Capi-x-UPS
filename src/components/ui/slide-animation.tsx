'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import NextImg from '../common/next-img';

type Testimonial = {
  title: string;
  description: string;
  imageSrc: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="mx-auto px-4 py-20 font-sans antialiased md:px-8 lg:px-12">
      <div className="relative mx-auto w-[20%]">
        <div>
          <div className="relative h-[500px]">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.imageSrc}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                  }}
                  className={`absolute inset-0 flex origin-bottom flex-col justify-between rounded-2xl p-5 lg:p-10 ${
                    isActive(index) ? 'bg-[#FFD495]' : 'bg-[#FFF1DD]'
                  } `}
                >
                  <div>
                    <h4 className="text-[20px] font-bold text-[#111013] lg:text-[32px] lg:leading-[40px]">
                      {testimonial.title}
                    </h4>
                    <p className="mt-2 text-[14px] font-medium leading-[22px] text-[#111013] lg:mt-4 lg:text-[18px] lg:leading-[28px]">
                      {testimonial.description}
                    </p>
                  </div>
                  <div className="relative h-[194px] w-full lg:h-[288px]">
                    <NextImg
                      src={testimonial.imageSrc}
                      alt="Capi"
                      objectFit="contain"
                      className=""
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="absolute -left-16 top-[50%] translate-y-1/2">
          <button
            onClick={handlePrev}
            className="group/button flex size-9 items-center justify-center rounded-full bg-[#FFF1DD] dark:bg-neutral-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="8"
              viewBox="0 0 11 8"
              fill="none"
              className="rotate-180"
            >
              <path
                d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM10.7816 4.35355C10.9769 4.15829 10.9769 3.84171 10.7816 3.64645L7.59966 0.464466C7.4044 0.269204 7.08782 0.269204 6.89256 0.464466C6.69729 0.659728 6.69729 0.976311 6.89256 1.17157L9.72098 4L6.89256 6.82843C6.69729 7.02369 6.69729 7.34027 6.89256 7.53553C7.08782 7.7308 7.4044 7.7308 7.59966 7.53553L10.7816 4.35355ZM1 4.5H10.4281V3.5H1V4.5Z"
                fill="#02E56A"
                className="fill-[#15171E]"
              />
            </svg>
          </button>
        </div>
        <div className="absolute -right-16 top-[50%] translate-y-1/2">
          <button
            onClick={handleNext}
            className="group/button flex size-9 items-center justify-center rounded-full bg-[#FFF1DD] dark:bg-neutral-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="8"
              viewBox="0 0 11 8"
              fill="none"
            >
              <path
                d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM10.7816 4.35355C10.9769 4.15829 10.9769 3.84171 10.7816 3.64645L7.59966 0.464466C7.4044 0.269204 7.08782 0.269204 6.89256 0.464466C6.69729 0.659728 6.69729 0.976311 6.89256 1.17157L9.72098 4L6.89256 6.82843C6.69729 7.02369 6.69729 7.34027 6.89256 7.53553C7.08782 7.7308 7.4044 7.7308 7.59966 7.53553L10.7816 4.35355ZM1 4.5H10.4281V3.5H1V4.5Z"
                fill="#02E56A"
                className="fill-[#15171E]"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
