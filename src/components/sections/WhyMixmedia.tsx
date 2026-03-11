import React from "react";
import Link from "next/link";
import { TargetIcon, LayersIcon, ZapIcon, BarChart3Icon, ArrowRightIcon } from "lucide-react";

const differentiators = [
    {
        icon: <TargetIcon className="w-5 h-5" />,
        title: "Strategy-Led Execution",
        description: "Every engagement starts with deep research and a custom growth roadmap.",
    },
    {
        icon: <LayersIcon className="w-5 h-5" />,
        title: "Custom Solutions",
        description: "Tailored strategies for your market, audience, and growth stage.",
    },
    {
        icon: <ZapIcon className="w-5 h-5" />,
        title: "Fast Support",
        description: "Dedicated team with rapid response times at the speed of your business.",
    },
    {
        icon: <BarChart3Icon className="w-5 h-5" />,
        title: "Measurable Growth Focus",
        description: "Real-time dashboards and monthly deep-dives. Every decision backed by data.",
    },
];

export function WhyMixmedia() {
    return (
        <section className="w-full bg-white py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6">
                {/* Row 1: Image left, text right */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-20 md:mb-28">
                    {/* Image with stat overlay */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-primary/15 via-primary/5 to-secondary-accent/10 aspect-[4/3] relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="font-display font-black text-6xl md:text-7xl text-primary/30 mb-2">MML</div>
                                    <div className="font-body text-sm text-text-muted">Growth Agency</div>
                                </div>
                            </div>
                        </div>
                        {/* Stat chip overlaid on image corner */}
                        <div className="absolute -bottom-4 -left-2 md:bottom-6 md:left-6 bg-white rounded-xl px-5 py-4 shadow-lg shadow-black/8 border border-gray-100">
                            <div className="font-display font-bold text-3xl text-text-primary">98%</div>
                            <div className="font-body text-xs text-text-muted mt-0.5">Client retention rate</div>
                        </div>
                    </div>

                    {/* Text content */}
                    <div className="w-full lg:w-1/2">
                        <span className="inline-flex items-center font-body font-semibold text-xs text-text-primary bg-text-primary/8 px-4 py-2 rounded-full mb-6 uppercase tracking-[0.12em]">
                            Why Choose Us
                        </span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-[2.75rem] text-text-primary mb-6 leading-[1.1]">
                            We don&apos;t just run ads. We build growth engines.
                        </h2>
                        <p className="font-body text-lg text-text-secondary leading-relaxed mb-10">
                            Most agencies focus on vanity metrics. We focus on compounding
                            revenue. Our senior strategists partner with you to uncover hidden
                            opportunities, optimize your funnel, and scale your digital presence
                            sustainably.
                        </p>

                        <div className="space-y-6">
                            {differentiators.slice(0, 2).map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-body font-bold text-base text-text-primary mb-1">
                                            {item.title}
                                        </h4>
                                        <p className="font-body text-sm text-text-secondary leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/about-us/"
                            className="inline-flex items-center gap-2 font-body font-bold text-sm bg-text-primary text-white px-6 py-3 rounded-full hover:bg-primary transition-colors duration-300 mt-10 group"
                        >
                            Find out more
                            <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Row 2: Text left, image right (flipped) */}
                <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center">
                    {/* Image with stat overlay */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-secondary-accent/15 via-secondary-accent/5 to-primary/10 aspect-[4/3] relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="font-display font-black text-6xl md:text-7xl text-secondary-accent/30 mb-2">3.2x</div>
                                    <div className="font-body text-sm text-text-muted">Average ROI</div>
                                </div>
                            </div>
                        </div>
                        {/* Stat chip overlaid on image corner */}
                        <div className="absolute -bottom-4 -right-2 md:bottom-6 md:right-6 bg-primary rounded-xl px-5 py-4 shadow-lg shadow-primary/20">
                            <div className="font-display font-bold text-3xl text-white">340%</div>
                            <div className="font-body text-xs text-white/80 mt-0.5">Avg. traffic growth</div>
                        </div>
                    </div>

                    {/* Text content */}
                    <div className="w-full lg:w-1/2">
                        <span className="inline-flex items-center font-body font-semibold text-xs text-text-primary bg-text-primary/8 px-4 py-2 rounded-full mb-6 uppercase tracking-[0.12em]">
                            Our Approach
                        </span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-[2.75rem] text-text-primary mb-6 leading-[1.1]">
                            Data-driven results you can measure
                        </h2>
                        <p className="font-body text-lg text-text-secondary leading-relaxed mb-10">
                            Real-time dashboards, transparent reporting, and strategic optimizations.
                            We don&apos;t hide behind jargon — you see exactly what&apos;s working
                            and why, with clear ROI attribution.
                        </p>

                        <div className="space-y-6">
                            {differentiators.slice(2).map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-secondary-accent/10 text-secondary-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-body font-bold text-base text-text-primary mb-1">
                                            {item.title}
                                        </h4>
                                        <p className="font-body text-sm text-text-secondary leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/contact-us/"
                            className="inline-flex items-center gap-2 font-body font-bold text-sm bg-text-primary text-white px-6 py-3 rounded-full hover:bg-primary transition-colors duration-300 mt-10 group"
                        >
                            Book a strategy call
                            <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
