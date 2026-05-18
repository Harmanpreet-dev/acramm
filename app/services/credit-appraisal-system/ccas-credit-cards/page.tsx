import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ccasImg from "@/images/ccas.png";

export const metadata: Metadata = {
    title: "Credit Card Appraisal System (CCAS) - ACraMM",
    description:
        "A-Cra offers a Score-based risk assessment and appraisal system for processing Credit Card Requests from customers.",
};

const benefits = [
    "Quality Credit Appraisals",
    "Time and Cost Optimization",
    "Credit Skill Development",
    "Smooth integration with IFRS-9",
];

export default function CCASCreditCardsPage() {
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
                            <li><Link href="/services/credit-appraisal-system" className="hover:text-white transition-colors">Loan Origination Systems</Link></li>
                            <li aria-hidden="true">/</li>
                            <li className="text-brand-red">CCAS (Credit Cards)</li>
                        </ol>
                    </nav>
                    <h1 id="page-heading" className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        Credit Card Appraisal System (CCAS)
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-gray-300">
                        A-Cra offers a Score-based risk assessment and appraisal system for processing Credit Card Requests from customers.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="section-padding bg-white" aria-labelledby="content-heading">
                <div className="section-container">
                    {/* Image */}
                    <div className="overflow-hidden rounded-xl">
                        <Image
                            src={ccasImg}
                            alt="Credit Card Appraisal System"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Implementation Approach */}
            <section className="section-padding bg-brand-light" aria-labelledby="implementation-heading">
                <div className="section-container">
                    <div className="mb-8">
                        <h2 id="implementation-heading" className="mb-4 text-2xl font-bold text-brand-dark sm:text-3xl">
                            Implementation Approach
                        </h2>
                        <p className="max-w-3xl text-brand-gray text-lg leading-relaxed">
                            A-Cra collaborates closely with financial institutions by working alongside their Credit Risk Teams on a pilot project basis. This ensures smooth implementation, customization, and effective adoption of the systems.
                        </p>
                    </div>

                    <div className="mt-10">
                        <h3 className="mb-4 text-xl font-semibold text-brand-dark">
                            Benefits for Financial Institutions
                        </h3>
                        <p className="mb-4 text-brand-gray">
                            Adoption of these systems will have the following benefits:
                        </p>
                        <ul className="space-y-3">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-red/10">
                                        <svg className="h-3.5 w-3.5 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <span className="text-brand-gray font-medium">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-white">
                <div className="section-container">
                    <div className="rounded-xl bg-brand-light p-8 text-center md:p-12">
                        <h3 className="mb-3 text-xl font-bold text-brand-dark">
                            Interested in CCAS for Credit Cards?
                        </h3>
                        <p className="mb-6 text-brand-gray">
                            Get in touch with our team to learn how A-Cra&apos;s Credit Card Appraisal System can enhance your institution&apos;s card issuance process.
                        </p>
                        <Link href="/contact" className="btn-primary">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
