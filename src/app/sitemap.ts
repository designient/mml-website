import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blogPosts";
import { caseStudies } from "@/data/caseStudies";
import { jobPostings } from "@/data/jobPostings";

export const dynamic = "force-static";

const BASE_URL = "https://mixmedialabs.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const mainPages: MetadataRoute.Sitemap = [
        { url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
        { url: `${BASE_URL}/about-us/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/contact-us/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/blog/`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
        { url: `${BASE_URL}/case-study/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/careers/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
        { url: `${BASE_URL}/privacy-policy/`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
        { url: `${BASE_URL}/sitemap/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    ];

    const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
        url: `${BASE_URL}/${service.slug}/`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    }));

    const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}/`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
        url: `${BASE_URL}/case-study/${cs.slug}/`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    const jobPages: MetadataRoute.Sitemap = jobPostings.map((job) => ({
        url: `${BASE_URL}/careers/${job.slug}/`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.5,
    }));

    return [...mainPages, ...servicePages, ...blogPages, ...caseStudyPages, ...jobPages];
}
