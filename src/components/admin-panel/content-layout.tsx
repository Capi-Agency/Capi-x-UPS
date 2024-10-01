import { Navbar } from "@/components/admin-panel/navbar";

interface ContentLayoutProps {
	children: React.ReactNode;
}

export function ContentLayout({ children }: ContentLayoutProps) {
	return (
		<div>
			{/* <Navbar title={title} /> */}
			<div className="w-full py-3 sm:px-3">{children}</div>
		</div>
	);
}
