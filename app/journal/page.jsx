import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export const metadata = {
    title: "Journal · Boros Sylvante",
    description: "Notes on material, craft, place and people from the House of Boros Sylvante.",
};

const journalEntries = [
    {
        category: "MATERIAL",
        tag: "The character of natural fibres",
        title: "The Living Hand of Wild Himalayan Hemp",
        excerpt: "Why un-carded mountain hemp preserves a structural breath that synthetic or industrially softened fibres can never reproduce.",
        date: "Autumn 2026",
        image: "/editorial/artisan-craft.jpg"
    },
    {
        category: "CRAFT",
        tag: "The people and techniques behind the work",
        title: "Sualkuchi: The Quiet Loom Keepers of Assam",
        excerpt: "Generations of weavers along the banks of the Brahmaputra, translating ancient geometric memory into fluid Pat and Muga silk cloth.",
        date: "Summer 2026",
        image: "/products/himalayan-patra-polo.jpg"
    },
    {
        category: "PLACE",
        tag: "The landscapes from which traditions emerge",
        title: "High Altitudes of Sankhuwasabha",
        excerpt: "Harvesting nettle at eight thousand feet. The dialogue between steep terrain, patient community foraging, and durable textiles.",
        date: "Spring 2026",
        image: "/products/artisanal-hemp-denim-overshirt.jpg"
    },
    {
        category: "OBJECT",
        tag: "The making and evolution of individual pieces",
        title: "Anatomy of the Artisanal Hemp-Denim Overshirt",
        excerpt: "Forty-eight hours of individual tailoring in Kathmandu. Why we insist on single-needle construction and natural horn buttons.",
        date: "Winter 2025",
        image: "/products/larose-coord-set.jpg"
    },
    {
        category: "HOUSE",
        tag: "Notes from the continuing journey",
        title: "Of Rare Materials. By Hand: A House Manifesto",
        excerpt: "Rejecting seasonal obsolescence. Why true circularity begins with honoring the natural life cycle of cloth and the dignity of the maker.",
        date: "Inaugural Entry",
        image: "/products/la-rrani-exploratory-artifact.jpg"
    }
];

export default function JournalPage() {
    return (
        <main className="bg-[#FAF8F5] text-blackPrimary min-h-screen">
            {/* HERO */}
            <section className="pt-28 pb-20 sm:pt-36 sm:pb-28 px-6 sm:px-10 max-w-5xl mx-auto text-center border-b border-[#E8E4DE]">
                <div className="h-10 w-[1px] bg-[#8C733E] mx-auto mb-8 opacity-70"></div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500] mb-4">
                    The Journal
                </p>
                <h1 className="text-4xl sm:text-6xl font-[200] tracking-wide text-[#1A1A1A] leading-[1.15] mb-8">
                    Material. Craft. <br />
                    <span className="italic font-[200] text-[#6B655C]">Place. People.</span>
                </h1>
                <div className="w-16 h-[1px] bg-[#8C733E] mx-auto mb-8"></div>
                <p className="text-base sm:text-lg font-[300] text-[#1A1A1A]/85 leading-relaxed max-w-2xl mx-auto">
                    The Journal follows what shapes the House. Notes on material, craft, place and people from the House of Boros Sylvante.
                </p>
            </section>

            {/* EDITORIAL DIRECTION PILLARS */}
            <section className="py-12 px-6 sm:px-10 max-w-6xl mx-auto border-b border-[#E8E4DE]">
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs uppercase tracking-[0.2em] font-[500] text-[#6B655C]">
                    <span className="hover:text-[#1A1A1A] transition-colors">MATERIAL</span>
                    <span className="text-[#8C733E]">·</span>
                    <span className="hover:text-[#1A1A1A] transition-colors">CRAFT</span>
                    <span className="text-[#8C733E]">·</span>
                    <span className="hover:text-[#1A1A1A] transition-colors">PLACE</span>
                    <span className="text-[#8C733E]">·</span>
                    <span className="hover:text-[#1A1A1A] transition-colors">OBJECT</span>
                    <span className="text-[#8C733E]">·</span>
                    <span className="hover:text-[#1A1A1A] transition-colors">HOUSE</span>
                </div>
            </section>

            {/* ARTICLES GRID */}
            <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-6xl mx-auto border-b border-[#E8E4DE]">
                <div className="space-y-16">
                    {journalEntries.map((post, idx) => (
                        <article key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-6 sm:p-10 border border-[#E8E4DE]">
                            <div className="md:col-span-5 relative w-full h-[280px] sm:h-[320px] bg-[#FAF8F5] overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>

                            <div className="md:col-span-7 space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C733E] font-[500]">
                                        {post.category} · {post.tag}
                                    </span>
                                    <span className="text-[10px] text-[#6B655C] tracking-widest font-[300]">
                                        {post.date}
                                    </span>
                                </div>

                                <h2 className="text-2xl sm:text-3xl font-[200] tracking-wide text-[#1A1A1A] leading-snug">
                                    {post.title}
                                </h2>

                                <p className="text-sm font-[300] text-[#1A1A1A]/80 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <div className="pt-2">
                                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-[500] text-[#1A1A1A] hover:text-[#8C733E] transition-colors cursor-pointer">
                                        <span>Read Note</span>
                                        <HiOutlineArrowLongRight className="text-sm" />
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* EDITORIAL RESTRAINT NOTE */}
            <section className="py-16 px-6 sm:px-10 max-w-3xl mx-auto text-center">
                <p className="text-xs uppercase tracking-[0.25em] text-[#8C733E] font-[500] mb-2">
                    Editorial Restraint
                </p>
                <p className="text-xs font-[300] text-[#6B655C] leading-relaxed">
                    No trend reports. No aggressive product marketing. No constant selling.
                </p>
                <p className="text-xs tracking-[0.35em] uppercase text-[#6B655C] font-[400] pt-6">
                    For Those Who Notice.
                </p>
            </section>
        </main>
    );
}
