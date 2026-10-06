import React from "react";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export const metadata = {
    title: "The Materials · Boros Sylvante",
    description: "Hemp, nettle, merino, cashmere, pashmina and the rare silks of Assam. Natural fibres of character, chosen for provenance and hand.",
};

const materialsData = [
    {
        name: "Hemp",
        subtitle: "An ancient fibre. A remarkably contemporary character.",
        body: "Hemp is central to the material language of Boros Sylvante. Blended with cashmere, silk, cotton and linen, it becomes a cloth with structure and softness, texture and depth, a dry, cool, living hand.",
        quote: "The result is not a statement about hemp. It is simply beautiful cloth.",
        origin: "The hills of Nepal and North-East India, where hemp has long been worked by hand."
    },
    {
        name: "Nettle",
        subtitle: "A mountain fibre. Rarely seen, immediately felt.",
        body: "Himalayan nettle is harvested, stripped, spun and woven by hand. It gives a cloth of natural lustre and quiet strength, with a dry, cool hand that softens with wear.",
        quote: null,
        origin: "The mountain villages of Nepal, and the knowledge of the Himalayan hand."
    },
    {
        name: "Cotton",
        subtitle: "The quiet foundation.",
        body: "Cool, breathable and honest to the skin. In fine construction, cotton gives cloth clarity and ease, and allows the fibres beside it to speak.",
        quote: null,
        origin: "The handlooms of India and Sri Lanka."
    },
    {
        name: "Linen",
        subtitle: "Irregularity is part of its character.",
        body: "Structure, breath and a quiet texture that deepens with wear.",
        quote: null,
        origin: "Fine flax artisanal origins."
    },
    {
        name: "Fine Wools",
        subtitle: "Fineness first.",
        body: "Fine and superfine wools, chosen for the delicacy of the fibre, its resilience and its clean fall. Woven and knitted for pieces meant to be worn across seasons, and across years.",
        quote: null,
        origin: "Selected high-altitude pastoral heritage."
    },
    {
        name: "Merino",
        subtitle: "Fine, light, exact.",
        body: "Merino brings softness, drape and an even, disciplined hand. Alone or with silk and cashmere, it gives a cloth composure without weight.",
        quote: null,
        origin: "Superfine disciplined fleece."
    },
    {
        name: "Cashmere",
        subtitle: "Softness without excess.",
        body: "Warmth, lightness and a distinctive hand. Used alone or in combination, it changes the character of a cloth without overpowering it.",
        quote: null,
        origin: "The high plateaus of the Himalaya."
    },
    {
        name: "Pashmina",
        subtitle: "Extraordinary softness, handled with restraint.",
        body: "Approached with care, so that its natural qualities remain at the centre.",
        quote: null,
        origin: "Nepal and the Himalaya, spun and woven by hand on traditional looms."
    }
];

const silksData = [
    {
        name: "Muga",
        title: "The golden silk of Assam",
        description: "Naturally lustrous in a warm, honeyed tone, known for its strength and for deepening with wear.",
        origin: "Assam, and the weavers of the Brahmaputra valley."
    },
    {
        name: "Eri",
        title: "The soft silk of the North-East",
        description: "Warm, matte and quietly textured, spun from cocoons after the moth has left.",
        origin: "Assam and the wider North-East, hand-spun and hand-woven."
    },
    {
        name: "Pat",
        title: "The fine mulberry silk of Assam",
        description: "Smooth and luminous, woven with patience.",
        origin: "Sualkuchi and the looms of the Brahmaputra valley."
    },
    {
        name: "Tussar",
        title: "Wild forest silk",
        description: "A wild silk with a dry, textured hand and a natural golden-tan colour.",
        origin: "The forests and weaving villages of eastern and central India."
    },
    {
        name: "Mulberry",
        title: "Fluidity and movement",
        description: "The finest, smoothest silk, chosen for fluidity and movement. Used where a piece asks for lightness and lustre.",
        origin: "Traditional sericulture lineages."
    }
];

