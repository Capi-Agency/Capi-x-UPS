import React from 'react';

type Props = {};

const Recruitment = (props: Props) => {
  const lists = [
    {
      title: 'Insights & Strategy',
      description:
        'Strategy is a forward-looking plan for your brands behavior.',
      request: [
        '  Research & Data',
        ' Branding & Positioning',
        ' Business Consulting',
        ' Go To Market',
        ' Innovation',
        ' SEO / SEM',
      ],
    },
    {
      title: 'Insights & Strategy',
      description:
        'Strategy is a forward-looking plan for your brands behavior.',
      request: [
        ' Research & Data',
        'Branding & Positioning',
        'Business Consulting',
        'Go To Market',
        'Innovation',
        ' SEO / SEM',
      ],
    },
    {
      title: 'Insights & Strategy',
      description:
        'Strategy is a forward-looking plan for your brands behavior.',
      request: [
        '  Research & Data',
        ' Branding & Positioning',
        'Business Consulting',
        ' Go To Market',
        ' Innovation',
        ' SEO / SEM',
      ],
    },
    {
      title: 'Insights & Strategy',
      description:
        'Strategy is a forward-looking plan for your brands behavior.',
      request: [
        ' Research & Data',
        ' Branding & Positioning',
        ' Business Consulting',
        ' Go To Market',
        ' Innovation',
        ' SEO / SEM',
      ],
    },
  ];
  return (
    <div className="custom-container my-[100px]">
      {/* title */}
      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-2">
          <h5 className="font-hanken-grotesk text-sm font-medium uppercase leading-[21px] text-[#604D3C]">
            03 // SERVICES
          </h5>
          <h3 className="font-hanken-grotesk text-4xl font-bold leading-[54px] text-[#111013]">
            Vị trí tuyển dụng
          </h3>
        </div>
        <div>
          <p className="font-hanken-grotesk text-base font-normal leading-[28px] text-[#161519]">
            We are passionate to create deeply connected brands, services, and
            campaigns to enable stable and successful relationships between
            businesses owners and our customers.
          </p>
        </div>
      </div>
      {/* list */}
      <div className="grid grid-cols-4 gap-10 pt-[60px]">
        {lists.map((item, index) => (
          <div key={index} className="rounded-lg p-8 ">
            <h4 className="text-[26px] font-medium leading-[108%] text-[#1A1B1F]">
              {item.title}
            </h4>
            <p className="text-[16px] font-normal leading-[24px] text-[#161519] pt-[10px]">
              {item.description}
            </p>
            <ul className="space-y-2 pt-[30px]">
              {item.request.map((req, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#604D3C]">–</span>
                  <span className="text-[18px] font-medium leading-[28px] text-[#1A1B1F]">
                    {req}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recruitment;
