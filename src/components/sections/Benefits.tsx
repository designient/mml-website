import React from "react";
import {
    SparklesIcon,
    AwardIcon,
    CrosshairIcon,
    TrendingUpIcon,
    SearchIcon,
    BarChart3Icon,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const benefits = [
    {
        icon: <SparklesIcon className="w-5 h-5" />,
        title: "Generate Quality Leads",
        description: "Attract high-intent prospects through targeted campaigns and SEO strategies that fill your pipeline with qualified opportunities.",
    },
    {
        icon: <AwardIcon className="w-5 h-5" />,
        title: "Gain Brand Credibility",
        description: "Build trust and authority in your market through consistent visibility, thought leadership, and premium brand positioning.",
    },
    {
        icon: <CrosshairIcon className="w-5 h-5" />,
        title: "Target the Right Audience",
        description: "Reach decision-makers at every stage of the buyer journey with precision targeting and data-driven audience segmentation.",
    },
    {
        icon: <TrendingUpIcon className="w-5 h-5" />,
        title: "Increase Conversion Rate",
        description: "Optimize every touchpoint — from landing pages to CTAs — to turn more visitors into customers and maximize revenue.",
    },
    {
        icon: <SearchIcon className="w-5 h-5" />,
        title: "Free Website Audit",
        description: "Get a comprehensive analysis of your site's performance, SEO health, and conversion potential — completely free.",
    },
    {
        icon: <BarChart3Icon className="w-5 h-5" />,
        title: "Analytical Reporting",
        description: "Custom dashboards with real-time metrics, monthly deep-dives, and actionable insights tied directly to revenue.",
    },
];

export function Benefits() {
    return (
        <section className="w-full bg-surface-soft py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    eyebrow="The Mixmedia Advantage"
                    title="Benefits of Teaming with Mixmedia Labs"
                    description="We don't just deliver services — we deliver measurable outcomes that compound over time."
                    centered
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, idx) => (
                        <div
                            key={idx}
                            className="bg-surface rounded-xl p-7 border border-border hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group flex flex-col"
                        >
                            <div className="w-11 h-11 rounded-lg bg-primary-soft text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {benefit.icon}
                            </div>
                            <h3 className="font-heading font-bold text-lg text-text-primary mb-2">
                                {benefit.title}
                            </h3>
                            <p className="font-body text-sm text-text-secondary leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
