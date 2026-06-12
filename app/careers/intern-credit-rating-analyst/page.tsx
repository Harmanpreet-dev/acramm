import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Intern – Credit Rating Analyst - ACraMM",
    description:
        "We are looking for final-year students doing BBA / MBA or any other Degree in Accounting or Finance for placements as an Intern - Credit Rating Analyst.",
};

export default function InternCreditRatingAnalystPage() {
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
                            <li className="text-brand-red">Intern – Credit Rating Analyst</li>
                        </ol>
                    </nav>
                    <h1 id="page-heading" className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        Intern – Credit Rating Analyst
                    </h1>
                </div>
            </section>

            {/* Position Details */}
            <section className="section-padding bg-white" aria-labelledby="description-heading">
                <div className="section-container">
                    <div className="max-w-4xl">
                        <h2 id="description-heading" className="sr-only">Position Description</h2>
                        <p className="text-lg text-brand-gray">
                            We are looking for final-year students doing BBA / MBA or any other Degree in Accounting or Finance for placements as an <span className="font-semibold text-brand-dark">&quot;Intern - Credit Rating Analyst&quot;</span>.
                        </p>
                        <p className="mt-3 text-lg text-brand-gray">
                            The selected candidates shall have a chance to grow as an expert in Credit Risk Assessment in banking and finance.
                        </p>

                        <h3 className="mt-8 text-xl font-semibold text-brand-dark">
                            Are you the one we are looking for?
                        </h3>
                        <ul className="mt-4 space-y-2 text-brand-gray">
                            <li className="flex items-start gap-2">
                                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                Enthusiastic about the chance to grow with new ideas
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                Eager to learn and use Credit Risk Assessment tools
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                Good English skills
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                Good MS Office Skills
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-brand-red" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                Have a basic finance understanding
                            </li>
                        </ul>
                        <p className="mt-4 text-brand-gray">
                            Candidates living in and around downtown Yangon are encouraged to apply.
                        </p>
                    </div>
                </div>
            </section>

            {/* How to Apply */}
            <section className="section-padding bg-brand-light">
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
