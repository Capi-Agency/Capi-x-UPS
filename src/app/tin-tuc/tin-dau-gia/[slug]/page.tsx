import NewsDetail from '@/components/news/NewsDetail';
import { fnGetAnnounceDetail } from '@/services/announce';
import { Metadata, ResolvingMetadata } from 'next';
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
export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params

  const { slug } = params;
  const data = await fnGetAnnounceDetail(slug);
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
export default ChiTietTinTucDg;
