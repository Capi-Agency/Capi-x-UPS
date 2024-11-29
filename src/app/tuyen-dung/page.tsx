import Jobstrategy from '@/components/jobcomponents/Jobstrategy';
import BannerJob from '@/components/jobcomponents/BannerJob';
import React from 'react';
import BenefitJob from '@/components/jobcomponents/BenefitJob';
import Recruitment from '@/components/jobcomponents/Recruitment';
import Introduce from '@/components/jobcomponents/Introduce';
import CustomerReviews from '@/components/jobcomponents/CustomerReviews';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {};

const JobPage = (props: Props) => {
  return (
    <>
      <BannerJob />
      <Jobstrategy />
      <BenefitJob />
      <Recruitment />
      <CustomerReviews />
      <Introduce />
    </>
  );
};

export default JobPage;
export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  return {
    title: 'Tuyển dụng UPS',
    description:
      'UPS trao cơ hội để bạn được làm việc trong một cộng đồng năng động, sáng tạo, nơi mọi ý tưởng đều được trân trọng, mang lại nhiều giá trị phát triển bền vững, tạo sự gắn kết.',
    openGraph: {
      images: ['/assets/icons/logo-bt.svg'],
    },
  };
}
