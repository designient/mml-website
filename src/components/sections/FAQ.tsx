"use client";

import React from "react";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FAQSchema } from "@/components/seo/jsonLd";

const faqs = [
    {
        question: "What industries do you specialize in?",
        answer: "We work across B2B SaaS, e-commerce, fintech, healthtech, and enterprise brands. Our frameworks are industry-agnostic but our execution is deeply contextual.",
    },
    {
        question: "How long before we see results?",
        answer: "SEO typically shows meaningful traction in 3-6 months. Paid campaigns can deliver results within weeks. We set clear expectations during the strategy phase.",
    },
    {
        question: "Do you work with startups or only established brands?",
        answer: "Both. We work with funded startups ready to scale and established brands looking to accelerate digital growth.",
    },
    {
        question: "What does your pricing look like?",
        answer: "We offer project-based and retainer models. Engagements typically start at ₹2L/month depending on scope and channels.",
    },
    {
        question: "How is Mixmedia Labs different from other agencies?",
        answer: "We combine strategic depth with execution speed. No junior teams, no templated playbooks. Every engagement is led by senior strategists.",
    },
    {
        question: "Can we start with a single channel?",
        answer: "Absolutely. Many clients start with SEO or paid media and expand as they see results.",
    },
];

export function FAQ() {
    return (
        <section className="w-full bg-background py-20 md:py-28">
            <FAQSchema items={faqs} />
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-heading font-bold text-4xl md:text-5xl text-text-primary mb-6 leading-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="font-body text-lg text-text-secondary leading-relaxed">
                        Everything you need to know about partnering with Mixmedia Labs.
                    </p>
                </div>

                <FAQAccordion items={faqs} />
            </div>
        </section>
    );
}
