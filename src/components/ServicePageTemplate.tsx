"use client";

import React from "react";
import Link from "next/link";
import {
    ArrowRightIcon,
    ChevronRightIcon,
    CheckIcon,
    TrendingUpIcon,
    ShareIcon,
    SearchIcon,
    MousePointerClickIcon,
    MonitorIcon,
    UsersIcon,
    TrendingUpIcon as TrendingUp2,
} from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { WhyMixmedia } from "@/components/sections/WhyMixmedia";
import { Process } from "@/components/sections/Process";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/seo/jsonLd";
import type { ServiceData, ServiceSubService } from "@/data/services";

/* ── Icon resolver for SubServices ── */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    ShareIcon,
    SearchIcon,
    MousePointerClickIcon,
    MonitorIcon,
    UsersIcon,
    TrendingUpIcon: TrendingUp2,
};

function getIcon(name: string) {
    return iconMap[name] ?? MonitorIcon;
}

/* ═══════════════════════════════════════════════════
   SERVICE PAGE TEMPLATE
   ═══════════════════════════════════════════════════ */

interface ServicePageTemplateProps {
    service: ServiceData;
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
    const headlineParts = service.headline.split("{highlight}");

    return (
        <main>
            <ServiceSchema
                name={service.title}
                description={service.metaDescription}
                slug={service.slug}
            />
            {service.faqs.length > 0 && (
                <FAQSchema items={service.faqs} />
            )}
            <BreadcrumbSchema
                items={[
                    { name: "Home", href: "/" },
                    { name: service.breadcrumb, href: `/${service.slug}/` },
                ]}
            />
            {/* ── Hero ── */}
            <section className="relative w-full bg-background overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />
                <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 font-body text-sm text-text-muted mb-8 md:mb-12" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <ChevronRightIcon className="w-3.5 h-3.5" />
                        <span className="text-text-primary font-medium">{service.breadcrumb}</span>
                    </nav>

                    {/* Eyebrow */}
                    <span className="inline-block font-heading font-semibold text-xs text-primary uppercase tracking-[0.2em] mb-6 px-4 py-1.5 rounded-full bg-primary-soft border border-primary/10">
                        {service.eyebrow}
                    </span>

                    {/* Headline */}
                    <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl xl:text-[72px] text-text-primary leading-[1.1] tracking-tight mb-8">
                        {headlineParts[0]}
                        <span className="text-primary">{service.highlightedWord}</span>
                        {headlineParts[1]}
                    </h1>

                    {/* Subheadline */}
                    <p className="font-body text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed mb-12">
                        {service.subheadline}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                        <PrimaryButton href="/contact-us/" className="w-full sm:w-auto text-base px-8 py-4 flex items-center justify-center gap-2 group shadow-lg shadow-primary/20">
                            {service.ctaPrimary}
                            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </PrimaryButton>
                        <SecondaryButton href="/case-study/" className="w-full sm:w-auto text-base px-8 py-4 flex items-center justify-center border-border hover:bg-surface-soft transition-colors">
                            {service.ctaSecondary}
                        </SecondaryButton>
                    </div>
                </div>
            </section>

            {/* ── Outcome Strip ── */}
            <section className="w-full bg-dark-background py-16 border-y border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-white/10">
                        {service.outcomes.map((outcome, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center px-4">
                                <span className="font-heading font-bold text-4xl md:text-5xl text-white mb-2 tracking-tight">
                                    {outcome.value}
                                </span>
                                <span className="font-heading font-semibold text-sm text-primary uppercase tracking-wider mb-1">
                                    {outcome.label}
                                </span>
                                {outcome.sublabel && (
                                    <span className="font-body text-xs text-white/60">
                                        {outcome.sublabel}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Service Inclusions ── */}
            <section className="w-full bg-background py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="font-heading font-semibold text-sm text-primary uppercase tracking-wide mb-4 block">
                            What&apos;s Included
                        </span>
                        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-6 leading-tight">
                            End-to-End {service.title} Execution
                        </h2>
                        <p className="font-body text-lg text-text-secondary leading-relaxed">
                            We don&apos;t just hand you a list of recommendations. We execute the {service.title.toLowerCase()} strategy from start to finish.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {service.inclusions.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-surface rounded-xl p-8 border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-primary-soft text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span className="font-heading font-bold text-lg">{String(idx + 1).padStart(2, "0")}</span>
                                </div>
                                <h3 className="font-heading font-bold text-xl text-text-primary mb-3">
                                    {item.title}
                                </h3>
                                <p className="font-body text-text-secondary leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Proof (Case Study) ── */}
            {service.proof && (
                <section className="w-full bg-surface py-20 md:py-28 border-y border-border">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="font-heading font-semibold text-sm text-primary uppercase tracking-wide mb-4 block">
                                {service.proof.eyebrow}
                            </span>
                            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-6 leading-tight">
                                {service.proof.title}
                            </h2>
                        </div>

                        <div className="bg-background rounded-2xl border border-border overflow-hidden shadow-lg flex flex-col lg:flex-row">
                            {/* Left: Visual */}
                            <div
                                className={`w-full lg:w-1/2 relative p-8 md:p-12 flex flex-col justify-between min-h-[300px] ${service.proof.gradientDirection === "primary-to-accent"
                                    ? "bg-gradient-to-br from-primary/90 to-secondary-accent/90"
                                    : "bg-gradient-to-br from-secondary-accent/90 to-primary/90"
                                    }`}
                            >
                                <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />

                                <div className="relative z-10">
                                    <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full font-heading font-semibold text-xs text-white uppercase tracking-wider border border-white/30 mb-8">
                                        {service.proof.tag}
                                    </span>
                                    <h3 className="font-heading font-bold text-3xl md:text-4xl text-white leading-tight max-w-md">
                                        {service.proof.tagline}
                                    </h3>
                                </div>

                                {/* Bar Chart */}
                                <div className="relative z-10 mt-12 bg-dark-surface/40 backdrop-blur-md border border-white/20 rounded-xl p-6">
                                    {service.proof.barLabel && (
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="font-heading font-semibold text-[11px] text-white/60 uppercase tracking-[0.15em]">
                                                {service.proof.barLabel.title}
                                            </span>
                                            <span className="font-heading font-bold text-sm text-primary">
                                                {service.proof.barLabel.range}
                                            </span>
                                        </div>
                                    )}
                                    <div className="flex items-end gap-3 h-24">
                                        {service.proof.barData.map((h, i) => {
                                            const maxH = Math.max(...service.proof!.barData);
                                            const isHighlighted = service.proof!.barLabel
                                                ? i >= service.proof!.barData.length - 4
                                                : false;
                                            return (
                                                <div
                                                    key={i}
                                                    className="w-full rounded-t-sm"
                                                    style={{
                                                        height: `${(h / maxH) * 100}%`,
                                                        backgroundColor: isHighlighted
                                                            ? "var(--primary)"
                                                            : "rgba(255,255,255,0.4)",
                                                    }}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Right: Content & Metrics */}
                            <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                <div className={`grid gap-8 mb-10 pb-10 border-b border-border ${service.proof.metrics.length === 3 ? "grid-cols-3" : "grid-cols-2"}`}>
                                    {service.proof.metrics.map((m, idx) => (
                                        <div key={idx}>
                                            <span className={`font-heading font-bold block mb-2 ${service.proof!.metrics.length === 3 ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"} ${idx === 0 ? "text-primary" : "text-text-primary"}`}>
                                                {m.value}
                                            </span>
                                            <span className={`font-body uppercase tracking-wide ${service.proof!.metrics.length === 3 ? "text-xs" : "text-sm"} text-text-muted`}>
                                                {m.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-6 font-body text-text-secondary leading-relaxed mb-10">
                                    {service.proof.paragraphs.map((p, idx) => (
                                        <p key={idx}>{p}</p>
                                    ))}
                                </div>

                                <Link
                                    href={service.proof.ctaHref}
                                    className="inline-flex items-center gap-2 font-heading font-semibold text-primary hover:text-primary-hover transition-colors group"
                                >
                                    {service.proof.ctaText}
                                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* ── Matters (Why Section) ── */}
            {service.matters && (
                <section className="w-full bg-surface-soft py-20 md:py-28 border-y border-border">
                    <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        {/* Left Content */}
                        <div className="w-full lg:w-1/2">
                            <span className="font-heading font-semibold text-sm text-primary uppercase tracking-wide mb-4 block">
                                {service.matters.eyebrow}
                            </span>
                            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-6 leading-tight">
                                {service.matters.title}
                            </h2>
                            <div className="space-y-6 font-body text-lg text-text-secondary leading-relaxed">
                                {service.matters.paragraphs.map((p, idx) => (
                                    <p key={idx}>{p}</p>
                                ))}
                            </div>
                            <ul className="mt-8 space-y-4">
                                {service.matters.checklist.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="font-heading font-medium text-text-primary">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Visual */}
                        <div className="w-full lg:w-1/2 relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary-accent/5 rounded-3xl transform rotate-3 scale-105" />
                            <div className="relative bg-surface border border-border rounded-2xl p-8 md:p-12 shadow-xl">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center">
                                        <TrendingUpIcon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-bold text-xl text-text-primary">
                                            {service.matters.visual.title}
                                        </h3>
                                        <p className="font-body text-sm text-text-secondary">
                                            {service.matters.visual.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Abstract Chart */}
                                <div className="h-48 w-full border-l-2 border-b-2 border-border relative flex items-end">
                                    {/* Paid Line (Flat) */}
                                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                                        <path d="M 0 120 Q 100 120 200 120 T 400 120" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeDasharray="4 4" />
                                    </svg>
                                    {/* Organic Curve (Compounding) */}
                                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                                        <path d="M 0 180 Q 150 160 250 80 T 400 20" fill="none" stroke="var(--primary)" strokeWidth="4" />
                                    </svg>
                                    {/* Labels */}
                                    <span className="absolute top-[10%] right-4 font-heading font-bold text-sm text-primary">
                                        Organic SEO
                                    </span>
                                    <span className="absolute top-[55%] right-4 font-heading font-medium text-sm text-text-muted">
                                        Paid Ads
                                    </span>
                                </div>

                                <div className="mt-8 p-4 bg-primary-soft rounded-lg border border-primary/20">
                                    <p className="font-body text-sm text-text-primary font-medium text-center">
                                        {service.matters.visual.quote}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* ── Capabilities (Grouped Checklist) ── */}
            {service.capabilities && service.capabilities.length > 0 && (
                <section className="w-full bg-background py-20 md:py-28">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="font-heading font-semibold text-sm text-primary uppercase tracking-wide mb-4 block">
                                Deep Expertise
                            </span>
                            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-6 leading-tight">
                                Our {service.title} Capabilities
                            </h2>
                            <p className="font-body text-lg text-text-secondary leading-relaxed">
                                We leave no stone unturned. Our frameworks cover every aspect of modern search engine algorithms to ensure maximum visibility.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {service.capabilities.map((group, idx) => (
                                <div key={idx} className="bg-surface rounded-xl p-8 border border-border shadow-sm">
                                    <h3 className="font-heading font-bold text-xl text-text-primary mb-6 pb-4 border-b border-border">
                                        {group.category}
                                    </h3>
                                    <ul className="space-y-4">
                                        {group.items.map((item, itemIdx) => (
                                            <li key={itemIdx} className="flex items-start gap-3">
                                                <CheckIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span className="font-body text-text-secondary">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── SubServices (Icon Card Grid) ── */}
            {service.subServices && service.subServices.length > 0 && (
                <section className="w-full bg-surface-soft py-20 md:py-28">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="font-heading font-semibold text-sm text-primary uppercase tracking-wide mb-4 block">
                                Our Channels
                            </span>
                            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-6 leading-tight">
                                Marketing Expertise Across Every Channel
                            </h2>
                            <p className="font-body text-lg text-text-secondary leading-relaxed">
                                Each channel is managed by dedicated specialists and integrated into a unified growth strategy.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {service.subServices.map((sub, idx) => {
                                const IconComp = getIcon(sub.iconName);
                                return (
                                    <div
                                        key={idx}
                                        className="group bg-surface rounded-xl p-7 border border-border hover:-translate-y-1 hover:shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col h-full"
                                    >
                                        <div className="w-11 h-11 rounded-lg bg-primary-soft text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <IconComp className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-heading font-bold text-lg text-text-primary mb-2">
                                            {sub.title}
                                        </h3>
                                        <p className="font-body text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
                                            {sub.description}
                                        </p>
                                        <Link
                                            href={sub.href}
                                            className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-primary mt-auto group-hover:gap-3 transition-all"
                                        >
                                            Learn more <ArrowRightIcon className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* ── Why Mixmedia ── */}
            <WhyMixmedia />

            {/* ── Process ── */}
            <Process />

            {/* ── FAQ ── */}
            <section className="w-full bg-background py-20 md:py-28">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-6 leading-tight">
                            {service.title} FAQs
                        </h2>
                        <p className="font-body text-lg text-text-secondary leading-relaxed">
                            Common questions about our {service.title.toLowerCase()} services and methodology.
                        </p>
                    </div>
                    <FAQAccordion items={service.faqs} />
                </div>
            </section>

            {/* ── Final CTA ── */}
            <FinalCTA />
        </main>
    );
}
