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
      count: '35',
      description: 'designers and developers',
    },
  ];
  return (
    <div className="mb-[-160px] flex h-[680px] w-full items-end justify-end bg-[url('/assets/image/sectionJob.png')] bg-cover bg-center">
      <div className="custom-conatiner flex items-end justify-end pr-[140px]">
        {items &&
          items.map((item: any, index: any) => {
            return (
              <div
                key={index}
                className={`px-[40px] py-[50px] ${index == 0 ? 'bg-[#0AB358]' : 'bg-[#0F1B0E]'}`}
              >
                <div className='flex items-center justify-start gap-2'>
                  <img
                    src={item.icon}
                    alt={`icon-${index}`}
                    className="h-[32px] w-[32px]"
                  />
                  <div className="text-[40px] font-bold text-white">
                    {item.count}
                  </div>
                </div>
                <div className="text-[20px] font-medium text-white">
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
