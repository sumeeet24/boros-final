import Link from "next/link";
import { HiShieldCheck, HiLockClosed, HiEnvelope } from "react-icons/hi2";

export const metadata = {
    title: "Privacy Policy | Boros Sylvante | Atelier Codex",
    description: "Our commitment to client privacy, data confidentiality, and 256-bit encrypted security across Boros Sylvante Pvt. Ltd. operations.",
};

const policyTabs = [
    { name: "Privacy Policy", href: "/privacy-policy", active: true },
    { name: "Refund & Exchange", href: "/refund-policy", active: false },
    { name: "Shipping & Delivery", href: "/shipping-policy", active: false },
    { name: "Terms of Service", href: "/terms-of-service", active: false },
];

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-[#FAF8F5] text-[#1A1A1A] min-h-screen">
            {/* Header Section */}
            <div className="border-b border-[#E8E4DE] bg-white/70 backdrop-blur-sm py-16 sm:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-xs uppercase tracking-[0.35em] text-[#8C733E] font-medium block mb-4">
                        Atelier Codex &bull; Boros Sylvante
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-light tracking-wide text-[#1A1A1A] mb-6">
                        Client Privacy Policy
                    </h1>
                    <p className="text-sm sm:text-base text-[#6B655C] font-light max-w-2xl mx-auto leading-relaxed">
                        At Boros Sylvante Pvt. Ltd., we treat client confidentiality with the same reverence as our artisanal craftsmanship and regenerative botanical formulations.
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
                    
                    <section className="border-b border-[#E8E4DE] pb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-mono font-medium text-[#8C733E] uppercase tracking-wider">
                                Section 01
                            </span>
                            <h2 className="text-xl sm:text-2xl font-light text-[#1A1A1A] tracking-wide">
                                Philosophy of Data Stewardship
                            </h2>
                        </div>
                        <p className="text-sm sm:text-base text-[#6B655C] font-light leading-relaxed mb-4">
                            We believe privacy is an intrinsic dimension of true luxury. Boros Sylvante Pvt. Ltd. collects and handles client information exclusively to fulfill bespoke orders, provide white-glove concierge services, and uphold regulatory compliance for our functional wellness formulations.
                        </p>
                        <p className="text-sm sm:text-base text-[#6B655C] font-light leading-relaxed">
                            We never trade, monetize, or lease your personal identifiers to third-party brokers or advertisers.
                        </p>
                    </section>

                    <section className="border-b border-[#E8E4DE] pb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-mono font-medium text-[#8C733E] uppercase tracking-wider">
                                Section 02
                            </span>
                            <h2 className="text-xl sm:text-2xl font-light text-[#1A1A1A] tracking-wide">
                                Information Entrusted to The House
                            </h2>
                        </div>
                        <p className="text-sm sm:text-base text-[#6B655C] font-light leading-relaxed mb-4">
                            When commissioning an acquisition through our site or concierge, we record:
                        </p>
                        <ul className="space-y-2 text-sm sm:text-base text-[#6B655C] font-light list-disc pl-5 leading-relaxed">
                            <li><strong className="text-[#1A1A1A] font-medium">Patron Identity:</strong> Full legal name, billing and physical delivery addresses, phone/WhatsApp number, and email.</li>
                            <li><strong className="text-[#1A1A1A] font-medium">Payment Records:</strong> Encrypted transaction identifiers processed directly via certified banking gateways (UPI, Visa, Mastercard, RuPay). Raw card details or banking passwords are never stored on our servers.</li>
                            <li><strong className="text-[#1A1A1A] font-medium">Atelier Customizations:</strong> Sartorial sizing preferences, bespoke monogramming requests, and dietary consult notes for our botanical supplements.</li>
                        </ul>
                    </section>

                    <section className="border-b border-[#E8E4DE] pb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-mono font-medium text-[#8C733E] uppercase tracking-wider">
                                Section 03
                            </span>
                            <h2 className="text-xl sm:text-2xl font-light text-[#1A1A1A] tracking-wide">
                                Bank-Grade 256-Bit Cryptography
                            </h2>
                        </div>
                        <p className="text-sm sm:text-base text-[#6B655C] font-light leading-relaxed mb-4">
                            All electronic communications, cart transitions, and checkout dossiers are transmitted through Transport Layer Security (TLS 1.3) with 256-bit encryption. Our infrastructure complies with strict data residency requirements within the Republic of India.
                        </p>
                        <div className="p-4 bg-[#FAF8F5] border border-[#E8E4DE] flex items-center gap-3 text-xs text-[#6B655C]">
                            <HiLockClosed className="w-5 h-5 text-[#8C733E] flex-shrink-0" />
                            <span>Payment processing is governed by PCI-DSS Level 1 compliant gateways (Razorpay / Certified Banking Partners).</span>
                        </div>
                    </section>

                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-mono font-medium text-[#8C733E] uppercase tracking-wider">
                                Section 04
                            </span>
                            <h2 className="text-xl sm:text-2xl font-light text-[#1A1A1A] tracking-wide">
                                Patron Rights & Concierge Access
                            </h2>
                        </div>
                        <p className="text-sm sm:text-base text-[#6B655C] font-light leading-relaxed mb-4">
                            You possess the absolute right to inspect, amend, or demand permanent erasure of your client dossier at any time. Simply dispatch an official request to our Data Protection Officer at <code className="text-[#1A1A1A] font-mono text-xs bg-[#FAF8F5] px-2 py-0.5 border border-[#E8E4DE]">privacy@borosylvante.com</code>.
                        </p>
                        <p className="text-xs text-[#9C9488]">
                            Last revised: September 2026 &bull; Boros Sylvante Pvt. Ltd. Legal Directorate
                        </p>
                    </section>

                </div>

                {/* Concierge Assistance Footer Card */}
                <div className="mt-12 bg-white p-8 border border-[#E8E4DE] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C733E] font-medium block mb-1">
                            Legal & Compliance Queries
                        </span>
                        <h3 className="text-base font-light text-[#1A1A1A]">
                            Speak Directly with our Client Advisory Office
                        </h3>
                    </div>
                    <div className="flex gap-3">
                        <a
                            href="mailto:contact@borosylvante.com"
                            className="px-6 py-3 border border-[#1A1A1A] text-[#1A1A1A] text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#1A1A1A] hover:text-white transition-all"
                        >
                            Email Legal
                        </a>
                        <a
                            href="https://wa.me/919401277393"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#8C733E] transition-all"
                        >
                            WhatsApp Concierge
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}
