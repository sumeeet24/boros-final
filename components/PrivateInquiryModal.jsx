"use client";

import React, { useState } from "react";
import { HiOutlineXMark, HiOutlineCheck, HiOutlineClipboardDocument, HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

export default function PrivateInquiryModal({ isOpen, onClose, product, selectedSize }) {
    const [clientName, setClientName] = useState("");
    const [clientPhone, setClientPhone] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [clientLocation, setClientLocation] = useState("");
    const [clientNotes, setClientNotes] = useState("");
    const [dossierSubmitted, setDossierSubmitted] = useState(false);
    const [copied, setCopied] = useState(false);

    if (!isOpen) return null;

    const sizeText = selectedSize || "Atelier Proportion";
    const slug = product?.fields?.slug || "";
    const isLarrani = slug.includes("larrani") || slug.includes("exploratory");
    const isOvershirt = slug.includes("overshirt") || slug.includes("denim");
    const isHimalayanPatra = slug.includes("patra") || slug.includes("polo");

    const subjectText = isLarrani
        ? `Selection Reference: LA RRANI | The Exploratory Larose Artifact (${sizeText})`
        : isOvershirt
        ? `Selection Reference: Over-shirt / ${sizeText}`
        : isHimalayanPatra
        ? `Selection Reference: THE HIMALAYAN PATRA / Status Check (${sizeText})`
        : `Selection Reference: ${product?.fields?.title || "Creation"} / ${sizeText}`;

    const defaultInboundLetter = isLarrani
        ? `Dear ${clientName || "Sir/Madam"},\n\nThank you for your interest in LA RRANI.\n\nThe piece you have referenced — The Exploratory Larose Artifact (Session I: The Hidden Valleys of the Higher Himalayas) — is a finite, tactile fragment of an unmapped world, bearing the historic un-reproduced Larose nomenclature and marking the true genesis of the parent house of LA RRANI.\n\nBecause each piece is an un-reproduced exploratory artifact born of deep altitude, radical slow fashion, and a sensory permanence that defies the modern passage of time, allocations are strictly reviewed by the parent house of LA RRANI.\n\nOur private concierge will contact you within 24 hours to review custom proportions, provenance, and private consignment.`
        : isOvershirt
        ? `Dear ${clientName || "Sir/Madam"},\n\nThank you for your interest in our upcoming micro-batch.\n\nThe piece you have referenced is currently in its final hand-finishing assembly stage within our partner workshop in Kathmandu, Nepal. We have chosen to limit this specific fabrication run to twenty-three numbered pieces globally.\n\nBecause we work outside the conventional industrial calendar, each panel is individually hand-cut and linked by local artisans using pure organic hemp-cotton denim and natural hand-carved coconut buttons.\n\nOur private concierge will contact you within 24 hours to confirm your numbered allocation and coordinate white-glove insured consignment.`
        : isHimalayanPatra
        ? `Dear ${clientName || "Sir/Madam"},\n\nThank you for your interest in our latest flat-knit development.\n\nTHE HIMALAYAN PATRA (ELEMENTA SERIES) button-down polo, structured from a precise, un-dyed blend of 50% organic hemp, 30% Assam mulberry silk, and 20% Egyptian cotton, is currently being meticulously hand-finished by our artisan partners in Assam, Northeast India.\n\nBecause we work outside the conventional industrial calendar, each piece is individually linked and shaped to preserve fiber integrity with zero chemical washing.\n\nOur private concierge will contact you within 24 hours to confirm your custom measurements, atelier dispatch timeline, and private acquisition arrangements.`
        : `Dear ${clientName || "Sir/Madam"},\n\nThank you for your interest in Boros Sylvante.\n\nThe creation you have referenced (${product?.fields?.title}, ${sizeText}) is crafted from rare natural materials by master artisans outside the conventional industrial calendar.\n\nOur private client desk has received your allocation request and will contact you directly within 24 hours to review provenance, sizing, and private consignment.`;

    const referenceId = `BS-INQ-${Math.floor(100000 + Math.random() * 900000)}`;

    const handleSubmit = (e) => {
        e.preventDefault();
        setDossierSubmitted(true);
    };

    const handleCopy = () => {
        const fullDossier = `BOROS SYLVANTE | PRIVATE CLIENT PROTOCOL\nDOSSIER REF: ${referenceId}\nSUBJECT: ${subjectText}\nCLIENT: ${clientName} (${clientPhone} | ${clientEmail})\nLOCATION: ${clientLocation}\n\n${defaultInboundLetter}\n\nBoros Sylvante Pvt. Ltd. — Of Rare Materials. By Hand.`;
        navigator.clipboard.writeText(fullDossier);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const whatsappMessage = encodeURIComponent(
        `Hello Boros Sylvante Concierge,\n\nI have submitted a Private Inquiry Protocol on your website:\n• Dossier Ref: ${referenceId}\n• Subject: ${subjectText}\n• Client: ${clientName || "Private Client"}\n• Phone: ${clientPhone || "Provided"}\n\nPlease confirm availability and allocation status.`
    );

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#1A1A1A]/20 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
                
                {/* TOP BAR */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A1A1A]/10 bg-[#FAF8F5]">
                    <div>
                        <span className="text-[10px] tracking-[0.35em] uppercase text-[#8C733E] font-medium block">
                            Boros Sylvante
                        </span>
                        <h3 className="text-sm uppercase tracking-[0.2em] font-[400] text-[#1A1A1A]">
                            Private Inquiry Protocol
                        </h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1.5 text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors cursor-pointer"
                        aria-label="Close"
                    >
                        <HiOutlineXMark className="w-5 h-5" />
                    </button>
                </div>

                {/* CONTENT AREA */}
                <div className="p-6 sm:p-8 overflow-y-auto flex-1 font-sans">
                    {!dossierSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="border-b border-[#1A1A1A]/10 pb-4">
                                <p className="text-xs uppercase tracking-[0.25em] text-[#8C733E] font-medium mb-1">
                                    Selection Reference
                                </p>
                                <p className="text-lg font-light text-[#1A1A1A]">
                                    {product?.fields?.title}
                                </p>
                                <p className="text-xs text-[#6B655C] tracking-wide mt-1">
                                    Preference: <span className="text-[#1A1A1A] font-medium">{sizeText}</span> • Micro-Batch Atelier Allocation
                                </p>
                            </div>

                            <p className="text-xs text-[#6B655C] font-light leading-relaxed">
                                Because we construct garments outside conventional industrial timelines, pieces are allocated in strictly limited numbered runs. Transmit your coordinates below for private client registration.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A]/70 mb-1.5">
                                        Client Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={clientName}
                                        onChange={(e) => setClientName(e.target.value)}
                                        placeholder="Lord / Lady / Full Name"
                                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#1A1A1A]/15 focus:outline-none focus:border-[#1A1A1A] text-[#1A1A1A]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A]/70 mb-1.5">
                                        WhatsApp / Phone *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        value={clientPhone}
                                        onChange={(e) => setClientPhone(e.target.value)}
                                        placeholder="+91 / International Mobile"
                                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#1A1A1A]/15 focus:outline-none focus:border-[#1A1A1A] text-[#1A1A1A]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A]/70 mb-1.5">
                                        Confidential Email *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={clientEmail}
                                        onChange={(e) => setClientEmail(e.target.value)}
                                        placeholder="patron@domain.com"
                                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#1A1A1A]/15 focus:outline-none focus:border-[#1A1A1A] text-[#1A1A1A]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A]/70 mb-1.5">
                                        Destination City / Country *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={clientLocation}
                                        onChange={(e) => setClientLocation(e.target.value)}
                                        placeholder="e.g. Mumbai, New Delhi, London, Dubai"
                                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#1A1A1A]/15 focus:outline-none focus:border-[#1A1A1A] text-[#1A1A1A]"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A]/70 mb-1.5">
                                    Bespoke Notes / Monogram Preferences (Optional)
                                </label>
                                <textarea
                                    rows={2}
                                    value={clientNotes}
                                    onChange={(e) => setClientNotes(e.target.value)}
                                    placeholder="Specific sleeve length, monogram initials, or delivery scheduling..."
                                    className="w-full px-3.5 py-2 text-xs bg-white border border-[#1A1A1A]/15 focus:outline-none focus:border-[#1A1A1A] text-[#1A1A1A]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#8C733E] transition-all duration-300 cursor-pointer shadow-md"
                            >
                                Transmit Allocation Inquiry &rarr;
                            </button>
                            
                            <p className="text-[10px] text-center text-[#9C9488] tracking-wider uppercase">
                                256-Bit Encrypted • Private Atelier Registration • Zero Spam Guarantee
                            </p>
                        </form>
                    ) : (
                        /* INBOUND CORRESPONDENCE DOSSIER (Client Requested Format) */
                        <div className="space-y-6 animate-fadeIn">
                            <div className="p-6 bg-white border border-[#1A1A1A]/15 shadow-sm">
                                <div className="border-b border-[#1A1A1A]/10 pb-4 mb-4 text-[11px] font-mono text-[#6B655C] space-y-1">
                                    <div className="flex justify-between items-center text-[#8C733E] font-medium">
                                        <span>BOROS SYLVANTE | INBOUND CORRESPONDENCE</span>
                                        <span>DOSSIER: {referenceId}</span>
                                    </div>
                                    <div>DATE: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
                                    <div className="font-semibold text-[#1A1A1A]">SUBJECT: {subjectText}</div>
                                </div>

                                <div className="font-serif text-sm sm:text-base tracking-wide leading-relaxed text-[#2A2724] whitespace-pre-line py-2">
                                    {defaultInboundLetter}
                                </div>

                                <div className="border-t border-[#1A1A1A]/10 pt-4 mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#6B655C]">
                                    <div>
                                        <p className="font-medium text-[#1A1A1A]">Private Client Desk</p>
                                        <p className="text-[11px]">Boros Sylvante Pvt. Ltd. — Of Rare Materials. By Hand.</p>
                                    </div>
                                    <button
                                        onClick={handleCopy}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#1A1A1A]/20 hover:border-[#1A1A1A] text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
                                    >
                                        {copied ? <HiOutlineCheck className="w-3.5 h-3.5 text-emerald-600" /> : <HiOutlineClipboardDocument className="w-3.5 h-3.5" />}
                                        <span>{copied ? "Copied" : "Copy Dossier"}</span>
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <a
                                    href={`https://wa.me/919401277393?text=${whatsappMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-3.5 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#8C733E] transition-colors flex items-center justify-center gap-2 text-center"
                                >
                                    <span>Open with Concierge on WhatsApp</span>
                                    <HiOutlineArrowTopRightOnSquare className="w-3.5 h-3.5" />
                                </a>

                                <button
                                    onClick={onClose}
                                    className="px-6 py-3.5 border border-[#1A1A1A]/20 hover:border-[#1A1A1A] text-xs uppercase tracking-[0.2em] text-[#1A1A1A] transition-colors cursor-pointer"
                                >
                                    Return to Creation
                                </button>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
