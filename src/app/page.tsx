"use client";
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

export default function HomePage() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div>
      <div className="relative pt-[90px] lg:pt-[79px] mx-auto bg-[linear-gradient(180deg,#0E1A0D_82%,#060B06_100%)] mt-[-15px]">
        <Banner />
      </div>
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
