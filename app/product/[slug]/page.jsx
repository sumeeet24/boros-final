import {
    ProductGrid,
    FashionProductTemplate
} from "@/components";
import React from "react";
import { getAllProducts, getProductBySlug } from "@/lib/api";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);
    if (!product) return { title: "Piece Not Found | Boros Sylvante" };

    return {
        title: `${product.fields.title} · ${product.fields.pieceNumber || 'Boros Sylvante'}`,
        description: `${product.fields.shortDescription} Of Rare Materials. By Hand.`,
    };
}

const SingleProductPage = async ({ params }) => {
    const { slug } = await params;
    
    let product = null;
    let products = [];
    
    try {
        product = await getProductBySlug(slug);
        products = await getAllProducts();
    } catch(e) {
        // Fallback
    }

    if (!product) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-10 bg-[#FAF8F5]">
                <p className="text-[#8C733E] text-xs tracking-[0.35em] uppercase font-[500] mb-4">
                    The Archive
                </p>
                <h1 className="text-4xl font-[200] tracking-wide mb-4 text-[#1A1A1A]">
                    Piece Not Found
                </h1>
                <p className="text-sm font-[300] text-[#6B655C] max-w-md">
                    This edition may be closed or recorded within the private archives of the House.
                </p>
            </div>
        );
    }

    // Filter recommended products to show other pieces from the catalog
    const relatedProducts = products.filter(p => p.sys.id !== product.sys.id);
    const recommendedGrid = <ProductGrid products={relatedProducts.slice(0, 3)} />;

    return (
        <FashionProductTemplate
            product={product}
            recommendedGrid={recommendedGrid}
        />
    );
};

export default SingleProductPage;
