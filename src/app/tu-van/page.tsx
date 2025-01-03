import BannerAdvise from '@/components/advise/BannerAdvise';
import ContactAdvise from '@/components/advise/ContactAdvise';
import EvaluateAdvise from '@/components/advise/EvaluateAdvise';
import LogoAdvise from '@/components/advise/LogoAdvise';
import ServiceAdvise from '@/components/advise/ServiceAdvise';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {};

const AdvisePage = (props: Props) => {
  return (
    <div>
      <BannerAdvise />
      <ServiceAdvise />
      <ContactAdvise />
      <EvaluateAdvise />
      <LogoAdvise />
    </div>
  );
};

export default AdvisePage;
export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  return {
    title: 'Tư vấn UPS',
    description:
      'Với mạng lưới quan hệ rộng lớn, UPS có khả năng tìm kiếm nhà đầu tư tiềm năng cho doanh nghiệp, giúp tổ chức bán cổ phần ra bên ngoài qua phương thức đấu giá.',
    openGraph: {
      images: ['/assets/icons/logo-bt.svg'],
    },
  };
}
