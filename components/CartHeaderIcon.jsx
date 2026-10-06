"use client";

import { useProductStore } from "@/app/_zustand/store";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const CartHeaderIcon = () => {
    const { allQuantity } = useProductStore((state) => state);

    return (
        <Link href="/cart" className="relative group">
            <HiOutlineShoppingBag className="text-blackPrimary text-2xl group-hover:text-brandGold transition-colors duration-300" />
            {allQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-blackPrimary text-primary text-[10px] font-[600] w-5 h-5 rounded-full flex items-center justify-center tracking-wide">
                    {allQuantity}
                </span>
            )}
        </Link>
    );
};

export default CartHeaderIcon;
