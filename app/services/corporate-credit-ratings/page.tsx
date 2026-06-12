import { Metadata } from "next";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import img1 from "@/images/corporateCreditRatingsImg1.png";
import img2 from "@/images/corporateCreditRatingsImg2.png";
import img3 from "@/images/corporateCreditRatingsImg3.png";
import img4 from "@/images/corporateCreditRatingsImg 4.png";
import img5 from "@/images/corporateCreditRatingsImg5.png";

export const metadata: Metadata = {
    title: "Corporate Credit Ratings - ACraMM",
    description:
        "A-CRA provides comprehensive external credit rating services including corporate, bank, insurance, NBFI/MFI, and international company ratings.",
};

const subServices: { title: string; description: string; image: StaticImageData }[] = [
    {
        title: "Bank Credit Ratings",
        description: "We offer Risk-Based Corporate Credit Rating services to commercial banks in Myanmar. These ratings are designed to support banks in strengthening their overall risk profile and market positioning.",
        image: img1,
    },
    {
        title: "Insurance Company Ratings",
        description: "Specialized ratings for insurance companies evaluating claims-paying ability, financial stability, and operational performance.",
        image: img2,
    },
    {
        title: "NBFI / MFI Credit Ratings",
        description: "Tailored credit ratings for Non-Banking Financial Institutions and Microfinance Institutions.",
        image: img3,
    },
    {
        title: "Singapore Company Ratings",
        description: "Credit rating services for Singapore-based companies seeking transparent credit assessments.",
        image: img4,
    },
    {
        title: "Myanmar Company Ratings",
        description: "Localized credit rating services for Myanmar companies to support access to capital and financial transparency.",
        image: img5,
    },
];

export default function ExternalCreditRatingsPage() {
    return (
        <div className="pt-16 md:pt-20">
            {/* Hero Banner */}
            <section className="relative overflow-hidden bg-brand-dark py-16 md:py-24" aria-labelledby="page-heading">
                <div className="absolute inset-0" aria-hidden="true">
                    <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-red/10 blur-3xl" />
                    <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-brand-red/10 blur-3xl" />
                </div>
                <div className="section-container relative z-10">
                    <nav aria-label="Breadcrumb" className="mb-6">
                        <ol className="flex items-center gap-2 text-sm text-gray-400">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li aria-hidden="true">/</li>
                            <li className="text-brand-red">Corporate Credit Ratings</li>
                        </ol>
                    </nav>
                    <h1 id="page-heading" className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        Corporate Credit Ratings
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-gray-300">
                        We propose to offer Corporate Credit Rating services for a wide range of companies in Myanmar. In addition, we can provide specialized ratings for the issuance of debt instruments such as debentures and bonds.
                    </p>
                    <p className="mt-4 max-w-2xl text-lg text-gray-300">
                        These ratings will enable companies to gain deeper insights into their financial strengths and areas for improvement. They will also help enhance credibility and build confidence among customers, investors, lenders, and other stakeholders.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding bg-white" aria-labelledby="services-heading">
                <div className="section-container">
                    <div className="mb-12">
                        <h2 id="services-heading" className="mb-4 text-2xl font-bold text-brand-dark sm:text-3xl">
                            Our Rating Services
                        </h2>
                        {/* <p className="max-w-3xl text-brand-gray">
                            We employ rigorous methodologies to evaluate creditworthiness, helping financial institutions make informed lending decisions and businesses access the capital they need to grow.
                        </p> */}
                    </div>

                    {/* Sub-service Cards */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {subServices.map((service) => {
                            const isBank = service.title === "Bank Credit Ratings";
                            const isInsurance = service.title === "Insurance Company Ratings";
                            const isNbfi = service.title === "NBFI / MFI Credit Ratings";
                            const isSingapore = service.title === "Singapore Company Ratings";
                            const isMyanmar = service.title === "Myanmar Company Ratings";
                            const hasLink = isBank || isInsurance || isNbfi || isSingapore || isMyanmar;
                            const card = (
                                <article
                                    key={service.title}
                                    className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-brand-red/20 hover:shadow-md h-full"
                                >
                                    <div className="mb-4 overflow-hidden rounded-lg">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-48 object-cover"
                                        />
                                    </div>
                                    <h3 className="mb-2 text-lg font-semibold text-brand-dark group-hover:text-brand-red transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-brand-gray">
                                        {service.description}
                                    </p>
                                    {hasLink && (
                                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-red">
                                            Learn More
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                            </svg>
                                        </span>
                                    )}
                                </article>
                            );

                            if (isBank) {
                                return (
                                    <Link key={service.title} href="/services/corporate-credit-ratings/bank-credit-ratings" className="block">
                                        {card}
                                    </Link>
                                );
                            }

                            if (isInsurance) {
                                return (
                                    <Link key={service.title} href="/services/corporate-credit-ratings/insurance-company-ratings" className="block">
                                        {card}
                                    </Link>
                                );
                            }

                            if (isNbfi) {
                                return (
                                    <Link key={service.title} href="/services/corporate-credit-ratings/nbfi-mfi-credit-ratings" className="block">
                                        {card}
                                    </Link>
                                );
                            }

                            if (isSingapore) {
                                return (
                                    <Link key={service.title} href="/services/corporate-credit-ratings/singapore-company-ratings" className="block">
                                        {card}
                                    </Link>
                                );
                            }

                            if (isMyanmar) {
                                return (
                                    <Link key={service.title} href="/services/corporate-credit-ratings/myanmar-company-ratings" className="block">
                                        {card}
                                    </Link>
                                );
                            }

                            return card;
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
