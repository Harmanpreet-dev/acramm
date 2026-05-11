import { Metadata } from "next";
import TeamMemberCard from "@/components/TeamMemberCard";
import surinder from "@/images/team/surinder.jpg";
import boboMyint from "@/images/team/BoBoMyint.jpg";
import pyiSoeHtin from "@/images/team/PyiSoeHtin.jpg";
import mayThuHlaing from "@/images/team/MayThuHlaing.jpg";
import ganeshChittoor from "@/images/team/GaneshChittoor.jpg";
import rohitSahni from "@/images/team/RohitSahni.jpg";
import pranshuGupta from "@/images/team/PranshuGupta.jpg";

export const metadata: Metadata = {
    title: "About Us - ACraMM",
    description:
        "Learn about ACraMM, a Credit Rating Agency in Myanmar providing services to Micro, Small and Medium Enterprises.",
};

const boardMembers = [
    {
        name: "Surinder Angroola",
        title: "Director",
        image: surinder,
        bio: "A banking professional with more than 30 years of experience. Having a Post-graduation degree in Commerce (Banking & Finance), he also holds professional qualifications in Risk Management, Microfinance, Compliance, International Banking and Treasury.\n\nHe headed teams in different operational areas like Credit Risk, MSME Lending, Retail Banking, Microfinance, Compliance, Risk Management etc. He has a good understanding of Myanmar financial sector as he headed an Indian Bank at Yangon for 3 years.",
    },
    {
        name: "Bo Bo Myint",
        title: "Director",
        image: boboMyint,
        bio: "A Senior Professional with over 15 years of experience in the commercial banking and as a financial consultant in Myanmar. He holds a bachelor's degree of Commerce and MBA (Banking and Finance) from Yangon University of Economics.\n\nHe has also served as a Technical Expert for international agencies like GIZ, AFC and ICON for development of financial sector in Myanmar.",
    },
    {
        name: "Pyi Soe Htin",
        title: "Director",
        image: pyiSoeHtin,
        bio: "Graduated from George Mason University (US) as a Bachelor of Science in Finance. Worked in prominent Wall Street financial institutions in US.\n\nRepatriated to Myanmar in 2015 and worked with Asia Green Development Bank (AGD Bank) in various Executive positions for about 5 years.",
    },
    {
        name: "May Thu Hlaing",
        title: "Director",
        image: mayThuHlaing,
        bio: "A Senior Certified Public Accountant (CPA) with more than 15 years of experience in accounting, auditing and financial advisory. She holds various professional qualifications such as CPA (Myanmar), Chartered Accountant (Singapore), CPA (Australia) and ASEAN CPA.\n\nShe is Founder and Managing Partner of Competency Business Solutions (CBS) and May & Partner's Co. Ltd.",
    },
];

const associates = [
    {
        name: "Ganesh Chittoor",
        title: "Associate & Advisor",
        image: ganeshChittoor,
        bio: "An experienced Banking and IT Professional. He was a part of Core Banking Implementation Team in a large size Indian bank. He also worked as IT faculty in bank's Training Institute for 2 years. He has handled many procurement and implementation projects pertaining to hardware, software, networking and data center right from preparation of RFP to installation and smooth functioning of projects.",
    },
    {
        name: "Rohit Sahni",
        title: "Associate & Advisor",
        image: rohitSahni,
        bio: "A seasoned sales professional with experience in strategic sales and digital transformation for BFSI. His more than 25 years of experience across ASEAN, SAARC and West Africa brings value to emerging markets including Myanmar.",
    },
    {
        name: "Pranshu Gupta",
        title: "Associate & Advisor",
        image: pranshuGupta,
        bio: "He holds a bachelor degree of B. Tech. (Electronics and Communications) and MBA. He served in \"Wipro\" a software company as a Senior Software Engineer for two and half years. He also worked with another global company \"Cognizant\" as Product Manager for about 3 years till March, 2019. He is an IT Product Developer and part of our team of advisors.",
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
                        A-Cra is a Credit Rating Agency set up in Myanmar with domain experts from Myanmar and other countries. Our solutions are mainly to help Micro, Small and Medium Enterprises in getting faster credit decisions from financial institutions.
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
                        <span className="inline-block border-b-2 border-brand-red pb-1 text-lg font-bold text-brand-red">
                            Board
                        </span>
                        <h2 id="board-heading" className="sr-only">
                            Board Members
                        </h2>
                    </div>
                    <div className="flex flex-col gap-8">
                        {boardMembers.map((member) => (
                            <TeamMemberCard
                                key={member.name}
                                name={member.name}
                                title={member.title}
                                bio={member.bio}
                                image={"image" in member ? member.image : undefined}
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
                        <span className="inline-block border-b-2 border-brand-red pb-1 text-lg font-bold text-brand-red">
                            Associates and Advisors
                        </span>
                        <h2 id="associates-heading" className="sr-only">
                            Associates and Advisors
                        </h2>
                    </div>
                    <div className="flex flex-col gap-8">
                        {associates.map((member) => (
                            <TeamMemberCard
                                key={member.name}
                                name={member.name}
                                title={member.title}
                                bio={member.bio}
                                image={"image" in member ? member.image : undefined}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
