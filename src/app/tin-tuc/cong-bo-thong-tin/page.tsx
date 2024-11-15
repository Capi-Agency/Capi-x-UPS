import HeaderNews from '@/components/news/HeaderNews';
import InformationDisclosurePage from '@/components/news/InformationDisclosurePage';
import NewsBanner from '@/components/news/NewsBanner';

type Props = {};

const CongBoThongTin = (props: Props) => {
  return (
    <div>
      <HeaderNews />
      <NewsBanner />
      <InformationDisclosurePage />
    </div>
  );
};

export default CongBoThongTin;
