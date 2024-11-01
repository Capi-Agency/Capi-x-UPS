import Banner from "@/components/home/Banner";
import SlideHome from "@/components/home/SlideHome";
import Content from "@/components/home/Content";
import UserManual from "@/components/home/UserManual";
import MobileApp from "@/components/home/MobileApp";
import Community from "@/components/home/Community";
import Support from "@/components/home/Support";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { fnGetHomePage } from "@/services/page";

export default async function HomePage() {
  const data = await fnGetHomePage();
  console.log(data.data?.data?.pages_by_id?.raw_content);
  return (
    <div>
      {data?.data?.data?.pages_by_id?.raw_content&&data?.data?.data?.pages_by_id?.raw_content?.sections.map((datasection:any,index:any)=>{
        return (
          <div key={index}>
            {datasection.section.type === 'banner' && <Banner bannerData={datasection.section} />}
            {datasection.section.type === 'slide quảng cáo' && <SlideHome slideData={datasection.section} />}
            {/* {datasection.section_type === 'content' && <Content contentData={datasection} />} */}
            {/* {datasection.section_type === 'user_manual' && <UserManual manualData={datasection} />} */}
            {/* {datasection.section_type === 'mobile_app' && <MobileApp appData={datasection} />} */}
            {/* {datasection.section_type === 'community' && <Community communityData={datasection} />} */}
            {/* {datasection.section_type === 'support' && <Support supportData={datasection} />} */}
          </div>
        )
      }) }
      {/* <Banner bannerData={data.data?.data?.pages_by_id?.raw_content}/> */}
      {/* <SlideHome /> */}
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
