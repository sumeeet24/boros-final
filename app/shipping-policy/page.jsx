import Link from "next/link";
import { HiTruck, HiShieldCheck, HiSparkles } from "react-icons/hi2";

export const metadata = {
    title: "Shipping & White-Glove Delivery | Boros Sylvante | Atelier Logistics",
    description: "Our insured domestic and international logistics protocols, sustainable packaging, and dispatch timelines at Boros Sylvante Pvt. Ltd.",
};

const policyTabs = [
    { name: "Privacy Policy", href: "/privacy-policy", active: false },
    { name: "Refund & Exchange", href: "/refund-policy", active: false },
    { name: "Shipping & Delivery", href: "/shipping-policy", active: true },
    { name: "Terms of Service", href: "/terms-of-service", active: false },
];

export default function ShippingPolicyPage() {
    return (
        <div className="bg-[#FAF8F5] text-[#1A1A1A] min-h-screen">
            {/* Header Section */}
            <div className="border-b border-[#E8E4DE] bg-white/70 backdrop-blur-sm py-16 sm:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-xs uppercase tracking-[0.35em] text-[#8C733E] font-medium block mb-4">
                        Atelier Codex &bull; Boros Sylvante
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-light tracking-wide text-[#1A1A1A] mb-6">
                        White-Glove Shipping & Logistics
                    </h1>
                    <p className="text-sm sm:text-base text-[#6B655C] font-light max-w-2xl mx-auto leading-relaxed">
                        Every creation from the House of Boros Sylvante travels with full insurance, sustainable protective packaging, and meticulous provenance tracking.
                    </p>

                    {/* Policy Navigation Tabs */}
                    <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-4 border-t border-[#E8E4DE] pt-8">
                        {policyTabs.map((tab) => (
                            <Link
                                key={tab.name}
                                href={tab.href}
                                className={`px-5 py-2.5 text-xs uppercase tracking-[0.15em] transition-all ${
                                    tab.active
                                        ? "bg-[#1A1A1A] text-white font-medium"
                                        : "bg-white border border-[#E8E4DE] text-[#6B655C] hover:border-[#1A1A1A] hover:text-[#1A1A1A]"
                                }`}
                            >
                                {tab.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="space-y-12 bg-white p-8 sm:p-14 border border-[#E8E4DE] shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
                    
                    {/* Section 1: Dispatch Protocols */}
                    <section className="border-b border-[#E8E4DE] pb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-mono font-medium text-[#8C733E] uppercase tracking-wider">
                                Section 01
                            </span>
                            <h2 className="text-xl sm:text-2xl font-light text-[#1A1A1A] tracking-wide">
                                Atelier Preparation & Fulfillment
                            </h2>
                        </div>
                        <p className="text-sm sm:text-base text-[#6B655C] font-light leading-relaxed mb-4">
                            Because our creations are produced in limited batches—from wild Himalayan hemp textiles woven on manual Nepal looms to cold-extracted botanical extracts—every consignment undergoes a final quality inspection before leaving our fulfillment center.
                        </p>
                        <p className="text-sm sm:text-base text-[#6B655C] font-light leading-relaxed">
                            Orders are prepared and released into transit within <strong className="text-[#1A1A1A] font-medium">24 to 48 hours</strong> of authorization (excluding Sundays and national holidays).
                        </p>
                    </section>

                    {/* Section 2: Delivery Tiers & Rates */}
                    <section className="border-b border-[#E8E4DE] pb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-mono font-medium text-[#8C733E] uppercase tracking-wider">
                                Section 02
                            </span>
                            <h2 className="text-xl sm:text-2xl font-light text-[#1A1A1A] tracking-wide">
                                Delivery Tiers & Transit Timelines
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                            <div className="p-6 bg-[#FAF8F5] border border-[#E8E4DE]">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-sm font-medium uppercase tracking-wider text-[#1A1A1A]">
                                        Complimentary White-Glove
                                    </h3>
                                    <span className="text-xs font-semibold text-emerald-700 uppercase">₹0</span>
                                </div>
                                <p className="text-xs text-[#8C733E] mb-2 font-medium">3 to 5 business days across India</p>
                                <p className="text-xs text-[#6B655C] leading-relaxed">
                                    Available on all orders across India. Hand-packaged in custom biodegradable mulberry wrapping with the Boros Sylvante signature seal.
                                </p>
                            </div>

                            <div className="p-6 bg-[#FAF8F5] border border-[#E8E4DE]">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-sm font-medium uppercase tracking-wider text-[#1A1A1A]">
                                        Himalayan Air Priority
                                    </h3>
                                    <span className="text-xs font-semibold text-[#1A1A1A] uppercase">₹450</span>
                                </div>
                                <p className="text-xs text-[#8C733E] mb-2 font-medium">1 to 2 business days expedited transit</p>
                                <p className="text-xs text-[#6B655C] leading-relaxed">
                                    Expedited domestic air courier dispatch with priority atelier fulfillment and active tracking via our WhatsApp concierge desk.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Sustainable Packaging */}
                    <section className="border-b border-[#E8E4DE] pb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-mono font-medium text-[#8C733E] uppercase tracking-wider">
                                Section 03
                            </span>
                            <h2 className="text-xl sm:text-2xl font-light text-[#1A1A1A] tracking-wide">
                                Circular, Zero-Plastic Presentation
                            </h2>
                        </div>
                        <p className="text-sm sm:text-base text-[#6B655C] font-light leading-relaxed mb-4">
                            True luxury leaves no scar on the earth. Every packaging element used by Boros Sylvante is 100% plastic-free, biodegradable, or endlessly recyclable:
                        </p>
                        <ul className="space-y-2 text-sm sm:text-base text-[#6B655C] font-light list-disc pl-5 leading-relaxed">
                            <li>Handcrafted Nepalese Lokta and Mulberry paper wrapping.</li>
                            <li>Natural water-based inks and non-toxic plant starch adhesives.</li>
                            <li>Reusable raw organic cotton dust covers for all LAROSE bags and sartorial pieces.</li>
                            <li>Amber pharmaceutical-grade glass and recyclable tin closures for all wellness formulations.</li>
                        </ul>
                    </section>

                    {/* Section 4: Insured Transit Guarantee */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-mono font-medium text-[#8C733E] uppercase tracking-wider">
                                Section 04
                            </span>
                            <h2 className="text-xl sm:text-2xl font-light text-[#1A1A1A] tracking-wide">
                                100% Insured Consignment Guarantee
                            </h2>
                        </div>
                        <p className="text-sm sm:text-base text-[#6B655C] font-light leading-relaxed mb-4">
                            Every parcel dispatched from our warehouse carries comprehensive transit insurance against loss, theft, or physical damage. Once collected by our carrier, you will receive real-time SMS and email tracking credentials.
                        </p>
                        <p className="text-xs text-[#9C9488]">
                            For international shipping inquiries or diplomatic dispatch, please contact concierge@borosylvante.com.
                        </p>
                    </section>

                </div>

                {/* Concierge Assistance Footer Card */}
                <div className="mt-12 bg-white p-8 border border-[#E8E4DE] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C733E] font-medium block mb-1">
                            Consignment Tracking Concierge
                        </span>
                        <h3 className="text-base font-light text-[#1A1A1A]">
                            Need live status on an existing consignment?
                        </h3>
                    </div>
                    <a
                        href="https://wa.me/919401277393"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#8C733E] transition-all whitespace-nowrap"
                    >
                        Track via WhatsApp
                    </a>
                </div>
            </main>
        </div>
    );
}
