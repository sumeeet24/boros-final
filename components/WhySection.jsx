const WhySection = () => {
    return (
        <div className="flex items-center flex-col gap-5 text-center text-blackPrimary border-t border-blackPrimary/10 pt-20 my-20 px-10 max-[500px]:px-5">
            <h2 className="text-5xl font-[300] mb-6 max-[500px]:text-4xl tracking-wide">Why Boros Sylvante?</h2>
            <p className="text-center text-xl font-[300] max-w-[700px] max-[500px]:text-lg max-[400px]:text-base leading-relaxed">
                In a world of mass production and empty promises, we chose a different path. Every product under our house carries the weight of intention, the warmth of human hands, and the purity of untouched nature.
            </p>
            <div className="flex gap-10 mt-14 max-[1350px]:flex-col">
                <div className="flex flex-col gap-3 border-brandGold/30 border-2 px-6 py-10">
                    <h3 className="text-xl max-[400px]:text-lg font-[500] tracking-wide">Rooted in Nature</h3>
                    <p className="font-[300] max-w-96 max-[400px]:text-sm leading-relaxed">Every material, ingredient, and compound we use comes from the earth: hemp fibre handwoven in Nepal, adaptogenic mushrooms, Himalayan shilajit formed over centuries. We don&apos;t engineer nature. We honour it.</p>
                </div>
                <div>
                    <h3 className="text-3xl font-[500] mb-2 max-sm:text-2xl tracking-wide">Crafted by Artisans</h3>
                    <p className="font-[300] max-w-96 max-[400px]:text-sm leading-relaxed">From our LAROSE slingbags stitched by hand in Kathmandu to our carefully purified Shilajit resin, there is a human being behind every product who chose precision over speed, craft over convenience.</p>
                </div>
                <div className="flex flex-col gap-3 border-brandGold/30 border-2 px-6 py-10">
                    <h3 className="text-xl max-[400px]:text-lg font-[500] tracking-wide">Uncompromising Purity</h3>
                    <p className="font-[300] max-w-96 max-[400px]:text-sm leading-relaxed">Lab tested. THC free. No additives. No preservatives. No artificial anything. 100% vegan where applicable. We believe the moment you compromise on purity, you compromise on everything.</p>
                </div>
            </div>
        </div>
    );
}

export default WhySection;