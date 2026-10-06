import { CuratedFlagshipGrid } from "@/components";
import { getAllProducts } from "@/lib/api";

export const metadata = {
    title: "House Creations | BOROS SYLVANTE — Of Rare Materials. By Hand.",
    description: "Consciously structured apparel, high-altitude maille, and rare terrestrial textiles shaped outside the industrial calendar. For those who notice.",
};

const ShopPage = async ({ params }) => {
    const resolvedParams = await params;
    const slugArray = resolvedParams?.slug || [];
    const firstParam = slugArray[0]?.toLowerCase();

    let initialFilter = "all";
    if (firstParam === "apparel" || firstParam === "fashion") initialFilter = "apparel";
    if (firstParam === "accessories") initialFilter = "accessories";

    let products = [];
    try {
        products = await getAllProducts();
    } catch(e) {
        // Fallback
    }

    return (
        <div className="bg-[#FAF8F5] text-blackPrimary py-16">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 text-center mb-8">
                <p className="text-brandGold text-xs tracking-[0.35em] uppercase font-[500] mb-4">
                    The Master Catalog
                </p>
                <h1 className="font-[300] tracking-wide text-4xl sm:text-6xl text-blackPrimary mb-6">
                    House Creations
                </h1>
                <div className="w-12 h-[1px] bg-brandGold mx-auto mb-6"></div>
                <p className="text-base sm:text-lg font-[300] text-blackPrimary/70 max-w-3xl mx-auto leading-relaxed">
                    Long-staple terrestrial stems, un-dyed regional silks, and high-altitude Himalayan maille. Engineered for the buyer, not the consumer, honoring the natural life cycle of clothing and the earth.
                </p>
            </div>

            <CuratedFlagshipGrid products={products} initialFilter={initialFilter} />
        </div>
    );
};

export default ShopPage;
