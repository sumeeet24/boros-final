import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export const metadata = {
    title: "Universes & Categories | Boros Sylvante | The Maison",
    description: "Explore the distinct houses and product universes of Boros Sylvante: from LAROSE eco-luxury couture to TORQUE 11 Himalayan Shilajit and Hemp Essence plant nutrition.",
};

const categories = [
    {
        title: "LAROSE — Eco-Luxury Accessories",
        subtitle: "Artisan Handwoven Hemp",
        description: "Sculptural chest bags, totes, and travel essentials handcrafted from 100% wild Himalayan hemp by master artisans in Nepal.",
        image: "/editorial/slingbag-delvaux.jpg",
        link: "/shop/fashion",
        itemsCount: "4 Creations",
        tag: "Sartorial"
    },
    {
        title: "TORQUE 11 — Himalayan Strength",
        subtitle: "16,000 Ft Sacred Foraging",
        description: "The mountain's most ancient mineral resin. Hand-harvested, purified with sacred spring water, containing 80+ elemental trace minerals.",
        image: "/editorial/torque-shilajit.jpg",
        link: "/product/torque-11-shilajit",
        itemsCount: "Flagship Creation",
        tag: "Ancient Purity"
    },
    {
        title: "LAROSE — Sustainable Couture",
        subtitle: "Bamboo Silk & Knitwear",
        description: "Fluid halter midi gowns and heavyweight ribbed co-ord sets crafted from cruelty-free organic bamboo silk and botanical knit yarn.",
        image: "/editorial/larose-gown.jpg",
        link: "/shop/fashion",
        itemsCount: "3 Creations",
        tag: "Couture"
    },
    {
        title: "HEMP ESSENCE — Plant Nutrition",
        subtitle: "100% Clean-Label Superfoods",
        description: "Cold-milled complete hemp seed protein bars, adaptogenic mushroom blends, and 30-second nutrient-dense instant meals.",
        image: "/editorial/clean-nutrition.jpg",
        link: "/shop/wellness",
        itemsCount: "3 Formulations",
        tag: "Clean Science"
    },
    {
        title: "HEMP ESSENCE — Botanical Wellness",
        subtitle: "Sublingual CBD Relixir+",
        description: "Pure cannabis leaf extract in organic cold-pressed hemp seed oil. Non-psychoactive, 100% THC-free, lab-certified equilibrium.",
        image: "/products/cbd.png",
        link: "/product/hemp-essence-cbd",
        itemsCount: "Batch Reserve",
        tag: "Holistic"
    },
    {
        title: "BORO LINO & BLUES BORO",
        subtitle: "Organic Linen & Essentials",
        description: "Pure organic flax textiles and circular botanical-dyed apparel honoring European weaving craft and Indian agricultural roots.",
        image: "/editorial/artisan-craft.jpg",
        link: "/about-us#portfolio",
        itemsCount: "Curated Portfolio",
        tag: "Regenerative"
    }
];

export default function CategoriesPage() {
    return (
        <main className="bg-[#FAF8F5] text-blackPrimary py-16 sm:py-24">
            
            {/* MANIFESTO HEADER */}
            <div className="max-w-7xl mx-auto px-6 sm:px-10 text-center mb-16">
                <p className="text-xs uppercase tracking-[0.35em] text-brandGold font-[500] mb-3">
                    The House Directory
                </p>
                <h1 className="text-4xl sm:text-6xl font-[300] tracking-wide mb-6">
                    Maison Universes
                </h1>
                <div className="w-12 h-[1px] bg-brandGold mx-auto mb-6"></div>
                <p className="text-base sm:text-lg font-[300] text-blackPrimary/70 max-w-3xl mx-auto leading-relaxed">
                    Explore the distinct disciplines of Boros Sylvante Pvt. Ltd. Where elemental harmony converges with artisanal couture and plant-powered wellness.
                </p>
            </div>

            {/* CATEGORIES GRID (Delvaux / Kiton Split Architecture) */}
            <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((cat, idx) => (
                    <div
                        key={idx}
                        className="group bg-white border border-[#E8E4DE] overflow-hidden flex flex-col justify-between hover:border-[#8C733E]/60 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-500"
                    >
                        <div>
                            {/* IMAGE STAGE */}
                            <div className="relative w-full h-[360px] overflow-hidden bg-black/5">
                                <Image
                                    src={cat.image}
                                    alt={cat.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-[#FAF8F5]/90 text-blackPrimary text-[10px] uppercase tracking-[0.2em] font-[500] backdrop-blur-sm border border-blackPrimary/5">
                                        {cat.tag}
                                    </span>
                                </div>
                                <div className="absolute bottom-4 right-4">
                                    <span className="px-3 py-1 bg-[#1A1A1A] text-white text-[10px] uppercase tracking-wider font-[400]">
                                        {cat.itemsCount}
                                    </span>
                                </div>
                            </div>

                            {/* NARRATIVE */}
                            <div className="p-8">
                                <p className="text-xs uppercase tracking-[0.2em] text-[#8C733E] font-[500] mb-1">
                                    {cat.subtitle}
                                </p>
                                <h2 className="text-2xl font-[400] tracking-wide text-blackPrimary mb-3 group-hover:text-[#8C733E] transition-colors">
                                    <Link href={cat.link}>
                                        {cat.title}
                                    </Link>
                                </h2>
                                <p className="text-xs sm:text-sm font-[300] text-[#6B655C] leading-relaxed">
                                    {cat.description}
                                </p>
                            </div>
                        </div>

                        {/* ACTION LINK */}
                        <div className="p-8 pt-0">
                            <Link
                                href={cat.link}
                                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-[500] text-[#1A1A1A] group-hover:text-[#8C733E] transition-colors pt-4 border-t border-[#E8E4DE] w-full justify-between"
                            >
                                <span>Discover Universe</span>
                                <HiOutlineArrowLongRight className="text-base group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* DIRECT ACCESS TO SHOP */}
            <div className="mt-20 text-center">
                <Link
                    href="/shop"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#8C733E] transition-all duration-300 shadow-md"
                >
                    <span>View Complete Master Catalog</span>
                    <HiOutlineArrowLongRight className="text-base" />
                </Link>
            </div>

        </main>
    );
}