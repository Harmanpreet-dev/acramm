import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import loanOriginationSystemImg from "@/images/Loan-origination-system.jpg";

export const metadata: Metadata = {
    title: "Loan Origination (Appraisal) Systems - ACraMM",
    description:
        "A-Cra offers Loan Origination (Appraisal) Systems tailored for diverse customer segments, including business clients, retail personal loan borrowers, and credit card customers.",
};

const benefits = [
    {
        title: "Enhanced Quality of Credit Appraisals",
        description: "Structured and Standardized processes lead to more informed and reliable credit decisions.",
    },
    {
        title: "Time and Cost Optimization",
        description: "Automation and process efficiency reduce turnaround time and operational costs.",
    },
    {
        title: "Strengthening Credit Skills",
        description: "Builds internal capabilities through consistent methodologies and practical exposure.",
    },
    {
        title: "Seamless Alignment with IFRS-9 Requirements",
        description: "Facilitates better credit risk assessment with aligned Probability of Default (PD) for calculation of Expected Credit Loss (ECL) provisioning in line with IFRS-9 standards.",
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
                            <li className="text-brand-red">Loan Origination (Appraisal) Systems</li>
                        </ol>
                    </nav>
                    <h1 id="page-heading" className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        Loan Origination (Appraisal) Systems
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-gray-300">
                        A-Cra offers Loan Origination (Appraisal) Systems tailored for diverse customer segments, including business clients, retail personal loan borrowers, and credit card customers.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="section-padding bg-white" aria-labelledby="content-heading">
                <div className="section-container">
                    <div className="max-w-3xl space-y-6 text-brand-gray text-lg leading-relaxed">
                        <p>
                            These systems are designed to streamline the credit appraisal process while enhancing consistency, efficiency, and risk management.
                        </p>
                        <p>
                            A-Cra works closely with financial institutions by collaborating with their Credit Risk Teams on a pilot project basis. This approach ensures seamless implementation, effective customization, and smooth adoption of the systems.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="mt-12 overflow-hidden rounded-xl">
                        <Image
                            src={loanOriginationSystemImg}
                            alt="Loan Origination System"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section-padding bg-brand-light" aria-labelledby="benefits-heading">
                <div className="section-container">
                    <div className="mb-12">
                        <h2 id="benefits-heading" className="mb-4 text-2xl font-bold text-brand-dark sm:text-3xl">
                            Benefits for Financial Institutions
                        </h2>
                        <p className="max-w-3xl text-brand-gray">
                            Adoption of these systems will have the following benefits for the financial institutions:
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        {benefits.map((benefit) => (
                            <div
                                key={benefit.title}
                                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
                            >
                                <div className="mb-3 flex items-center gap-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-red/10">
                                        <svg className="h-4 w-4 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-brand-dark">
                                        {benefit.title}
                                    </h3>
                                </div>
                                <p className="text-sm leading-relaxed text-brand-gray pl-11">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-white">
                <div className="section-container">
                    <div className="rounded-xl bg-brand-light p-8 text-center md:p-12">
                        <h3 className="mb-3 text-xl font-bold text-brand-dark">
                            Interested in Our Loan Origination Systems?
                        </h3>
                        <p className="mb-6 text-brand-gray">
                            Get in touch with our team to learn how A-Cra&apos;s systems can streamline your institution&apos;s credit appraisal process.
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
