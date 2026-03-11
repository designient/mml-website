import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRightIcon, ArrowLeftIcon, ArrowRightIcon, LightbulbIcon } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/data/blogPosts";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ArticleSchema, BreadcrumbSchema } from "@/components/seo/jsonLd";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);
    if (!post) return {};
    return {
        title: post.metaTitle,
        description: post.metaDescription,
        alternates: { canonical: `https://mixmedialabs.com/blog/${post.slug}/` },
        openGraph: {
            title: post.metaTitle,
            description: post.metaDescription,
            url: `https://mixmedialabs.com/blog/${post.slug}/`,
            type: "article",
        },
        twitter: {
            title: post.metaTitle,
            description: post.metaDescription,
        },
    };
}

export default async function BlogArticlePage({ params }: Props) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);
    if (!post) notFound();

    const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
    const midpoint = Math.floor(post.content.length / 2);

    return (
        <main>
            <ArticleSchema
                title={post.title}
                description={post.metaDescription}
                slug={post.slug}
                datePublished={post.date}
                author={post.author}
            />
            <BreadcrumbSchema
                items={[
                    { name: "Home", href: "/" },
                    { name: "Blog", href: "/blog/" },
                    { name: post.title, href: `/blog/${post.slug}/` },
                ]}
            />

            {/* Hero */}
            <section className="w-full bg-background pt-12 pb-4 md:pt-16 md:pb-8">
                <div className="max-w-3xl mx-auto px-6">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 font-body text-sm text-text-muted mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <ChevronRightIcon className="w-3.5 h-3.5" />
                        <Link href="/blog/" className="hover:text-primary transition-colors">Blog</Link>
                        <ChevronRightIcon className="w-3.5 h-3.5" />
                        <span className="text-text-primary font-medium truncate max-w-[200px]">{post.category}</span>
                    </nav>

                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-6 flex-wrap">
                        <span className="inline-block bg-primary-soft px-3 py-1 rounded-full font-display font-semibold text-xs text-primary uppercase tracking-wider border border-primary/10">
                            {post.category}
                        </span>
                        <span className="font-body text-sm text-text-muted">{post.date}</span>
                        <span className="font-body text-sm text-text-muted">·</span>
                        <span className="font-body text-sm text-text-muted">{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary leading-tight tracking-tight mb-4">
                        {post.title}
                    </h1>

                    {/* Author */}
                    <p className="font-body text-text-muted mb-8">
                        By <span className="text-text-primary font-medium">{post.author}</span>
                    </p>
                </div>
            </section>

            {/* Gradient Banner */}
            <section className="w-full mb-12">
                <div className="max-w-4xl mx-auto px-6">
                    <div className={`h-56 md:h-72 w-full rounded-2xl bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/5 mix-blend-overlay" />
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="w-full bg-background pb-20 md:pb-28">
                <div className="max-w-3xl mx-auto px-6">
                    {/* Key Takeaways */}
                    {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                        <div className="bg-primary-soft/50 border border-primary/15 rounded-xl p-6 md:p-8 mb-10">
                            <div className="flex items-center gap-2 mb-4">
                                <LightbulbIcon className="w-5 h-5 text-primary" />
                                <h2 className="font-display font-bold text-lg text-text-primary">Key Takeaways</h2>
                            </div>
                            <ul className="space-y-2.5">
                                {post.keyTakeaways.map((takeaway, idx) => (
                                    <li key={idx} className="flex items-start gap-3 font-body text-sm text-text-secondary leading-relaxed">
                                        <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">{idx + 1}</span>
                                        {takeaway}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <article className="space-y-6">
                        {/* First half of content */}
                        {post.content.slice(0, midpoint).map((paragraph, idx) => (
                            <p key={idx} className="font-body text-lg text-text-secondary leading-relaxed">
                                {paragraph}
                            </p>
                        ))}

                        {/* Inline CTA */}
                        {post.content.length > 4 && (
                            <div className="bg-surface rounded-xl border border-border p-6 md:p-8 my-10 text-center">
                                <p className="font-display font-bold text-lg text-text-primary mb-2">
                                    Need help implementing this?
                                </p>
                                <p className="font-body text-sm text-text-secondary mb-5">
                                    Our team can build a custom growth strategy around these insights.
                                </p>
                                <PrimaryButton href="/contact-us/" className="text-sm px-6 py-3 inline-flex items-center gap-2 group">
                                    Book a Free Strategy Call
                                    <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                                </PrimaryButton>
                            </div>
                        )}

                        {/* Second half of content */}
                        {post.content.slice(midpoint).map((paragraph, idx) => (
                            <p key={`b-${idx}`} className="font-body text-lg text-text-secondary leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </article>

                    {/* Author Box */}
                    <div className="mt-16 bg-surface rounded-xl border border-border p-6 md:p-8 flex flex-col sm:flex-row items-start gap-5">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary-accent flex items-center justify-center flex-shrink-0">
                            <span className="font-display font-bold text-xl text-white">ML</span>
                        </div>
                        <div>
                            <h3 className="font-display font-bold text-lg text-text-primary mb-1">{post.author}</h3>
                            <p className="font-body text-sm text-text-secondary leading-relaxed">
                                The Mixmedia Labs editorial team writes about SEO, performance marketing, web development, and growth strategy. Every article is informed by real campaign data and client experience.
                            </p>
                        </div>
                    </div>

                    {/* Back to Blog */}
                    <div className="mt-10 pt-8 border-t border-border">
                        <Link
                            href="/blog/"
                            className="inline-flex items-center gap-2 font-body font-bold text-primary hover:gap-3 transition-all"
                        >
                            <ArrowLeftIcon className="w-4 h-4" />
                            Back to all articles
                        </Link>
                    </div>
                </div>
            </section>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
                <section className="w-full bg-surface py-20 md:py-28 border-y border-border">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <span className="font-body font-semibold text-xs text-text-primary bg-text-primary/8 px-4 py-2 rounded-full mb-6 uppercase tracking-[0.12em] inline-flex items-center">Keep Reading</span>
                            <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary leading-tight">Related Articles</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map((related) => (
                                <Link
                                    key={related.slug}
                                    href={`/blog/${related.slug}/`}
                                    className="group bg-background rounded-xl border border-border overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col"
                                >
                                    <div className={`h-36 w-full bg-gradient-to-br ${related.gradient} relative p-4 flex items-start`}>
                                        <span className="inline-block bg-surface/80 backdrop-blur-sm px-3 py-1 rounded-full font-display font-semibold text-xs text-text-primary border border-border/50">
                                            {related.category}
                                        </span>
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <h3 className="font-display font-bold text-base text-text-primary mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                            {related.title}
                                        </h3>
                                        <span className="font-body text-xs text-text-muted mt-auto pt-3 border-t border-border/50">{related.readTime}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <FinalCTA />
        </main>
    );
}
