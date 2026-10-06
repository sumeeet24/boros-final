import React from "react";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export const metadata = {
    title: "The Connoisseur · Boros Sylvante",
    description: "Private previews, appointments and reservations for those who prefer to know what lies behind the piece.",
};

export default function TheConnoisseurPage() {
    return (
        <main className="bg-[#FAF8F5] text-blackPrimary min-h-screen">
            {/* HERO */}
            <section className="pt-28 pb-20 sm:pt-36 sm:pb-28 px-6 sm:px-10 max-w-5xl mx-auto text-center border-b border-[#E8E4DE]">
                <div className="h-10 w-[1px] bg-[#8C733E] mx-auto mb-8 opacity-70"></div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500] mb-4">
                    The Connoisseur
                </p>
                <h1 className="text-4xl sm:text-6xl font-[200] tracking-wide text-[#1A1A1A] leading-[1.15] mb-8">
                    For those who prefer <br />
                    <span className="italic font-[200] text-[#6B655C]">to know what lies behind the piece.</span>
                </h1>
                <div className="w-16 h-[1px] bg-[#8C733E] mx-auto mb-8"></div>
                <p className="text-base sm:text-lg font-[300] text-[#1A1A1A]/85 leading-relaxed max-w-2xl mx-auto mb-8">
                    Selected editions are offered privately before public release. Private appointments, commissions and reservations form part of the House's relationship with its clients.
                </p>
                <p className="text-sm uppercase tracking-[0.2em] font-[400] text-[#1A1A1A] max-w-xl mx-auto mb-10">
                    There is no ceremony. Only an understanding of material, of craft, and of what one chooses to keep.
                </p>
                <div>
                    <Link
                        href="/private-appointments"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.25em] font-[500] hover:bg-[#8C733E] transition-all"
                    >
                        <span>Request An Appointment</span>
                        <HiOutlineArrowLongRight className="text-sm" />
                    </Link>
                </div>
            </section>

            {/* THREE CLIENT PRIVILEGES */}
            <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-5xl mx-auto border-b border-[#E8E4DE]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 bg-white border border-[#E8E4DE]">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C733E] font-[500] block mb-2">
                            01 · Previews
                        </span>
                        <h3 className="text-xl font-[300] text-[#1A1A1A] mb-3">
                            Private Previews
                        </h3>
                        <p className="text-xs sm:text-sm font-[300] text-[#1A1A1A]/75 leading-relaxed">
                            Advance access to numbered editions and atelier silhouettes before public release.
                        </p>
                    </div>

                    <div className="p-8 bg-white border border-[#E8E4DE]">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C733E] font-[500] block mb-2">
                            02 · Atelier
                        </span>
                        <h3 className="text-xl font-[300] text-[#1A1A1A] mb-3">
                            Commissions
                        </h3>
                        <p className="text-xs sm:text-sm font-[300] text-[#1A1A1A]/75 leading-relaxed">
                            Bespoke cut and made-to-measure considerations under LA RRANI HOUSE atelier.
                        </p>
                    </div>

                    <div className="p-8 bg-white border border-[#E8E4DE]">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C733E] font-[500] block mb-2">
                            03 · Care
                        </span>
                        <h3 className="text-xl font-[300] text-[#1A1A1A] mb-3">
                            Lifetime Stewardship
                        </h3>
                        <p className="text-xs sm:text-sm font-[300] text-[#1A1A1A]/75 leading-relaxed">
                            Restorative repair and archival conditioning for rare hand-spun garments.
                        </p>
                    </div>
                </div>
            </section>

            {/* DISCREET LINE */}
            <section className="py-20 px-6 sm:px-10 text-center">
                <p className="text-xs tracking-[0.35em] uppercase text-[#6B655C] font-[400]">
                    For Those Who Notice.
                </p>
            </section>
        </main>
    );
}
