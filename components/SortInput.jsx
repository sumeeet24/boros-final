"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SortInput = ({ initialSort = "default" }) => {
    const [sort, setSort] = useState(initialSort);
    const router = useRouter();

    const sortProducts = () => {
        if (sort === "default") {
            router.push("/shop");
        } else {
            router.push(`/shop?sort=${sort}`);
        }
    };

    useEffect(() => {
        if (sort !== initialSort) {
            sortProducts();
        }
    }, [sort]);

    return (
        <div className="flex items-center gap-3">
            <label htmlFor="sort" className="text-xs uppercase tracking-[0.2em] text-[#6B655C] font-medium whitespace-nowrap">
                Sort By:
            </label>
            <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-white text-[#1A1A1A] py-2.5 px-4 text-xs tracking-wider border border-[#E8E4DE] focus:outline-none focus:border-[#8C733E] transition-colors cursor-pointer"
            >
                <option value="default">Curated Folio (Featured)</option>
                <option value="priceAsc">Value: Gentle to Haute</option>
                <option value="priceDesc">Value: Haute to Gentle</option>
                <option value="AtoZ">Alphabetical: A &ndash; Z</option>
                <option value="ZtoA">Alphabetical: Z &ndash; A</option>
            </select>
        </div>
    );
};

export default SortInput;