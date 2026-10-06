"use client";
import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { useProductStore } from "../_zustand/store";
import { ProductCartItemQuantity } from "@/components";
import { 
    HiCheck, 
    HiShieldCheck, 
    HiTruck, 
    HiSparkles, 
    HiArrowRight, 
    HiLockClosed,
    HiXMark,
    HiShoppingBag
} from "react-icons/hi2";

export default function CartPage() {
    const products = useProductStore((state) => state.products);
    const removeFromCart = useProductStore((state) => state.removeFromCart);
    const calculateTotals = useProductStore((state) => state.calculateTotals);

    // Calculate subtotal
    const subtotal = useMemo(() => {
        return products.reduce((sum, product) => {
            const price = product.price !== undefined ? product.price : (product.package || 0);
            return sum + (price * (product.quantity || 1));
        }, 0);
    }, [products]);

    // All orders get complimentary white-glove insured delivery
    const shipping = 0;
    const orderTotal = subtotal + shipping;

    if (products.length === 0) {
        return (
            <div className="bg-[#FAF8F5] min-h-[80vh] flex flex-col items-center justify-center px-4 py-24 text-center">
                <div className="w-20 h-20 rounded-full bg-white border border-[#8C733E]/30 flex items-center justify-center mb-6 shadow-sm">
                    <HiShoppingBag className="w-9 h-9 text-[#8C733E]" />
                </div>

                <p className="text-xs uppercase tracking-[0.3em] text-[#8C733E] font-medium mb-3">
                    Maison Boros Sylvante
                </p>
                <h1 className="text-3xl sm:text-5xl font-light tracking-wide text-[#1A1A1A] mb-4">
                    Your Shopping Bag is Empty
                </h1>
                <p className="text-[#6B655C] max-w-md mx-auto text-sm sm:text-base font-light mb-10 leading-relaxed">
                    No creations have been added to your folio. Explore our handcrafted Himalayan fashion pieces or clean-label functional wellness formulations.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
                    <Link
                        href="/shop/fashion"
                        className="px-8 py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#8C733E] transition-all duration-300 text-center shadow-sm"
                    >
                        Explore LAROSE Fashion
                    </Link>
                    <Link
                        href="/shop/wellness"
                        className="px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 text-center"
                    >
                        Explore Plant Wellness
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#FAF8F5] min-h-screen text-[#1A1A1A]">
            {/* Top Minimal Breadcrumb / Status */}
            <div className="border-b border-[#E8E4DE] bg-white/70 backdrop-blur-sm py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#6B655C]">
                        <span>Atelier Bag</span>
                        <span>/</span>
                        <span className="text-[#1A1A1A] font-medium">Review Creations</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-[#8C733E]">
                        <HiLockClosed className="w-3.5 h-3.5" />
                        <span className="text-[11px] uppercase tracking-wider hidden sm:inline">Insured Checkout Available</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="mb-10">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#8C733E] font-medium block mb-2">
                        Boros Sylvante Portfolio
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-light tracking-wide text-[#1A1A1A]">
                        Your Shopping Bag ({products.reduce((acc, p) => acc + (p.quantity || 1), 0)} {products.length === 1 ? 'Creation' : 'Creations'})
                    </h1>
                </div>

                <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                    
                    {/* Left Column: Product Cart List */}
                    <section className="lg:col-span-7">
                        <ul role="list" className="divide-y divide-[#E8E4DE] border-t border-b border-[#E8E4DE]">
                            {products.map((product) => {
                                const itemPrice = product.price !== undefined ? product.price : (product.package || 0);
                                return (
                                    <li key={product.id} className="py-6 sm:py-8 flex gap-6">
                                        {/* Product Thumbnail */}
                                        <div className="relative w-28 h-28 sm:w-36 sm:h-36 bg-white border border-[#E8E4DE] flex-shrink-0 overflow-hidden">
                                            <Image
                                                src={product.image || "/product_slingbag.png"}
                                                alt={product.name || "Boros Sylvante Creation"}
                                                fill
                                                className="object-cover object-center"
                                            />
                                        </div>

                                        {/* Product Details */}
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <div className="flex justify-between items-start gap-4">
                                                    <div>
                                                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C733E] font-medium block">
                                                            {product.brand || "Boros Sylvante Maison"}
                                                        </span>
                                                        <h2 className="text-base sm:text-lg font-medium text-[#1A1A1A] mt-0.5">
                                                            {product.name}
                                                        </h2>
                                                    </div>

                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            removeFromCart(product.id);
                                                            calculateTotals();
                                                        }}
                                                        className="p-1.5 text-[#9C9488] hover:text-red-700 transition-colors"
                                                        title="Remove creation from bag"
                                                    >
                                                        <HiXMark className="w-5 h-5" />
                                                    </button>
                                                </div>

                                                {product.size && (
                                                    <p className="text-xs text-[#6B655C] mt-1 tracking-wider uppercase">
                                                        Specification: <span className="text-[#1A1A1A] font-medium">{product.size}</span>
                                                    </p>
                                                )}

                                                <p className="text-sm sm:text-base font-medium text-[#8C733E] mt-2">
                                                    ₹{Number(itemPrice).toLocaleString('en-IN')}
                                                </p>
                                            </div>

                                            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E8E4DE]/60 mt-4">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-xs uppercase tracking-wider text-[#6B655C]">
                                                        Quantity:
                                                    </span>
                                                    <ProductCartItemQuantity
                                                        id={product.id}
                                                        startQuantity={product.quantity}
                                                    />
                                                </div>

                                                <div className="flex items-center gap-1.5 text-xs text-emerald-800">
                                                    <HiCheck className="w-4 h-4 text-emerald-600" />
                                                    <span className="text-[11px] uppercase tracking-wider font-medium">Atelier Reserved</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Continue Shopping Link */}
                        <div className="mt-8 flex items-center justify-between">
                            <Link
                                href="/shop"
                                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#6B655C] hover:text-[#1A1A1A] transition-colors font-medium"
                            >
                                <span>&larr; Discover More Creations</span>
                            </Link>
                            
                            <span className="text-xs text-[#9C9488]">
                                Insured consignment across India
                            </span>
                        </div>
                    </section>

                    {/* Right Column: Order Summary */}
                    <section className="mt-12 lg:mt-0 lg:col-span-5">
                        <div className="bg-white p-6 sm:p-8 border border-[#E8E4DE] shadow-[0_4px_24px_rgba(0,0,0,0.02)] sticky top-24 space-y-6">
                            <div className="border-b border-[#E8E4DE] pb-4">
                                <span className="text-[10px] tracking-[0.3em] uppercase text-[#8C733E] font-medium block">
                                    Summary
                                </span>
                                <h2 className="text-xl font-light tracking-wide text-[#1A1A1A]">
                                    Bag Overview
                                </h2>
                            </div>

                            <dl className="space-y-4 text-xs sm:text-sm">
                                <div className="flex items-center justify-between text-[#6B655C]">
                                    <span>Creations Subtotal</span>
                                    <span className="font-medium text-[#1A1A1A]">
                                        ₹{Number(subtotal).toLocaleString('en-IN')}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between text-[#6B655C]">
                                    <span>White-Glove Insured Delivery</span>
                                    <span className="font-medium text-emerald-700">
                                        Complimentary
                                    </span>
                                </div>

                                <div className="flex items-center justify-between text-[#6B655C]">
                                    <span>Applicable GST (18%)</span>
                                    <span className="font-medium text-emerald-700">
                                        Included
                                    </span>
                                </div>

                                <div className="flex items-baseline justify-between border-t border-[#E8E4DE] pt-4 text-[#1A1A1A]">
                                    <div>
                                        <span className="text-sm font-medium uppercase tracking-wider block">
                                            Total Value
                                        </span>
                                        <span className="text-[11px] text-[#9C9488]">
                                            All taxes and bespoke packaging included
                                        </span>
                                    </div>
                                    <span className="text-2xl font-light text-[#1A1A1A]">
                                        ₹{Number(orderTotal).toLocaleString('en-IN')}
                                    </span>
                                </div>
                            </dl>

                            <div className="pt-2">
                                <Link
                                    href="/checkout"
                                    className="w-full py-4 bg-[#1A1A1A] hover:bg-[#8C733E] text-white text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(0,0,0,0.1)] cursor-pointer"
                                >
                                    <span>Proceed to Atelier Checkout</span>
                                    <HiArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* Trust Assurances */}
                            <div className="border-t border-[#E8E4DE] pt-6 space-y-3 text-xs text-[#6B655C]">
                                <div className="flex items-center gap-3">
                                    <HiTruck className="w-4 h-4 text-[#8C733E] flex-shrink-0" />
                                    <span>Complimentary white-glove shipping on all creations.</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <HiSparkles className="w-4 h-4 text-[#8C733E] flex-shrink-0" />
                                    <span>Atelier certificate of authenticity & provenance enclosed.</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <HiShieldCheck className="w-4 h-4 text-[#8C733E] flex-shrink-0" />
                                    <span>7-day complimentary return or exchange for unworn fashion pieces.</span>
                                </div>
                            </div>

                            {/* Concierge Contact Note */}
                            <div className="bg-[#FAF8F5] p-4 border border-[#E8E4DE] text-center">
                                <p className="text-[11px] text-[#6B655C]">
                                    Need custom sizing or bespoke botanical consultation?
                                </p>
                                <a
                                    href="https://wa.me/919401277393"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-[#8C733E] font-medium hover:underline inline-block mt-1"
                                >
                                    Chat with Concierge on WhatsApp &rarr;
                                </a>
                            </div>

                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
