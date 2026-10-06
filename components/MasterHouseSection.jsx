"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const MasterHouseSection = () => {
    return (
        <section className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto border-b border-[#E8E4DE]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* LEFT: EDITORIAL COPY (EXACT DEVELOPER MASTER) */}
                <div className="lg:col-span-7 space-y-6">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500]">
                        The House
                    </p>
                    
                    <h2 className="text-3xl sm:text-5xl font-[200] tracking-wide text-[#1A1A1A] leading-[1.2]">
                        There are materials that are known. <br />
                        <span className="italic font-[200] text-[#6B655C]">
                            And there are materials that are remembered.
                        </span>
                    </h2>

                    <div className="w-12 h-[1px] bg-[#8C733E] my-6"></div>

                    <div className="space-y-4 text-sm sm:text-base font-[300] text-[#1A1A1A]/80 leading-relaxed max-w-xl">
                        <p>
                            At Boros Sylvante, we work with the latter.
                        </p>
                        <p>
                            Fine natural fibres, considered blends and time-honoured techniques are brought together in small editions, with an insistence on proportion, touch and permanence.
                        </p>
                        <p className="text-sm uppercase tracking-[0.2em] font-[400] text-[#1A1A1A] pt-2">
                            Nothing more than necessary. <br />
                            Nothing less than exceptional.
                        </p>
                    </div>

                    <div className="pt-4">
                        <Link
                            href="/the-house"
                            className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.25em] font-[500] hover:bg-[#8C733E] transition-all duration-300"
                        >
                            <span>The House</span>
                            <HiOutlineArrowLongRight className="text-sm" />
                        </Link>
                    </div>
                </div>

                {/* RIGHT: EDITORIAL STILL OF WEAVERS / MATERIALS */}
                <div className="lg:col-span-5 relative w-full h-[460px] sm:h-[560px] bg-white border border-[#E8E4DE] overflow-hidden">
                    <Image
                        src="/editorial/artisan-craft.jpg"
                        alt="The Hand and Looms of Boros Sylvante"
                        fill
                        className="object-cover object-center"
                    />
                    <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#FAF8F5]/95 border border-[#E8E4DE] backdrop-blur-xs">
                        <p className="text-[10px] uppercase tracking-[0.25em] text-[#8C733E] font-[500] mb-0.5">
                            South Asian Craft Traditions
                        </p>
                        <p className="text-xs font-[300] text-[#1A1A1A]/70">
                            Fibre, technique and maker brought together patiently.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MasterHouseSection;
