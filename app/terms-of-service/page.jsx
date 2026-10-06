import Link from "next/link";
import { HiShieldCheck, HiScale, HiSparkles } from "react-icons/hi2";

export const metadata = {
    title: "Terms of Service | Boros Sylvante | Atelier Governance",
    description: "Official terms and conditions governing acquisitions, artisanal crafts, and botanical wellness from Boros Sylvante Pvt. Ltd.",
};

const policyTabs = [
    { name: "Privacy Policy", href: "/privacy-policy", active: false },
    { name: "Refund & Exchange", href: "/refund-policy", active: false },
    { name: "Shipping & Delivery", href: "/shipping-policy", active: false },
    { name: "Terms of Service", href: "/terms-of-service", active: true },
];

export default function TermsOfServicePage() {
    return (
        <div className="bg-[#FAF8F5] text-[#1A1A1A] min-h-screen">
            {/* Header Section */}
            <div className="border-b border-[#E8E4DE] bg-white/70 backdrop-blur-sm py-16 sm:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-xs uppercase tracking-[0.35em] text-[#8C733E] font-medium block mb-4">
                        Atelier Codex &bull; Boros Sylvante
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-light tracking-wide text-[#1A1A1A] mb-6">
                        Terms of Service & Governance
                    </h1>
                    <p className="text-sm sm:text-base text-[#6B655C] font-light max-w-2xl mx-auto leading-relaxed">
                        These terms establish the covenant between our patrons and Boros Sylvante Pvt. Ltd., safeguarding the authenticity of our craftsmanship and botanical integrity.
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
                    
                    {/* Section 1: Corporate Identity */}
                    <section className="border-b border-[#E8E4DE] pb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-mono font-medium text-[#8C733E] uppercase tracking-wider">
                                Section 01
                            </span>
                            <h2 className="text-xl sm:text-2xl font-light text-[#1A1A1A] tracking-wide">
                                The Corporate House & Brand Portfolio
                            </h2>
                        </div>
                        <p className="text-sm sm:text-base text-[#6B655C] font-light leading-relaxed mb-4">
                            This digital maison is owned and operated by <strong className="text-[#1A1A1A] font-medium">Boros Sylvante Pvt. Ltd.</strong>, incorporated under the Companies Act of India, with executive offices in Assam, India.
                        </p>
                        <p className="text-sm sm:text-base text-[#6B655C] font-light leading-relaxed">
                            Boros Sylvante operates as a House of Purpose-Driven Brands comprising: <em>Hemp Essence, LAROSE, Boro Lino, Blues Boro, WLEVO, TORQUE 11, Vriddhi, Nirvana's Realm, and Sylvante Estates</em>. All commercial transactions, acquisitions, and service covenants on this website are executed under the legal governance of Boros Sylvante Pvt. Ltd.
                        </p>
                    </section>

                    {/* Section 2: Artisanal Nature of Creations */}
                    <section className="border-b border-[#E8E4DE] pb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-mono font-medium text-[#8C733E] uppercase tracking-wider">
                                Section 02
                            </span>
                            <h2 className="text-xl sm:text-2xl font-light text-[#1A1A1A] tracking-wide">
                                Artisanal Individuality & Natural Fibers
                            </h2>
                        </div>
                        <p className="text-sm sm:text-base text-[#6B655C] font-light leading-relaxed mb-4">
                            Our sartorial creations—under <strong className="text-[#1A1A1A] font-medium">LAROSE, Boro Lino, and Blues Boro</strong>—are woven by hand by master artisans using organic Himalayan wild hemp and untreated plant fibers.
                        </p>
                        <p className="text-sm sm:text-base text-[#6B655C] font-light leading-relaxed">
                            Slight variations in weave texture, slub, natural plant hue, and stitch tension are not imperfections; rather, they serve as the indelible signature of authentic manual craft and bespoke heritage.
                        </p>
                    </section>

                    {/* Section 3: Botanical Wellness Formulations */}
                    <section className="border-b border-[#E8E4DE] pb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-mono font-medium text-[#8C733E] uppercase tracking-wider">
                                Section 03
                            </span>
                            <h2 className="text-xl sm:text-2xl font-light text-[#1A1A1A] tracking-wide">
                                Botanical Compliance & Health Disclaimer
                            </h2>
                        </div>
                        <p className="text-sm sm:text-base text-[#6B655C] font-light leading-relaxed mb-4">
                            Wellness formulations under <strong className="text-[#1A1A1A] font-medium">Hemp Essence, TORQUE 11, and WLEVO</strong> are developed following traditional botanical wisdom validated through contemporary scientific extraction and third-party laboratory testing (including Eurofins and ISO-certified facilities).
                        </p>
                        <p className="text-sm sm:text-base text-[#6B655C] font-light leading-relaxed mb-4">
                            These products are not intended to diagnose, treat, cure, or prevent any medical disease. Patrons who are pregnant, nursing, taking prescription medications, or managing chronic conditions are advised to consult a qualified physician prior to starting any wellness ritual.
                        </p>
                    </section>

                    {/* Section 4: Intellectual Property */}
                    <section className="border-b border-[#E8E4DE] pb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-mono font-medium text-[#8C733E] uppercase tracking-wider">
                                Section 04
                            </span>
                            <h2 className="text-xl sm:text-2xl font-light text-[#1A1A1A] tracking-wide">
                                Intellectual Property & Trademarks
                            </h2>
                        </div>
                        <p className="text-sm sm:text-base text-[#6B655C] font-light leading-relaxed mb-4">
                            All brand monikers, insignia, textile designs, editorial photography, botanical formulations, and digital layouts are the exclusive intellectual property of Boros Sylvante Pvt. Ltd. Unauthorized reproduction, imitation, or commercial exploitation is strictly prohibited under international copyright and trademark treaties.
                        </p>
                    </section>

                    {/* Section 5: Jurisdiction */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-mono font-medium text-[#8C733E] uppercase tracking-wider">
                                Section 05
                            </span>
                            <h2 className="text-xl sm:text-2xl font-light text-[#1A1A1A] tracking-wide">
                                Governing Law & Arbitration
                            </h2>
                        </div>
                        <p className="text-sm sm:text-base text-[#6B655C] font-light leading-relaxed mb-4">
                            These terms shall be governed by and construed in accordance with the laws of the Republic of India. Any dispute arising out of or in connection with acquisitions from Boros Sylvante shall be subject to the exclusive jurisdiction of the competent courts in Guwahati, Assam, India.
                        </p>
                        <p className="text-xs text-[#9C9488]">
                            Last updated: September 2026 &bull; Boros Sylvante Pvt. Ltd. Corporate Secretariat
                        </p>
                    </section>

                </div>

                {/* Concierge Assistance Footer Card */}
                <div className="mt-12 bg-white p-8 border border-[#E8E4DE] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C733E] font-medium block mb-1">
                            Governance & Inquiries
                        </span>
                        <h3 className="text-base font-light text-[#1A1A1A]">
                            Questions regarding our corporate terms?
                        </h3>
                    </div>
                    <a
                        href="mailto:contact@borosylvante.com"
                        className="px-6 py-3 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#8C733E] transition-all whitespace-nowrap"
                    >
                        Contact Legal Office
                    </a>
                </div>
            </main>
        </div>
    );
}
