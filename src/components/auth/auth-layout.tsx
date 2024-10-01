"use client";

import * as React from "react";

import NextImg from "@/components/common/next-img";

interface IProps {
	children: React.ReactNode;
}

export default function AuthLayout({ children }: IProps) {
	return (
		<div className="flex items-center justify-center w-full min-h-screen relative bg-[#1A1A25]">
			<div className="w-full h-full absolute z-10">
				<NextImg
					src="/assets/image/auth-bg.png"
					alt="Capi"
					objectFit="cover"
				/>
			</div>

			<div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<div className="w-full flex items-center justify-center">
					<div className="w-[170px] h-[60px] relative">
						<NextImg
							src="/assets/logo/logo.png"
							alt="Capi"
						/>
					</div>
				</div>

				<div className="mt-8">{children}</div>
			</div>
		</div>
	);
}
