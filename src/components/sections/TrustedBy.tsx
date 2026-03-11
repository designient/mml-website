import React from "react";

export function TrustedBy() {
    const logos = [
        "TechScale",
        "GrowthOS",
        "Finova",
        "Buildify",
        "NexGen",
        "ProServe",
    ];

    return (
        <section className="w-full bg-background py-12 md:py-16 border-b border-border">
            <div className="max-w-7xl mx-auto px-6">
                <p className="font-body text-sm text-text-muted text-center mb-8 uppercase tracking-[0.15em]">
                    Trusted by ambitious brands
                </p>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
                    {logos.map((logo, idx) => (
                        <span
                            key={idx}
                            className="font-heading font-bold text-xl text-text-muted/40 hover:text-text-muted/70 transition-colors duration-300"
                        >
                            {logo}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
