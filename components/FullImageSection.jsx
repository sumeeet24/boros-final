import Image from "next/image";
import Link from "next/link";
import { HiSparkles, HiArrowRight } from "react-icons/hi2";

export default function FullImageSection() {
    return (
        <section className="relative h-[650px] max-sm:h-[500px] w-full overflow-hidden border-t border-[#E8E4DE]">
            {/* Background Image */}
            <Image
                src="/himalayan-cta.png"
                alt="Himalayan mountain sanctuary at sunrise — The birthplace of Boros Sylvante botanicals"
                fill
                priority
                className="object-cover object-center scale-105 transform hover:scale-100 transition-transform duration-1000 ease-out"
            />

            {/* Editorial Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-[#141414]/20" />

            {/* Central Content */}
            <div className="absolute inset-0 flex flex-col justify-end items-center text-center px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 z-10">
                <div className="max-w-3xl mx-auto space-y-6">
                    <div className="inline-flex items-center gap-2 text-[#C5A869]">
                        <HiSparkles className="w-4 h-4" />
                        <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] font-medium">
                            An Invitation To Intentional Living
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-wide leading-tight font-serif">
                        Where Ancient Earth Harmonizes With Haute Couture
                    </h2>

                    <p className="text-xs sm:text-base text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
                        From wild-harvested Himalayan Shilajit and cold-pressed organic hemp nutrition to handwoven Nepal pit loom couture. Welcome to the house where value is shared across every hand.
                    </p>

                    {/* Action Portals */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            href="/shop/fashion"
                            className="w-full sm:w-auto px-8 py-4 bg-white text-[#1A1A1A] hover:bg-[#C5A869] hover:text-white text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                        >
                            <span>Explore LAROSE Fashion</span>
                            <HiArrowRight className="w-4 h-4" />
                        </Link>

                        <Link
                            href="/shop/wellness"
                            className="w-full sm:w-auto px-8 py-4 bg-[#141414]/70 backdrop-blur-sm border border-white/40 text-white hover:bg-white hover:text-[#1A1A1A] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <span>Discover Botanical Science</span>
                            <HiArrowRight className="w-4 h-4" />
                        </Link>

                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-8 py-4 border border-[#C5A869]/60 text-[#C5A869] hover:bg-[#C5A869] hover:text-[#141414] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <span>Private Concierge</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}