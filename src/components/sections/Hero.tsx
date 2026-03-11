"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

const brandLogos = [
    "TechScale", "GrowthOS", "Finova", "Buildify", "NexGen", "ProServe",
    "CloudSync", "DataPulse", "UrbanCraft", "ScaleUp",
];

export function Hero() {
    return (
        <section className="relative w-full bg-background overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 pt-20 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20 flex flex-col items-center text-center">
                {/* Pill badge */}
                <span className="inline-flex items-center gap-2 font-body font-semibold text-xs tracking-wide text-text-primary bg-text-primary/8 px-5 py-2.5 rounded-full mb-10 md:mb-14">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Best Digital Marketing Agency in Bangalore
                </span>

                {/* Giant display heading with inline image */}
                <h1 className="font-display font-black text-[clamp(2.4rem,6.5vw,5rem)] leading-[1.08] tracking-[-0.02em] text-text-primary mb-8 max-w-[900px]">
                    We help brands{" "}
                    <span className="relative inline-block">
                        <span className="text-primary italic">grow</span>
                        <svg className="absolute -bottom-1 left-0 w-full h-3 text-primary/25" viewBox="0 0 200 12" preserveAspectRatio="none">
                            <path d="M0 8 Q50 0 100 6 Q150 12 200 4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </span>{" "}
                    with{" "}
                    {/* Inline image — like Goody Bag's inline circular images in heading */}
                    <span className="inline-flex items-center align-middle mx-1">
                        <span className="inline-block w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden border-3 border-primary/20 shadow-lg shadow-primary/10 relative -top-1">
                            <img
                                src="/case-study-1.jpg"
                                alt="Case study"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    target.parentElement!.classList.add('bg-gradient-to-br', 'from-primary/30', 'to-primary/10');
                                }}
                            />
                        </span>
                    </span>{" "}
                    strategy that delivers real results
                </h1>

                {/* Subtitle */}
                <p className="font-body text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-12">
                    We partner with ambitious companies to build compounding growth systems
                    across SEO, performance marketing, web development, and branding.
                </p>

                {/* Single CTA — pill with arrow-up-right like the reference */}
                <Link
                    href="/contact-us/"
                    className="inline-flex items-center gap-3 font-body font-bold text-[15px] bg-text-primary text-white pl-8 pr-3 py-3.5 rounded-full hover:bg-primary transition-colors duration-300 group mb-20 md:mb-24"
                >
                    Start Your Growth Journey
                    <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                        <ArrowUpRightIcon className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                </Link>

                {/* Trusted brand logos — grayscale wordmarks like the reference */}
                <div className="w-full">
                    <p className="font-body font-semibold text-xs text-text-muted uppercase tracking-[0.2em] mb-8">
                        Trusted by leading brands
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
                        {brandLogos.map((logo, idx) => (
                            <span
                                key={idx}
                                className="font-display font-black text-xl md:text-2xl text-text-primary/20 hover:text-text-primary/50 transition-colors duration-300 select-none"
                            >
                                {logo}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
