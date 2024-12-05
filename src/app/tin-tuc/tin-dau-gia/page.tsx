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
  const [length, setLength] = useState<any>();
  const [sort, setSort] = useState<any>(true);
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
          sort,
        );

        setDataAnnounce([...dataAnnounceRes?.data?.data?.announce]);
        setLength(dataAnnounceRes?.data?.data?.announce?.length);
      } catch (error) {
        console.error('Error', error);
      }
    })();
  }, [slugCate, slugTag, date, keyword, sort]);
  useEffect(() => {
    (async () => {
      try {
        const dataAnnounceRes = await fnGetListAnnounce(
          Number(currentPage),
          12,
          slugCate,
          slugTag,
          date,
          keyword,
          sort,
        );

        setDataAnnounce([
          ...dataAnnounce,
          ...dataAnnounceRes?.data?.data?.announce,
        ]);
        setLength(dataAnnounceRes?.data?.data?.announce?.length);
      } catch (error) {
        console.error('Error', error);
      }
    })();
  }, [currentPage]);
  return (
    <div>
      <HeaderNews
        setTextValue={setKeyword}
        setSort={setSort}
        setCurrentPage={setCurrentPage}
      />
      {dataAnnounce.length != 0 && (
        <NewsBanner dataNew={dataAnnounce[0]} url="/tin-tuc/tin-dau-gia/" />
      )}
      <NewsContentPage
        news={dataAnnounce}
        url="/tin-tuc/tin-dau-gia/"
        dataCateAndTags={dataCateAndTags?.data?.data}
        slugCate={setSlugCate}
        currentPage={currentPage}
        length={length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default TinDauGia;
