import type { Metadata } from "next";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { ArrowRightIcon, TargetIcon, LayersIcon, ZapIcon, UsersIcon, CheckIcon, AwardIcon, HeartHandshakeIcon, RocketIcon } from "lucide-react";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
    title: "About Us",
    description: "Mixmedia Labs is a Bengaluru-based digital growth agency helping ambitious brands scale through SEO, performance marketing, web development, branding, and UI/UX design.",
    alternates: { canonical: "https://mixmedialabs.com/about-us/" },
    openGraph: {
        title: "About Mixmedia Labs — We Build Growth Engines",
        description: "8+ years, 50+ brands scaled, ₹100Cr+ revenue driven. Meet the Bengaluru-based growth agency behind it all.",
        url: "https://mixmedialabs.com/about-us/",
    },
    twitter: {
        title: "About Mixmedia Labs — We Build Growth Engines",
        description: "8+ years, 50+ brands scaled, ₹100Cr+ revenue driven. Meet the Bengaluru-based growth agency behind it all.",
    },
};

const values = [
    { icon: <TargetIcon className="w-5 h-5" />, title: "Strategy First", description: "Every engagement starts with deep research, not assumptions. We build custom growth roadmaps, not templates." },
    { icon: <LayersIcon className="w-5 h-5" />, title: "Execution Excellence", description: "We don't just plan — we ship. Our cross-functional teams move fast without compromising quality." },
    { icon: <ZapIcon className="w-5 h-5" />, title: "Radical Transparency", description: "Real-time dashboards, weekly syncs, and honest reporting. Your growth metrics are always visible." },
    { icon: <UsersIcon className="w-5 h-5" />, title: "Partnership Mindset", description: "We think like co-founders, not vendors. Your success metrics are our success metrics." },
];

const whyChooseUs = [
    { icon: <AwardIcon className="w-5 h-5" />, title: "Senior-Led Teams", description: "No juniors learning on your account. Every engagement is led by senior strategists with 8+ years of experience." },
    { icon: <HeartHandshakeIcon className="w-5 h-5" />, title: "Revenue-First Thinking", description: "We don't optimise for vanity metrics. Every strategy is reverse-engineered from your revenue targets and unit economics." },
    { icon: <RocketIcon className="w-5 h-5" />, title: "Full-Stack Execution", description: "Strategy, content, design, development, and analytics — all under one roof. No fragmented vendor ecosystems." },
];

const leadership = [
    { name: "Rahul Menon", role: "Founder & CEO", bio: "15 years in digital growth. Ex-performance lead at two funded startups. Built Mixmedia Labs to bridge strategy and execution.", initials: "RM" },
    { name: "Priya Sharma", role: "Head of Marketing", bio: "10 years in B2B marketing. Led demand-gen for SaaS companies scaling from ₹10L to ₹10Cr ARR.", initials: "PS" },
    { name: "Arjun Nair", role: "Head of Engineering", bio: "12 years building high-performance web applications. Ex-lead engineer at an enterprise SaaS platform.", initials: "AN" },
    { name: "Meera Krishnan", role: "Creative Director", bio: "Award-winning designer with 9+ years in branding and UI/UX. Built brand systems for 30+ companies.", initials: "MK" },
];

