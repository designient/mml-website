import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("ui-ux-design-company-in-bangalore")!;

export const metadata: Metadata = {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.metaKeywords,
    alternates: { canonical: `https://mixmedialabs.com/${service.slug}/` },
    openGraph: {
        title: service.metaTitle,
        description: service.metaDescription,
        url: `https://mixmedialabs.com/${service.slug}/`,
    },
    twitter: {
        title: service.metaTitle,
        description: service.metaDescription,
    },
};

export default function UIUXDesignPage() {
    return <ServicePageTemplate service={service} />;
}
