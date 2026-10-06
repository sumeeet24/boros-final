"use client";

import React from "react";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const regions = [
    {
        title: "India · North-East",
        subtitle: "Where the House begins",
        description: "The golden Muga, the soft Eri and the fine Pat silks of Assam. Weaving that runs from the looms of Sualkuchi to the backstrap looms of the hill communities. Natural dyes, patient colour, patterns carried in memory."
    },
    {
        title: "Nepal",
        subtitle: "Mountain knowledge · Exceptional fibres",
        description: "Himalayan nettle, harvested and spun by hand. Pashmina, spun and woven on traditional looms. Hemp, worked in the hills for generations. High-altitude fibres and traditional textile practice."
    },
    {
        title: "Sri Lanka",
        subtitle: "Island traditions · Distinctive craft",
        description: "Handloom cotton, woven with a light and even hand. Beeralu, the bobbin lace of the southern coast. Cloth coloured by hand. Forming meaningful relationships across South Asian traditions."
    }
];

const MasterProvenanceSection = () => {
    return (
        <section className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto border-b border-[#E8E4DE]">
            {/* INTRO */}
            <div className="max-w-3xl mb-16">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500] mb-3">
                    Where It Begins
                </p>
                <h2 className="text-3xl sm:text-5xl font-[200] tracking-wide text-[#1A1A1A] leading-[1.2] mb-6">
                    Every rare material has a life before it becomes a garment.
                </h2>
                <div className="w-12 h-[1px] bg-[#8C733E] mb-6"></div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#6B655C] font-[400] mb-4">
                    Where it was grown. Where it was spun. Who worked it. How it travelled.
                </p>
                <p className="text-sm sm:text-base font-[300] text-[#1A1A1A]/80 leading-relaxed mb-4">
                    Our work begins in North-East India and moves through the wider craft traditions of South Asia, in Nepal and Sri Lanka.
                </p>
                <p className="text-sm font-[300] text-[#1A1A1A] italic">
                    Different places. Different hands. One House.
                </p>
            </div>

            {/* THREE TERRITORY CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {regions.map((r, idx) => (
                    <div 
                        key={idx}
                        className="bg-white p-8 border border-[#E8E4DE] flex flex-col justify-between hover:border-[#1A1A1A] transition-colors"
                    >
                        <div>
                            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C733E] font-[500] block mb-2">
                                Region 0{idx + 1}
                            </span>
                            <h3 className="text-2xl font-[300] tracking-wide text-[#1A1A1A] mb-1">
                                {r.title}
                            </h3>
                            <p className="text-xs uppercase tracking-[0.15em] text-[#6B655C] font-[400] mb-4">
                                {r.subtitle}
                            </p>
                            <p className="text-xs sm:text-sm font-[300] text-[#1A1A1A]/75 leading-relaxed">
                                {r.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="text-center pt-6">
                <Link
                    href="/provenance"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.25em] font-[500] hover:bg-[#8C733E] transition-all duration-300"
                >
                    <span>Provenance</span>
                    <HiOutlineArrowLongRight className="text-sm" />
                </Link>
            </div>
        </section>
    );
};

export default MasterProvenanceSection;
