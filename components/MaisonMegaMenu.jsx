"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineXMark, HiOutlineArrowRight } from "react-icons/hi2";

const MaisonMegaMenu = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    className="fixed inset-0 z-50 bg-[#FAF8F5] text-blackPrimary flex flex-col justify-between overflow-y-auto"
                >
                    {/* TOP BAR */}
                    <div className="flex items-center justify-between px-8 py-6 border-b border-blackPrimary/10 max-w-7xl mx-auto w-full">
                        <div className="flex items-center gap-2">
                            <span className="text-xs uppercase tracking-[0.3em] font-[500] text-brandGold">The Chronicles</span>
                            <span className="text-blackPrimary/30">|</span>
                            <span className="text-xs tracking-[0.2em] uppercase text-blackPrimary/60">House Directory</span>
                        </div>

                        <button
                            onClick={onClose}
                            className="flex items-center gap-3 cursor-pointer text-xs uppercase tracking-[0.25em] font-[500] hover:text-brandGold transition-colors"
                            aria-label="Close menu"
                        >
                            <span>Close</span>
                            <div className="w-8 h-8 rounded-full border border-blackPrimary/20 flex items-center justify-center hover:border-blackPrimary transition-colors">
                                <HiOutlineXMark className="text-base" />
                            </div>
                        </button>
                    </div>

                    {/* MAIN DIRECTORY CONTENT */}
                    <div className="max-w-7xl mx-auto w-full px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-12 flex-1">
                        
                        {/* COLUMN 1: THE MAISON */}
                        <div className="flex flex-col gap-6">
                            <div className="border-b border-blackPrimary/15 pb-3">
                                <p className="text-xs tracking-[0.3em] uppercase text-brandGold font-[500]">Origin & Heritage</p>
                                <h3 className="text-2xl font-[400] tracking-wide mt-1">The House</h3>
                            </div>
                            <ul className="flex flex-col gap-3 text-base font-[300]">
                                <li>
                                    <Link href="/about-us" onClick={onClose} className="hover:text-brandGold transition-colors flex items-center justify-between group">
                                        <span>Founder's Story: Bitupan Boro</span>
                                        <HiOutlineArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-xs text-brandGold" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about-us#philosophy" onClick={onClose} className="hover:text-brandGold transition-colors flex items-center justify-between group">
                                        <span>Value Creation through Value Sharing</span>
                                        <HiOutlineArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-xs text-brandGold" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about-us#ecosystem" onClick={onClose} className="hover:text-brandGold transition-colors flex items-center justify-between group">
                                        <span>The Regenerative Ecosystem</span>
                                        <HiOutlineArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-xs text-brandGold" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about-us#portfolio" onClick={onClose} className="hover:text-brandGold transition-colors flex items-center justify-between group">
                                        <span>Portfolio of 9 Purpose Brands</span>
                                        <HiOutlineArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-xs text-brandGold" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" onClick={onClose} className="hover:text-brandGold transition-colors flex items-center justify-between group">
                                        <span>Private Concierge & Press</span>
                                        <HiOutlineArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-xs text-brandGold" />
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* COLUMN 2: ECO-LUXURY FASHION (Delvaux / Brioni / Kiton) */}
                        <div className="flex flex-col gap-6">
                            <div className="border-b border-blackPrimary/15 pb-3">
                                <p className="text-xs tracking-[0.3em] uppercase text-brandGold font-[500]">Sartorial & Leather</p>
                                <h3 className="text-2xl font-[400] tracking-wide mt-1">Fashion Universe</h3>
                            </div>
                            <ul className="flex flex-col gap-3 text-base font-[300]">
                                <li>
                                    <Link href="/product/himalayan-patra-polo" onClick={onClose} className="hover:text-brandGold transition-colors flex items-center justify-between group font-[400]">
                                        <span>The Himalayan Patra</span>
                                        <span className="text-[10px] uppercase tracking-wider text-[#8C733E] px-2 py-0.5 border border-[#8C733E]/30">Assam Silk</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/product/artisanal-hemp-denim-overshirt" onClick={onClose} className="hover:text-brandGold transition-colors flex items-center justify-between group font-[400]">
                                        <span>The Hemp-Denim Overshirt</span>
                                        <span className="text-[10px] uppercase tracking-wider text-[#8C733E] px-2 py-0.5 border border-[#8C733E]/30">23 Pieces</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/shop/fashion" onClick={onClose} className="hover:text-brandGold transition-colors flex items-center justify-between group font-[400]">
                                        <span>LAROSE — Sustainable Luxury</span>
                                        <span className="text-[10px] uppercase tracking-wider text-brandGold px-2 py-0.5 border border-brandGold/30">Couture</span>
                                    </Link>
                                </li>
                                <li className="pl-3 border-l border-blackPrimary/10 flex flex-col gap-2 text-sm text-blackPrimary/70">
                                    <Link href="/product/larose-hemp-slingbag-beige" onClick={onClose} className="hover:text-blackPrimary transition-colors">Hemp Slingbag (Natural Beige)</Link>
                                    <Link href="/product/larose-hemp-slingbag-purple" onClick={onClose} className="hover:text-blackPrimary transition-colors">Hemp Slingbag (Royal Purple)</Link>
                                    <Link href="/product/larose-white-halter-midi" onClick={onClose} className="hover:text-blackPrimary transition-colors">Bamboo Silk Gown</Link>
                                    <Link href="/product/larose-coord-set" onClick={onClose} className="hover:text-blackPrimary transition-colors">Ribbed Knit Co-Ord Set</Link>
                                    <Link href="/product/larose-hemp-socks" onClick={onClose} className="hover:text-blackPrimary transition-colors">Natural Hemp Socks</Link>
                                </li>
                                <li className="pt-2">
                                    <span className="text-blackPrimary/50 text-sm">Boro Lino — Organic Linen (Coming Soon)</span>
                                </li>
                                <li>
                                    <span className="text-blackPrimary/50 text-sm">Blues Boro — Sustainable Essentials</span>
                                </li>
                            </ul>
                        </div>

                        {/* COLUMN 3: REGENERATIVE WELLNESS (The Whole Truth / Cosmix) */}
                        <div className="flex flex-col gap-6">
                            <div className="border-b border-blackPrimary/15 pb-3">
                                <p className="text-xs tracking-[0.3em] uppercase text-brandGold font-[500]">Clean Science & Earth</p>
                                <h3 className="text-2xl font-[400] tracking-wide mt-1">Wellness Universe</h3>
                            </div>
                            <ul className="flex flex-col gap-3 text-base font-[300]">
                                <li>
                                    <Link href="/product/torque-11-shilajit" onClick={onClose} className="hover:text-brandGold transition-colors flex items-center justify-between group font-[400]">
                                        <span>TORQUE 11 — Pure Shilajit</span>
                                        <span className="text-[10px] uppercase tracking-wider text-brandGold px-2 py-0.5 border border-brandGold/30">16,000 Ft</span>
                                    </Link>
                                </li>
                                <li className="pt-1">
                                    <Link href="/shop" onClick={onClose} className="hover:text-brandGold transition-colors flex items-center justify-between group font-[400]">
                                        <span>HEMP ESSENCE — Plant Nutrition</span>
                                    </Link>
                                </li>
                                <li className="pl-3 border-l border-blackPrimary/10 flex flex-col gap-2 text-sm text-blackPrimary/70">
                                    <Link href="/product/hemp-essence-protein-bar" onClick={onClose} className="hover:text-blackPrimary transition-colors">Complete Hemp Protein Bar</Link>
                                    <Link href="/product/hemp-mushroom-meal" onClick={onClose} className="hover:text-blackPrimary transition-colors">Hemp & Mushroom Instant Meal</Link>
                                    <Link href="/product/hemp-essence-cbd" onClick={onClose} className="hover:text-blackPrimary transition-colors">CBD Relixir+ (100% THC-Free)</Link>
                                </li>
                                <li className="pt-2">
                                    <span className="text-blackPrimary/50 text-sm">Nirvana's Realm — Artisanal Teas</span>
                                </li>
                                <li>
                                    <span className="text-blackPrimary/50 text-sm">WLEVO — Functional Innovation</span>
                                </li>
                            </ul>
                        </div>

                        {/* COLUMN 4: SAVOIR-FAIRE FEATURE */}
                        <div className="flex flex-col gap-4 bg-blackPrimary text-[#FAF8F5] p-6 rounded-none relative overflow-hidden">
                            <p className="text-xs tracking-[0.3em] uppercase text-brandGold font-[500]">Savoir-Faire</p>
                            <h4 className="text-xl font-[300] tracking-wide">Handmade in Nepal & the Himalayas</h4>
                            <p className="text-xs font-[300] leading-relaxed text-[#FAF8F5]/80">
                                Every stitch is deliberate. From our 100% natural organic hemp handloomed in Kathmandu to sacred Shilajit harvested at 16,000 feet.
                            </p>
                            <div className="relative w-full h-36 mt-2 overflow-hidden">
                                <Image
                                    src="/editorial/artisan-craft.jpg"
                                    alt="Nepal Artisan Handloom"
                                    fill
                                    className="object-cover opacity-80"
                                />
                            </div>
                            <Link
                                href="/about-us"
                                onClick={onClose}
                                className="text-xs tracking-[0.25em] uppercase text-brandGold hover:underline mt-2 flex items-center gap-2"
                            >
                                <span>Discover Our Artisans</span>
                                <HiOutlineArrowRight />
                            </Link>
                        </div>

                    </div>

                    {/* FOOTER STRIP */}
                    <div className="border-t border-blackPrimary/10 py-6 px-8 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between text-xs text-blackPrimary/60 gap-4">
                        <p className="tracking-wider uppercase font-[400]">Boros Sylvante Pvt. Ltd. — Value Creation through Value Sharing</p>
                        <div className="flex gap-6">
                            <Link href="/privacy-policy" onClick={onClose} className="hover:text-blackPrimary">Privacy Policy</Link>
                            <Link href="/terms-of-service" onClick={onClose} className="hover:text-blackPrimary">Terms</Link>
                            <Link href="/shipping-policy" onClick={onClose} className="hover:text-blackPrimary">Shipping</Link>
                            <Link href="/refund-policy" onClick={onClose} className="hover:text-blackPrimary">Refunds</Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MaisonMegaMenu;
