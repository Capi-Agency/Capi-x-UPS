import HeaderNews from '@/components/news/HeaderNews';
import NewsBanner from '@/components/news/NewsBanner';
import React from 'react';
import NewsActionPage from '@/components/news/NewsActionPage';
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
      <NewsActionPage
        news={data?.data?.data?.posts}
        url="/tin-tuc/chi-tiet-tin-tuc/"
      />
    </div>
  );
};

export default TinHoatDong;
