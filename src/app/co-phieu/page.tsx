import AppStock from '@/components/stock-market/AppStock';
import BannerStock from '@/components/stock-market/BannerStock';
import BenefitStock from '@/components/stock-market/BenefitStock';
import FeeStock from '@/components/stock-market/FeeStock';
import PartnerStock from '@/components/stock-market/PartnerStock';
import ServiceStock from '@/components/stock-market/ServiceStock';
import UdemyStock from '@/components/stock-market/UdemyStock';
import { fnGetPage } from '@/services/page';
import { Metadata, ResolvingMetadata } from 'next';
import React from 'react';

type Props = {};

const ChungKhoan = async (props: Props) => {
  const data = await fnGetPage('co-phieu-7d');
  const dataStock = data?.data?.data?.pages_by_id?.raw_content;
  return (
    <div>
      {dataStock &&
        dataStock?.contents.map((datasection: any, index: number) => {
          return (
            <div key={index}>
              {datasection.banner && <BannerStock data={datasection.banner} />}
              {datasection.academy_service && (
                <ServiceStock data={datasection.academy_service} />
              )}
              {datasection.stock && <BenefitStock data={datasection.stock} />}
              {datasection.stock_value && (
                <FeeStock data={datasection.stock_value} />
              )}
              {datasection.section_service && (
                <AppStock data={datasection.section_service} />
              )}
              {datasection.ups_academy && (
                <UdemyStock data={datasection.ups_academy} />
              )}
              {datasection.doi_tac && (
                <PartnerStock data={datasection.doi_tac} />
              )}
            </div>
          );
        })}
    </div>
  );
};

export default ChungKhoan;
export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  return {
    title: 'Cổ phiếu UPS',
    description:
      'Tham gia giao dịch Cổ phiếu là giải pháp đơn giản và dễ dàng giúp bạn hiện thực hóa ước mơ tăng trưởng tài chính và chinh phục những đỉnh cao cuộc sống.',
    openGraph: {
      images: ['/assets/icons/logo-bt.svg'],
    },
  };
}
