"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export interface NextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const NextInput = React.forwardRef<HTMLInputElement, NextInputProps>(({ className, type, ...props }, ref) => {
	return (
		<Input
			type={type}
			className={cn(
				"flex h-10 w-full rounded-lg px-3 py-2 text-sm shadow-none transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#D2D2D2] placeholder:text-sm placeholder:font-light focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-transparent disabled:cursor-not-allowed disabled:opacity-50",
				className
			)}
			ref={ref}
			{...props}
		/>
	);
});
NextInput.displayName = "NextInput";

export { NextInput };
