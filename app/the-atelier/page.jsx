import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export const metadata = {
    title: "The Atelier · Boros Sylvante",
    description: "Where the hand remains. Atelier work, numbered pieces and commissions by LA RRANI HOUSE.",
};

export default function TheAtelierPage() {
    return (
        <main className="bg-[#FAF8F5] text-blackPrimary min-h-screen">
            {/* HERO */}
            <section className="pt-28 pb-20 sm:pt-36 sm:pb-28 px-6 sm:px-10 max-w-5xl mx-auto text-center border-b border-[#E8E4DE]">
                <div className="h-10 w-[1px] bg-[#8C733E] mx-auto mb-8 opacity-70"></div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500] mb-4">
                    The Atelier
                </p>
                <h1 className="text-4xl sm:text-6xl font-[200] tracking-wide text-[#1A1A1A] leading-[1.15] mb-8">
                    Where the hand <br />
                    <span className="italic font-[200] text-[#6B655C]">remains.</span>
                </h1>
                <div className="w-16 h-[1px] bg-[#8C733E] mx-auto mb-8"></div>
                <p className="text-base sm:text-lg font-[300] text-[#1A1A1A]/85 leading-relaxed max-w-2xl mx-auto mb-4">
                    Before a piece is finished, it passes through many hands. Cutting. Joining. Shaping. Finishing.
                </p>
                <p className="text-xs uppercase tracking-[0.25em] text-[#6B655C] font-[400] max-w-xl mx-auto">
                    The difference is found where the eye does not immediately look.
                </p>
            </section>

            {/* ARTISANAL KNOWLEDGE */}
            <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-5xl mx-auto border-b border-[#E8E4DE]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-sm sm:text-base font-[300] text-[#1A1A1A]/80 leading-relaxed">
                            We work with makers whose knowledge has been refined through years of practice. Across India and the wider South Asian region, traditional knowledge continues to inform our approach to material, construction and finish.
                        </p>
                        <p className="text-sm sm:text-base font-[300] text-[#1A1A1A]/80 leading-relaxed">
                            We do not seek uniformity at every stage. The small variations of the hand are part of what gives a natural material its character.
                        </p>
                    </div>
                    <div className="p-8 bg-white border border-[#E8E4DE] text-center">
                        <p className="text-xs uppercase tracking-[0.3em] text-[#8C733E] font-[500] mb-3">
                            The Promise
                        </p>
                        <p className="text-xl sm:text-2xl font-[200] text-[#1A1A1A] leading-relaxed italic">
                            "Some pieces are made once. <br />
                            Some are made for one."
                        </p>
                    </div>
                </div>
            </section>

            {/* ATELIER EXPRESSIONS: LA RRANI HOUSE & LAROSE */}
            <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-6xl mx-auto border-b border-[#E8E4DE]">
                <div className="space-y-24">
                    {/* 1. LA RRANI HOUSE */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-6 relative w-full h-[520px] sm:h-[600px] bg-white border border-[#E8E4DE] overflow-hidden">
                            <Image
                                src="/products/la-rrani-exploratory-artifact.jpg"
                                alt="LA RRANI HOUSE Exploratory Artifact"
                                fill
                                className="object-cover object-center"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="px-3.5 py-1 bg-[#FAF8F5]/90 text-[#1A1A1A] text-[10px] uppercase tracking-[0.25em] font-[500] border border-[#1A1A1A]/10 backdrop-blur-xs">
                                    LA RRANI HOUSE
                                </span>
                            </div>
                        </div>

                        <div className="lg:col-span-6 space-y-6">
                            <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500]">
                                Atelier Pillar
                            </p>
                            <h2 className="text-3xl sm:text-5xl font-[200] tracking-wide text-[#1A1A1A] leading-tight">
                                LA RRANI HOUSE
                            </h2>
                            <p className="text-base font-[300] text-[#6B655C] italic">
                                The House, made more intimately.
                            </p>
                            <div className="w-12 h-[1px] bg-[#8C733E] my-4"></div>
                            <p className="text-sm sm:text-base font-[300] text-[#1A1A1A]/80 leading-relaxed">
                                LA RRANI HOUSE is the atelier expression of Boros Sylvante.
                            </p>
                            <p className="text-sm sm:text-base font-[300] text-[#1A1A1A]/80 leading-relaxed">
                                Its work moves beyond the collection into numbered pieces, private commissions and made-to-measure considerations. Here, material and personal preference meet more closely.
                            </p>
                            <p className="text-sm uppercase tracking-[0.2em] font-[400] text-[#1A1A1A] pt-2">
                                Some pieces are made once. Some are made for one.
                            </p>
                            <div className="pt-4">
                                <Link
                                    href="/private-appointments?inquiry=LA+RRANI+HOUSE"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.25em] font-[500] hover:bg-[#8C733E] transition-all"
                                >
                                    <span>By Appointment</span>
                                    <HiOutlineArrowLongRight className="text-sm" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* 2. LAROSE */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
                            <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500]">
                                Atelier Couture
                            </p>
                            <h2 className="text-3xl sm:text-5xl font-[200] tracking-wide text-[#1A1A1A] leading-tight">
                                LAROSE
                            </h2>
                            <p className="text-base font-[300] text-[#6B655C] italic">
                                By LA RRANI HOUSE · Boros Sylvante
                            </p>
                            <div className="w-12 h-[1px] bg-[#8C733E] my-4"></div>
                            <p className="text-sm sm:text-base font-[300] text-[#1A1A1A]/80 leading-relaxed">
                                Numbered pieces and selected atelier creations. Sculptural evening silhouettes, tailored bamboo silk couture, and considered organic textiles designed with architectural fluidity.
                            </p>
                            <p className="text-sm sm:text-base font-[300] text-[#1A1A1A]/80 leading-relaxed">
                                Each creation is cut and finished individually by master artisans, strictly outside the industrial calendar.
                            </p>
                            <div className="pt-4">
                                <Link
                                    href="/private-appointments?inquiry=LAROSE+Atelier"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.25em] font-[500] hover:bg-[#8C733E] transition-all"
                                >
                                    <span>By Appointment</span>
                                    <HiOutlineArrowLongRight className="text-sm" />
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-6 relative w-full h-[520px] sm:h-[600px] bg-white border border-[#E8E4DE] overflow-hidden order-1 lg:order-2">
                            <Image
                                src="/products/larose-gown.jpg"
                                alt="LAROSE Gown by LA RRANI HOUSE"
                                fill
                                className="object-cover object-center"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="px-3.5 py-1 bg-[#FAF8F5]/90 text-[#1A1A1A] text-[10px] uppercase tracking-[0.25em] font-[500] border border-[#1A1A1A]/10 backdrop-blur-xs">
                                    LAROSE · ATELIER
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CLOSING DISCREET LINE */}
            <section className="py-20 px-6 sm:px-10 text-center">
                <p className="text-xs tracking-[0.35em] uppercase text-[#6B655C] font-[400]">
                    For Those Who Notice.
                </p>
            </section>
        </main>
    );
}
