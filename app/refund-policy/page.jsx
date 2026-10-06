import Link from "next/link";
import { HiShieldCheck, HiSparkles, HiArrowPath } from "react-icons/hi2";

export const metadata = {
    title: "Refund & Exchange Policy | Boros Sylvante | Atelier Standards",
    description: "Our policy regarding sartorial returns, artisan exchanges, and botanical formulation hygiene standards at Boros Sylvante Pvt. Ltd.",
};

const policyTabs = [
    { name: "Privacy Policy", href: "/privacy-policy", active: false },
    { name: "Refund & Exchange", href: "/refund-policy", active: true },
    { name: "Shipping & Delivery", href: "/shipping-policy", active: false },
    { name: "Terms of Service", href: "/terms-of-service", active: false },
];

export default function RefundPolicyPage() {
    return (
        <div className="bg-[#FAF8F5] text-[#1A1A1A] min-h-screen">
            {/* Header Section */}
            <div className="border-b border-[#E8E4DE] bg-white/70 backdrop-blur-sm py-16 sm:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-xs uppercase tracking-[0.35em] text-[#8C733E] font-medium block mb-4">
                        Atelier Codex &bull; Boros Sylvante
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-light tracking-wide text-[#1A1A1A] mb-6">
                        Refund & Exchange Policy
                    </h1>
                    <p className="text-sm sm:text-base text-[#6B655C] font-light max-w-2xl mx-auto leading-relaxed">
                        Every creation bearing the Boros Sylvante seal embodies uncompromising craftsmanship and botanical rigor. We stand firmly behind the excellence of our portfolio.
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
                    
                    {/* Section 1: Sartorial Fashion Collections */}
                    <section className="border-b border-[#E8E4DE] pb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-mono font-medium text-[#8C733E] uppercase tracking-wider">
                                Section 01
                            </span>
                            <h2 className="text-xl sm:text-2xl font-light text-[#1A1A1A] tracking-wide">
                                LAROSE Eco-Fashion & Sartorial Goods
                            </h2>
                        </div>
                        <p className="text-sm sm:text-base text-[#6B655C] font-light leading-relaxed mb-4">
                            We grant our patrons a <strong className="text-[#1A1A1A] font-medium">7-calendar-day inspection window</strong> from the date of physical delivery. If an item does not meet your expectations in sizing or fit, you may request an exchange or full refund under the following conditions:
                        </p>
                        <ul className="space-y-2 text-sm sm:text-base text-[#6B655C] font-light list-disc pl-5 leading-relaxed mb-6">
                            <li>The piece must be completely unworn, unwashed, and in unaltered condition.</li>
                            <li>All atelier security seals, brand labels, and numbered certificates of authenticity must remain intact.</li>
                            <li>The creation must be returned within its original bespoke packaging (protective mulberry dust bags and rigid presentation boxes).</li>
                        </ul>

                        <div className="p-4 bg-[#FAF8F5] border border-[#E8E4DE] flex items-center gap-3 text-xs text-[#6B655C]">
                            <HiSparkles className="w-5 h-5 text-[#8C733E] flex-shrink-0" />
                            <span>Complimentary reverse pickup is arranged by our insured courier partners for all approved sartorial returns across India.</span>
                        </div>
                    </section>

                    {/* Section 2: Botanical Wellness & Nutrition */}
                    <section className="border-b border-[#E8E4DE] pb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-mono font-medium text-[#8C733E] uppercase tracking-wider">
                                Section 02
                            </span>
                            <h2 className="text-xl sm:text-2xl font-light text-[#1A1A1A] tracking-wide">
                                Botanical Wellness & Ingestible Formulations
                            </h2>
                        </div>
                        <p className="text-sm sm:text-base text-[#6B655C] font-light leading-relaxed mb-4">
                            For products under <strong className="text-[#1A1A1A] font-medium">Hemp Essence, TORQUE 11, and WLEVO</strong> (including Himalayan Shilajit Resin, CBD Relixir+, and cold-pressed hemp protein formulations):
                        </p>
                        <ul className="space-y-2 text-sm sm:text-base text-[#6B655C] font-light list-disc pl-5 leading-relaxed mb-4">
                            <li>Due to stringent health, safety, and hygiene regulations, ingestible formulations cannot be returned once the vacuum seal or tamper-evident holographic closure has been breached.</li>
                            <li>In the rare event of transit damage, packaging defect, or seal compromise upon delivery, notify our concierge within 48 hours with photographic verification. An immediate replacement will be dispatched via express air courier.</li>
                        </ul>
                    </section>

                    {/* Section 3: Refund Reimbursement */}
                    <section className="border-b border-[#E8E4DE] pb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-mono font-medium text-[#8C733E] uppercase tracking-wider">
                                Section 03
                            </span>
                            <h2 className="text-xl sm:text-2xl font-light text-[#1A1A1A] tracking-wide">
                                Refund Processing & Timeline
                            </h2>
                        </div>
                        <p className="text-sm sm:text-base text-[#6B655C] font-light leading-relaxed mb-4">
                            Upon safe arrival at our central inspection facility, our quality assurance curators examine the returned consignment within 48 hours.
                        </p>
                        <p className="text-sm sm:text-base text-[#6B655C] font-light leading-relaxed">
                            Approved refunds are credited directly to your original payment method (UPI, RuPay, Credit Card, or Bank Account) within <strong className="text-[#1A1A1A] font-medium">3 to 5 business days</strong>. A formal settlement receipt will be dispatched to your email.
                        </p>
                    </section>

                    {/* Section 4: How to Initiate */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-mono font-medium text-[#8C733E] uppercase tracking-wider">
                                Section 04
                            </span>
                            <h2 className="text-xl sm:text-2xl font-light text-[#1A1A1A] tracking-wide">
                                Initiating an Atelier Return
                            </h2>
                        </div>
                        <p className="text-sm sm:text-base text-[#6B655C] font-light leading-relaxed mb-4">
                            To initiate an exchange or return, transmit your Order Dossier number and request details to:
                        </p>
                        <div className="flex flex-wrap gap-4 text-xs font-medium">
                            <a
                                href="mailto:returns@borosylvante.com"
                                className="px-5 py-2.5 bg-[#FAF8F5] border border-[#E8E4DE] text-[#1A1A1A] hover:border-[#8C733E] transition-colors"
                            >
                                returns@borosylvante.com
                            </a>
                            <a
                                href="https://wa.me/919401277393"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2.5 bg-[#FAF8F5] border border-[#E8E4DE] text-[#1A1A1A] hover:border-[#8C733E] transition-colors"
                            >
                                WhatsApp Concierge: +91 94012 77393
                            </a>
                        </div>
                    </section>

                </div>

                {/* Concierge Assistance Footer Card */}
                <div className="mt-12 bg-white p-8 border border-[#E8E4DE] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C733E] font-medium block mb-1">
                            Direct Atelier Support
                        </span>
                        <h3 className="text-base font-light text-[#1A1A1A]">
                            Need sizing advice before placing an order?
                        </h3>
                    </div>
                    <a
                        href="/contact"
                        className="px-6 py-3 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#8C733E] transition-all whitespace-nowrap"
                    >
                        Contact Concierge
                    </a>
                </div>
            </main>
        </div>
    );
}
