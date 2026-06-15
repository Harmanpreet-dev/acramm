import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import trainingImg from "@/images/traning.png";

export const metadata: Metadata = {
    title: "Training and Capacity Building Services - ACraMM",
    description:
        "A-Cra provides Training and Capacity Building Services to commercial banks in key areas of banking operations.",
};

const subServices = [
    {
        title: "40-Hours Program on Credit Risk Management",
        description: "A comprehensive training program designed to develop credit risk skills for quality lending decisions, particularly for Micro, Small, and Medium Enterprises.",
        href: "/services/training-capacity-building/credit-risk-management",
    },
    {
        title: "6-Hours Workshop on IFRS-9 and Basel Norms",
        description: "A focused workshop providing banking professionals with a clear understanding of IFRS-9 requirements and Basel regulatory frameworks.",
        href: "/services/training-capacity-building/ifrs9-basel-norms",
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
                            <li className="text-brand-red">Training and Capacity Building Services</li>
                        </ol>
                    </nav>
                    <h1 id="page-heading" className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        Training and Capacity Building Services
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-gray-300">
                        A-Cra provides Training and Capacity Building Services to commercial banks in key areas of banking operations.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="section-padding bg-white" aria-labelledby="content-heading">
                <div className="section-container">
                    <div className="max-w-3xl space-y-6 text-brand-gray text-lg leading-relaxed">
                        <p>
                            A-Cra provides Training and Capacity Building Services to commercial banks in key areas of banking operations.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="mt-12 flex justify-center overflow-hidden rounded-xl">
                        <Image
                            src={trainingImg}
                            alt="Training and Capacity Building Services"
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
                            Our Training Programs
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
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
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
                            Interested in Our Training Programs?
                        </h3>
                        <p className="mb-6 text-brand-gray">
                            Get in touch with our team to learn how A-Cra can support your institution with tailored training and capacity building programs.
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
