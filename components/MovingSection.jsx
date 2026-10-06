export default function MovingSection() {
    const marqueeText = [
        "BOROS SYLVANTE",
        "OF RARE MATERIALS. BY HAND.",
        "THE HIMALAYAN PATRA",
        "THE ARTISANAL HEMP-DENIM OVERSHIRT",
        "FOR THOSE WHO NOTICE",
        "LAROSE ECO-COUTURE",
        "HEMP ESSENCE BOTANICAL NUTRITION",
        "TORQUE 11 HIMALAYAN SHILAJIT",
        "BORO LINO FINE LINENS",
        "BLUES BORO INDIGO",
        "ATELIER ASSAM & ATELIER KATHMANDU",
        "VALUE CREATION THROUGH VALUE SHARING"
    ];

    return (
        <div className="bg-[#141414] text-[#C5A869] border-y border-[#262626] py-4 overflow-hidden select-none">
            <div className="flex w-max animate-marquee">
                <div className="flex items-center gap-8 whitespace-nowrap px-4">
                    {marqueeText.map((item, idx) => (
                        <div key={`m1-${idx}`} className="flex items-center gap-8">
                            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-light">
                                {item}
                            </span>
                            <span className="text-[#8C733E] text-xs">✦</span>
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-8 whitespace-nowrap px-4" aria-hidden="true">
                    {marqueeText.map((item, idx) => (
                        <div key={`m2-${idx}`} className="flex items-center gap-8">
                            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-light">
                                {item}
                            </span>
                            <span className="text-[#8C733E] text-xs">✦</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}