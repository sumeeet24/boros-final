"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const savoirFaireItems = [
    {
        title: "The Handloom Ateliers of Nepal",
        subtitle: "100% Wild Himalayan Hemp",
        caption: "In the Kathmandu valley, experienced artisans thread organic wild hemp yarn through antique wooden shuttles. Each bag and accessory takes over 28 hours of deliberate handcrafting.",
        image: "/editorial/artisan-craft.jpg",
        tag: "Craftsmanship"
    },
    {
        title: "The Sculptural Slingbag",
        subtitle: "LAROSE Heirloom Design",
        caption: "Designed with architectural restraint. Built from nature's strongest textile, naturally antimicrobial, water-resilient, and finished with solid brushed brass buckles.",
        image: "/editorial/slingbag-delvaux.jpg",
        tag: "Sartorial"
    },
    {
        title: "The Obsidian Himalayan Secret",
        subtitle: "TORQUE 11 Shilajit Resin",
        caption: "Unearthed at 16,000 feet where the air is pristine. Purified over months using sacred spring water to preserve 80+ trace minerals and naturally occurring fulvic acid.",
        image: "/editorial/torque-shilajit.jpg",
        tag: "Purity"
    }
];

const SavoirFaireSection = () => {
    return (
        <section className="py-24 px-6 sm:px-10 max-w-7xl mx-auto border-b border-blackPrimary/10">
            
            {/* SECTION INTRO */}
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
                <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-brandGold font-[500] mb-2">
                        Delvaux & Kiton Heritage
                    </p>
                    <h2 className="text-3xl sm:text-5xl font-[300] tracking-wide text-blackPrimary">
                        Savoir-Faire & Provenance
                    </h2>
                </div>
                <Link
                    href="/about-us"
                    className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-[500] text-blackPrimary hover:text-brandGold transition-colors"
                >
                    <span>Read The Artisan Chronicles</span>
                    <HiOutlineArrowLongRight className="text-base group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            {/* THREE-COLUMN SCULPTURAL EDITORIAL CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {savoirFaireItems.map((item, idx) => (
                    <div key={idx} className="flex flex-col group">
                        
                        {/* PHOTO WITH SUBTLE HOVER ZOOM */}
                        <div className="relative w-full h-[420px] overflow-hidden bg-black/5 border border-blackPrimary/10 mb-6">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="px-2.5 py-1 bg-[#FAF8F5]/90 text-blackPrimary text-[9px] uppercase tracking-[0.25em] font-[500] backdrop-blur-sm">
                                    {item.tag}
                                </span>
                            </div>
                        </div>

                        {/* DESCRIPTIVE NARRATIVE */}
                        <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-brandGold font-[500] mb-1">
                                {item.subtitle}
                            </p>
                            <h3 className="text-2xl font-[400] tracking-wide text-blackPrimary mb-3">
                                {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm font-[300] text-blackPrimary/70 leading-relaxed">
                                {item.caption}
                            </p>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
};

export default SavoirFaireSection;
