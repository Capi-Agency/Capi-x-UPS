"use client";

import * as React from "react";
import Link from "next/link";
import { Ellipsis, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { getMenuList } from "@/lib/menu-list";
import { SETTINGS } from "@/utils/settings";
import NextImg from "@/components/common/next-img";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CollapseMenuButton } from "@/components/admin-panel/collapse-menu-button";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { BootNPC } from "./boot-npc";

interface MenuProps {
	isOpen: boolean | undefined;
}

export function Menu({ isOpen }: MenuProps) {
	const pathname = usePathname();
	const menuList = getMenuList(pathname);

	return (
		<React.Fragment>
			<ScrollArea className="[&>div>div[style]]:!block">
				<nav className="mt-0 h-full w-full">
					<ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-24px-128px)] max-h-[calc(100vh-24px-128px-90px)] items-start space-y-1">
						{menuList.map(({ groupLabel, menus }, index) => (
							<li
								className={cn("w-full", groupLabel ? "pt-5" : "")}
								key={index}
							>
								{(isOpen && groupLabel) || isOpen === undefined ? (
									<p className="text-sm font-medium px-4 pb-2 pl-0 max-w-[248px] truncate uppercase text-[#6B6A6F]">
										{groupLabel}
									</p>
								) : !isOpen && isOpen !== undefined && groupLabel ? (
									<TooltipProvider>
										<Tooltip delayDuration={100}>
											<TooltipTrigger className="w-full">
												<div className="w-full flex justify-center items-center">
													<Ellipsis className="h-5 w-5" />
												</div>
											</TooltipTrigger>
											<TooltipContent side="right">
												<p>{groupLabel}</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								) : (
									<p className="pb-2"></p>
								)}
								{menus.map(({ href, label, icon, active, submenus }, index) =>
									submenus.length === 0 ? (
										<div
											className="w-full"
											key={index}
										>
											<TooltipProvider disableHoverableContent>
												<Tooltip delayDuration={100}>
													<TooltipTrigger asChild>
														<Button
															className={cn(
																"w-full justify-start h-12 mb-1 text-white rounded-[10px]",
																active ? "bg-[#2F3136]" : "bg-transparent"
															)}
															asChild
														>
															<Link href={href}>
																<span
																	className={cn(
																		isOpen === false
																			? ""
																			: "mr-4 inline-flex relative w-5 h-5"
																	)}
																>
																	<NextImg
																		src={icon}
																		alt={label}
																		objectFit="cover"
																	/>
																</span>
																<p
																	className={cn(
																		"max-w-[200px] truncate text-sm",
																		isOpen === false
																			? "-translate-x-96 opacity-0"
																			: "translate-x-0 opacity-100"
																	)}
																>
																	{label}
																</p>
															</Link>
														</Button>
													</TooltipTrigger>
													{isOpen === false && (
														<TooltipContent side="right">{label}</TooltipContent>
													)}
												</Tooltip>
											</TooltipProvider>
										</div>
									) : (
										<div
											className="w-full"
											key={index}
										>
											<CollapseMenuButton
												icon={icon}
												label={label}
												active={active}
												submenus={submenus}
												isOpen={isOpen}
											/>
										</div>
									)
								)}
							</li>
						))}
					</ul>
				</nav>
			</ScrollArea>
		</React.Fragment>
	);
}
