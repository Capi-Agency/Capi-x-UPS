"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { useEffect, useRef, useState } from "react";

import { Ellipsis, Check } from "lucide-react";
import NextImg from "../next-img";
import { SETTINGS } from "@/utils/settings";

interface CardTaskProps {}

export function CardTask({}: CardTaskProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [width, setWidth] = useState(0);

	useEffect(() => {
		if (ref) {
			setWidth(ref.current?.offsetWidth as number);
		}
	}, [ref]);

	return (
		<div className="w-full h-[160px] p-3 bg-white rounded-[16px] relative">
			{/* task status */}
			<div className="absolute w-max h-8 top-2 left-3">
				<div className="w-full h-full flex items-center">
					<div className="px-2 py-1 font-medium text-xs text-white bg-[#EF2727] rounded-lg">🚀 Khẩn</div>
				</div>
			</div>

			{/* task action */}
			<div
				ref={ref}
				className={cn(
					`absolute grid place-items-center min-w-min h-10 bg-[#f4f4f4] inset-auto bottom-[calc(100%-40px)]  right-0 rounded-bl-[16px] transition-[inset] duration-1000 ease-in-out delay-500 before:content-[''] before:absolute before:w-5 before:h-5 before:bg-transparent before:inset-auto before:top-[0] before:left-[-40px] before:translate-x-[100%] before:rounded-br-[16px] 
			        before:shadow-[4px_4px_0_4px_#f4f4f4] before:rotate-[270deg] before:transition-[inset] before:duration-1000 before:ease-in-out after:content-[''] after:absolute after:w-5 after:h-5 after:bg-transparent after:bottom-[-20px] after:right-[-20px] after:translate-x-[-100%] after:rounded-br-[16px] after:shadow-[4px_4px_0_4px_#f4f4f4] after:transition-[inset] after:rotate-[270deg] after:duration-1000 after:ease-in-out`
				)}
			>
				<div className="w-[calc(100%)] h-8 z-[1] flex gap-1 items-center px-1">
					<div
						className={cn(
							"min-w-8 h-full  flex gap-2 items-center justify-center rounded-full cursor-pointer bg-gradient-to-br from-[#52C01F] to-[#2DCA61]"
							// "px-3"
						)}
					>
						<div className="w-5 h-5 relative">
							<NextImg
								src="/assets/icons/check.svg"
								alt="Capi"
							/>
						</div>

						{/* <p className="text-sm font-medium">
							<span className="text-white">100</span>
							<span className="text-black">/120 phút</span>
						</p> */}
					</div>
					{/* <div
						className={cn(
							"min-w-8 h-full flex gap-2 items-center justify-center rounded-full cursor-pointer bg-[#383838]",
							"px-3"
						)}
					>
						<div className="w-5 h-5 relative">
							<NextImg
								src="/assets/icons/play.svg"
								alt="Capi"
							/>
						</div>

						<p className="text-sm font-medium text-white">{SETTINGS.GENERAL.TEXT_START}</p>
					</div> */}

					<div className="w-8 h-full flex items-center justify-center bg-[#E2E2E2] rounded-full cursor-pointer">
						<Ellipsis size={18} />
					</div>
				</div>
			</div>

			{/* task content */}
			<div className="w-full h-[calc(100%-32px)] mt-9">
				<h4
					title="Xây dựng màn hình Đăng nhập và đăng ký thành công0"
					className="text-sm font-medium line-clamp-2"
				>
					Xây dựng màn hình Đăng nhập và đăng ký thành công
				</h4>
				<p
					title="Tạo màn hình đăng nhập với luồng nghiệp v..."
					className="text-xs font-medium line-clamp-1 mt-1 text-[#878787]"
				>
					Tạo màn hình đăng nhập với luồng nghiệp v...
				</p>

				<div className="flex items-center justify-between mt-3">
					<div className="flex gap-1 items-center">
						<div className="w-7 h-7 relative rounded-full overflow-hidden">
							<NextImg
								src="/assets/image/d9b3b6fd3b18c38a774b291c8786db58.png"
								alt="Capi"
								objectFit="cover"
							/>
						</div>

						<div className="w-4 h-2 relative">
							<NextImg
								alt="Capi"
								src="/assets/icons/arrow-1.svg"
							/>
						</div>

						<div className="w-7 h-7 relative rounded-full overflow-hidden border border-[#0094FF]">
							<NextImg
								src="/assets/image/d9b3b6fd3b18c38a774b291c8786db58.png"
								alt="Capi"
								objectFit="cover"
							/>
						</div>
					</div>

					<div className="flex gap-4 items-center">
						<div className="flex gap-1 items-center">
							<div className="w-4 h-4 relative">
								<NextImg
									alt="Capi"
									src="/assets/icons/attachment.svg"
								/>
							</div>

							<p className="text-xs text-[#878787]">x1</p>
						</div>

						<div className="flex gap-1 items-center">
							<div className="w-4 h-4 relative">
								<NextImg
									alt="Capi"
									src="/assets/icons/clock-circle.svg"
								/>
							</div>

							<p className="text-xs text-[#878787]">23/7/2024</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
