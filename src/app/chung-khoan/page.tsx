import BannerStock from '@/components/stock-market/BannerStock';
import BenefitStock from '@/components/stock-market/BenefitStock';
import ServiceStock from '@/components/stock-market/ServiceStock';
import React from 'react';

type Props = {};

const ChungKhoan = (props: Props) => {
  return (
    <div>
      <BannerStock />
      <ServiceStock />
      <BenefitStock />
    </div>
  );
};

export default ChungKhoan;
