"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const FounderStorySection = () => {
    return (
        <section className="py-24 px-6 sm:px-10 max-w-7xl mx-auto border-b border-blackPrimary/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* FOUNDER EDITORIAL PORTRAIT */}
                <div className="lg:col-span-5 relative">
                    <div className="relative w-full h-[520px] sm:h-[600px] overflow-hidden border border-blackPrimary/15 bg-white">
                        <Image
                            src="/editorial/founder-portrait.jpg"
                            alt="Bitupan Boro, Founder of Boros Sylvante"
                            fill
                            className="object-cover object-center"
                        />
                    </div>
                    {/* Caption badge */}
                    <div className="absolute -bottom-4 -right-4 bg-blackPrimary text-white p-4 max-w-xs shadow-xl hidden sm:block">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-brandGold font-[500] mb-1">
                            The Architect
                        </p>
                        <p className="text-xs font-[300] leading-relaxed text-white/90">
                            Bitupan Boro, Founder & Visionary behind Boros Sylvante Pvt. Ltd.
                        </p>
                    </div>
                </div>

                {/* THE FOUNDER'S MANIFESTO */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                    <p className="text-xs uppercase tracking-[0.35em] text-brandGold font-[500] mb-3">
                        Origin Story
                    </p>
                    <h2 className="text-3xl sm:text-5xl font-[300] tracking-wide text-blackPrimary mb-6">
                        Returning to Origins. <br />
                        <span className="italic font-[200]">Elevating Human Potential.</span>
                    </h2>
                    
                    <div className="w-16 h-[1px] bg-brandGold mb-8"></div>

                    <div className="space-y-5 text-sm sm:text-base font-[300] text-blackPrimary/80 leading-relaxed">
                        <p>
                            Boros Sylvante was born from Bitupan Boro’s deep-rooted connection with nature and its elemental rhythms. Nourished by the majesty of mountains, the quiet wisdom of valleys, and the vitality of pristine air, water, and soil, Bitupan experienced firsthand the raw, unfiltered essence of life’s force.
                        </p>
                        <p>
                            Observing how modern commercial industry so frequently severs humanity from the earth, he envisioned an enterprise that returns to these ancient origins without ever compromising on world-class modern sophistication.
                        </p>
                        <blockquote className="border-l-2 border-brandGold pl-6 italic text-base sm:text-lg text-blackPrimary/90 font-[300] my-6">
                            "True progress is measured not by what an enterprise extracts, but by the ecosystems that prosper because it exists. Every farmer, artisan, and consumer must share in the enduring prosperity created."
                        </blockquote>
                        <p>
                            Through Boros Sylvante, Bitupan brings the purest expressions of nature to the world stage — turning elemental harmony into conscious luxury, functional wellness, and regenerative human growth.
                        </p>
                    </div>

                    <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <Link
                            href="/about-us"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-blackPrimary text-white text-xs uppercase tracking-[0.25em] font-[500] hover:bg-brandGold hover:text-blackPrimary transition-all duration-300"
                        >
                            <span>Explore Our Heritage</span>
                            <HiOutlineArrowLongRight className="text-base" />
                        </Link>
                        <span className="text-xs uppercase tracking-[0.2em] font-[400] text-brandOlive">
                            Boros Sylvante Pvt. Ltd.
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FounderStorySection;
