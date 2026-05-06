import { Metadata } from "next";
import TeamMemberCard from "@/components/TeamMemberCard";

export const metadata: Metadata = {
    title: "About Us - ACraMM",
    description:
        "Learn about ACraMM, a Credit Rating Agency in Myanmar providing services to Micro, Small and Medium Enterprises.",
};

const boardMembers = [
    {
        name: "Suntae Myoung",
        title: "Director",
        bio: "A Senior Professional with more than 15 years of experience. Previously worked in Governance, Banking & Finance. Has experience in Risk Management, Microfinance, Compliance, Anti-money laundering and Fraud.",
    },
    {
        name: "Dr Ba Myint",
        title: "Director",
        bio: "A Senior Professional with over 19 years of experience in the banking industry. Has extensive experience in Myanmar. He holds a Master's degree in Commerce and MBA (Banking and Finance) from Yangon University of Economics.",
    },
    {
        name: "Pyithu Htike",
        title: "Director",
        bio: "Graduated from Yangon University of Economics. Has experience in banking sector and financial inclusion.",
    },
    {
        name: "Moe Thu Maung",
        title: "Director",
        bio: "A Senior Professional with extensive experience in Accounting, Auditing and Financial Advisory. CPA (Myanmar), A-Cra based Accountant. 15 years experience. Partner and Managing Partner of Cornerstone Business Solutions (CBS) and Htike & Partners Co., Ltd.",
    },
];

const associates = [
    {
        name: "Ramesh Chitkara",
        title: "Associate & Advisor",
        bio: "An experienced Banking and IT Professional. He was a part of Core Banking Implementation Team in large-scale banks. Has 17+ years in the banking sector, technology, software, infrastructure, and core banking products.",
    },
    {
        name: "Karn Syed",
        title: "Associate & Advisor",
        bio: "A seasoned IT expert/Professional with experience in emerging markets and digital transformation for 15+ years. Has more than 25 years of experience in services (SCADA, SaaS) and Micro-finance.",
    },
    {
        name: "Francis Ogden",
        title: "Associate & Advisor",
        bio: "He has a degree in Integrated Circuit (Electronics and Telecommunications) and MBA. He worked for Telecom, a software company, and Biman Bangladesh Airlines. Has experience in global consulting, management, and IT Project Management.",
    },
];

export default function AboutPage() {
    return (
        <div className="pt-16 md:pt-20">
            {/* Page Header */}
            <section className="section-padding bg-white" aria-labelledby="about-page-heading">
                <div className="section-container">
                    <h1
                        id="about-page-heading"
                        className="mb-4 text-3xl font-bold text-brand-dark sm:text-4xl"
                    >
                        About Us
                    </h1>
                    <div className="mb-8 h-1 w-16 bg-brand-red" aria-hidden="true" />
                    <p className="max-w-3xl leading-relaxed text-brand-gray">
                        A-Cra is a Credit Rating Agency in Myanmar with experts from Myanmar
                        and other countries, providing services to Micro, Small and Medium
                        Enterprises.
                    </p>
                </div>
            </section>

            {/* Board Section */}
            <section
                className="section-padding bg-brand-light"
                aria-labelledby="board-heading"
            >
                <div className="section-container">
                    <div className="mb-10">
                        <span className="inline-block rounded bg-brand-red px-4 py-2 text-sm font-semibold text-white">
                            Board
                        </span>
                        <h2 id="board-heading" className="sr-only">
                            Board Members
                        </h2>
                    </div>
                    <div className="flex flex-col gap-6">
                        {boardMembers.map((member) => (
                            <TeamMemberCard
                                key={member.name}
                                name={member.name}
                                title={member.title}
                                bio={member.bio}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Associates and Advisors Section */}
            <section
                className="section-padding bg-white"
                aria-labelledby="associates-heading"
            >
                <div className="section-container">
                    <div className="mb-10">
                        <span className="inline-block rounded bg-brand-red px-4 py-2 text-sm font-semibold text-white">
                            Associates and Advisors
                        </span>
                        <h2 id="associates-heading" className="sr-only">
                            Associates and Advisors
                        </h2>
                    </div>
                    <div className="flex flex-col gap-6">
                        {associates.map((member) => (
                            <TeamMemberCard
                                key={member.name}
                                name={member.name}
                                title={member.title}
                                bio={member.bio}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
