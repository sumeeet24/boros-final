"use client";
import { useState, useEffect } from "react";
import { HiMinus, HiPlus } from "react-icons/hi2";
import { useProductStore } from "@/app/_zustand/store";

const ProductCartItemQuantity = ({ id, startQuantity = 1 }) => {
    const [quantity, setQuantity] = useState(startQuantity);
    const { updateCartQuantity, calculateTotals } = useProductStore();

    useEffect(() => {
        setQuantity(startQuantity);
    }, [startQuantity]);

    const handleIncrement = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        updateCartQuantity(id, newQuantity);
        calculateTotals();
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            updateCartQuantity(id, newQuantity);
            calculateTotals();
        }
    };

    return (
        <div className="inline-flex items-center border border-[#E8E4DE] bg-white h-8">
            <button
                type="button"
                onClick={handleDecrement}
                disabled={quantity <= 1}
                aria-label="Decrease quantity"
                className="w-7 h-full flex items-center justify-center text-[#6B655C] hover:text-[#1A1A1A] hover:bg-[#FAF8F5] transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
                <HiMinus className="w-3 h-3" />
            </button>
            
            <span className="w-8 text-center text-xs font-mono font-medium text-[#1A1A1A] select-none">
                {quantity}
            </span>

            <button
                type="button"
                onClick={handleIncrement}
                aria-label="Increase quantity"
                className="w-7 h-full flex items-center justify-center text-[#6B655C] hover:text-[#1A1A1A] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
            >
                <HiPlus className="w-3 h-3" />
            </button>
        </div>
    );
};

export default ProductCartItemQuantity;
