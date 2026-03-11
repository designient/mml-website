import React from "react";

export interface PrimaryButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
}

export function PrimaryButton({
    children,
    className = "",
    href,
    ...props
}: PrimaryButtonProps) {
    const classes = `inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 rounded-xl bg-primary hover:bg-primary-hover hover:-translate-y-0.5 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background cursor-pointer ${className}`;

    if (href) {
        return (
            <a href={href} className={classes}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
