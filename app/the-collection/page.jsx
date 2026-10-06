import React from "react";
import Link from "next/link";
import { getAllProducts } from "@/lib/api";
import ProductItem from "@/components/ProductItem";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export const metadata = {
    title: "The Collection · Boros Sylvante",
    description: "Apparel, footwear, bags and accessories, made in small editions and recorded in the Archive.",
};

const expressions = [
    {
        name: "APPAREL",
        description: "Considered silhouettes in exceptional natural fibres. Quiet construction. Precise proportion. Natural movement."
    },
    {
        name: "FOOTWEAR",
        description: "Form follows material. Natural leathers, fine textiles and careful construction, made to gain character with time."
    },
    {
        name: "BAGS",
        description: "Objects of use, made with the attention of objects of permanence. Natural materials. Quiet construction. Considered detail."
    },
    {
        name: "ACCESSORIES",
        description: "The details are rarely incidental. Small objects, finished with the same restraint as the pieces they accompany."
    }
];

export default async function TheCollectionPage() {
    let products = [];
    try {
        products = await getAllProducts();
    } catch (e) {
        // Fallback
    }

    return (
        <main className="bg-[#FAF8F5] text-blackPrimary min-h-screen">
            {/* HERO */}
            <section className="pt-28 pb-20 sm:pt-36 sm:pb-28 px-6 sm:px-10 max-w-5xl mx-auto text-center border-b border-[#E8E4DE]">
                <div className="h-10 w-[1px] bg-[#8C733E] mx-auto mb-8 opacity-70"></div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500] mb-4">
                    The Collection
                </p>
                <h1 className="text-4xl sm:text-6xl font-[200] tracking-wide text-[#1A1A1A] leading-[1.15] mb-8">
                    Few in number. <br />
                    <span className="italic font-[200] text-[#6B655C]">Resolved in every detail.</span>
                </h1>
                <div className="w-16 h-[1px] bg-[#8C733E] mx-auto mb-8"></div>
                <p className="text-base sm:text-lg font-[300] text-[#1A1A1A]/85 leading-relaxed max-w-2xl mx-auto">
                    Apparel, footwear, bags and accessories, made in small editions and recorded in the Archive.
                </p>
            </section>

            {/* FOUR EXPRESSIONS */}
            <section className="py-16 sm:py-20 px-6 sm:px-10 max-w-6xl mx-auto border-b border-[#E8E4DE]">
                <div className="mb-10 text-center sm:text-left">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500] mb-2">
                        Pillars
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-[200] text-[#1A1A1A]">
                        Four Expressions
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {expressions.map((exp, idx) => (
                        <div key={idx} className="p-6 bg-white border border-[#E8E4DE]">
                            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C733E] font-[500] block mb-2">
                                0{idx + 1}
                            </span>
                            <h3 className="text-lg font-[300] tracking-wider text-[#1A1A1A] mb-2">
                                {exp.name}
                            </h3>
                            <p className="text-xs font-[300] text-[#1A1A1A]/75 leading-relaxed">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ACTIVE CATALOG GRID */}
            <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-7xl mx-auto border-b border-[#E8E4DE]">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E8E4DE]">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500] mb-2">
                            Current Editions
                        </p>
                        <h2 className="text-3xl font-[200] text-[#1A1A1A]">
                            The Master Catalog ({products.length} Pieces)
                        </h2>
                    </div>
                    <p className="text-xs text-[#6B655C] font-[300]">
                        Each piece numbered and finished by hand.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductItem key={product.sys.id} product={product} />
                    ))}
                </div>
            </section>

            {/* THE EDITIONS & CLOSED EDITIONS ARCHIVE CALLOUT */}
            <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="p-8 sm:p-10 bg-white border border-[#E8E4DE] flex flex-col justify-between">
                        <div>
                            <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500] mb-3">
                                Circulation
                            </p>
                            <h3 className="text-2xl font-[200] text-[#1A1A1A] mb-4">
                                The Editions
                            </h3>
                            <p className="text-sm font-[300] text-[#1A1A1A]/80 leading-relaxed mb-4">
                                Certain pieces are made once. Others return in small numbers, when the material and the hand allow.
                            </p>
                            <p className="text-sm font-[300] text-[#1A1A1A]/80 leading-relaxed">
                                Every edition is numbered and recorded. When it closes, it enters the Archive.
                            </p>
                        </div>
                    </div>

                    <div className="p-8 sm:p-10 bg-[#FAF8F5] border border-[#E8E4DE] flex flex-col justify-between">
                        <div>
                            <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500] mb-3">
                                Permanence
                            </p>
                            <h3 className="text-2xl font-[200] text-[#1A1A1A] mb-4">
                                Closed Editions
                            </h3>
                            <p className="text-sm font-[300] text-[#1A1A1A]/80 leading-relaxed mb-6">
                                The edition is closed. Past works remain catalogued in the House record as historical testimony to material exploration.
                            </p>
                        </div>
                        <Link
                            href="/the-archive"
                            className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.25em] font-[500] hover:bg-[#8C733E] transition-all self-start"
                        >
                            <span>View The Archive</span>
                            <HiOutlineArrowLongRight className="text-sm" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
