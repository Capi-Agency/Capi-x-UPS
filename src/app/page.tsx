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
