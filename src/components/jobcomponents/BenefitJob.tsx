import React from 'react';
import NextImg from '../common/next-img';

type Props = {};

const BenefitJob = (props: Props) => {
  const lists = [
    {
      cover: '/assets/image/cardjob-1.png',
      title: 'Môi trường làm việc trẻ trung, năng động, sáng tạo',
      description:
        'Tại UPS, ý tưởng của bạn luôn được coi trọng. Bạn sẽ được hòa mình vào một cộng đồng trẻ trung, nơi mọi người cùng nhau đóng góp, phát triển và không ngừng đổi mới.',
    },
    {
      cover: '/assets/image/card-job-2.png',
      title: 'Cân bằng cuộc sống',
      description:
        'UPS thấu hiểu tầm quan trọng của việc cân bằng giữa công việc và cuộc sống cá nhân. Chúng tôi khuyến khích bạn dành thời gian cho gia đình, theo đuổi đam mê và tận hưởng cuộc sống trọn vẹn.',
    },
    {
      cover: '/assets/image/card-job-3.png',
      title: 'Phát triển toàn diện',
      description:
        'UPS cam kết đầu tư vào sự phát triển của bạn thông qua các chương trình đào tạo chuyên sâu, giúp bạn nâng cao kỹ năng chuyên môn, kỹ năng mềm và mở rộng tiềm năng bản thân.',
    },
    {
      cover: '/assets/image/card-job-4.png',
      title: 'Sự nghiệp bền vững',
      description:
        'Chúng tôi mang đến lộ trình thăng tiến rõ ràng, cơ hội phát triển nghề nghiệp không giới hạn, giúp bạn xây dựng một sự nghiệp vững chắc và ổn định.',
    },
    {
      cover: '/assets/image/card-job-5.png',
      title: 'Gắn kết và hạnh phúc',
      description:
        'UPS không chỉ là nơi làm việc, mà còn là một mái nhà chung, nơi bạn tìm thấy sự gắn kết, chia sẻ và vun đắp hạnh phúc mỗi ngày.',
    },
  ];
  return (
    <div className="custom-container mt-10 lg:mt-[60px] lg2:mt-[100px] 2xl:mt-[120px] 3xl:mt-[160px]">
      <h1 className="text-[20px] font-bold text-[#000] md:text-[24px] lg:text-[32px] lg2:text-[40px] lg2:leading-[46px] 2xl:text-[48px] 2xl:leading-[54px]">
        Điều tuyệt vời khi bạn
        <br />
        <span className="text-[#E50261]">Gia nhập UPS</span>
      </h1>
      <div className="mt-4 flex grid-cols-3 flex-col gap-3 md:mt-5 md:grid md:gap-4 lg:mt-10 lg:gap-6 xl:gap-8 2xl:mt-[60px] 3xl:gap-10">
        {lists.map((item: any, index: any) => {
          return (
            <div
              key={index}
              className={`flex flex-col justify-end gap-[16px] rounded-2xl bg-cover bg-center bg-no-repeat p-[16px] pt-[40%] md:h-[250px] md:pt-0 lg:h-[320px] lg2:h-[360px] 2xl:h-[400px] 3xl:h-[430px] ${index === 0 ? 'col-span-2' : 'col-span-1'}`}
              style={{ backgroundImage: `url('${item.cover}')` }}
            >
              <div className="rounded-[12px] bg-[rgba(0,0,0,0.5)] p-3 lg:px-[24px] lg:py-[20px]">
                <h3 className="text-[20px] font-semibold text-white md:text-[18px] lg:text-[24px] 2xl:text-[28px] 3xl:text-[32px] 3xl:leading-[40px]">
                  {item.title}
                </h3>
                <p
                  className={`line-clamp-2 overflow-hidden pt-[8px] text-sm font-normal leading-6 text-white/80 md:text-base`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BenefitJob;
