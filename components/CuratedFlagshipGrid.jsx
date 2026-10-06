"use client";

import React, { useState } from "react";
import ProductItem from "./ProductItem";
import Link from "next/link";
import { HiOutlineArrowLongRight, HiSparkles } from "react-icons/hi2";

const isApparelProduct = (p) => {
    const cat = p.fields.category || "";
    const slug = p.fields.slug || "";
    return (
        cat.includes("Apparel") ||
        cat.includes("Knitwear") ||
        cat.includes("Outerwear") ||
        cat.includes("Couture") ||
        slug === "la-rrani-exploratory-artifact" ||
        slug === "himalayan-patra-polo" ||
        slug === "artisanal-hemp-denim-overshirt" ||
        slug === "larose-white-halter-midi" ||
        slug === "larose-coord-set"
    );
};

const CuratedFlagshipGrid = ({ products = [], initialFilter = "all", limit = null }) => {
    const [filter, setFilter] = useState(initialFilter);

    const filteredProducts = products.filter(p => {
        if (filter === "apparel" || filter === "fashion") return isApparelProduct(p);
        if (filter === "accessories") return !isApparelProduct(p) && p.fields.categoryType === "fashion";
        return true;
    });

    const displayedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

    const apparelCount = products.filter(isApparelProduct).length;
    const accessoriesCount = products.filter(p => !isApparelProduct(p) && p.fields.categoryType === "fashion").length;

    return (
        <section className="py-20 px-6 sm:px-10 max-w-7xl mx-auto">
            {/* SECTION HEADER */}
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 border-b border-[#E8E4DE] pb-8">
                <div>
                    <div className="inline-flex items-center gap-2 text-[#8C733E] mb-2">
                        <HiSparkles className="w-4 h-4" />
                        <span className="text-[10px] uppercase tracking-[0.35em] font-medium">
                            The Master Catalog
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-light tracking-wide text-[#1A1A1A]">
                        Curated Flagship Creations
                    </h2>
                </div>

                {/* FILTER PILLS */}
                <div className="flex items-center gap-2 flex-wrap text-xs uppercase tracking-[0.2em] font-[500]">
                    <button
                        onClick={() => setFilter("all")}
                        className={`px-5 py-2.5 border transition-all cursor-pointer ${
                            filter === "all"
                                ? "bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-sm"
                                : "bg-white text-[#6B655C] border-[#E8E4DE] hover:border-[#1A1A1A] hover:text-[#1A1A1A]"
                        }`}
                    >
                        All Creations ({products.length})
                    </button>
                    <button
                        onClick={() => setFilter("apparel")}
                        className={`px-5 py-2.5 border transition-all cursor-pointer ${
                            filter === "apparel" || filter === "fashion"
                                ? "bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-sm"
                                : "bg-white text-[#6B655C] border-[#E8E4DE] hover:border-[#1A1A1A] hover:text-[#1A1A1A]"
                        }`}
                    >
                        Apparel & Haute Maille ({apparelCount})
                    </button>
                    <button
                        onClick={() => setFilter("accessories")}
                        className={`px-5 py-2.5 border transition-all cursor-pointer ${
                            filter === "accessories"
                                ? "bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-sm"
                                : "bg-white text-[#6B655C] border-[#E8E4DE] hover:border-[#1A1A1A] hover:text-[#1A1A1A]"
                        }`}
                    >
                        Artisanal Objects & Accessories ({accessoriesCount})
                    </button>
                </div>
            </div>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedProducts.map((product) => (
                    <ProductItem key={product.sys.id} product={product} />
                ))}
            </div>

            {/* EXPLORE ALL CTA (IF LIMITED) */}
            {limit && products.length > limit && (
                <div className="mt-16 text-center">
                    <Link
                        href="/shop"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#8C733E] transition-all duration-300 shadow-md"
                    >
                        <span>View All {products.length} House Creations</span>
                        <HiOutlineArrowLongRight className="text-base" />
                    </Link>
                </div>
            )}

            {!limit && (
                <div className="mt-16 pt-8 border-t border-[#E8E4DE] text-center">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#9C9488]">
                        Displaying all {displayedProducts.length} authenticated creations of the Maison
                    </p>
                </div>
            )}
        </section>
    );
};

export default CuratedFlagshipGrid;
