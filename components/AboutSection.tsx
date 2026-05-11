import Link from "next/link";
import Image from "next/image";
import crImage from "@/images/cr.jpg";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="section-padding bg-white"
            aria-labelledby="about-heading"
        >
            <div className="section-container">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Text Content */}
                    <div>
                        <h2
                            id="about-heading"
                            className="mb-6 text-3xl font-bold text-brand-dark sm:text-4xl"
                        >
                            About Us
                        </h2>
                        <p className="mb-6 leading-relaxed text-brand-gray">
                            A-Cra is a Credit Rating Agency set up in Myanmar with domain
                            experts from Myanmar and other countries. Our solutions are mainly
                            to help the Micro, Small and Medium Enterprises in getting faster
                            credit decisions from financial institutions.
                        </p>
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 font-semibold text-brand-red hover:underline"
                        >
                            Read More
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </Link>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src={crImage}
                                alt="Credit Rating"
                                width={600}
                                height={400}
                                className="h-auto w-full"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-brand-red/10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
