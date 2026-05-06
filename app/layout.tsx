import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ACraMM - Credit Rating & Financial Services",
    description:
        "ACraMM provides comprehensive credit rating, credit due diligence, loan origination systems, and financial training services for SMEs, MFIs, and NBFIs.",
    keywords: [
        "credit rating",
        "financial services",
        "SME",
        "MFI",
        "NBFI",
        "loan origination",
        "credit appraisal",
    ],
    openGraph: {
        title: "ACraMM - Credit Rating & Financial Services",
        description:
            "Comprehensive credit rating and financial services for businesses.",
        type: "website",
        locale: "en_US",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-red focus:px-4 focus:py-2 focus:text-white"
                >
                    Skip to main content
                </a>
                <Header />
                <main id="main-content">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
