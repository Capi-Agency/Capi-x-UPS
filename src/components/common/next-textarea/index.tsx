import * as React from "react";

import { cn } from "@/lib/utils";

import { Textarea } from "@/components/ui/textarea";

export interface NextTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const NextTextarea = React.forwardRef<HTMLTextAreaElement, NextTextareaProps>(({ className, ...props }, ref) => {
	return (
		<Textarea
			className={cn(
				"rounded-lg border-input shadow-none placeholder:text-[#D2D2D2] placeholder:text-sm placeholder:font-extralight focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0",
				className
			)}
			{...props}
			ref={ref}
		/>
	);
});

export { NextTextarea };
