'use client';
import HeaderNews from '@/components/news/HeaderNews';
import NewsBanner from '@/components/news/NewsBanner';
import React, { useEffect, useState } from 'react';
import NewsContentPage from '@/components/news/NewsContentPage';
import { fnGetCateAndTags, fnGetListNews } from '@/services/news';

type Props = {};

const TinHoatDong = (props: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [slugCate, setSlugCate] = useState<any>('');
  const [slugTag, setSlugTag] = useState<any>('');
  const [date, setDate] = useState<any>();
  const [keyword, setKeyword] = useState<any>('');
  const [dataNews, setDataNews] = useState<any>([]);
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
        const dataNewsRes = await fnGetListNews(
          Number(currentPage),
          12,
          slugCate,
          slugTag,
          date,
          keyword,
          sort,
        );
        setDataNews([...dataNews, ...dataNewsRes?.data?.data?.posts]);
        setLength(dataNewsRes?.data?.data?.announce?.length);
      } catch (error) {
        console.error('Error', error);
      }
    })();
  }, [currentPage]);

  return (
    <>
      <HeaderNews setTextValue={setKeyword} setSort={setSort} />
      {dataNews.length != 0 && (
        <NewsBanner dataNew={dataNews[0]} url="/tin-tuc/tin-hoat-dong/" />
      )}

      <NewsContentPage
        news={dataNews}
        url="/tin-tuc/tin-hoat-dong/"
        dataCateAndTags={dataCateAndTags?.data?.data}
        slugCate={setSlugCate}
        currentPage={currentPage}
        length={length}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default TinHoatDong;
