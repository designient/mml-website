import React from "react";

export interface SecondaryButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
}

export function SecondaryButton({
    children,
    className = "",
    href,
    ...props
}: SecondaryButtonProps) {
    const classes = `inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold transition-all duration-300 rounded-xl border-2 border-primary text-primary hover:bg-primary-soft hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background cursor-pointer ${className}`;

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
