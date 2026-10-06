"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const MasterHandSection = () => {
    return (
        <section className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto border-b border-[#E8E4DE]">
            {/* INTRO TEXT */}
            <div className="max-w-3xl mb-16">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500] mb-3">
                    The Hand
                </p>
                <h2 className="text-3xl sm:text-5xl font-[200] tracking-wide text-[#1A1A1A] leading-[1.2] mb-6">
                    Before a piece is finished, it passes through many hands.
                </h2>
                <div className="w-12 h-[1px] bg-[#8C733E] mb-6"></div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#6B655C] font-[400] mb-4">
                    Cutting. Joining. Shaping. Finishing.
                </p>
                <p className="text-sm sm:text-base font-[300] text-[#1A1A1A]/80 leading-relaxed mb-4">
                    The difference is found where the eye does not immediately look: in the turn of a seam, the fall of a lapel, the weight of a hem.
                </p>
                <p className="text-sm font-[300] text-[#1A1A1A]/80 leading-relaxed">
                    Our makers carry knowledge refined through years of practice. Their hand remains visible, not as ornament, but as character.
                </p>
            </div>

            {/* DUAL ATELIER SHOWCASE: LA RRANI HOUSE & LAROSE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
                
                {/* ATELIER CARD 1: LA RRANI HOUSE */}
                <div className="bg-white border border-[#E8E4DE] overflow-hidden flex flex-col justify-between group">
                    <div className="relative w-full h-[480px] sm:h-[540px] bg-[#FAF8F5] overflow-hidden">
                        <Image
                            src="/products/la-rrani-exploratory-artifact.jpg"
                            alt="LA RRANI HOUSE Exploratory Artifact"
                            fill
                            className="object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-[#FAF8F5]/90 text-blackPrimary text-[10px] uppercase tracking-[0.25em] font-[500] backdrop-blur-sm border border-blackPrimary/5">
                                LA RRANI HOUSE
                            </span>
                        </div>
                    </div>
                    <div className="p-8 bg-[#FAF8F5]/50 border-t border-[#E8E4DE]">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C733E] font-[500] mb-1">
                            Atelier Expression
                        </p>
                        <h3 className="text-2xl font-[300] tracking-wide text-[#1A1A1A] mb-2">
                            The House, made more intimately.
                        </h3>
                        <p className="text-xs font-[300] text-[#1A1A1A]/70 leading-relaxed mb-6">
                            Moves beyond the collection into numbered pieces, private commissions and made-to-measure considerations. Some pieces are made once. Some are made for one.
                        </p>
                        <Link
                            href="/the-atelier"
                            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-[500] text-[#1A1A1A] hover:text-[#8C733E] transition-colors"
                        >
                            <span>Explore LA RRANI</span>
                            <HiOutlineArrowLongRight className="text-sm" />
                        </Link>
                    </div>
                </div>

                {/* ATELIER CARD 2: LAROSE ATELIER COUTURE */}
                <div className="bg-white border border-[#E8E4DE] overflow-hidden flex flex-col justify-between group">
                    <div className="relative w-full h-[480px] sm:h-[540px] bg-[#FAF8F5] overflow-hidden">
                        <Image
                            src="/products/larose-gown.jpg"
                            alt="LAROSE Gown under LA RRANI HOUSE Atelier"
                            fill
                            className="object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-[#FAF8F5]/90 text-blackPrimary text-[10px] uppercase tracking-[0.25em] font-[500] backdrop-blur-sm border border-blackPrimary/5">
                                LAROSE
                            </span>
                        </div>
                    </div>
                    <div className="p-8 bg-[#FAF8F5]/50 border-t border-[#E8E4DE]">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C733E] font-[500] mb-1">
                            By LA RRANI HOUSE · Boros Sylvante
                        </p>
                        <h3 className="text-2xl font-[300] tracking-wide text-[#1A1A1A] mb-2">
                            The Bamboo Silk Evening Silhouette
                        </h3>
                        <p className="text-xs font-[300] text-[#1A1A1A]/70 leading-relaxed mb-6">
                            Sculptural couture tailored from regenerative organic bamboo silk filaments. Numbered pieces and selected atelier creations, finished by hand.
                        </p>
                        <Link
                            href="/the-atelier"
                            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-[500] text-[#1A1A1A] hover:text-[#8C733E] transition-colors"
                        >
                            <span>Enter The Atelier</span>
                            <HiOutlineArrowLongRight className="text-sm" />
                        </Link>
                    </div>
                </div>

            </div>

            {/* CALL TO ACTION */}
            <div className="text-center pt-6">
                <Link
                    href="/the-atelier"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.25em] font-[500] hover:bg-[#8C733E] transition-all duration-300"
                >
                    <span>Enter The Atelier</span>
                    <HiOutlineArrowLongRight className="text-sm" />
                </Link>
            </div>
        </section>
    );
};

export default MasterHandSection;
