import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Bank's (Internal) Project-Based Credit Rating Models - ACraMM",
    description:
        "We are shortly coming up with Project-Based Credit Rating Models for commercial banks for an effective credit risk assessment of their project-based clients.",
};

export default function ProjectBasedRatingsPage() {
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
                            <li><Link href="/services/internal-credit-ratings" className="hover:text-white transition-colors">Bank&apos;s (Internal) Credit Rating Models</Link></li>
                            <li aria-hidden="true">/</li>
                            <li className="text-brand-red">Project-Based Ratings</li>
                        </ol>
                    </nav>
                    <h1 id="page-heading" className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        Bank&apos;s (Internal) Project-Based Credit Rating Models
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-gray-300">
                        We are shortly coming up with Project-Based Credit Rating Models for commercial banks for an effective credit risk assessment of their project-based clients (Road Construction, Power Project, Hospital Project, Hotel Project).
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-brand-light">
                <div className="section-container">
                    <div className="rounded-xl bg-white p-8 text-center md:p-12">
                        <h3 className="mb-3 text-xl font-bold text-brand-dark">
                            Interested in Project-Based Credit Rating Models?
                        </h3>
                        <p className="mb-6 text-brand-gray">
                            Get in touch with our team to learn how A-Cra&apos;s project rating models can support your institution&apos;s project finance decisions.
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
