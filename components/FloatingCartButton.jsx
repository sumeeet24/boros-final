"use client";

import { useProductStore } from "@/app/_zustand/store";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingCartButton = () => {
    const { allQuantity } = useProductStore((state) => state);
    const [prevQuantity, setPrevQuantity] = useState(allQuantity);
    const [showPulse, setShowPulse] = useState(false);

    useEffect(() => {
        if (allQuantity > prevQuantity) {
            setShowPulse(true);
            const timer = setTimeout(() => setShowPulse(false), 1200);
            return () => clearTimeout(timer);
        }
        setPrevQuantity(allQuantity);
    }, [allQuantity, prevQuantity]);

    return (
        <AnimatePresence>
            {allQuantity > 0 && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed bottom-8 right-6 z-50 md:hidden"
                >
                    <Link href="/cart">
                        <div className="relative">
                            {/* Pulse ring on add */}
                            {showPulse && (
                                <motion.div
                                    initial={{ opacity: 0.8, scale: 1 }}
                                    animate={{ opacity: 0, scale: 2.5 }}
                                    transition={{ duration: 1 }}
                                    className="absolute inset-0 bg-brandGold rounded-full"
                                />
                            )}
                            <div className="w-16 h-16 bg-blackPrimary rounded-full flex items-center justify-center shadow-2xl border border-brandGold/30">
                                <HiOutlineShoppingBag className="text-primary text-2xl" />
                            </div>
                            <span className="absolute -top-1 -right-1 bg-brandGold text-blackPrimary text-[11px] font-[700] w-6 h-6 rounded-full flex items-center justify-center tracking-wide shadow-lg">
                                {allQuantity}
                            </span>
                        </div>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingCartButton;
