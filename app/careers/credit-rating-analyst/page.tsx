import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Credit Rating Analyst - ACraMM",
    description:
        "Join ACraMM as a Credit Rating Analyst. Perform detailed analysis of financial statements, business models, and risk factors for credit rating assignments.",
};

export default function CreditRatingAnalystPage() {
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
                            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            <li aria-hidden="true">/</li>
                            <li className="text-brand-red">Credit Rating Analyst</li>
                        </ol>
                    </nav>
                    <h1 id="page-heading" className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        Credit Rating Analyst
                    </h1>
                </div>
            </section>

            {/* Key Responsibilities */}
            <section className="section-padding bg-white" aria-labelledby="responsibilities-heading">
                <div className="section-container">
                    <div className="max-w-4xl">
                        <h2 id="responsibilities-heading" className="text-2xl font-bold text-brand-dark sm:text-3xl">
                            Key Responsibilities
                        </h2>

                        <h3 className="mt-6 font-semibold text-brand-dark">A. Corporate Credit Ratings:</h3>
                        <ul className="mt-3 space-y-2 text-brand-gray">
                            <li className="flex items-start gap-2">
                                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                Assist the Head of Credit Rating Team in Corporate Credit Ratings for Commercial Banks, Insurance Companies, NBFIs, and other type of Companies.
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                Perform detailed analysis of financial statements, business models, industry dynamics, and risk factors.
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                Assist the Head of Credit Rating Team in preparing Credit Rating Rationale reports.
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                Participate in the management meetings and site visits for data gathering and validation.
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                Participate in the Rating Committee Meetings for finalisation of Ratings and respond to queries raised by committee members.
                            </li>
                        </ul>

                        <h3 className="mt-8 font-semibold text-brand-dark">B. Loan Origination Systems:</h3>
                        <ul className="mt-3 space-y-2 text-brand-gray">
                            <li className="flex items-start gap-2">
                                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                Closely work with client bank&apos;s Loan Teams in implementation of internal Credit Rating Models and Loan Origination Systems for business and retail loans.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Educational Qualifications */}
            <section className="section-padding bg-brand-light" aria-labelledby="qualifications-heading">
                <div className="section-container">
                    <div className="max-w-4xl">
                        <h2 id="qualifications-heading" className="text-2xl font-bold text-brand-dark sm:text-3xl">
                            Educational Qualifications and Skills
                        </h2>
                        <ul className="mt-6 space-y-2 text-brand-gray">
                            <li className="flex items-start gap-2">
                                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                Bachelor&apos;s degree preferably in Finance, Accounting, Economics, or any other related field.
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                Sound understanding of accounting and financial statements.
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                Knowledge of credit risk assessment and lending practices of commercial banks.
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                Good MS Office Skills.
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                Good English speaking and writing skills.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* How to Apply */}
            <section className="section-padding bg-white">
                <div className="section-container">
                    <div className="mx-auto max-w-2xl rounded-xl bg-brand-dark p-8 text-center md:p-12">
                        <h3 className="mb-4 text-xl font-bold text-white">
                            How to Apply
                        </h3>
                        <p className="mb-6 text-gray-300">
                            Send your CV to:
                        </p>
                        <div className="mb-6 space-y-2">
                            <a href="mailto:Info@acramm.com" className="block text-brand-red hover:underline">
                                Info@acramm.com
                            </a>
                            <a href="mailto:angroolasp@acramm.com" className="block text-brand-red hover:underline">
                                angroolasp@acramm.com
                            </a>
                        </div>
                        <p className="mb-2 text-gray-300">Or Call:</p>
                        <div className="space-y-1 text-gray-300">
                            <p>Mr. Bo Bo Myint – <a href="tel:09440700276" className="text-brand-red hover:underline">09440700276</a></p>
                            <p>Mr. Surinder Angroola – <a href="tel:09400759957" className="text-brand-red hover:underline">09400759957</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
