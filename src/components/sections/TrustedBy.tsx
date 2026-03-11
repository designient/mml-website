import React from "react";

const logos = [
    "TechScale", "GrowthOS", "Finova", "Buildify", "NexGen", "ProServe",
    "CloudSync", "DataPulse", "UrbanCraft", "ScaleUp",
];

export function TrustedBy() {
    return (
        <section className="w-full bg-background py-14 md:py-20">
            <div className="max-w-7xl mx-auto px-6">
                <p className="font-body font-semibold text-xs text-text-muted text-center mb-10 uppercase tracking-[0.2em]">
                    Trusted by leading brands
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:gap-x-14">
                    {logos.map((logo, idx) => (
                        <span
                            key={idx}
                            className="font-display font-black text-2xl md:text-3xl text-text-primary/15 hover:text-text-primary/40 transition-colors duration-300 select-none cursor-default"
                        >
                            {logo}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
