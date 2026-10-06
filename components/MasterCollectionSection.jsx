"use client";

import React, { useState } from "react";
import Link from "next/link";
import ProductItem from "./ProductItem";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const MasterCollectionSection = ({ products = [] }) => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filtered = products.filter(p => {
        if (selectedCategory === "all") return true;
        if (selectedCategory === "apparel") return p.fields.categoryType === "apparel";
        if (selectedCategory === "bags") return p.fields.categoryType === "bags";
        if (selectedCategory === "accessories") return p.fields.categoryType === "accessories";
        return true;
    });

    return (
        <section className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto border-b border-[#E8E4DE]">
            {/* SECTION HEADER */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-[#E8E4DE]">
                <div className="max-w-2xl">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500] mb-3">
                        The Collection
                    </p>
                    <h2 className="text-3xl sm:text-5xl font-[200] tracking-wide text-[#1A1A1A] leading-[1.2] mb-4">
                        Few in number. <br />
                        <span className="italic font-[200] text-[#6B655C]">Resolved in every detail.</span>
                    </h2>
                    <p className="text-sm font-[300] text-[#1A1A1A]/80 leading-relaxed">
                        Apparel, footwear, bags and accessories, each released as a single expression of the House. We do not make for abundance.
                    </p>
                </div>

                {/* CATEGORY FILTER TABS */}
                <div className="flex items-center gap-2 flex-wrap text-xs uppercase tracking-[0.2em] font-[500]">
                    <button
                        onClick={() => setSelectedCategory("all")}
                        className={`px-4 py-2 border transition-all cursor-pointer ${
                            selectedCategory === "all"
                                ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                                : "bg-white text-[#6B655C] border-[#E8E4DE] hover:border-[#1A1A1A]"
                        }`}
                    >
                        All Pieces ({products.length})
                    </button>
                    <button
                        onClick={() => setSelectedCategory("apparel")}
                        className={`px-4 py-2 border transition-all cursor-pointer ${
                            selectedCategory === "apparel"
                                ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                                : "bg-white text-[#6B655C] border-[#E8E4DE] hover:border-[#1A1A1A]"
                        }`}
                    >
                        Apparel
                    </button>
                    <button
                        onClick={() => setSelectedCategory("bags")}
                        className={`px-4 py-2 border transition-all cursor-pointer ${
                            selectedCategory === "bags"
                                ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                                : "bg-white text-[#6B655C] border-[#E8E4DE] hover:border-[#1A1A1A]"
                        }`}
                    >
                        Bags
                    </button>
                    <button
                        onClick={() => setSelectedCategory("accessories")}
                        className={`px-4 py-2 border transition-all cursor-pointer ${
                            selectedCategory === "accessories"
                                ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                                : "bg-white text-[#6B655C] border-[#E8E4DE] hover:border-[#1A1A1A]"
                        }`}
                    >
                        Accessories
                    </button>
                </div>
            </div>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {filtered.map((product) => (
                    <ProductItem key={product.sys.id} product={product} />
                ))}
            </div>

            {/* BOTTOM SUMMARY & LINK TO ARCHIVE */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-[#E8E4DE]">
                <p className="text-xs text-[#6B655C] font-[300]">
                    Every edition is numbered and recorded. When it closes, it enters the Archive.
                </p>
                <Link
                    href="/the-collection"
                    className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-[500] text-[#1A1A1A] hover:text-[#8C733E] transition-colors"
                >
                    <span>View The Collection Matrix</span>
                    <HiOutlineArrowLongRight className="text-base" />
                </Link>
            </div>
        </section>
    );
};

export default MasterCollectionSection;
