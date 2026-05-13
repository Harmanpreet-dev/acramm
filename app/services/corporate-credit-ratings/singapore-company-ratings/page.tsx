import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Singapore Company Ratings - ACraMM",
    description:
        "A-Cra offers Corporate Credit Ratings for Singapore and Malaysia based companies under a Tie-up arrangement.",
};

export default function SingaporeCompanyRatingsPage() {
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
                            <li><Link href="/services/corporate-credit-ratings" className="hover:text-white transition-colors">Corporate Credit Ratings</Link></li>
                            <li aria-hidden="true">/</li>
                            <li className="text-brand-red">Singapore Company Ratings</li>
                        </ol>
                    </nav>
                    <h1 id="page-heading" className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        Singapore Company Ratings
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="section-padding bg-white">
                <div className="section-container">
                    <p className="max-w-3xl text-lg text-brand-gray">
                        A-Cra offers Corporate Credit Ratings for Singapore and Malaysia based companies under a Tie-up arrangement.
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-white">
                <div className="section-container">
                    <div className="rounded-xl bg-brand-light p-8 text-center md:p-12">
                        <h3 className="mb-3 text-xl font-bold text-brand-dark">
                            Interested in Singapore Company Ratings?
                        </h3>
                        <p className="mb-6 text-brand-gray">
                            Get in touch with our team to learn more about our rating services.
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
