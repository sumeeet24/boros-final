import React from "react";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export const metadata = {
    title: "The Archive · Boros Sylvante",
    description: "A record of what the House has made: closed editions, materials and pieces that have found their place.",
};

const archivedPieces = [
    {
        pieceNumber: "ARCHIVE 01",
        title: "The Monastic Hemp Tunic",
        material: "100% Wild Himalayan Hand-Spun Hemp",
        origin: "Solukhumbu, Nepal",
        edition: "Edition of 12 · Closed",
        year: "Season 01"
    },
    {
        pieceNumber: "ARCHIVE 02",
        title: "The Muga Gold Field Robe",
        material: "Un-dyed Golden Muga Silk & Organic Cotton",
        origin: "Brahmaputra Valley, Assam",
        edition: "Edition of 08 · Closed",
        year: "Season 01"
    },
    {
        pieceNumber: "ARCHIVE 03",
        title: "The High-Altitude Nettle Overshirt",
        material: "Hand-Stripped Himalayan Giant Nettle",
        origin: "Sankhuwasabha, Nepal",
        edition: "Edition of 15 · Closed",
        year: "Season 02"
    }
];

export default function TheArchivePage() {
    return (
        <main className="bg-[#FAF8F5] text-blackPrimary min-h-screen">
            {/* HERO */}
            <section className="pt-28 pb-20 sm:pt-36 sm:pb-28 px-6 sm:px-10 max-w-5xl mx-auto text-center border-b border-[#E8E4DE]">
                <div className="h-10 w-[1px] bg-[#8C733E] mx-auto mb-8 opacity-70"></div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500] mb-4">
                    The Archive
                </p>
                <h1 className="text-4xl sm:text-6xl font-[200] tracking-wide text-[#1A1A1A] leading-[1.15] mb-8">
                    What has already <br />
                    <span className="italic font-[200] text-[#6B655C]">been made.</span>
                </h1>
                <div className="w-16 h-[1px] bg-[#8C733E] mx-auto mb-8"></div>
                <p className="text-base sm:text-lg font-[300] text-[#1A1A1A]/85 leading-relaxed max-w-2xl mx-auto mb-4">
                    Some pieces are no longer available. They remain here nonetheless.
                </p>
                <p className="text-xs uppercase tracking-[0.25em] text-[#8C733E] font-[400] max-w-xl mx-auto">
                    Not as inventory. As a record of the House.
                </p>
            </section>

            {/* STATEMENT */}
            <section className="py-16 px-6 sm:px-10 max-w-4xl mx-auto text-center border-b border-[#E8E4DE]">
                <p className="text-sm sm:text-base font-[300] text-[#1A1A1A]/80 leading-relaxed">
                    The Archive holds closed editions, materials, collaborations and pieces that have found their place. It shows where we have been. And, over time, how the House has grown.
                </p>
            </section>

            {/* RECORDED PIECES */}
            <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-6xl mx-auto border-b border-[#E8E4DE]">
                <div className="mb-12">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500] mb-2">
                        Permanent Record
                    </p>
                    <h2 className="text-3xl font-[200] text-[#1A1A1A]">
                        Closed Editions
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {archivedPieces.map((item, idx) => (
                        <div key={idx} className="p-8 bg-white border border-[#E8E4DE] flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C733E] font-[500]">
                                        {item.pieceNumber}
                                    </span>
                                    <span className="text-[10px] uppercase tracking-[0.15em] px-2 py-0.5 bg-[#FAF8F5] border border-[#E8E4DE] text-[#6B655C]">
                                        {item.year}
                                    </span>
                                </div>
                                <h3 className="text-xl font-[300] text-[#1A1A1A] mb-4">
                                    {item.title}
                                </h3>
                                <div className="space-y-2 text-xs font-[300] text-[#1A1A1A]/70 mb-6 font-mono">
                                    <p><span className="text-[#8C733E] font-sans uppercase">Material:</span> {item.material}</p>
                                    <p><span className="text-[#8C733E] font-sans uppercase">Origin:</span> {item.origin}</p>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-[#E8E4DE]">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B655C] font-[500]">
                                    {item.edition}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* RETURN TO COLLECTION */}
            <section className="py-20 px-6 sm:px-10 text-center">
                <Link
                    href="/the-collection"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.25em] font-[500] hover:bg-[#8C733E] transition-all"
                >
                    <span>View Current Collection</span>
                    <HiOutlineArrowLongRight className="text-sm" />
                </Link>
            </section>
        </main>
    );
}
