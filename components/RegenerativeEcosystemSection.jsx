"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineSparkles, HiOutlineGlobeAlt, HiOutlineHeart, HiOutlineCheckBadge } from "react-icons/hi2";

const steps = [
    {
        id: "soil",
        number: "01",
        title: "Soil & High-Altitude Cultivators",
        subtitle: "From Pristine Earth",
        icon: HiOutlineGlobeAlt,
        description: "We partner directly with organic hemp farmers and high-altitude Himalayan foragers. Soil health and biodiversity are nurtured without chemical pesticides, honoring the earth's seasonal rhythm.",
        metric: "100% Organic & Wild-Harvested"
    },
    {
        id: "craft",
        number: "02",
        title: "Artisans, Weavers & Rural Producers",
        subtitle: "Preserved Heritage Precision",
        icon: HiOutlineHeart,
        description: "In heritage workshops across Nepal and India, skilled weavers hand-loom wild hemp fibers and master tailors assemble each piece. Decades of ancestral technique are preserved while ensuring sustainable living wages.",
        metric: "Fair-Trade Shared Prosperity"
    },
    {
        id: "formulation",
        number: "03",
        title: "Clean Bio-Formulation & Tailoring",
        subtitle: "Zero Chemical Compromise",
        icon: HiOutlineSparkles,
        description: "Our shilajit is purified using traditional Ayurvedic Shodhana spring water techniques; our CBD is extracted without synthetic solvents; our protein is raw and cold-milled. Complete lab transparency from batch to jar.",
        metric: "0% Synthetics, 80+ Trace Minerals"
    },
    {
        id: "consumer",
        number: "04",
        title: "The Conscious Consumer",
        subtitle: "Enduring Value & Rituals",
        icon: HiOutlineCheckBadge,
        description: "True luxury is not defined by excess, but by intention. When you bring Boros Sylvante into your life, you are not merely purchasing a product: you are investing in a living, regenerative legacy.",
        metric: "Heirloom Quality & Provenance"
    }
];

const RegenerativeEcosystemSection = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="py-24 px-6 sm:px-10 max-w-7xl mx-auto border-b border-blackPrimary/10">
            
            {/* MANIFESTO TITLE */}
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16">
                <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-brandGold font-[500] mb-2">
                        Core Philosophy
                    </p>
                    <h2 className="text-3xl sm:text-5xl font-[300] tracking-wide text-blackPrimary">
                        Value Creation Through <br />
                        <span className="italic font-[200]">Value Sharing.</span>
                    </h2>
                </div>
                <p className="max-w-md text-sm sm:text-base font-[300] text-blackPrimary/70 leading-relaxed">
                    True progress is measured not by what an enterprise extracts, but by the ecosystems that prosper because it exists. From soil to product, craft to consumer.
                </p>
            </div>

            {/* INTERACTIVE 4-PILLAR ECOSYSTEM GRID */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {steps.map((step, idx) => {
                    const Icon = step.icon;
                    const isActive = activeStep === idx;
                    return (
                        <motion.div
                            key={step.id}
                            onClick={() => setActiveStep(idx)}
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.3 }}
                            className={`p-8 border cursor-pointer transition-all duration-300 flex flex-col justify-between h-[360px] ${
                                isActive
                                    ? "bg-blackPrimary text-white border-blackPrimary shadow-xl"
                                    : "bg-white text-blackPrimary border-blackPrimary/10 hover:border-blackPrimary/30"
                            }`}
                        >
                            <div>
                                <div className="flex items-center justify-between mb-8">
                                    <span className={`text-sm font-[500] tracking-[0.2em] ${isActive ? "text-brandGold" : "text-blackPrimary/40"}`}>
                                        {step.number}
                                    </span>
                                    <Icon className={`text-2xl ${isActive ? "text-brandGold" : "text-blackPrimary/60"}`} />
                                </div>
                                <p className={`text-xs uppercase tracking-[0.2em] font-[500] mb-2 ${isActive ? "text-brandGold" : "text-brandOlive"}`}>
                                    {step.subtitle}
                                </p>
                                <h3 className="text-xl font-[400] tracking-wide mb-4">
                                    {step.title}
                                </h3>
                                <p className={`text-xs font-[300] leading-relaxed line-clamp-4 ${isActive ? "text-white/80" : "text-blackPrimary/70"}`}>
                                    {step.description}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-current/15 mt-4">
                                <span className={`text-[11px] uppercase tracking-[0.15em] font-[500] ${isActive ? "text-brandGold" : "text-blackPrimary/70"}`}>
                                    {step.metric}
                                </span>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* QUOTE FOOTNOTE */}
            <div className="mt-12 text-center">
                <p className="text-xs uppercase tracking-[0.3em] font-[400] text-blackPrimary/50">
                    Boros Sylvante Pvt. Ltd. — Building an enduring legacy of shared prosperity
                </p>
            </div>
        </section>
    );
};

export default RegenerativeEcosystemSection;
