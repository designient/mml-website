/* ── Service Data Source ──
   Structured data for all service pages.
   The ServicePageTemplate renders conditionally based on
   which optional fields are present. */

export interface ServiceFAQ {
    question: string;
    answer: string;
}

export interface ServiceInclusion {
    title: string;
    description: string;
}

export interface ServiceOutcome {
    value: string;
    label: string;
    sublabel?: string;
}

export interface ServiceProofMetric {
    value: string;
    label: string;
}

export interface ServiceProof {
    eyebrow: string;
    title: string;
    tag: string;
    tagline: string;
    /** "primary-to-accent" | "accent-to-primary" */
    gradientDirection: "primary-to-accent" | "accent-to-primary";
    /** Heights for the abstract bar chart (rendered as proportions) */
    barData: number[];
    /** Optional: label + range shown above bar chart */
    barLabel?: { title: string; range: string };
    metrics: ServiceProofMetric[];
    paragraphs: string[];
    ctaText: string;
    ctaHref: string;
}

export interface ServiceMatters {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    checklist: string[];
    /** Visual card for the right column */
    visual: {
        title: string;
        subtitle: string;
        quote: string;
    };
}

export interface ServiceCapabilityGroup {
    category: string;
    items: string[];
}

export interface ServiceSubService {
    iconName: string;
    title: string;
    description: string;
    href: string;
}

export interface ServiceData {
    slug: string;
    title: string;
    eyebrow: string;
    headline: string;
    highlightedWord: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    breadcrumb: string;
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string[];
    inclusions: ServiceInclusion[];
    outcomes: ServiceOutcome[];
    faqs: ServiceFAQ[];
    iconName: string;

    /* ── Optional sections (render if present) ── */
    proof?: ServiceProof;
    matters?: ServiceMatters;
    capabilities?: ServiceCapabilityGroup[];
    subServices?: ServiceSubService[];
}

