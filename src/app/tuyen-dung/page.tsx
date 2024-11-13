import Jobstrategy from '@/components/jobcomponents/Jobstrategy';
import BannerJob from '@/components/jobcomponents/BannerJob';
import React from 'react';
import BenefitJob from '@/components/jobcomponents/BenefitJob';
import Recruitment from '@/components/jobcomponents/Recruitment';
import Introduce from '@/components/jobcomponents/Introduce';
import CustomerReviews from '@/components/jobcomponents/CustomerReviews';

type Props = {};

const JobPage = (props: Props) => {
  return (
    <>
      <BannerJob />
      <Jobstrategy />
      <BenefitJob/>
      <Recruitment/>
      <CustomerReviews/>
      <Introduce/>
    </>
  );
};

export default JobPage;
