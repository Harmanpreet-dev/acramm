import Link from "next/link";

export default function ServiceBanner() {
    return (
        <section
            className="relative overflow-hidden bg-brand-dark py-20"
            aria-labelledby="service-banner-heading"
        >
            {/* Background decoration */}
            <div className="absolute inset-0" aria-hidden="true">
                <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-red/10 blur-3xl" />
                <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-brand-red/10 blur-3xl" />
            </div>

            <div className="section-container relative z-10">
                <div className="mx-auto max-w-3xl text-center">
                    <h2
                        id="service-banner-heading"
                        className="mb-6 text-3xl font-bold text-white sm:text-4xl"
                    >
                        Comprehensive Financial Solutions{" "}
                        <span className="text-brand-red">Under One Roof</span>
                    </h2>
                    <p className="mb-8 text-lg leading-relaxed text-gray-300">
                        From credit rating and due diligence to technology-driven loan
                        origination systems and professional training, ACraMM delivers
                        end-to-end financial services that empower institutions and
                        businesses to thrive in today&apos;s competitive landscape.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link href="#services" className="btn-primary">
                            Explore Our Services
                        </Link>
                        <Link href="#contact" className="btn-secondary">
                            Contact Us Today
                        </Link>
                    </div>

                    {/* Stats row */}
                    <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 sm:grid-cols-4">
                        <div>
                            <p className="text-2xl font-bold text-brand-red">6+</p>
                            <p className="mt-1 text-sm text-gray-400">Core Services</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-brand-red">100%</p>
                            <p className="mt-1 text-sm text-gray-400">Client Focused</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-brand-red">24/7</p>
                            <p className="mt-1 text-sm text-gray-400">Support Available</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-brand-red">ISO</p>
                            <p className="mt-1 text-sm text-gray-400">Certified Process</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
