"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useProductStore } from "@/app/_zustand/store";
import { 
    HiCheck, 
    HiTrash, 
    HiLockClosed, 
    HiShieldCheck, 
    HiTruck, 
    HiSparkles,
    HiArrowLeft
} from "react-icons/hi2";

const deliveryMethods = [
    {
        id: "standard",
        title: "Complimentary White-Glove Insured Delivery",
        turnaround: "3–5 business days across India",
        price: 0,
        priceFormatted: "Complimentary",
        description: "Hand-packaged in biodegradable mulberry paper and sealed with the Boros Sylvante atelier wax seal."
    },
    {
        id: "express",
        title: "Himalayan Air Express Dispatch",
        turnaround: "1–2 business days priority transit",
        price: 450,
        priceFormatted: "₹450",
        description: "Expedited courier dispatch with priority atelier fulfillment and dedicated tracking concierge."
    },
];

const paymentMethods = [
    { 
        id: "upi", 
        title: "UPI (Google Pay, PhonePe, Paytm, BHIM)",
        subtitle: "Instant & zero transaction fee via QR or VPA" 
    },
    { 
        id: "cards", 
        title: "Credit / Debit Cards (Visa, Mastercard, RuPay, Amex)",
        subtitle: "Secure 256-bit encrypted gateway" 
    },
    { 
        id: "netbanking", 
        title: "Net Banking (All Major Indian Banks)",
        subtitle: "HDFC, ICICI, SBI, Axis, Kotak & 50+ banks" 
    },
    { 
        id: "concierge", 
        title: "Private Concierge Wire / Offline Payment",
        subtitle: "Direct atelier assistance for bespoke and corporate orders" 
    },
];

const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Delhi NCR", "Jammu and Kashmir", "Ladakh", "Chandigarh", "Puducherry"
];

