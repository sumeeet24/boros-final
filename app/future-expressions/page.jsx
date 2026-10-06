import React from "react";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export const metadata = {
    title: "Future Expressions · Boros Sylvante",
    description: "Future expressions extending the philosophy of Boros Sylvante beyond the atelier: NIRVANA'S REALM and SYLVANTE ESTATES.",
};

export default function FutureExpressionsPage() {
    return (
        <main className="bg-[#FAF8F5] text-blackPrimary min-h-screen">
            {/* HERO */}
            <section className="pt-28 pb-20 sm:pt-36 sm:pb-28 px-6 sm:px-10 max-w-5xl mx-auto text-center border-b border-[#E8E4DE]">
                <div className="h-10 w-[1px] bg-[#8C733E] mx-auto mb-8 opacity-70"></div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500] mb-4">
                    The House · Future Expressions
                </p>
                <h1 className="text-4xl sm:text-6xl font-[200] tracking-wide text-[#1A1A1A] leading-[1.15] mb-8">
                    Beyond the <br />
                    <span className="italic font-[200] text-[#6B655C]">Atelier.</span>
                </h1>
                <div className="w-16 h-[1px] bg-[#8C733E] mx-auto mb-8"></div>
                <p className="text-base sm:text-lg font-[300] text-[#1A1A1A]/85 leading-relaxed max-w-2xl mx-auto mb-4">
                    Boros Sylvante is developing a small number of future expressions that extend its philosophy beyond the atelier.
                </p>
                <p className="text-xs uppercase tracking-[0.25em] text-[#8C733E] font-[400] max-w-xl mx-auto">
                    These remain separate ventures. The fashion House stays devoted to apparel, footwear, bags and accessories.
                </p>
            </section>

            {/* DUAL VENTURES DETAILED BREAKDOWN */}
            <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-6xl mx-auto border-b border-[#E8E4DE]">
                <div className="space-y-24">
                    
                    {/* 1. NIRVANA'S REALM */}
                    <div id="nirvanas-realm" className="p-8 sm:p-14 bg-white border border-[#E8E4DE] scroll-mt-28">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E8E4DE]">
                            <div>
                                <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C733E] font-[500] block mb-1">
                                    Future Expression 01
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-[200] tracking-wide text-[#1A1A1A]">
                                    NIRVANA'S REALM
                                </h2>
                            </div>
                            <span className="text-[10px] uppercase tracking-[0.2em] px-3 py-1 bg-[#FAF8F5] border border-[#E8E4DE] text-[#6B655C] self-start sm:self-auto">
                                Concept & Development
                            </span>
                        </div>

                        <p className="text-xs uppercase tracking-[0.25em] text-[#8C733E] font-[400] mb-6">
                            Mental Wellbeing · Frequency Therapy · Restorative Experience
                        </p>

                        <div className="space-y-6 text-sm sm:text-base font-[300] text-[#1A1A1A]/80 leading-relaxed max-w-3xl">
                            <p>
                                A future studio for mental wellbeing, nervous system equilibrium, and restorative sensory experience.
                            </p>
                            <p>
                                Conceived at the intersection of frequency resonance therapy, therapeutic soundscapes, and contemplative human architecture, Nirvana’s Realm explores biological restoration outside the accelerated rhythms of contemporary living.
                            </p>
                            <p>
                                Every modality is calibrated to foster profound mental tranquility, cellular rest, and sensory clarity.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 mt-10 border-t border-[#E8E4DE]">
                            <div>
                                <h4 className="text-xs uppercase tracking-[0.2em] font-[500] text-[#1A1A1A] mb-2">Frequency Therapy</h4>
                                <p className="text-xs font-[300] text-[#1A1A1A]/70 leading-relaxed">Acoustic and vibrational resonance engineered to harmonize brainwave states.</p>
                            </div>
                            <div>
                                <h4 className="text-xs uppercase tracking-[0.2em] font-[500] text-[#1A1A1A] mb-2">Mental Wellbeing</h4>
                                <p className="text-xs font-[300] text-[#1A1A1A]/70 leading-relaxed">Contemplative environments designed for cognitive stillness and somatic ease.</p>
                            </div>
                            <div>
                                <h4 className="text-xs uppercase tracking-[0.2em] font-[500] text-[#1A1A1A] mb-2">Restorative Protocols</h4>
                                <p className="text-xs font-[300] text-[#1A1A1A]/70 leading-relaxed">Rooted in ancient eastern mindfulness and modern restorative neuroscience.</p>
                            </div>
                        </div>
                    </div>

                    {/* 2. SYLVANTE ESTATES */}
                    <div id="sylvante-estates" className="p-8 sm:p-14 bg-white border border-[#E8E4DE] scroll-mt-28">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E8E4DE]">
                            <div>
                                <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C733E] font-[500] block mb-1">
                                    Future Expression 02
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-[200] tracking-wide text-[#1A1A1A]">
                                    SYLVANTE ESTATES
                                </h2>
                            </div>
                            <span className="text-[10px] uppercase tracking-[0.2em] px-3 py-1 bg-[#FAF8F5] border border-[#E8E4DE] text-[#6B655C] self-start sm:self-auto">
                                Territory Acquisition & Architecture
                            </span>
                        </div>

                        <p className="text-xs uppercase tracking-[0.25em] text-[#8C733E] font-[400] mb-6">
                            Ultra-Luxury Nature Hospitality · Secluded Architectural Privacy
                        </p>

                        <div className="space-y-6 text-sm sm:text-base font-[300] text-[#1A1A1A]/80 leading-relaxed max-w-3xl">
                            <p>
                                A future hospitality expression shaped by raw natural terroir, secluded architectural privacy, and considered sensory experience.
                            </p>
                            <p>
                                Conceived as intimate geographic sanctuaries located within ecologically pristine landscapes of the Himalayas and untouched coastal terroirs, Sylvante Estates creates residences of radical seclusion.
                            </p>
                            <p>
                                Low-density architecture built from regional stone and native timber, celebrating total privacy, exceptional culinary restraint, and deep communion with nature.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 mt-10 border-t border-[#E8E4DE]">
                            <div>
                                <h4 className="text-xs uppercase tracking-[0.2em] font-[500] text-[#1A1A1A] mb-2">Architectural Privacy</h4>
                                <p className="text-xs font-[300] text-[#1A1A1A]/70 leading-relaxed">Discrete freestanding estates designed to vanish seamlessly into the topography.</p>
                            </div>
                            <div>
                                <h4 className="text-xs uppercase tracking-[0.2em] font-[500] text-[#1A1A1A] mb-2">Raw Terroir</h4>
                                <p className="text-xs font-[300] text-[#1A1A1A]/70 leading-relaxed">Pristine elevations and coastal corridors with zero industrial light or sound.</p>
                            </div>
                            <div>
                                <h4 className="text-xs uppercase tracking-[0.2em] font-[500] text-[#1A1A1A] mb-2">Considered Experience</h4>
                                <p className="text-xs font-[300] text-[#1A1A1A]/70 leading-relaxed">Bespoke service, regenerative farming, and restorative private retreats.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* SEPARATION REAFFIRMATION */}
            <section className="py-20 px-6 sm:px-10 max-w-4xl mx-auto text-center">
                <p className="text-xs uppercase tracking-[0.25em] text-[#8C733E] font-[500] mb-3">
                    House Boundary
                </p>
                <p className="text-sm font-[300] text-[#1A1A1A]/80 leading-relaxed mb-8 max-w-xl mx-auto">
                    These remain separate ventures. The fashion House stays devoted to apparel, footwear, bags and accessories.
                </p>
                <Link
                    href="/the-collection"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.25em] font-[500] hover:bg-[#8C733E] transition-all"
                >
                    <span>Return To The Collection</span>
                    <HiOutlineArrowLongRight className="text-sm" />
                </Link>
            </section>
        </main>
    );
}
