"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiMenu, HiOutlineX } from "react-icons/hi";

const HeaderMainMobile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-[#FAF8F5] border-b border-[#E8E4DE] px-5 py-4 md:hidden sticky top-0 z-40">
            <div className="flex items-center justify-between">
                <Link href="/" className="flex flex-col items-start gap-0.5">
                    <span className="text-[#1A1A1A] text-xl font-[300] tracking-[0.18em]">
                        BOROS SYLVANTE
                    </span>
                    <span className="text-[#8C733E] text-[9px] tracking-[0.35em] uppercase font-[500]">
                        OF RARE MATERIALS. BY HAND.
                    </span>
                </Link>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 text-[#1A1A1A] text-2xl focus:outline-hidden cursor-pointer"
                    aria-label="Toggle navigation menu"
                >
                    {isMenuOpen ? <HiOutlineX /> : <HiMenu />}
                </button>
            </div>

            {/* EXPANDABLE MOBILE NAV DRAWER */}
            {isMenuOpen && (
                <div className="pt-6 pb-4 border-t border-[#E8E4DE] mt-4 animate-fadeIn">
                    <nav className="flex flex-col gap-4 text-xs uppercase tracking-[0.22em] font-[400] text-[#1A1A1A]">
                        <Link 
                            href="/the-house" 
                            onClick={() => setIsMenuOpen(false)}
                            className="py-1 hover:text-[#8C733E]"
                        >
                            The House
                        </Link>
                        <Link 
                            href="/the-materials" 
                            onClick={() => setIsMenuOpen(false)}
                            className="py-1 hover:text-[#8C733E]"
                        >
                            The Materials
                        </Link>
                        <Link 
                            href="/the-collection" 
                            onClick={() => setIsMenuOpen(false)}
                            className="py-1 hover:text-[#8C733E]"
                        >
                            The Collection
                        </Link>
                        <Link 
                            href="/the-atelier" 
                            onClick={() => setIsMenuOpen(false)}
                            className="py-1 hover:text-[#8C733E]"
                        >
                            The Atelier
                        </Link>
                        <Link 
                            href="/provenance" 
                            onClick={() => setIsMenuOpen(false)}
                            className="py-1 hover:text-[#8C733E]"
                        >
                            Provenance
                        </Link>
                        <Link 
                            href="/the-archive" 
                            onClick={() => setIsMenuOpen(false)}
                            className="py-1 hover:text-[#8C733E]"
                        >
                            The Archive
                        </Link>
                        <Link 
                            href="/journal" 
                            onClick={() => setIsMenuOpen(false)}
                            className="py-1 hover:text-[#8C733E]"
                        >
                            Journal
                        </Link>
                        <Link 
                            href="/private-appointments" 
                            onClick={() => setIsMenuOpen(false)}
                            className="py-1 hover:text-[#8C733E]"
                        >
                            Private Appointments
                        </Link>
                        <Link 
                            href="/contact" 
                            onClick={() => setIsMenuOpen(false)}
                            className="py-1 hover:text-[#8C733E]"
                        >
                            Contact
                        </Link>
                    </nav>

                    <div className="pt-6 mt-6 border-t border-[#E8E4DE] text-center">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C733E] italic">
                            For Those Who Notice.
                        </p>
                    </div>
                </div>
            )}
        </header>
    );
};

export default HeaderMainMobile;
