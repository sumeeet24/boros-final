"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineShieldCheck, HiOutlineShoppingBag, HiOutlineCheck, HiOutlineSparkles } from "react-icons/hi2";
import { useProductStore } from "@/app/_zustand/store";

const WellnessProductTemplate = ({ product, recommendedGrid }) => {
    const { addToCart } = useProductStore((state) => state);
    const packages = product.fields.packages || {};
    const packageSizes = Object.keys(packages);
    const [selectedPackage, setSelectedPackage] = useState(packageSizes[0] || "");
    const [addedToast, setAddedToast] = useState(false);

    const price = packages[selectedPackage] || Object.values(packages)[0] || 0;
    const gallery = product.fields.gallery || [product.fields.mainImage.fields.file.url];
    const [activeImage, setActiveImage] = useState(gallery[0]);
    const transparency = product.fields.transparency || {};

    const handleAddToCart = () => {
        addToCart({
            id: `${product.sys.id}-${selectedPackage}`,
            name: product.fields.title,
            price: Number(price),
            image: product.fields.mainImage.fields.file.url,
            brand: product.fields.brand || "HEMP ESSENCE",
            category: "Regenerative Wellness",
            quantity: 1,
            size: selectedPackage,
            packages: packages
        });

        setAddedToast(true);
        setTimeout(() => setAddedToast(false), 3000);
    };

    return (
        <div className="bg-[#FAF8F5] text-blackPrimary">
            
            {/* BREADCRUMB STRIP */}
            <div className="max-w-7xl mx-auto px-6 sm:px-10 py-6 border-b border-blackPrimary/10 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-blackPrimary/60">
                <Link href="/" className="hover:text-blackPrimary">Home</Link>
                <span>/</span>
                <Link href="/shop" className="hover:text-blackPrimary">Wellness</Link>
                <span>/</span>
                <span className="text-blackPrimary font-[500]">{product.fields.title}</span>
            </div>

            {/* MAIN PRODUCT ARCHITECTURE (The Whole Truth & Cosmix Style) */}
            <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                
                {/* LEFT: VISUAL STAGE & CLEAN METRICS */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                    <div className="relative w-full h-[480px] sm:h-[600px] bg-white border border-blackPrimary/10 overflow-hidden">
                        <Image
                            src={activeImage}
                            alt={product.fields.title}
                            fill
                            className="object-cover object-center transition-all duration-500"
                            priority
                        />
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-brandGreen text-white text-[10px] uppercase tracking-[0.25em] font-[500]">
                                100% Clean Label
                            </span>
                        </div>
                    </div>

                    {/* Thumbnail Selector */}
                    {gallery.length > 1 && (
                        <div className="flex gap-4">
                            {gallery.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImage(img)}
                                    className={`relative w-24 h-24 border transition-all overflow-hidden ${
                                        activeImage === img
                                            ? "border-blackPrimary shadow-md scale-102"
                                            : "border-blackPrimary/15 opacity-60 hover:opacity-100"
                                    }`}
                                >
                                    <Image src={img} alt={`View ${idx + 1}`} fill className="object-cover" />
                                </button>
                            ))}
                        </div>
                    )}

                    {/* THE WHOLE TRUTH CLEAN LABEL METRICS CARDS */}
                    {transparency.cleanMetrics && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-6 border border-blackPrimary/10">
                            {transparency.cleanMetrics.map((metric, idx) => (
                                <div key={idx} className="flex flex-col text-center p-2">
                                    <span className="text-xs uppercase tracking-wider text-blackPrimary/60 mb-1">
                                        {metric.label}
                                    </span>
                                    <span className="text-sm sm:text-base font-[500] text-brandGreen">
                                        {metric.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* RIGHT: PURCHASING, RITUAL & INGREDIENT BREAKDOWN */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                        <div className="border-b border-blackPrimary/10 pb-6 mb-6">
                            <p className="text-xs uppercase tracking-[0.35em] text-brandGold font-[500] mb-2">
                                {product.fields.brand} — {product.fields.category || "Himalayan Science"}
                            </p>
                            <h1 className="text-3xl sm:text-4xl font-[300] tracking-wide mb-3">
                                {product.fields.title}
                            </h1>
                            <p className="text-sm italic font-[300] text-brandOlive">
                                "{product.fields.tagline || 'Rooted in nature, proven by purity.'}"
                            </p>
                        </div>

                        {/* PRICE */}
                        <div className="mb-8">
                            <span className="text-3xl font-[400] tracking-wide text-blackPrimary">
                                ₹{Number(price).toLocaleString('en-IN')}
                            </span>
                            <span className="text-xs text-brandGreen tracking-wider uppercase block mt-1 font-[500]">
                                In Stock • Direct from Himalayan Source
                            </span>
                        </div>

                        {/* PACKAGE SELECTOR */}
                        {packageSizes.length > 0 && (
                            <div className="mb-8">
                                <p className="text-xs uppercase tracking-[0.2em] font-[500] text-blackPrimary/70 mb-3">
                                    Select Packaging
                                </p>
                                <div className="flex gap-3 flex-wrap">
                                    {packageSizes.map((pkg) => (
                                        <button
                                            key={pkg}
                                            onClick={() => setSelectedPackage(pkg)}
                                            className={`px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-[500] border transition-all ${
                                                selectedPackage === pkg
                                                    ? "bg-blackPrimary text-white border-blackPrimary"
                                                    : "bg-white text-blackPrimary border-blackPrimary/20 hover:border-blackPrimary"
                                            }`}
                                        >
                                            {pkg}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* ADD TO BAG ACTION */}
                        <button
                            onClick={handleAddToCart}
                            className="w-full py-5 bg-blackPrimary text-white text-xs uppercase tracking-[0.25em] font-[500] hover:bg-brandGold hover:text-blackPrimary transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer mb-4"
                        >
                            <HiOutlineShoppingBag className="text-lg" />
                            <span>Add To Bag — ₹{Number(price).toLocaleString('en-IN')}</span>
                        </button>

                        {/* FEEDBACK TOAST */}
                        {addedToast && (
                            <div className="p-3.5 bg-emerald-50 border border-emerald-300/80 text-emerald-800 text-xs font-[500] uppercase tracking-wider mb-6 flex items-center justify-between gap-3 shadow-sm">
                                <div className="flex items-center gap-2">
                                    <HiOutlineCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                                    <span>Botanical formulation added to your bag</span>
                                </div>
                                <Link href="/cart" className="text-[11px] underline underline-offset-2 hover:text-[#1A1A1A] font-semibold">
                                    View Bag &rarr;
                                </Link>
                            </div>
                        )}

                        <div className="flex items-center justify-center gap-2 text-xs text-blackPrimary/60 tracking-wider">
                            <HiOutlineShieldCheck className="text-brandGreen text-base" />
                            <span>Batch-tested 100% heavy metal & microbial safe</span>
                        </div>
                    </div>

                    {/* COSMIX-STYLE "THE RITUAL" GUIDE */}
                    {transparency.ritual && (
                        <div className="mt-8 p-6 bg-white border border-blackPrimary/10">
                            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-[500] text-brandGold mb-2">
                                <HiOutlineSparkles />
                                <span>The Daily Ritual</span>
                            </div>
                            <p className="text-xs sm:text-sm font-[300] leading-relaxed text-blackPrimary/80">
                                {transparency.ritual}
                            </p>
                        </div>
                    )}

                    {/* THE WHOLE TRUTH INGREDIENT ACCORDION */}
                    {transparency.ingredients && (
                        <div className="mt-6 border-t border-blackPrimary/10 pt-4">
                            <p className="text-xs uppercase tracking-[0.2em] font-[500] text-blackPrimary mb-3">
                                Declared Ingredients (Nothing Else):
                            </p>
                            <ul className="space-y-2">
                                {transparency.ingredients.map((ing, idx) => (
                                    <li key={idx} className="p-3 bg-white border border-blackPrimary/5 text-xs font-[300]">
                                        <span className="font-[500] text-blackPrimary block mb-0.5">{ing.name}</span>
                                        <span className="text-blackPrimary/60">{ing.note}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                </div>

            </div>

            {/* FULL STORY NARRATIVE */}
            <div className="border-t border-blackPrimary/10 bg-white py-20 px-6 sm:px-10">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-xs uppercase tracking-[0.35em] text-brandGold font-[500] mb-3">
                        The Science & Earth
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-[300] tracking-wide mb-6">
                        Elemental Harmony. Zero Compromise.
                    </h2>
                    <p className="text-base sm:text-lg font-[300] leading-relaxed text-blackPrimary/80">
                        {product.fields.longDescription}
                    </p>
                </div>
            </div>

            {/* CURATED RECOMMENDATIONS */}
            {recommendedGrid && (
                <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 border-t border-blackPrimary/10">
                    <p className="text-xs uppercase tracking-[0.3em] text-brandGold font-[500] text-center mb-2">
                        Holistic Protocol
                    </p>
                    <h3 className="text-3xl font-[300] tracking-wide text-center mb-12">
                        Complete Your Ritual
                    </h3>
                    {recommendedGrid}
                </div>
            )}

        </div>
    );
};

export default WellnessProductTemplate;
