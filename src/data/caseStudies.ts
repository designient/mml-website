export interface CaseStudyMetric {
    label: string;
    value: string;
}

export interface CaseStudy {
    slug: string;
    client: string;
    industry: string;
    gradient: string;
    description: string;
    metrics: CaseStudyMetric[];
    metaTitle: string;
    metaDescription: string;
    challenge: string[];
    approach: string[];
    results: string[];
    toolsUsed?: string[];
    servicesUsed?: { name: string; href: string }[];
}

export const caseStudies: CaseStudy[] = [
    {
        slug: "techscale-saas",
        client: "TechScale SaaS",
        industry: "B2B SaaS",
        gradient: "from-primary/80 to-secondary-accent/80",
        description: "How we scaled organic acquisition and optimized paid channels for a high-growth SaaS platform.",
        metrics: [
            { label: "Organic Traffic", value: "+340%" },
            { label: "ROAS", value: "2.1x" },
            { label: "Pipeline", value: "12x" },
        ],
        metaTitle: "TechScale SaaS Case Study — +340% Organic Traffic | Mixmedia Labs",
        metaDescription: "How Mixmedia Labs drove +340% organic traffic growth and 12x pipeline for TechScale SaaS through integrated SEO and paid media strategies.",
        challenge: [
            "TechScale had a sophisticated SaaS product serving enterprise clients, but their digital presence told a different story. Despite investing heavily in Google Ads, their organic visibility was nearly zero — no first-page rankings for any of their core product keywords.",
            "Their website, while technically functional, had critical SEO issues: JavaScript-rendered content that search engines couldn't crawl, a flat site architecture with no topic cluster strategy, and page load times averaging 4.2 seconds.",
            "Their paid campaigns were profitable but hitting a ceiling. CPC was rising steadily as competitors entered their keyword space, and they had no organic traffic to offset their paid dependency.",
        ],
        approach: [
            "We started with a comprehensive technical SEO overhaul. Server-side rendering was implemented, the site architecture was restructured into a hub-and-spoke topic cluster model, and Core Web Vitals were optimized to bring LCP under 2 seconds.",
            "Next, we built a content engine targeting the full buyer journey. 25 bottom-of-funnel comparison and alternative pages were created in the first 60 days, followed by a resource hub of original research and industry benchmarks that attracted high-authority backlinks.",
            "On the paid side, we restructured campaigns using a tiered bidding strategy. High-intent branded and competitor terms received aggressive bids, while broader category terms were allocated to a separate campaign with conversion-optimized bidding.",
            "Finally, we launched a digital PR campaign targeting tier-1 SaaS publications. Original data studies were pitched to publishers like SaaSTr, TechCrunch, and G2, earning 40+ DA80+ backlinks in 6 months.",
        ],
        results: [
            "Within 9 months, organic traffic grew by 340%, with first-page rankings for 120+ high-intent keywords. The organic channel overtook paid as the primary pipeline source by month 7.",
            "Paid campaign ROAS improved from 1.2x to 2.1x as Quality Scores benefited from improved landing page experience and organic authority. CPC decreased by 22% while conversion volume grew 85%.",
            "Total pipeline increased 12x from the engagement start. The combined organic + paid strategy created a compounding growth system where each channel reinforced the other, making TechScale progressively harder for competitors to displace.",
        ],
        toolsUsed: ["Google Ads", "SEMrush", "Ahrefs", "Looker Studio", "Next.js", "Google Search Console", "Screaming Frog"],
        servicesUsed: [
            { name: "SEO", href: "/seo-company-in-bangalore/" },
            { name: "Digital Marketing", href: "/digital-marketing-services-in-bangalore/" },
            { name: "Web Development", href: "/web-development-company-in-bangalore/" },
        ],
    },
    {
        slug: "urbancraft-d2c",
        client: "UrbanCraft D2C",
        industry: "E-commerce",
        gradient: "from-secondary-accent/80 to-primary/80",
        description: "A full-funnel performance marketing strategy that drove record-breaking Q4 revenue.",
        metrics: [
            { label: "Revenue", value: "+520%" },
            { label: "Lower CAC", value: "45%" },
            { label: "ROAS", value: "3.8x" },
        ],
        metaTitle: "UrbanCraft D2C Case Study — +520% Revenue Growth | Mixmedia Labs",
        metaDescription: "How Mixmedia Labs drove +520% revenue growth and 3.8x ROAS for UrbanCraft D2C through integrated performance marketing and organic strategy.",
        challenge: [
            "UrbanCraft was a premium D2C lifestyle brand with strong product-market fit but an unsustainable growth model. Their entire acquisition strategy depended on Meta and Google Ads, with CAC rising 15% quarter-over-quarter.",
            "Their ROAS had dipped below 2x, making it increasingly difficult to scale paid spend while maintaining margins. They had zero organic traffic, no email marketing infrastructure, and no remarketing strategy beyond basic cart abandonment.",
            "Compounding the problem, Q4 — their highest-revenue quarter — was approaching, and they needed a strategy that could deliver record revenue while actually reducing their CAC.",
        ],
        approach: [
            "We rebuilt their entire marketing stack from the ground up. Phase one focused on infrastructure: a proper attribution model, email/SMS flows for customer lifecycle marketing, and a segmented remarketing framework across Google, Meta, and programmatic channels.",
            "Phase two launched a full-funnel paid strategy. Top-of-funnel awareness campaigns on Meta used UGC-style creative to build audience. Mid-funnel campaigns retargeted engaged visitors with product-specific offers. Bottom-funnel campaigns drove urgency with limited-time promotions.",
            "Simultaneously, we built an organic content engine. SEO-optimized buying guides, style lookbooks, and product comparison content were published weekly, targeting long-tail queries that their paid competitors were ignoring entirely.",
            "For Q4, we orchestrated a 90-day campaign calendar that synchronized product launches, influencer collaborations, email sequences, and paid campaigns into a unified push with consistent messaging and creative.",
        ],
        results: [
            "Q4 revenue grew 520% year-over-year, shattering all previous records. The integrated approach meant every channel amplified the others — email recovered 28% of abandoned carts, while organic traffic provided a cost-free baseline of daily conversions.",
            "Customer acquisition cost dropped 45% despite the massive increase in spend, driven by improved audience targeting, higher Quality Scores from organic authority, and the lifecycle marketing infrastructure that increased customer LTV.",
            "ROAS reached 3.8x across the full marketing mix, up from 1.8x pre-engagement. The organic channel, which was non-existent at the start, now drives 22% of total revenue — providing a stable revenue floor independent of ad spend.",
        ],
        toolsUsed: ["Meta Ads", "Google Ads", "Klaviyo", "Shopify", "Looker Studio", "GA4", "Hotjar"],
        servicesUsed: [
            { name: "Digital Marketing", href: "/digital-marketing-services-in-bangalore/" },
            { name: "Ecommerce Solutions", href: "/ecommerce-solutions-in-bangalore/" },
            { name: "Branding", href: "/branding-agency-in-bangalore/" },
        ],
    },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
    return caseStudies.find((c) => c.slug === slug);
}
