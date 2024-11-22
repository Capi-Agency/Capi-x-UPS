'use client';
import HeaderNews from '@/components/news/HeaderNews';
import NewsBanner from '@/components/news/NewsBanner';
import NewsContentPage from '@/components/news/NewsContentPage';
import { fnGetListAnnounce } from '@/services/announce';
import { fnGetCateAndTags } from '@/services/news';
import { useEffect, useState } from 'react';

type Props = {};

const TinDauGia = (props: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [slugCate, setSlugCate] = useState<any>('');
  const [slugTag, setSlugTag] = useState<any>('');
  const [date, setDate] = useState<any>();
  const [keyword, setKeyword] = useState<any>('');
  const [dataAnnounce, setDataAnnounce] = useState<any>([]);
  const [dataCateAndTags, setDataCateAndTags] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const dataCateAndTags = await fnGetCateAndTags();
        setDataCateAndTags(dataCateAndTags);
        const dataAnnounceRes = await fnGetListAnnounce(
          Number(currentPage),
          12,
          slugCate,
          slugTag,
          date,
          keyword,
        );

        setDataAnnounce([
          ...dataAnnounceRes?.data?.data?.announce,
          ...dataAnnounce,
        ]);
      } catch (error) {
        console.error('Error', error);
      }
    })();
  }, [currentPage, slugCate, slugTag, date, keyword]);
  return (
    <div>
      <HeaderNews />
      <NewsBanner dataNew={dataAnnounce[0]} />
      <NewsContentPage
        news={dataAnnounce}
        url="/tin-tuc/cong-bo-thong-tin/"
        dataCateAndTags={dataCateAndTags?.data?.data}
        slugCate={setSlugCate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default TinDauGia;
