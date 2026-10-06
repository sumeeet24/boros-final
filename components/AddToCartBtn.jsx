"use client";
import { useState } from "react";
import { useSizeStore } from "@/app/_zustand/sizeStore";
import { useProductStore } from "@/app/_zustand/store";
import { HiShoppingBag, HiCheck } from "react-icons/hi2";

const AddToCartBtn = ({
    product,
    quantity = 1,
    selectedSize,
    packageSizes
}) => {
    const { addToCart, calculateTotals } = useProductStore();
    const { size } = useSizeStore();
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        const chosenSize = selectedSize || size || (product?.size) || "Standard";
        const price = product?.packages?.[chosenSize] !== undefined 
            ? Number(product.packages[chosenSize]) 
            : (product?.price !== undefined ? Number(product.price) : 0);

        addToCart({
            ...product,
            id: `${product?.id}-${chosenSize}`,
            quantity: Number(quantity) || 1,
            size: chosenSize,
            price: price,
            package: price,
        });
        calculateTotals();

        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <button
            type="button"
            onClick={handleAdd}
            className={`w-full sm:w-auto min-w-[240px] h-12 px-8 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.08)] ${
                added
                    ? "bg-emerald-800 text-white"
                    : "bg-[#1A1A1A] hover:bg-[#8C733E] text-white"
            }`}
        >
            {added ? (
                <>
                    <HiCheck className="w-4 h-4 text-emerald-300" />
                    <span>Added to Folio</span>
                </>
            ) : (
                <>
                    <HiShoppingBag className="w-4 h-4 text-white/80" />
                    <span>Acquire Creation</span>
                </>
            )}
        </button>
    );
};

export default AddToCartBtn;
