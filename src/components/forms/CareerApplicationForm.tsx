"use client";

import React, { useState } from "react";
import { SendIcon, PaperclipIcon } from "lucide-react";

interface CareerApplicationFormProps {
    jobTitle?: string;
    isGeneral?: boolean;
}

export function CareerApplicationForm({ jobTitle = "General Application", isGeneral = false }: CareerApplicationFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        formData.append("_subject", `Job Application: ${jobTitle}`);
        formData.append("_captcha", "false");
        formData.append("_template", "table");

        try {
            const response = await fetch("https://formsubmit.co/ajax/careers@mixmedialabs.com", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setIsSuccess(true);
                e.currentTarget.reset();
            } else {
                alert("Something went wrong handling your application. Please try again.");
            }
        } catch {
            alert("Something went wrong handling your application. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="bg-surface border border-border rounded-2xl p-8 md:p-12 text-center animate-in fade-in duration-500 max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <SendIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-2xl text-text-primary mb-3">Application Received!</h3>
                <p className="font-body text-text-secondary leading-relaxed max-w-md mx-auto">
                    Thanks for applying for the <span className="font-semibold text-text-primary">{jobTitle}</span> position. Our team will review your profile and get back to you within 48 hours.
                </p>
                <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-primary font-body font-semibold text-sm hover:underline"
                >
                    Submit another application
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-2xl p-6 md:p-10 max-w-2xl mx-auto text-left">
            <h3 className="font-display font-bold text-2xl text-text-primary mb-2">
                {isGeneral ? "Send Your Details" : `Apply for ${jobTitle}`}
            </h3>
            <p className="font-body text-text-secondary mb-8">
                Tell us a little about yourself and why you&apos;d be a great fit.
            </p>
            
            <input type="hidden" name="Role" value={jobTitle} />
            
            <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="font-body font-semibold text-xs text-text-secondary uppercase tracking-wider block">Full Name *</label>
                        <input 
                            name="Name"
                            type="text" 
                            required
                            className="w-full bg-background border border-border rounded-xl px-4 py-3 font-body text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                            placeholder="Jane Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="font-body font-semibold text-xs text-text-secondary uppercase tracking-wider block">Email Address *</label>
                        <input 
                            name="Email"
                            type="email" 
                            required
                            className="w-full bg-background border border-border rounded-xl px-4 py-3 font-body text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                            placeholder="jane@example.com"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="font-body font-semibold text-xs text-text-secondary uppercase tracking-wider block">Phone Number *</label>
                        <input 
                            name="Phone"
                            type="tel" 
                            required
                            className="w-full bg-background border border-border rounded-xl px-4 py-3 font-body text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                            placeholder="+91 98765 43210"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="font-body font-semibold text-xs text-text-secondary uppercase tracking-wider block">LinkedIn URL</label>
                        <input 
                            name="LinkedIn"
                            type="url" 
                            className="w-full bg-background border border-border rounded-xl px-4 py-3 font-body text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                            placeholder="https://linkedin.com/in/janedoe"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="font-body font-semibold text-xs text-text-secondary uppercase tracking-wider block">Portfolio / Personal Site</label>
                    <input 
                        name="Portfolio"
                        type="url" 
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 font-body text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="https://janedoe.com"
                    />
                </div>

                <div className="space-y-2">
                    <label className="font-body font-semibold text-xs text-text-secondary uppercase tracking-wider block">Why Mixmedia Labs? *</label>
                    <textarea 
                        name="CoverNote"
                        required
                        rows={4}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 font-body text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                        placeholder="Tell us why you're interested in this role and what you'd bring to the team..."
                    />
                </div>
                
                <div className="space-y-2">
                    <label className="font-body font-semibold text-xs text-text-secondary uppercase tracking-wider block">Resume Link (Google Drive / Dropbox) *</label>
                    <input 
                        name="ResumeLink"
                        type="url" 
                        required
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 font-body text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="Link to your resume PDF..."
                    />
                    <p className="font-body text-xs text-text-muted flex items-center gap-1.5 pt-1">
                        <PaperclipIcon className="w-3.5 h-3.5" />
                        Please ensure the link is publicly accessible.
                    </p>
                </div>

                <div className="pt-2">
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white font-display font-semibold text-sm px-8 py-4 rounded-full transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                    >
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                        {!isSubmitting && <SendIcon className="w-4 h-4 ml-1" />}
                    </button>
                </div>
            </div>
        </form>
    );
}
