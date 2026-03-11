"use client";

import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from "lucide-react";

const testimonials = [
    {
        quote: "Mixmedia Labs transformed our digital presence completely. Their SEO strategy alone drove a 340% increase in organic traffic within 8 months. The team thinks like growth partners, not just vendors.",
        author: "Rahul Mehta",
        title: "CEO",
        company: "TechScale SaaS",
    },
    {
        quote: "We'd worked with three agencies before finding Mixmedia Labs. The difference? They actually understand B2B sales cycles. Our pipeline from organic channels grew 12x in the first year.",
        author: "Priya Sharma",
        title: "VP Marketing",
        company: "FinFlow Technologies",
    },
    {
        quote: "Their performance marketing team is exceptional. We saw a 520% revenue increase during Q4 with a 45% lower CAC. They don't just run ads — they build systems.",
        author: "Arjun Patel",
        title: "Founder",
        company: "UrbanCraft D2C",
    },
];

export function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const current = testimonials[activeIndex];

    const goToPrev = () => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };
    const goToNext = () => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="w-full bg-white py-20 md:py-28">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center font-body font-semibold text-xs text-text-primary bg-text-primary/8 px-4 py-2 rounded-full mb-6 uppercase tracking-[0.12em]">
                        Testimonials
                    </span>
                    <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-[3.25rem] text-text-primary leading-[1.1] tracking-tight">
                        Our Customers Say
                    </h2>
                </div>

                <div className="relative bg-background rounded-2xl p-8 md:p-12 border border-gray-100">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-8">
                        <QuoteIcon className="w-6 h-6 text-primary" />
                    </div>

                    <blockquote className="font-body text-xl md:text-2xl text-text-primary leading-relaxed mb-10">
                        &ldquo;{current.quote}&rdquo;
                    </blockquote>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="font-display font-bold text-lg text-primary">
                                    {current.author.charAt(0)}
                                </span>
                            </div>
                            <div>
                                <span className="font-body font-bold text-text-primary block">
                                    {current.author}
                                </span>
                                <span className="font-body text-sm text-text-muted">
                                    {current.title}, {current.company}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={goToPrev}
                                className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/30 transition-colors duration-200 cursor-pointer"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeftIcon className="w-5 h-5" />
                            </button>
                            <button
                                onClick={goToNext}
                                className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/30 transition-colors duration-200 cursor-pointer"
                                aria-label="Next testimonial"
                            >
                                <ChevronRightIcon className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-8">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === activeIndex
                                        ? "bg-primary w-6"
                                        : "bg-gray-200 hover:bg-text-muted w-2"
                                    }`}
                                aria-label={`Go to testimonial ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
