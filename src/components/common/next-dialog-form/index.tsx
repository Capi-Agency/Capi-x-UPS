"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import NextImg from "../next-img";

interface NextDialogFormProps {
	open: any;
	loading?: boolean;
	title: String;
	trigger: React.ReactNode;
	children: React.ReactNode;
	className?: String;
	onToggle: React.Dispatch<React.SetStateAction<boolean>>;
	onSuccess: () => void;
}

export default function NextDialogForm({
	open,
	loading = false,
	title,
	trigger,
	children,
	className,
	onToggle,
	onSuccess,
}: NextDialogFormProps) {
	return (
		<Dialog
			open={open}
			onOpenChange={onToggle}
		>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent className={cn("px-3 py-4 sm:rounded-3xl bg-[#f4f4f4]", className)}>
				<DialogHeader className="px-4 flex flex-row items-center justify-between relative z-[99] bg-[#f4f4f4]">
					<DialogTitle className="text-xl">{title}</DialogTitle>

					<div className="flex gap-2">
						<DialogTrigger asChild>
							<Button
								variant="link"
								className="px-4 py-3 h-11 rounded-full text-sm bg-transparent uppercase underline text-black font-medium"
							>
								Đóng
							</Button>
						</DialogTrigger>

						<Button
							className="px-4 py-3 min-w-[160px] h-11 rounded-full disabled:opacity-75"
							onClick={onSuccess}
							disabled={loading}
						>
							{loading ? (
								<div className="relative w-5 h-5 animate-spin">
									<NextImg
										src="/assets/icons/loading-btn.svg"
										alt="Capi"
									/>
								</div>
							) : (
								<React.Fragment>
									<i>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
										>
											<path
												d="M10.8359 5V15M15.8359 10L5.83594 10"
												stroke="white"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</i>
									<p className="ml-2 text-sm uppercase text-white font-light">Tạo nhiệm vụ</p>
								</React.Fragment>
							)}
						</Button>
					</div>
				</DialogHeader>
				<React.Fragment>{children}</React.Fragment>
			</DialogContent>
		</Dialog>
	);
}
