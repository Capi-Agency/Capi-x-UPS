import AboutContent from "@/components/about-us/AboutContent";
import BannerAbout from "@/components/about-us/Banner-about";
import DirectorAbout from "@/components/about-us/DirectorAbout";
import ServiceAbout from "@/components/about-us/ServiceAbout";
import Support from "@/components/home/Support";

type Props = {};

const GioiThieu = (props: Props) => {
  return (
    <>
      {/* Banner Giới thiệu */}
      <BannerAbout />
      <AboutContent />
      <DirectorAbout />
      <ServiceAbout />
      <div className="mx-auto lg:max-w-[1440px]   ">
        <Support />
      </div>
    </>
  );
};

export default GioiThieu;
