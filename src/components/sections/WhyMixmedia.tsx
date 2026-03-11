import React from "react";
import { TargetIcon, LayersIcon, ZapIcon, BarChart3Icon } from "lucide-react";

const differentiators = [
    {
        icon: <TargetIcon className="w-5 h-5" />,
        title: "Strategy-Led Execution",
        description: "Every engagement starts with deep research and a custom growth roadmap. No templates.",
    },
    {
        icon: <LayersIcon className="w-5 h-5" />,
        title: "Custom Solutions",
        description: "Tailored strategies for your market, audience, and growth stage. Never one-size-fits-all.",
    },
    {
        icon: <ZapIcon className="w-5 h-5" />,
        title: "Fast Support",
        description: "Dedicated team with rapid response times. We move at the speed of your business.",
    },
    {
        icon: <BarChart3Icon className="w-5 h-5" />,
        title: "Measurable Growth Focus",
        description: "Real-time dashboards and monthly deep-dives. Every decision backed by data.",
    },
];

export function WhyMixmedia() {
    return (
        <section className="w-full bg-surface py-20 md:py-28 border-y border-border">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-start">
                {/* Left Content (50%) */}
                <div className="w-full lg:w-1/2 lg:sticky lg:top-32">
                    <span className="font-heading font-semibold text-sm text-primary uppercase tracking-wide mb-4 block">
                        Why Brands Choose Mixmedia Labs
                    </span>
                    <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary mb-8 leading-tight">
                        We don&apos;t just run ads. We build growth engines.
                    </h2>
                    <p className="font-body text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
                        Most agencies focus on vanity metrics. We focus on compounding
                        revenue. Our senior strategists partner with you to uncover hidden
                        opportunities, optimize your funnel, and scale your digital presence
                        sustainably.
                    </p>

                    <div className="mt-12 flex items-center gap-6">
                        <div className="flex flex-col">
                            <span className="font-heading font-bold text-4xl text-primary">
                                98%
                            </span>
                            <span className="font-body text-sm text-text-muted mt-1">
                                Client Retention Rate
                            </span>
                        </div>
                        <div className="w-px h-16 bg-border" />
                        <div className="flex flex-col">
                            <span className="font-heading font-bold text-4xl text-primary">
                                3.2x
                            </span>
                            <span className="font-body text-sm text-text-muted mt-1">
                                Average ROI in 12 Months
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Content (50%) */}
                <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {differentiators.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group flex flex-col h-full"
                        >
                            <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-primary mb-5 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {item.icon}
                            </div>
                            <h3 className="font-heading font-bold text-lg text-text-primary mb-2">
                                {item.title}
                            </h3>
                            <p className="font-body text-sm text-text-secondary leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
