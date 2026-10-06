const Button = ({ text, mode, className = "", onClick, type = "button" }) => {
    if (mode === "black") {
        return (
            <button
                type={type}
                onClick={onClick}
                className={`min-w-[200px] h-12 px-8 bg-[#1A1A1A] hover:bg-[#8C733E] text-white text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center shadow-md cursor-pointer ${className}`}
            >
                {text}
            </button>
        );
    }

    if (mode === "gold") {
        return (
            <button
                type={type}
                onClick={onClick}
                className={`min-w-[200px] h-12 px-8 bg-[#8C733E] hover:bg-[#B89D62] text-white text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center shadow-md cursor-pointer ${className}`}
            >
                {text}
            </button>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`min-w-[200px] h-12 px-8 bg-white/90 hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white text-xs uppercase tracking-[0.2em] font-medium border border-[#E8E4DE] hover:border-[#1A1A1A] transition-all duration-300 flex items-center justify-center shadow-sm cursor-pointer ${className}`}
        >
            {text}
        </button>
    );
};

export default Button;
