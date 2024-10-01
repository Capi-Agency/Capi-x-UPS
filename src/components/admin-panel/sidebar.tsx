import Link from "next/link";
import { PanelsTopLeft } from "lucide-react";

import { cn } from "@/lib/utils";
import { SETTINGS } from "@/utils/settings";
import { useStore } from "@/hooks/use-store";
import { Button } from "@/components/ui/button";
import { Menu } from "@/components/admin-panel/menu";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { SidebarToggle } from "@/components/admin-panel/sidebar-toggle";
import NextImg from "../common/next-img";
import { BootNPC } from "./boot-npc";

export function Sidebar() {
	const sidebar = useStore(useSidebarToggle, (state) => state);

	if (!sidebar) return null;

	return (
		<aside
			className={cn(
				"fixed top-3 left-2 bottom-3 z-20 h-[calc(100vh-24px)] -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300 bg-[#1D1D1F] rounded-[28px]",
				sidebar?.isOpen === false ? "w-[90px]" : "w-72"
			)}
		>
			{/* <SidebarToggle
				isOpen={sidebar?.isOpen}
				setIsOpen={sidebar?.setIsOpen}
			/> */}
			<div className="relative p-3 overflow-y-auto shadow-md">
				<div className="relative p-4 overflow-y-auto shadow-md bg-black rounded-[20px]">
					<Button
						className={cn(
							"transition-transform ease-in-out duration-300 mb-8 justify-start",
							sidebar?.isOpen === false ? "translate-x-1" : "translate-x-0"
						)}
						variant="link"
						asChild
					>
						<Link
							href="/dashboard"
							className="w-full flex items-center "
						>
							<span className="inline-flex relative w-[106px] h-[38px]">
								<NextImg
									src="/assets/logo/logo.png"
									alt="Capi"
								/>
							</span>
						</Link>
					</Button>
					{/* menu */}
					<Menu isOpen={sidebar?.isOpen} />
					{/* boss npc */}
					<BootNPC />
				</div>
			</div>
		</aside>
	);
}
