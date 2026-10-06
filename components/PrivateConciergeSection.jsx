"use client";

import React from "react";
import Link from "next/link";
import { HiOutlineSparkles, HiOutlineEnvelope, HiOutlineChatBubbleBottomCenterText, HiOutlineArrowLongRight } from "react-icons/hi2";

const conciergeServices = [
    {
        title: "Bespoke Handloom Tailoring",
        subtitle: "LAROSE Private Order",
        icon: HiOutlineSparkles,
        description: "Custom measurements and personalized handloom weave allocations directly crafted by our master artisans in the Kathmandu valley.",
        cta: "Request Bespoke Fitting"
    },
    {
        title: "Himalayan Vitality Consultation",
        subtitle: "Holistic Wellness Regimen",
        icon: HiOutlineChatBubbleBottomCenterText,
        description: "Private dosage guidance for TORQUE 11 Shilajit resin, cannabinoid protocols with CBD Relixir+, and functional plant nutrition tailoring.",
        cta: "Schedule Consultation"
    },
    {
        title: "Estate Allocations & Private Cellars",
        subtitle: "Sylvante Estates Reserves",
        icon: HiOutlineEnvelope,
        description: "Exclusive access to rare single-estate artisanal teas, seasonal high-altitude harvests, and corporate legacy gifting suites.",
        cta: "Inquire Allocations"
    }
];

const PrivateConciergeSection = () => {
    return (
        <section className="py-24 px-6 sm:px-10 max-w-7xl mx-auto border-b border-blackPrimary/10">
            {/* SECTION MANIFESTO */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="text-xs uppercase tracking-[0.35em] text-brandGold font-[500] mb-3">
                    Delvaux & Kiton Standards
                </p>
                <h2 className="text-3xl sm:text-5xl font-[300] tracking-wide text-blackPrimary mb-4">
                    Private Client Concierge
                </h2>
                <div className="w-12 h-[1px] bg-brandGold mx-auto my-6"></div>
                <p className="text-base sm:text-lg font-[300] text-blackPrimary/70 leading-relaxed">
                    True luxury is inherently personal. Our private concierge assists discerning patrons with bespoke handloom commissions, tailored botanical wellness regimens, and private estate allocations.
                </p>
            </div>

            {/* CONCIERGE CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {conciergeServices.map((service, idx) => {
                    const Icon = service.icon;
                    return (
                        <div
                            key={idx}
                            className="bg-white p-8 sm:p-10 border border-blackPrimary/10 flex flex-col justify-between hover:border-blackPrimary/30 transition-all duration-300 group"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-full border border-blackPrimary/15 flex items-center justify-center mb-6 group-hover:border-blackPrimary transition-colors">
                                    <Icon className="text-xl text-brandGold" />
                                </div>
                                <p className="text-xs uppercase tracking-[0.2em] font-[500] text-brandOlive mb-2">
                                    {service.subtitle}
                                </p>
                                <h3 className="text-2xl font-[400] tracking-wide text-blackPrimary mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-xs sm:text-sm font-[300] text-blackPrimary/70 leading-relaxed mb-8">
                                    {service.description}
                                </p>
                            </div>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-[500] text-blackPrimary group-hover:text-brandGold transition-colors pt-4 border-t border-blackPrimary/10"
                            >
                                <span>{service.cta}</span>
                                <HiOutlineArrowLongRight className="text-sm group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    );
                })}
            </div>

            {/* DIRECT LINE STRIP */}
            <div className="mt-12 p-6 bg-blackPrimary text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div>
                    <span className="text-xs uppercase tracking-[0.25em] text-brandGold font-[500] block mb-1">
                        Immediate Private Advisory
                    </span>
                    <p className="text-sm font-[300] text-white/90">
                        Speak directly with our client director via dedicated WhatsApp or confidential email.
                    </p>
                </div>
                <Link
                    href="/contact"
                    className="px-6 py-3 bg-white text-blackPrimary text-xs uppercase tracking-[0.2em] font-[500] hover:bg-brandGold hover:text-blackPrimary transition-colors whitespace-nowrap"
                >
                    Connect Concierge
                </Link>
            </div>
        </section>
    );
};

export default PrivateConciergeSection;
