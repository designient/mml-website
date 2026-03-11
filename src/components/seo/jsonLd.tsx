import React from "react";

const BASE_URL = "https://mixmedialabs.com";

/* ── Organization Schema (global) ── */
export function OrganizationSchema() {
    const data = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Mixmedia Labs",
        url: BASE_URL,
        logo: `${BASE_URL}/mml-logo.svg`,
        sameAs: [
            "https://www.linkedin.com/company/mixmedialabs/",
            "https://x.com/mixmedialabs",
            "https://www.instagram.com/mixmedialabs",
            "https://www.facebook.com/mixmedialabs",
            "https://in.pinterest.com/mixmedialabs/",
        ],
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-63615-91035",
            contactType: "sales",
            email: "info@mixmedialabs.com",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
        },
    };
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/* ── LocalBusiness Schema (global) ── */
export function LocalBusinessSchema() {
    const data = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}/#localbusiness`,
        name: "Mixmedia Labs",
        url: BASE_URL,
        telephone: "+91-63615-91035",
        email: "info@mixmedialabs.com",
        image: `${BASE_URL}/mml-logo.svg`,
        address: {
            "@type": "PostalAddress",
            streetAddress: "No.524/A, 19th Main, Service Rd, Sector 3, HSR Layout",
            addressLocality: "Bengaluru",
            addressRegion: "Karnataka",
            postalCode: "560102",
            addressCountry: "IN",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 12.9116,
            longitude: 77.6389,
        },
        priceRange: "₹₹₹",
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
        },
    };
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/* ── Service Schema ── */
interface ServiceSchemaProps {
    name: string;
    description: string;
    slug: string;
}

export function ServiceSchema({ name, description, slug }: ServiceSchemaProps) {
    const data = {
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url: `${BASE_URL}/${slug}/`,
        provider: {
            "@type": "Organization",
            name: "Mixmedia Labs",
            url: BASE_URL,
        },
        areaServed: {
            "@type": "Place",
            name: "Bengaluru, India",
        },
    };
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/* ── FAQPage Schema ── */
interface FAQSchemaProps {
    items: { question: string; answer: string }[];
}

export function FAQSchema({ items }: FAQSchemaProps) {
    const data = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/* ── BreadcrumbList Schema ── */
interface BreadcrumbItem {
    name: string;
    href: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
    const data = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: item.name,
            item: item.href.startsWith("http") ? item.href : `${BASE_URL}${item.href}`,
        })),
    };
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/* ── Article Schema (blog posts) ── */
interface ArticleSchemaProps {
    title: string;
    description: string;
    slug: string;
    datePublished: string;
    author: string;
}

export function ArticleSchema({ title, description, slug, datePublished, author }: ArticleSchemaProps) {
    const data = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url: `${BASE_URL}/blog/${slug}/`,
        datePublished,
        dateModified: datePublished,
        author: {
            "@type": "Organization",
            name: author,
            url: BASE_URL,
        },
        publisher: {
            "@type": "Organization",
            name: "Mixmedia Labs",
            url: BASE_URL,
            logo: {
                "@type": "ImageObject",
                url: `${BASE_URL}/mml-logo.svg`,
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${BASE_URL}/blog/${slug}/`,
        },
    };
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/* ── JobPosting Schema ── */
interface JobPostingSchemaProps {
    title: string;
    description: string;
    employmentType: string;
    location: string;
}

export function JobPostingSchema({ title, description, employmentType, location }: JobPostingSchemaProps) {
    const isRemote = location.toLowerCase().includes("remote");
    const data = {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title,
        description,
        datePosted: "2026-03-01",
        validThrough: "2026-06-30",
        employmentType: employmentType === "Full-time" ? "FULL_TIME" : employmentType.toUpperCase().replace("-", "_"),
        hiringOrganization: {
            "@type": "Organization",
            name: "Mixmedia Labs",
            sameAs: BASE_URL,
        },
        jobLocation: {
            "@type": "Place",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka",
                addressCountry: "IN",
            },
        },
        ...(isRemote && { jobLocationType: "TELECOMMUTE" }),
        applicantLocationRequirements: {
            "@type": "Country",
            name: "India",
        },
    };
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/* ── WebSite Schema ── */
export function WebSiteSchema() {
    const data = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Mixmedia Labs",
        url: BASE_URL,
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${BASE_URL}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    };
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
