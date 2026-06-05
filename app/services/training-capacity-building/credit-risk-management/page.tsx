import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import trainingImg from "@/images/traning.png";

export const metadata: Metadata = {
    title: "40-Hours Program on Credit Risk Management - Training - ACraMM",
    description:
        "A-Cra offers a comprehensive 40-Hours Training Program on Credit Risk Management for banking professionals and financial institution staff.",
};

export default function CreditRiskManagementPage() {
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
                            <li><Link href="/services/training-capacity-building" className="hover:text-white transition-colors">Training and Capacity Building</Link></li>
                            <li aria-hidden="true">/</li>
                            <li className="text-brand-red">Credit Risk Management Program</li>
                        </ol>
                    </nav>
                    <h1 id="page-heading" className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        40-Hours Program on Credit Risk Management
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-gray-300">
                        A comprehensive training program designed to develop credit risk skills for quality lending decisions, particularly for Micro, Small, and Medium Enterprises.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="section-padding bg-white" aria-labelledby="content-heading">
                <div className="section-container">
                    <div className="max-w-3xl space-y-6 text-brand-gray text-lg leading-relaxed">
                        <p>
                            A-Cra&apos;s 40-Hours Program on Credit Risk Management is a comprehensive training course designed for banking professionals involved in credit appraisal, risk assessment, and lending decisions.
                        </p>
                        <p>
                            The program covers fundamental and advanced concepts of credit risk management, including financial statement analysis, credit scoring methodologies, risk rating frameworks, portfolio management, and regulatory requirements.
                        </p>
                        <p>
                            Participants gain practical skills through case studies, hands-on exercises, and real-world scenarios that prepare them to make informed and consistent credit decisions, particularly for MSME lending.
                        </p>
                        <p>
                            The program is delivered by experienced credit risk professionals with deep expertise in banking operations and risk management practices.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="mt-12 overflow-hidden rounded-xl">
                        <Image
                            src={trainingImg}
                            alt="Credit Risk Management Training Program"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Download PDF */}
                    <div className="mt-8">
                        <a
                            href="/pdf/40-Hours-Credit-Risk-Management-Program.pdf"
                            download
                            className="btn-primary inline-flex items-center gap-2"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            Download Program Brochure (PDF)
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-brand-light">
                <div className="section-container">
                    <div className="rounded-xl bg-white p-8 text-center md:p-12">
                        <h3 className="mb-3 text-xl font-bold text-brand-dark">
                            Interested in the Credit Risk Management Program?
                        </h3>
                        <p className="mb-6 text-brand-gray">
                            Get in touch with our team to learn more about scheduling and customizing this training program for your institution.
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
