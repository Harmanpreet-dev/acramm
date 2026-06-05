import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import consultingImg from "@/images/Consulting.png";

export const metadata: Metadata = {
    title: "Policy Formulation Services - Consulting Services - ACraMM",
    description:
        "A-Cra team may support commercial banks and other financial institutions in their Policy Formulation.",
};

export default function PolicyFormulationPage() {
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
                            <li><Link href="/services/consulting-services" className="hover:text-white transition-colors">Consulting Services</Link></li>
                            <li aria-hidden="true">/</li>
                            <li className="text-brand-red">Policy Formulation Services</li>
                        </ol>
                    </nav>
                    <h1 id="page-heading" className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        Policy Formulation Services
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-gray-300">
                        A-Cra team may support commercial banks and other financial institutions in their Policy Formulation.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="section-padding bg-white" aria-labelledby="content-heading">
                <div className="section-container">
                    <div className="max-w-3xl space-y-6 text-brand-gray text-lg leading-relaxed">
                        <p>
                            A-Cra team supports commercial banks and other financial institutions in different Policy Formulation :
                        </p>
                    </div>

                    {/* Image */}
                    <div className="mt-12 overflow-hidden rounded-xl">
                        <Image
                            src={consultingImg}
                            alt="Policy Formulation Services"
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
                            Need Policy Formulation Support?
                        </h3>
                        <p className="mb-6 text-brand-gray">
                            Get in touch with our team to learn how A-Cra can help your institution develop effective credit and risk management policies.
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
