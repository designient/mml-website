import React from "react";
import Link from "next/link";
import { MailIcon, MapPinIcon, PhoneIcon, ArrowRightIcon } from "lucide-react";

const serviceLinks = [
    { name: "SEO", href: "/seo-company-in-bangalore/" },
    { name: "Performance Marketing", href: "/digital-marketing-services-in-bangalore/" },
    { name: "Web Development", href: "/web-development-company-in-bangalore/" },
    { name: "Branding", href: "/branding-agency-in-bangalore/" },
    { name: "Mobile Apps", href: "/mobile-app-development-company-in-bangalore/" },
    { name: "UI/UX Design", href: "/ui-ux-design-company-in-bangalore/" },
];

const companyLinks = [
    { name: "About", href: "/about-us/" },
    { name: "Case Studies", href: "/case-study/" },
    { name: "Blog", href: "/blog/" },
    { name: "Careers", href: "/careers/" },
    { name: "Contact", href: "/contact-us/" },
];

const socialLinks = [
    {
        name: "X",
        href: "https://x.com/mixmedialabs",
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/mixmedialabs",
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        ),
    },
    {
        name: "Facebook",
        href: "https://www.facebook.com/mixmedialabs",
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/mixmedialabs/",
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        name: "Pinterest",
        href: "https://in.pinterest.com/mixmedialabs/",
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z" />
            </svg>
        ),
    },
];

export function Footer() {
    return (
        <footer className="w-full bg-dark-surface py-16 md:py-24 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 pb-16 border-b border-white/10">
                    {/* Company Info */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="block">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/mml-logo-white.svg" alt="Mixmedia Labs" className="h-9 w-auto" />
                        </Link>
                        <p className="font-body text-sm text-white/75 leading-relaxed max-w-xs">
                            A premium digital growth agency based in Bengaluru, helping B2B
                            companies scale through data-driven strategies and flawless
                            execution.
                        </p>
                    </div>

                    {/* Services Links */}
                    <div className="flex flex-col gap-6">
                        <h4 className="font-display font-bold text-lg text-white mb-2">
                            Services
                        </h4>
                        <ul className="space-y-4">
                            {serviceLinks.map((service, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={service.href}
                                        className="font-body text-sm text-white/75 hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <ArrowRightIcon className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="flex flex-col gap-6">
                        <h4 className="font-display font-bold text-lg text-white mb-2">
                            Company
                        </h4>
                        <ul className="space-y-4">
                            {companyLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={link.href}
                                        className="font-body text-sm text-white/75 hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <ArrowRightIcon className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-6">
                        <h4 className="font-display font-bold text-lg text-white mb-2">
                            Contact
                        </h4>
                        <ul className="space-y-6">
                            <li>
                                <a
                                    href="tel:+916361591035"
                                    className="font-body text-sm text-white/75 hover:text-primary transition-colors duration-200 flex items-start gap-3 group"
                                >
                                    <PhoneIcon className="w-5 h-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                                    +91 63615 91035
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@mixmedialabs.com"
                                    className="font-body text-sm text-white/75 hover:text-primary transition-colors duration-200 flex items-start gap-3 group"
                                >
                                    <MailIcon className="w-5 h-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                                    info@mixmedialabs.com
                                </a>
                            </li>
                            <li>
                                <div className="font-body text-sm text-white/75 flex items-start gap-3">
                                    <MapPinIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span>
                                        No.524/A, 19th Main, Service Rd,
                                        <br />
                                        Sector 3, HSR Layout,
                                        <br />
                                        Bengaluru, Karnataka 560102
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">
                    <p className="font-body text-sm text-white/60">
                        &copy; {new Date().getFullYear()} Mixmedia Labs. All rights
                        reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-200"
                                aria-label={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center gap-6">
                        <Link
                            href="/privacy-policy/"
                            className="font-body text-sm text-white/60 hover:text-white transition-colors duration-200"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/site-map/"
                            className="font-body text-sm text-white/60 hover:text-white transition-colors duration-200"
                        >
                            Sitemap
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
