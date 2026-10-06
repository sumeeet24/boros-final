"use client";
import Link from "next/link";
import {useState} from "react";
import {HiMenu} from "react-icons/hi";
import {HiOutlineX} from "react-icons/hi";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="h-20 bg-primary border-t border-blackPrimary/20 border-1 flex items-center justify-center">

            <HiMenu
                className="text-3xl text-blackPrimary hidden max-[470px]:block cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            />

            <div className={"md:mr-24"}>
                <ul className="largeScreenMenu flex gap-8">
                    <li>
                        <Link
                            href="/"
                            className="text-blackPrimary text-lg font-[400] tracking-wide hover:text-brandGold transition-colors duration-300"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/shop"
                            className="text-blackPrimary text-lg font-[400] tracking-wide hover:text-brandGold transition-colors duration-300"
                        >
                            Shop All
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about-us"
                            className="text-blackPrimary text-lg font-[400] tracking-wide hover:text-brandGold transition-colors duration-300"
                        >
                            The House
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="text-blackPrimary text-lg font-[400] tracking-wide hover:text-brandGold transition-colors duration-300"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>


            {isMenuOpen && (
                <div className="menuMobile z-50 bg-primary">
                    <HiOutlineX
                        className="text-3xl text-blackPrimary absolute top-5 right-5 z-40 cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                    <ul className="menuMobileUl bg-primary">
                        <li>
                            <Link href="/" className="text-blackPrimary text-xl font-[400] tracking-wide">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/shop"
                                className="text-blackPrimary text-xl font-[400] tracking-wide"
                            >
                                Shop All
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about-us"
                                className="text-blackPrimary text-xl font-[400] tracking-wide"
                            >
                                The House
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="text-blackPrimary text-xl font-[400] tracking-wide"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;
