import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export const metadata = {
    title: "The House · Boros Sylvante",
    description: "A study in material, hand and time. An independent Indian House rooted in South Asian craft.",
};

export default function TheHousePage() {
    return (
        <main className="bg-[#FAF8F5] text-blackPrimary min-h-screen">
            {/* HERO MANIFESTO */}
            <section className="pt-28 pb-20 sm:pt-36 sm:pb-28 px-6 sm:px-10 max-w-5xl mx-auto text-center border-b border-[#E8E4DE]">
                <div className="h-10 w-[1px] bg-[#8C733E] mx-auto mb-8 opacity-70"></div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500] mb-4">
                    The House
                </p>
                <h1 className="text-4xl sm:text-6xl font-[200] tracking-wide text-[#1A1A1A] leading-[1.15] mb-8">
                    A study in material, <br />
                    <span className="italic font-[200] text-[#6B655C]">hand and time.</span>
                </h1>
                <div className="w-16 h-[1px] bg-[#8C733E] mx-auto mb-8"></div>
                <p className="text-base sm:text-lg font-[300] text-[#1A1A1A]/85 leading-relaxed max-w-2xl mx-auto">
                    Boros Sylvante is an independent Indian House devoted to exceptional natural materials, resolved design, and the knowledge of the hand.
                </p>
            </section>

            {/* EDITORIAL STORY GRID */}
            <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-6xl mx-auto border-b border-[#E8E4DE]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 space-y-6">
                        <p className="text-sm sm:text-base font-[300] text-[#1A1A1A]/80 leading-relaxed">
                            The work begins with material. Its origin. Its texture. Its behaviour. Its memory. Form follows.
                        </p>
                        <p className="text-sm sm:text-base font-[300] text-[#1A1A1A]/80 leading-relaxed">
                            The House works across apparel, footwear, bags and accessories, in small numbers, so that the character of the material remains present in the finished piece.
                        </p>
                        <p className="text-sm sm:text-base font-[300] text-[#1A1A1A]/80 leading-relaxed">
                            Rooted in India. Informed by the wider traditions of South Asia. Our relationships extend across India, Nepal and Sri Lanka, bringing together distinct fibres, techniques and makers.
                        </p>
                        <p className="text-sm sm:text-base font-[400] text-[#1A1A1A] pt-2 italic">
                            We do not reproduce the past. We carry its knowledge forward.
                        </p>
                    </div>

                    <div className="lg:col-span-6 relative w-full h-[460px] sm:h-[520px] bg-white border border-[#E8E4DE] overflow-hidden">
                        <Image
                            src="/editorial/artisan-craft.jpg"
                            alt="The Artisans of Boros Sylvante"
                            fill
                            className="object-cover object-center"
                        />
                        <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#FAF8F5]/95 border border-[#E8E4DE] backdrop-blur-xs">
                            <p className="text-[10px] uppercase tracking-[0.25em] text-[#8C733E] font-[500] mb-0.5">
                                Rooted in India
                            </p>
                            <p className="text-xs font-[300] text-[#1A1A1A]/70">
                                Informed by the wider craft traditions of South Asia.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* A HOUSE IN THE MAKING */}
            <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-5xl mx-auto border-b border-[#E8E4DE]">
                <div className="max-w-2xl mb-12">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500] mb-3">
                        Evolution
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-[200] tracking-wide text-[#1A1A1A] leading-tight mb-4">
                        A House in the Making
                    </h2>
                    <p className="text-sm sm:text-base font-[300] text-[#1A1A1A]/80 leading-relaxed">
                        Boros Sylvante is being built patiently.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div className="p-6 bg-white border border-[#E8E4DE]">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C733E] font-[500] block mb-2">Stage 01</span>
                        <h3 className="text-lg font-[300] text-[#1A1A1A] mb-2">Through Material</h3>
                        <p className="text-xs font-[300] text-[#1A1A1A]/70 leading-relaxed">
                            Discovering fibres of exceptional provenance and memory.
                        </p>
                    </div>
                    <div className="p-6 bg-white border border-[#E8E4DE]">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C733E] font-[500] block mb-2">Stage 02</span>
                        <h3 className="text-lg font-[300] text-[#1A1A1A] mb-2">Through Craft</h3>
                        <p className="text-xs font-[300] text-[#1A1A1A]/70 leading-relaxed">
                            Knowledge of the human hand passed through generations.
                        </p>
                    </div>
                    <div className="p-6 bg-white border border-[#E8E4DE]">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C733E] font-[500] block mb-2">Stage 03</span>
                        <h3 className="text-lg font-[300] text-[#1A1A1A] mb-2">Through Pieces</h3>
                        <p className="text-xs font-[300] text-[#1A1A1A]/70 leading-relaxed">
                            Pieces become collections. Collections become an archive.
                        </p>
                    </div>
                    <div className="p-6 bg-white border border-[#E8E4DE]">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C733E] font-[500] block mb-2">Stage 04</span>
                        <h3 className="text-lg font-[300] text-[#1A1A1A] mb-2">The Archive</h3>
                        <p className="text-xs font-[300] text-[#1A1A1A]/70 leading-relaxed">
                            The archive becomes the enduring language of the House.
                        </p>
                    </div>
                </div>

                <div className="text-center pt-4">
                    <p className="text-sm uppercase tracking-[0.3em] font-[400] text-[#1A1A1A]">
                        Born in India. Open to the world.
                    </p>
                </div>
            </section>

            {/* OUR APPROACH */}
            <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-5xl mx-auto border-b border-[#E8E4DE]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                    <div className="md:col-span-5">
                        <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500] mb-3">
                            Philosophy
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-[200] tracking-wide text-[#1A1A1A] leading-tight">
                            Our Approach
                        </h2>
                    </div>
                    <div className="md:col-span-7 space-y-4">
                        <p className="text-base sm:text-lg font-[300] text-[#1A1A1A] leading-relaxed">
                            We are not interested in making more. We are interested in finding better.
                        </p>
                        <p className="text-sm sm:text-base font-[300] text-[#1A1A1A]/80 leading-relaxed">
                            Better materials. Exceptional hands. Familiar forms, refined. And time, allowed to do some of the work.
                        </p>
                        <p className="text-sm sm:text-base font-[300] text-[#1A1A1A]/80 leading-relaxed pt-2">
                            Small quantities are not a device. They are the natural consequence of how we choose to make.
                        </p>
                    </div>
                </div>
            </section>

            {/* CLOSING STANDARD & NAV */}
            <section className="py-20 px-6 sm:px-10 text-center">
                <div className="max-w-xl mx-auto space-y-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#8C733E] font-[500]">
                        The Standard
                    </p>
                    <p className="text-lg sm:text-xl font-[200] text-[#1A1A1A] tracking-wide">
                        Nothing more than necessary. <br />
                        <span className="italic text-[#6B655C]">Nothing less than exceptional.</span>
                    </p>
                    <div className="pt-4 flex items-center justify-center gap-6">
                        <Link
                            href="/the-materials"
                            className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.25em] font-[500] hover:bg-[#8C733E] transition-all"
                        >
                            <span>The Materials</span>
                            <HiOutlineArrowLongRight className="text-sm" />
                        </Link>
                        <Link
                            href="/the-collection"
                            className="inline-flex items-center gap-3 px-7 py-3.5 border border-[#1A1A1A]/30 text-[#1A1A1A] text-xs uppercase tracking-[0.25em] font-[500] hover:border-[#8C733E] hover:text-[#8C733E] transition-all"
                        >
                            <span>The Collection</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
