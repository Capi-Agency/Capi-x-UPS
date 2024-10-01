import Link from "next/link";
import Image from "next/image";
import Banner from "@/components/home/Banner";

export default function HomePage() {
	return (
		<div className="relative  pt-16 mx-auto sm:max-w-xl md:max-w-full bg-[linear-gradient(180deg,#0E1A0D_82%,#060B06_100%)]">
			<Banner/>
		</div>
	);
}
