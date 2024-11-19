import NewsDetail from '@/components/news/NewsDetail';
import { fnGetNewDetail } from '@/services/news';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

const ChiTietTinTucHd = async ({ params }: Props) => {
  const { slug } = params;
  const data = await fnGetNewDetail(slug);
  return (
    <>
      <NewsDetail data={data?.data?.data?.posts_by_id?.raw_content} />
    </>
  );
};

export default ChiTietTinTucHd;
