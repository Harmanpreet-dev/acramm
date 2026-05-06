import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "IFRS-9 Implementation Support Service - ACraMM",
    description:
        "A-CRA provides comprehensive IFRS-9 implementation support including ECL models, data validation, regulatory compliance, and financial risk assessment.",
};

const subServices = [
    {
        title: "Expected Credit Loss (ECL) Models",
        description:
            "Development and implementation of ECL models including Probability of Default (PD), Loss Given Default (LGD), and Exposure at Default (EAD) estimation with forward-looking macroeconomic adjustments.",
        icon: (
            <svg className="h-6 w-6 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
        ),
    },
    {
        title: "Data Validation & Reporting",
        description:
            "Comprehensive data quality frameworks, validation processes, and reporting templates to ensure accurate IFRS-9 disclosures and compliance with regulatory reporting requirements.",
        icon: (
            <svg className="h-6 w-6 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
            </svg>
        ),
    },
    {
        title: "Regulatory Compliance Support",
        description:
            "Expert guidance on meeting IFRS-9 regulatory requirements, staging criteria and classification frameworks, and alignment with local and international accounting standards.",
        icon: (
            <svg className="h-6 w-6 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
    },
    {
        title: "Financial Risk Assessment",
        description:
            "Holistic financial risk assessment services for MFIs and NBFIs, evaluating institutional strength, governance, portfolio quality, and operational efficiency to support IFRS-9 implementation.",
        icon: (
            <svg className="h-6 w-6 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
        ),
    },
];

export default function MfiNbfiGradingsPage() {
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
                            <li className="text-brand-red">IFRS-9 Implementation Support</li>
                        </ol>
                    </nav>
                    <h1 id="page-heading" className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        IFRS-9 Implementation Support Service
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-gray-300">
                        Comprehensive IFRS-9 implementation support for financial institutions, including ECL model development, data validation, regulatory compliance, and financial risk assessment.
                    </p>
                </div>
            </section>

            {/* Sub-Service Cards */}
            <section className="section-padding bg-white" aria-labelledby="subservices-heading">
                <div className="section-container">
                    <div className="mb-12">
                        <h2 id="subservices-heading" className="mb-4 text-2xl font-bold text-brand-dark sm:text-3xl">
                            Our IFRS-9 Solutions
                        </h2>
                        <p className="max-w-3xl text-brand-gray">
                            We provide end-to-end IFRS-9 implementation support, helping MFIs and NBFIs navigate the complexities of expected credit loss accounting with practical, actionable solutions.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid gap-6 sm:grid-cols-2">
                        {subServices.map((service) => (
                            <article
                                key={service.title}
                                className="group rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:border-brand-red/20 hover:shadow-md"
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-red/10">
                                    {service.icon}
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

                    {/* CTA Section */}
                    <div className="mt-16 rounded-xl bg-brand-light p-8 text-center md:p-12">
                        <h3 className="mb-3 text-xl font-bold text-brand-dark">
                            Ready to Implement IFRS-9?
                        </h3>
                        <p className="mb-6 text-brand-gray">
                            Our team of experts will guide your institution through every step of the IFRS-9 implementation process.
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
