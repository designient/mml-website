import React from "react";

interface SectionHeaderProps {
    eyebrow?: string;
    title: string;
    description?: string;
    centered?: boolean;
    className?: string;
}

export function SectionHeader({
    eyebrow,
    title,
    description,
    centered = false,
    className = "",
}: SectionHeaderProps) {
    return (
        <div
            className={`${centered ? "text-center max-w-3xl mx-auto" : "max-w-3xl"} mb-16 ${className}`}
        >
            {eyebrow && (
                <span className="inline-flex items-center font-body font-semibold text-xs text-text-primary bg-text-primary/8 px-4 py-2 rounded-full mb-6 uppercase tracking-[0.12em]">
                    {eyebrow}
                </span>
            )}
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-[3.25rem] text-text-primary mb-6 leading-[1.1] tracking-tight">
                {title}
            </h2>
            {description && (
                <p className="font-body text-lg text-text-secondary leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
}
