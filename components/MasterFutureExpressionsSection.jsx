"use client";

import React from "react";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const MasterFutureExpressionsSection = () => {
    return (
        <section className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto border-b border-[#E8E4DE]">
            {/* INTRO */}
            <div className="max-w-3xl mb-16">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500] mb-3">
                    The House · Future Expressions
                </p>
                <h2 className="text-3xl sm:text-5xl font-[200] tracking-wide text-[#1A1A1A] leading-[1.2] mb-6">
                    Beyond the Atelier.
                </h2>
                <div className="w-12 h-[1px] bg-[#8C733E] mb-6"></div>
                <p className="text-sm sm:text-base font-[300] text-[#1A1A1A]/80 leading-relaxed mb-4">
                    Boros Sylvante is developing a small number of future expressions that extend its philosophy beyond the atelier.
                </p>
                <p className="text-xs sm:text-sm font-[300] text-[#6B655C] leading-relaxed">
                    These remain separate ventures. The fashion House stays devoted to apparel, footwear, bags and accessories.
                </p>
            </div>

            {/* DUAL EXPRESSIONS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-8">
                
                {/* 1. NIRVANA'S REALM */}
                <div className="bg-white p-8 sm:p-10 border border-[#E8E4DE] flex flex-col justify-between hover:border-[#1A1A1A] transition-colors">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C733E] font-[500]">
                                Future Venture · Wellbeing
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 bg-[#FAF8F5] border border-[#E8E4DE] text-[#6B655C]">
                                In Development
                            </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-[200] tracking-wide text-[#1A1A1A] mb-2">
                            NIRVANA'S REALM
                        </h3>
                        <p className="text-xs uppercase tracking-[0.2em] text-[#8C733E] font-[400] mb-4">
                            Mental Wellbeing · Frequency Therapy · Restorative Experience
                        </p>
                        <p className="text-xs sm:text-sm font-[300] text-[#1A1A1A]/75 leading-relaxed">
                            A future studio devoted to deep neurological restoration, frequency therapy, sound architecture, and mindful human equilibrium. Grounded in ancestral wisdom and restorative science.
                        </p>
                    </div>

                    <div className="pt-8 mt-8 border-t border-[#E8E4DE]">
                        <Link
                            href="/future-expressions#nirvanas-realm"
                            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-[500] text-[#1A1A1A] hover:text-[#8C733E] transition-colors"
                        >
                            <span>Learn More</span>
                            <HiOutlineArrowLongRight className="text-sm" />
                        </Link>
                    </div>
                </div>

                {/* 2. SYLVANTE ESTATES */}
                <div className="bg-white p-8 sm:p-10 border border-[#E8E4DE] flex flex-col justify-between hover:border-[#1A1A1A] transition-colors">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C733E] font-[500]">
                                Future Venture · Hospitality
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 bg-[#FAF8F5] border border-[#E8E4DE] text-[#6B655C]">
                                In Development
                            </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-[200] tracking-wide text-[#1A1A1A] mb-2">
                            SYLVANTE ESTATES
                        </h3>
                        <p className="text-xs uppercase tracking-[0.2em] text-[#8C733E] font-[400] mb-4">
                            Ultra-Luxury Nature Hospitality · Architectural Privacy
                        </p>
                        <p className="text-xs sm:text-sm font-[300] text-[#1A1A1A]/75 leading-relaxed">
                            An ultra-luxury hospitality expression shaped by raw natural terroir, secluded architectural privacy, and considered sensory experience. Sanctuaries designed in deep communion with nature.
                        </p>
                    </div>

                    <div className="pt-8 mt-8 border-t border-[#E8E4DE]">
                        <Link
                            href="/future-expressions#sylvante-estates"
                            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-[500] text-[#1A1A1A] hover:text-[#8C733E] transition-colors"
                        >
                            <span>Learn More</span>
                            <HiOutlineArrowLongRight className="text-sm" />
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MasterFutureExpressionsSection;
