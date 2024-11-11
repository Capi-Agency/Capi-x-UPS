import Jobstrategy from '@/components/jobcomponents/Jobstrategy';
import BannerJob from '@/components/jobcomponents/BannerJob';
import React from 'react';
import BenefitJob from '@/components/jobcomponents/BenefitJob';

type Props = {};

const JobPage = (props: Props) => {
  return (
    <>
      <BannerJob />
      <Jobstrategy />
      <BenefitJob/>
    </>
  );
};

export default JobPage;
