import HeaderNews from '@/components/news/HeaderNews';
import NewsBanner from '@/components/news/NewsBanner';
import NewsContentPage from '@/components/news/NewsContentPage';
import { fnGetListAnnounce } from '@/services/announce';
import { fnGetCateAndTags, fnGetListNews } from '@/services/news';

type Props = {};

const TinDauGia = async (props: Props) => {
  const data = await fnGetListNews(1, 12);
  const dataAnnounce = await fnGetListAnnounce(1, 12);
  const dataCateAndTags = await fnGetCateAndTags();
  return (
    <div>
      <HeaderNews />
      <NewsBanner
        dataNew={data?.data?.data?.posts[data?.data?.data?.posts.length - 1]}
      />
      <NewsContentPage
        news={dataAnnounce?.data?.data?.announce}
        url="/tin-tuc/tin-dau-gia/"
        dataCateAndTags={dataCateAndTags?.data?.data}
      />
    </div>
  );
};

export default TinDauGia;
