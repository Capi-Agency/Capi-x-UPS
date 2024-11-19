import NewsDetail from '@/components/news/NewsDetail';
import { fnGetAnnounceDetail } from '@/services/announce';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

const ChiTietTinTucCb = async ({ params }: Props) => {
  const { slug } = params;
  const data = await fnGetAnnounceDetail(slug);
  return (
    <>
      <NewsDetail data={data?.data?.data?.announce_by_id?.raw_content} />
    </>
  );
};

export default ChiTietTinTucCb;
