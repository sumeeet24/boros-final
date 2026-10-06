"use client";
import { HiMinus, HiPlus } from "react-icons/hi2";

const SingleProductQuantityInput = ({ quantity, setQuantity }) => {
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className="inline-flex items-center border border-[#E8E4DE] bg-white h-11">
            <button
                type="button"
                onClick={handleDecrement}
                disabled={quantity <= 1}
                aria-label="Decrease quantity"
                className="w-10 h-full flex items-center justify-center text-[#6B655C] hover:text-[#1A1A1A] hover:bg-[#FAF8F5] transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
                <HiMinus className="w-3.5 h-3.5" />
            </button>
            
            <span className="w-12 text-center text-sm font-mono font-medium text-[#1A1A1A] select-none">
                {quantity}
            </span>

            <button
                type="button"
                onClick={handleIncrement}
                aria-label="Increase quantity"
                className="w-10 h-full flex items-center justify-center text-[#6B655C] hover:text-[#1A1A1A] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
            >
                <HiPlus className="w-3.5 h-3.5" />
            </button>
        </div>
    );
};

export default SingleProductQuantityInput;
