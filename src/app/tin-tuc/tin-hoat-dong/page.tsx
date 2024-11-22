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
  const [data, setData] = useState<any>(null);
  const [dataCateAndTags, setDataCateAndTags] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const dataCateAndTags = await fnGetCateAndTags();
        setDataCateAndTags(dataCateAndTags);
        const data = await fnGetListNews(
          Number(currentPage),
          12,
          slugCate,
          slugTag,
          date,
          keyword,
        );

        await setData(data?.data?.data?.posts);
      } catch (error) {
        console.error('Error', error);
      }
    })();
  }, [currentPage, slugCate, slugTag, date, keyword]);

  return (
    <>
      <HeaderNews />
      {data && <NewsBanner dataNew={data[0]} />}

      <NewsContentPage
        news={data}
        url="/tin-tuc/tin-hoat-dong/"
        dataCateAndTags={dataCateAndTags?.data?.data}
        slugCate={setSlugCate}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default TinHoatDong;
