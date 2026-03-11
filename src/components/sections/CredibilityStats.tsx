import React from "react";
import { BriefcaseIcon, UsersIcon, CalendarIcon } from "lucide-react";

const stats = [
    {
        icon: <BriefcaseIcon className="w-6 h-6" />,
        value: "200+",
        label: "Projects Completed",
        description: "Across SEO, performance marketing, web, and branding.",
    },
    {
        icon: <UsersIcon className="w-6 h-6" />,
        value: "50+",
        label: "Satisfied Clients",
        description: "From funded startups to enterprise brands across India.",
    },
    {
        icon: <CalendarIcon className="w-6 h-6" />,
        value: "8+",
        label: "Years of Experience",
        description: "Building compounding growth systems that deliver ROI.",
    },
];

export function CredibilityStats() {
    return (
        <section className="w-full bg-text-primary py-20 md:py-24 relative overflow-hidden rounded-t-[2.5rem]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary-accent/5 pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="relative bg-white/5 rounded-2xl p-8 border border-white/10 text-center group hover:border-primary/30 hover:bg-white/8 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {stat.icon}
                            </div>
                            <span className="font-display font-bold text-5xl md:text-6xl text-white block mb-2 tracking-tight">
                                {stat.value}
                            </span>
                            <span className="font-body font-bold text-sm text-primary uppercase tracking-wider block mb-3">
                                {stat.label}
                            </span>
                            <p className="font-body text-sm text-white/60 leading-relaxed">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
