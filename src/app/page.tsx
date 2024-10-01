import Link from "next/link";
import Image from "next/image";
import Banner from "@/components/home/Banner";
import SlideHome from "@/components/home/SlideHome";
import Content from "@/components/home/Content";

export default function HomePage() {
  return (
    <div>
      <div className="relative  pt-16 mx-auto sm:max-w-xl md:max-w-full bg-[linear-gradient(180deg,#0E1A0D_82%,#060B06_100%)]">
        <Banner />
      </div>
      <SlideHome />
	  <Content/>
    </div>
  );
}
