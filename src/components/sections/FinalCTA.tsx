import React from "react";
import { ArrowRightIcon } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function FinalCTA() {
    return (
        <section className="w-full bg-dark-background py-20 md:py-28 lg:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-dark-background to-secondary-accent/5 opacity-50 mix-blend-screen pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight tracking-tight">
                    Ready to Build Your <br className="hidden md:block" />
                    <span className="text-primary">Growth Engine?</span>
                </h2>

                <p className="font-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
                    Book a free 30-minute growth audit with our senior strategists. No
                    pitch decks. Just actionable insights tailored to your business.
                </p>

                <div className="flex flex-col items-center gap-6">
                    <PrimaryButton
                        href="/contact-us/"
                        className="text-lg px-10 py-5 flex items-center justify-center gap-3 group shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
                    >
                        Book Your Free Growth Audit
                        <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </PrimaryButton>

                    <div className="flex items-center gap-2 text-sm text-white/70 font-body">
                        <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>No commitment required · Response within 24 hours</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
