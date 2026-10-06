"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const MasterHero = () => {
    return (
        <section className="w-full h-[92vh] min-h-[660px] relative overflow-hidden bg-[#0D0D0D] flex items-center justify-center text-center">
            
            {/* CINEMATIC VIDEO BACKGROUND */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full opacity-45"
                >
                    <source src="/videos/hero-video.mp4" type="video/mp4" />
                </video>
            </div>

            {/* SUBTLE TONAL VIGNETTE */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/85 z-10"></div>

            {/* MASTER STATEMENT (EXACT DEVELOPER MASTER COPY) */}
            <div className="relative z-20 flex flex-col items-center justify-center px-6 sm:px-10 w-full max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1, delay: 0.2 }}
                    className="flex flex-col items-center gap-3 mb-8"
                >
                    <div className="h-10 w-[1px] bg-[#8C733E] mb-2 opacity-80"></div>
                    <p className="text-[#D4AF37] text-[10px] sm:text-xs tracking-[0.45em] uppercase font-[500]">
                        BOROS SYLVANTE
                    </p>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    className="text-white text-4xl sm:text-6xl lg:text-7xl leading-[1.12] font-[200] tracking-[0.08em] mb-6"
                >
                    OF RARE MATERIALS. <br />
                    <span className="italic text-white/90 font-[200]">BY HAND.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.65 }}
                    className="text-white/85 text-base sm:text-lg font-[300] leading-relaxed max-w-xl mb-10 tracking-wide"
                >
                    Limited pieces, considered in exceptional natural fibres.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.85 }}
                >
                    <Link
                        href="/the-house"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-white/40 text-white text-xs uppercase tracking-[0.25em] font-[500] hover:bg-white hover:text-black transition-all duration-300"
                    >
                        <span>Enter The House</span>
                        <HiOutlineArrowLongRight className="text-sm" />
                    </Link>
                </motion.div>
            </div>

            {/* DISCREET BOTTOM ACCENT */}
            <div className="absolute bottom-6 left-0 right-0 z-20 text-center">
                <span className="text-[10px] uppercase tracking-[0.35em] text-white/40 font-[400]">
                    India · Nepal · Sri Lanka
                </span>
            </div>
        </section>
    );
};

export default MasterHero;
