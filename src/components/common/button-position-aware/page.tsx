'use client';
import React, { useState } from 'react';
import NextImg from '../next-img';

interface ButtonEffectProps {
  text: string;
  bgHover: string;
}

const ButtonPositionAware = ({ text, bgHover }: ButtonEffectProps) => {
  const [spanStyle, setSpanStyle] = useState({
    width: 0,
    height: 0,
    top: '0px',
    left: '0px',
    transform: 'translate(-50%, -50%)',
  });

  const [enterPosition, setEnterPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const [leavePosition, setLeavePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    const button = e.currentTarget;
    const parentOffset = button.getBoundingClientRect();
    const relX = e.clientX - parentOffset.left;
    const relY = e.clientY - parentOffset.top;

    setEnterPosition({ x: relX, y: relY });

    const width = 500;
    const height = 500;

    setSpanStyle({
      width,
      height,
      top: `${relY}px`,
      left: `${relX}px`,
      transform: `translate(-50%, -50%)`,
    });
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    const button = e.currentTarget;
    const parentOffset = button.getBoundingClientRect();
    const relX = e.clientX - parentOffset.left;
    const relY = e.clientY - parentOffset.top;

    setLeavePosition({ x: relX, y: relY });

    setSpanStyle((prevState) => ({
      ...prevState,
      top: `${relY}px`,
      left: `${relX}px`,
      transition: 'width 0.5s, height 0.5s, transform 0.5s',
    }));

    setTimeout(() => {
      setSpanStyle({
        width: 0,
        height: 0,
        top: `${relY}px`,
        left: `${relX}px`,
        transform: `translate(-50%, -50%)`,
      });
    }, 50);
  };

  return (
    <div>
      <div className="group inline-block">
        <a
          className="btn relative overflow-hidden bg-[#02E56A] duration-300 ease-in-out hover:transition-all"
          href="#"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="z-[2] flex items-center gap-2">
            {text}
            <div className="relative h-4 w-4 lg:h-6 lg:w-6">
              <NextImg
                src="/assets/icons/UPs.svg"
                alt="Capi"
                objectFit="cover"
              />
            </div>
          </div>
          <span
            style={{
              top: spanStyle.top,
              left: spanStyle.left,
              width: `${spanStyle.width}px`,
              height: `${spanStyle.height}px`,
              transform: spanStyle.transform,
              transition: 'width 0.5s, height 0.5s, transform 0.5s',
            }}
            className={`absolute z-[1] rounded-[12px] lg:rounded-[16px] bg-[${bgHover}] transition-all duration-300 ease-in-out`}
          />
        </a>
      </div>
    </div>
  );
};

export default ButtonPositionAware;
