"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import slider2 from "@/images/slider2.jpg";
import slider3 from "@/images/slider3.jpg";

const slides = [
    {
        heading: "Let us join hands",
        subtext: "for better credit decisions",
        textPosition: "left" as const,
        buttons: [
            { label: "More About us", href: "/about", variant: "primary" },
            { label: "Contact us", href: "/contact", variant: "secondary" },
        ],
        image: slider2,
        bgClass: "bg-gradient-to-b from-sky-300 via-sky-200 to-gray-300",
        darkText: true,
    },
    {
        heading: "Credit Rating Services",
        subtext: "Comprehensive assessments for SMEs, MFIs, and NBFIs",
        textPosition: "right" as const,
        buttons: [
            { label: "Our Services", href: "#services", variant: "primary" },
            { label: "Learn More", href: "/about", variant: "secondary" },
        ],
        image: slider3,
        bgClass: "",
        darkText: false,
    },
];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section
            className="relative h-[70vh] md:h-[80vh] overflow-hidden pt-16 md:pt-20"
            aria-labelledby="hero-heading"
            aria-roledescription="carousel"
            aria-label="Hero carousel"
        >
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`Slide ${index + 1} of ${slides.length}`}
                    aria-hidden={index !== current}
                >
                    {/* Background */}
                    {slide.image ? (
                        <>
                            <Image
                                src={slide.image}
                                alt=""
                                fill
                                className="object-cover"
                                priority={index === 0}
                                aria-hidden="true"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                        </>
                    ) : (
                        <div className={`absolute inset-0 ${slide.bgClass}`} />
                    )}

                    {/* Content */}
                    <div className="relative z-10 flex h-full items-center">
                        <div className="w-full px-6 md:px-12 lg:px-20">
                            <div className={`flex ${slide.textPosition === "right" ? "justify-end" : "justify-start"
                                }`}>
                                <div className="max-w-lg">
                                    <h1
                                        id={index === 0 ? "hero-heading" : undefined}
                                        className="mb-3 text-4xl font-light italic leading-tight text-brand-red sm:text-5xl lg:text-6xl"
                                    >
                                        {slide.heading}
                                    </h1>
                                    <p className={`mb-8 text-lg sm:text-xl font-medium ${slide.darkText ? "text-gray-800" : "text-white"
                                        }`}>
                                        {slide.subtext}
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        {slide.buttons.map((btn) => (
                                            <Link
                                                key={btn.label}
                                                href={btn.href}
                                                className={
                                                    btn.variant === "primary"
                                                        ? "inline-flex items-center rounded-md bg-brand-red px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-red-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
                                                        : "inline-flex items-center rounded-md border-2 border-gray-400 bg-white/80 px-8 py-3 text-sm font-semibold text-gray-700 transition-all hover:bg-white hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                                                }
                                            >
                                                {btn.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Previous slide"
            >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-all hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Next slide"
            >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2" role="tablist" aria-label="Slide indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-2.5 rounded-full transition-all ${index === current
                            ? "bg-brand-red w-7"
                            : "bg-gray-400/60 w-2.5 hover:bg-gray-500"
                            }`}
                        role="tab"
                        aria-selected={index === current}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
