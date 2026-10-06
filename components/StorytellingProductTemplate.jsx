'use client';

import React from 'react';
import Image from 'next/image';
import ProductAddToCartClient from './ProductAddToCartClient';
import { HiMiniStar } from 'react-icons/hi2';
import { motion } from 'framer-motion';

const FadeIn = ({ children, delay = 0, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
        className={className}
    >
        {children}
    </motion.div>
);

const StorytellingProductTemplate = ({ product, recommendedGrid }) => {
    const packages = product.fields.packages || {};
    const packageSizes = Object.keys(packages);
    const firstPrice = packageSizes.length > 0 ? packages[packageSizes[0]] : 0;

    return (
        <div className="bg-primary text-blackPrimary">
            {/* STANDARD PRODUCT HEADER (RESTORED) */}
            <div className="flex justify-around items-center py-24 gap-16 px-10 max-xl:flex-col max-[450px]:px-5 max-sm:py-12 max-[450px]:gap-8 bg-primary">
                <Image
                    src={`${product.fields.mainImage.fields.file.url}`}
                    width={700}
                    height={700}
                    alt={product.fields.title}
                    className="w-full max-w-[600px] h-auto object-cover shadow-2xl"
                    priority
                />
                <div className="max-w-[600px] w-full">
                    <div className="flex flex-col gap-2 max-[450px]:gap-2">
                        <p className="text-brandGold text-xs tracking-[0.3em] uppercase font-[500]">
                            Boros Sylvante
                        </p>
                        <h1 className="text-5xl font-[300] tracking-wide max-sm:text-4xl max-[450px]:text-3xl">
                            {product.fields.title}
                        </h1>
                    </div>
                    
                    <div className="mt-8 flex items-center gap-4 max-sm:mt-4">
                        <div className="flex gap-1 max-sm:gap-0">
                            <HiMiniStar className="text-brandGold text-2xl max-[450px]:text-xl max-sm:text-xl"/>
                            <HiMiniStar className="text-brandGold text-2xl max-[450px]:text-xl max-sm:text-xl"/>
                            <HiMiniStar className="text-brandGold text-2xl max-[450px]:text-xl max-sm:text-xl"/>
                            <HiMiniStar className="text-brandGold text-2xl max-[450px]:text-xl max-sm:text-xl"/>
                            <HiMiniStar className="text-brandGold text-2xl max-[450px]:text-xl max-sm:text-xl"/>
                        </div>
                        <p className="text-lg font-[300] max-sm:text-base max-[450px]:text-sm">
                            125 reviews
                        </p>
                    </div>
                    
                    <p className="text-lg font-[300] leading-relaxed my-8 max-sm:text-base max-[450px]:text-sm max-sm:my-6">
                        {product.fields.shortDescription}
                    </p>
                    
                    <p className="text-3xl font-[400] mb-10 max-sm:text-2xl max-sm:mb-8 tracking-wide">
                        ₹{firstPrice}
                    </p>

                    <ProductAddToCartClient
                        packages={packages}
                        packageSizes={packageSizes}
                        product={{
                            id: product.sys.id,
                            name: product.fields.title,
                            price: firstPrice || 0,
                            image: `${product.fields.mainImage.fields.file.url}`,
                            brand: "Boros Sylvante",
                            category: "Luxury",
                            quantity: 1,
                            size: packageSizes[0] || "",
                            packages: packages,
                        }}
                    />
                </div>
            </div>

            {/* SEAMLESS LUXURY STORYTELLING FLOW */}
            
            {/* PROLOGUE */}
            <div className="py-40 px-10 text-center flex flex-col items-center justify-center max-sm:py-24 max-sm:px-5 border-t border-blackPrimary/10">
                <FadeIn>
                    <p className="text-brandGold text-xs tracking-[0.4em] uppercase font-[500] mb-8">The Philosophy</p>
                </FadeIn>
                <FadeIn delay={0.2} className="max-w-4xl">
                    <h2 className="text-4xl font-[300] tracking-wide leading-relaxed text-blackPrimary/90 max-sm:text-2xl max-sm:leading-loose mb-10">
                        "We didn't design this to sit quietly on a shelf. We designed it because we couldn't find anything else in the market that refused to compromise."
                    </h2>
                    <p className="text-xl font-[300] leading-loose text-blackPrimary/70 max-sm:text-lg">
                        In a world obsessed with speed, we chose to slow down. True luxury is not about logos; it is about time. The time it takes to grow the raw materials. The time it takes to weave them by hand. The time it takes to ensure that every single detail, seen or unseen, meets an uncompromising standard of excellence.
                    </p>
                </FadeIn>
            </div>

            {/* CHAPTER I: THE SOURCE */}
            <div className="relative w-full h-[120vh] min-h-[800px] flex items-center">
                <div className="absolute inset-0">
                    <div className="sticky top-0 h-screen w-full">
                        <Image src="/himalayan-cta.png" alt="Himalayas" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                </div>
                
                <div className="relative z-10 w-full px-10 max-sm:px-5 max-w-7xl mx-auto flex justify-end">
                    <FadeIn className="bg-[#fcfaf8]/95 backdrop-blur-md p-16 max-w-2xl max-sm:p-8 shadow-2xl">
                        <p className="text-brandGold text-xs tracking-[0.3em] uppercase font-[500] mb-6">Chapter I: The Source</p>
                        <h3 className="text-4xl font-[300] mb-8 tracking-wide max-sm:text-3xl">Rooted in the Himalayas</h3>
                        <p className="text-lg font-[300] leading-loose text-blackPrimary/80 mb-6">
                            True luxury cannot be manufactured in a sterile factory. It is grown. Cultivated in the high-altitude air of the Himalayas, the 100% natural hemp used in this piece is incredibly resilient, naturally dyed, and carries the ancient spirit of the mountains in every fiber.
                        </p>
                        <p className="text-lg font-[300] leading-loose text-blackPrimary/80">
                            Because hemp requires exponentially less water than cotton and actively purifies the soil it grows in, this bag doesn't just minimize harm—it actively restores the earth. We believe you shouldn't have to choose between exceptional quality and ethical responsibility.
                        </p>
                    </FadeIn>
                </div>
            </div>

            {/* CHAPTER II: THE CRAFT */}
            <div className="py-40 px-10 max-sm:px-5 max-w-7xl mx-auto">
                <div className="grid grid-cols-12 gap-16 items-center max-lg:flex max-lg:flex-col-reverse">
                    <div className="col-span-5 flex flex-col justify-center">
                        <FadeIn>
                            <p className="text-brandGold text-xs tracking-[0.3em] uppercase font-[500] mb-6">Chapter II: The Hands</p>
                            <h3 className="text-4xl font-[300] mb-8 tracking-wide max-sm:text-3xl">Artisan Heritage</h3>
                            <p className="text-lg font-[300] leading-loose text-blackPrimary/80 mb-8">
                                Look closely at the weave. The slight variations you see are not flaws—they are the irrefutable signature of the human hands that made it. Hand-stitched by generations of master artisans in Nepal, every stitch is deliberate. Every seam is a testament to a craft that automated machines simply cannot replicate.
                            </p>
                            <p className="text-lg font-[300] leading-loose text-blackPrimary/80 mb-8">
                                We pay our artisans significantly above market rate, ensuring that the ancient techniques of hand-weaving are preserved and passed down. When you invest in this piece, you are investing in the livelihoods of families and the preservation of art.
                            </p>
                            <p className="text-xl font-[400] italic text-brandGold">
                                This isn't just a bag. It's an heirloom.
                            </p>
                        </FadeIn>
                    </div>
                    <div className="col-span-7 w-full">
                        <FadeIn delay={0.2}>
                            <div className="relative h-[800px] w-full max-lg:h-[500px] overflow-hidden shadow-2xl">
                                <Image src="/products/slingbag_artisan.png" alt="Artisan hands" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>

            {/* CHAPTER III: THE DETAILS */}
            <div className="py-32 bg-blackPrimary text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-10 max-sm:px-5">
                    <div className="grid grid-cols-12 gap-16 items-center max-lg:flex max-lg:flex-col">
                        <div className="col-span-6 w-full">
                            <FadeIn>
                                <div className="relative h-[700px] w-full max-lg:h-[400px] shadow-2xl">
                                    <Image src="/products/slingbag_macro.png" alt="Macro texture" fill className="object-cover opacity-90" />
                                </div>
                            </FadeIn>
                        </div>
                        <div className="col-span-6 flex flex-col justify-center max-lg:pt-10">
                            <FadeIn delay={0.2}>
                                <p className="text-brandGold text-xs tracking-[0.3em] uppercase font-[500] mb-6">Chapter III: The Details</p>
                                <h3 className="text-5xl font-[300] mb-10 tracking-wide max-sm:text-3xl leading-snug">Uncompromising Form</h3>
                                <div className="space-y-12">
                                    <div className="border-l-2 border-brandGold pl-8">
                                        <h4 className="text-2xl font-[400] mb-3 tracking-wide">Heavyweight Hardware</h4>
                                        <p className="text-white/70 font-[300] leading-relaxed text-lg">Matte black, industrial-grade zippers engineered to glide effortlessly and outlast a lifetime of daily use. Beautifully tactile, satisfyingly heavy.</p>
                                    </div>
                                    <div className="border-l-2 border-brandGold pl-8">
                                        <h4 className="text-2xl font-[400] mb-3 tracking-wide">Architectural Structure</h4>
                                        <p className="text-white/70 font-[300] leading-relaxed text-lg">Designed mathematically to drape perfectly against the chest, distributing weight so effortlessly you'll forget you're carrying it.</p>
                                    </div>
                                    <div className="border-l-2 border-brandGold pl-8">
                                        <h4 className="text-2xl font-[400] mb-3 tracking-wide">Living Material</h4>
                                        <p className="text-white/70 font-[300] leading-relaxed text-lg">Naturally antimicrobial and incredibly breathable. Unlike synthetic fabrics that degrade over time, raw hemp softens and molds to your body, aging beautifully the more you wear it.</p>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>

            {/* EPILOGUE */}
            <div className="py-40 px-10 text-center flex flex-col items-center justify-center max-sm:py-24 max-sm:px-5 bg-primary">
                <FadeIn>
                    <div className="flex flex-col items-center gap-0 mb-10 opacity-60">
                        <span className="text-blackPrimary text-4xl font-[600] tracking-[0.15em] max-sm:text-2xl">BOROS SYLVANTE</span>
                        <span className="text-brandOlive text-xs tracking-[0.35em] uppercase font-[500] mt-1">Sustainable Luxury</span>
                    </div>
                    <h2 className="text-3xl font-[300] tracking-widest text-blackPrimary mb-6 uppercase max-sm:text-xl">
                        Elevate Your Daily Ritual
                    </h2>
                    <p className="text-lg font-[300] text-blackPrimary/60 tracking-widest uppercase">
                        The LAROSE Collection
                    </p>
                </FadeIn>
            </div>

            {/* RECOMMENDED PRODUCTS */}
            {recommendedGrid && (
                <div className="py-24 bg-white border-t border-blackPrimary/10">
                    <p className="text-brandGold text-center text-sm tracking-[0.35em] uppercase font-[500] mb-4">Explore More</p>
                    <h2 className="text-5xl font-[300] tracking-wide text-center mb-16 max-sm:text-4xl max-sm:mb-12">
                        Curated from The House
                    </h2>
                    {recommendedGrid}
                </div>
            )}
        </div>
    );
};

export default StorytellingProductTemplate;
