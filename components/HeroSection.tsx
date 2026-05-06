import Link from "next/link";

export default function HeroSection() {
    return (
        <section
            className="relative flex min-h-[90vh] items-center bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark pt-16 md:pt-20"
            aria-labelledby="hero-heading"
        >
            {/* Background overlay pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnYtNGgydjRoNHYyaC00djRoLTJ2LTR6bTAtMzBoLTJ2LTRoMlYwaDJ2NGg0djJoLTR2NGgtMlY0em0tNiAwVjBoMnY0aDR2MmgtNHY0aC0yVjZoLTRWNGg0eiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat" />
            </div>

            {/* Background image placeholder */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-brand-dark/70">
                <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
                    <div className="flex h-full items-center justify-center">
                        <div className="h-96 w-96 rounded-full bg-brand-red/20 blur-3xl" />
                    </div>
                </div>
            </div>

            <div className="section-container relative z-10">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Text Content */}
                    <div className="max-w-2xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-red">
                            Credit Rating & Financial Services
                        </p>
                        <h1
                            id="hero-heading"
                            className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
                        >
                            Let us{" "}
                            <span className="text-brand-red">join hands</span>
                        </h1>
                        <p className="mb-8 max-w-lg text-lg leading-relaxed text-gray-300">
                            ACraMM is a leading credit rating and financial services company
                            dedicated to empowering businesses with comprehensive credit
                            solutions, due diligence, and capacity building for SMEs, MFIs,
                            and NBFIs.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="#about" className="btn-primary">
                                Know More
                            </Link>
                            <Link href="#services" className="btn-secondary">
                                Our Services
                            </Link>
                        </div>
                    </div>

                    {/* Hero Image Placeholder */}
                    <div className="hidden lg:block" aria-hidden="true">
                        <div className="relative">
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-red/20 to-transparent p-8">
                                <div className="flex h-full w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                    <div className="text-center">
                                        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-red/20">
                                            <svg
                                                className="h-10 w-10 text-brand-red"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-gray-400">
                                            Empowering Businesses Together
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
