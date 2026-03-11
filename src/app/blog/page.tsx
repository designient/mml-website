import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
    title: "Blog",
    description: "Insights, strategies, and case studies from Mixmedia Labs. Learn about SEO, digital marketing, web development, and growth hacking.",
    alternates: { canonical: "https://mixmedialabs.com/blog/" },
    openGraph: {
        title: "Blog — Insights & Growth Strategies | Mixmedia Labs",
        description: "Actionable insights, case studies, and strategies from our team of growth experts.",
        url: "https://mixmedialabs.com/blog/",
    },
    twitter: {
        title: "Blog — Insights & Growth Strategies | Mixmedia Labs",
        description: "Actionable insights, case studies, and strategies from our team of growth experts.",
    },
};

export default function BlogPage() {
    const [featured, ...rest] = blogPosts;

    return (
        <main>
            <section className="w-full bg-background pt-12 pb-20 md:pt-16 md:pb-28">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="font-body font-semibold text-xs text-text-primary bg-text-primary/8 px-4 py-2 rounded-full mb-6 uppercase tracking-[0.12em] inline-flex items-center">Blog</span>
                        <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary leading-tight tracking-tight mb-6">
                            Insights & <span className="text-primary">Growth Strategies</span>
                        </h1>
                        <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
                            Actionable insights, case studies, and strategies from our team of growth experts.
                        </p>
                    </div>

                    {/* Featured Post */}
                    <Link
                        href={`/blog/${featured.slug}/`}
                        className="group block bg-surface rounded-2xl border border-border overflow-hidden mb-16 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className={`h-56 lg:h-auto min-h-[280px] bg-gradient-to-br ${featured.gradient} relative`}>
                                <div className="absolute top-4 left-4">
                                    <span className="inline-block bg-surface/80 backdrop-blur-sm px-3 py-1 rounded-full font-display font-semibold text-xs text-text-primary border border-border/50">
                                        {featured.category}
                                    </span>
                                </div>
                                <div className="absolute bottom-4 left-4">
                                    <span className="inline-block bg-primary/90 px-3 py-1 rounded-full font-display font-semibold text-xs text-white uppercase tracking-wider">
                                        Featured
                                    </span>
                                </div>
                            </div>
                            <div className="p-8 md:p-10 flex flex-col justify-center">
                                <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-4 group-hover:text-primary transition-colors leading-tight">
                                    {featured.title}
                                </h2>
                                <p className="font-body text-text-secondary leading-relaxed mb-6 line-clamp-3">
                                    {featured.excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="font-body text-sm text-text-muted">{featured.date} · {featured.readTime}</span>
                                    <span className="inline-flex items-center gap-2 font-body font-bold text-sm text-primary group-hover:gap-3 transition-all">
                                        Read article <ArrowRightIcon className="w-3.5 h-3.5" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Post Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {rest.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}/`}
                                className="group bg-surface rounded-xl border border-border overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col"
                            >
                                <div className={`h-44 w-full bg-gradient-to-br ${post.gradient} relative p-4 flex items-start`}>
                                    <span className="inline-block bg-surface/80 backdrop-blur-sm px-3 py-1 rounded-full font-display font-semibold text-xs text-text-primary border border-border/50">
                                        {post.category}
                                    </span>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h2 className="font-display font-bold text-xl text-text-primary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>
                                    <p className="font-body text-sm text-text-secondary leading-relaxed mb-6 flex-grow line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between pt-4 border-t border-border/50 font-body text-xs text-text-muted">
                                        <span>{post.date}</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="w-full bg-dark-background py-16 md:py-20">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <span className="font-body font-semibold text-xs text-text-primary bg-text-primary/8 px-4 py-2 rounded-full mb-6 uppercase tracking-[0.12em] inline-flex items-center">Stay Updated</span>
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4 leading-tight">
                        Get Growth Insights in Your Inbox
                    </h2>
                    <p className="font-body text-white/60 mb-8 max-w-lg mx-auto">
                        Join 2,000+ marketing leaders. One actionable insight per week — no spam, no fluff.
                    </p>
                    <form action="https://formsubmit.co/info@mixmedialabs.com" method="POST" className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input type="hidden" name="_subject" value="New Newsletter Subscriber" />
                        <input type="hidden" name="_next" value="https://mixmedialabs.com/blog/" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input
                            type="email"
                            name="Email"
                            placeholder="you@company.com"
                            required
                            className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3.5 font-body text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-transparent transition-all"
                        />
                        <button type="submit" className="bg-primary hover:bg-primary-hover text-white font-body font-semibold text-sm px-6 py-3.5 rounded-full transition-colors whitespace-nowrap shadow-lg shadow-primary/20">
                            Subscribe
                        </button>
                    </form>
                    <p className="font-body text-xs text-white/40 mt-4">No spam. Unsubscribe anytime.</p>
                </div>
            </section>

            <FinalCTA />
        </main>
    );
}
