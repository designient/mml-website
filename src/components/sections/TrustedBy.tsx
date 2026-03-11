"use client";

import React from "react";

const logos = [
    "TechScale", "GrowthOS", "Finova", "Buildify", "NexGen", "ProServe",
    "CloudSync", "DataPulse", "UrbanCraft", "ScaleUp",
];

export function TrustedBy() {
    return (
        <section className="w-full bg-background py-14 md:py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-10">
                <p className="font-body font-semibold text-xs text-text-muted text-center uppercase tracking-[0.2em]">
                    Trusted by leading brands
                </p>
            </div>
            <div className="relative flex">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...logos, ...logos].map((logo, idx) => (
                        <span key={idx} className="flex items-center">
                            <span className="font-display font-black text-2xl md:text-3xl text-text-primary/15 mx-6 md:mx-10 select-none">
                                {logo}
                            </span>
                            <span className="text-text-primary/10 text-lg mx-1">·</span>
                        </span>
                    ))}
                </div>
                <div className="flex animate-marquee2 whitespace-nowrap absolute top-0">
                    {[...logos, ...logos].map((logo, idx) => (
                        <span key={idx} className="flex items-center">
                            <span className="font-display font-black text-2xl md:text-3xl text-text-primary/15 mx-6 md:mx-10 select-none">
                                {logo}
                            </span>
                            <span className="text-text-primary/10 text-lg mx-1">·</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
