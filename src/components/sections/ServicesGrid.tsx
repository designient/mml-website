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
    },
    {
        icon: <SearchIcon className="w-5 h-5" />,
        title: "SEO",
        description: "Dominate organic search with technical SEO, content strategy, and authority building.",
        href: "/seo-company-in-bangalore/",
    },
    {
        icon: <MonitorIcon className="w-5 h-5" />,
        title: "Website Design",
        description: "Conversion-optimized websites built for speed, SEO, and scale.",
        href: "/web-development-company-in-bangalore/",
    },
    {
        icon: <SparklesIcon className="w-5 h-5" />,
        title: "Branding",
        description: "Strategic brand positioning that differentiates and commands premium.",
        href: "/branding-agency-in-bangalore/",
    },
    {
        icon: <SmartphoneIcon className="w-5 h-5" />,
        title: "Mobile App Development",
        description: "Native and cross-platform apps designed for performance and engagement.",
        href: "/mobile-app-development-company-in-bangalore/",
    },
    {
        icon: <PenToolIcon className="w-5 h-5" />,
        title: "UI/UX Design",
        description: "Research-driven interfaces that delight users and drive business outcomes.",
        href: "/ui-ux-design-company-in-bangalore/",
    },
    {
        icon: <ShoppingCartIcon className="w-5 h-5" />,
        title: "Ecommerce Solutions",
        description: "End-to-end ecommerce platforms built to maximize revenue and retention.",
        href: "/ecommerce-solutions-in-bangalore/",
    },
    {
        icon: <CodeIcon className="w-5 h-5" />,
        title: "WordPress Development",
        description: "Custom WordPress solutions optimized for speed, SEO, and scalability.",
        href: "/wordpress-development-services-bangalore/",
    },
];

export function ServicesGrid() {
    return (
        <section className="w-full bg-background py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    eyebrow="What We Do"
                    title="Full-Stack Digital Growth Services"
                    description="We don't just run campaigns; we build compounding growth engines. Our integrated approach ensures every channel works together to drive measurable revenue."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <Link
                            key={idx}
                            href={service.href}
                            className="group bg-surface rounded-xl p-6 border border-border shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="w-10 h-10 rounded-lg bg-primary-soft text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="font-heading font-bold text-lg text-text-primary mb-2">
                                {service.title}
                            </h3>
                            <p className="font-body text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
                                {service.description}
                            </p>
                            <span className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-primary mt-auto group-hover:gap-3 transition-all">
                                Learn more <ArrowRightIcon className="w-3.5 h-3.5" />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
