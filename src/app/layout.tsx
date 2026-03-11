import type { Metadata } from "next";
import { Nunito_Sans, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OrganizationSchema, LocalBusinessSchema, WebSiteSchema } from "@/components/seo/jsonLd";

const GA_MEASUREMENT_ID = "G-MP3YQQ0XB2";

const nunitoSans = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Mixmedia Labs — Digital Growth Agency in Bengaluru",
    template: "%s | Mixmedia Labs",
  },
  description:
    "Mixmedia Labs is a Bengaluru-based digital growth agency offering SEO, digital marketing, web development, branding, mobile app development, UI/UX design, ecommerce solutions, and WordPress development.",
  keywords: [
    "digital marketing agency Bangalore",
    "SEO company Bangalore",
    "web development Bangalore",
    "branding agency Bangalore",
    "mobile app development Bangalore",
    "UI/UX design Bangalore",
    "ecommerce solutions Bangalore",
    "WordPress development Bangalore",
  ],
  authors: [{ name: "Mixmedia Labs" }],
  metadataBase: new URL("https://mixmedialabs.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Mixmedia Labs",
    title: "Mixmedia Labs — Digital Growth Agency in Bengaluru",
    description:
      "We help ambitious brands scale through SEO, performance marketing, web development, branding, and UI/UX design. 50+ brands scaled with 3.2x average ROI.",
    url: "https://mixmedialabs.com/",
    images: [
      {
        url: "/mml-fav.png",
        width: 1200,
        height: 630,
        alt: "Mixmedia Labs — Digital Growth Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mixmedialabs",
    creator: "@mixmedialabs",
    title: "Mixmedia Labs — Digital Growth Agency in Bengaluru",
    description:
      "We help ambitious brands scale through SEO, performance marketing, web development, branding, and UI/UX design.",
    images: ["/mml-fav.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebSiteSchema />
      </head>
      <body
        className={`${nunitoSans.variable} ${playfairDisplay.variable} min-h-screen w-full bg-background font-body text-text-primary antialiased`}
      >
        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
