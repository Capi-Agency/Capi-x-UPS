import HeaderNews from '@/components/news/HeaderNews';
import NewsBanner from '@/components/news/NewsBanner';
import React from 'react';
import NewsContentPage from '@/components/news/NewsContentPage';
import { fnGetListNews } from '@/services/news';

type Props = {};

const TinHoatDong = async (props: Props) => {
  const data = await fnGetListNews(1, 12);
  return (
    <div>
      <HeaderNews />
      <NewsBanner
        dataNew={data?.data?.data?.posts[data?.data?.data?.posts.length - 1]}
      />
      <NewsContentPage
        news={data?.data?.data?.posts}
        url="/tin-tuc/tin-hoat-dong/"
      />
    </div>
  );
};

export default TinHoatDong;
