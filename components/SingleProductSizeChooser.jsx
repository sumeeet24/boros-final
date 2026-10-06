"use client";

const SingleProductSizeChooser = ({ sizes, packages, onSizeChange, selectedSize, setSelectedSize }) => {
    const handleSizeSelect = (size) => {
        setSelectedSize(size);
        onSizeChange?.(size, packages?.[size]);
    };

    if (!sizes || sizes.length === 0) return null;

    return (
        <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-[0.2em] text-[#8C733E] font-medium block">
                    Specification & Volume
                </span>
                <span className="text-xs text-[#6B655C] font-light">
                    Selected: <strong className="text-[#1A1A1A] font-medium">{selectedSize}</strong>
                </span>
            </div>

            <div className="flex flex-wrap gap-2.5">
                {sizes.map((size) => {
                    const isSelected = size === selectedSize;
                    const price = packages?.[size];

                    return (
                        <button
                            key={size}
                            type="button"
                            onClick={() => handleSizeSelect(size)}
                            className={`px-5 py-3 border text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                                isSelected
                                    ? "bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-sm ring-1 ring-[#8C733E]"
                                    : "bg-white text-[#1A1A1A] border-[#E8E4DE] hover:border-[#8C733E]/60 hover:bg-[#FAF8F5]"
                            }`}
                        >
                            <span className="font-medium">{size}</span>
                            {price !== undefined && (
                                <span className={`text-[11px] font-mono ${isSelected ? "text-[#C5A869]" : "text-[#8C733E]"}`}>
                                    &bull; ₹{Number(price).toLocaleString('en-IN')}
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default SingleProductSizeChooser;