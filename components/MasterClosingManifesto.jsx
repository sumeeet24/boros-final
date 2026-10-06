"use client";

import React from "react";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const MasterClosingManifesto = () => {
    return (
        <section className="py-28 sm:py-36 px-6 sm:px-10 bg-[#FAF8F5] text-center border-b border-[#E8E4DE]">
            <div className="max-w-3xl mx-auto">
                <div className="h-10 w-[1px] bg-[#8C733E] mx-auto mb-8 opacity-70"></div>
                
                <h2 className="text-3xl sm:text-5xl font-[200] tracking-wide text-[#1A1A1A] leading-[1.25] mb-8">
                    Rarity need not announce itself. <br />
                    <span className="italic font-[200] text-[#6B655C]">
                        The finest materials reveal themselves slowly.
                    </span>
                </h2>

                <div className="w-16 h-[1px] bg-[#8C733E] mx-auto mb-8"></div>

                <div className="space-y-4 text-sm sm:text-base font-[300] text-[#1A1A1A]/80 leading-relaxed mb-10 max-w-2xl mx-auto">
                    <p>
                        The hand leaves what machinery cannot. Fewer, better things keep a different company with time.
                    </p>
                    <p>
                        We seek fibres of character, makers of knowledge, and forms that outlast the season.
                    </p>
                    <p>
                        We make in small numbers. We leave room for the material to speak.
                    </p>
                </div>

                <div className="mb-10">
                    <p className="text-xs uppercase tracking-[0.45em] text-[#8C733E] font-[500] mb-1">
                        BOROS SYLVANTE
                    </p>
                    <p className="text-sm font-[300] tracking-[0.25em] text-[#1A1A1A] uppercase">
                        Of Rare Materials. By Hand.
                    </p>
                </div>

                <div className="flex items-center justify-center gap-6 flex-wrap">
                    <Link
                        href="/private-appointments"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.25em] font-[500] hover:bg-[#8C733E] transition-all duration-300"
                    >
                        <span>Request An Appointment</span>
                        <HiOutlineArrowLongRight className="text-sm" />
                    </Link>
                    <Link
                        href="/the-collection"
                        className="inline-flex items-center gap-3 px-8 py-4 border border-[#1A1A1A]/30 bg-transparent text-[#1A1A1A] text-xs uppercase tracking-[0.25em] font-[500] hover:border-[#8C733E] hover:text-[#8C733E] transition-all duration-300"
                    >
                        <span>The Collection</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MasterClosingManifesto;
