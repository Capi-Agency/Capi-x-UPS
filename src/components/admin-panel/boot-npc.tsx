"use client";

import NextImg from "../common/next-img";

import { SETTINGS } from "@/utils/settings";

interface BootNPCProps {}

export function BootNPC({}: BootNPCProps) {
	return (
		<div className="w-[calc(100%-24px)] h-[90px] fixed bottom-3 left-3 right-0">
			<div className="w-full h-full relative">
				<div className="w-full h-full rounded-[20px] bg-white overflow-hidden">
					<div className="w-full h-full flex items-center justify-between relative">
						<div className="relative w-[73px] h-full ml-8 translate-y-[30%] scale-[2] overflow-hidden">
							<NextImg
								src="/assets/image/5f34dc24ed9c575d812f4cbb8677c47e.png"
								alt="Capi"
								objectFit="contain"
							/>
						</div>
						<div className="w-full">
							<div className="flex items-center gap-2">
								<div className="w-2 h-2 bg-[#65DE78] rounded-full"></div>
								<p className="font-semibold text-2xl">
									<span className="text-[#0094FF]">Hex</span>
									<span>onia</span>
								</p>
							</div>
							<p className="text-xs text-[#878787] italic">{SETTINGS.GENERAL.KEYBOARD_TEXT}</p>
						</div>
					</div>
				</div>

				{/* boot mess */}
				<div className="absolute left-3 -top-20">
					<div className="relative">
						<div className="w-[calc(100%-12px)] px-3 py-2 bg-[#FFEA6C] rounded-md text-xs text-[#5F461E]">
							{SETTINGS.GENERAL.BOOT_HELLO}
						</div>
					</div>
				</div>

				{/* boot npc */}
				<div className="absolute -top-[6px] right-5 w-10 h-10">
					<div className="relative w-full h-full">
						<NextImg
							src="/assets/image/6949b947c1aa448e9b8f18f8df30482d.png"
							alt="Capi"
						/>
						<p className="absolute z-10 text-white text-[10px] left-1/2 -translate-x-1/2 top-[40%] -translate-y-[40%]">
							{SETTINGS.GENERAL.BOOT}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
