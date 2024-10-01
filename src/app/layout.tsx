import type { Metadata } from "next";

import "./globals.css";

import { ThemeProvider } from "@/providers/theme-provider";
import { SETTINGS } from "@/utils/settings";
import TheHeader from "@/components/common/the-header/page";
import TheFooter from "@/components/common/the-footer/page";

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.APP_URL
			? `${process.env.APP_URL}`
			: process.env.VERCEL_URL
			? `https://${process.env.VERCEL_URL}`
			: `http://localhost:${process.env.PORT || 3000}`
	),
	title: SETTINGS.GENERAL.NAME_PROJECT,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					<TheHeader/>
					{children}
					<TheFooter/>
				</ThemeProvider>
			</body>
		</html>
	);
}
