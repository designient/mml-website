import type { Metadata } from "next";
import Link from "next/link";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { ArrowRightIcon, RocketIcon, BookOpenIcon, UsersIcon, HeartIcon, BriefcaseIcon, MessageCircleIcon, CheckCircleIcon, SparklesIcon } from "lucide-react";
import { JobPostingSchema } from "@/components/seo/jsonLd";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { jobPostings } from "@/data/jobPostings";

export const metadata: Metadata = {
    title: "Careers",
    description: "Join Mixmedia Labs and help ambitious brands build compounding growth. We're hiring strategists, engineers, designers, and marketers in Bengaluru.",
    alternates: { canonical: "https://mixmedialabs.com/careers/" },
    openGraph: {
        title: "Careers at Mixmedia Labs — Build the Future of Growth",
        description: "We're hiring talented strategists, engineers, and designers in Bengaluru. Join us and build growth engines for ambitious brands.",
        url: "https://mixmedialabs.com/careers/",
    },
    twitter: {
        title: "Careers at Mixmedia Labs — Build the Future of Growth",
        description: "We're hiring in Bengaluru — strategists, engineers, designers, and marketers.",
    },
};



const perks = [
    { icon: <RocketIcon className="w-5 h-5" />, title: "High-Impact Work", description: "Work directly on growth strategies for ambitious brands. No busy work — every project moves the needle." },
    { icon: <BookOpenIcon className="w-5 h-5" />, title: "Learning Budget", description: "₹50K annual learning budget per person. Courses, conferences, certifications — whatever helps you grow." },
    { icon: <UsersIcon className="w-5 h-5" />, title: "Senior-Led Culture", description: "Learn from practitioners with 8–15 years of experience. No hierarchy for hierarchy's sake." },
    { icon: <HeartIcon className="w-5 h-5" />, title: "Flexible + Remote", description: "Hybrid-first. Work from our Bengaluru studio or remotely. We care about output, not hours logged." },
];

const hiringSteps = [
    { step: "01", title: "Apply", description: "Send your resume and portfolio. We review every application personally." },
    { step: "02", title: "Intro Call", description: "A 30-minute conversation about your experience, goals, and what excites you." },
    { step: "03", title: "Skill Assessment", description: "A practical assignment relevant to the role — nothing theoretical or generic." },
    { step: "04", title: "Final Interview", description: "Meet the team lead. Discuss culture fit, growth path, and start date." },
];

