import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

const blogs = [
    {
        category: "SEO",
        title: "Why Most B2B SEO Strategies Fail (And How to Fix Yours)",
        excerpt: "The three critical mistakes we see in 90% of B2B SEO audits.",
        date: "Mar 2026",
        readTime: "8 min read",
        gradient: "from-primary/20 to-primary/5",
    },
    {
        category: "Performance Marketing",
        title: "The ROAS Playbook: Scaling Paid Campaigns Without Burning Budget",
        excerpt: "A framework for sustainable paid growth across Google and Meta.",
        date: "Feb 2026",
        readTime: "6 min read",
        gradient: "from-secondary-accent/20 to-secondary-accent/5",
    },
    {
        category: "Strategy",
        title: "From ₹10L to ₹1Cr MRR: A Digital Growth Case Study",
        excerpt: "How we helped a Bengaluru SaaS startup 10x their monthly revenue.",
        date: "Jan 2026",
        readTime: "10 min read",
        gradient: "from-primary/10 to-secondary-accent/10",
    },
];

export function Insights() {
    return (
        <section className="w-full bg-background py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center font-body font-semibold text-xs text-text-primary bg-text-primary/8 px-4 py-2 rounded-full mb-6 uppercase tracking-[0.12em]">
                            Insights
                        </span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-[3.25rem] text-text-primary leading-[1.1] tracking-tight">
                            Latest from the Mixmedia Labs Blog
                        </h2>
                    </div>
                    <Link
                        href="/blog/"
                        className="font-body font-bold text-primary hover:text-primary-hover transition-colors inline-flex items-center gap-2"
                    >
                        View all articles
                        <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog, idx) => (
                        <div
                            key={idx}
                            className="group bg-white rounded-2xl border border-border overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 flex flex-col cursor-pointer"
                        >
                            <div className={`h-44 w-full bg-gradient-to-br ${blog.gradient} relative p-5 flex items-start`}>
                                <span className="inline-block bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full font-body font-bold text-xs text-text-primary">
                                    {blog.category}
                                </span>
                            </div>

                            <div className="p-7 flex flex-col flex-grow">
                                <h3 className="font-display font-bold text-xl text-text-primary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    {blog.title}
                                </h3>
                                <p className="font-body text-sm text-text-secondary leading-relaxed mb-6 flex-grow line-clamp-2">
                                    {blog.excerpt}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-border font-body text-xs text-text-muted">
                                    <span>{blog.date}</span>
                                    <span>{blog.readTime}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
