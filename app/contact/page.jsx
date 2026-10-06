"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineEnvelope, HiOutlineGlobeAlt, HiOutlineCheckCircle } from "react-icons/hi2";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "Collection Enquiry",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <main className="bg-[#FAF8F5] text-blackPrimary min-h-screen">
            {/* HERO */}
            <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 px-6 sm:px-10 max-w-5xl mx-auto text-center border-b border-[#E8E4DE]">
                <div className="h-10 w-[1px] bg-[#8C733E] mx-auto mb-8 opacity-70"></div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500] mb-4">
                    Contact
                </p>
                <h1 className="text-4xl sm:text-6xl font-[200] tracking-wide text-[#1A1A1A] leading-[1.15] mb-6">
                    BOROS SYLVANTE
                </h1>
                <p className="text-sm uppercase tracking-[0.3em] font-[400] text-[#8C733E] mb-6">
                    Of Rare Materials. By Hand.
                </p>
                <div className="w-16 h-[1px] bg-[#8C733E] mx-auto mb-8"></div>
                <p className="text-base sm:text-lg font-[300] text-[#1A1A1A]/85 leading-relaxed max-w-xl mx-auto">
                    For collection enquiries, private appointments, atelier commissions and House enquiries.
                </p>
            </section>

            {/* CONTACT DETAILS & FORM */}
            <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-5xl mx-auto border-b border-[#E8E4DE]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    
                    {/* LEFT: DIRECT HOUSE COORDINATES */}
                    <div className="md:col-span-5 space-y-8">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.25em] text-[#8C733E] font-[500] mb-2">
                                Direct Coordinates
                            </p>
                            <h2 className="text-2xl font-[200] text-[#1A1A1A] mb-4">
                                The House Registry
                            </h2>
                            <p className="text-sm font-[300] text-[#1A1A1A]/80 leading-relaxed mb-6">
                                All correspondence is received by the private client secretariat at Boros Sylvante Private Limited.
                            </p>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-[#E8E4DE]">
                            <div className="flex items-center gap-4">
                                <HiOutlineEnvelope className="text-xl text-[#8C733E] shrink-0" />
                                <div>
                                    <p className="text-[10px] uppercase tracking-wider text-[#6B655C]">Electronic Mail</p>
                                    <a 
                                        href="mailto:contact@borossylvante.com" 
                                        className="text-sm font-[300] text-[#1A1A1A] hover:text-[#8C733E] transition-colors"
                                    >
                                        contact@borossylvante.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <HiOutlineGlobeAlt className="text-xl text-[#8C733E] shrink-0" />
                                <div>
                                    <p className="text-[10px] uppercase tracking-wider text-[#6B655C]">Official Domain</p>
                                    <p className="text-sm font-[300] text-[#1A1A1A]">
                                        www.borossylvante.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-white border border-[#E8E4DE]">
                            <p className="text-[10px] uppercase tracking-[0.25em] text-[#8C733E] font-[500] mb-2">
                                Private Appointments
                            </p>
                            <p className="text-xs font-[300] text-[#1A1A1A]/80 leading-relaxed mb-4">
                                For made-to-measure considerations, numbered pieces, and atelier viewings.
                            </p>
                            <Link
                                href="/private-appointments"
                                className="inline-block text-xs uppercase tracking-[0.2em] font-[500] text-[#1A1A1A] hover:text-[#8C733E] transition-colors"
                            >
                                Schedule Appointment →
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT: CORRESPONDENCE FORM */}
                    <div className="md:col-span-7 bg-white p-8 sm:p-10 border border-[#E8E4DE]">
                        {submitted ? (
                            <div className="text-center py-12 space-y-6">
                                <HiOutlineCheckCircle className="text-4xl text-[#8C733E] mx-auto" />
                                <h3 className="text-2xl font-[200] text-[#1A1A1A]">
                                    Correspondence Sent
                                </h3>
                                <p className="text-sm font-[300] text-[#1A1A1A]/80 leading-relaxed max-w-md mx-auto">
                                    Thank you. A member of the House will write to you personally.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="border-b border-[#E8E4DE] pb-4 mb-6">
                                    <p className="text-xs uppercase tracking-[0.25em] text-[#8C733E] font-[500] mb-1">
                                        Send A Message
                                    </p>
                                    <p className="text-xs font-[300] text-[#6B655C]">
                                        Please share your enquiry and we will respond promptly.
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-[0.2em] font-[500] text-[#1A1A1A] mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 border border-[#E8E4DE] text-sm font-[300] focus:border-[#1A1A1A] focus:outline-none bg-[#FAF8F5]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-[0.2em] font-[500] text-[#1A1A1A] mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="name@domain.com"
                                        className="w-full px-4 py-3 border border-[#E8E4DE] text-sm font-[300] focus:border-[#1A1A1A] focus:outline-none bg-[#FAF8F5]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-[0.2em] font-[500] text-[#1A1A1A] mb-2">
                                        Nature of Enquiry *
                                    </label>
                                    <select
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full px-4 py-3 border border-[#E8E4DE] text-sm font-[300] focus:border-[#1A1A1A] focus:outline-none bg-[#FAF8F5]"
                                    >
                                        <option value="Collection Enquiry">Collection Enquiry</option>
                                        <option value="Private Appointments">Private Appointments</option>
                                        <option value="Atelier Commissions">Atelier Commissions (LA RRANI HOUSE / LAROSE)</option>
                                        <option value="House Enquiries">General House Enquiry</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-[0.2em] font-[500] text-[#1A1A1A] mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Your message or questions..."
                                        className="w-full px-4 py-3 border border-[#E8E4DE] text-sm font-[300] focus:border-[#1A1A1A] focus:outline-none bg-[#FAF8F5]"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.25em] font-[500] hover:bg-[#8C733E] transition-all cursor-pointer"
                                >
                                    Transmit Message
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </section>

            {/* DISCREET LINE */}
            <section className="py-16 px-6 text-center">
                <p className="text-xs tracking-[0.35em] uppercase text-[#6B655C] font-[400]">
                    For Those Who Notice.
                </p>
            </section>
        </main>
    );
}