export default function AboutPage() {
    return (
        <main>
            {/* Hero */}
            <section className="relative w-full bg-dark-background overflow-hidden py-20 md:py-28 lg:py-32">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary-accent/5 pointer-events-none" />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <span className="font-body text-xs font-medium text-primary uppercase tracking-[0.2em] mb-6 block">
                        About Mixmedia Labs
                    </span>
                    <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight mb-8">
                        We Build <span className="text-primary">Growth Engines</span> for Ambitious Brands
                    </h1>
                    <p className="font-body text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
                        Mixmedia Labs is a Bengaluru-based digital growth agency. We partner with B2B companies and ambitious brands to build compounding growth systems across marketing, design, web, branding, and product experiences.
                    </p>
                    <PrimaryButton href="/contact-us/" className="text-base px-8 py-4 flex items-center justify-center gap-2.5 group mx-auto">
                        Work With Us
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </PrimaryButton>
                </div>
            </section>

            {/* Story */}
            <section className="w-full bg-background py-20 md:py-28">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="font-body font-semibold text-xs text-text-primary bg-text-primary/8 px-4 py-2 rounded-full mb-6 uppercase tracking-[0.12em] inline-flex items-center">Our Story</span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-6 leading-tight">Built by Practitioners, Not Theorists</h2>
                    </div>
                    <div className="prose prose-lg max-w-none font-body text-text-secondary leading-relaxed space-y-6">
                        <p>Founded in Bengaluru, Mixmedia Labs was born from a simple frustration: most agencies deliver reports, not results. We set out to build something different — an agency that thinks like a growth team embedded inside your company.</p>
                        <p>Over 8+ years, we&apos;ve scaled 50+ brands across SEO, paid media, web development, branding, and product design. Our team of senior strategists, engineers, and designers has driven ₹100Cr+ in measurable revenue for our clients.</p>
                        <p>We don&apos;t chase vanity metrics. We don&apos;t use junior teams. And we don&apos;t do cookie-cutter playbooks. Every engagement is custom-built around your market, audience, and growth stage.</p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="w-full bg-surface py-20 md:py-28 border-y border-border">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="font-body font-semibold text-xs text-text-primary bg-text-primary/8 px-4 py-2 rounded-full mb-6 uppercase tracking-[0.12em] inline-flex items-center">What We Stand For</span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary leading-tight">Our Mission & Vision</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-background rounded-2xl p-8 md:p-10 border-l-4 border-l-primary border border-border">
                            <span className="font-body font-semibold text-xs text-text-primary bg-text-primary/8 px-4 py-2 rounded-full mb-6 uppercase tracking-[0.12em] inline-flex items-center">Our Mission</span>
                            <h3 className="font-display font-bold text-2xl text-text-primary mb-4 leading-tight">Make world-class growth accessible to ambitious brands.</h3>
                            <p className="font-body text-text-secondary leading-relaxed">
                                We exist to close the gap between strategy and execution. Too many brands have great products but lack the growth infrastructure to scale. We build that infrastructure — from first click to closed revenue — so founders and marketing leaders can focus on what they do best.
                            </p>
                        </div>
                        <div className="bg-background rounded-2xl p-8 md:p-10 border-l-4 border-l-secondary-accent border border-border">
                            <span className="font-body font-semibold text-xs text-text-primary bg-text-primary/8 px-4 py-2 rounded-full mb-6 uppercase tracking-[0.12em] inline-flex items-center">Our Vision</span>
                            <h3 className="font-display font-bold text-2xl text-text-primary mb-4 leading-tight">Be the growth partner every B2B brand in India deserves.</h3>
                            <p className="font-body text-text-secondary leading-relaxed">
                                We envision a world where Indian brands compete globally — not because they outspent their competitors, but because they out-strategised them. Mixmedia Labs is building the playbook for compounding, sustainable digital growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="w-full bg-background py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="font-body font-semibold text-xs text-text-primary bg-text-primary/8 px-4 py-2 rounded-full mb-6 uppercase tracking-[0.12em] inline-flex items-center">Our Values</span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary leading-tight">What Drives Us</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, idx) => (
                            <div key={idx} className="bg-surface rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                                <div className="w-10 h-10 rounded-lg bg-primary-soft text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    {value.icon}
                                </div>
                                <h3 className="font-display font-bold text-lg text-text-primary mb-2">{value.title}</h3>
                                <p className="font-body text-sm text-text-secondary leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="w-full bg-dark-background py-16 md:py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
                        {[
                            { value: "50+", label: "Brands Scaled" },
                            { value: "200+", label: "Projects Delivered" },
                            { value: "₹100Cr+", label: "Revenue Driven" },
                            { value: "8+", label: "Years Experience" },
                        ].map((stat, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <span className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight">{stat.value}</span>
                                <span className="font-body text-xs text-white/60 uppercase tracking-[0.15em] mt-2">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Clients Choose Us */}
            <section className="w-full bg-background py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="font-body font-semibold text-xs text-text-primary bg-text-primary/8 px-4 py-2 rounded-full mb-6 uppercase tracking-[0.12em] inline-flex items-center">The Mixmedia Difference</span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-6 leading-tight">Why Clients Choose Us</h2>
                        <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
                            We&apos;re not for everyone. But if you&apos;re serious about growth, here&apos;s what makes us the right partner.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {whyChooseUs.map((item, idx) => (
                            <div key={idx} className="bg-surface rounded-xl p-8 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                                <div className="w-12 h-12 rounded-lg bg-primary-soft text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="font-display font-bold text-xl text-text-primary mb-3">{item.title}</h3>
                                <p className="font-body text-text-secondary leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <ul className="inline-flex flex-wrap justify-center gap-x-8 gap-y-3">
                            {["98% client retention rate", "Average 3.2x ROI", "No long-term lock-ins", "Dedicated strategist per account"].map((point, idx) => (
                                <li key={idx} className="flex items-center gap-2 font-body text-sm text-text-secondary">
                                    <CheckIcon className="w-4 h-4 text-primary flex-shrink-0" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="w-full bg-surface py-20 md:py-28 border-y border-border">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="font-body font-semibold text-xs text-text-primary bg-text-primary/8 px-4 py-2 rounded-full mb-6 uppercase tracking-[0.12em] inline-flex items-center">Our Leadership</span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-6 leading-tight">The People Behind the Growth</h2>
                        <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
                            Senior practitioners who&apos;ve been in the trenches — not just managing campaigns, but building companies.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {leadership.map((person, idx) => (
                            <div key={idx} className="bg-background rounded-xl border border-border overflow-hidden hover:shadow-md hover:border-primary/30 transition-all duration-300 group">
                                <div className="h-48 bg-gradient-to-br from-primary/80 to-secondary-accent/80 relative flex items-center justify-center">
                                    <span className="font-display font-bold text-5xl text-white/80 group-hover:scale-110 transition-transform duration-300">
                                        {person.initials}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-display font-bold text-lg text-text-primary mb-1">{person.name}</h3>
                                    <span className="font-display font-semibold text-xs text-primary uppercase tracking-wider block mb-3">{person.role}</span>
                                    <p className="font-body text-sm text-text-secondary leading-relaxed">{person.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCTA />
        </main>
    );
}
