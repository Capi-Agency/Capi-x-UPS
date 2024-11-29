import AppFeeSchedule from '@/components/fee-schedule/App';
import BannerFeeSchedule from '@/components/fee-schedule/Banner';
import EndowFeeSchedule from '@/components/fee-schedule/Endow';
import ExpenseFeeSchedule from '@/components/fee-schedule/Expense';
import InvestFeeSchedule from '@/components/fee-schedule/Invest';
import { Metadata, ResolvingMetadata } from 'next';
import React from 'react';

type Props = {};

const BieuPhi = (props: Props) => {
  return (
    <div>
      <BannerFeeSchedule />
      <InvestFeeSchedule />
      <EndowFeeSchedule />
      <ExpenseFeeSchedule />
      <AppFeeSchedule />
    </div>
  );
};

export default BieuPhi;
export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  return {
    title: 'Biểu phí UPS',
    description:
      'Một nền tảng duy nhất đáp ứng mọi nhu cầu đầu tư từ cổ phiếu, trái phiếu đến quỹ mở, giúp bạn quản lý tài sản dễ dàng, hiệu quả và thông minh hơn bao giờ hết.',
    openGraph: {
      images: ['/assets/icons/logo-bt.svg'],
    },
  };
}
