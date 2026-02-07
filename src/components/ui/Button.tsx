"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50 active:scale-95",
    {
        variants: {
            variant: {
                default:
                    "bg-gold text-deep-navy shadow hover:bg-gold-light hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]",
                outline:
                    "border border-gold text-gold bg-transparent hover:bg-gold/10 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]",
                ghost: "hover:bg-gold/10 text-gold",
                neon: "bg-transparent border border-neon-cyan text-neon-cyan shadow-[0_0_10px_rgba(6,182,212,0.3)] hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]",
                link: "text-gold underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-6 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-14 rounded-md px-10 text-lg",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
