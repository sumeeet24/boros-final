"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
    HiOutlineDocumentText, 
    HiOutlineMagnifyingGlassPlus, 
    HiOutlineXMark 
} from "react-icons/hi2";
import PrivateInquiryModal from "./PrivateInquiryModal";

const FashionProductTemplate = ({ product, recommendedGrid }) => {
    const packages = product.fields.packages || {};
    const packageSizes = Object.keys(packages);
    const [selectedSize, setSelectedSize] = useState(packageSizes[0] || "");
    const [isInquiryOpen, setIsInquiryOpen] = useState(false);
    const [isZoomOpen, setIsZoomOpen] = useState(false);

    const gallery = product.fields.gallery || [product.fields.mainImage.fields.file.url];
    const [activeImage, setActiveImage] = useState(gallery[0]);
    const craft = product.fields.craft || {};

    const pieceNumber = product.fields.pieceNumber || "PIECE 01 / 08";
    const brand = product.fields.brand || "BOROS SYLVANTE";

    return (
        <div className="bg-[#FAF8F5] text-blackPrimary">
            
            {/* BREADCRUMB STRIP */}
            <div className="max-w-7xl mx-auto px-6 sm:px-10 py-6 border-b border-[#E8E4DE] flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#6B655C]">
                <Link href="/" className="hover:text-blackPrimary">The House</Link>
                <span>/</span>
                <Link href="/the-collection" className="hover:text-blackPrimary">The Collection</Link>
                <span>/</span>
                <span className="text-blackPrimary font-[500]">{product.fields.title}</span>
            </div>

            {/* MAIN EDITORIAL STAGE */}
            <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                
                {/* LEFT: EDITORIAL VISUAL CANVAS */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                    <div 
                        className="relative w-full h-[540px] sm:h-[680px] bg-white border border-[#E8E4DE] overflow-hidden group cursor-zoom-in"
                        onClick={() => setIsZoomOpen(true)}
                    >
                        <Image
                            src={activeImage}
                            alt={product.fields.title}
                            fill
                            priority
                            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                        />
                        
                        {/* Piece Number Badge */}
                        <div className="absolute top-4 left-4 z-10">
                            <span className="px-3 py-1 bg-[#FAF8F5]/90 text-blackPrimary text-[10px] uppercase tracking-[0.25em] font-[500] backdrop-blur-sm border border-blackPrimary/5">
                                {pieceNumber}
                            </span>
                        </div>

                        {/* Zoom Hint Badge */}
                        <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 text-white px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] flex items-center gap-1.5 backdrop-blur-xs">
                            <HiOutlineMagnifyingGlassPlus className="text-xs" />
                            <span>Expand Weave</span>
                        </div>
                    </div>

                    {/* Thumbnail Selector */}
                    {gallery.length > 1 && (
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {gallery.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImage(img)}
                                    className={`relative w-24 h-24 sm:w-28 sm:h-28 border flex-shrink-0 transition-all overflow-hidden cursor-pointer ${
                                        activeImage === img
                                            ? "border-[#1A1A1A] shadow-md scale-102"
                                            : "border-[#E8E4DE] opacity-60 hover:opacity-100"
                                    }`}
                                >
                                    <Image src={img} alt={`View ${idx + 1}`} fill className="object-cover" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* RIGHT: MASTER PRODUCT BLUEPRINT COLUMN */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                        {/* HEADER IDENTIFIER */}
                        <div className="border-b border-[#E8E4DE] pb-6 mb-6">
                            <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500] mb-2">
                                {pieceNumber} · {brand}
                            </p>
                            <h1 className="text-3xl sm:text-4xl font-[200] tracking-wide mb-3 text-[#1A1A1A]">
                                {product.fields.title}
                            </h1>
                            {product.fields.subtitle && (
                                <p className="text-xs uppercase tracking-[0.22em] text-[#6B655C] font-[400] mb-4">
                                    {product.fields.subtitle}
                                </p>
                            )}
                            <p className="text-sm font-[300] text-[#1A1A1A]/85 leading-relaxed">
                                A composition in exceptional natural fibres. The material remains central. Hand-finishing and restrained construction complete the piece.
                            </p>
                        </div>

                        {/* SPECIFICATION MATRIX (EXACT DEVELOPER MASTER FORMAT) */}
                        <div className="space-y-4 mb-8 text-xs font-[300] border-b border-[#E8E4DE] pb-8">
                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                                <span className="uppercase tracking-[0.25em] font-[500] text-[#8C733E] w-28 flex-shrink-0">
                                    MATERIAL —
                                </span>
                                <span className="text-[#1A1A1A] leading-relaxed">
                                    {craft.material || product.fields.shortDescription}
                                </span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                                <span className="uppercase tracking-[0.25em] font-[500] text-[#8C733E] w-28 flex-shrink-0">
                                    ORIGIN —
                                </span>
                                <span className="text-[#1A1A1A] leading-relaxed">
                                    {craft.origin || "North-East India & South Asian Ateliers"}
                                </span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                                <span className="uppercase tracking-[0.25em] font-[500] text-[#8C733E] w-28 flex-shrink-0">
                                    CRAFT —
                                </span>
                                <span className="text-[#1A1A1A] leading-relaxed">
                                    {craft.craftFinish || craft.hardware || "Manual Loom Weaving & Hand-Finished Seams"}
                                </span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                                <span className="uppercase tracking-[0.25em] font-[500] text-[#8C733E] w-28 flex-shrink-0">
                                    EDITION —
                                </span>
                                <span className="text-[#1A1A1A] leading-relaxed">
                                    {craft.edition || "Numbered Allocation · Recorded in the Archive"}
                                </span>
                            </div>
                        </div>

                        {/* PROPORTION / SIZE SELECTOR */}
                        {packageSizes.length > 0 && (
                            <div className="mb-8">
                                <div className="flex items-center justify-between mb-3">
                                    <p className="text-xs uppercase tracking-[0.2em] font-[500] text-[#1A1A1A]/80">
                                        Select Proportion / Size
                                    </p>
                                    <span className="text-[11px] text-[#8C733E] tracking-wider uppercase font-medium">
                                        Artisanal Cut
                                    </span>
                                </div>
                                <div className="flex gap-2.5 flex-wrap">
                                    {packageSizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-4 py-2.5 text-xs uppercase tracking-[0.15em] font-[500] border transition-all cursor-pointer ${
                                                selectedSize === size
                                                    ? "bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-xs"
                                                    : "bg-white text-blackPrimary border-[#E8E4DE] hover:border-[#1A1A1A]"
                                            }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* PRICE ON REQUEST PROTOCOL BUTTONS */}
                        <div className="space-y-3 mb-8">
                            <button
                                onClick={() => setIsInquiryOpen(true)}
                                className="w-full py-4.5 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.25em] font-[500] hover:bg-[#8C733E] hover:text-white transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer shadow-sm"
                            >
                                <HiOutlineDocumentText className="text-base text-brandGold" />
                                <span>Discover the Piece · Enquire Privately</span>
                            </button>

                            <a
                                href={`https://wa.me/919401277393?text=${encodeURIComponent(`Hello Boros Sylvante Concierge Desk, I am inquiring regarding private allocation for ${product.fields.title} (${pieceNumber})${selectedSize ? ` in proportion: ${selectedSize}` : ''}.`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3.5 px-6 border border-[#1A1A1A]/30 bg-white text-[#1A1A1A] text-xs uppercase tracking-[0.2em] font-[500] hover:border-[#8C733E] hover:text-[#8C733E] transition-all flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <span>Direct Concierge WhatsApp (+91 94012 77393)</span>
                            </a>
                        </div>

                        {/* THE STANDARD CLOSING LINE */}
                        <div className="pt-4 border-t border-[#E8E4DE] text-center">
                            <p className="text-xs uppercase tracking-[0.25em] text-[#8C733E] font-[500] mb-1">
                                The Standard
                            </p>
                            <p className="text-xs italic font-[300] text-[#6B655C]">
                                "Nothing more than necessary. Nothing less than exceptional."
                            </p>
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#9C9488] mt-3">
                                For Those Who Notice.
                            </p>
                        </div>
                    </div>

                    {/* PRODUCT STORYLINE ACCORDION / NOTES */}
                    <div className="mt-10 border-t border-[#E8E4DE] pt-6">
                        <p className="text-xs uppercase tracking-[0.25em] font-[500] text-[#1A1A1A] mb-3">
                            The Narrative
                        </p>
                        <p className="text-xs sm:text-sm font-[300] text-[#1A1A1A]/80 leading-relaxed mb-4">
                            {product.fields.longDescription}
                        </p>
                        {craft.care && (
                            <div className="bg-white p-4 border border-[#E8E4DE]">
                                <span className="text-[10px] uppercase tracking-[0.2em] font-[500] text-[#8C733E] block mb-1">
                                    Care & Preservation
                                </span>
                                <p className="text-xs font-[300] text-[#1A1A1A]/70 leading-relaxed">
                                    {craft.care}
                                </p>
                            </div>
                        )}
                    </div>
                </div>

            </div>

            {/* RELATED HOUSE CREATIONS */}
            <div className="py-20 border-t border-[#E8E4DE] bg-[#FAF8F5]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10">
                    <div className="flex items-baseline justify-between mb-10 pb-4 border-b border-[#E8E4DE]">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.35em] text-[#8C733E] font-medium mb-1">
                                The Editions
                            </p>
                            <h2 className="text-2xl sm:text-3xl font-[200] tracking-wide text-[#1A1A1A]">
                                Other Expressions of the House
                            </h2>
                        </div>
                        <Link 
                            href="/collection" 
                            className="text-xs uppercase tracking-[0.2em] font-[500] text-blackPrimary hover:text-[#8C733E] transition-colors"
                        >
                            View All &rarr;
                        </Link>
                    </div>
                    {recommendedGrid}
                </div>
            </div>

            {/* FULLSCREEN ZOOM MODAL */}
            {isZoomOpen && (
                <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-10 animate-fadeIn">
                    <button
                        onClick={() => setIsZoomOpen(false)}
                        className="absolute top-6 right-6 text-white/80 hover:text-white p-2 text-2xl cursor-pointer"
                        aria-label="Close Fullscreen View"
                    >
                        <HiOutlineXMark />
                    </button>
                    <div className="relative w-full max-w-5xl h-[85vh]">
                        <Image
                            src={activeImage}
                            alt="High Resolution Weave Detail"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}

            {/* BESPOKE PRIVATE CLIENT PROTOCOL MODAL */}
            <PrivateInquiryModal
                isOpen={isInquiryOpen}
                onClose={() => setIsInquiryOpen(false)}
                product={product}
                selectedSize={selectedSize}
            />

        </div>
    );
};

export default FashionProductTemplate;