export default function CheckoutPage() {
    const router = useRouter();
    const products = useProductStore((state) => state.products);
    const total = useProductStore((state) => state.total);
    const removeFromCart = useProductStore((state) => state.removeFromCart);
    const calculateTotals = useProductStore((state) => state.calculateTotals);

    const [selectedDelivery, setSelectedDelivery] = useState(deliveryMethods[0]);
    const [selectedPayment, setSelectedPayment] = useState("upi");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [wantsGiftWrap, setWantsGiftWrap] = useState(false);

    // Calculate totals
    const subtotal = products.reduce((sum, p) => {
        const itemPrice = p.price !== undefined ? p.price : (p.package || 0);
        return sum + (itemPrice * (p.quantity || 1));
    }, 0);

    const shippingCost = selectedDelivery.price;
    const finalTotal = subtotal + shippingCost;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        if (!data["email"] || !data["firstName"] || !data["lastName"] || !data["address"] || !data["city"] || !data["state"] || !data["postalCode"]) {
            alert("Please complete all required shipping dossier fields.");
            setIsSubmitting(false);
            return;
        }

        // Simulate seamless checkout processing
        setTimeout(() => {
            setIsSubmitting(false);
            router.push("/thank-you");
        }, 800);
    };

    if (products.length === 0) {
        return (
            <div className="min-h-[75vh] bg-[#FAF8F5] flex flex-col items-center justify-center px-4 py-20 text-center">
                <div className="w-16 h-16 rounded-full bg-[#E8E4DE]/50 flex items-center justify-center mb-6 text-[#8C733E]">
                    <HiSparkles className="w-8 h-8" />
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#8C733E] font-medium mb-3">
                    Maison Boros Sylvante
                </p>
                <h1 className="text-3xl sm:text-4xl font-light tracking-wide text-[#1A1A1A] mb-4">
                    Your Shopping Bag is Empty
                </h1>
                <p className="text-[#6B655C] max-w-md text-sm sm:text-base font-light mb-8 leading-relaxed">
                    You have not added any creations from our Fashion Universe or Regenerative Wellness Formulations yet.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/shop/fashion"
                        className="px-8 py-3.5 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#8C733E] transition-all"
                    >
                        Explore LAROSE Fashion
                    </Link>
                    <Link
                        href="/shop/wellness"
                        className="px-8 py-3.5 border border-[#1A1A1A] text-[#1A1A1A] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#1A1A1A] hover:text-white transition-all"
                    >
                        Explore Plant Wellness
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#FAF8F5] min-h-screen text-[#1A1A1A]">
            {/* Editorial Breadcrumb & Header */}
            <div className="border-b border-[#E8E4DE] bg-white/70 backdrop-blur-sm sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <Link 
                        href="/cart"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#6B655C] hover:text-[#1A1A1A] transition-colors"
                    >
                        <HiArrowLeft className="w-4 h-4" />
                        <span>Return to Bag</span>
                    </Link>
                    
                    <div className="text-center">
                        <span className="text-[10px] tracking-[0.35em] uppercase text-[#8C733E] block font-medium">
                            Boros Sylvante
                        </span>
                        <span className="text-xs uppercase tracking-[0.2em] font-light text-[#1A1A1A]">
                            Atelier Checkout
                        </span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-[#6B655C]">
                        <HiLockClosed className="w-3.5 h-3.5 text-[#8C733E]" />
                        <span className="hidden sm:inline tracking-wider uppercase text-[10px]">256-Bit Encrypted</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                <form onSubmit={handleSubmit} className="lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
                    
                    {/* Left Column: Dossier Information */}
                    <div className="lg:col-span-7 space-y-12">
                        
                        {/* Section 1: Contact Dossier */}
                        <div className="bg-white p-6 sm:p-8 border border-[#E8E4DE] shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E8E4DE]">
                                <div>
                                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#8C733E] font-medium block">
                                        Step 01
                                    </span>
                                    <h2 className="text-xl font-light tracking-wide text-[#1A1A1A]">
                                        Contact Information
                                    </h2>
                                </div>
                                <span className="text-xs text-[#8C733E] font-light">Client Dossier</span>
                            </div>

                            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-xs uppercase tracking-[0.15em] text-[#6B655C] mb-1.5 font-medium">
                                        Email Address <span className="text-red-700">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="e.g. client@domain.com"
                                        className="w-full h-11 px-3.5 bg-[#FAF8F5] border border-[#E8E4DE] text-sm text-[#1A1A1A] placeholder-[#9C9488] focus:outline-none focus:border-[#8C733E] focus:bg-white transition-all"
                                    />
                                    <p className="mt-1 text-[11px] text-[#9C9488]">
                                        Provenance certificate and courier dispatch tracking will be sent here.
                                    </p>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="phone" className="block text-xs uppercase tracking-[0.15em] text-[#6B655C] mb-1.5 font-medium">
                                        Phone / Mobile <span className="text-red-700">*</span>
                                    </label>
                                    <div className="flex">
                                        <span className="inline-flex items-center px-3 border border-r-0 border-[#E8E4DE] bg-[#F3F0EB] text-[#6B655C] text-xs">
                                            +91
                                        </span>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            placeholder="98765 43210"
                                            className="w-full h-11 px-3.5 bg-[#FAF8F5] border border-[#E8E4DE] text-sm text-[#1A1A1A] placeholder-[#9C9488] focus:outline-none focus:border-[#8C733E] focus:bg-white transition-all"
                                        />
                                    </div>
                                    <p className="mt-1 text-[11px] text-[#9C9488]">
                                        Used strictly for delivery confirmation and concierge updates.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Insured Delivery Destination */}
                        <div className="bg-white p-6 sm:p-8 border border-[#E8E4DE] shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E8E4DE]">
                                <div>
                                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#8C733E] font-medium block">
                                        Step 02
                                    </span>
                                    <h2 className="text-xl font-light tracking-wide text-[#1A1A1A]">
                                        Insured Delivery Destination
                                    </h2>
                                </div>
                                <span className="text-xs text-[#8C733E] font-light">India Shipping</span>
                            </div>

                            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-xs uppercase tracking-[0.15em] text-[#6B655C] mb-1.5 font-medium">
                                        First Name <span className="text-red-700">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        required
                                        placeholder="e.g. Arup"
                                        className="w-full h-11 px-3.5 bg-[#FAF8F5] border border-[#E8E4DE] text-sm text-[#1A1A1A] placeholder-[#9C9488] focus:outline-none focus:border-[#8C733E] focus:bg-white transition-all"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="lastName" className="block text-xs uppercase tracking-[0.15em] text-[#6B655C] mb-1.5 font-medium">
                                        Last Name <span className="text-red-700">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        required
                                        placeholder="e.g. Hazarika"
                                        className="w-full h-11 px-3.5 bg-[#FAF8F5] border border-[#E8E4DE] text-sm text-[#1A1A1A] placeholder-[#9C9488] focus:outline-none focus:border-[#8C733E] focus:bg-white transition-all"
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="company" className="block text-xs uppercase tracking-[0.15em] text-[#6B655C] mb-1.5 font-medium">
                                        Company / Estate <span className="text-xs text-[#9C9488] font-normal">(Optional)</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        placeholder="e.g. Sylvante Holdings"
                                        className="w-full h-11 px-3.5 bg-[#FAF8F5] border border-[#E8E4DE] text-sm text-[#1A1A1A] placeholder-[#9C9488] focus:outline-none focus:border-[#8C733E] focus:bg-white transition-all"
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="address" className="block text-xs uppercase tracking-[0.15em] text-[#6B655C] mb-1.5 font-medium">
                                        Street Address & Residence <span className="text-red-700">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        required
                                        placeholder="House number, building name, street name"
                                        className="w-full h-11 px-3.5 bg-[#FAF8F5] border border-[#E8E4DE] text-sm text-[#1A1A1A] placeholder-[#9C9488] focus:outline-none focus:border-[#8C733E] focus:bg-white transition-all"
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="apartment" className="block text-xs uppercase tracking-[0.15em] text-[#6B655C] mb-1.5 font-medium">
                                        Apartment, Suite, Floor <span className="text-xs text-[#9C9488] font-normal">(Optional)</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="apartment"
                                        name="apartment"
                                        placeholder="Apartment, suite, unit, floor"
                                        className="w-full h-11 px-3.5 bg-[#FAF8F5] border border-[#E8E4DE] text-sm text-[#1A1A1A] placeholder-[#9C9488] focus:outline-none focus:border-[#8C733E] focus:bg-white transition-all"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="city" className="block text-xs uppercase tracking-[0.15em] text-[#6B655C] mb-1.5 font-medium">
                                        City <span className="text-red-700">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        required
                                        placeholder="City"
                                        className="w-full h-11 px-3.5 bg-[#FAF8F5] border border-[#E8E4DE] text-sm text-[#1A1A1A] placeholder-[#9C9488] focus:outline-none focus:border-[#8C733E] focus:bg-white transition-all"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="state" className="block text-xs uppercase tracking-[0.15em] text-[#6B655C] mb-1.5 font-medium">
                                        State / Territory <span className="text-red-700">*</span>
                                    </label>
                                    <select
                                        id="state"
                                        name="state"
                                        required
                                        defaultValue="Assam"
                                        className="w-full h-11 px-3.5 bg-[#FAF8F5] border border-[#E8E4DE] text-sm text-[#1A1A1A] focus:outline-none focus:border-[#8C733E] focus:bg-white transition-all"
                                    >
                                        {indianStates.map((st) => (
                                            <option key={st} value={st}>{st}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="postalCode" className="block text-xs uppercase tracking-[0.15em] text-[#6B655C] mb-1.5 font-medium">
                                        PIN Code <span className="text-red-700">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="postalCode"
                                        name="postalCode"
                                        required
                                        placeholder="e.g. 781001"
                                        maxLength={6}
                                        className="w-full h-11 px-3.5 bg-[#FAF8F5] border border-[#E8E4DE] text-sm text-[#1A1A1A] placeholder-[#9C9488] focus:outline-none focus:border-[#8C733E] focus:bg-white transition-all"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="country" className="block text-xs uppercase tracking-[0.15em] text-[#6B655C] mb-1.5 font-medium">
                                        Country / Region
                                    </label>
                                    <input
                                        type="text"
                                        id="country"
                                        name="country"
                                        disabled
                                        value="India (Bharat)"
                                        className="w-full h-11 px-3.5 bg-[#F3F0EB] border border-[#E8E4DE] text-sm text-[#6B655C] cursor-not-allowed"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Section 3: White-Glove Logistics Method */}
                        <div className="bg-white p-6 sm:p-8 border border-[#E8E4DE] shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E8E4DE]">
                                <div>
                                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#8C733E] font-medium block">
                                        Step 03
                                    </span>
                                    <h2 className="text-xl font-light tracking-wide text-[#1A1A1A]">
                                        White-Glove Logistics
                                    </h2>
                                </div>
                                <span className="text-xs text-[#8C733E] font-light">Insured Transit</span>
                            </div>

                            <div className="space-y-3">
                                {deliveryMethods.map((method) => {
                                    const isSelected = selectedDelivery.id === method.id;
                                    return (
                                        <div
                                            key={method.id}
                                            onClick={() => setSelectedDelivery(method)}
                                            className={`cursor-pointer p-4 sm:p-5 border transition-all flex items-start justify-between ${
                                                isSelected
                                                    ? "border-[#8C733E] bg-[#FAF8F5] ring-1 ring-[#8C733E]"
                                                    : "border-[#E8E4DE] hover:border-[#8C733E]/50"
                                            }`}
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className={`w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center ${
                                                    isSelected ? "border-[#8C733E] bg-[#8C733E]" : "border-[#9C9488]"
                                                }`}>
                                                    {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-[#1A1A1A]">
                                                        {method.title}
                                                    </p>
                                                    <p className="text-xs text-[#6B655C] mt-0.5">
                                                        {method.turnaround}
                                                    </p>
                                                    <p className="text-[11px] text-[#9C9488] mt-1.5">
                                                        {method.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <span className="text-xs uppercase tracking-wider font-semibold text-[#8C733E] whitespace-nowrap ml-4">
                                                {method.priceFormatted}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Gift & Atelier Packaging Option */}
                            <div className="mt-6 pt-6 border-t border-[#E8E4DE]">
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={wantsGiftWrap}
                                        onChange={(e) => setWantsGiftWrap(e.target.checked)}
                                        className="w-4 h-4 mt-0.5 rounded border-[#E8E4DE] text-[#8C733E] focus:ring-[#8C733E]"
                                    />
                                    <div>
                                        <span className="text-xs uppercase tracking-[0.1em] font-medium text-[#1A1A1A]">
                                            Complimentary Atelier Gift Presentation
                                        </span>
                                        <p className="text-xs text-[#6B655C] mt-0.5">
                                            Includes hand-tied raw silk ribbon, wax seal emblem, and a bespoke handwritten parchment card.
                                        </p>
                                    </div>
                                </label>

                                {wantsGiftWrap && (
                                    <div className="mt-4 pl-7">
                                        <label htmlFor="giftNote" className="block text-xs uppercase tracking-[0.1em] text-[#6B655C] mb-1">
                                            Handwritten Note Inscription
                                        </label>
                                        <textarea
                                            id="giftNote"
                                            name="giftNote"
                                            rows={3}
                                            placeholder="Write your personal message for the recipient..."
                                            className="w-full p-3 bg-[#FAF8F5] border border-[#E8E4DE] text-xs text-[#1A1A1A] placeholder-[#9C9488] focus:outline-none focus:border-[#8C733E]"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Section 4: Payment Protocol */}
                        <div className="bg-white p-6 sm:p-8 border border-[#E8E4DE] shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E8E4DE]">
                                <div>
                                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#8C733E] font-medium block">
                                        Step 04
                                    </span>
                                    <h2 className="text-xl font-light tracking-wide text-[#1A1A1A]">
                                        Payment Protocol
                                    </h2>
                                </div>
                                <span className="text-xs text-[#8C733E] font-light">Secure Settlement</span>
                            </div>

                            <div className="space-y-3">
                                {paymentMethods.map((method) => {
                                    const isSelected = selectedPayment === method.id;
                                    return (
                                        <div
                                            key={method.id}
                                            onClick={() => setSelectedPayment(method.id)}
                                            className={`cursor-pointer p-4 border transition-all flex items-center justify-between ${
                                                isSelected
                                                    ? "border-[#8C733E] bg-[#FAF8F5] ring-1 ring-[#8C733E]"
                                                    : "border-[#E8E4DE] hover:border-[#8C733E]/50"
                                            }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                                    isSelected ? "border-[#8C733E] bg-[#8C733E]" : "border-[#9C9488]"
                                                }`}>
                                                    {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-[#1A1A1A]">
                                                        {method.title}
                                                    </p>
                                                    <p className="text-xs text-[#6B655C]">
                                                        {method.subtitle}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-6 p-4 bg-[#F3F0EB]/60 border border-[#E8E4DE] text-xs text-[#6B655C] flex items-start gap-3">
                                <HiShieldCheck className="w-5 h-5 text-[#8C733E] flex-shrink-0 mt-0.5" />
                                <div className="leading-relaxed">
                                    <strong className="text-[#1A1A1A] font-medium">Bank-Grade 256-Bit SSL Protection:</strong> Your financial details are never stored on our servers. Upon authorization, you will be seamlessly connected to Razorpay’s encrypted Indian banking gateway to finalize your payment securely.
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Order Dossier & Confirmation */}
                    <div className="lg:col-span-5 mt-10 lg:mt-0">
                        <div className="sticky top-24 space-y-6">
                            
                            <div className="bg-white p-6 sm:p-8 border border-[#E8E4DE] shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
                                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E8E4DE]">
                                    <h2 className="text-lg font-light tracking-wide text-[#1A1A1A]">
                                        Order Dossier
                                    </h2>
                                    <span className="text-xs text-[#8C733E] uppercase tracking-wider font-medium">
                                        {products.reduce((acc, p) => acc + (p.quantity || 1), 0)} Pieces
                                    </span>
                                </div>

                                {/* Product List */}
                                <ul className="divide-y divide-[#E8E4DE] max-h-[360px] overflow-y-auto pr-2">
                                    {products.map((item) => {
                                        const itemPrice = item.price !== undefined ? item.price : (item.package || 0);
                                        return (
                                            <li key={item.id} className="py-4 flex gap-4 items-center">
                                                <div className="relative w-16 h-16 bg-[#FAF8F5] border border-[#E8E4DE] flex-shrink-0 overflow-hidden">
                                                    <Image
                                                        src={item.image || "/product_slingbag.png"}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover object-center"
                                                    />
                                                    <span className="absolute -top-1.5 -right-1.5 bg-[#1A1A1A] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-medium">
                                                        {item.quantity}
                                                    </span>
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-xs sm:text-sm font-medium text-[#1A1A1A] truncate">
                                                        {item.name}
                                                    </h3>
                                                    {item.size && (
                                                        <p className="text-[11px] text-[#6B655C] uppercase tracking-wider mt-0.5">
                                                            Specification: {item.size}
                                                        </p>
                                                    )}
                                                    <p className="text-xs text-[#8C733E] font-medium mt-1">
                                                        ₹{Number(itemPrice).toLocaleString('en-IN')}
                                                    </p>
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        removeFromCart(item.id);
                                                        calculateTotals();
                                                    }}
                                                    className="p-1 text-[#9C9488] hover:text-red-700 transition-colors"
                                                    title="Remove from dossier"
                                                >
                                                    <HiTrash className="w-4 h-4" />
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>

                                {/* Financial Calculations */}
                                <dl className="mt-6 pt-6 border-t border-[#E8E4DE] space-y-3 text-xs sm:text-sm">
                                    <div className="flex justify-between text-[#6B655C]">
                                        <span>Creations Subtotal</span>
                                        <span className="text-[#1A1A1A] font-medium">
                                            ₹{Number(subtotal).toLocaleString('en-IN')}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-[#6B655C]">
                                        <span>White-Glove Insured Logistics</span>
                                        <span className={shippingCost === 0 ? "text-emerald-700 font-medium" : "text-[#1A1A1A] font-medium"}>
                                            {selectedDelivery.priceFormatted}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-[#6B655C]">
                                        <span>Goods & Services Tax (GST)</span>
                                        <span className="text-emerald-700 font-medium text-xs">
                                            Inclusive (Zero Surcharge)
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-baseline pt-4 border-t border-[#E8E4DE] text-[#1A1A1A]">
                                        <div>
                                            <span className="text-sm uppercase tracking-[0.1em] font-medium block">
                                                Total Atelier Value
                                            </span>
                                            <span className="text-[11px] text-[#9C9488]">
                                                All applicable import duties and GST included
                                            </span>
                                        </div>
                                        <span className="text-2xl font-light tracking-wide text-[#1A1A1A]">
                                            ₹{Number(finalTotal).toLocaleString('en-IN')}
                                        </span>
                                    </div>
                                </dl>

                                {/* Submit Order Button */}
                                <div className="mt-8">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-[#1A1A1A] hover:bg-[#8C733E] text-white text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(0,0,0,0.1)] disabled:opacity-50 cursor-pointer"
                                    >
                                        <HiLockClosed className="w-4 h-4 text-white/80" />
                                        <span>{isSubmitting ? "Transmitting Dossier..." : "Confirm & Authorize Order"}</span>
                                    </button>
                                    <p className="text-[11px] text-[#9C9488] text-center mt-3 leading-relaxed">
                                        By confirming, you agree to the Boros Sylvante Terms of Service and Atelier Provenance Standards.
                                    </p>
                                </div>
                            </div>

                            {/* Trust Cards */}
                            <div className="bg-white p-6 border border-[#E8E4DE] text-xs text-[#6B655C] space-y-3">
                                <div className="flex items-center gap-3">
                                    <HiTruck className="w-4 h-4 text-[#8C733E] flex-shrink-0" />
                                    <span>Insured white-glove transport with dedicated consignment tracking.</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <HiSparkles className="w-4 h-4 text-[#8C733E] flex-shrink-0" />
                                    <span>Numbered certificate of authenticity and provenance dossier enclosed.</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <HiShieldCheck className="w-4 h-4 text-[#8C733E] flex-shrink-0" />
                                    <span>7-day complimentary return or exchange for unworn sartorial creations.</span>
                                </div>
                            </div>

                            {/* Concierge Assistance Quick Card */}
                            <div className="p-5 border border-[#8C733E]/30 bg-[#FAF8F5] text-center">
                                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C733E] font-medium block mb-1">
                                    Need Immediate Concierge Assistance?
                                </span>
                                <p className="text-xs text-[#6B655C] mb-3">
                                    Direct WhatsApp connection to our private client advisory team.
                                </p>
                                <a
                                    href="https://wa.me/919401277393"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs text-[#1A1A1A] font-medium hover:text-[#8C733E] transition-colors border-b border-[#1A1A1A]/30 pb-0.5"
                                >
                                    <span>Connect with Concierge (+91 94012 77393)</span>
                                </a>
                            </div>

                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
}