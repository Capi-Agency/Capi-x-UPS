import React from 'react';

type Props = {};

const Introduce = (props: Props) => {
  const items = [
    {
      icon: '/assets/icons/CirclesFour.svg',
      count: '35',
      description: 'designers and developers',
    },
    {
      icon: '/assets/icons/FlagBannerJB.svg',
      count: '28',
      description: 'awards for digital innovation',
    },
  ];
  return (
    <div className="-mb-10 flex w-full items-end justify-end bg-[url('/assets/image/SectionJob.png')] bg-cover bg-center pt-[75%] md:h-[420px] md:pt-0 lg:-mb-[60px] lg:h-[560px] lg2:-mb-20 lg2:h-[680px] xl:-mb-[100px] 2xl:-mb-[120px] 3xl:-mb-[160px]">
      <div className="custom-conatiner flex items-end justify-end md:pr-10 lg2:pr-20 xl:pr-[160px] 3xl:pr-[240px]">
        {items &&
          items.map((item: any, index: any) => {
            const delay = (index + 1) * 200;
            return (
              <div
                key={index}
                className={`p-5 md:px-[50px] md:py-5 lg:py-10 ${index == 0 ? 'bg-[#0AB358]' : 'bg-[#0F1B0E]'}`}
                data-aos="fade-up"
                data-aos-delay={delay}
                data-aos-duration="700"
              >
                <div className="flex items-center justify-start gap-1 md:gap-2">
                  <img
                    src={item.icon}
                    alt={`icon-${index}`}
                    className="h-4 w-4 md:h-[32px] md:w-[32px]"
                  />
                  <div className="flex items-center gap-[6px]">
                    <p className="text-[20px] font-bold text-white md:text-[32px] lg:text-[40px]">
                      {item.count}
                    </p>
                    <span className="text-[20px] font-bold text-white md:text-[28px]">
                      +
                    </span>
                  </div>
                </div>
                <div className="text-wrap text-sm font-medium text-white md:text-base lg:text-[20px]">
                  {item.description}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Introduce;
