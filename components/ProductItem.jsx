"use client";

import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const ProductItem = ({ product }) => {
    const isPriceOnRequest = Boolean(product.fields.isPriceOnRequest);
    const pieceNumber = product.fields.pieceNumber || "BOROS SYLVANTE";
    const brand = product.fields.brand || "BOROS SYLVANTE";

    return (
        <div className="flex flex-col text-blackPrimary text-left group bg-white border border-[#E8E4DE] overflow-hidden transition-all duration-500 hover:border-[#1A1A1A]/40 hover:shadow-lg">
            
            {/* SCULPTURAL PRODUCT IMAGE CONTAINER */}
            <Link href={`/product/${product.fields.slug}`} className="block relative w-full h-[400px] sm:h-[460px] overflow-hidden bg-[#FAF8F5]">
                <Image
                    src={`${product.fields.mainImage.fields.file.url}`}
                    alt={product.fields.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* PIECE NUMBER BADGE */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#FAF8F5]/90 text-blackPrimary text-[9px] uppercase tracking-[0.25em] font-[500] backdrop-blur-sm border border-blackPrimary/5">
                        {pieceNumber}
                    </span>
                </div>

                {/* HOVER BADGE */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-3 py-1 bg-[#1A1A1A] text-white text-[10px] tracking-[0.2em] font-[400] uppercase">
                        Price on Request
                    </span>
                </div>
            </Link>

            {/* PRODUCT DETAILS */}
            <div className="p-6 flex flex-col justify-between flex-1 bg-[#FAF8F5]/60 border-t border-[#E8E4DE]">
                <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C733E] font-[500] mb-1">
                        {product.fields.category || "House Creation"}
                    </p>
                    <h3 className="text-xl font-[300] tracking-wide text-blackPrimary mb-2 group-hover:text-[#8C733E] transition-colors">
                        <Link href={`/product/${product.fields.slug}`}>
                            {product.fields.title}
                        </Link>
                    </h3>
                    <p className="text-xs font-[300] text-blackPrimary/70 line-clamp-2 leading-relaxed mb-4">
                        {product.fields.shortDescription}
                    </p>
                </div>

                <div className="pt-4 border-t border-[#E8E4DE] flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.2em] font-[500] text-[#8C733E]">
                        Price on Request
                    </span>
                    
                    <Link
                        href={`/product/${product.fields.slug}`}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-[500] text-blackPrimary group-hover:text-[#8C733E] transition-colors"
                    >
                        <span>Discover</span>
                        <HiOutlineArrowLongRight className="text-sm group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default ProductItem;