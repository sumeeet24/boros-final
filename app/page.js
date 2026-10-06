import {
    MasterHero,
    MasterHouseSection,
    MasterMaterialsSection,
    MasterHandSection,
    MasterCollectionSection,
    MasterProvenanceSection,
    MasterFutureExpressionsSection,
    MasterClosingManifesto
} from "@/components";
import { getAllProducts } from "@/lib/api";

export const metadata = {
    title: "BOROS SYLVANTE — Of Rare Materials. By Hand.",
    description: "Limited pieces, considered in exceptional natural fibres. Shaped by human hands outside the industrial calendar. For those who notice.",
};

export default async function Home() {
    let products = [];
    try {
        products = await getAllProducts();
    } catch (e) {
        // Fallback
    }

    return (
        <main className="bg-[#FAF8F5] text-blackPrimary">
            {/* 01 · MASTER CINEMATIC HERO */}
            <MasterHero />

            {/* 02 · THE HOUSE SECTION */}
            <MasterHouseSection />

            {/* 03 · THE MATERIALS MATRIX */}
            <MasterMaterialsSection />

            {/* 04 · THE HAND & ATELIER (LA RRANI HOUSE & LAROSE) */}
            <MasterHandSection />

            {/* 05 · THE COLLECTION (APPAREL, BAGS, ACCESSORIES) */}
            <MasterCollectionSection products={products} />

            {/* 06 · PROVENANCE (NORTH-EAST INDIA, NEPAL, SRI LANKA) */}
            <MasterProvenanceSection />

            {/* 07 · FUTURE EXPRESSIONS (NIRVANA'S REALM & SYLVANTE ESTATES) */}
            <MasterFutureExpressionsSection />

            {/* 08 · CLOSING MANIFESTO & APPOINTMENT CTA */}
            <MasterClosingManifesto />
        </main>
    );
}
