import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRightIcon, ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BreadcrumbSchema } from "@/components/seo/jsonLd";

export function generateStaticParams() {
    return caseStudies.map((cs) => ({ slug: cs.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const cs = getCaseStudyBySlug(slug);
    if (!cs) return {};
    return {
        title: cs.metaTitle,
        description: cs.metaDescription,
        alternates: { canonical: `https://mixmedialabs.com/case-study/${cs.slug}/` },
        openGraph: {
            title: cs.metaTitle,
            description: cs.metaDescription,
            url: `https://mixmedialabs.com/case-study/${cs.slug}/`,
        },
        twitter: {
            title: cs.metaTitle,
            description: cs.metaDescription,
        },
    };
}

export default async function CaseStudyDetailPage({ params }: Props) {
    const { slug } = await params;
    const cs = getCaseStudyBySlug(slug);
    if (!cs) notFound();

    return (
        <main>
            <BreadcrumbSchema
                items={[
                    { name: "Home", href: "/" },
                    { name: "Case Studies", href: "/case-study/" },
                    { name: cs.client, href: `/case-study/${cs.slug}/` },
                ]}
            />
            {/* Hero Gradient */}
            <section className={`relative w-full py-20 md:py-28 bg-gradient-to-br ${cs.gradient} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 mix-blend-overlay" />
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 font-body text-sm text-white/70 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRightIcon className="w-3.5 h-3.5" />
                        <Link href="/case-study/" className="hover:text-white transition-colors">Case Studies</Link>
                        <ChevronRightIcon className="w-3.5 h-3.5" />
                        <span className="text-white font-medium">{cs.client}</span>
                    </nav>

                    <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full font-display font-semibold text-xs text-white uppercase tracking-wider border border-white/30 mb-6">
                        {cs.industry}
                    </span>

                    <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight mb-6">
                        {cs.client}
                    </h1>

                    <p className="font-body text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                        {cs.description}
                    </p>
                </div>
            </section>

            {/* Metrics Strip */}
            <section className="w-full bg-dark-background py-12 border-b border-white/10">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid grid-cols-3 gap-8 divide-x divide-white/10">
                        {cs.metrics.map((m, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center px-4">
                                <span className="font-display font-bold text-3xl md:text-5xl text-white mb-2 tracking-tight">
                                    {m.value}
                                </span>
                                <span className="font-display font-semibold text-xs md:text-sm text-primary uppercase tracking-wider">
                                    {m.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Challenge */}
            <section className="w-full bg-background py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-6">
                    <span className="font-body font-semibold text-xs text-text-primary bg-text-primary/8 px-4 py-2 rounded-full mb-6 uppercase tracking-[0.12em] inline-flex items-center">
                        The Challenge
                    </span>
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-8 leading-tight">
                        What {cs.client} was facing
                    </h2>
                    <div className="space-y-6">
                        {cs.challenge.map((p, idx) => (
                            <p key={idx} className="font-body text-lg text-text-secondary leading-relaxed">{p}</p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach */}
            <section className="w-full bg-surface py-16 md:py-24 border-y border-border">
                <div className="max-w-3xl mx-auto px-6">
                    <span className="font-body font-semibold text-xs text-text-primary bg-text-primary/8 px-4 py-2 rounded-full mb-6 uppercase tracking-[0.12em] inline-flex items-center">
                        Our Approach
                    </span>
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-8 leading-tight">
                        How we solved it
                    </h2>
                    <div className="space-y-6">
                        {cs.approach.map((p, idx) => (
                            <p key={idx} className="font-body text-lg text-text-secondary leading-relaxed">{p}</p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="w-full bg-background py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-6">
                    <span className="font-body font-semibold text-xs text-text-primary bg-text-primary/8 px-4 py-2 rounded-full mb-6 uppercase tracking-[0.12em] inline-flex items-center">
                        The Results
                    </span>
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-8 leading-tight">
                        What we achieved together
                    </h2>
                    <div className="space-y-6">
                        {cs.results.map((p, idx) => (
                            <p key={idx} className="font-body text-lg text-text-secondary leading-relaxed">{p}</p>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-12 flex flex-col sm:flex-row items-start gap-4">
                        <PrimaryButton href="/contact-us/" className="text-base px-8 py-4 flex items-center gap-2 group">
                            Get Similar Results
                            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </PrimaryButton>
                        <Link
                            href="/case-study/"
                            className="inline-flex items-center gap-2 font-display font-semibold text-text-primary hover:text-primary transition-colors px-4 py-4"
                        >
                            <ArrowLeftIcon className="w-4 h-4" />
                            All case studies
                        </Link>
                    </div>
                </div>
            </section>

            {/* Tools & Channels + Related Services */}
            {(cs.toolsUsed || cs.servicesUsed) && (
                <section className="w-full bg-surface py-16 md:py-20 border-y border-border">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {cs.toolsUsed && cs.toolsUsed.length > 0 && (
                                <div>
                                    <span className="font-body font-semibold text-xs text-text-primary bg-text-primary/8 px-4 py-2 rounded-full mb-6 uppercase tracking-[0.12em] inline-flex items-center">Tools & Channels</span>
                                    <h3 className="font-display font-bold text-xl text-text-primary mb-6">What We Used</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {cs.toolsUsed.map((tool, idx) => (
                                            <span key={idx} className="inline-block bg-background px-4 py-2 rounded-lg border border-border font-body text-sm text-text-secondary">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {cs.servicesUsed && cs.servicesUsed.length > 0 && (
                                <div>
                                    <span className="font-body font-semibold text-xs text-text-primary bg-text-primary/8 px-4 py-2 rounded-full mb-6 uppercase tracking-[0.12em] inline-flex items-center">Related Services</span>
                                    <h3 className="font-display font-bold text-xl text-text-primary mb-6">How We Helped</h3>
                                    <div className="space-y-3">
                                        {cs.servicesUsed.map((service, idx) => (
                                            <Link
                                                key={idx}
                                                href={service.href}
                                                className="flex items-center justify-between bg-background rounded-lg px-5 py-3.5 border border-border hover:border-primary/30 hover:shadow-sm transition-all group"
                                            >
                                                <span className="font-display font-semibold text-text-primary group-hover:text-primary transition-colors">{service.name}</span>
                                                <ArrowRightIcon className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}

            <FinalCTA />
        </main>
    );
}
