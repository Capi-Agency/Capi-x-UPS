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

export default async function HomePage() {
  const data = await fnGetHomePage();
  const dataHome = data?.data?.data?.pages_by_id?.raw_content.sections;
  console.log(dataHome);

  return (
    <div>
      {/* {dataHome &&
        dataHome.map((datasection: any, index: number) => {
          return (
            <div key={index}>
              {datasection.section.type === "banner" && (
                <Banner bannerData={datasection.section} />
              )}
              {datasection.section.type === "slide quảng cáo" && (
                <SlideHome slideData={datasection.section} />
              )}
              {datasection.section.type === "congdong" && (
                <Content contentData={datasection.section} />
              )}
              {datasection.section.type === "udemy" && (
                <UdemyHome data={datasection.section} />
              )}
              {datasection.section.type === "3buoc" && (
                <UserManual data={datasection.section} />
              )}
              {datasection.section.type === "ungdung" && (
                <MobileApp data={datasection.section} />
              )}
            </div>
          );
        })} */}
      <Banner />
      <SlideHome />
      <Content />
      <UserManual />
      <MobileApp />
      <div className="custom-container">
        <Community />
        <Support />
      </div>
    </div>
  );
}
