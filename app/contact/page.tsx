import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
    title: "Contact Us - ACraMM",
    description:
        "Get in touch with ACraMM. Contact us for credit rating, financial services, and business solutions in Myanmar.",
};

const contactInfo = [
    {
        label: "Address",
        icon: (
            <svg
                className="h-5 w-5"
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
        ),
        content: (
            <p className="text-sm leading-relaxed text-brand-gray">
                No 258/262, 12th Floor, Classic Strand Condo, Corner of 27th Street
                (Lower) and Strand Road, Pabedan Township, Yangon, Myanmar.
            </p>
        ),
    },
    {
        label: "Quick Contact",
        icon: (
            <svg
                className="h-5 w-5"
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
        ),
        content: (
            <div className="space-y-1 text-sm text-brand-gray">
                <p>01-8260425, 01-8248237</p>
                <p>09-440700276, 09-78708261</p>
                <p>09-256066504</p>
            </div>
        ),
    },
    {
        label: "Email Address",
        icon: (
            <svg
                className="h-5 w-5"
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
        ),
        content: (
            <div className="space-y-1 text-sm text-brand-gray">
                <a
                    href="mailto:angrodeep@acramm.com"
                    className="block transition-colors hover:text-brand-red"
                >
                    angrodeep@acramm.com
                </a>
                <a
                    href="mailto:bodomyint@acramm.com"
                    className="block transition-colors hover:text-brand-red"
                >
                    bodomyint@acramm.com
                </a>
                <a
                    href="mailto:pyithuhtik@acramm.com"
                    className="block transition-colors hover:text-brand-red"
                >
                    pyithuhtik@acramm.com
                </a>
                <a
                    href="mailto:maybu@acramm.com"
                    className="block transition-colors hover:text-brand-red"
                >
                    maybu@acramm.com
                </a>
            </div>
        ),
    },
    {
        label: "Working Hours",
        icon: (
            <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
        content: (
            <p className="text-sm text-brand-gray">
                Mon - Friday: 9:30AM to 5:30PM
            </p>
        ),
    },
];

export default function ContactPage() {
    return (
        <div className="pt-16 md:pt-20">
            {/* Hero Banner */}
            <section
                className="relative flex items-center justify-center bg-brand-dark py-20 md:py-28"
                aria-labelledby="contact-page-heading"
            >
                <div
                    className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-brand-dark/80"
                    aria-hidden="true"
                />
                <div className="relative z-10 text-center">
                    <h1
                        id="contact-page-heading"
                        className="text-3xl font-bold text-white sm:text-4xl md:text-5xl"
                    >
                        Contact Us
                    </h1>
                </div>
            </section>

            {/* Get In Touch Section */}
            <section
                className="section-padding bg-brand-light"
                aria-labelledby="get-in-touch-heading"
            >
                <div className="section-container">
                    <div className="mb-12 text-center">
                        <h2
                            id="get-in-touch-heading"
                            className="text-2xl font-bold text-brand-dark sm:text-3xl"
                        >
                            Get In Touch With Us
                        </h2>
                        <div
                            className="mx-auto mt-3 h-1 w-16 bg-brand-red"
                            aria-hidden="true"
                        />
                    </div>

                    <div className="grid gap-12 lg:grid-cols-2">
                        {/* Left Column - Contact Info */}
                        <div className="space-y-8">
                            {contactInfo.map((item) => (
                                <div key={item.label} className="flex gap-4">
                                    <div
                                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-red text-white"
                                        aria-hidden="true"
                                    >
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="mb-1 text-base font-semibold text-brand-dark">
                                            {item.label}
                                        </h3>
                                        {item.content}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Column - Contact Form */}
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
