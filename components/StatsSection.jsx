import StatsContainer from "@/components/StatsContainer";
import { HiSparkles } from "react-icons/hi2";

const StatsSection = () => {
    return (
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-y border-[#E8E4DE]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 text-[#8C733E] mb-3">
                        <HiSparkles className="w-4 h-4" />
                        <span className="text-[10px] uppercase tracking-[0.35em] font-medium">
                            The Boros Sylvante Codex
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-light tracking-wide text-[#1A1A1A] leading-tight">
                        Rooted in Nature. Crafted by Master Looms. Trusted by the Discerning Few.
                    </h2>
                </div>
                
                <StatsContainer />
            </div>
        </section>
    );
};

export default StatsSection;