export const services: ServiceData[] = [
    /* ═══════════════════════════════════════════════
       DIGITAL MARKETING
       ═══════════════════════════════════════════════ */
    {
        slug: "digital-marketing-services-in-bangalore",
        title: "Digital Marketing",
        eyebrow: "Digital Marketing Services",
        headline: "Full-Funnel {highlight} That Scales Revenue",
        highlightedWord: "Digital Marketing",
        subheadline: "We don't run isolated campaigns. We build integrated marketing systems across search, social, paid, and programmatic — engineered to compound growth and maximize ROAS.",
        ctaPrimary: "Get a Free Marketing Audit",
        ctaSecondary: "View Marketing Case Studies",
        breadcrumb: "Digital Marketing",
        metaTitle: "Digital Marketing Services in Bangalore — Mixmedia Labs",
        metaDescription: "Full-funnel digital marketing services in Bangalore. SEO, social media, PPC, programmatic advertising, and performance marketing to scale your revenue.",
        metaKeywords: ["digital marketing Bangalore", "digital marketing agency Bangalore", "performance marketing Bangalore", "online marketing services"],
        inclusions: [
            { title: "Campaign Strategy & Planning", description: "Data-driven campaign architecture with clear KPIs, audience segmentation, and channel allocation for maximum impact." },
            { title: "Paid Media Management", description: "Expert management across Google Ads, Meta, LinkedIn, and programmatic — continuously optimized for ROAS." },
            { title: "Audience & Persona Development", description: "Deep buyer persona research and audience modeling to ensure every campaign reaches the right decision-makers." },
            { title: "Creative & Content Production", description: "High-converting ad creatives, landing pages, and content assets designed for each stage of the buyer journey." },
            { title: "Attribution & Analytics", description: "Multi-touch attribution modeling and custom dashboards that connect marketing spend directly to pipeline and revenue." },
            { title: "CRO & Landing Page Optimization", description: "Continuous A/B testing, heatmap analysis, and conversion rate optimization to maximize every click." },
        ],
        outcomes: [
            { value: "3.8x", label: "Avg. ROAS", sublabel: "across paid channels" },
            { value: "+520%", label: "Revenue Growth", sublabel: "for e-commerce clients" },
            { value: "45%", label: "Lower CAC", sublabel: "vs. industry benchmarks" },
            { value: "50+", label: "Brands Scaled", sublabel: "across verticals" },
        ],
        faqs: [
            { question: "What digital marketing channels do you manage?", answer: "We manage the full spectrum — Google Ads, Meta (Facebook & Instagram), LinkedIn, programmatic display, influencer campaigns, SEO, and social media marketing. We build integrated strategies where every channel reinforces the others." },
            { question: "How do you measure marketing ROI?", answer: "We go beyond vanity metrics. We set up multi-touch attribution, track pipeline generated from each channel, and report on revenue impact. You'll get custom dashboards showing exactly how marketing spend connects to closed deals." },
            { question: "What budget do we need to get started?", answer: "It depends on your goals and channels. We typically recommend a minimum media spend of ₹3-5L/month for paid campaigns to generate statistically significant data. Our management fees are separate and based on scope." },
            { question: "How quickly can we expect results from paid campaigns?", answer: "Paid campaigns can generate leads within the first week. However, meaningful optimization takes 4-8 weeks as we gather data, test creatives, and refine targeting. Most clients see strong ROAS improvements by month 2-3." },
            { question: "Do you handle creative and landing page design?", answer: "Yes. We have an in-house creative team that produces ad creatives, video assets, and conversion-optimized landing pages. Everything is designed to work together as a cohesive system." },
            { question: "Can you work with our existing marketing team?", answer: "Absolutely. We often work as an extension of in-house teams — filling capability gaps, providing strategic direction, and handling execution on specific channels while your team focuses on what they do best." },
        ],
        iconName: "MegaphoneIcon",

        proof: {
            eyebrow: "Proven Results",
            title: "How We Drove Record-Breaking Q4 Revenue",
            tag: "E-commerce Case Study",
            tagline: "A full-funnel strategy that shattered revenue records.",
            gradientDirection: "accent-to-primary",
            barLabel: { title: "Revenue Growth", range: "Q1 → Q4 2025" },
            barData: [25, 40, 55, 70, 65, 80, 95, 100, 130, 180, 260, 520],
            metrics: [
                { value: "+520%", label: "Revenue" },
                { value: "45%", label: "Lower CAC" },
                { value: "3.8x", label: "ROAS" },
            ],
            paragraphs: [
                "UrbanCraft D2C was spending heavily on paid ads with diminishing returns. Their CAC was climbing, ROAS was declining, and they had zero organic presence to offset paid dependency.",
                "We rebuilt their entire marketing stack — launching integrated campaigns across Google, Meta, and programmatic channels while building an organic content engine. The result: record-breaking Q4 revenue with a 45% lower customer acquisition cost.",
            ],
            ctaText: "Read the full case study",
            ctaHref: "/case-study/",
        },

        subServices: [
            { iconName: "ShareIcon", title: "Social Media Marketing", description: "Build engaged communities, drive brand awareness, and convert followers into customers across Instagram, LinkedIn, X, and Meta.", href: "/digital-marketing-services-in-bangalore/" },
            { iconName: "SearchIcon", title: "SEO", description: "Dominate organic search with technical SEO, content strategy, and authority building that compounds over time.", href: "/seo-company-in-bangalore/" },
            { iconName: "MousePointerClickIcon", title: "Pay Per Click", description: "High-intent campaigns on Google, Bing, and display networks with rigorous bid management and ROAS tracking.", href: "/digital-marketing-services-in-bangalore/" },
            { iconName: "MonitorIcon", title: "Programmatic Advertising", description: "Automated media buying across premium inventory at scale — with real-time optimization and audience targeting.", href: "/digital-marketing-services-in-bangalore/" },
            { iconName: "UsersIcon", title: "Influencer Marketing", description: "Strategic creator partnerships that drive authentic engagement, brand trust, and measurable conversions.", href: "/digital-marketing-services-in-bangalore/" },
            { iconName: "TrendingUpIcon", title: "Performance Marketing", description: "Data-driven, revenue-focused campaigns optimized for pipeline and closed-won deals — not vanity metrics.", href: "/digital-marketing-services-in-bangalore/" },
        ],
    },

    /* ═══════════════════════════════════════════════
       SEO
       ═══════════════════════════════════════════════ */
    {
        slug: "seo-company-in-bangalore",
        title: "SEO",
        eyebrow: "Search Engine Optimization",
        headline: "Enterprise SEO That Drives {highlight}",
        highlightedWord: "Compounding Revenue",
        subheadline: "We don't just chase vanity traffic. We build high-authority organic growth engines that turn search intent into qualified B2B pipeline.",
        ctaPrimary: "Get a Free SEO Audit",
        ctaSecondary: "View SEO Case Studies",
        breadcrumb: "SEO",
        metaTitle: "SEO Company in Bangalore — Enterprise SEO Services | Mixmedia Labs",
        metaDescription: "Top SEO company in Bangalore offering technical SEO, content strategy, and authority building services. Enterprise SEO that drives compounding organic revenue.",
        metaKeywords: ["SEO company Bangalore", "SEO services Bangalore", "enterprise SEO India", "technical SEO agency"],
        inclusions: [
            { title: "Comprehensive SEO Audits", description: "Deep-dive technical, content, and backlink audits to uncover hidden growth opportunities and fix critical errors." },
            { title: "Technical SEO", description: "Site speed optimization, Core Web Vitals, schema markup, and crawlability enhancements for perfect indexation." },
            { title: "Content Strategy & Creation", description: "Editorial-grade content clusters designed to capture high-intent search queries and build topical authority." },
            { title: "Authority Building", description: "Strategic digital PR and high-quality link acquisition to boost domain authority and outrank competitors." },
            { title: "Local & Enterprise SEO", description: "Scalable strategies for multi-location businesses and large enterprise sites with millions of pages." },
            { title: "Analytics & Reporting", description: "Custom Looker Studio dashboards tracking keyword movement, traffic value, and pipeline attribution." },
        ],
        outcomes: [
            { value: "+340%", label: "Avg. Traffic Growth", sublabel: "in first 12 months" },
            { value: "12x", label: "Pipeline ROI", sublabel: "from organic channels" },
            { value: "Top 3", label: "Rankings Achieved", sublabel: "for high-intent keywords" },
            { value: "98%", label: "Client Retention", sublabel: "long-term partnerships" },
        ],
        faqs: [
            { question: "How long does it take to see results from SEO?", answer: "SEO is a long-term strategy. While technical fixes can yield quick wins within 30 days, significant movement in rankings and traffic typically takes 3 to 6 months. Compounding ROI usually becomes highly visible between months 6 and 12." },
            { question: "Do you guarantee page 1 rankings?", answer: "No reputable agency can guarantee specific rankings because Google's algorithm is proprietary and constantly changing. However, we do guarantee our methodology, output quality, and transparent reporting. Our track record of scaling B2B brands speaks for itself." },
            { question: "Do you write the content or do we?", answer: "We handle end-to-end content creation. Our editorial team consists of subject matter experts who write high-quality, technically accurate content. We work closely with your internal experts during the onboarding phase to capture your unique brand voice and product nuances." },
            { question: "How do you build backlinks?", answer: "We use white-hat, outreach-based link building. This includes digital PR, guest posting on high-authority industry blogs, unlinked brand mention reclamation, and creating linkable assets (like original research or data studies) that naturally attract links." },
            { question: "How do we measure the success of the SEO campaign?", answer: "We don't just report on traffic and rankings. We tie our SEO efforts directly to your bottom line. We track Marketing Qualified Leads (MQLs), pipeline generated, and closed-won revenue attributed to organic search using custom Looker Studio dashboards." },
        ],
        iconName: "SearchIcon",

        proof: {
            eyebrow: "Proven Results",
            title: "How We Scaled TechScale SaaS",
            tag: "B2B SaaS Case Study",
            tagline: "From invisible to industry leader in 9 months.",
            gradientDirection: "primary-to-accent",
            barData: [30, 45, 60, 85, 120, 180, 250, 340],
            metrics: [
                { value: "+340%", label: "Organic Traffic" },
                { value: "12x", label: "Pipeline ROI" },
            ],
            paragraphs: [
                "TechScale came to us with a beautiful website but zero organic visibility. They were burning cash on paid ads while their competitors dominated the search results for high-intent software queries.",
                "We executed a complete technical overhaul, built a comprehensive topic cluster strategy, and launched a digital PR campaign that secured links from top industry publications.",
            ],
            ctaText: "Read the full case study",
            ctaHref: "/case-study/",
        },

        matters: {
            eyebrow: "Why SEO Matters for B2B",
            title: "Stop Renting Your Traffic. Start Owning It.",
            paragraphs: [
                "Paid ads are a treadmill—the moment you stop paying, the traffic stops. Organic search is real estate. It's an asset that compounds in value over time, driving high-intent buyers to your site while you sleep.",
                "For B2B companies with long sales cycles, buyers do extensive research before ever talking to sales. If you aren't dominating the search results for their pain points, your competitors are capturing that demand.",
            ],
            checklist: [
                "Lower Customer Acquisition Cost (CAC) over time",
                "Capture buyers at their highest moment of intent",
                "Build brand authority and industry trust",
                "Create a moat against well-funded competitors",
            ],
            visual: {
                title: "The Compounding Effect",
                subtitle: "Organic vs Paid Traffic Value",
                quote: "\"SEO is the only marketing channel that gets cheaper the longer you do it.\"",
            },
        },

        capabilities: [
            {
                category: "Technical SEO",
                items: [
                    "Core Web Vitals Optimization",
                    "Crawl Budget Management",
                    "Schema Markup Implementation",
                    "Site Architecture Restructuring",
                    "JavaScript SEO & Rendering",
                    "Log File Analysis",
                ],
            },
            {
                category: "Content & On-Page",
                items: [
                    "Topic Cluster Strategy",
                    "Search Intent Mapping",
                    "TF-IDF & Semantic Optimization",
                    "Content Gap Analysis",
                    "Internal Link Architecture",
                    "Conversion Rate Optimization (CRO)",
                ],
            },
            {
                category: "Off-Page & Authority",
                items: [
                    "Digital PR Campaigns",
                    "Editorial Link Placements",
                    "Unlinked Brand Mentions",
                    "Competitor Backlink Intercepts",
                    "Toxic Link Disavowal",
                    "Entity Building",
                ],
            },
        ],
    },

    /* ═══════════════════════════════════════════════
       WEBSITE DESIGN
       ═══════════════════════════════════════════════ */
    {
        slug: "web-development-company-in-bangalore",
        title: "Website Design",
        eyebrow: "Web Design & Development",
        headline: "Conversion-Optimized {highlight} Built for Scale",
        highlightedWord: "Websites",
        subheadline: "We build websites that don't just look premium — they perform. Speed-optimized, SEO-ready, and designed to convert visitors into customers.",
        ctaPrimary: "Get a Free Website Audit",
        ctaSecondary: "View Web Projects",
        breadcrumb: "Website Design",
        metaTitle: "Web Development Company in Bangalore — Website Design | Mixmedia Labs",
        metaDescription: "Top web development company in Bangalore building conversion-optimized, SEO-ready websites. Custom design, Next.js development, and CMS solutions.",
        metaKeywords: ["web development company Bangalore", "website design Bangalore", "web design agency", "Next.js development"],
        inclusions: [
            { title: "Custom Web Design", description: "Pixel-perfect designs tailored to your brand identity, audience behavior, and business goals." },
            { title: "Frontend Development", description: "Modern React/Next.js builds optimized for speed, SEO, and interactive user experiences." },
            { title: "CMS Integration", description: "Headless CMS setups (Sanity, Contentful, WordPress) for easy content management without developer dependency." },
            { title: "Landing Page Design", description: "High-converting campaign landing pages with A/B testing frameworks and conversion tracking." },
            { title: "Performance Optimization", description: "Core Web Vitals optimization, lazy loading, CDN configuration, and sub-2-second load times." },
            { title: "Analytics Setup", description: "GA4, GTM, and conversion tracking implementation with custom event architecture." },
        ],
        outcomes: [
            { label: "Avg. Load Time", value: "<1.5s" },
            { label: "Conversion Lift", value: "+85%" },
            { label: "Pages Built", value: "500+" },
        ],
        faqs: [
            { question: "What technologies do you use?", answer: "We primarily build with React, Next.js, and TypeScript. For CMS, we recommend Sanity or WordPress depending on your needs." },
            { question: "How long does a website project take?", answer: "A typical website takes 6-10 weeks from kickoff to launch. Complex web applications may take 12-16 weeks." },
            { question: "Do you offer ongoing maintenance?", answer: "Yes. We offer retainer plans that include hosting management, security updates, performance monitoring, and content updates." },
            { question: "Will our website be mobile-responsive?", answer: "Absolutely. Every website we build is fully responsive and tested across devices, browsers, and screen sizes." },
        ],
        iconName: "MonitorIcon",
    },

    /* ═══════════════════════════════════════════════
       BRANDING
       ═══════════════════════════════════════════════ */
    {
        slug: "branding-agency-in-bangalore",
        title: "Branding",
        eyebrow: "Brand Strategy & Identity",
        headline: "Strategic {highlight} That Commands Premium",
        highlightedWord: "Brand Positioning",
        subheadline: "We craft brand identities that differentiate you in crowded markets, build trust with decision-makers, and create long-term competitive moats.",
        ctaPrimary: "Start Your Brand Audit",
        ctaSecondary: "View Branding Work",
        breadcrumb: "Branding",
        metaTitle: "Branding Agency in Bangalore — Brand Strategy & Identity | Mixmedia Labs",
        metaDescription: "Strategic branding agency in Bangalore specializing in brand positioning, visual identity, and brand guidelines for ambitious B2B companies.",
        metaKeywords: ["branding agency Bangalore", "brand strategy Bangalore", "brand identity design", "brand positioning"],
        inclusions: [
            { title: "Brand Strategy & Positioning", description: "Market research, competitive analysis, and strategic positioning that defines your unique value proposition." },
            { title: "Visual Identity Design", description: "Logo, color systems, typography, iconography, and visual language that communicates your brand essence." },
            { title: "Brand Guidelines", description: "Comprehensive brand books with usage rules, tone of voice, and application templates for consistent brand expression." },
            { title: "Messaging Framework", description: "Core messaging, taglines, value propositions, and audience-specific narratives across touchpoints." },
            { title: "Brand Collateral", description: "Business cards, presentations, social media templates, and marketing materials aligned with your brand." },
            { title: "Rebranding", description: "Strategic rebranding for companies evolving their market position, expanding into new segments, or undergoing M&A." },
        ],
        outcomes: [
            { label: "Brand Recall", value: "+200%" },
            { label: "Brands Built", value: "40+" },
            { label: "Client NPS", value: "72" },
        ],
        faqs: [
            { question: "What's the difference between branding and logo design?", answer: "A logo is one element of your brand. Branding encompasses strategy, positioning, messaging, visual identity, and guidelines — it's how your company is perceived." },
            { question: "How long does a branding project take?", answer: "Brand strategy and identity projects typically take 4-8 weeks. Full rebranding with rollout can take 8-12 weeks." },
            { question: "Do you work with startups?", answer: "Yes. We help funded startups build differentiated brand identities from scratch, tailored to their target market and growth stage." },
            { question: "Can you help with rebranding?", answer: "Absolutely. We've helped companies across SaaS, fintech, and e-commerce rebrand strategically while preserving brand equity." },
        ],
        iconName: "SparklesIcon",
    },

    /* ═══════════════════════════════════════════════
       MOBILE APP DEVELOPMENT
       ═══════════════════════════════════════════════ */
    {
        slug: "mobile-app-development-company-in-bangalore",
        title: "Mobile App Development",
        eyebrow: "Mobile App Development",
        headline: "High-Performance {highlight} for Growth",
        highlightedWord: "Mobile Apps",
        subheadline: "We build native and cross-platform mobile applications designed for performance, engagement, and scalable growth.",
        ctaPrimary: "Discuss Your App Idea",
        ctaSecondary: "View App Portfolio",
        breadcrumb: "Mobile App Development",
        metaTitle: "Mobile App Development Company in Bangalore | Mixmedia Labs",
        metaDescription: "Top mobile app development company in Bangalore building native and cross-platform apps for iOS and Android. React Native, Flutter, and Swift expertise.",
        metaKeywords: ["mobile app development Bangalore", "app development company", "React Native development", "iOS Android app development"],
        inclusions: [
            { title: "Native iOS & Android", description: "Platform-specific development using Swift/SwiftUI and Kotlin for maximum performance and UX fidelity." },
            { title: "Cross-Platform (React Native)", description: "Single codebase apps for iOS and Android using React Native, reducing time-to-market and maintenance costs." },
            { title: "App UI/UX Design", description: "Research-driven mobile interfaces optimized for thumb-friendly navigation, engagement, and retention." },
            { title: "API & Backend Development", description: "Scalable backend architecture, RESTful/GraphQL APIs, and real-time data synchronization." },
            { title: "App Store Optimization", description: "ASO strategy, listing optimization, and launch planning to maximize downloads and visibility." },
            { title: "Maintenance & Support", description: "Post-launch monitoring, bug fixes, feature updates, and OS compatibility management." },
        ],
        outcomes: [
            { label: "Apps Launched", value: "30+" },
            { label: "User Retention", value: "+65%" },
            { label: "App Ratings", value: "4.7★" },
        ],
        faqs: [
            { question: "Should I build native or cross-platform?", answer: "It depends on your requirements. For maximum performance and platform-specific features, go native. For faster time-to-market with shared code, React Native is excellent." },
            { question: "How long does app development take?", answer: "A typical MVP takes 8-12 weeks. Full-featured apps can take 16-24 weeks depending on complexity." },
            { question: "Do you handle app store submission?", answer: "Yes. We manage the complete submission process for both Apple App Store and Google Play Store, including compliance reviews." },
            { question: "What about post-launch support?", answer: "We offer ongoing maintenance plans covering performance monitoring, bug fixes, OS updates, and feature enhancements." },
        ],
        iconName: "SmartphoneIcon",
    },

    /* ═══════════════════════════════════════════════
       UI/UX DESIGN
       ═══════════════════════════════════════════════ */
    {
        slug: "ui-ux-design-company-in-bangalore",
        title: "UI/UX Design",
        eyebrow: "UI/UX Design Services",
        headline: "Research-Driven {highlight} That Convert",
        highlightedWord: "Interfaces",
        subheadline: "We design digital experiences that delight users and drive business outcomes — grounded in research, validated through testing.",
        ctaPrimary: "Start a Design Project",
        ctaSecondary: "View Design Portfolio",
        breadcrumb: "UI/UX Design",
        metaTitle: "UI/UX Design Company in Bangalore — User Experience Design | Mixmedia Labs",
        metaDescription: "Leading UI/UX design company in Bangalore creating research-driven, user-centered digital experiences for web and mobile applications.",
        metaKeywords: ["UI/UX design Bangalore", "UX design company", "user experience design", "interface design agency"],
        inclusions: [
            { title: "User Research & Audits", description: "Heuristic evaluations, user interviews, surveys, and behavioral analytics to understand your audience." },
            { title: "Information Architecture", description: "Content hierarchies, user flows, and navigation structures that simplify complex experiences." },
            { title: "Wireframing & Prototyping", description: "Low and high-fidelity prototypes for rapid validation and stakeholder alignment before development." },
            { title: "Visual Design", description: "Pixel-perfect UI designs with consistent design systems, micro-interactions, and responsive layouts." },
            { title: "Usability Testing", description: "Moderated testing, A/B experiments, and heatmap analysis to continuously optimize conversion." },
            { title: "Design Systems", description: "Scalable Figma-based design systems with components, tokens, and documentation for design-dev handoff." },
        ],
        outcomes: [
            { label: "Conversion Lift", value: "+120%" },
            { label: "NPS Improvement", value: "+35pts" },
            { label: "Projects Delivered", value: "80+" },
        ],
        faqs: [
            { question: "What's the difference between UI and UX?", answer: "UX (user experience) focuses on the overall feel and usability. UI (user interface) focuses on the visual design — buttons, colors, typography, layout. We do both." },
            { question: "Do you conduct user research?", answer: "Yes. Every project starts with research — user interviews, competitive analysis, and behavioral data to inform design decisions." },
            { question: "Can you redesign our existing product?", answer: "Absolutely. We conduct UX audits, identify friction points, and create redesigns that improve usability and conversion." },
            { question: "What tools do you use?", answer: "We design in Figma, prototype with Figma prototyping and Maze, and use analytics tools like Hotjar and GA4 for user insights." },
        ],
        iconName: "PenToolIcon",
    },

    /* ═══════════════════════════════════════════════
       ECOMMERCE
       ═══════════════════════════════════════════════ */
    {
        slug: "ecommerce-solutions-in-bangalore",
        title: "Ecommerce Solutions",
        eyebrow: "Ecommerce Development",
        headline: "Revenue-Optimized {highlight} at Scale",
        highlightedWord: "Ecommerce",
        subheadline: "We build end-to-end ecommerce platforms designed to maximize AOV, reduce cart abandonment, and create exceptional shopping experiences.",
        ctaPrimary: "Get an Ecommerce Audit",
        ctaSecondary: "View Ecommerce Projects",
        breadcrumb: "Ecommerce Solutions",
        metaTitle: "Ecommerce Solutions in Bangalore — Online Store Development | Mixmedia Labs",
        metaDescription: "End-to-end ecommerce solutions in Bangalore. Custom Shopify, WooCommerce, and headless commerce development optimized for revenue and conversion.",
        metaKeywords: ["ecommerce development Bangalore", "Shopify development", "online store Bangalore", "ecommerce solutions"],
        inclusions: [
            { title: "Custom Store Development", description: "Shopify Plus, WooCommerce, and headless commerce builds tailored to your product catalog and customer journey." },
            { title: "Product Page Optimization", description: "Conversion-focused product pages with optimized imagery, rich content, and strategic upsell/cross-sell placements." },
            { title: "Checkout Optimization", description: "Streamlined checkout flows, one-click ordering, and abandoned cart recovery to maximize revenue capture." },
            { title: "Payment & Logistics Integration", description: "Seamless integration with payment gateways, shipping providers, and inventory management systems." },
            { title: "Ecommerce SEO", description: "Category page optimization, product schema, site architecture, and technical SEO for organic product discovery." },
            { title: "Analytics & CRO", description: "Revenue attribution, funnel analysis, A/B testing, and data-driven optimization of the shopping experience." },
        ],
        outcomes: [
            { label: "Revenue Growth", value: "+380%" },
            { label: "Cart Recovery", value: "+45%" },
            { label: "Stores Built", value: "25+" },
        ],
        faqs: [
            { question: "Which ecommerce platform do you recommend?", answer: "It depends on your scale. Shopify Plus for most D2C brands, WooCommerce for content-heavy sites, and headless commerce (Medusa/Saleor) for custom enterprise needs." },
            { question: "Can you migrate from an existing platform?", answer: "Yes. We handle migrations from Magento, OpenCart, legacy platforms, and custom builds with zero data loss and minimal downtime." },
            { question: "Do you handle product photography?", answer: "We partner with specialized product photography studios and can coordinate shoots as part of your project scope." },
            { question: "What about post-launch optimization?", answer: "We offer retainer plans focused on CRO, A/B testing, and continuous optimization to drive ongoing revenue improvement." },
        ],
        iconName: "ShoppingCartIcon",
    },

    /* ═══════════════════════════════════════════════
       WORDPRESS
       ═══════════════════════════════════════════════ */
    {
        slug: "wordpress-development-services-bangalore",
        title: "WordPress Development",
        eyebrow: "WordPress Development",
        headline: "Enterprise-Grade {highlight} Solutions",
        highlightedWord: "WordPress",
        subheadline: "Custom WordPress development optimized for speed, SEO, and scalability — not generic themes, but engineered solutions tailored to your business.",
        ctaPrimary: "Discuss Your WordPress Project",
        ctaSecondary: "View WordPress Work",
        breadcrumb: "WordPress Development",
        metaTitle: "WordPress Development Services in Bangalore | Mixmedia Labs",
        metaDescription: "Custom WordPress development services in Bangalore. Theme development, plugin customization, WooCommerce, and enterprise WordPress solutions.",
        metaKeywords: ["WordPress development Bangalore", "WordPress developer", "custom WordPress theme", "WordPress agency"],
        inclusions: [
            { title: "Custom Theme Development", description: "Bespoke WordPress themes built from scratch — no bloated page builders, just clean, fast, maintainable code." },
            { title: "Plugin Development", description: "Custom plugin development for unique functionality — CRM integrations, booking systems, advanced forms, and more." },
            { title: "WooCommerce Development", description: "Custom WooCommerce stores with tailored checkout flows, subscription models, and B2B ordering systems." },
            { title: "Speed Optimization", description: "Server-level caching, CDN configuration, image optimization, and database tuning for sub-2-second load times." },
            { title: "Security Hardening", description: "Enterprise security protocols, malware scanning, SSL enforcement, and proactive vulnerability management." },
            { title: "Migration & Support", description: "Platform migrations, WordPress version upgrades, and ongoing maintenance with 99.9% uptime guarantee." },
        ],
        outcomes: [
            { label: "Speed Score", value: "95+" },
            { label: "WP Sites Built", value: "60+" },
            { label: "Uptime", value: "99.9%" },
        ],
        faqs: [
            { question: "Why choose custom WordPress over a page builder?", answer: "Custom code is faster, more secure, and SEO-optimized. Page builders add bloat that slows your site and limits scalability." },
            { question: "Can you work with our existing WordPress site?", answer: "Yes. We audit existing sites, fix performance issues, and rebuild components without disrupting your live site." },
            { question: "Do you offer WordPress hosting?", answer: "We recommend and manage hosting on Cloudways, Kinsta, or WP Engine depending on your traffic and requirements." },
            { question: "What about security?", answer: "Every WordPress site we build includes security hardening, automatic updates, malware monitoring, and regular backups." },
        ],
        iconName: "CodeIcon",
    },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
    return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
    return services.map((s) => s.slug);
}
