import NewsDetail from '@/components/news/NewsDetail';
import { Metadata, ResolvingMetadata } from 'next';
import { fnGetAnnounceDetail, fnGetListAnnounce } from '@/services/announce';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

const ChiTietTinTucCb = async ({ params }: Props) => {
  const { slug } = params;
  const data = await fnGetAnnounceDetail(slug);

  const related = await fnGetListAnnounce(
    1,
    4,
    data?.data?.data?.posts_by_id?.raw_content?.categories[0].category?.slug,
  );
  return (
    <>
      <NewsDetail
        data={data?.data?.data?.announce_by_id?.raw_content}
        related={related?.data?.data?.posts}
        url="/tin-tuc/cong-bo-thong-tin/"
      />
    </>
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
export default ChiTietTinTucCb;
