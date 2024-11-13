import AppStock from '@/components/stock-market/AppStock';
import BannerStock from '@/components/stock-market/BannerStock';
import BenefitStock from '@/components/stock-market/BenefitStock';
import FeeStock from '@/components/stock-market/FeeStock';
import PartnerStock from '@/components/stock-market/PartnerStock';
import ServiceStock from '@/components/stock-market/ServiceStock';
import UdemyStock from '@/components/stock-market/UdemyStock';
import React from 'react';

type Props = {};

const ChungKhoan = (props: Props) => {
  return (
    <div>
      <BannerStock />
      <ServiceStock />
      <BenefitStock />
      <FeeStock/>
      <AppStock/>
      <UdemyStock/>
      <PartnerStock/>
    </div>
  );
};

export default ChungKhoan;
