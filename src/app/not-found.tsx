import Link from "next/link";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { HomeIcon, ArrowLeftIcon, SearchIcon } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Page Not Found",
    description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
    return (
        <main className="w-full min-h-[80vh] bg-dark-background flex items-center justify-center py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary-accent/5 pointer-events-none" />
            
            <div className="max-w-2xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
                <span className="font-display font-bold text-primary text-9xl md:text-[150px] leading-none tracking-tighter opacity-20 select-none absolute -top-10 md:-top-20">
                    404
                </span>
                
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-8 border border-primary/20 backdrop-blur-sm relative mt-20 md:mt-16">
                    <SearchIcon className="w-8 h-8 text-primary" />
                </div>
                
                <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
                    Page Not Found
                </h1>
                
                <p className="font-body text-lg text-white/70 max-w-md mx-auto leading-relaxed mb-10">
                    The page you&apos;re looking for doesn&apos;t exist, has been moved, or is temporarily unavailable. 
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <PrimaryButton href="/" className="px-8 whitespace-nowrap flex items-center gap-2">
                        <HomeIcon className="w-4 h-4" />
                        Back to Homepage
                    </PrimaryButton>
                    <Link 
                        href="/contact-us/" 
                        className="inline-flex items-center gap-2 border border-white/20 text-white font-body font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-white/5 transition-colors whitespace-nowrap"
                    >
                        <ArrowLeftIcon className="w-4 h-4" />
                        Contact Support
                    </Link>
                </div>
            </div>
        </main>
    );
}
