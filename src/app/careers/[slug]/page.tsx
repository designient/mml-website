import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRightIcon, ArrowLeftIcon, ArrowRightIcon, MapPinIcon, BriefcaseIcon, ClockIcon, CheckIcon, SparklesIcon } from "lucide-react";
import { jobPostings, getJobBySlug } from "@/data/jobPostings";
import { BreadcrumbSchema, JobPostingSchema } from "@/components/seo/jsonLd";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { CareerApplicationForm } from "@/components/forms/CareerApplicationForm";

export function generateStaticParams() {
    return jobPostings.map((job) => ({ slug: job.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const job = getJobBySlug(slug);
    if (!job) return {};
    return {
        title: `${job.title} — Careers at Mixmedia Labs`,
        description: job.summary.slice(0, 160),
        alternates: { canonical: `https://mixmedialabs.com/careers/${job.slug}/` },
        openGraph: {
            title: `${job.title} — Careers at Mixmedia Labs`,
            description: job.summary.slice(0, 160),
            url: `https://mixmedialabs.com/careers/${job.slug}/`,
        },
        twitter: {
            title: `${job.title} — Careers at Mixmedia Labs`,
            description: job.summary.slice(0, 160),
        },
    };
}

export default async function JobDetailPage({ params }: Props) {
    const { slug } = await params;
    const job = getJobBySlug(slug);
    if (!job) notFound();

    const relatedJobs = jobPostings.filter((j) => j.slug !== job.slug).slice(0, 3);

    return (
        <main>
            <JobPostingSchema
                title={job.title}
                description={job.summary}
                employmentType={job.type}
                location={job.location}
            />
            <BreadcrumbSchema
                items={[
                    { name: "Home", href: "/" },
                    { name: "Careers", href: "/careers/" },
                    { name: job.title, href: `/careers/${job.slug}/` },
                ]}
            />

            {/* Hero */}
            <section className="w-full bg-dark-background py-20 md:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary-accent/5 pointer-events-none" />
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 font-body text-sm text-white/60 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRightIcon className="w-3.5 h-3.5" />
                        <Link href="/careers/" className="hover:text-white transition-colors">Careers</Link>
                        <ChevronRightIcon className="w-3.5 h-3.5" />
                        <span className="text-white font-medium truncate max-w-[200px]">{job.title}</span>
                    </nav>

                    <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight mb-6">
                        {job.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-sm">
                        <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/15 font-body text-white/80">
                            <BriefcaseIcon className="w-3.5 h-3.5" /> {job.department}
                        </span>
                        <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/15 font-body text-white/80">
                            <ClockIcon className="w-3.5 h-3.5" /> {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/15 font-body text-white/80">
                            <MapPinIcon className="w-3.5 h-3.5" /> {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5 bg-primary/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/30 font-body text-primary">
                            {job.experience} experience
                        </span>
                    </div>
                </div>
            </section>

            {/* Summary */}
            <section className="w-full bg-background py-12 md:py-16">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="font-display font-bold text-2xl text-text-primary mb-4">About This Role</h2>
                    <p className="font-body text-lg text-text-secondary leading-relaxed">{job.summary}</p>
                </div>
            </section>

            {/* Responsibilities */}
            <section className="w-full bg-surface py-12 md:py-16 border-y border-border">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="font-display font-bold text-2xl text-text-primary mb-6">What You&apos;ll Do</h2>
                    <ul className="space-y-3">
                        {job.responsibilities.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 font-body text-text-secondary leading-relaxed">
                                <CheckIcon className="w-4 h-4 text-primary flex-shrink-0 mt-1.5" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Requirements */}
            <section className="w-full bg-background py-12 md:py-16">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="font-display font-bold text-2xl text-text-primary mb-6">What We&apos;re Looking For</h2>
                    <ul className="space-y-3">
                        {job.requirements.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 font-body text-text-secondary leading-relaxed">
                                <CheckIcon className="w-4 h-4 text-primary flex-shrink-0 mt-1.5" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Nice-to-Haves */}
            {job.niceToHave.length > 0 && (
                <section className="w-full bg-surface py-12 md:py-16 border-y border-border">
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="font-display font-bold text-2xl text-text-primary mb-6">Nice to Have</h2>
                        <ul className="space-y-3">
                            {job.niceToHave.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 font-body text-text-secondary leading-relaxed">
                                    <SparklesIcon className="w-4 h-4 text-secondary-accent flex-shrink-0 mt-1.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}

            {/* Apply CTA */}
            <section className="w-full bg-dark-background py-16 md:py-20 relative">
                <div className="absolute inset-0 bg-background pointer-events-none" />
                <div className="max-w-3xl mx-auto px-6 relative z-10">
                    <CareerApplicationForm jobTitle={job.title} />
                </div>
            </section>

            {/* Related Openings */}
            {relatedJobs.length > 0 && (
                <section className="w-full bg-background py-16 md:py-20 border-b border-border">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="font-display font-bold text-2xl text-text-primary mb-8 text-center">Other Open Positions</h2>
                        <div className="space-y-4">
                            {relatedJobs.map((related) => (
                                <Link
                                    key={related.slug}
                                    href={`/careers/${related.slug}/`}
                                    className="flex flex-col sm:flex-row sm:items-center justify-between bg-surface rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 gap-4"
                                >
                                    <div>
                                        <h3 className="font-display font-bold text-lg text-text-primary mb-1">{related.title}</h3>
                                        <p className="font-body text-sm text-text-muted">{related.department} · {related.type} · {related.location}</p>
                                    </div>
                                    <ArrowRightIcon className="w-4 h-4 text-primary flex-shrink-0" />
                                </Link>
                            ))}
                        </div>
                        <div className="mt-8 text-center">
                            <Link
                                href="/careers/"
                                className="inline-flex items-center gap-2 font-display font-semibold text-text-primary hover:text-primary transition-colors"
                            >
                                <ArrowLeftIcon className="w-4 h-4" />
                                All open positions
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            <FinalCTA />
        </main>
    );
}
