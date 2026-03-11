import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blogPosts";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
    title: "Sitemap",
    description: "Sitemap for Mixmedia Labs — browse all pages on our website.",
    alternates: { canonical: "https://mixmedialabs.com/sitemap/" },
    openGraph: {
        title: "Sitemap | Mixmedia Labs",
        description: "Browse all pages, services, blog articles, and case studies on the Mixmedia Labs website.",
        url: "https://mixmedialabs.com/sitemap/",
    },
    robots: { index: false, follow: true },
};

const mainPages = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us/" },
    { name: "Blog", href: "/blog/" },
    { name: "Case Studies", href: "/case-study/" },
    { name: "Contact Us", href: "/contact-us/" },
    { name: "Careers", href: "/careers/" },
    { name: "Privacy Policy", href: "/privacy-policy/" },
];

export default function SitemapPage() {
    return (
        <main>
            <section className="w-full bg-background py-16 md:py-24">
                <div className="max-w-5xl mx-auto px-6">
                    <h1 className="font-display font-bold text-4xl md:text-5xl text-text-primary mb-12">Sitemap</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div>
                            <h2 className="font-display font-bold text-xl text-text-primary mb-6 pb-3 border-b border-border">Main Pages</h2>
                            <ul className="space-y-3">
                                {mainPages.map((page, idx) => (
                                    <li key={idx}>
                                        <Link href={page.href} className="font-body text-text-secondary hover:text-primary transition-colors">
                                            {page.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-display font-bold text-xl text-text-primary mb-6 pb-3 border-b border-border">Services</h2>
                            <ul className="space-y-3">
                                {services.map((service, idx) => (
                                    <li key={idx}>
                                        <Link href={`/${service.slug}/`} className="font-body text-text-secondary hover:text-primary transition-colors">
                                            {service.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-display font-bold text-xl text-text-primary mb-6 pb-3 border-b border-border">Blog</h2>
                            <ul className="space-y-3">
                                {blogPosts.map((post) => (
                                    <li key={post.slug}>
                                        <Link href={`/blog/${post.slug}/`} className="font-body text-sm text-text-secondary hover:text-primary transition-colors leading-snug block">
                                            {post.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-display font-bold text-xl text-text-primary mb-6 pb-3 border-b border-border">Case Studies</h2>
                            <ul className="space-y-3">
                                {caseStudies.map((cs) => (
                                    <li key={cs.slug}>
                                        <Link href={`/case-study/${cs.slug}/`} className="font-body text-text-secondary hover:text-primary transition-colors">
                                            {cs.client}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
