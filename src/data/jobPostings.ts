export interface JobPosting {
    slug: string;
    title: string;
    department: string;
    type: string;
    location: string;
    experience: string;
    summary: string;
    responsibilities: string[];
    requirements: string[];
    niceToHave: string[];
}

export const jobPostings: JobPosting[] = [
    {
        slug: "senior-seo-strategist",
        title: "Senior SEO Strategist",
        department: "Marketing",
        type: "Full-time",
        location: "Bengaluru / Remote",
        experience: "5–8 years",
        summary: "Lead SEO strategy for B2B and D2C clients. You'll own everything from technical audits and keyword research to content planning and link-building programs. This is a senior, client-facing role that requires deep expertise in organic search and the ability to translate data into growth roadmaps.",
        responsibilities: [
            "Own end-to-end SEO strategy for 3–5 client accounts",
            "Conduct technical SEO audits and prioritise fixes with engineering teams",
            "Build topic cluster architectures and keyword strategies mapped to buyer journeys",
            "Lead content planning, briefing, and editorial calendar management",
            "Design and manage link acquisition and digital PR campaigns",
            "Present monthly performance reports and growth recommendations to clients",
            "Mentor junior SEO analysts",
        ],
        requirements: [
            "5+ years of hands-on SEO experience (agency or in-house)",
            "Deep expertise in technical SEO (crawling, indexation, Core Web Vitals)",
            "Proficiency with Ahrefs, SEMrush, Screaming Frog, and Google Search Console",
            "Experience building content strategies that drive measurable pipeline",
            "Strong analytical skills — comfortable with GA4, Looker Studio, and data storytelling",
            "Excellent written and verbal communication skills",
        ],
        niceToHave: [
            "Experience with B2B SaaS or enterprise SEO",
            "Knowledge of programmatic SEO techniques",
            "Familiarity with Next.js or modern JS frameworks for technical SEO collaboration",
        ],
    },
    {
        slug: "performance-marketing-manager",
        title: "Performance Marketing Manager",
        department: "Marketing",
        type: "Full-time",
        location: "Bengaluru",
        experience: "4–7 years",
        summary: "Run paid acquisition across Google, Meta, LinkedIn, and programmatic channels for our client portfolio. You'll build campaign structures, manage budgets, optimise for ROAS/CPL, and collaborate closely with creative and analytics teams.",
        responsibilities: [
            "Plan, build, and optimise paid campaigns across Google Ads, Meta Ads, and LinkedIn",
            "Manage monthly ad budgets ranging from ₹5L to ₹50L per client",
            "Build audience targeting strategies including lookalike, interest, and ABM segments",
            "Collaborate with the creative team on ad copy, visual assets, and landing pages",
            "Set up and maintain attribution models and conversion tracking",
            "Deliver weekly performance reports with clear optimisation recommendations",
        ],
        requirements: [
            "4+ years managing paid campaigns with demonstrated ROAS improvement",
            "Google Ads and Meta Ads certification",
            "Hands-on experience with GA4, conversion tracking, and multi-touch attribution",
            "Strong quantitative skills — comfortable with pivot tables, data segmentation, and budget allocation models",
            "Experience managing ₹10L+ monthly ad spend",
        ],
        niceToHave: [
            "Experience with B2B lead-gen campaigns",
            "Knowledge of programmatic advertising (DV360, The Trade Desk)",
            "Familiarity with CRM integration (HubSpot, Salesforce)",
        ],
    },
    {
        slug: "full-stack-developer",
        title: "Full-Stack Developer (Next.js)",
        department: "Engineering",
        type: "Full-time",
        location: "Bengaluru / Remote",
        experience: "3–6 years",
        summary: "Build high-performance web applications for our clients using Next.js, React, and modern web technologies. You'll work on everything from marketing websites to custom web apps, with a strong focus on performance, SEO, and user experience.",
        responsibilities: [
            "Build and maintain Next.js websites and web applications for client projects",
            "Implement responsive, accessible, and performant UI components",
            "Collaborate with designers on pixel-perfect implementation of design systems",
            "Optimise for performance (Core Web Vitals, lighthouse scores) and SEO",
            "Integrate third-party APIs, CMS platforms, and analytics tools",
            "Write clean, tested, and well-documented code",
            "Participate in code reviews and technical architecture discussions",
        ],
        requirements: [
            "3+ years of professional experience with React and Next.js",
            "Strong understanding of TypeScript, HTML5, CSS3, and Tailwind CSS",
            "Experience with static site generation (SSG) and server-side rendering (SSR)",
            "Knowledge of SEO best practices for web development",
            "Familiarity with Git, CI/CD pipelines, and deployment platforms (Vercel, Cloudflare)",
            "Experience with headless CMS platforms (Sanity, Contentful, or Strapi)",
        ],
        niceToHave: [
            "Experience with Shopify/Liquid or WordPress development",
            "Knowledge of motion/animation libraries (Framer Motion, GSAP)",
            "Understanding of web accessibility standards (WCAG 2.1)",
        ],
    },
    {
        slug: "ui-ux-designer",
        title: "UI/UX Designer",
        department: "Design",
        type: "Full-time",
        location: "Bengaluru / Remote",
        experience: "3–6 years",
        summary: "Design beautiful, conversion-optimised interfaces for web and mobile applications. You'll work across the full design lifecycle — from research and wireframing to high-fidelity prototypes and developer handoff.",
        responsibilities: [
            "Conduct user research, competitive analysis, and UX audits",
            "Create wireframes, user flows, and information architecture diagrams",
            "Design high-fidelity UI mockups and interactive prototypes in Figma",
            "Build and maintain design systems with reusable component libraries",
            "Collaborate with developers on implementation and design QA",
            "Present design concepts and rationale to clients",
        ],
        requirements: [
            "3+ years of UI/UX design experience",
            "Expert-level Figma proficiency (components, auto-layout, prototyping)",
            "Strong portfolio demonstrating web and mobile design work",
            "Understanding of conversion rate optimisation and landing page design",
            "Experience creating and maintaining design systems",
            "Excellent visual design sense — typography, color theory, layout composition",
        ],
        niceToHave: [
            "Experience with motion design (After Effects, Lottie, Rive)",
            "Knowledge of front-end development (HTML/CSS/JS)",
            "Experience with B2B SaaS product design",
        ],
    },
    {
        slug: "content-strategist",
        title: "Content Strategist",
        department: "Marketing",
        type: "Full-time",
        location: "Bengaluru",
        experience: "3–5 years",
        summary: "Own the content strategy and editorial output for our client portfolio. You'll plan, brief, edit, and ship SEO-optimised content that drives organic traffic, builds authority, and converts readers into leads.",
        responsibilities: [
            "Develop content strategies aligned with client growth goals and buyer journeys",
            "Conduct keyword research and build topic cluster architectures",
            "Write detailed content briefs for internal writers and freelancers",
            "Edit and quality-assure all published content for accuracy, tone, and SEO optimisation",
            "Manage editorial calendars across multiple client accounts",
            "Analyse content performance and recommend optimisation strategies",
        ],
        requirements: [
            "3+ years of content strategy or content marketing experience",
            "Strong B2B writing and editing skills — ability to simplify complex topics",
            "Understanding of SEO content principles (search intent, topic authority, internal linking)",
            "Experience with content management systems and editorial workflows",
            "Proficiency with keyword research tools (Ahrefs, SEMrush)",
            "Excellent project management and organisational skills",
        ],
        niceToHave: [
            "Experience in SaaS, fintech, or enterprise technology verticals",
            "Familiarity with AI writing tools and how to use them responsibly",
            "Knowledge of content distribution and promotion strategies",
        ],
    },
];

export function getJobBySlug(slug: string): JobPosting | undefined {
    return jobPostings.find((j) => j.slug === slug);
}
