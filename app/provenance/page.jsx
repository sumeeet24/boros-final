import React from "react";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export const metadata = {
    title: "Provenance · Boros Sylvante",
    description: "Every material begins somewhere. The origins and hands behind Boros Sylvante, across North-East India, Nepal and Sri Lanka.",
};

const territories = [
    {
        title: "India · North-East",
        tagline: "Where the House begins.",
        content: [
            "India offers the foundation of the House's material and craft language: an extraordinary range of fibres, weaving traditions and artisanal knowledge, close to inexhaustible.",
            "Our work begins in the North-East. The golden Muga, the soft Eri and the fine Pat silks of Assam. Weaving that runs from the looms of Sualkuchi to the backstrap looms of the hill communities. Natural dyes, patient colour, patterns carried in memory.",
            "We work within this landscape while developing a language of our own."
        ],
        attributes: ["Assam Golden Muga", "Ahimsa Eri Silk", "Sualkuchi Looms", "Hill Backstrap Weaves"]
    },
    {
        title: "Nepal",
        tagline: "Mountain knowledge. Exceptional fibres. Patient hands.",
        content: [
            "Nepal forms part of the House's wider exploration of material and craft.",
            "Himalayan nettle, harvested and spun by hand. Pashmina, spun and woven on traditional looms. Hemp, worked in the hills for generations.",
            "Its relationship with high-altitude fibres and traditional textile practice adds another dimension to our vocabulary."
        ],
        attributes: ["Wild Himalayan Nettle", "Hand-Spun Pashmina", "Indigenous Mountain Hemp", "Traditional Shuttle Looms"]
    },
    {
        title: "Sri Lanka",
        tagline: "Island traditions. Distinctive craft.",
        content: [
            "Sri Lanka contributes another strand to the House's South Asian perspective, through its material culture, textile knowledge and artisanal traditions.",
            "Handloom cotton, woven with a light and even hand. Beeralu, the bobbin lace of the southern coast. Cloth coloured by hand.",
            "The intention is not to collect traditions. It is to form meaningful relationships between them."
        ],
        attributes: ["Coastal Handloom Cotton", "Beeralu Bobbin Lace", "Artisanal Botanical Dyes", "Southern Coast Guilds"]
    }
];

export default function ProvenancePage() {
    return (
        <main className="bg-[#FAF8F5] text-blackPrimary min-h-screen">
            {/* HERO */}
            <section className="pt-28 pb-20 sm:pt-36 sm:pb-28 px-6 sm:px-10 max-w-5xl mx-auto text-center border-b border-[#E8E4DE]">
                <div className="h-10 w-[1px] bg-[#8C733E] mx-auto mb-8 opacity-70"></div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500] mb-4">
                    Provenance
                </p>
                <h1 className="text-4xl sm:text-6xl font-[200] tracking-wide text-[#1A1A1A] leading-[1.15] mb-8">
                    Every material <br />
                    <span className="italic font-[200] text-[#6B655C]">begins somewhere.</span>
                </h1>
                <div className="w-16 h-[1px] bg-[#8C733E] mx-auto mb-8"></div>
                <p className="text-base sm:text-lg font-[300] text-[#1A1A1A]/85 leading-relaxed max-w-2xl mx-auto mb-4">
                    Before a fibre becomes cloth, it has already travelled. Grown, gathered, spun, woven, dyed, shaped, carried through many hands.
                </p>
                <p className="text-xs uppercase tracking-[0.25em] text-[#8C733E] font-[400] max-w-xl mx-auto">
                    These details matter to us.
                </p>
            </section>

            {/* MANIFESTO CALLOUT */}
            <section className="py-16 px-6 sm:px-10 max-w-4xl mx-auto text-center border-b border-[#E8E4DE]">
                <p className="text-sm sm:text-base font-[300] text-[#1A1A1A]/80 leading-relaxed mb-6">
                    Our work begins in India and extends across the South Asian craft landscape, including Nepal and Sri Lanka. We build relationships with cultivators, fibre producers, weavers and specialist makers, whose knowledge gives substance to the finished piece.
                </p>
                <p className="text-base sm:text-lg font-[300] tracking-wide text-[#1A1A1A] italic">
                    "Provenance is not an appendix to the product. It is part of the product."
                </p>
            </section>

            {/* THREE TERRITORIES */}
            <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-6xl mx-auto border-b border-[#E8E4DE]">
                <div className="space-y-16">
                    {territories.map((t, idx) => (
                        <div key={idx} className="p-8 sm:p-12 bg-white border border-[#E8E4DE]">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 pb-6 border-b border-[#E8E4DE]">
                                <div>
                                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C733E] font-[500] block mb-2">
                                        Region 0{idx + 1}
                                    </span>
                                    <h2 className="text-3xl font-[200] tracking-wide text-[#1A1A1A] mb-1">
                                        {t.title}
                                    </h2>
                                    <p className="text-xs uppercase tracking-[0.2em] text-[#6B655C] font-[400]">
                                        {t.tagline}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 max-w-md">
                                    {t.attributes.map((a, i) => (
                                        <span key={i} className="text-[10px] uppercase tracking-[0.15em] px-3 py-1 bg-[#FAF8F5] border border-[#E8E4DE] text-[#1A1A1A]">
                                            {a}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4 max-w-3xl">
                                {t.content.map((p, i) => (
                                    <p key={i} className="text-sm sm:text-base font-[300] text-[#1A1A1A]/80 leading-relaxed">
                                        {p}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CLOSING */}
            <section className="py-20 px-6 sm:px-10 text-center">
                <div className="max-w-xl mx-auto space-y-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#8C733E] font-[500]">
                        The Synthesis
                    </p>
                    <p className="text-xl sm:text-2xl font-[200] text-[#1A1A1A] tracking-wide">
                        Different places. Different hands. <br />
                        <span className="italic text-[#6B655C]">One House.</span>
                    </p>
                    <div className="pt-4">
                        <Link
                            href="/the-collection"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.25em] font-[500] hover:bg-[#8C733E] transition-all"
                        >
                            <span>Explore The Creations</span>
                            <HiOutlineArrowLongRight className="text-sm" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
