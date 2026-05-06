import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "External Credit Ratings - ACraMM",
    description:
        "A-CRA provides comprehensive external credit rating services including corporate, bank, insurance, NBFI/MFI, and international company ratings.",
};

const subServices = [
    {
        title: "Bank Credit Ratings",
        description: "Comprehensive credit assessment for banking institutions covering financial strength, asset quality, and management capability.",
    },
    {
        title: "Insurance Company Ratings",
        description: "Specialized ratings for insurance companies evaluating claims-paying ability, financial stability, and operational performance.",
    },
    {
        title: "NBFI / MFI Credit Ratings",
        description: "Tailored credit ratings for Non-Banking Financial Institutions and Microfinance Institutions.",
    },
    {
        title: "Singapore Company Ratings",
        description: "Credit rating services for Singapore-based companies seeking transparent credit assessments.",
    },
    {
        title: "Myanmar Company Ratings",
        description: "Localized credit rating services for Myanmar companies to support access to capital and financial transparency.",
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
                            <li className="text-brand-red">External Credit Ratings</li>
                        </ol>
                    </nav>
                    <h1 id="page-heading" className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        Corporate Credit Ratings
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-gray-300">
                        Our flagship external credit rating service provides comprehensive, transparent, and reliable credit assessments for businesses of all sizes across multiple sectors and geographies.
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
                        <p className="max-w-3xl text-brand-gray">
                            We employ rigorous methodologies to evaluate creditworthiness, helping financial institutions make informed lending decisions and businesses access the capital they need to grow.
                        </p>
                    </div>

                    {/* Sub-service Cards */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {subServices.map((service) => (
                            <article
                                key={service.title}
                                className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-brand-red/20 hover:shadow-md"
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-red/10">
                                    <svg
                                        className="h-6 w-6 text-brand-red"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-brand-dark group-hover:text-brand-red transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-brand-gray">
                                    {service.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
