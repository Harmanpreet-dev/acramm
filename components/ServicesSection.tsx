import ServiceCard from "./ServiceCard";
import ser1Image from "@/images/ser-1-1.png";
import loan from "@/images/Loan-origination-system.jpg";
import NBFI from "@/images/NBFI.jpg";
import ifrs9Image from "@/images/ IFRS9.png";
import traning from "@/images/traning.png";

const services = [
    {
        title: "Corporate Credit Ratings",
        description:
            "A-Cra provides Corporate Credit Rating services including Bank Credit Ratings, Insurance Company Ratings, NBFI/MFI Credit Ratings, Singapore Company Ratings, and Myanmar Company Ratings.",
        image: ser1Image,
        link: "/services/corporate-credit-ratings",
    },
    {
        title: "Loan Origination (Appraisal) Systems",
        description:
            "Comprehensive Loan Origination and Appraisal Systems including Business Loans (CAPS), Retail Loans (LOS), and Credit Cards (CCAS) for commercial banks and financial institutions.",
        image: loan,
        link: "/services/credit-appraisal-system",
    },
    {
        title: "Bank's (Internal) Credit Rating Models",
        description:
            "Internal Credit Rating Models for banks covering MSME Credit Ratings, Large Company Ratings, and Project-Based Ratings to enhance credit risk assessment capabilities.",
        image: NBFI,
        link: "/services/internal-credit-ratings",
    },
    {
        title: "Consulting Services (Banks/NBFIs)",
        description:
            "Consulting services for Banks and NBFIs including IFRS-9 Implementation Support and Policy Formulation Services.",
        image: ifrs9Image,
        link: "/services/consulting-services",
    },
    {
        title: "Training and Capacity Building Services",
        description:
            "Training programs including 40-Hours Program on Credit Risk Management and 6-Hours Workshop on IFRS-9 and Basel Norms.",
        image: traning,
        link: "/services/training-capacity-building",
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
                {/* Services Grid */}
                <div className="space-y-16 lg:space-y-24">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            image={"image" in service ? service.image : undefined}
                            reversed={index % 2 !== 0}
                            index={index + 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
