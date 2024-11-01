import AboutContent from "@/components/about-us/AboutContent";
import BannerAbout from "@/components/about-us/Banner-about";
import DirectorAbout from "@/components/about-us/DirectorAbout";
import ServiceAbout from "@/components/about-us/ServiceAbout";
import Support from "@/components/home/Support";
import { fnGetPage } from "@/services/page";

type Props = {};

 const GioiThieu = async() => {
  const data = await fnGetPage('ve-chung-toi-L7')
    console.log(data?.data?.data?.pages_by_id?.raw_content);
    
  return (
    <>
      {/* Banner Giới thiệu */}
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
