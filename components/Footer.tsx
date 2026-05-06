import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo.png";

const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
];

const serviceLinks = [
    { href: "/services/external-credit-ratings", label: "Corporate Credit Ratings" },
    { href: "/services/internal-credit-ratings", label: "Bank (Internal) Credit Rating Models" },
    { href: "/services/credit-appraisal-system", label: "Loan Origination (Appraisal) Systems" },
    { href: "/services/mfi-nbfi-gradings", label: "IFRS-9 Implementation Support Service" },
    { href: "/services/training-capacity-building", label: "Consulting and Training Services" },
];

const socialLinks = [
    {
        label: "Facebook",
        href: "https://facebook.com",
        icon: (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        label: "Twitter",
        href: "https://twitter.com",
        icon: (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com",
        icon: (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        label: "YouTube",
        href: "https://youtube.com",
        icon: (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.418-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer
            id="contact"
            className="bg-brand-dark pt-16 text-gray-300"
            role="contentinfo"
        >
            <div className="section-container">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Column 1: Logo & Description */}
                    <div>
                        <Link
                            href="/"
                            className="mb-4 inline-flex items-center"
                            aria-label="ACraMM Home"
                        >
                            <Image src={logo} alt="A-Cra" width={120} height={48} />
                        </Link>
                        <p className="mt-4 text-sm leading-relaxed text-gray-400">
                            ACraMM is a leading credit rating and financial services company
                            providing comprehensive solutions for SMEs, MFIs, and NBFIs. We
                            are committed to empowering businesses through transparent credit
                            assessment and innovative technology.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                            Quick Links
                        </h3>
                        <nav aria-label="Footer navigation">
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-400 transition-colors hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-brand-dark rounded-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <h3 className="mb-4 mt-6 text-sm font-semibold uppercase tracking-wider text-white">
                            Our Services
                        </h3>
                        <nav aria-label="Footer services navigation">
                            <ul className="space-y-3">
                                {serviceLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-400 transition-colors hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-brand-dark rounded-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Column 3: Social Links */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                            Follow Us
                        </h3>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-colors hover:bg-brand-red hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-brand-dark"
                                    aria-label={`Follow us on ${social.label}`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        <p className="mt-6 text-sm text-gray-400">
                            Stay connected with us on social media for the latest updates,
                            news, and insights.
                        </p>
                    </div>

                    {/* Column 4: Get in Touch */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                            Get in Touch
                        </h3>
                        <address className="not-italic">
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-red"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                        />
                                    </svg>
                                    <span className="text-sm text-gray-400">
                                        Dhaka, Bangladesh
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-red"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                        />
                                    </svg>
                                    <a
                                        href="tel:+8801234567890"
                                        className="text-sm text-gray-400 transition-colors hover:text-brand-red"
                                    >
                                        +880 1234 567 890
                                    </a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg
                                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-red"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                        />
                                    </svg>
                                    <a
                                        href="mailto:info@acramm.com"
                                        className="text-sm text-gray-400 transition-colors hover:text-brand-red"
                                    >
                                        info@acramm.com
                                    </a>
                                </li>
                            </ul>
                        </address>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 border-t border-white/10 py-6">
                    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                        <p className="text-sm text-gray-500">
                            &copy; {new Date().getFullYear()} ACraMM. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link
                                href="#"
                                className="text-sm text-gray-500 transition-colors hover:text-brand-red"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="#"
                                className="text-sm text-gray-500 transition-colors hover:text-brand-red"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
