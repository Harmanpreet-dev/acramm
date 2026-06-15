import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import bankInternalCreditRatingModelsImg from "@/images/BankInternalCreditRatingModels.png";

export const metadata: Metadata = {
    title: "Bank's (Internal) Credit Rating Models - ACraMM",
    description:
        "Internal Credit Ratings are essential tools used by commercial banks and financial institutions for effective credit risk assessment of their clients.",
};

const subServices = [
    {
        title: "MSME Credit Ratings",
        description: "Credit rating models tailored for Micro, Small, and Medium Enterprises to support accurate risk assessment and faster lending decisions.",
        href: "/services/internal-credit-ratings/msme-credit-ratings",
    },
    {
        title: "Large Company Ratings",
        description: "Comprehensive internal rating models for large corporates, enabling banks to evaluate creditworthiness with consistency and depth.",
        href: "/services/internal-credit-ratings/large-company-ratings",
    },
    {
        title: "Project-Based Ratings",
        description: "Specialized rating models for project finance, assessing viability, risk factors, and repayment capacity of project-based lending.",
        href: "/services/internal-credit-ratings/project-based-ratings",
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
                            <li className="text-brand-red">Bank&apos;s (Internal) Credit Rating Models</li>
                        </ol>
                    </nav>
                    <h1 id="page-heading" className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        Bank&apos;s (Internal) Credit Rating Models
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-gray-300">
                        Internal Credit Ratings are essential tools used by commercial banks and financial institutions for effective credit risk assessment of their clients.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="section-padding bg-white" aria-labelledby="content-heading">
                <div className="section-container">
                    <div className="max-w-3xl space-y-6 text-brand-gray text-lg leading-relaxed">
                        <p>
                            A-Cra offers a comprehensive suite of credit rating models tailored for Micro, Small, and Medium Enterprises (MSMEs), as well as for large corporates. These models are designed to be highly user-friendly, enabling institutions to enhance the accuracy and consistency of their credit evaluation processes.
                        </p>
                        <p>
                            By adopting A-Cra&apos;s rating models, financial institutions can significantly improve the overall quality of their loan portfolios through better risk identification and credit decision-making.
                        </p>
                        <p>
                            A-Cra collaborates closely with commercial banks by entering into formal Memorandums of Understanding (MOUs). During the initial implementation phase, we provide hands-on support and work alongside the institution&apos;s Credit Risk Teams to ensure smooth adoption and effective utilization of the models.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="mt-12 flex justify-center overflow-hidden rounded-xl">
                        <Image
                            src={bankInternalCreditRatingModelsImg}
                            alt="Bank Internal Credit Rating Models"
                            className="w-[70%] h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Sub-services Section */}
            <section className="section-padding bg-brand-light" aria-labelledby="sub-services-heading">
                <div className="section-container">
                    <div className="mb-12">
                        <h2 id="sub-services-heading" className="mb-4 text-2xl font-bold text-brand-dark sm:text-3xl">
                            Our Rating Models
                        </h2>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {subServices.map((service) => (
                            <Link key={service.title} href={service.href} className="block">
                                <article className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-brand-red/20 hover:shadow-md h-full">
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
                                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-red">
                                        Learn More
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </span>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-white">
                <div className="section-container">
                    <div className="rounded-xl bg-brand-light p-8 text-center md:p-12">
                        <h3 className="mb-3 text-xl font-bold text-brand-dark">
                            Interested in Our Internal Credit Rating Models?
                        </h3>
                        <p className="mb-6 text-brand-gray">
                            Get in touch with our team to learn how A-Cra&apos;s rating models can strengthen your institution&apos;s credit risk assessment capabilities.
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
