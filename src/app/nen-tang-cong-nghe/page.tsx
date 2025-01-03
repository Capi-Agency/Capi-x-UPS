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
  const data = await fnGetPage('nen-tang-cong-nghe-AJ');
  const dataTech = data?.data?.data?.pages_by_id?.raw_content;
  console.log('🚀 ~ TechnologyPlatform ~ dataTech:', dataTech);
  return (
    <div>
      {dataTech &&
        dataTech?.contents.map((datasection: any, index: number) => {
          return (
            <div key={index}>
              {datasection.banner && <BannerTech data={datasection.banner} />}
              {datasection.investment_platform && (
                <InvestmentPlatform data={datasection.investment_platform} />
              )}
              {datasection.performance && (
                <Performance data={datasection.performance} />
              )}
              {datasection.transfer && <Transfer data={datasection.transfer} />}
              {datasection.value_tech && (
                <ValueTech data={datasection.value_tech} />
              )}
              {datasection.app_tech && <AppTech data={datasection.app_tech} />}
              {datasection.review_tech && (
                <ReviewTech data={datasection.review_tech} />
              )}
            </div>
          );
        })}
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
