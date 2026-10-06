import Link from "next/link";
import { HiSparkles, HiArrowRight } from "react-icons/hi2";

export default function NotFoundPage() {
    return (
        <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] flex flex-col justify-between">
            {/* Top Minimal Maison Header */}
            <div className="border-b border-[#E8E4DE] bg-white/70 backdrop-blur-sm py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-[10px] tracking-[0.35em] uppercase text-[#8C733E] font-medium block">
                        Boros Sylvante Pvt. Ltd.
                    </span>
                    <span className="text-xs uppercase tracking-[0.25em] font-light text-[#1A1A1A]">
                        Regenerative Luxury & Wellness
                    </span>
                </div>
            </div>

            {/* Central Editorial 404 Content */}
            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex-1 flex flex-col justify-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border border-[#8C733E]/30 mx-auto mb-6 shadow-sm">
                    <HiSparkles className="w-8 h-8 text-[#8C733E]" />
                </div>

                <p className="text-xs uppercase tracking-[0.3em] text-[#8C733E] font-medium mb-3">
                    Error 404 &bull; Missing Chronicle
                </p>

                <h1 className="text-3xl sm:text-5xl font-light tracking-wide text-[#1A1A1A] mb-4">
                    The Chronicle Lies Beyond This Horizon
                </h1>

                <p className="text-[#6B655C] max-w-lg mx-auto text-sm sm:text-base font-light mb-10 leading-relaxed">
                    The creation, archive, or folio you are attempting to view is unavailable or has been archived by our curators. Allow us to redirect you to our active collections.
                </p>

                {/* Direct Portals */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10 w-full text-left">
                    <Link
                        href="/shop/fashion"
                        className="p-5 bg-white border border-[#E8E4DE] hover:border-[#8C733E] transition-all group shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
                    >
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C733E] block mb-1 font-medium">
                            Eco-Luxury Sartorial
                        </span>
                        <h3 className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#8C733E] transition-colors flex items-center justify-between">
                            <span>LAROSE Nepal Handloom & Bags</span>
                            <HiArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                        </h3>
                    </Link>

                    <Link
                        href="/shop/wellness"
                        className="p-5 bg-white border border-[#E8E4DE] hover:border-[#8C733E] transition-all group shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
                    >
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C733E] block mb-1 font-medium">
                            Clean-Label Botanicals
                        </span>
                        <h3 className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#8C733E] transition-colors flex items-center justify-between">
                            <span>Hemp Essence & TORQUE 11</span>
                            <HiArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                        </h3>
                    </Link>

                    <Link
                        href="/about-us"
                        className="p-5 bg-white border border-[#E8E4DE] hover:border-[#8C733E] transition-all group shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
                    >
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C733E] block mb-1 font-medium">
                            The Founder's Journey
                        </span>
                        <h3 className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#8C733E] transition-colors flex items-center justify-between">
                            <span>Bitupan Boro & The 9 Brands</span>
                            <HiArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                        </h3>
                    </Link>

                    <Link
                        href="/contact"
                        className="p-5 bg-white border border-[#E8E4DE] hover:border-[#8C733E] transition-all group shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
                    >
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C733em] block mb-1 font-medium">
                            Private Advisory
                        </span>
                        <h3 className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#8C733E] transition-colors flex items-center justify-between">
                            <span>Client Concierge Services</span>
                            <HiArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                        </h3>
                    </Link>
                </div>

                <div>
                    <Link
                        href="/"
                        className="inline-block px-10 py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#8C733E] transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                    >
                        Return to Maison Homepage
                    </Link>
                </div>
            </main>

            {/* Bottom Minimal Footer */}
            <div className="border-t border-[#E8E4DE] py-4 text-center">
                <p className="text-[11px] text-[#9C9488] tracking-wider uppercase">
                    &copy; {new Date().getFullYear()} Boros Sylvante Pvt. Ltd. &bull; Value Creation through Value Sharing
                </p>
            </div>
        </div>
    );
}