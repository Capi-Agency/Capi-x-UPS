import HeaderNews from '@/components/news/HeaderNews';
import InformationDisclosurePage from '@/components/news/InformationDisclosurePage';
import NewsBanner from '@/components/news/NewsBanner';
import { fnGetListAnnounce } from '@/services/announce';
import { fnGetListNews } from '@/services/news';

type Props = {};

const CongBoThongTin = async (props: Props) => {
  const data = await fnGetListNews(1, 12);
  const dataAnnounce = await fnGetListAnnounce(1, 4);
  return (
    <div>
      <HeaderNews />
      <NewsBanner
        dataNew={data?.data?.data?.posts[data?.data?.data?.posts.length - 1]}
      />
      <InformationDisclosurePage    news={dataAnnounce?.data?.data?.announce}
        url="/tin-tuc/tin-dau-gia/"/>
    </div>
  );
};

export default CongBoThongTin;
