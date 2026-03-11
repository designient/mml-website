"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
    MenuIcon,
    XIcon,
    ArrowUpRightIcon,
    ArrowRightIcon,
    ChevronDownIcon,
    PhoneIcon,
} from "lucide-react";

const coreServices = [
    { name: "Digital Marketing", href: "/digital-marketing-services-in-bangalore/" },
    { name: "Website Design", href: "/web-development-company-in-bangalore/" },
    { name: "Branding", href: "/branding-agency-in-bangalore/" },
    { name: "Mobile App Development", href: "/mobile-app-development-company-in-bangalore/" },
    { name: "UI/UX Design", href: "/ui-ux-design-company-in-bangalore/" },
    { name: "Ecommerce Solutions", href: "/ecommerce-solutions-in-bangalore/" },
    { name: "WordPress Development", href: "/wordpress-development-services-bangalore/" },
];

const digitalMarketingServices = [
    { name: "Social Media Marketing", href: "/digital-marketing-services-in-bangalore/" },
    { name: "SEO", href: "/seo-company-in-bangalore/" },
    { name: "Pay Per Click", href: "/digital-marketing-services-in-bangalore/" },
    { name: "Programmatic Advertising", href: "/digital-marketing-services-in-bangalore/" },
    { name: "Influencer Marketing", href: "/digital-marketing-services-in-bangalore/" },
    { name: "Performance Marketing", href: "/digital-marketing-services-in-bangalore/" },
];

