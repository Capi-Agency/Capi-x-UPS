import NewsDetail from '@/components/news/NewsDetail';
import { fnGetNewDetail } from '@/services/news';
import { Metadata, ResolvingMetadata } from 'next';
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
export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params

  const { slug } = params;
  const data = await fnGetNewDetail(slug);
  const imageUrl =
    process.env.REACT_APP_IMG_URL +
    `${data?.data?.data?.posts_by_id?.raw_content?.cover?.id}`;
  return {
    title: data?.data?.data?.posts_by_id?.raw_content?.meta_title,
    description: data?.data?.data?.posts_by_id?.raw_content?.meta_description,
    keywords: data?.data?.data?.posts_by_id?.raw_content?.meta_keyword,
    openGraph: {
      images: [imageUrl],
    },
  };
}
export default ChiTietTinTucHd;
