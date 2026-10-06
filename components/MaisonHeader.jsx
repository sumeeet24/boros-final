"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiOutlineMagnifyingGlass, HiOutlineShoppingBag } from "react-icons/hi2";
import MaisonMegaMenu from "./MaisonMegaMenu";
import CartHeaderIcon from "./CartHeaderIcon";

const MaisonHeader = () => {
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        const q = searchQuery.toLowerCase();
        if (q.includes("bag") || q.includes("dress") || q.includes("larose") || q.includes("fashion") || q.includes("coord") || q.includes("sock") || q.includes("patra") || q.includes("polo") || q.includes("overshirt") || q.includes("denim")) {
            router.push("/shop/fashion");
        } else if (q.includes("shilajit") || q.includes("protein") || q.includes("cbd") || q.includes("wellness") || q.includes("torque") || q.includes("hemp essence")) {
            router.push("/shop/wellness");
        } else {
            router.push("/shop");
        }
        setIsSearchOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`sticky top-0 z-40 w-full transition-all duration-500 ${
                    isScrolled
                        ? "bg-[#FAF8F5]/95 backdrop-blur-md border-b border-blackPrimary/10 shadow-[0_2px_20px_rgba(0,0,0,0.03)] py-3"
                        : "bg-[#FAF8F5] border-b border-blackPrimary/5 py-5"
                }`}
            >
                {/* DELVAUX-STYLE SYMMETRICAL HEADER CONTAINER */}
                <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between relative">
                    
                    {/* LEFT CONTROLS: HAMBURGER TRIGGER & SEARCH */}
                    <div className="flex items-center gap-6 flex-1 justify-start">
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="group flex items-center gap-3 cursor-pointer py-1 text-blackPrimary hover:text-brandGold transition-colors"
                            aria-label="Open Directory Menu"
                        >
                            {/* Animated 3-line hamburger */}
                            <div className="flex flex-col justify-between w-5 h-3.5">
                                <span className="w-full h-[1px] bg-blackPrimary group-hover:bg-brandGold transition-all duration-300"></span>
                                <span className="w-3/4 h-[1px] bg-blackPrimary group-hover:bg-brandGold transition-all duration-300"></span>
                                <span className="w-full h-[1px] bg-blackPrimary group-hover:bg-brandGold transition-all duration-300"></span>
                            </div>
                            <span className="text-xs uppercase tracking-[0.25em] font-[500] hidden sm:inline-block">
                                Menu
                            </span>
                        </button>

                        {/* Search toggle / inline input */}
                        <div className="hidden md:flex items-center relative">
                            {isSearchOpen ? (
                                <form onSubmit={handleSearchSubmit} className="flex items-center border-b border-blackPrimary/30 pb-1">
                                    <HiOutlineMagnifyingGlass className="text-sm text-blackPrimary/60 mr-2" />
                                    <input
                                        type="text"
                                        placeholder="Search House creations..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="bg-transparent text-xs text-blackPrimary focus:outline-none w-44 tracking-wide"
                                        autoFocus
                                        onBlur={() => !searchQuery && setIsSearchOpen(false)}
                                    />
                                </form>
                            ) : (
                                <button
                                    onClick={() => setIsSearchOpen(true)}
                                    className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-blackPrimary/70 hover:text-brandGold transition-colors"
                                    aria-label="Search"
                                >
                                    <HiOutlineMagnifyingGlass className="text-sm" />
                                    <span className="hidden lg:inline-block">Search</span>
                                </button>
                            )}
                        </div>
                    </div>

                    {/* CENTER: DELVAUX ARCHITECTURAL BRAND MARK */}
                    <div className="flex flex-col items-center text-center justify-center">
                        <Link href="/" className="flex flex-col items-center group">
                            <span className="text-xl sm:text-2xl lg:text-3xl font-[500] tracking-[0.22em] text-blackPrimary group-hover:text-[#8C733E] transition-colors duration-300">
                                BOROS SYLVANTE
                            </span>
                            <span className="text-[8.5px] sm:text-[9.5px] tracking-[0.45em] uppercase text-[#8C733E] font-[500] mt-0.5">
                                Of Rare Materials. By Hand.
                            </span>
                        </Link>
                    </div>

                    {/* RIGHT CONTROLS: QUICK NAVIGATION & CART */}
                    <div className="flex items-center gap-6 sm:gap-8 flex-1 justify-end">
                        <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-[0.2em] font-[400]">
                            <Link href="/shop" className="text-blackPrimary hover:text-brandGold transition-colors">
                                Creations
                            </Link>
                            <Link href="/about-us" className="text-blackPrimary hover:text-brandGold transition-colors">
                                The Maison
                            </Link>
                            <Link href="/contact" className="text-blackPrimary hover:text-brandGold transition-colors">
                                Concierge
                            </Link>
                        </nav>

                        {/* DESKTOP SHOPPING BAG */}
                        <div className="relative">
                            <CartHeaderIcon />
                        </div>
                    </div>

                </div>
            </header>

            {/* FULL-SCREEN CHRONICLES MEGA MENU */}
            <MaisonMegaMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
};

export default MaisonHeader;
