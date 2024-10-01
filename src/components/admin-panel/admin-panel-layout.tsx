"use client";

import { cn } from "@/lib/utils";
import { useStore } from "@/hooks/use-store";
import { Footer } from "@/components/admin-panel/footer";
import { Sidebar } from "@/components/admin-panel/sidebar";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";

export default function AdminPanelLayout({ children }: { children: React.ReactNode }) {
	const sidebar = useStore(useSidebarToggle, (state) => state);

	if (!sidebar) return null;

	return (
		<div className="bg-black">
			<Sidebar />
			<main
				className={cn(
					"min-h-[calc(100vh)] bg-black transition-[margin-left] ease-in-out duration-300",
					sidebar?.isOpen === false ? "lg:ml-[100px]" : "lg:ml-[300px]"
				)}
			>
				{children}
			</main>
			{/* <footer
				className={cn(
					"transition-[margin-left] ease-in-out duration-300",
					sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
				)}
			>
				<Footer />
			</footer> */}
		</div>
	);
}
