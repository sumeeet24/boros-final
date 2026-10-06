"use client";
import { useState } from "react";
import { HiArrowSmallRight, HiCheck } from "react-icons/hi2";

export default function JoinCommunityFooter() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email) return;
        setSubscribed(true);
    };

    return (
        <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C733E] font-medium block">
                Privileged Access
            </span>
            <h3 className="text-xl font-light tracking-wide text-[#1A1A1A]">
                Join The Maison Folio
            </h3>
            <p className="text-xs text-[#6B655C] font-light leading-relaxed max-w-sm">
                Receive private invitations to seasonal handloom collections, limited botanical batch releases, and invitations to private salon viewings.
            </p>

            {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-emerald-800 bg-[#FAF8F5] border border-emerald-300/60 p-3">
                    <HiCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Welcome to the House folio. A verification letter has been dispatched.</span>
                </div>
            ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-md">
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your electronic mail"
                        className="bg-white text-xs text-[#1A1A1A] placeholder-[#9C9488] h-11 px-3.5 flex-1 border border-[#E8E4DE] border-r-0 focus:outline-none focus:border-[#8C733E] transition-colors"
                    />
                    <button
                        type="submit"
                        aria-label="Subscribe to Boros Sylvante Folio"
                        className="bg-[#1A1A1A] hover:bg-[#8C733E] text-white w-12 h-11 flex items-center justify-center transition-colors duration-300 flex-shrink-0 cursor-pointer"
                    >
                        <HiArrowSmallRight className="w-5 h-5" />
                    </button>
                </form>
            )}
            <p className="text-[10px] text-[#9C9488]">
                We honor your privacy. Unsubscribe at any time through your client portal.
            </p>
        </div>
    );
}
