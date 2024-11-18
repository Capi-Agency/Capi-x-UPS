import HeaderNews from '@/components/news/HeaderNews';
import InfomationDisclosure from '@/components/news/InfomationDisclosure';
import NewsAction from '@/components/news/NewsAction';
import NewsAuction from '@/components/news/NewsAuction';
import NewsBanner from '@/components/news/NewsBanner';
import NewsService from '@/components/news/NewsService';
import { fnGetListAnnounce } from '@/services/announce';
import { fnGetListNews } from '@/services/news';
import React from 'react';

type Props = {};

const NewsPage = async (props: Props) => {
  const data = await fnGetListNews(1, 12);
  const dataAnnounce = await fnGetListAnnounce(1, 4);

  // const dataNews = data?.data?.data?.pages_by_id?.raw_content;

  return (
    <div className="">
      <>
        <HeaderNews />
        <NewsBanner
          dataNew={data?.data?.data?.posts[data?.data?.data?.posts.length - 1]}
        />
        <NewsAction
        title='Tin hoạt động'
          news={data?.data?.data?.posts}
          url="/tin-tuc/chi-tiet-tin-tuc/"
        />
        <NewsService />
        <NewsAction
          title='Tin đấu giá'
          news={dataAnnounce?.data?.data?.announce}
          url="/tin-tuc/tin-dau-gia/"
        />
         <NewsAction
          title='Công bố thông tin'
          news={dataAnnounce?.data?.data?.announce}
          url="/tin-tuc/tin-dau-gia/"
        />
      </>
    </div>
  );
};

export default NewsPage;
