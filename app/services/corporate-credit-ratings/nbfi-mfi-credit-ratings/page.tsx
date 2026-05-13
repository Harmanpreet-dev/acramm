import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import nbfiImg from "@/images/NBFICreditRatings.png";

export const metadata: Metadata = {
    title: "NBFI / MFI Credit Ratings - ACraMM",
    description:
        "We offer CAMELS + CPP based Credit Ratings for Non-Bank Financial Institutions (NBFIs), Microfinance Institutions (MFIs), and other financial institutions.",
};

const ratingSteps = [
    "We initiate the rating process upon receipt of formal request / mandate from the rating client company.",
    "Client is provided with the list of requirements and broad framework for discussions with their management.",
    "After getting the necessary information, our Rating Team consisting of rating analysts with required expertise and skills start the evaluation process.",
    "The evaluation process includes evaluation of the financial statements and other reports / documents, discussions with the owners and top management and so on. We also depend on secondary source of information including our own market research about the client and their business.",
    "After detailed evaluation, a provisional rating score is presented to Rating Committee which is an authority for assigning the rating.",
    "Assigned rating along with the key issues is communicated to the client company top management for acceptance.",
    "If the company does not find the rating acceptable, it has right for appeal for review. Such reviews are undertaken if the company has been able to produce some additional inputs.",
    "During review, company's views are presented to the Rating Committee. If satisfied with the fresh inputs / clarifications, Committee may review the Rating and assign the Final Rating.",
];

export default function NbfiMfiCreditRatingsPage() {
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
                            <li className="text-brand-red">NBFI / MFI Credit Ratings</li>
                        </ol>
                    </nav>
                    <h1 id="page-heading" className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        NBFI / MFI Credit Ratings
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-gray-300">
                        We offer &ldquo;CAMELS + CPP&rdquo; based Credit Ratings for Non-Bank Financial Institutions (NBFIs), Microfinance Institutions (MFIs), and other financial institutions. Our methodology combines a robust evaluation of financial, operational, and governance parameters to provide a holistic assessment of creditworthiness.
                    </p>
                </div>
            </section>

            {/* Value Propositions */}
            <section className="section-padding bg-white" aria-labelledby="value-heading">
                <div className="section-container">
                    <div className="mb-8">
                        <p className="max-w-3xl text-lg text-brand-gray">
                            These ratings serve the following key purposes:
                        </p>
                    </div>

                    <ul className="list-disc pl-6 space-y-3 max-w-3xl text-brand-gray">
                        <li>Assessment of Internal Strengths and Weaknesses : Enabling institutions to better understand their financial health, risk profile and operational efficiency.</li>
                        <li>Facilitating Fund-Raising and Business Growth : Enhancing credibility with investors, lenders and other stakeholders, thereby supporting access to capital.</li>
                    </ul>

                    <p className="mt-8 max-w-3xl text-brand-gray">
                        We apply a comprehensive and structured rating scale, as outlined below:
                    </p>
                </div>

                <div className="section-container mt-5">
                    <div className="overflow-hidden rounded-xl">
                        <Image
                            src={nbfiImg}
                            alt="NBFI / MFI Credit Ratings"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Rating Process */}
            <section className="section-padding bg-brand-light" aria-labelledby="process-heading">
                <div className="section-container">
                    <div className="mb-12">
                        <h2 id="process-heading" className="mb-4 text-2xl font-bold text-brand-dark sm:text-3xl">
                            Our Rating Process :
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {ratingSteps.map((step, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red text-sm font-bold text-white">
                                        {String.fromCharCode(97 + index)}
                                    </div>
                                </div>
                                <div className="flex-1 rounded-lg border border-gray-100 bg-white p-5 shadow-sm">
                                    <p className="text-sm leading-relaxed text-brand-gray">
                                        {step}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-white">
                <div className="section-container">
                    <div className="rounded-xl bg-brand-light p-8 text-center md:p-12">
                        <h3 className="mb-3 text-xl font-bold text-brand-dark">
                            Interested in NBFI / MFI Credit Ratings?
                        </h3>
                        <p className="mb-6 text-brand-gray">
                            Get in touch with our team to learn more about our rating process and how we can support your institution&apos;s growth and credibility.
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
