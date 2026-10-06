'use client';

import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Banner = () => {
    return (
        <div className="w-full h-[90vh] min-h-[680px] relative overflow-hidden bg-black flex items-center justify-center text-center">
            
            {/* CINEMATIC BACKGROUND VIDEO */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full opacity-50"
                >
                    <source src="/videos/hero-video.mp4" type="video/mp4" />
                </video>
            </div>

            {/* DARK LUXURY GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/85 z-10"></div>

            {/* MANIFESTO TYPOGRAPHY (Brioni / Delvaux Architectural Style) */}
            <div className="relative z-20 flex flex-col items-center justify-center px-6 sm:px-10 w-full max-w-5xl mx-auto">
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="flex flex-col items-center gap-2 mb-8"
                >
                    <div className="h-10 w-[1px] bg-brandGold mb-3"></div>
                    <p className="text-brandGold text-[11px] sm:text-xs tracking-[0.45em] uppercase font-[500]">
                        BOROS SYLVANTE
                    </p>
                </motion.div>
                
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    className="text-white text-4xl sm:text-6xl lg:text-7xl leading-[1.12] font-[200] tracking-wide mb-6"
                >
                    Of Rare Materials. <br />
                    <span className="italic text-white/90 font-[200]">By Hand.</span>
                </motion.h1>
                
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    className="text-white/85 text-sm sm:text-base font-[300] leading-relaxed max-w-2xl mb-10 tracking-wide"
                >
                    Long-staple terrestrial stems, un-dyed Assam silk, and high-altitude Himalayan botanicals — shaped by human hands outside the industrial calendar. For those who notice.
                </motion.p>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 1.1 }}
                    className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
                >
                    <Link
                        href="/shop"
                        className="px-8 py-4 bg-white text-blackPrimary text-xs uppercase tracking-[0.25em] font-[500] hover:bg-brandGold hover:text-white transition-all duration-300 w-full sm:w-auto"
                    >
                        Explore The House Catalog
                    </Link>
                    
                    <Link
                        href="/about-us"
                        className="group flex items-center gap-3 px-8 py-4 border border-white/30 text-white text-xs uppercase tracking-[0.25em] font-[500] hover:border-white transition-all duration-300 w-full sm:w-auto justify-center"
                    >
                        <span>Founder's Vision</span>
                        <HiOutlineArrowLongRight className="text-sm group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

            </div>
        </div>
    );
};

export default Banner;
