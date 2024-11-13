import BannerAdvise from '@/components/advise/BannerAdvise';
import ContentAdvise from '@/components/advise/ContentAdvise';
import EvaluateAdvise from '@/components/advise/EvaluateAdvise';
import LogoAdvise from '@/components/advise/LogoAdvise';
import NetworkAdvise from '@/components/advise/NetworkAdvise';
import ServiceAdvise from '@/components/advise/ServiceAdvise';
import React from 'react';

type Props = {};

const AdvisePage = (props: Props) => {
  return (
    <div>
      <BannerAdvise />
      <NetworkAdvise/>
      <ServiceAdvise/>
      <EvaluateAdvise/>
      <ContentAdvise/>
      <LogoAdvise/>
    </div>
  );
};

export default AdvisePage;
