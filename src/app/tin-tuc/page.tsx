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
  const data = await fnGetListNews(1,12);
  // const dataNews = data?.data?.data?.pages_by_id?.raw_content;

  return (
    <div className="">
      {data && (
        <>
          <HeaderNews />
          <NewsBanner dataNew={data?.data?.data?.posts[data?.data?.data?.posts.length-1]} />
          <NewsAction news={data?.data?.data?.posts} />
          <NewsService />
          <NewsAuction />
          <InfomationDisclosure />
        </>
      )}
    </div>
  );
};

export default NewsPage;
