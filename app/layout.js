import {Cormorant_Garamond} from "next/font/google";
import "./globals.css";
import {Footer, Header} from "@/components";
import FloatingCartButton from "@/components/FloatingCartButton";

const cormorant = Cormorant_Garamond({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

export const metadata = {
    title: "BOROS SYLVANTE — Of Rare Materials. By Hand.",
    description: "Boros Sylvante crafts enduring artifacts from long-staple terrestrial stems, un-dyed Assam silk, and high-altitude Himalayan botanicals — shaped by human hands outside the industrial calendar. For those who notice.",
    keywords: "Boros Sylvante, of rare materials by hand, quiet luxury, Himalayan Patra, organic hemp denim overshirt, Assam silk, pure shilajit resin, LAROSE, slow fashion, handloom craft",
    openGraph: {
        title: "BOROS SYLVANTE — Of Rare Materials. By Hand.",
        description: "Long-staple terrestrial stems, un-dyed Assam silk, and high-altitude Himalayan botanicals. Handcrafted for those who notice.",
        type: "website",
    },
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={`${cormorant.className} antialiased bg-primary`}>
        <Header/>
        {children}
        <FloatingCartButton />
        <Footer/>
        </body>
        </html>
    );
}
