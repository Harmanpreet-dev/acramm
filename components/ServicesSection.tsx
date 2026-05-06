import ServiceCard from "./ServiceCard";

const services = [
    {
        title: "Corporate Credit Ratings",
        description:
            "Our flagship credit rating service provides comprehensive, transparent, and reliable credit assessments for banks, insurance companies, NBFIs, MFIs, and corporations across the region. We employ rigorous methodologies to evaluate creditworthiness, helping financial institutions make informed decisions.",
        icon: (
            <svg
                className="h-8 w-8 text-brand-red"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
            </svg>
        ),
    },
    {
        title: "Bank (Internal) Credit Rating Models",
        description:
            "Robust internal credit rating models designed for banks to strengthen their internal risk assessment frameworks. Our models include credit scoring, portfolio risk analysis, and regulatory compliance tools that integrate seamlessly with existing banking systems.",
        icon: (
            <svg
                className="h-8 w-8 text-brand-red"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
            </svg>
        ),
    },
    {
        title: "Loan Origination (Appraisal) Systems",
        description:
            "Comprehensive digital platforms that manage the entire loan lifecycle from application to disbursement. Our systems include CAPS for business loans, LOS for retail loans, and CCAS for credit cards — providing automated workflows, risk scoring, and compliance checks.",
        icon: (
            <svg
                className="h-8 w-8 text-brand-red"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
            </svg>
        ),
    },
    {
        title: "IFRS-9 Implementation Support Service",
        description:
            "Specialized IFRS-9 implementation support including Expected Credit Loss (ECL) models, data validation and reporting, regulatory compliance support, and financial risk assessment for Microfinance Institutions and Non-Banking Financial Institutions.",
        icon: (
            <svg
                className="h-8 w-8 text-brand-red"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
            </svg>
        ),
    },
    {
        title: "Consulting and Training Services",
        description:
            "Comprehensive consulting and training programs covering financial risk consulting, credit risk training, banking compliance workshops, loan assessment training, and IFRS-9 training programs to strengthen institutional capabilities across the financial sector.",
        icon: (
            <svg
                className="h-8 w-8 text-brand-red"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
            </svg>
        ),
    },
];

export default function ServicesSection() {
    return (
        <section
            id="services"
            className="section-padding bg-white"
            aria-labelledby="services-heading"
        >
            <div className="section-container">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-red">
                        What We Offer
                    </p>
                    <h2
                        id="services-heading"
                        className="mb-4 text-3xl font-bold text-brand-dark sm:text-4xl"
                    >
                        Our Services
                    </h2>
                    <p className="mx-auto max-w-2xl text-brand-gray">
                        We provide a comprehensive suite of credit rating, technology, and
                        training solutions designed to strengthen financial ecosystems and
                        empower businesses.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="space-y-16 lg:space-y-24">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            reversed={index % 2 !== 0}
                            index={index + 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
