import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { caseStudies } from "@/data/caseStudies";

export function CaseStudies() {
    return (
        <section className="w-full bg-background py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    eyebrow="Results"
                    title="Growth Stories That Speak for Themselves"
                    description="We measure success by revenue generated, not just traffic acquired. Explore how we've helped ambitious brands scale."
                    centered
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {caseStudies.map((study) => (
                        <Link
                            key={study.slug}
                            href={`/case-study/${study.slug}/`}
                            className="group bg-surface rounded-xl overflow-hidden border border-border shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col"
                        >
                            <div className={`h-48 w-full bg-gradient-to-br ${study.gradient} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                                    <span className="font-heading font-semibold text-xs text-white uppercase tracking-wider">
                                        {study.industry}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="font-heading font-bold text-2xl text-text-primary mb-6 group-hover:text-primary transition-colors">
                                    {study.client}
                                </h3>

                                <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-border">
                                    {study.metrics.map((metric, mIdx) => (
                                        <div key={mIdx} className="flex flex-col">
                                            <span className="font-heading font-bold text-2xl md:text-3xl text-text-primary mb-1">
                                                {metric.value}
                                            </span>
                                            <span className="font-body text-xs text-text-muted uppercase tracking-wide">
                                                {metric.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <p className="font-body text-text-secondary leading-relaxed mb-8 flex-grow">
                                    {study.description}
                                </p>

                                <span className="inline-flex items-center gap-2 font-heading font-semibold text-primary mt-auto group-hover:gap-3 transition-all">
                                    Read Case Study <ArrowRightIcon className="w-4 h-4" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/case-study/"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-border bg-surface hover:bg-surface-soft font-heading font-semibold text-text-primary transition-colors"
                    >
                        View All Work
                    </Link>
                </div>
            </div>
        </section>
    );
}
