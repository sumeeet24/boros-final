"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const HousePortalsSection = () => {
    return (
        <section className="py-24 px-6 sm:px-10 max-w-7xl mx-auto border-b border-blackPrimary/10">
            {/* SECTION MANIFESTO HEADER */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="text-xs uppercase tracking-[0.35em] text-brandGold font-[500] mb-3">
                    The Dual Pillars of the Maison
                </p>
                <h2 className="text-4xl sm:text-5xl font-[300] tracking-wide text-blackPrimary">
                    Two Expressions. One Conviction.
                </h2>
                <div className="w-12 h-[1px] bg-brandGold mx-auto my-6"></div>
                <p className="text-base sm:text-lg font-[300] text-blackPrimary/70 leading-relaxed">
                    At Boros Sylvante, sustainable luxury stops being a contradiction and becomes a lived reality. Choose your journey into our curated universes.
                </p>
            </div>

            {/* SPLIT EDITORIAL PORTALS (Delvaux/Kiton meets The Whole Truth) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                
                {/* PORTAL 1: ECO-LUXURY FASHION (LAROSE) */}
                <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                    className="group relative flex flex-col bg-white border border-blackPrimary/10 overflow-hidden"
                >
                    <div className="relative w-full h-[460px] sm:h-[520px] overflow-hidden bg-black/5">
                        <Image
                            src="/products/la-rrani-exploratory-artifact.jpg"
                            alt="LA RRANI House By Boros Sylvante"
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"></div>
                        
                        <div className="absolute top-6 left-6">
                            <span className="px-3 py-1 bg-[#FAF8F5]/90 text-blackPrimary text-[10px] uppercase tracking-[0.25em] font-[500] backdrop-blur-sm">
                                Maison Universe 01
                            </span>
                        </div>

                        <div className="absolute bottom-8 left-8 right-8 text-white">
                            <p className="text-xs uppercase tracking-[0.3em] text-brandGold font-[500] mb-1">
                                Haute Maille & Structured Apparel
                            </p>
                            <h3 className="text-3xl sm:text-4xl font-[300] tracking-wide mb-3">
                                LA RRANI
                            </h3>
                            <p className="text-sm font-[300] text-white/85 line-clamp-2 max-w-md">
                                Session I: The Hidden Valleys of the Higher Himalayas. Finite, tactile fragments born of deep altitude, radical slow fashion, and sensory permanence.
                            </p>
                        </div>
                    </div>

                    <div className="p-8 flex items-center justify-between bg-[#FAF8F5]">
                        <div>
                            <p className="text-xs uppercase tracking-[0.2em] font-[500] text-blackPrimary">
                                Explore LA RRANI & Atelier
                            </p>
                            <p className="text-xs text-blackPrimary/60 font-[300] mt-1">
                                The Exploratory Artifact, Himalayan Patra & Artisanal Overshirt
                            </p>
                        </div>
                        <Link
                            href="/shop"
                            className="w-12 h-12 rounded-full border border-blackPrimary/20 flex items-center justify-center group-hover:bg-blackPrimary group-hover:text-white group-hover:border-blackPrimary transition-all duration-300"
                            aria-label="Enter LA RRANI Fashion"
                        >
                            <HiOutlineArrowLongRight className="text-lg group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>

                {/* PORTAL 2: REGENERATIVE WELLNESS (TORQUE 11 & HEMP ESSENCE) */}
                <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                    className="group relative flex flex-col bg-white border border-blackPrimary/10 overflow-hidden"
                >
                    <div className="relative w-full h-[460px] sm:h-[520px] overflow-hidden bg-black/5">
                        <Image
                            src="/editorial/torque-shilajit.jpg"
                            alt="TORQUE 11 Himalayan Shilajit and Wellness"
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                        <div className="absolute top-6 left-6">
                            <span className="px-3 py-1 bg-[#FAF8F5]/90 text-blackPrimary text-[10px] uppercase tracking-[0.25em] font-[500] backdrop-blur-sm">
                                Maison Universe 02
                            </span>
                        </div>

                        <div className="absolute bottom-8 left-8 right-8 text-white">
                            <p className="text-xs uppercase tracking-[0.3em] text-brandGold font-[500] mb-1">
                                Plant Nutrition & Himalayan Vitality
                            </p>
                            <h3 className="text-3xl sm:text-4xl font-[300] tracking-wide mb-3">
                                REGENERATIVE WELLNESS
                            </h3>
                            <p className="text-sm font-[300] text-white/80 line-clamp-2 max-w-md">
                                Pure Himalayan Shilajit resin harvested at 16,000 feet, complete hemp seed protein, and solvent-free CBD Relixir+. Ancient plant wisdom meets clean-label science.
                            </p>
                        </div>
                    </div>

                    <div className="p-8 flex items-center justify-between bg-[#FAF8F5]">
                        <div>
                            <p className="text-xs uppercase tracking-[0.2em] font-[500] text-blackPrimary">
                                Explore Wellness & Nutrition
                            </p>
                            <p className="text-xs text-blackPrimary/60 font-[300] mt-1">
                                TORQUE 11 Shilajit, Protein Bars & CBD Relixir+
                            </p>
                        </div>
                        <Link
                            href="/shop"
                            className="w-12 h-12 rounded-full border border-blackPrimary/20 flex items-center justify-center group-hover:bg-blackPrimary group-hover:text-white group-hover:border-blackPrimary transition-all duration-300"
                            aria-label="Enter Wellness"
                        >
                            <HiOutlineArrowLongRight className="text-lg group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default HousePortalsSection;
