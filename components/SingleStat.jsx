import { HiMiniStar } from "react-icons/hi2";

const SingleStat = ({ showStars, mainText, descText, subtitle }) => {
    return (
        <div className="flex flex-col justify-center items-center text-center p-4">
            <p className="text-4xl sm:text-5xl font-light text-[#1A1A1A] tracking-tight font-serif">
                {mainText}
            </p>
            {showStars && (
                <div className="flex gap-1 my-2 text-[#8C733E]">
                    <HiMiniStar className="text-base" />
                    <HiMiniStar className="text-base" />
                    <HiMiniStar className="text-base" />
                    <HiMiniStar className="text-base" />
                    <HiMiniStar className="text-base" />
                </div>
            )}
            {subtitle && (
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C733E] font-medium mt-2">
                    {subtitle}
                </span>
            )}
            <div className="text-xs sm:text-sm font-light text-[#6B655C] mt-1 leading-relaxed">
                {descText}
            </div>
        </div>
    );
};

export default SingleStat;