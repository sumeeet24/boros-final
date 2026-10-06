import SingleStat from "@/components/SingleStat";

const StatsContainer = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-x-0 md:divide-x divide-[#E8E4DE]">
            <SingleStat 
                showStars={false} 
                mainText="100%" 
                subtitle="Botanical Purity"
                descText={<p>Regenerative Himalayan Plant Fibers & Wild Cold-Pressed Extracts</p>}
            />
            <SingleStat 
                showStars={false} 
                mainText="80+" 
                subtitle="Ionic Minerals"
                descText={<p>Naturally Occurring Bio-Fulvic Complexes in Every Pot of TORQUE 11</p>}
            />
            <SingleStat 
                showStars={false} 
                mainText="48h" 
                subtitle="Artisan Craft"
                descText={<p>Manual Pit Loom Weaving by Master Nepal Artisans per Creation</p>}
            />
            <SingleStat 
                showStars={false} 
                mainText="0.0%" 
                subtitle="Zero Junk Pledge"
                descText={<p>Synthetics, Additives, Heavy Metals, or Chemical Refining</p>}
            />
        </div>
    );
};

export default StatsContainer;