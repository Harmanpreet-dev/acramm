import Link from "next/link";
import Image from "next/image";
import slider2 from "@/images/slider2.jpg";

export default function HeroSection() {
    return (
        <section
            className="relative h-[70vh] md:h-[80vh] overflow-hidden pt-16 md:pt-20"
            aria-labelledby="hero-heading"
        >
            {/* Background Image */}
            <Image
                src={slider2}
                alt=""
                fill
                className="object-cover"
                priority
                aria-hidden="true"
            />
            <div className="absolute inset-0 bg-black/20" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">
                <div className="w-full px-6 md:px-12 lg:px-20">
                    <div className="flex justify-start">
                        <div className="max-w-lg">
                            <h1
                                id="hero-heading"
                                className="mb-3 text-4xl font-light italic leading-tight text-brand-red sm:text-5xl lg:text-6xl"
                            >
                                Let us join hands
                            </h1>
                            <p className="mb-8 text-lg sm:text-xl font-medium text-gray-800">
                                for better credit decisions
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/about"
                                    className="inline-flex items-center rounded-md bg-brand-red px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-red-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
                                >
                                    More About us
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center rounded-md border-2 border-gray-400 bg-white/80 px-8 py-3 text-sm font-semibold text-gray-700 transition-all hover:bg-white hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                                >
                                    Contact us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