export default function TheMaterialsPage() {
    return (
        <main className="bg-[#FAF8F5] text-blackPrimary min-h-screen">
            {/* HERO MANIFESTO */}
            <section className="pt-28 pb-20 sm:pt-36 sm:pb-28 px-6 sm:px-10 max-w-5xl mx-auto text-center border-b border-[#E8E4DE]">
                <div className="h-10 w-[1px] bg-[#8C733E] mx-auto mb-8 opacity-70"></div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500] mb-4">
                    The Materials
                </p>
                <h1 className="text-4xl sm:text-6xl font-[200] tracking-wide text-[#1A1A1A] leading-[1.15] mb-8">
                    What begins <br />
                    <span className="italic font-[200] text-[#6B655C]">the piece.</span>
                </h1>
                <div className="w-16 h-[1px] bg-[#8C733E] mx-auto mb-8"></div>
                <p className="text-base sm:text-lg font-[300] text-[#1A1A1A]/85 leading-relaxed max-w-2xl mx-auto mb-4">
                    We begin with what cannot be convincingly imitated. Natural fibres of depth, character and memory.
                </p>
                <p className="text-xs uppercase tracking-[0.25em] text-[#8C733E] font-[400] max-w-xl mx-auto">
                    Hemp · Nettle · Cotton · Linen · Fine wools · Merino · Cashmere · Pashmina · Muga · Eri · Tussar · Mulberry · Vicuña
                </p>
                <p className="text-xs sm:text-sm font-[300] text-[#1A1A1A]/70 mt-6 max-w-xl mx-auto">
                    And considered combinations of them. Material determines what follows: weight, fall, touch, movement. We choose accordingly. Each is paired with the hand that understands it best.
                </p>
            </section>

            {/* TERRESTRIAL & MOUNTAIN FIBRES */}
            <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-6xl mx-auto border-b border-[#E8E4DE]">
                <div className="mb-14">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500] mb-2">
                        Fibre Matrix
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-[200] tracking-wide text-[#1A1A1A]">
                        Terrestrial & Mountain Fibres
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {materialsData.map((m, idx) => (
                        <div key={idx} className="bg-white p-8 sm:p-10 border border-[#E8E4DE] flex flex-col justify-between hover:border-[#1A1A1A] transition-colors">
                            <div>
                                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C733E] font-[500] block mb-2">
                                    0{idx + 1}
                                </span>
                                <h3 className="text-2xl font-[300] tracking-wide text-[#1A1A1A] mb-1">
                                    {m.name}
                                </h3>
                                <p className="text-xs uppercase tracking-[0.15em] text-[#6B655C] font-[400] mb-4">
                                    {m.subtitle}
                                </p>
                                <p className="text-xs sm:text-sm font-[300] text-[#1A1A1A]/80 leading-relaxed mb-4">
                                    {m.body}
                                </p>
                                {m.quote && (
                                    <p className="text-xs italic font-[300] text-[#8C733E] border-l-2 border-[#8C733E] pl-3 my-4">
                                        "{m.quote}"
                                    </p>
                                )}
                            </div>

                            <div className="pt-6 mt-4 border-t border-[#E8E4DE]">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#6B655C] font-[500] mb-1">
                                    Where it belongs
                                </p>
                                <p className="text-xs font-[300] text-[#1A1A1A]/80">
                                    {m.origin}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SILK CODEX */}
            <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-6xl mx-auto border-b border-[#E8E4DE]">
                <div className="max-w-2xl mb-14">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500] mb-2">
                        Sericulture Heritage
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-[200] tracking-wide text-[#1A1A1A] mb-3">
                        Silk
                    </h2>
                    <p className="text-sm uppercase tracking-[0.2em] text-[#6B655C] font-[400] mb-3">
                        Light falls differently on silk.
                    </p>
                    <p className="text-xs sm:text-sm font-[300] text-[#1A1A1A]/80 leading-relaxed">
                        Not one silk, but many. Each with its own colour, lustre and temperament.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {silksData.slice(0, 3).map((s, idx) => (
                        <div key={idx} className="bg-white p-8 border border-[#E8E4DE] flex flex-col justify-between">
                            <div>
                                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C733E] font-[500] block mb-2">
                                    Assam Lineage
                                </span>
                                <h3 className="text-xl font-[300] text-[#1A1A1A] mb-1">
                                    {s.name}
                                </h3>
                                <p className="text-xs uppercase tracking-[0.15em] text-[#6B655C] font-[400] mb-4">
                                    {s.title}
                                </p>
                                <p className="text-xs sm:text-sm font-[300] text-[#1A1A1A]/80 leading-relaxed mb-4">
                                    {s.description}
                                </p>
                            </div>
                            <div className="pt-4 border-t border-[#E8E4DE]">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#6B655C] font-[500] mb-0.5">Where it belongs</p>
                                <p className="text-xs font-[300] text-[#1A1A1A]/80">{s.origin}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {silksData.slice(3).map((s, idx) => (
                        <div key={idx} className="bg-white p-8 border border-[#E8E4DE] flex flex-col justify-between">
                            <div>
                                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C733E] font-[500] block mb-2">
                                    Specialist Silk
                                </span>
                                <h3 className="text-xl font-[300] text-[#1A1A1A] mb-1">
                                    {s.name}
                                </h3>
                                <p className="text-xs uppercase tracking-[0.15em] text-[#6B655C] font-[400] mb-4">
                                    {s.title}
                                </p>
                                <p className="text-xs sm:text-sm font-[300] text-[#1A1A1A]/80 leading-relaxed mb-4">
                                    {s.description}
                                </p>
                            </div>
                            <div className="pt-4 border-t border-[#E8E4DE]">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#6B655C] font-[500] mb-0.5">Where it belongs</p>
                                <p className="text-xs font-[300] text-[#1A1A1A]/80">{s.origin}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* VICUÑA CONCEIVED FOR THE FUTURE */}
            <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-5xl mx-auto border-b border-[#E8E4DE]">
                <div className="p-8 sm:p-12 bg-white border border-[#E8E4DE]">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C733E] font-[500]">
                            Future Work
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 bg-[#FAF8F5] border border-[#E8E4DE] text-[#6B655C]">
                            Conceived
                        </span>
                    </div>
                    <h2 className="text-3xl font-[200] tracking-wide text-[#1A1A1A] mb-2">
                        Vicuña
                    </h2>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#6B655C] font-[400] mb-6">
                        Rare by nature.
                    </p>
                    <div className="space-y-4 text-sm font-[300] text-[#1A1A1A]/80 leading-relaxed max-w-2xl">
                        <p>
                            Vicuña is not yet part of the collection. It is conceived for a future work: a single masterpiece, to be made when the material and the hand are ready for it.
                        </p>
                        <p>
                            Its fineness, warmth and touch need no explanation. When it appears, it will be treated with the same restraint as every material in the House.
                        </p>
                    </div>
                </div>
            </section>

            {/* MATERIAL NOTES CODEX */}
            <section className="py-20 px-6 sm:px-10 max-w-4xl mx-auto text-center">
                <div className="p-8 sm:p-10 border border-[#E8E4DE] bg-white">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500] mb-3">
                        Material Notes
                    </p>
                    <h3 className="text-2xl font-[200] text-[#1A1A1A] mb-6">
                        Every piece carries its material story.
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left py-6 border-y border-[#E8E4DE] mb-6 font-mono text-xs text-[#1A1A1A]/80">
                        <div>
                            <span className="text-[10px] text-[#8C733E] block mb-1 uppercase tracking-wider font-sans">Material</span>
                            <span>{'{Fibre composition}'}</span>
                        </div>
                        <div>
                            <span className="text-[10px] text-[#8C733E] block mb-1 uppercase tracking-wider font-sans">Origin</span>
                            <span>{'{Place of origin}'}</span>
                        </div>
                        <div>
                            <span className="text-[10px] text-[#8C733E] block mb-1 uppercase tracking-wider font-sans">Craft</span>
                            <span>{'{Finish}'}</span>
                        </div>
                        <div>
                            <span className="text-[10px] text-[#8C733E] block mb-1 uppercase tracking-wider font-sans">Edition</span>
                            <span>{'00 / 00'}</span>
                        </div>
                    </div>
                    <p className="text-xs italic font-[300] text-[#6B655C] mb-8">
                        The details belong with the piece.
                    </p>
                    <Link
                        href="/the-collection"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.25em] font-[500] hover:bg-[#8C733E] transition-all"
                    >
                        <span>View The Collection</span>
                        <HiOutlineArrowLongRight className="text-sm" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
