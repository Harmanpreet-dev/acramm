import { Metadata } from "next";
import Link from "next/link";
// import Image from "next/image";
// import consultingImg from "@/images/Consulting.png";

export const metadata: Metadata = {
    title: "Consulting Services (Banks/NBFIs) - ACraMM",
    description:
        "A-Cra provides consulting services for Banks and NBFIs including IFRS-9 Implementation Support and Policy Formulation Services.",
};

const subServices = [
    {
        title: "IFRS-9 Implementation Support",
        description: "Comprehensive support for commercial banks and financial institutions in implementing IFRS-9 compliant provisioning based on Expected Credit Losses.",
        href: "/services/consulting-services/ifrs9-implementation",
    },
    {
        title: "Policy Formulation Services",
        description: "Expert assistance in formulating credit policies, risk management frameworks, and operational guidelines for banks and NBFIs.",
        href: "/services/consulting-services/policy-formulation",
    },
];

export default function ConsultingServicesPage() {
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
                            <li className="text-brand-red">Consulting Services (Banks/NBFIs)</li>
                        </ol>
                    </nav>
                    <h1 id="page-heading" className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        Consulting Services (Banks/NBFIs)
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-gray-300">
                        A-Cra provides specialized consulting services to commercial banks and Non-Banking Financial Institutions in key areas of risk management and regulatory compliance.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="section-padding bg-white" aria-labelledby="content-heading">
                <div className="section-container">
                    <div className="max-w-3xl space-y-6 text-brand-gray text-lg leading-relaxed">
                        <p>
                            A-Cra&apos;s consulting services are designed to help banks and NBFIs navigate complex regulatory requirements and strengthen their risk management frameworks. Our team of experienced professionals brings deep domain expertise in credit risk, financial reporting standards, and banking operations.
                        </p>
                        <p>
                            We work closely with institutions to understand their specific needs and deliver tailored solutions that align with international best practices and local regulatory expectations.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="mt-12 overflow-hidden rounded-xl">
                        {/* <Image
                            src={consultingImg}
                            alt="Consulting Services"
                            className="w-full h-auto"
                        /> */}
                    </div>
                </div>
            </section>

            {/* Sub-services Section */}
            <section className="section-padding bg-brand-light" aria-labelledby="sub-services-heading">
                <div className="section-container">
                    <div className="mb-12">
                        <h2 id="sub-services-heading" className="mb-4 text-2xl font-bold text-brand-dark sm:text-3xl">
                            Our Consulting Services
                        </h2>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
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
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
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
                            Need Consulting Support?
                        </h3>
                        <p className="mb-6 text-brand-gray">
                            Get in touch with our team to learn how A-Cra can support your institution with tailored consulting services.
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
