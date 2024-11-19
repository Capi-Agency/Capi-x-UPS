import NewsDetail from '@/components/news/NewsDetail';
import { fnGetAnnounceDetail } from '@/services/announce';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

const ChiTietTinTucDg = async ({ params }: Props) => {
  const { slug } = params;
  const data = await fnGetAnnounceDetail(slug);
  return (
    <div>
      <NewsDetail data={data?.data?.data?.announce_by_id?.raw_content} />
    </div>
  );
};

export default ChiTietTinTucDg;
