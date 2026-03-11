"use client";

import React from "react";

const keywords = [
    "SEO", "Branding", "Web Development", "Mobile Apps",
    "UI/UX Design", "Ecommerce", "WordPress", "Performance Marketing",
    "Social Media", "Digital Strategy", "Content Marketing", "PPC",
];

export function Marquee() {
    return (
        <section className="w-full bg-background py-6 overflow-hidden border-y border-border">
            <div className="relative flex">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...keywords, ...keywords].map((keyword, idx) => (
                        <span key={idx} className="flex items-center">
                            <span className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary/8 mx-4 md:mx-6">
                                {keyword}
                            </span>
                            <span className="text-text-primary/10 text-2xl mx-2">·</span>
                        </span>
                    ))}
                </div>
                <div className="flex animate-marquee2 whitespace-nowrap absolute top-0">
                    {[...keywords, ...keywords].map((keyword, idx) => (
                        <span key={idx} className="flex items-center">
                            <span className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary/8 mx-4 md:mx-6">
                                {keyword}
                            </span>
                            <span className="text-text-primary/10 text-2xl mx-2">·</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
