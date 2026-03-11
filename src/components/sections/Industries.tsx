import React from "react";
import {
    BuildingIcon,
    BanknoteIcon,
    PillIcon,
    PlaneIcon,
    CarIcon,
    TruckIcon,
    FactoryIcon,
    ShieldIcon,
    MegaphoneIcon,
    HeartPulseIcon,
    UtensilsIcon,
    GraduationCapIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const industries = [
    { name: "Real Estate", icon: <BuildingIcon className="w-4.5 h-4.5" /> },
    { name: "Finance", icon: <BanknoteIcon className="w-4.5 h-4.5" /> },
    { name: "Pharmacy", icon: <PillIcon className="w-4.5 h-4.5" /> },
    { name: "Travel", icon: <PlaneIcon className="w-4.5 h-4.5" /> },
    { name: "Dealers", icon: <CarIcon className="w-4.5 h-4.5" /> },
    { name: "Logistics", icon: <TruckIcon className="w-4.5 h-4.5" /> },
    { name: "Manufacturing", icon: <FactoryIcon className="w-4.5 h-4.5" /> },
    { name: "Insurance", icon: <ShieldIcon className="w-4.5 h-4.5" /> },
    { name: "Advertising", icon: <MegaphoneIcon className="w-4.5 h-4.5" /> },
    { name: "Healthcare", icon: <HeartPulseIcon className="w-4.5 h-4.5" /> },
    { name: "Restaurant", icon: <UtensilsIcon className="w-4.5 h-4.5" /> },
    { name: "EduTech", icon: <GraduationCapIcon className="w-4.5 h-4.5" /> },
];

export function Industries() {
    return (
        <section className="w-full bg-background py-20 md:py-28 border-b border-border">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    eyebrow="Industries We Serve"
                    title="Growth Strategies Built for Your Industry"
                    description="We bring deep domain expertise across verticals — adapting proven frameworks to the nuances of your market."
                    centered
                />

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {industries.map((industry, idx) => (
                        <div
                            key={idx}
                            className="group flex flex-col items-center gap-3 bg-surface rounded-xl py-6 px-4 border border-border hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                        >
                            <div className="w-10 h-10 rounded-lg bg-primary-soft text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {industry.icon}
                            </div>
                            <span className="font-heading font-semibold text-sm text-text-primary text-center">
                                {industry.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
