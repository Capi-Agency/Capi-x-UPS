import HeaderNews from '@/components/news/HeaderNews';
import NewsContent from '@/components/news/NewsContent';
import NewsBanner from '@/components/news/NewsBanner';
import NewsService from '@/components/news/NewsService';
import { fnGetListAnnounce } from '@/services/announce';
import { fnGetCateAndTags, fnGetListNews } from '@/services/news';
import React from 'react';
import TagNews from '@/components/news/TagNews';

type Props = {};

const NewsPage = async (props: Props) => {
  const data = await fnGetListNews(1, 12);
  const dataAnnounce = await fnGetListAnnounce(1, 4);
  const dataCateAndTags = await fnGetCateAndTags();
  return (
    <div className="">
      <>
        <HeaderNews />
        <NewsBanner
          dataNew={data?.data?.data?.posts[data?.data?.data?.posts.length - 1]}
        />
        <NewsContent
          title="Tin hoạt động"
          news={data?.data?.data?.posts}
          url="/tin-tuc/tin-hoat-dong/"
        />
        <NewsService />
        <NewsContent
          title="Tin đấu giá"
          news={dataAnnounce?.data?.data?.announce}
          url="/tin-tuc/tin-dau-gia/"
        />
        <NewsContent
          title="Công bố thông tin"
          news={dataAnnounce?.data?.data?.announce}
          url="/tin-tuc/cong-bo-thong-tin/"
        />
        <TagNews dataCateAndTags={dataCateAndTags?.data?.data} />
      </>
    </div>
  );
};

export default NewsPage;
