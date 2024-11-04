import AboutContent from '@/components/about-us/AboutContent';
import BannerAbout from '@/components/about-us/Banner-about';
import DirectorAbout from '@/components/about-us/DirectorAbout';
import ServiceAbout from '@/components/about-us/ServiceAbout';
import Support from '@/components/home/Support';
import { fnGetPage } from '@/services/page';

type Props = {};

const GioiThieu = async () => {
  const data = await fnGetPage('ve-chung-toi-L7');
  const dataAbout = data?.data?.data?.pages_by_id?.raw_content;
  console.log(dataAbout);

  return (
    <>
      {/* Banner Giới thiệu */}
      {/* {dataAbout &&
        dataAbout?.map((datasection: any, index: number) => {
          return (
            <div key={index}>
              {datasection.section.type === "banner" && (
                <BannerAbout data={datasection.section} />
              )}
              {datasection.section.type === "tầm nhìn" && (
                <VisionAbout data={datasection.section} />
              )}
              {datasection.section.type === "giá trị cốt lõi" && (
                <CoreValueAbout data={datasection.section} />
              )}
              {datasection.section.type === "ban điều hành" && (
                <DirectorAbout data={datasection.section} />
              )}
              {datasection.section.type === "dịch vụ" && (
                <ServiceAbout data={datasection.section} />
              )}
            </div>
          );
        })} */}
      <BannerAbout />
      <AboutContent />
      <DirectorAbout />
      <ServiceAbout />
      <div className="custom-container">
        <Support />
      </div>
    </>
  );
};

export default GioiThieu;
