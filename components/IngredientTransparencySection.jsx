"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineCheck, HiOutlineXMark, HiOutlineShieldCheck } from "react-icons/hi2";

const comparisonData = [
    {
        feature: "Primary Protein Source",
        us: "100% Raw Himalayan Cold-Milled Hemp Seeds",
        them: "Synthetic Soy Isolates / Denatured Whey Byproducts"
    },
    {
        feature: "Amino Acid Profile",
        us: "Complete 9 Essential Amino Acids + Omega 3, 6, 9",
        them: "Incomplete or spiked with free-form amino acids"
    },
    {
        feature: "Sweeteners & Additives",
        us: "Zero Added Sugar, Zero Sucralose, Real Whole Fruit",
        them: "Artificial Sucralose, Acesulfame Potassium, High Maltodextrin"
    },
    {
        feature: "Gut & Digestion",
        us: "Zero Bloating, High Prebiotic Plant Fiber",
        them: "Frequent gastric distress, artificial emulsifiers & gums"
    },
    {
        feature: "Heavy Metal & Purity Testing",
        us: "Third-Party Certified Batch COA (Eurofins Accredited)",
        them: "Undisclosed proprietary blends, missing batch reports"
    }
];

const IngredientTransparencySection = () => {
    return (
        <section className="py-24 px-6 sm:px-10 max-w-7xl mx-auto border-b border-blackPrimary/10">
            
            {/* THE WHOLE TRUTH HEADLINE */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brandGreen/10 border border-brandGreen/20 text-brandGreen text-xs uppercase tracking-[0.25em] font-[500] mb-4">
                    <HiOutlineShieldCheck className="text-sm" />
                    <span>The Whole Truth & Purity Manifesto</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-[300] tracking-wide text-blackPrimary mb-4">
                    Nothing to Hide. <br />
                    <span className="italic font-[200]">Every Ingredient Declared.</span>
                </h2>
                <div className="w-12 h-[1px] bg-brandGold mx-auto my-6"></div>
                <p className="text-base sm:text-lg font-[300] text-blackPrimary/70 leading-relaxed">
                    Most wellness brands hide behind "proprietary blends" and chemical isolates. We believe true luxury is radical transparency: whole plants, ancient minerals, and zero compromise.
                </p>
            </div>

            {/* OVERHEAD VISUAL DISSECTION CARD */}
            <div className="relative w-full h-[320px] sm:h-[480px] mb-16 overflow-hidden border border-blackPrimary/10 bg-white">
                <Image
                    src="/editorial/clean-nutrition.jpg"
                    alt="The Whole Truth Clean Label Ingredient Breakdown"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-8 left-8 right-8 text-white flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-brandGold font-[500] mb-1">
                            Clean-Label Formulation
                        </p>
                        <h3 className="text-2xl sm:text-3xl font-[300] tracking-wide">
                            Hemp Seed, Mushrooms & Whole Strawberries
                        </h3>
                    </div>
                    <div className="flex gap-4 sm:gap-8 text-xs font-[300] text-white/90">
                        <div>
                            <p className="text-brandGold font-[500] text-base">0%</p>
                            <p>Refined Sugars</p>
                        </div>
                        <div>
                            <p className="text-brandGold font-[500] text-base">100%</p>
                            <p>Plant-Based</p>
                        </div>
                        <div>
                            <p className="text-brandGold font-[500] text-base">80+</p>
                            <p>Trace Minerals</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* US VS THEM COMPARISON TABLE (The Whole Truth Style) */}
            <div className="bg-white border border-blackPrimary/10 overflow-hidden">
                <div className="p-6 sm:p-8 bg-blackPrimary text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <h4 className="text-xl sm:text-2xl font-[300] tracking-wide">The Standards of the House</h4>
                        <p className="text-xs text-white/70 font-[300]">How Boros Sylvante compares to conventional commercial supplements</p>
                    </div>
                    <span className="text-xs uppercase tracking-[0.2em] font-[500] text-brandGold border border-brandGold/30 px-3 py-1">
                        Radical Honesty
                    </span>
                </div>

                <div className="divide-y divide-blackPrimary/10 text-xs sm:text-sm">
                    {comparisonData.map((row, idx) => (
                        <div key={idx} className="grid grid-cols-1 md:grid-cols-3 p-6 sm:p-8 gap-4 items-center">
                            <div className="font-[500] text-blackPrimary text-sm sm:text-base">
                                {row.feature}
                            </div>
                            <div className="flex items-start gap-3 text-brandGreen font-[400] bg-brandGreen/5 p-4 border border-brandGreen/20">
                                <HiOutlineCheck className="text-lg flex-shrink-0 text-brandGreen mt-0.5" />
                                <div>
                                    <span className="font-[500] text-xs uppercase tracking-wider block mb-1">Boros Sylvante:</span>
                                    <span>{row.us}</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 text-blackPrimary/60 font-[300] bg-blackPrimary/5 p-4 border border-blackPrimary/10">
                                <HiOutlineXMark className="text-lg flex-shrink-0 text-brandCrimson mt-0.5" />
                                <div>
                                    <span className="font-[500] text-xs uppercase tracking-wider block mb-1">Industry Standard:</span>
                                    <span>{row.them}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default IngredientTransparencySection;
