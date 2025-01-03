import Banner from '@/components/home/Banner';
import SlideHome from '@/components/home/SlideHome';
import Content from '@/components/home/Content';
import UserManual from '@/components/home/UserManual';
import MobileApp from '@/components/home/MobileApp';
import Community from '@/components/home/Community';
import Support from '@/components/home/Support';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { fnGetHomePage } from '@/services/page';
import UdemyHome from '@/components/home/Udemy';
import { Metadata, ResolvingMetadata } from 'next';
import { getStock } from '@/services/stock';

export default async function HomePage() {
  const data = await fnGetHomePage();
  const stocks = await getStock();
  const dataHome = data?.data?.data?.pages_by_id?.raw_content;

  return (
    <div>
      {dataHome &&
        dataHome?.contents.map((datasection: any, index: number) => {
          return (
            <div key={index}>
              {datasection.banner && (
                <Banner data={datasection.banner} stocks={stocks} />
              )}
              {datasection.ads_images && (
                <SlideHome data={datasection.ads_images} />
              )}
              {datasection.section_ups_about && (
                <Content data={datasection.section_ups_about} />
              )}
              {datasection.ups_academy && (
                <UdemyHome data={datasection.ups_academy} />
              )}
              {datasection.ups_hdsd && (
                <UserManual data={datasection.ups_hdsd} />
              )}
              {datasection.mobile_app && (
                <MobileApp data={datasection.mobile_app} />
              )}
              {datasection.ups_cong_dong && (
                <Community data={datasection.ups_cong_dong} />
              )}
              {datasection.ups_question && (
                <Support data={datasection.ups_question} />
              )}
            </div>
          );
        })}
    </div>
  );
}
export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  return {
    title: 'Trang chủ UPS',
    description: 'Công ty Cổ phần Chứng khoán UP',
    openGraph: {
      images: ['/assets/icons/logo-bt.svg'],
    },
  };
}
