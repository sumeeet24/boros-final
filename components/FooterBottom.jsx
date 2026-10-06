import Image from "next/image";
import { FaGooglePay, FaCcVisa, FaCcMastercard } from 'react-icons/fa';

const FooterBottom = () => {
    const iconStyle = "grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 object-contain";
    const reactIconStyle = `text-5xl text-blackPrimary grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100`;

    return (
        <div>
            <div className="border-t border-blackPrimary/10 flex justify-center items-center gap-6 py-10 max-[1000px]:mt-10 max-[500px]:gap-4 max-[500px]:flex-wrap">
                <Image src="/upi.webp" alt="UPI" width={50} height={25} className={iconStyle} />
                <Image src="/rupay.png" alt="RuPay" width={60} height={30} className={iconStyle} />
                <Image src="/phonepe.webp" alt="PhonePe" width={90} height={30} className={iconStyle} />
                
                <FaGooglePay className={reactIconStyle} />
                <FaCcVisa className={reactIconStyle.replace('text-5xl', 'text-4xl')} />
                <FaCcMastercard className={reactIconStyle.replace('text-5xl', 'text-4xl')} />
            </div>
            <div className="pt-2 pb-8">
                <p className="text-center text-blackPrimary text-sm font-[300] tracking-wide">
                    &copy; {new Date().getFullYear()} Boros Sylvante Pvt. Ltd. All rights reserved. Value Creation through Value Sharing.
                </p>
            </div>
        </div>
    );
};

export default FooterBottom;
