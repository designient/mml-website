"use client";

import React, { useState } from "react";
import { SendIcon } from "lucide-react";

interface ServiceInquiryFormProps {
    serviceName: string;
}

export function ServiceInquiryForm({ serviceName }: ServiceInquiryFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        // Add dynamic subject line
        formData.append("_subject", `New Inquiry: ${serviceName}`);
        formData.append("_captcha", "false");
        formData.append("_template", "table");

        try {
            const response = await fetch("https://formsubmit.co/ajax/info@mixmedialabs.com", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setIsSuccess(true);
                e.currentTarget.reset();
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch {
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SendIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-2xl text-text-primary mb-2">Request Received!</h3>
                <p className="font-body text-text-secondary">
                    Thanks for reaching out about our {serviceName} services. A strategist will contact you within 24 hours.
                </p>
                <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-primary font-body font-semibold text-sm hover:underline"
                >
                    Submit another inquiry
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-2xl p-8">
            <h3 className="font-display font-bold text-2xl text-text-primary mb-6">Get a Free Consultation</h3>
            
            <input type="hidden" name="Service" value={serviceName} />
            <input type="hidden" name="_next" value="https://mixmedialabs.com/" />
            
            <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                        <label className="font-body font-semibold text-xs text-text-secondary uppercase tracking-wider block">Full Name *</label>
                        <input 
                            name="Name"
                            type="text" 
                            required
                            className="w-full bg-background border border-border rounded-xl px-4 py-3 font-body text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <label className="font-body font-semibold text-xs text-text-secondary uppercase tracking-wider block">Work Email *</label>
                        <input 
                            name="Email"
                            type="email" 
                            required
                            className="w-full bg-background border border-border rounded-xl px-4 py-3 font-body text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                            placeholder="john@company.com"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                        <label className="font-body font-semibold text-xs text-text-secondary uppercase tracking-wider block">Company Name</label>
                        <input 
                            name="Company"
                            type="text" 
                            className="w-full bg-background border border-border rounded-xl px-4 py-3 font-body text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                            placeholder="Acme Corp"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <label className="font-body font-semibold text-xs text-text-secondary uppercase tracking-wider block">Phone Number</label>
                        <input 
                            name="Phone"
                            type="url" 
                            className="w-full bg-background border border-border rounded-xl px-4 py-3 font-body text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                            placeholder="+91 98765 43210"
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="font-body font-semibold text-xs text-text-secondary uppercase tracking-wider block">Project Details *</label>
                    <textarea 
                        name="Message"
                        required
                        rows={4}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 font-body text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                        placeholder="Tell us about your goals, timeline, and current challenges..."
                    />
                </div>

                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-hover text-white font-display font-semibold text-base py-4 rounded-full transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                >
                    {isSubmitting ? "Sending..." : "Request Growth Audit"}
                    {!isSubmitting && <SendIcon className="w-4 h-4" />}
                </button>
                <p className="font-body text-xs text-text-muted text-center pt-2">
                    We&apos;ll never share your information. No spam, ever.
                </p>
            </div>
        </form>
    );
}
