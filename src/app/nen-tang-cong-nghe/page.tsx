import BannerTech from '@/components/technology/BannerTech'
import ContentTech from '@/components/technology/ContentTech'
import React from 'react'

type Props = {}

const TechnologyPlatform = (props: Props) => {
  return (
    <div>
      <BannerTech/>
      <ContentTech/>
    </div>
  )
}

export default TechnologyPlatform