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
