import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Consulting and Training Services - ACraMM",
    description:
        "A-CRA provides comprehensive consulting and training services including financial risk consulting, credit risk training, banking compliance workshops, and IFRS-9 training programs.",
};

const subServices = [
    {
        title: "Financial Risk Consulting",
        description:
            "Expert advisory services on financial risk management, helping institutions develop robust risk frameworks, policies, and governance structures aligned with international best practices.",
        icon: (
            <svg className="h-6 w-6 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
        ),
    },
    {
        title: "Credit Risk Training",
        description:
            "In-depth training programs on credit analysis methodologies, risk assessment frameworks, credit scoring techniques, and portfolio management best practices for banking professionals.",
        icon: (
            <svg className="h-6 w-6 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
        ),
    },
    {
        title: "Banking Compliance Workshops",
        description:
            "Specialized workshops covering Basel requirements, anti-money laundering (AML), know your customer (KYC), and local regulatory compliance for financial institutions.",
        icon: (
            <svg className="h-6 w-6 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
    },
    {
        title: "Loan Assessment Training",
        description:
            "Practical training on loan appraisal techniques, SME lending practices, collateral valuation, and credit decision-making for loan officers and credit analysts.",
        icon: (
            <svg className="h-6 w-6 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>
        ),
    },
    {
        title: "IFRS-9 Training Programs",
        description:
            "Dedicated training on IFRS-9 accounting standards, expected credit loss concepts, staging criteria, impairment modeling, and disclosure requirements for finance and risk teams.",
        icon: (
            <svg className="h-6 w-6 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
        ),
    },
];

export default function TrainingCapacityBuildingPage() {
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
                            <li className="text-brand-red">Consulting &amp; Training</li>
                        </ol>
                    </nav>
                    <h1 id="page-heading" className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        Consulting and Training Services
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-gray-300">
                        Comprehensive consulting and training programs designed for bankers, MFI professionals, and financial sector specialists to strengthen institutional capabilities.
                    </p>
                </div>
            </section>

            {/* Sub-Service Cards */}
            <section className="section-padding bg-white" aria-labelledby="subservices-heading">
                <div className="section-container">
                    <div className="mb-12">
                        <h2 id="subservices-heading" className="mb-4 text-2xl font-bold text-brand-dark sm:text-3xl">
                            Our Training &amp; Consulting Programs
                        </h2>
                        <p className="max-w-3xl text-brand-gray">
                            We offer a wide range of consulting and training services covering financial risk, credit analysis, regulatory compliance, and IFRS-9 implementation to build capacity across the financial sector.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                            Need a Customized Training Program?
                        </h3>
                        <p className="mb-6 text-brand-gray">
                            We design bespoke consulting and training solutions tailored to your institution&apos;s specific needs and challenges.
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
