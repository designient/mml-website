import React from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

export function FinalCTA() {
    return (
        <section className="w-full bg-text-primary py-20 md:py-28 lg:py-32 rounded-t-[2.5rem] relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary-accent/5 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <span className="inline-flex items-center font-body font-semibold text-xs text-white/80 bg-white/10 px-4 py-2 rounded-full mb-8 uppercase tracking-[0.12em]">
                    Let&apos;s Work Together
                </span>

                <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-[1.08] tracking-tight">
                    Ready to Build Your{" "}
                    <span className="text-primary italic">Growth Engine?</span>
                </h2>

                <p className="font-body text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                    Book a free 30-minute growth audit with our senior strategists. No
                    pitch decks. Just actionable insights tailored to your business.
                </p>

                <div className="flex flex-col items-center gap-6">
                    <Link
                        href="/contact-us/"
                        className="inline-flex items-center gap-3 font-body font-bold text-base bg-primary text-white pl-8 pr-3 py-4 rounded-full hover:bg-primary-hover transition-colors duration-300 group shadow-lg shadow-primary/25"
                    >
                        Book Your Free Growth Audit
                        <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                            <ArrowUpRightIcon className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </span>
                    </Link>

                    <div className="flex items-center gap-2 text-sm text-white/50 font-body">
                        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>No commitment required · Response within 24 hours</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
