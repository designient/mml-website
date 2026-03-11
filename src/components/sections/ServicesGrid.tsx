import React from "react";
import Link from "next/link";
import {
    MegaphoneIcon,
    SearchIcon,
    MonitorIcon,
    SparklesIcon,
    SmartphoneIcon,
    PenToolIcon,
    ShoppingCartIcon,
    CodeIcon,
    ArrowRightIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const services = [
    {
        icon: <MegaphoneIcon className="w-5 h-5" />,
        title: "Digital Marketing",
        description: "Full-funnel campaigns across search, social, and programmatic channels.",
        href: "/digital-marketing-services-in-bangalore/",
        gradient: "from-orange-500/10 to-amber-500/10",
    },
    {
        icon: <SearchIcon className="w-5 h-5" />,
        title: "SEO",
        description: "Dominate organic search with technical SEO, content strategy, and authority building.",
        href: "/seo-company-in-bangalore/",
        gradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
        icon: <MonitorIcon className="w-5 h-5" />,
        title: "Website Design",
        description: "Conversion-optimized websites built for speed, SEO, and scale.",
        href: "/web-development-company-in-bangalore/",
        gradient: "from-violet-500/10 to-purple-500/10",
    },
    {
        icon: <SparklesIcon className="w-5 h-5" />,
        title: "Branding",
        description: "Strategic brand positioning that differentiates and commands premium.",
        href: "/branding-agency-in-bangalore/",
        gradient: "from-pink-500/10 to-rose-500/10",
    },
    {
        icon: <SmartphoneIcon className="w-5 h-5" />,
        title: "Mobile App Development",
        description: "Native and cross-platform apps designed for performance and engagement.",
        href: "/mobile-app-development-company-in-bangalore/",
        gradient: "from-emerald-500/10 to-green-500/10",
    },
    {
        icon: <PenToolIcon className="w-5 h-5" />,
        title: "UI/UX Design",
        description: "Research-driven interfaces that delight users and drive business outcomes.",
        href: "/ui-ux-design-company-in-bangalore/",
        gradient: "from-indigo-500/10 to-blue-500/10",
    },
    {
        icon: <ShoppingCartIcon className="w-5 h-5" />,
        title: "Ecommerce Solutions",
        description: "End-to-end ecommerce platforms built to maximize revenue and retention.",
        href: "/ecommerce-solutions-in-bangalore/",
        gradient: "from-amber-500/10 to-yellow-500/10",
    },
    {
        icon: <CodeIcon className="w-5 h-5" />,
        title: "WordPress Development",
        description: "Custom WordPress solutions optimized for speed, SEO, and scalability.",
        href: "/wordpress-development-services-bangalore/",
        gradient: "from-teal-500/10 to-cyan-500/10",
    },
];

export function ServicesGrid() {
    return (
        <section className="w-full bg-primary/[0.04] py-20 md:py-28 rounded-t-[2.5rem]">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    eyebrow="What We Do"
                    title="Full-Stack Digital Growth Services"
                    description="We don't just run campaigns; we build compounding growth engines. Our integrated approach ensures every channel works together to drive measurable revenue."
                    centered
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {services.map((service, idx) => (
                        <Link
                            key={idx}
                            href={service.href}
                            className={`group bg-white rounded-2xl p-7 border border-border hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 flex flex-col h-full relative overflow-hidden`}
                        >
                            {/* Subtle gradient background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                            <div className="relative z-10">
                                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="font-display font-bold text-xl text-text-primary mb-3">
                                    {service.title}
                                </h3>
                                <p className="font-body text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
                                    {service.description}
                                </p>
                                <span className="inline-flex items-center gap-2 font-body font-semibold text-sm text-primary group-hover:gap-3 transition-all">
                                    Find out more <ArrowRightIcon className="w-3.5 h-3.5" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
