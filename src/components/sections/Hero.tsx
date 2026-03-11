import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

export function Hero() {
    return (
        <section className="relative w-full bg-dark-background overflow-hidden">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 py-20 md:py-24 lg:py-28 flex flex-col lg:flex-row items-start gap-16 lg:gap-20">
                {/* Left Content — 55% */}
                <div className="w-full lg:w-[55%] z-10 flex flex-col items-start">
                    <span className="font-body text-xs font-medium text-primary uppercase tracking-[0.2em] mb-8">
                        Digital Growth Agency · Bengaluru
                    </span>

                    <h1 className="font-heading font-bold text-[40px] md:text-[56px] xl:text-[68px] text-white leading-[1.08] tracking-tight mb-8">
                        Strategic Digital <span className="text-primary">Growth</span> for
                        Ambitious Brands.
                    </h1>

                    <p className="font-body text-lg md:text-xl text-white/70 max-w-lg mb-10 leading-[1.7]">
                        We partner with B2B companies to build compounding growth systems
                        across marketing, design, web, branding, and product experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start gap-4 mb-14">
                        <PrimaryButton
                            href="/contact-us/"
                            className="text-base px-7 py-3.5 flex items-center justify-center gap-2.5 group"
                        >
                            Book a Strategy Call
                            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </PrimaryButton>
                        <SecondaryButton
                            href="/case-study/"
                            className="text-base px-7 py-3.5 border-white/25 text-white hover:bg-white/10 flex items-center justify-center transition-all duration-300"
                        >
                            View Case Studies
                        </SecondaryButton>
                    </div>

                    {/* Trust Metrics */}
                    <div className="flex flex-wrap sm:flex-nowrap items-end gap-8 sm:gap-10 border-t border-white/10 pt-8 w-full">
                        <div className="flex flex-col">
                            <span className="font-heading font-bold text-3xl md:text-4xl text-white tracking-tight">
                                50+
                            </span>
                            <span className="font-body text-[11px] text-white/60 uppercase tracking-[0.15em] mt-2">
                                Brands Scaled
                            </span>
                        </div>
                        <div className="hidden sm:block w-px h-10 bg-white/10" />
                        <div className="flex flex-col">
                            <span className="font-heading font-bold text-3xl md:text-4xl text-primary tracking-tight">
                                3.2x
                            </span>
                            <span className="font-body text-[11px] text-white/60 uppercase tracking-[0.15em] mt-2">
                                Avg. ROI
                            </span>
                        </div>
                        <div className="hidden sm:block w-px h-10 bg-white/10" />
                        <div className="flex flex-col">
                            <span className="font-heading font-bold text-3xl md:text-4xl text-white tracking-tight">
                                ₹100Cr+
                            </span>
                            <span className="font-body text-[11px] text-white/60 uppercase tracking-[0.15em] mt-2">
                                Revenue Driven
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Visual Composition — 45% */}
                <div className="w-full lg:w-[45%] relative min-h-[360px] lg:min-h-[460px] flex items-center justify-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-br from-primary/8 via-transparent to-secondary-accent/4 blur-[80px] rounded-full pointer-events-none" />

                    <div className="relative w-full max-w-[400px] lg:max-w-[420px]">
                        <div className="relative bg-dark-surface border border-white/10 rounded-2xl shadow-2xl shadow-black/30 transform rotate-1 hover:rotate-0 transition-transform duration-700 ease-out overflow-hidden">
                            <div className="h-[3px] w-full bg-gradient-to-r from-primary via-primary/60 to-transparent" />

                            <div className="p-7 md:p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                                        <span className="font-heading font-semibold text-[11px] text-white/60 uppercase tracking-[0.2em]">
                                            Growth Roadmap
                                        </span>
                                    </div>
                                    <span className="font-body text-[10px] text-white/40 tracking-wider">
                                        Q1 — Q4 2026
                                    </span>
                                </div>

                                <div className="space-y-3.5 mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/70 flex-shrink-0" />
                                        <div className="w-full h-2 bg-white/10 rounded-full" />
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" />
                                        <div className="w-4/5 h-2 bg-white/[0.07] rounded-full" />
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" />
                                        <div className="w-3/5 h-2 bg-white/[0.07] rounded-full" />
                                    </div>
                                </div>

                                <div className="h-px w-full bg-white/10 mb-6" />

                                <div className="flex items-end gap-5">
                                    <div className="flex flex-col">
                                        <span className="font-heading font-bold text-2xl text-white leading-none tracking-tight">
                                            +340%
                                        </span>
                                        <span className="font-body text-[10px] text-white/50 uppercase tracking-[0.15em] mt-1.5">
                                            Traffic
                                        </span>
                                    </div>
                                    <div className="w-px h-7 bg-white/10" />
                                    <div className="flex flex-col">
                                        <span className="font-heading font-bold text-2xl text-primary leading-none tracking-tight">
                                            2.1x
                                        </span>
                                        <span className="font-body text-[10px] text-white/50 uppercase tracking-[0.15em] mt-1.5">
                                            ROAS
                                        </span>
                                    </div>
                                    <div className="w-px h-7 bg-white/10" />
                                    <div className="flex flex-col">
                                        <span className="font-heading font-bold text-2xl text-white leading-none tracking-tight">
                                            12x
                                        </span>
                                        <span className="font-body text-[10px] text-white/50 uppercase tracking-[0.15em] mt-1.5">
                                            Pipeline
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-5 -left-4 md:-left-6 bg-dark-surface border border-white/10 rounded-xl px-5 py-4 shadow-xl shadow-black/20 hover:-translate-y-1 transition-transform duration-500 z-20">
                            <div className="flex items-center gap-3.5">
                                <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                </div>
                                <div>
                                    <span className="font-heading font-bold text-lg text-white block leading-tight">
                                        +520%
                                    </span>
                                    <span className="font-body text-[10px] text-white/60 uppercase tracking-[0.12em]">
                                        Revenue Growth
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-3 -right-2 md:-right-5 bg-dark-surface border border-primary/20 rounded-full px-4 py-2 shadow-lg shadow-black/10 hover:-translate-y-1 transition-transform duration-500 z-20">
                            <span className="font-body text-[11px] font-medium text-primary tracking-wide">
                                Strategy · Execution · Scale
                            </span>
                        </div>

                        <div className="absolute top-1/3 -left-6 w-3 h-3 rounded-full bg-primary/20" />
                        <div className="absolute -bottom-8 right-16 w-2 h-2 rounded-full bg-secondary-accent/15" />
                    </div>
                </div>
            </div>
        </section>
    );
}
