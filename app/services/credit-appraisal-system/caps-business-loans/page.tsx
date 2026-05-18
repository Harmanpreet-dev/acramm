import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Credit Appraisal Processing System (CAPS) - Business Loans - ACraMM",
    description:
        "A-Cra provides a comprehensive Credit Appraisal Processing System (CAPS) designed for all types of business loans with a structured End-to-End 4-Step Process.",
};

const processSteps = [
    {
        step: "i",
        title: "Financial Analysis",
        description: "In-depth evaluation of financial statements, cash flows, and key financial indicators.",
    },
    {
        step: "ii",
        title: "Credit Rating (Risk Assessment)",
        description: "Systematic assessment of borrower risk using structured rating methodologies.",
    },
    {
        step: "iii",
        title: "Appraisal Note Preparation",
        description: "Development of detailed and standardized credit appraisal reports.",
    },
    {
        step: "iv",
        title: "Credit Approval",
        description: "Streamlined decision-making supported by robust analysis and clear recommendation.",
    },
];

const benefits = [
    "Quality Credit Appraisals",
    "Time and Cost Optimization",
    "Credit Skill Development",
    "Smooth integration with IFRS-9",
];

export default function CAPSBusinessLoansPage() {
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
                            <li className="text-brand-red">CAPS (Business Loans)</li>
                        </ol>
                    </nav>
                    <h1 id="page-heading" className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        Credit Appraisal Processing System (CAPS)
                    </h1>
                    <p className="mt-2 text-xl text-brand-red font-semibold">Business Loans</p>
                    <p className="mt-4 max-w-2xl text-lg text-gray-300">
                        A-Cra provides a comprehensive Credit Appraisal Processing System (CAPS) designed for all types of business loans.
                    </p>
                </div>
            </section>

            {/* 4-Step Process Section */}
            <section className="section-padding bg-white" aria-labelledby="process-heading">
                <div className="section-container">
                    <div className="mb-12">
                        <h2 id="process-heading" className="mb-4 text-2xl font-bold text-brand-dark sm:text-3xl">
                            Structured End-to-End 4-Step Process
                        </h2>
                        <p className="max-w-3xl text-brand-gray text-lg">
                            The system delivers a structured End-to-End Solution through a well-defined 4-Step Process:
                        </p>
                    </div>

                    <div className="space-y-6">
                        {processSteps.map((item) => (
                            <div key={item.step} className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red text-sm font-bold text-white">
                                        {item.step}
                                    </div>
                                </div>
                                <div className="flex-1 rounded-lg border border-gray-100 bg-white p-5 shadow-sm">
                                    <h3 className="mb-1 font-semibold text-brand-dark">{item.title}</h3>
                                    <p className="text-sm leading-relaxed text-brand-gray">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="mt-8 max-w-3xl text-brand-gray text-lg leading-relaxed">
                        This framework ensures consistency, transparency, and high-quality credit decision-making across the lending lifecycle.
                    </p>
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
                            Interested in CAPS for Business Loans?
                        </h3>
                        <p className="mb-6 text-brand-gray">
                            Get in touch with our team to learn how A-Cra&apos;s Credit Appraisal Processing System can enhance your institution&apos;s lending process.
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
