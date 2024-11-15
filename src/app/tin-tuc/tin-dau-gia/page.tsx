import AuctionNewsPage from '@/components/news/AuctionNewsPage'
import AuctionNews from '@/components/news/AuctionNewsPage'
import HeaderNews from '@/components/news/HeaderNews'
import NewsBanner from '@/components/news/NewsBanner'
import React from 'react'

type Props = {}

const TinDauGia = (props: Props) => {
  return (
    <div>
         <HeaderNews />
         <NewsBanner />
         <AuctionNewsPage/>
    </div>
  )
}

export default TinDauGia