'use client';
import { cn } from '@/lib/utils';
import { useRef } from 'react';

export const GlareCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const isPointerInside = useRef(false);
  const refElement = useRef<HTMLDivElement>(null);
  const state = useRef({
    rotate: {
      x: 0,
      y: 0,
    },
  });

  const containerStyle = {
    '--m-x': '50%',
    '--m-y': '50%',
    '--r-x': '0deg',
    '--r-y': '0deg',
    '--duration': '500ms', // Tăng thời gian chuyển động để hiệu ứng chậm lại
    '--radius': '48px',
    '--easing': 'ease-out', // Đổi easing thành ease-out cho hiệu ứng mượt mà
    '--transition': 'var(--duration) var(--easing)',
  } as any;

  const updateStyles = () => {
    if (refElement.current) {
      const { rotate } = state.current;
      refElement.current?.style.setProperty('--r-x', `${rotate.x}deg`);
      refElement.current?.style.setProperty('--r-y', `${rotate.y}deg`);
    }
  };

  return (
    <div
      style={containerStyle}
      className="relative isolate mx-auto mt-20 h-full max-w-5xl transition-transform will-change-transform [perspective:600px]"
      ref={refElement}
      onPointerMove={(event) => {
        const rotateFactor = 0.1;
        const rect = event.currentTarget.getBoundingClientRect();
        const position = {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        };
        const percentage = {
          x: (100 / rect.width) * position.x,
          y: (100 / rect.height) * position.y,
        };
        const delta = {
          x: percentage.x - 50,
          y: percentage.y - 50,
        };

        const { rotate } = state.current;
        rotate.x = -(delta.x / 3.5);
        rotate.y = delta.y / 2;
        rotate.x *= rotateFactor;
        rotate.y *= rotateFactor;

        updateStyles();
      }}
      onPointerEnter={() => {
        isPointerInside.current = true;
        if (refElement.current) {
          setTimeout(() => {
            if (isPointerInside.current) {
              refElement.current?.style.setProperty('--duration', '0s');
            }
          }, 300);
        }
      }}
      onPointerLeave={() => {
        isPointerInside.current = false;
        if (refElement.current) {
          refElement.current.style.removeProperty('--duration');
          refElement.current?.style.setProperty('--r-x', `0deg`);
          refElement.current?.style.setProperty('--r-y', `0deg`);
        }
      }}
    >
      <div className="rounded-[var(--radius)]transition-transform grid h-full max-w-5xl origin-center overflow-hidden will-change-transform [transform:rotateY(var(--r-x))_rotateX(var(--r-y))] hover:filter-none hover:[--duration:200ms] hover:[--easing:linear] hover:[--opacity:0.6]">
        <div className="grid h-auto max-w-5xl mix-blend-soft-light [clip-path:inset(0_0_0_0_round_var(--radius))] [grid-area:1/1]">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
