'use client';
import HeaderNews from '@/components/news/HeaderNews';
import NewsContent from '@/components/news/NewsContent';
import NewsBanner from '@/components/news/NewsBanner';
import NewsService from '@/components/news/NewsService';
import { fnGetListAnnounce } from '@/services/announce';
import { fnGetCateAndTags, fnGetListNews } from '@/services/news';
import React, { useEffect, useState } from 'react';
import TagNews from '@/components/news/TagNews';

type Props = {};

const NewsPage = (props: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [slugCate, setSlugCate] = useState<any>('');
  const [slugTag, setSlugTag] = useState<any>('');
  const [date, setDate] = useState<any>();
  const [keyword, setKeyword] = useState<any>('');
  const [dataNews, setDataNews] = useState<any>([]);
  const [dataAnnounce, setDataAnnounce] = useState<any>([]);
  const [dataCateAndTags, setDataCateAndTags] = useState<any>(null);
  const [length, setLength] = useState<any>();
  const [sort, setSort] = useState<any>(true);

  useEffect(() => {
    (async () => {
      try {
        const dataCateAndTags = await fnGetCateAndTags();
        setDataCateAndTags(dataCateAndTags);
        const dataNewsRes = await fnGetListNews(
          Number(currentPage),
          12,
          slugCate,
          slugTag,
          date,
          keyword,
          sort,
        );

        setDataNews([...dataNewsRes?.data?.data?.posts]);
        setLength(dataNewsRes?.data?.data?.posts?.length);
      } catch (error) {
        console.error('Error', error);
      }
    })();
  }, [slugCate, slugTag, date, keyword, sort]);

  useEffect(() => {
    (async () => {
      try {
        const dataCateAndTags = await fnGetCateAndTags();
        setDataCateAndTags(dataCateAndTags);
        const dataAnnounceRes = await fnGetListAnnounce(
          Number(currentPage),
          4,
          slugCate,
          slugTag,
          date,
          keyword,
          sort,
        );

        setDataAnnounce([...dataAnnounceRes?.data?.data?.announce]);
        setLength(dataAnnounceRes?.data?.data?.announce?.length);
      } catch (error) {
        console.error('Error', error);
      }
    })();
  }, [slugCate, slugTag, date, keyword, sort]);
  return (
    <div className="">
      <>
        <HeaderNews
          setTextValue={setKeyword}
          setSort={setSort}
          setCurrentPage={setCurrentPage}
        />
        {dataNews.length != 0 && (
          <NewsBanner dataNew={dataNews[0]} url="/tin-tuc/tin-hoat-dong/" />
        )}

        <NewsContent
          title="Tin hoạt động"
          news={dataNews}
          url="/tin-tuc/tin-hoat-dong/"
        />
        <NewsService />
        <NewsContent
          title="Tin đấu giá"
          news={dataAnnounce}
          url="/tin-tuc/tin-dau-gia/"
        />
        <NewsContent
          title="Công bố thông tin"
          news={dataAnnounce}
          url="/tin-tuc/cong-bo-thong-tin/"
        />
        <TagNews dataCateAndTags={dataCateAndTags?.data?.data} />
      </>
    </div>
  );
};

export default NewsPage;
