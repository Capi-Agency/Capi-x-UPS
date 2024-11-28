import AppFeeSchedule from '@/components/fee-schedule/App';
import BannerFeeSchedule from '@/components/fee-schedule/Banner';
import EndowFeeSchedule from '@/components/fee-schedule/Endow';
import ExpenseFeeSchedule from '@/components/fee-schedule/Expense';
import InvestFeeSchedule from '@/components/fee-schedule/Invest';
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
