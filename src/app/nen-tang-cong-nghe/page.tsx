import BannerTech from '@/components/technology/BannerTech'
import ContentTech from '@/components/technology/ContentTech'
import PartnerTech from '@/components/technology/PartnerTech'
import ReviewTech from '@/components/technology/ReviewTech'
import ServiceTech from '@/components/technology/ServiceTech'
import React from 'react'

type Props = {}

const TechnologyPlatform = (props: Props) => {
  return (
    <div>
      <BannerTech/>
      <ContentTech/>
      <ServiceTech/>
      <ReviewTech/>
      <PartnerTech/>
    </div>
  )
}

export default TechnologyPlatform