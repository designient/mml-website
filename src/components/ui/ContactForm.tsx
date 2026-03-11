"use client";

import React, { useState } from "react";
import { SendIcon } from "lucide-react";
import { PrimaryButton } from "./PrimaryButton";

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Connect to form submission endpoint
        console.log("Form submitted:", formData);
    };

    const inputClasses =
        "w-full px-4 py-3.5 rounded-xl bg-surface border border-border text-text-primary font-body text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200";

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Work email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                    type="text"
                    name="company"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClasses}
                />
                <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={inputClasses}
                >
                    <option value="">Service of interest</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="seo">SEO</option>
                    <option value="web-development">Web Development</option>
                    <option value="branding">Branding</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="ecommerce">Ecommerce Solutions</option>
                    <option value="wordpress">WordPress Development</option>
                </select>
            </div>
            <textarea
                name="message"
                placeholder="Tell us about your project and goals..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`${inputClasses} resize-none`}
            />
            <PrimaryButton className="w-full sm:w-auto text-base px-8 py-4 flex items-center justify-center gap-2 group">
                Send Message
                <SendIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </PrimaryButton>
        </form>
    );
}
