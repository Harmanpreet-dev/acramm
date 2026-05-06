import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Bank (Internal) Credit Rating Models - ACraMM",
    description:
        "A-CRA provides internal credit rating models for banks, enabling robust internal risk assessment, credit scoring, portfolio risk analysis, and regulatory compliance.",
};

const subServices = [
    {
        title: "Internal Risk Assessment Models",
        description:
            "Comprehensive risk assessment frameworks tailored for banks to evaluate borrower creditworthiness using quantitative and qualitative factors aligned with Basel regulatory requirements.",
        icon: (
            <svg className="h-6 w-6 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
    },
    {
        title: "Credit Scoring Models",
        description:
            "Advanced statistical and machine learning-based credit scoring models that automate credit decisions, reduce processing time, and improve accuracy across different loan portfolios.",
        icon: (
            <svg className="h-6 w-6 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
        ),
    },
    {
        title: "Portfolio Risk Models",
        description:
            "Holistic portfolio-level risk models that measure concentration risk, correlation effects, and expected/unexpected losses to support strategic portfolio management decisions.",
        icon: (
            <svg className="h-6 w-6 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
            </svg>
        ),
    },
    {
        title: "Regulatory Compliance Models",
        description:
            "Models designed to meet Basel II/III/IV requirements, including Probability of Default (PD), Loss Given Default (LGD), and Exposure at Default (EAD) estimation with full validation frameworks.",
        icon: (
            <svg className="h-6 w-6 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
    },
];

export default function InternalCreditRatingsPage() {
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
                            <li className="text-brand-red">Bank (Internal) Credit Rating Models</li>
                        </ol>
                    </nav>
                    <h1 id="page-heading" className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        Bank (Internal) Credit Rating Models
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-gray-300">
                        Robust internal credit rating models designed for banks to strengthen their internal risk assessment frameworks and credit decision-making processes.
                    </p>
                </div>
            </section>

            {/* Sub-Service Cards */}
            <section className="section-padding bg-white" aria-labelledby="subservices-heading">
                <div className="section-container">
                    <div className="mb-12">
                        <h2 id="subservices-heading" className="mb-4 text-2xl font-bold text-brand-dark sm:text-3xl">
                            Our Internal Rating Solutions
                        </h2>
                        <p className="max-w-3xl text-brand-gray">
                            Our internal credit rating models are built to comply with Basel regulatory requirements while providing banks with practical, actionable credit risk assessments that integrate seamlessly with existing banking systems.
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
                            Need a Custom Internal Rating Model?
                        </h3>
                        <p className="mb-6 text-brand-gray">
                            We design bespoke internal rating solutions tailored to your bank&apos;s specific portfolio and regulatory requirements.
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
