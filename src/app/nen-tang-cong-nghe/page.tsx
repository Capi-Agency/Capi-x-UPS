import BannerTech from '@/components/technology/BannerTech';
import ContentTech from '@/components/technology/ContentTech';
import PartnerTech from '@/components/technology/PartnerTech';
import ReviewTech from '@/components/technology/ReviewTech';
import ServiceTech from '@/components/technology/ServiceTech';
import Technology from '@/components/technology/Technology';
import { fnGetPage } from '@/services/page';
import React from 'react';

type Props = {};

const TechnologyPlatform = async (props: Props) => {
  const data = await fnGetPage('nen-tang-cong-nghe-vuot-troi-6X');
  const dataTech = data?.data?.data?.pages_by_id?.raw_content;
  return (
    <div>
      {dataTech &&
        dataTech?.contents.map((datasection: any, index: number) => {
          return (
            <div key={index}>
              {datasection.banner && <BannerTech data={datasection.banner} />}
              {datasection.gioi_thieu_ung_dung && (
                <ContentTech data={datasection.gioi_thieu_ung_dung} />
              )}
              {datasection.cong_nghe && (
                <Technology data={datasection.cong_nghe} />
              )}
              {datasection.section_service && (
                <ServiceTech data={datasection.section_service} />
              )}
              {datasection.danh_gia && (
                <ReviewTech data={datasection.danh_gia} />
              )}
              {datasection.doi_tac && (
                <PartnerTech data={datasection.doi_tac} />
              )}
            </div>
          );
        })}
    </div>
  );
};

export default TechnologyPlatform;
