import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#FAF8F5] text-[#1A1A1A] border-t border-[#E8E4DE] pt-20 pb-16">
            <div className="max-w-7xl mx-auto px-6 sm:px-10">
                
                {/* 1. FUTURE EXPRESSIONS SECTION (DEVELOPER MASTER LINES 283-289) */}
                <div className="border-b border-[#E8E4DE] pb-16 mb-16">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C733E] font-[500] mb-3">
                        The House · Future Expressions
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-[200] tracking-wide text-[#1A1A1A] mb-4">
                        Extending the Philosophy Beyond the Atelier
                    </h3>
                    <p className="text-xs sm:text-sm font-[300] text-[#6B655C] max-w-2xl leading-relaxed mb-8">
                        Boros Sylvante is developing a small number of future expressions that extend its philosophy beyond the atelier. These remain separate ventures. The fashion House stays devoted to apparel, footwear, bags and accessories.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-[#E8E4DE]">
                            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C733E] font-[500] block mb-1">
                                Future Studio
                            </span>
                            <h4 className="text-lg font-[300] tracking-wide text-[#1A1A1A] mb-2">
                                NIRVANA'S REALM
                            </h4>
                            <p className="text-xs font-[300] text-[#1A1A1A]/70 leading-relaxed mb-4">
                                A future studio for mental wellbeing, frequency therapy and restorative experience.
                            </p>
                            <Link href="/future-expressions#nirvanas-realm" className="text-[11px] uppercase tracking-[0.2em] font-[500] text-[#1A1A1A] hover:text-[#8C733E] transition-colors">
                                Discover Studio &rarr;
                            </Link>
                        </div>

                        <div className="p-6 bg-white border border-[#E8E4DE]">
                            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C733E] font-[500] block mb-1">
                                Future Hospitality
                            </span>
                            <h4 className="text-lg font-[300] tracking-wide text-[#1A1A1A] mb-2">
                                SYLVANTE ESTATES
                            </h4>
                            <p className="text-xs font-[300] text-[#1A1A1A]/70 leading-relaxed mb-4">
                                A future hospitality expression shaped by nature, architecture, privacy and considered experience.
                            </p>
                            <Link href="/future-expressions#sylvante-estates" className="text-[11px] uppercase tracking-[0.2em] font-[500] text-[#1A1A1A] hover:text-[#8C733E] transition-colors">
                                Discover Estates &rarr;
                            </Link>
                        </div>
                    </div>
                </div>

                {/* 2. THE HOUSE FOOTER NAVIGATION (DEVELOPER MASTER LINES 290-295) */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-[#E8E4DE]">
                    <div>
                        <span className="text-2xl font-[300] tracking-[0.18em] text-[#1A1A1A] block">
                            BOROS SYLVANTE
                        </span>
                        <span className="text-xs uppercase tracking-[0.35em] text-[#8C733E] font-[500] mt-1 block">
                            OF RARE MATERIALS. BY HAND.
                        </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs uppercase tracking-[0.2em] font-[400] text-[#1A1A1A]/80">
                        <Link href="/the-house" className="hover:text-[#8C733E] transition-colors">The House</Link>
                        <Link href="/the-materials" className="hover:text-[#8C733E] transition-colors">Materials</Link>
                        <Link href="/the-collection" className="hover:text-[#8C733E] transition-colors">Collection</Link>
                        <Link href="/the-atelier" className="hover:text-[#8C733E] transition-colors">Atelier</Link>
                        <Link href="/provenance" className="hover:text-[#8C733E] transition-colors">Provenance</Link>
                        <Link href="/the-archive" className="hover:text-[#8C733E] transition-colors">Archive</Link>
                        <Link href="/journal" className="hover:text-[#8C733E] transition-colors">Journal</Link>
                        <Link href="/private-appointments" className="hover:text-[#8C733E] transition-colors">Appointments</Link>
                        <a href="https://instagram.com/laroseluxeindia" target="_blank" rel="noopener noreferrer" className="hover:text-[#8C733E] transition-colors">Instagram</a>
                        <Link href="/contact" className="hover:text-[#8C733E] transition-colors">Contact</Link>
                    </div>
                </div>

                {/* 3. LEGAL, COPYRIGHT & DISCREET CLOSING LINE (DEVELOPER MASTER LINES 295-298) */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-[300] text-[#6B655C]">
                    <p className="tracking-wider">
                        © BOROS SYLVANTE PRIVATE LIMITED
                    </p>

                    <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider">
                        <Link href="/privacy-policy" className="hover:text-[#1A1A1A]">Privacy Policy</Link>
                        <span>·</span>
                        <Link href="/refund-policy" className="hover:text-[#1A1A1A]">Refund Policy</Link>
                        <span>·</span>
                        <Link href="/shipping-policy" className="hover:text-[#1A1A1A]">Shipping Policy</Link>
                        <span>·</span>
                        <Link href="/terms-of-service" className="hover:text-[#1A1A1A]">Terms of Service</Link>
                    </div>

                    <p className="text-[11px] uppercase tracking-[0.3em] text-[#8C733E] font-[400] italic">
                        For Those Who Notice.
                    </p>
                </div>

            </div>
        </footer>
    );
}
