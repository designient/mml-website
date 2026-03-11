import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
    title: "Case Studies",
    description: "See how Mixmedia Labs has helped brands achieve +340% organic growth, 520% revenue increases, and 3.8x ROAS. Real results, real strategies.",
    alternates: { canonical: "https://mixmedialabs.com/case-study/" },
    openGraph: {
        title: "Case Studies — Growth Stories That Speak for Themselves",
        description: "+340% organic traffic, +520% revenue, 3.8x ROAS. See how we help ambitious brands scale.",
        url: "https://mixmedialabs.com/case-study/",
    },
    twitter: {
        title: "Case Studies — Growth Stories That Speak for Themselves",
        description: "+340% organic traffic, +520% revenue, 3.8x ROAS. See how we help ambitious brands scale.",
    },
};

export default function CaseStudyPage() {
    const [featured, ...rest] = caseStudies;

    return (
        <main>
            <section className="w-full bg-background pt-12 pb-4 md:pt-16 md:pb-8">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="font-heading font-semibold text-sm text-primary uppercase tracking-wide mb-4 block">Our Work</span>
                    <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary leading-tight tracking-tight mb-6">
                        Growth Stories That <span className="text-primary">Speak for Themselves</span>
                    </h1>
                    <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
                        We measure success by revenue generated, not just traffic acquired. Explore how we&apos;ve helped ambitious brands scale.
                    </p>
                </div>
            </section>

            {/* Featured Case Study */}
            <section className="w-full bg-background py-8 md:py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <Link
                        href={`/case-study/${featured.slug}/`}
                        className="group block bg-surface rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className={`h-64 lg:h-auto min-h-[300px] bg-gradient-to-br ${featured.gradient} relative`}>
                                <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                                    <span className="font-heading font-semibold text-xs text-white uppercase tracking-wider">{featured.industry}</span>
                                </div>
                                <div className="absolute bottom-4 left-4">
                                    <span className="inline-block bg-primary/90 px-3 py-1 rounded-full font-heading font-semibold text-xs text-white uppercase tracking-wider">
                                        Featured
                                    </span>
                                </div>
                            </div>
                            <div className="p-8 md:p-10 flex flex-col justify-center">
                                <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-primary mb-4 group-hover:text-primary transition-colors leading-tight">
                                    {featured.client}
                                </h2>
                                <p className="font-body text-text-secondary leading-relaxed mb-6">{featured.description}</p>
                                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-border">
                                    {featured.metrics.map((m, idx) => (
                                        <div key={idx} className="flex flex-col">
                                            <span className="font-heading font-bold text-2xl md:text-3xl text-text-primary">{m.value}</span>
                                            <span className="font-body text-xs text-text-muted uppercase tracking-wide">{m.label}</span>
                                        </div>
                                    ))}
                                </div>
                                <span className="inline-flex items-center gap-2 font-heading font-semibold text-primary group-hover:gap-3 transition-all">
                                    Read Case Study <ArrowRightIcon className="w-4 h-4" />
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Remaining Case Studies */}
            {rest.length > 0 && (
                <section className="w-full bg-background py-8 md:py-12">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {rest.map((study) => (
                                <Link
                                    key={study.slug}
                                    href={`/case-study/${study.slug}/`}
                                    className="group bg-surface rounded-xl overflow-hidden border border-border shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col"
                                >
                                    <div className={`h-48 w-full bg-gradient-to-br ${study.gradient} relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                                        <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                                            <span className="font-heading font-semibold text-xs text-white uppercase tracking-wider">{study.industry}</span>
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="font-heading font-bold text-2xl text-text-primary mb-4 group-hover:text-primary transition-colors">{study.client}</h3>
                                        <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-border">
                                            {study.metrics.map((metric, mIdx) => (
                                                <div key={mIdx} className="flex flex-col">
                                                    <span className="font-heading font-bold text-2xl text-text-primary mb-1">{metric.value}</span>
                                                    <span className="font-body text-xs text-text-muted uppercase tracking-wide">{metric.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="font-body text-text-secondary leading-relaxed mb-8 flex-grow">{study.description}</p>
                                        <span className="inline-flex items-center gap-2 font-heading font-semibold text-primary mt-auto group-hover:gap-3 transition-all">
                                            Read Case Study <ArrowRightIcon className="w-4 h-4" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA After Cards */}
            <section className="w-full bg-surface py-16 md:py-20 border-y border-border">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-primary mb-4">Want Results Like These?</h2>
                    <p className="font-body text-text-secondary leading-relaxed mb-8">
                        Every growth story starts with a conversation. Let&apos;s explore how we can build your next success story.
                    </p>
                    <PrimaryButton href="/contact-us/" className="text-base px-8 py-4 inline-flex items-center gap-2 group">
                        Book a Free Strategy Call
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </PrimaryButton>
                </div>
            </section>

            <FinalCTA />
        </main>
    );
}