export default function CareersPage() {
    return (
        <main>
            {jobPostings.map((role, idx) => (
                <JobPostingSchema
                    key={idx}
                    title={role.title}
                    description={role.summary}
                    employmentType={role.type}
                    location={role.location}
                />
            ))}

            {/* Hero */}
            <section className="w-full bg-dark-background py-20 md:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary-accent/5 pointer-events-none" />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <span className="font-body text-xs font-medium text-primary uppercase tracking-[0.2em] mb-6 block">Careers</span>
                    <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight mb-8">
                        Build the <span className="text-primary">Future of Growth</span>
                    </h1>
                    <p className="font-body text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
                        We&apos;re looking for talented strategists, engineers, and designers who want to build growth engines for ambitious brands.
                    </p>
                    <PrimaryButton href="#openings" className="text-base px-8 py-4 flex items-center justify-center gap-2 group mx-auto">
                        View Open Roles
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </PrimaryButton>
                </div>
            </section>

            {/* Why Work Here */}
            <section className="w-full bg-background py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="font-heading font-semibold text-sm text-primary uppercase tracking-wide mb-4 block">Why Mixmedia Labs</span>
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-6 leading-tight">Not Just a Job — a Growth Engine for Your Career</h2>
                        <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
                            We build careers the same way we build growth for our clients — with strategy, intention, and relentless execution.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {perks.map((perk, idx) => (
                            <div key={idx} className="bg-surface rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                                <div className="w-10 h-10 rounded-lg bg-primary-soft text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    {perk.icon}
                                </div>
                                <h3 className="font-heading font-bold text-lg text-text-primary mb-2">{perk.title}</h3>
                                <p className="font-body text-sm text-text-secondary leading-relaxed">{perk.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hiring Process */}
            <section className="w-full bg-surface py-20 md:py-28 border-y border-border">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="font-heading font-semibold text-sm text-primary uppercase tracking-wide mb-4 block">Hiring Process</span>
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary leading-tight">How We Hire</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {hiringSteps.map((step, idx) => (
                            <div key={idx} className="bg-background rounded-xl p-8 border border-border relative group hover:border-primary/30 hover:shadow-md transition-all duration-300">
                                <span className="font-heading font-bold text-4xl text-primary/15 absolute top-4 right-6">{step.step}</span>
                                <div className="w-10 h-10 rounded-lg bg-primary-soft text-primary flex items-center justify-center mb-6">
                                    {idx === 0 && <BriefcaseIcon className="w-5 h-5" />}
                                    {idx === 1 && <MessageCircleIcon className="w-5 h-5" />}
                                    {idx === 2 && <SparklesIcon className="w-5 h-5" />}
                                    {idx === 3 && <CheckCircleIcon className="w-5 h-5" />}
                                </div>
                                <h3 className="font-heading font-bold text-lg text-text-primary mb-2">{step.title}</h3>
                                <p className="font-body text-sm text-text-secondary leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Culture & Growth */}
            <section className="w-full bg-dark-background py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                        <div>
                            <span className="font-heading font-semibold text-sm text-primary uppercase tracking-wide mb-4 block">Our Culture</span>
                            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6 leading-tight">
                                Build Skills That <span className="text-primary">Compound</span>
                            </h2>
                            <div className="space-y-4 font-body text-white/70 leading-relaxed">
                                <p>We don&apos;t believe in siloed specialisation. Our team members work across strategy, execution, and analysis — building T-shaped skills that compound over time.</p>
                                <p>Monthly knowledge-sharing sessions, quarterly skill sprints, and direct mentorship from senior leadership mean you&apos;re always growing — not just shipping.</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {["Cross-functional project exposure", "Direct client interaction from day one", "Annual learning budget (₹50K)", "Quarterly hack weeks", "Transparent career progression framework", "No micro-management — ownership-first culture"].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-white/5 rounded-lg px-5 py-3.5 border border-white/10">
                                    <CheckCircleIcon className="w-4 h-4 text-primary flex-shrink-0" />
                                    <span className="font-body text-sm text-white/80">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Roles */}
            <section id="openings" className="w-full bg-background py-20 md:py-28">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="font-heading font-semibold text-sm text-primary uppercase tracking-wide mb-4 block">Open Positions</span>
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary leading-tight">Join Our Team</h2>
                    </div>
                    <div className="space-y-4">
                        {jobPostings.map((role) => (
                            <Link key={role.slug} href={`/careers/${role.slug}/`} className="bg-surface rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                                <div>
                                    <h3 className="font-heading font-bold text-lg text-text-primary mb-1 group-hover:text-primary transition-colors">{role.title}</h3>
                                    <p className="font-body text-sm text-text-muted">{role.department} · {role.type} · {role.location}</p>
                                </div>
                                <span className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-primary group-hover:gap-3 transition-all flex-shrink-0">
                                    View Role <ArrowRightIcon className="w-3.5 h-3.5" />
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* General Application CTA */}
                    <div className="mt-16 bg-surface rounded-2xl p-8 md:p-12 border border-border text-center">
                        <h3 className="font-heading font-bold text-2xl text-text-primary mb-4">Don&apos;t See Your Role?</h3>
                        <p className="font-body text-text-secondary max-w-lg mx-auto leading-relaxed mb-6">
                            We&apos;re always looking for exceptional people. If you think you&apos;d be a great fit for Mixmedia Labs, send us your resume and tell us why.
                        </p>
                        <a
                            href="mailto:careers@mixmedialabs.com?subject=General Application — Mixmedia Labs"
                            className="inline-flex items-center gap-2 bg-primary text-white font-heading font-semibold text-sm px-8 py-4 rounded-lg hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20"
                        >
                            Send Your Resume
                            <ArrowRightIcon className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>

            <FinalCTA />
        </main>
    );
}
