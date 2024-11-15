import HeaderNews from '@/components/news/HeaderNews'
import NewsActionPage from '@/components/news/NewsActionPage'
import NewsBanner from '@/components/news/NewsBanner'
import React from 'react'

type Props = {}

const TinHoatDong = (props: Props) => {
  return (
    <div>
         <HeaderNews />
         <NewsBanner />
         <NewsActionPage/>
    </div>
  )
}

export default TinHoatDong