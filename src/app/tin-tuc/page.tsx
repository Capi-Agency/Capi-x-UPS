import HeaderNews from '@/components/news/HeaderNews';
import InfomationDisclosure from '@/components/news/InfomationDisclosure';
import NewsAction from '@/components/news/NewsAction';
import NewsAuction from '@/components/news/NewsAuction';
import NewsBanner from '@/components/news/NewsBanner';
import NewsService from '@/components/news/NewsService';
import React from 'react';

type Props = {};

const NewsPage = (props: Props) => {
  return (
    <div className="">
      <HeaderNews />
      <NewsBanner />
      <NewsAction />
      <NewsService />
      <NewsAuction />
      <InfomationDisclosure />
    </div>
  );
};

export default NewsPage;
