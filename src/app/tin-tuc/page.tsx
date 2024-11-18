import HeaderNews from '@/components/news/HeaderNews';
import InfomationDisclosure from '@/components/news/InfomationDisclosure';
import NewsAction from '@/components/news/NewsAction';
import NewsAuction from '@/components/news/NewsAuction';
import NewsBanner from '@/components/news/NewsBanner';
import NewsService from '@/components/news/NewsService';
import { fnGetListNews } from '@/services/news';
import React from 'react';

type Props = {};

const NewsPage = async (props: Props) => {
  const data = await fnGetListNews();
  const dataNews = data?.data?.data?.pages_by_id?.raw_content;

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
