import AboutContent from '@/components/about-us/AboutContent';
import BannerAbout from '@/components/about-us/Banner-about';
import Chungchi from '@/components/about-us/Chungchi';
import CoreValue from '@/components/about-us/CoreValue';
import DirectorAbout from '@/components/about-us/DirectorAbout';
import ServiceAbout from '@/components/about-us/ServiceAbout';
import Support from '@/components/home/Support';
import { fnGetPage } from '@/services/page';

type Props = {};

const GioiThieu = async () => {
  const data = await fnGetPage('ve-chung-toi-L7');
  const dataAbout = data?.data?.data?.pages_by_id?.raw_content;

  return (
    <>
      {/* Banner Giới thiệu */}
      {dataAbout &&
        dataAbout?.contents.map((datasection: any, index: number) => {
          return (
            <div key={index}>
              {datasection.banner && <BannerAbout data={datasection.banner} />}
              {datasection.tam_nhin && (
                <AboutContent data={datasection.tam_nhin} />
              )}
              {datasection.gia_tri_cot_loi && (
                <CoreValue data={datasection.gia_tri_cot_loi} />
              )}
              {datasection.ban_dieu_hanh && (
                <DirectorAbout data={datasection.ban_dieu_hanh} />
              )}
              {datasection.dich_vu && (
                <ServiceAbout data={datasection.dich_vu} />
              )}
              {datasection.chung_chi && (
                <Chungchi data={datasection.chung_chi} />
              )}
              {datasection.ups_question && (
                <Support data={datasection.ups_question} />
              )}
            </div>
          );
        })}
    </>
  );
};

export default GioiThieu;
