import Link from "next/link";

const HeaderMain = async () => {
    return (
        <header className="bg-[#FAF8F5] text-center border-b border-[#E8E4DE] py-6 px-8 max-md:hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-5">
                
                {/* BRAND SIGNATURE */}
                <Link href="/" className="flex flex-col items-center gap-1 group">
                    <span className="text-[#1A1A1A] text-3xl sm:text-4xl font-[300] tracking-[0.2em] group-hover:text-[#8C733E] transition-colors">
                        BOROS SYLVANTE
                    </span>
                    <span className="text-[#8C733E] text-[10px] tracking-[0.4em] uppercase font-[500]">
                        OF RARE MATERIALS. BY HAND.
                    </span>
                </Link>

                {/* ARCHITECTURAL MASTER NAVIGATION */}
                <nav className="flex items-center gap-7 text-xs uppercase tracking-[0.22em] font-[400] text-[#1A1A1A]/80">
                    <Link href="/the-house" className="hover:text-[#8C733E] transition-colors">
                        The House
                    </Link>
                    <Link href="/the-materials" className="hover:text-[#8C733E] transition-colors">
                        The Materials
                    </Link>
                    <Link href="/the-collection" className="hover:text-[#8C733E] transition-colors">
                        The Collection
                    </Link>
                    <Link href="/the-atelier" className="hover:text-[#8C733E] transition-colors">
                        The Atelier
                    </Link>
                    <Link href="/provenance" className="hover:text-[#8C733E] transition-colors">
                        Provenance
                    </Link>
                    <Link href="/the-archive" className="hover:text-[#8C733E] transition-colors">
                        The Archive
                    </Link>
                    <Link href="/journal" className="hover:text-[#8C733E] transition-colors">
                        Journal
                    </Link>
                    <Link href="/private-appointments" className="hover:text-[#8C733E] transition-colors">
                        Appointments
                    </Link>
                    <Link href="/contact" className="hover:text-[#8C733E] transition-colors">
                        Contact
                    </Link>
                </nav>

            </div>
        </header>
    );
};

export default HeaderMain;
