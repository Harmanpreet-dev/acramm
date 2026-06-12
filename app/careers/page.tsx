import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Careers - ACraMM",
    description:
        "Join Aurora Credit Rating Agency Ltd., Myanmar. We are looking for talented individuals to grow with us in credit risk assessment.",
};

const positions = [
    {
        title: "Intern – Credit Rating Analyst",
        href: "/careers/intern-credit-rating-analyst",
        description:
            "We are looking for final-year students doing BBA / MBA or any other Degree in Accounting or Finance for placements as an Intern - Credit Rating Analyst.",
    },
    {
        title: "Credit Rating Analyst",
        href: "/careers/credit-rating-analyst",
        description:
            "Join our team to perform detailed analysis of financial statements, business models, industry dynamics, and risk factors for credit rating assignments.",
    },
];

export default function CareersPage() {
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
                            <li className="text-brand-red">Careers</li>
                        </ol>
                    </nav>
                    <h1 id="page-heading" className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        Careers
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-gray-300">
                        Join Aurora Credit Rating Agency Ltd., Myanmar. We are looking for talented individuals who are eager to grow in credit risk assessment.
                    </p>
                </div>
            </section>

            {/* Open Positions */}
            <section className="section-padding bg-brand-light" aria-labelledby="positions-heading">
                <div className="section-container">
                    <div className="mb-12 text-center">
                        <h2 id="positions-heading" className="text-2xl font-bold text-brand-dark sm:text-3xl">
                            Open Positions
                        </h2>
                        <div className="mx-auto mt-3 h-1 w-16 bg-brand-red" aria-hidden="true" />
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {positions.map((position) => (
                            <div
                                key={position.href}
                                className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                            >
                                <h3 className="text-xl font-bold text-brand-dark">
                                    {position.title}
                                </h3>
                                <p className="mt-3 text-brand-gray">
                                    {position.description}
                                </p>
                                <Link
                                    href={position.href}
                                    className="mt-6 inline-flex items-center gap-1 font-semibold text-brand-red transition-colors hover:text-brand-dark"
                                >
                                    View Details
                                    <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
