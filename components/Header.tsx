"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo.png";

const serviceLinks = [
    {
        href: "/services/corporate-credit-ratings",
        label: "Corporate Credit Ratings",
        subServices: [
            { label: "Bank Credit Ratings", href: "/services/corporate-credit-ratings/bank-credit-ratings" },
            { label: "Insurance Company Ratings", href: "/services/corporate-credit-ratings/insurance-company-ratings" },
            { label: "NBFI / MFI Credit Ratings", href: "/services/corporate-credit-ratings/nbfi-mfi-credit-ratings" },
            { label: "Singapore Company Ratings", href: "/services/corporate-credit-ratings/singapore-company-ratings" },
            { label: "Myanmar Company Ratings", href: "/services/corporate-credit-ratings/myanmar-company-ratings" },
        ],
    },
    {
        href: "/services/credit-appraisal-system",
        label: "Loan Origination (Appraisal) Systems",
        subServices: [
            { label: "Business Loans (CAPS)", href: "/services/credit-appraisal-system/caps-business-loans" },
            { label: "Retail Loans (LOS)", href: "/services/credit-appraisal-system/los-retail-loans" },
            { label: "Credit Cards (CCAS)", href: "/services/credit-appraisal-system/ccas-credit-cards" },
        ],
    },
    {
        href: "/services/internal-credit-ratings",
        label: "Bank (Internal) Credit Rating Models",
        subServices: [],
    },
    {
        href: "/services/ifrs9-implementation",
        label: "IFRS-9 Implementation Support Service",
        subServices: [],
    },
    {
        href: "/services/training-capacity-building",
        label: "Consulting and Training Services",
        subServices: [],
    },
];

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsServicesOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setIsServicesOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsServicesOpen(false);
        }, 150);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsServicesOpen((prev) => !prev);
        } else if (e.key === "Escape") {
            setIsServicesOpen(false);
        }
    };

    return (
        <header
            className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white shadow-md"
                : "bg-white/95 backdrop-blur-sm"
                }`}
            role="banner"
        >
            <div className="section-container">
                <div className="flex h-16 items-center justify-between md:h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center"
                        aria-label="ACraMM Home"
                    >
                        <Image src={logo} alt="A-Cra" width={120} height={48} priority />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav
                        className="hidden items-center gap-8 md:flex"
                        aria-label="Main navigation"
                    >
                        {navLinks.slice(0, 2).map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-brand-gray transition-colors hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 rounded-sm px-1 py-0.5"
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Our Services Mega Dropdown */}
                        <div
                            ref={dropdownRef}
                            className="relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button
                                type="button"
                                className={`flex items-center gap-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 rounded-sm px-1 py-0.5 ${isServicesOpen ? "text-brand-red" : "text-brand-gray hover:text-brand-red"
                                    }`}
                                aria-expanded={isServicesOpen}
                                aria-haspopup="true"
                                onClick={() => setIsServicesOpen((prev) => !prev)}
                                onKeyDown={handleKeyDown}
                            >
                                Our Services
                                <svg
                                    className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>

                            {/* Mega Dropdown Menu */}
                            <div
                                className={`absolute right-0 top-full z-50 mt-2 w-[680px] transition-all duration-200 lg:left-1/2 lg:right-auto lg:-translate-x-1/2 ${isServicesOpen
                                    ? "visible translate-y-0 opacity-100"
                                    : "invisible -translate-y-1 opacity-0"
                                    }`}
                                role="menu"
                                aria-label="Our Services submenu"
                            >
                                <div className="rounded-lg bg-white shadow-lg ring-1 ring-black/5">
                                    <div className="px-6 py-3 border-b border-gray-100">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-brand-red">
                                            Our Services
                                        </span>
                                    </div>
                                    <div className="p-6">
                                        {/* Top row: services with sub-items */}
                                        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                                            {serviceLinks.filter(s => s.subServices.length > 0).map((service) => (
                                                <div key={service.href} className="space-y-2">
                                                    <Link
                                                        href={service.href}
                                                        className="block text-sm font-semibold text-brand-dark transition-colors hover:text-brand-red focus:text-brand-red focus:outline-none"
                                                        role="menuitem"
                                                        onClick={() => setIsServicesOpen(false)}
                                                    >
                                                        {service.label}
                                                    </Link>
                                                    <ul className="space-y-1" aria-label={`${service.label} sub-services`}>
                                                        {service.subServices.map((sub) => (
                                                            <li
                                                                key={sub.href}
                                                                className="pl-2 border-l-2 border-gray-200"
                                                            >
                                                                <Link
                                                                    href={sub.href}
                                                                    className="text-xs text-gray-500 leading-relaxed hover:text-brand-red transition-colors"
                                                                    onClick={() => setIsServicesOpen(false)}
                                                                >
                                                                    {sub.label}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Divider */}
                                        <div className="my-4 border-t border-gray-100" />

                                        {/* Bottom row: standalone services */}
                                        <div className="grid grid-cols-3 gap-x-6">
                                            {serviceLinks.filter(s => s.subServices.length === 0).map((service) => (
                                                <Link
                                                    key={service.href}
                                                    href={service.href}
                                                    className="block text-sm font-semibold text-brand-dark transition-colors hover:text-brand-red focus:text-brand-red focus:outline-none py-1"
                                                    role="menuitem"
                                                    onClick={() => setIsServicesOpen(false)}
                                                >
                                                    {service.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="text-sm font-medium text-brand-gray transition-colors hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 rounded-sm px-1 py-0.5"
                        >
                            Contact Us
                        </Link>

                        <Link
                            href="/contact"
                            className="btn-primary text-xs"
                        >
                            Get in Touch
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md p-2 text-brand-gray hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red md:hidden"
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <nav
                    id="mobile-menu"
                    className={`overflow-hidden transition-all duration-300 md:hidden ${isMenuOpen ? "max-h-[800px] pb-4" : "max-h-0"
                        }`}
                    aria-label="Mobile navigation"
                >
                    <div className="flex flex-col gap-1 border-t border-gray-100 pt-4">
                        <Link
                            href="/"
                            className="rounded-md px-3 py-2 text-sm font-medium text-brand-gray transition-colors hover:bg-brand-light hover:text-brand-red"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="rounded-md px-3 py-2 text-sm font-medium text-brand-gray transition-colors hover:bg-brand-light hover:text-brand-red"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About Us
                        </Link>

                        {/* Mobile Services Accordion */}
                        <div>
                            <button
                                type="button"
                                className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors ${isMobileServicesOpen
                                    ? "bg-brand-light text-brand-red"
                                    : "text-brand-gray hover:bg-brand-light hover:text-brand-red"
                                    }`}
                                onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                                aria-expanded={isMobileServicesOpen}
                            >
                                Our Services
                                <svg
                                    className={`h-4 w-4 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-200 ${isMobileServicesOpen ? "max-h-[600px] mt-1" : "max-h-0"
                                    }`}
                            >
                                <div className="ml-3 border-l-2 border-brand-red/20 pl-3">
                                    {serviceLinks.map((service) => (
                                        <div key={service.href} className="py-2">
                                            <Link
                                                href={service.href}
                                                className="block rounded-md px-3 py-1.5 text-xs font-semibold text-brand-dark transition-colors hover:text-brand-red"
                                                onClick={() => {
                                                    setIsMenuOpen(false);
                                                    setIsMobileServicesOpen(false);
                                                }}
                                            >
                                                {service.label}
                                            </Link>
                                            {service.subServices.length > 0 && (
                                                <ul className="mt-1 ml-3 space-y-0.5">
                                                    {service.subServices.map((sub) => (
                                                        <li
                                                            key={sub.href}
                                                            className="pl-2 border-l border-gray-200"
                                                        >
                                                            <Link
                                                                href={sub.href}
                                                                className="text-[11px] text-gray-400 leading-relaxed hover:text-brand-red transition-colors"
                                                                onClick={() => {
                                                                    setIsMenuOpen(false);
                                                                    setIsMobileServicesOpen(false);
                                                                }}
                                                            >
                                                                {sub.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="rounded-md px-3 py-2 text-sm font-medium text-brand-gray transition-colors hover:bg-brand-light hover:text-brand-red"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="/contact"
                            className="btn-primary mt-2 text-center text-xs"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Get in Touch
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