const navLinks = [
    { label: "Services", isMega: true, href: "#" },
    { label: "About", isMega: false, href: "/about-us/" },
    { label: "Case Studies", isMega: false, href: "/case-study/" },
    { label: "Blog", isMega: false, href: "/blog/" },
    { label: "Contact", isMega: false, href: "/contact-us/" },
];

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
                : "bg-white"
                }`}
        >
            <div
                className={`max-w-[1320px] mx-auto px-6 flex items-center justify-between transition-all duration-300 ${isScrolled ? "h-16" : "h-[76px]"
                    }`}
            >
                {/* Left: Logo + Est badge */}
                <div className="flex items-center gap-3 flex-shrink-0">
                    <Link href="/" className="flex-shrink-0">
                        <img
                            src="/logo.png"
                            alt="Mixmedia Labs"
                            className={`transition-all duration-300 ${isScrolled ? "h-8" : "h-10"}`}
                        />
                    </Link>
                    <span className="hidden sm:inline-flex items-center font-body text-xs font-bold text-text-primary bg-gray-100 px-3 py-1.5 rounded-full">
                        Est 2018
                    </span>
                </div>

                {/* Center: Nav links inside pill container */}
                <div className="hidden lg:flex items-center">
                    <div className="flex items-center bg-gray-50 rounded-full px-2 py-1.5">
                        {navLinks.map((link, idx) =>
                            link.isMega ? (
                                <div
                                    key={idx}
                                    className="relative group flex items-center"
                                    onMouseEnter={() => setIsServicesOpen(true)}
                                    onMouseLeave={() => setIsServicesOpen(false)}
                                >
                                    <button
                                        className={`font-body text-[14px] font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${isServicesOpen
                                            ? "text-primary bg-white shadow-sm"
                                            : "text-text-primary hover:text-primary hover:bg-white/60"
                                            }`}
                                        aria-expanded={isServicesOpen}
                                        aria-haspopup="true"
                                    >
                                        {link.label}
                                        <ChevronDownIcon
                                            className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {/* Mega Menu */}
                                    <div
                                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[1100px] max-w-[calc(100vw-2rem)] bg-white border border-gray-100 rounded-2xl shadow-2xl shadow-black/8 transition-all duration-200 origin-top ${isServicesOpen
                                            ? "opacity-100 scale-100 visible translate-y-0"
                                            : "opacity-0 scale-[0.98] invisible -translate-y-1"
                                            }`}
                                    >
                                        <div className="absolute -top-3 left-0 right-0 h-3" />

                                        <div className="flex p-6">
                                            {/* Core Services */}
                                            <div className="w-[35%] pr-6 border-r border-gray-100">
                                                <h3 className="text-xs font-body font-bold text-text-muted tracking-[0.15em] mb-4 uppercase">
                                                    Core Services
                                                </h3>
                                                <div className="flex flex-col">
                                                    {coreServices.map((service, sIdx) => (
                                                        <Link
                                                            key={sIdx}
                                                            href={service.href}
                                                            className="font-body font-semibold text-[14px] text-text-primary px-4 py-3 rounded-xl hover:bg-gray-50 hover:text-primary transition-colors duration-150 block"
                                                        >
                                                            {service.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Digital Marketing */}
                                            <div className="w-[35%] px-6 border-r border-gray-100">
                                                <h3 className="text-xs font-body font-bold text-text-muted tracking-[0.15em] mb-4 uppercase">
                                                    Digital Marketing
                                                </h3>
                                                <div className="flex flex-col">
                                                    {digitalMarketingServices.map((service, sIdx) => (
                                                        <Link
                                                            key={sIdx}
                                                            href={service.href}
                                                            className="font-body font-semibold text-[14px] text-text-primary px-4 py-3 rounded-xl hover:bg-gray-50 hover:text-primary transition-colors duration-150 block"
                                                        >
                                                            {service.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Featured */}
                                            <div className="w-[30%] pl-6">
                                                <div className="bg-gray-50 rounded-2xl p-6 h-full flex flex-col">
                                                    <p className="font-body text-sm text-text-secondary leading-relaxed mb-6">
                                                        End-to-end digital growth solutions for ambitious brands.
                                                    </p>
                                                    <div className="mt-auto mb-6">
                                                        <div className="h-24 rounded-xl bg-gradient-to-br from-primary/20 to-secondary-accent/20 mb-4" />
                                                        <h4 className="text-[10px] uppercase tracking-widest text-text-muted font-body font-bold mb-1">
                                                            Featured Case Study
                                                        </h4>
                                                        <p className="font-display font-bold text-sm text-text-primary leading-snug">
                                                            How we scaled TechScale SaaS to +340% organic traffic
                                                        </p>
                                                    </div>
                                                    <Link
                                                        href="/case-study/"
                                                        className="font-body font-semibold text-sm text-primary flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200 mt-auto"
                                                    >
                                                        Explore All Services
                                                        <ArrowRightIcon className="w-3.5 h-3.5" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 px-6 py-3.5 rounded-b-2xl border-t border-gray-100 flex justify-between items-center">
                                            <span className="font-body text-sm text-text-secondary">
                                                Need a custom solution?
                                            </span>
                                            <Link
                                                href="/contact-us/"
                                                className="font-body font-semibold text-sm text-primary flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200"
                                            >
                                                Book a free strategy call
                                                <ArrowRightIcon className="w-3.5 h-3.5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={idx}
                                    href={link.href}
                                    className="font-body text-[14px] font-semibold text-text-primary hover:text-primary hover:bg-white/60 px-4 py-2 rounded-full transition-all duration-200"
                                >
                                    {link.label}
                                </Link>
                            )
                        )}
                    </div>
                </div>

                {/* Right: Phone + CTA */}
                <div className="hidden lg:flex items-center gap-5">
                    <a
                        href="tel:+916361591035"
                        className="flex items-center gap-2 font-body text-[14px] font-semibold text-text-primary hover:text-primary transition-colors"
                    >
                        +91 63615 91035
                    </a>
                    <Link
                        href="/contact-us/"
                        className="inline-flex items-center gap-2.5 font-body font-bold text-[14px] bg-primary text-white pl-5 pr-2 py-2 rounded-full hover:bg-primary-hover transition-colors duration-300 group"
                    >
                        Get in touch
                        <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                            <ArrowUpRightIcon className="w-3.5 h-3.5" />
                        </span>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-text-primary p-2 rounded-xl hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMobileMenuOpen ? (
                        <XIcon className="w-6 h-6" />
                    ) : (
                        <MenuIcon className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Drawer */}
            <div
                className={`lg:hidden fixed right-0 top-0 h-full w-[320px] bg-white z-40 shadow-2xl transition-transform duration-300 ease-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between px-6 h-[76px] border-b border-gray-100">
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                            <img src="/logo.png" alt="Mixmedia Labs" className="h-9" />
                        </Link>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                            aria-label="Close menu"
                        >
                            <XIcon className="w-5 h-5 text-text-primary" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto px-6 py-6">
                        <div className="mb-6">
                            <span className="font-body font-bold text-xs text-text-muted uppercase tracking-[0.15em] mb-4 block">
                                Core Services
                            </span>
                            <div className="flex flex-col gap-1">
                                {coreServices.map((service, idx) => (
                                    <Link
                                        key={idx}
                                        href={service.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="font-body font-semibold text-[15px] text-text-primary px-3 py-2.5 rounded-xl hover:bg-gray-50 hover:text-primary transition-colors block"
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="h-px bg-gray-100 mb-6" />

                        <div className="mb-6">
                            <span className="font-body font-bold text-xs text-text-muted uppercase tracking-[0.15em] mb-4 block">
                                Digital Marketing
                            </span>
                            <div className="flex flex-col gap-1">
                                {digitalMarketingServices.map((service, idx) => (
                                    <Link
                                        key={idx}
                                        href={service.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="font-body font-semibold text-[15px] text-text-primary px-3 py-2.5 rounded-xl hover:bg-gray-50 hover:text-primary transition-colors block"
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="h-px bg-gray-100 mb-6" />

                        <div className="flex flex-col gap-1">
                            {navLinks
                                .filter((l) => !l.isMega)
                                .map((link, idx) => (
                                    <Link
                                        key={idx}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="font-display font-bold text-lg text-text-primary px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                        </div>
                    </div>

                    <div className="px-6 py-6 border-t border-gray-100">
                        <a
                            href="tel:+916361591035"
                            className="flex items-center justify-center gap-2 font-body text-sm font-semibold text-text-primary mb-4"
                        >
                            <PhoneIcon className="w-4 h-4" />
                            +91 63615 91035
                        </a>
                        <Link
                            href="/contact-us/"
                            className="w-full flex items-center justify-center gap-2.5 font-body font-bold text-sm bg-primary text-white px-5 py-3 rounded-full hover:bg-primary-hover transition-colors duration-300 group"
                        >
                            Get in touch
                            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                                <ArrowUpRightIcon className="w-3.5 h-3.5" />
                            </span>
                        </Link>
                        <p className="font-body text-xs text-text-muted text-center mt-3">
                            Free 30-min consultation · No commitment
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    );
}
