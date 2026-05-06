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
                        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-red">
                            About Us
                        </p>
                        <h2
                            id="about-heading"
                            className="mb-6 text-3xl font-bold text-brand-dark sm:text-4xl"
                        >
                            Who We Are
                        </h2>
                        <p className="mb-4 leading-relaxed text-brand-gray">
                            ACraMM is a premier credit rating and financial services company
                            committed to providing transparent, reliable, and comprehensive
                            credit assessment solutions. We serve as a bridge between
                            financial institutions and businesses seeking growth.
                        </p>
                        <p className="mb-4 leading-relaxed text-brand-gray">
                            Our team of experienced professionals brings deep expertise in
                            credit analysis, risk assessment, and financial advisory services.
                            We specialize in serving Small and Medium Enterprises (SMEs),
                            Microfinance Institutions (MFIs), and Non-Banking Financial
                            Institutions (NBFIs).
                        </p>
                        <p className="mb-6 leading-relaxed text-brand-gray">
                            With a commitment to excellence and integrity, we help
                            organizations make informed financial decisions through our
                            rigorous credit rating methodologies and innovative technology
                            solutions.
                        </p>
                        <div className="flex flex-wrap gap-8">
                            <div>
                                <p className="text-3xl font-bold text-brand-red">500+</p>
                                <p className="text-sm text-brand-gray">Clients Served</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-brand-red">15+</p>
                                <p className="text-sm text-brand-gray">Years Experience</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-brand-red">6+</p>
                                <p className="text-sm text-brand-gray">Core Services</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Placeholder */}
                    <div className="relative" aria-hidden="true">
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-light to-gray-100">
                            <div className="flex h-full w-full items-center justify-center p-8">
                                <div className="text-center">
                                    <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-brand-red/10">
                                        <svg
                                            className="h-12 w-12 text-brand-red"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-lg font-semibold text-brand-dark">
                                        Credit Rating
                                    </p>
                                    <p className="mt-2 text-sm text-brand-gray">
                                        Trusted Assessment & Analysis
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-brand-red/10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
