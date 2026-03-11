import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
    { number: "01", title: "Discovery", description: "Deep-dive into your market, competitors, and current digital footprint." },
    { number: "02", title: "Strategy", description: "Custom growth plan with clear KPIs, timelines, and prioritized channels." },
    { number: "03", title: "Design", description: "User-centered design for websites, apps, and brand experiences." },
    { number: "04", title: "Build", description: "Agile development sprints across web, mobile, and marketing systems." },
    { number: "05", title: "Optimize", description: "Continuous testing, refinement, and scaling of winning channels." },
];

export function Process() {
    return (
        <section className="w-full bg-surface py-20 md:py-28 border-y border-border">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    eyebrow="Our Process"
                    title="Engineered for Compounding Growth"
                    description="We don't guess. We follow a rigorous, data-driven methodology designed to turn your digital presence into a predictable revenue engine."
                    centered
                    className="mb-20"
                />

                <div className="relative">
                    <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-border -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative group flex flex-col items-center text-center">
                                <div className="w-20 h-20 rounded-full bg-background border-4 border-surface flex items-center justify-center mb-6 shadow-sm group-hover:border-primary/20 transition-colors duration-300 relative z-10">
                                    <span className="font-heading font-bold text-2xl text-primary">
                                        {step.number}
                                    </span>
                                </div>
                                <h3 className="font-heading font-bold text-lg text-text-primary mb-3">
                                    {step.title}
                                </h3>
                                <p className="font-body text-sm text-text-secondary leading-relaxed max-w-[200px]">
                                    {step.description}
                                </p>
                                {idx < steps.length - 1 && (
                                    <div className="lg:hidden w-0.5 h-10 bg-border mt-6 -mb-4" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
