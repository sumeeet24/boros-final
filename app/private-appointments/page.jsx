"use client";

import React, { useState } from "react";
import { HiOutlineCheckCircle } from "react-icons/hi2";

export default function PrivateAppointmentsPage() {
    const [formData, setFormData] = useState({
        name: "",
        city: "",
        interest: "Apparel",
        contact: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <main className="bg-[#FAF8F5] text-blackPrimary min-h-screen">
            {/* HERO */}
            <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 px-6 sm:px-10 max-w-5xl mx-auto text-center border-b border-[#E8E4DE]">
                <div className="h-10 w-[1px] bg-[#8C733E] mx-auto mb-8 opacity-70"></div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500] mb-4">
                    Private Appointments
                </p>
                <h1 className="text-4xl sm:text-6xl font-[200] tracking-wide text-[#1A1A1A] leading-[1.15] mb-8">
                    Some pieces are better <br />
                    <span className="italic font-[200] text-[#6B655C]">understood in person.</span>
                </h1>
                <div className="w-16 h-[1px] bg-[#8C733E] mx-auto mb-8"></div>
                <p className="text-base sm:text-lg font-[300] text-[#1A1A1A]/85 leading-relaxed max-w-2xl mx-auto mb-6">
                    Appointments may be arranged for selected collections, numbered pieces, made-to-measure considerations and private commissions.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xs uppercase tracking-[0.25em] font-[400] text-[#6B655C]">
                    <span><strong className="text-[#1A1A1A] font-[500]">India:</strong> By arrangement</span>
                    <span className="hidden sm:inline">·</span>
                    <span><strong className="text-[#1A1A1A] font-[500]">International:</strong> Announced privately</span>
                </div>
            </section>

            {/* APPOINTMENT FORM SECTION */}
            <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-2xl mx-auto">
                <div className="bg-white p-8 sm:p-12 border border-[#E8E4DE]">
                    {submitted ? (
                        <div className="text-center py-12 space-y-6">
                            <HiOutlineCheckCircle className="text-4xl text-[#8C733E] mx-auto" />
                            <h2 className="text-2xl font-[200] text-[#1A1A1A]">
                                Request Received
                            </h2>
                            <p className="text-sm font-[300] text-[#1A1A1A]/80 leading-relaxed max-w-md mx-auto">
                                Thank you. A member of the House will write to you personally.
                            </p>
                            <div className="pt-8 border-t border-[#E8E4DE]">
                                <p className="text-xs tracking-[0.35em] uppercase text-[#6B655C] font-[400]">
                                    For Those Who Notice.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="border-b border-[#E8E4DE] pb-4 mb-6">
                                <p className="text-xs uppercase tracking-[0.25em] text-[#8C733E] font-[500] mb-1">
                                    Appointment Protocol
                                </p>
                                <p className="text-xs font-[300] text-[#6B655C]">
                                    Please provide your details below. Confidentiality is strictly observed.
                                </p>
                            </div>

                            {/* NAME */}
                            <div>
                                <label className="block text-xs uppercase tracking-[0.2em] font-[500] text-[#1A1A1A] mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Your Full Name"
                                    className="w-full px-4 py-3 border border-[#E8E4DE] text-sm font-[300] focus:border-[#1A1A1A] focus:outline-none bg-[#FAF8F5]"
                                />
                            </div>

                            {/* CITY */}
                            <div>
                                <label className="block text-xs uppercase tracking-[0.2em] font-[500] text-[#1A1A1A] mb-2">
                                    City *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.city}
                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                    placeholder="e.g. Mumbai, New Delhi, London, Dubai"
                                    className="w-full px-4 py-3 border border-[#E8E4DE] text-sm font-[300] focus:border-[#1A1A1A] focus:outline-none bg-[#FAF8F5]"
                                />
                            </div>

                            {/* AREA OF INTEREST */}
                            <div>
                                <label className="block text-xs uppercase tracking-[0.2em] font-[500] text-[#1A1A1A] mb-2">
                                    Area of Interest *
                                </label>
                                <select
                                    value={formData.interest}
                                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                                    className="w-full px-4 py-3 border border-[#E8E4DE] text-sm font-[300] focus:border-[#1A1A1A] focus:outline-none bg-[#FAF8F5]"
                                >
                                    <option value="Apparel">Apparel</option>
                                    <option value="Footwear">Footwear</option>
                                    <option value="Bags">Bags</option>
                                    <option value="Accessories">Accessories</option>
                                    <option value="Commission">Private Atelier Commission</option>
                                    <option value="LAROSE">LAROSE Couture</option>
                                </select>
                            </div>

                            {/* PREFERRED CONTACT */}
                            <div>
                                <label className="block text-xs uppercase tracking-[0.2em] font-[500] text-[#1A1A1A] mb-2">
                                    Preferred Contact (Email or WhatsApp) *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.contact}
                                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                                    placeholder="email@domain.com or +XX XXXX XXXXX"
                                    className="w-full px-4 py-3 border border-[#E8E4DE] text-sm font-[300] focus:border-[#1A1A1A] focus:outline-none bg-[#FAF8F5]"
                                />
                            </div>

                            {/* MESSAGE */}
                            <div>
                                <label className="block text-xs uppercase tracking-[0.2em] font-[500] text-[#1A1A1A] mb-2">
                                    Message (Optional)
                                </label>
                                <textarea
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Particular piece, silhouette, or tailoring requirement..."
                                    className="w-full px-4 py-3 border border-[#E8E4DE] text-sm font-[300] focus:border-[#1A1A1A] focus:outline-none bg-[#FAF8F5]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.25em] font-[500] hover:bg-[#8C733E] transition-all cursor-pointer"
                            >
                                Request An Appointment
                            </button>
                        </form>
                    )}
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
