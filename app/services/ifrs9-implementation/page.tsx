import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ifrs9Img from "@/images/ IFRS9.png";

export const metadata: Metadata = {
    title: "IFRS-9 Implementation Support Service - ACraMM",
    description:
        "A-Cra offers IFRS-9 Implementation support services to commercial banks and other financial institutions in Myanmar.",
};

export default function IFRS9ImplementationPage() {
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
                            <li className="text-brand-red">IFRS-9 Implementation Support Service</li>
                        </ol>
                    </nav>
                    <h1 id="page-heading" className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        IFRS-9 Implementation Support Service
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-gray-300">
                        A-Cra offers IFRS-9 Implementation support services to commercial banks and other financial institutions in Myanmar.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="section-padding bg-white" aria-labelledby="content-heading">
                <div className="section-container">
                    <div className="max-w-3xl space-y-6 text-brand-gray text-lg leading-relaxed">
                        <p>
                            International Financial Reporting Standard (IFRS-9) requires provisioning to be carried out on the basis of &ldquo;Expected Credit Losses (ECL)&rdquo; as against &ldquo;Incurred Loss Approach&rdquo;.
                        </p>
                        <p>
                            The IFRS-9 standard necessitates a &ldquo;forward-looking&rdquo; impairment model for the estimation of credit loss provisions by financial institutions.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="mt-12 overflow-hidden rounded-xl">
                        <Image
                            src={ifrs9Img}
                            alt="IFRS-9 Implementation Support"
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
                            Need IFRS-9 Implementation Support?
                        </h3>
                        <p className="mb-6 text-brand-gray">
                            Get in touch with our team to learn how A-Cra can help your institution transition to IFRS-9 compliant provisioning.
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
