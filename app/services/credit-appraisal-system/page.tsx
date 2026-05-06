import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Credit Appraisal Processing System - ACraMM",
    description:
        "A-CRA's Loan Origination and Credit Appraisal Processing Systems for business loans, retail loans, and credit cards.",
};

const subServices = [
    {
        title: "Business Loans (CAPS)",
        description: "Credit Appraisal Processing System for business and commercial lending. Automates the entire credit assessment workflow from application to disbursement.",
        icon: (
            <svg className="h-6 w-6 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
            </svg>
        ),
    },
    {
        title: "Retail Loans (LOS)",
        description: "Loan Origination System for retail lending products including personal loans, auto loans, and home loans with automated decisioning.",
        icon: (
            <svg className="h-6 w-6 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
        ),
    },
    {
        title: "Credit Cards (CCAS)",
        description: "Credit Card Application System providing end-to-end processing for credit card applications with integrated scoring and limit assignment.",
        icon: (
            <svg className="h-6 w-6 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
            </svg>
        ),
    },
];

export default function CreditAppraisalSystemPage() {
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
                            <li className="text-brand-red">Credit Appraisal Processing System</li>
                        </ol>
                    </nav>
                    <h1 id="page-heading" className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        Loan Origination (Appraisal) Systems
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-gray-300">
                        Cutting-edge technology solutions that streamline the credit appraisal process, automate workflows, and digitize data collection for financial institutions.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding bg-white" aria-labelledby="systems-heading">
                <div className="section-container">
                    <div className="mb-12">
                        <h2 id="systems-heading" className="mb-4 text-2xl font-bold text-brand-dark sm:text-3xl">
                            Our Systems
                        </h2>
                        <p className="max-w-3xl text-brand-gray">
                            We offer specialized loan origination and credit appraisal systems tailored for different lending products, each designed to reduce processing time and improve accuracy.
                        </p>
                    </div>

                    {/* Sub-service Cards */}
                    <div className="grid gap-8 md:grid-cols-3">
                        {subServices.map((service) => (
                            <article
                                key={service.title}
                                className="group rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:border-brand-red/20 hover:shadow-md"
                            >
                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-brand-red/10">
                                    {service.icon}
                                </div>
                                <h3 className="mb-3 text-lg font-semibold text-brand-dark group-hover:text-brand-red transition-colors">
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
