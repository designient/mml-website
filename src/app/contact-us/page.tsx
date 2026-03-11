import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { MailIcon, MapPinIcon, PhoneIcon, CheckCircleIcon, ClockIcon, MessageSquareIcon, CalendarIcon } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Mixmedia Labs. Book a free 30-minute growth strategy call with our senior team in Bengaluru.",
    alternates: { canonical: "https://mixmedialabs.com/contact-us/" },
    openGraph: {
        title: "Contact Mixmedia Labs — Book a Free Strategy Call",
        description: "Get a free 30-minute growth audit with our senior strategists. No pitch decks — just actionable insights for your business.",
        url: "https://mixmedialabs.com/contact-us/",
    },
    twitter: {
        title: "Contact Mixmedia Labs — Book a Free Strategy Call",
        description: "Get a free 30-minute growth audit with our senior strategists in Bengaluru.",
    },
};

const processSteps = [
    { icon: <MessageSquareIcon className="w-5 h-5" />, step: "01", title: "You Reach Out", description: "Fill out the form below or email us. Tell us about your business, goals, and current challenges." },
    { icon: <CalendarIcon className="w-5 h-5" />, step: "02", title: "We Schedule a Call", description: "A senior strategist will reach out within 24 hours to schedule a free 30-minute growth audit." },
    { icon: <CheckCircleIcon className="w-5 h-5" />, step: "03", title: "You Get a Plan", description: "We deliver a custom growth roadmap with actionable recommendations — no obligation, no pressure." },
];

export default function ContactPage() {
    return (
        <main>
            <section className="w-full bg-background pt-12 pb-8 md:pt-16 md:pb-12">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="font-heading font-semibold text-sm text-primary uppercase tracking-wide mb-4 block">
                        Get In Touch
                    </span>
                    <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary leading-[1.1] tracking-tight mb-6">
                        Let&apos;s Build Something <span className="text-primary">Great Together</span>
                    </h1>
                    <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
                        Whether you need a growth strategy, a website, or a full-scale marketing overhaul — we&apos;re here to help.
                    </p>
                </div>
            </section>

            {/* Contact Info Strip */}
            <section className="w-full bg-background pb-8">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: <MailIcon className="w-5 h-5" />, label: "Email", value: "info@mixmedialabs.com", href: "mailto:info@mixmedialabs.com" },
                            { icon: <PhoneIcon className="w-5 h-5" />, label: "Phone", value: "+91 63615 91035", href: "tel:+916361591035" },
                            { icon: <MapPinIcon className="w-5 h-5" />, label: "Location", value: "HSR Layout, Bengaluru 560102", href: undefined },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-surface rounded-xl p-6 border border-border text-center">
                                <div className="w-10 h-10 rounded-lg bg-primary-soft text-primary flex items-center justify-center mx-auto mb-4">
                                    {item.icon}
                                </div>
                                <span className="font-heading font-semibold text-sm text-text-muted uppercase tracking-wide block mb-1">{item.label}</span>
                                {item.href ? (
                                    <a href={item.href} className="font-body text-text-primary hover:text-primary transition-colors">
                                        {item.value}
                                    </a>
                                ) : (
                                    <span className="font-body text-text-primary">{item.value}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Happens Next */}
            <section className="w-full bg-surface py-16 md:py-20 border-y border-border">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="font-heading font-semibold text-sm text-primary uppercase tracking-wide mb-4 block">What Happens Next</span>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-primary leading-tight">From First Message to Growth Roadmap</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {processSteps.map((step, idx) => (
                            <div key={idx} className="bg-background rounded-xl p-8 border border-border relative group hover:border-primary/30 hover:shadow-md transition-all duration-300">
                                <div className="w-12 h-12 rounded-lg bg-primary-soft text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    {step.icon}
                                </div>
                                <span className="font-heading font-bold text-xs text-primary/60 uppercase tracking-widest block mb-2">Step {step.step}</span>
                                <h3 className="font-heading font-bold text-lg text-text-primary mb-2">{step.title}</h3>
                                <p className="font-body text-sm text-text-secondary leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Response Time Banner */}
            <section className="w-full bg-dark-background py-10 md:py-12">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <ClockIcon className="w-5 h-5 text-primary" />
                        <span className="font-heading font-semibold text-sm text-primary uppercase tracking-wider">Response Time</span>
                    </div>
                    <p className="font-heading font-bold text-2xl md:text-3xl text-white mb-2">
                        We respond within <span className="text-primary">24 hours</span>
                    </p>
                    <p className="font-body text-sm text-white/60">
                        Most enquiries get a same-day response during business hours (Mon–Fri, 9 AM – 6 PM IST).
                    </p>
                </div>
            </section>

            <ContactSection />
            <FinalCTA />
        </main>
    );
}
