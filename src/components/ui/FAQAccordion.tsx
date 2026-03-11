"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className="bg-surface rounded-xl border border-border overflow-hidden transition-all duration-300 hover:border-primary/30"
                >
                    <button
                        onClick={() => toggle(idx)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                        aria-expanded={openIndex === idx}
                    >
                        <span className="font-display font-semibold text-lg text-text-primary pr-4">
                            {item.question}
                        </span>
                        <ChevronDownIcon
                            className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""
                                }`}
                        />
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="px-6 pb-6 pt-0">
                            <p className="font-body text-text-secondary leading-relaxed">
                                {item.answer}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
