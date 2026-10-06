"use client";

import React from "react";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const materialsList = [
    { name: "Hemp", origin: "Hills of Nepal & North-East India", role: "Living hand, structured drape" },
    { name: "Nettle", origin: "High Himalayan Mountain Villages", role: "Mountain fibre, quiet strength" },
    { name: "Muga Silk", origin: "Brahmaputra Valley, Assam", role: "Golden silk, natural lustre" },
    { name: "Eri Silk", origin: "Assam & Wider North-East", role: "Soft, matte, non-violent silk" },
    { name: "Pat Silk", origin: "Sualkuchi Looms, Assam", role: "Luminous, patient mulberry silk" },
    { name: "Pashmina", origin: "High Plateaus of Nepal", role: "Hand-spun on traditional looms" },
    { name: "Cashmere", origin: "Himalayan Highlands", role: "Softness handled with restraint" },
    { name: "Cotton & Linen", origin: "Handlooms of India & Sri Lanka", role: "Cool, breathable foundations" }
];

const MasterMaterialsSection = () => {
    return (
        <section className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto border-b border-[#E8E4DE]">
            {/* SECTION HEADER */}
            <div className="max-w-3xl mb-16">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500] mb-3">
                    The Materials
                </p>
                <h2 className="text-3xl sm:text-5xl font-[200] tracking-wide text-[#1A1A1A] leading-[1.2] mb-6">
                    We begin with what cannot be convincingly imitated.
                </h2>
                <div className="w-12 h-[1px] bg-[#8C733E] mb-6"></div>
                <p className="text-sm sm:text-base font-[300] text-[#1A1A1A]/80 leading-relaxed">
                    Hemp. Nettle. Cotton. Linen. Fine wools. Merino. Cashmere. Pashmina. Muga. Eri. Tussar. Mulberry. And, in time, Vicuña.
                </p>
                <p className="text-xs sm:text-sm font-[300] text-[#6B655C] leading-relaxed mt-2">
                    Each is chosen for its provenance, its hand, and the way it ages. Some are blended. Some remain singular. None is included for its name alone.
                </p>
            </div>

            {/* MATERIAL MATRIX GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {materialsList.map((m, idx) => (
                    <div 
                        key={idx} 
                        className="p-6 bg-white border border-[#E8E4DE] flex flex-col justify-between hover:border-[#1A1A1A] transition-colors"
                    >
                        <div>
                            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C733E] font-[500] block mb-2">
                                Fibre 0{idx + 1}
                            </span>
                            <h3 className="text-lg font-[300] tracking-wide text-[#1A1A1A] mb-1">
                                {m.name}
                            </h3>
                            <p className="text-xs text-[#6B655C] font-[300] mb-3">
                                {m.origin}
                            </p>
                        </div>
                        <p className="text-xs font-[300] text-[#1A1A1A]/70 pt-3 border-t border-[#E8E4DE]">
                            {m.role}
                        </p>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#E8E4DE]">
                <p className="text-xs italic font-[300] text-[#6B655C]">
                    "The result is not a statement about hemp. It is simply beautiful cloth."
                </p>
                <Link
                    href="/the-materials"
                    className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-[500] text-[#1A1A1A] hover:text-[#8C733E] transition-colors"
                >
                    <span>Discover The Materials Codex</span>
                    <HiOutlineArrowLongRight className="text-base" />
                </Link>
            </div>
        </section>
    );
};

export default MasterMaterialsSection;
