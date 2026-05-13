import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Myanmar Company Ratings - ACraMM",
    description:
        "A-Cra offers Corporate Credit Ratings (Due Diligence) for business entities in Myanmar.",
};

export default function MyanmarCompanyRatingsPage() {
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
                            <li className="text-brand-red">Myanmar Company Ratings</li>
                        </ol>
                    </nav>
                    <h1 id="page-heading" className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        Myanmar Company Ratings (Business Companies)
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="section-padding bg-white">
                <div className="section-container">
                    <div className="max-w-3xl">
                        <p className="text-lg text-brand-gray">
                            A-Cra offers Corporate Credit Ratings (Due Diligence) for business entities in Myanmar. These ratings provide an independent and objective assessment of a company&#39;s overall creditworthiness and financial strength.
                        </p>
                        <p className="mt-6 text-lg text-brand-gray">
                            These ratings are particularly valuable for Myanmar companies engaged in international trade, providing them the benefits outlined as under :
                        </p>
                        <ul className="mt-6 space-y-4 text-brand-gray">
                            <li className="flex items-start gap-3">
                                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span><strong>Enhance credibility with foreign counterparties:</strong> Supporting trust in cross-border transactions and long-term business relationships.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span><strong>Facilitate trade and business expansion:</strong> Assisting companies in securing better terms with suppliers, buyers, and financial institutions.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span><strong>Strengthening access to funding:</strong> Improving confidence among lenders, investors, and strategic partners.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-white">
                <div className="section-container">
                    <div className="rounded-xl bg-brand-light p-8 text-center md:p-12">
                        <h3 className="mb-3 text-xl font-bold text-brand-dark">
                            Interested in Myanmar Company Ratings?
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
