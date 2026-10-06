"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { 
    HiCheckCircle, 
    HiSparkles, 
    HiShieldCheck, 
    HiTruck, 
    HiEnvelope, 
    HiArrowRight,
    HiChatBubbleLeftRight
} from "react-icons/hi2";

export default function ThankYouPage() {
    const [orderNumber, setOrderNumber] = useState("BS-2026-849201");
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        // Generate pseudo-random order ID
        const randomNum = Math.floor(100000 + Math.random() * 900000);
        setOrderNumber(`BS-${new Date().getFullYear()}-${randomNum}`);
        setCurrentTime(new Date().toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }));
    }, []);

    return (
        <div className="bg-[#FAF8F5] min-h-screen text-[#1A1A1A]">
            {/* Top Minimal Maison Ribbon */}
            <div className="border-b border-[#E8E4DE] bg-white/80 backdrop-blur-sm py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-[10px] tracking-[0.35em] uppercase text-[#8C733E] font-medium block">
                        Boros Sylvante Pvt. Ltd.
                    </span>
                    <span className="text-xs uppercase tracking-[0.25em] font-light text-[#1A1A1A]">
                        Atelier Acquisition Dossier
                    </span>
                </div>
            </div>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                
                {/* Confirmation Emblem & Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white border border-[#8C733E]/30 shadow-[0_4px_24px_rgba(140,115,62,0.12)] mb-6">
                        <HiSparkles className="w-10 h-10 text-[#8C733E]" />
                    </div>
                    
                    <p className="text-xs uppercase tracking-[0.3em] text-[#8C733E] font-medium mb-3">
                        Acquisition Authorized & Registered
                    </p>
                    <h1 className="text-3xl sm:text-5xl font-light tracking-wide text-[#1A1A1A] mb-4">
                        Thank You For Your Patronage
                    </h1>
                    <p className="text-[#6B655C] max-w-xl mx-auto text-sm sm:text-base font-light leading-relaxed">
                        Your order has been transmitted directly to our master artisans and botanical formulators. A detailed consignment dossier and proof of provenance are being prepared for your parcel.
                    </p>

                    {/* Order Reference Pill */}
                    <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 bg-white px-6 py-3 border border-[#E8E4DE] shadow-sm">
                        <div className="text-left">
                            <span className="text-[10px] uppercase tracking-wider text-[#9C9488] block">Consignment Dossier No.</span>
                            <span className="text-sm font-mono font-medium text-[#1A1A1A]">{orderNumber}</span>
                        </div>
                        <div className="h-6 w-px bg-[#E8E4DE] hidden sm:block" />
                        <div className="text-left">
                            <span className="text-[10px] uppercase tracking-wider text-[#9C9488] block">Registration Date</span>
                            <span className="text-xs font-medium text-[#1A1A1A]">{currentTime || "Today"}</span>
                        </div>
                        <div className="h-6 w-px bg-[#E8E4DE] hidden sm:block" />
                        <div className="text-left">
                            <span className="text-[10px] uppercase tracking-wider text-[#9C9488] block">Logistics Status</span>
                            <span className="text-xs font-medium text-emerald-700">In Atelier Prep</span>
                        </div>
                    </div>
                </div>

                {/* 4-Stage Atelier Dispatch Pipeline */}
                <div className="bg-white p-6 sm:p-10 border border-[#E8E4DE] shadow-[0_4px_24px_rgba(0,0,0,0.02)] mb-10">
                    <h2 className="text-xs uppercase tracking-[0.25em] text-[#8C733E] font-medium mb-8 text-center sm:text-left">
                        Consignment Dispatch Journey
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 relative">
                        {/* Step 1 */}
                        <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-2">
                            <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center text-xs font-medium flex-shrink-0">
                                <HiCheckCircle className="w-5 h-5 text-emerald-400" />
                            </div>
                            <div>
                                <span className="text-xs font-medium text-[#1A1A1A] block">1. Order Logged</span>
                                <span className="text-[11px] text-[#6B655C]">Authorization confirmed</span>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-2">
                            <div className="w-8 h-8 rounded-full bg-[#8C733E] text-white flex items-center justify-center text-xs font-medium flex-shrink-0">
                                2
                            </div>
                            <div>
                                <span className="text-xs font-medium text-[#1A1A1A] block">2. Atelier Curation</span>
                                <span className="text-[11px] text-[#8C733E] font-medium">Under master inspection</span>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-2 opacity-60">
                            <div className="w-8 h-8 rounded-full bg-[#E8E4DE] text-[#6B655C] flex items-center justify-center text-xs font-medium flex-shrink-0">
                                3
                            </div>
                            <div>
                                <span className="text-xs font-medium text-[#1A1A1A] block">3. Insured Dispatch</span>
                                <span className="text-[11px] text-[#6B655C]">Expedited courier transit</span>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-2 opacity-60">
                            <div className="w-8 h-8 rounded-full bg-[#E8E4DE] text-[#6B655C] flex items-center justify-center text-xs font-medium flex-shrink-0">
                                4
                            </div>
                            <div>
                                <span className="text-xs font-medium text-[#1A1A1A] block">4. White-Glove Handover</span>
                                <span className="text-[11px] text-[#6B655C]">At your residence</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Editorial Provenance Note */}
                <div className="bg-[#F3F0EB]/60 border border-[#E8E4DE] p-6 sm:p-8 mb-10 text-center sm:text-left">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C733E] font-medium block mb-2">
                        Philosophy of the House
                    </span>
                    <blockquote className="text-sm sm:text-base font-light italic text-[#1A1A1A] leading-relaxed mb-4">
                        &ldquo;Value Creation through Value Sharing. Every acquisition you make directly empowers indigenous Himalayan cultivators, master handloom weavers in Nepal, and regenerative soil restoration across Assam.&rdquo;
                    </blockquote>
                    <p className="text-xs uppercase tracking-[0.15em] text-[#6B655C]">
                        — Bitupan Boro, Founder & Chairman, Boros Sylvante Pvt. Ltd.
                    </p>
                </div>

                {/* Concierge & Support Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                    <div className="bg-white p-6 border border-[#E8E4DE]">
                        <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E8E4DE] flex items-center justify-center mb-4 text-[#8C733E]">
                            <HiChatBubbleLeftRight className="w-5 h-5" />
                        </div>
                        <h3 className="text-sm uppercase tracking-[0.15em] font-medium text-[#1A1A1A] mb-1">
                            Private Client Concierge
                        </h3>
                        <p className="text-xs text-[#6B655C] leading-relaxed mb-4">
                            Have questions regarding tailoring specifications, batch lab certificates, or delivery scheduling? Our concierge is on standby.
                        </p>
                        <a
                            href="https://wa.me/919401277393"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-medium text-[#8C733E] hover:text-[#1A1A1A] transition-colors"
                        >
                            <span>Open WhatsApp Concierge (+91 94012 77393)</span>
                            <HiArrowRight className="w-3.5 h-3.5" />
                        </a>
                    </div>

                    <div className="bg-white p-6 border border-[#E8E4DE]">
                        <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E8E4DE] flex items-center justify-center mb-4 text-[#8C733E]">
                            <HiEnvelope className="w-5 h-5" />
                        </div>
                        <h3 className="text-sm uppercase tracking-[0.15em] font-medium text-[#1A1A1A] mb-1">
                            Documentation & Invoice
                        </h3>
                        <p className="text-xs text-[#6B655C] leading-relaxed mb-4">
                            Your full GST invoice, certificate of authenticity, and dispatch tracking will be delivered to your email address shortly.
                        </p>
                        <a
                            href="mailto:contact@borosylvante.com"
                            className="inline-flex items-center gap-2 text-xs font-medium text-[#8C733E] hover:text-[#1A1A1A] transition-colors"
                        >
                            <span>contact@borosylvante.com</span>
                            <HiArrowRight className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </div>

                {/* Return to Maison Navigation */}
                <div className="text-center pt-6 border-t border-[#E8E4DE]">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#6B655C] mb-6">
                        Continue Exploring The Maison
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="w-full sm:w-auto px-8 py-3.5 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#8C733E] transition-all"
                        >
                            Return to The House
                        </Link>
                        <Link
                            href="/shop"
                            className="w-full sm:w-auto px-8 py-3.5 border border-[#1A1A1A] text-[#1A1A1A] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#1A1A1A] hover:text-white transition-all"
                        >
                            Explore All Creations
                        </Link>
                        <Link
                            href="/about-us"
                            className="w-full sm:w-auto px-8 py-3.5 border border-[#E8E4DE] bg-white text-[#6B655C] text-xs uppercase tracking-[0.2em] font-medium hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-all"
                        >
                            Founder & Philosophy
                        </Link>
                    </div>
                </div>

            </main>
        </div>
    );
}