import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy for Mixmedia Labs. Learn how we handle your data.",
    alternates: { canonical: "https://mixmedialabs.com/privacy-policy/" },
    openGraph: {
        title: "Privacy Policy | Mixmedia Labs",
        description: "Learn how Mixmedia Labs collects, uses, and protects your personal information.",
        url: "https://mixmedialabs.com/privacy-policy/",
    },
    robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
    return (
        <main>
            <section className="w-full bg-background py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-6">
                    <h1 className="font-display font-bold text-4xl md:text-5xl text-text-primary mb-8">Privacy Policy</h1>
                    <div className="prose prose-lg max-w-none font-body text-text-secondary space-y-6 leading-relaxed">
                        <p><strong>Last Updated:</strong> March 2026</p>
                        <h2 className="font-display font-bold text-2xl text-text-primary">1. Information We Collect</h2>
                        <p>When you interact with Mixmedia Labs through our website, we may collect personal information such as your name, email address, phone number, and company name when you voluntarily submit them through our contact forms.</p>
                        <h2 className="font-display font-bold text-2xl text-text-primary">2. How We Use Your Information</h2>
                        <p>We use the information we collect to respond to your inquiries, provide our services, send relevant communications, and improve our website experience. We do not sell your personal information to third parties.</p>
                        <h2 className="font-display font-bold text-2xl text-text-primary">3. Cookies</h2>
                        <p>Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings.</p>
                        <h2 className="font-display font-bold text-2xl text-text-primary">4. Data Security</h2>
                        <p>We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                        <h2 className="font-display font-bold text-2xl text-text-primary">5. Contact</h2>
                        <p>If you have questions about this policy, contact us at <a href="mailto:hello@mixmedialabs.com" className="text-primary hover:text-primary-hover transition-colors">hello@mixmedialabs.com</a>.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
