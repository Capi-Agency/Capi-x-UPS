import AppTech from '@/components/technology/AppTech';
import BannerTech from '@/components/technology/BannerTech';
import InvestmentPlatform from '@/components/technology/InvestmentPlatform';
import Performance from '@/components/technology/Performance';
import ReviewTech from '@/components/technology/ReviewTech';
import Transfer from '@/components/technology/Transfer';
import ValueTech from '@/components/technology/ValueTech';
import { fnGetPage } from '@/services/page';
import { Metadata, ResolvingMetadata } from 'next';
import React from 'react';

type Props = {};

const TechnologyPlatform = async (props: Props) => {
  return (
    <div>
      <BannerTech />
      <InvestmentPlatform />
      <Performance />
      <Transfer />
      <ValueTech />
      <AppTech />
      <ReviewTech />
    </div>
  );
};

export default TechnologyPlatform;
export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  return {
    title: 'Nền tảng công nghệ UPS',
    description: 'Siêu ứng dụng đầu tư tích hợp cho mọi nhu cầu của bạn',
    openGraph: {
      images: ['/assets/icons/logo-bt.svg'],
    },
  };
}
