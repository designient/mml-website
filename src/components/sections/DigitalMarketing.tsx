import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const subServices = [
    {
        title: "Social Media Marketing",
        description: "Build engaged communities and drive conversions across platforms.",
    },
    {
        title: "SEO",
        description: "Technical optimization, content strategy, and link building for sustainable organic growth.",
    },
    {
        title: "Pay Per Click",
        description: "High-intent campaigns on Google, Bing, and display networks with rigorous ROAS tracking.",
    },
    {
        title: "Programmatic Advertising",
        description: "Automated media buying across premium inventory at scale.",
    },
    {
        title: "Influencer Marketing",
        description: "Strategic creator partnerships that drive authentic engagement and conversions.",
    },
    {
        title: "Performance Marketing",
        description: "Data-driven campaigns optimized for revenue, not vanity metrics.",
    },
];

export function DigitalMarketing() {
    return (
        <section className="w-full bg-surface-soft py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    eyebrow="Digital Marketing"
                    title="Performance-Driven Marketing Across Every Channel"
                    centered
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {subServices.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-surface rounded-xl p-6 border border-border relative overflow-hidden group hover:border-primary/30 transition-colors duration-300"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary/10 group-hover:bg-primary transition-colors duration-300" />
                            <h3 className="font-heading font-bold text-lg text-text-primary mb-3 mt-2">
                                {service.title}
                            </h3>
                            <p className="font-body text-sm text-text-secondary leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
