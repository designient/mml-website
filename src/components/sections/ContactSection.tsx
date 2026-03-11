"use client";

import React, { useState } from "react";
import { ArrowRightIcon, MailIcon, PhoneIcon } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function ContactSection() {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email && phone) {
            setSubmitted(true);
        }
    };

    return (
        <section className="w-full bg-background py-20 md:py-28">
            <div className="max-w-5xl mx-auto px-6">
                <div className="bg-surface rounded-2xl border border-border shadow-lg overflow-hidden flex flex-col lg:flex-row">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <span className="font-heading font-semibold text-sm text-primary uppercase tracking-wide mb-4 block">
                            Let&apos;s Discuss
                        </span>
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mb-4 leading-tight">
                            Ready to Accelerate Your Growth?
                        </h2>
                        <p className="font-body text-text-secondary leading-relaxed mb-8">
                            Share your details and our senior strategists will reach out within
                            24 hours with a custom growth plan tailored to your business.
                        </p>

                        <div className="flex items-center gap-6 text-sm">
                            <div className="flex items-center gap-2 text-text-muted">
                                <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="font-body">Free consultation</span>
                            </div>
                            <div className="flex items-center gap-2 text-text-muted">
                                <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="font-body">No commitment</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="w-full lg:w-1/2 bg-surface-soft p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-border">
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center h-full text-center py-8">
                                <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="font-heading font-bold text-2xl text-text-primary mb-2">
                                    Thank You!
                                </h3>
                                <p className="font-body text-text-secondary">
                                    We&apos;ll be in touch within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <div>
                                    <label htmlFor="contact-email" className="font-heading font-semibold text-sm text-text-primary mb-2 block">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-text-muted" />
                                        <input
                                            id="contact-email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="you@company.com"
                                            required
                                            className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-border bg-surface font-body text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="contact-phone" className="font-heading font-semibold text-sm text-text-primary mb-2 block">
                                        Phone Number
                                    </label>
                                    <div className="relative">
                                        <PhoneIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-text-muted" />
                                        <input
                                            id="contact-phone"
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="+91 98765 43210"
                                            required
                                            className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-border bg-surface font-body text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                                        />
                                    </div>
                                </div>

                                <PrimaryButton className="w-full justify-center text-base py-4 mt-2 flex items-center gap-2 group">
                                    Get Your Free Growth Plan
                                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </PrimaryButton>

                                <p className="font-body text-xs text-text-muted text-center mt-1">
                                    We respect your privacy. No spam, ever.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
