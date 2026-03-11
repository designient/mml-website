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
                <span className="font-heading font-semibold text-sm text-primary uppercase tracking-wide mb-4 block">
                    {eyebrow}
                </span>
            )}
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-6 leading-tight">
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
