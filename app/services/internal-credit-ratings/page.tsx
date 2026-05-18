import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import bankInternalCreditRatingModelsImg from "@/images/BankInternalCreditRatingModels.png";

export const metadata: Metadata = {
    title: "Bank (Internal) Credit Rating Models - ACraMM",
    description:
        "Internal Credit Ratings are essential tools used by commercial banks and financial institutions for effective credit risk assessment of their clients.",
};

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
                    <div className="mt-12 overflow-hidden rounded-xl">
                        <Image
                            src={bankInternalCreditRatingModelsImg}
                            alt="Bank Internal Credit Rating Models"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-brand-light">
                <div className="section-container">
                    <div className="rounded-xl bg-white p-8 text-center md:p-12">
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
