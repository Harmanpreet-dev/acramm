import { Metadata } from "next";
import TeamMemberCard from "@/components/TeamMemberCard";
import surinder from "@/images/team/surinder.png";
import boboMyint from "@/images/team/BoBoMyint.jpg";
// import pyiSoeHtin from "@/images/team/PyiSoeHtin.jpg";
import mayThuHlaing from "@/images/team/MayThuHlaing.png";
// import ganeshChittoor from "@/images/team/GaneshChittoor.jpg";
// import rohitSahni from "@/images/team/RohitSahni.jpg";
// import pranshuGupta from "@/images/team/PranshuGupta.jpg";
import jaiRam from "@/images/team/JaiRam.png";
import deepakGodbole from "@/images/team/DeepakGodbole.png";
import winLwin from "@/images/team/WinLwin.png";




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
        bio: "A banking professional with 30+ years of experience across core areas of banking and financial services, including Retail Banking, Corporate Banking, Compliance, and Risk Management.\n\nHe holds a postgraduate degree in Commerce (Banking & Finance) and has pursued professional qualifications in Risk Management, Treasury, Compliance, and International Banking.\n\nHe has led diverse teams and initiatives across multiple banking functions. He also worked as Chief Representative of Bank of India in Yangon for 3 years, gaining valuable insights into the Myanmar financial sector.",
    },
    {
        name: "Bo Bo Myint",
        title: "Director",
        image: boboMyint,
        bio: "A Senior Professional with over 15 years of experience in the commercial banking and as a financial consultant in Myanmar. He holds a bachelor's degree of Commerce and MBA (Banking and Finance) from Yangon University of Economics.\n\nHe has also served as a Technical Expert for international agencies like GIZ, AFC and ICON for development of financial sector in Myanmar.",
    },
    // {
    //     name: "Pyi Soe Htin",
    //     title: "Director",
    //     image: pyiSoeHtin,
    //     bio: "Graduated from George Mason University (US) as a Bachelor of Science in Finance. Worked in prominent Wall Street financial institutions in US.\n\nRepatriated to Myanmar in 2015 and worked with Asia Green Development Bank (AGD Bank) in various Executive positions for about 5 years.",
    // },
    {
        name: "May Thu Hlaing",
        title: "Director",
        image: mayThuHlaing,
        bio: "Senior Certified Public Accountant (CPA) with 18+ years of experience in accounting, auditing, and financial advisory. \n\nShe holds multiple professional qualifications such as CPA (Myanmar), Chartered Accountant (Singapore), CPA (Australia) and ASEAN CPA. \n\nShe is Founder and Managing Partner of Competency Business Solutions (CBS) and May & Partner’s Co. Ltd. \n\nShe is also a Shareholder Director in Aurora Credit Rating Agency Ltd.",
    },
];

const associates = [
    // {
    //     name: "Ganesh Chittoor",
    //     title: "Associate & Advisor",
    //     image: ganeshChittoor,
    //     bio: "An experienced Banking and IT Professional. He was a part of Core Banking Implementation Team in a large size Indian bank. He also worked as IT faculty in bank's Training Institute for 2 years. He has handled many procurement and implementation projects pertaining to hardware, software, networking and data center right from preparation of RFP to installation and smooth functioning of projects.",
    // },
    // {
    //     name: "Rohit Sahni",
    //     title: "Associate & Advisor",
    //     image: rohitSahni,
    //     bio: "A seasoned sales professional with experience in strategic sales and digital transformation for BFSI. His more than 25 years of experience across ASEAN, SAARC and West Africa brings value to emerging markets including Myanmar.",
    // },
    // {
    //     name: "Pranshu Gupta",
    //     title: "Associate & Advisor",
    //     image: pranshuGupta,
    //     bio: "He holds a bachelor degree of B. Tech. (Electronics and Communications) and MBA. He served in \"Wipro\" a software company as a Senior Software Engineer for two and half years. He also worked with another global company \"Cognizant\" as Product Manager for about 3 years till March, 2019. He is an IT Product Developer and part of our team of advisors.",
    // },
    {
        name: "Dr. Win Lwin",
        title: "Advisor",
        image: winLwin,
        bio: "With over two decades of experience in the financial sector, Mr. Win Lwin currently serves as the Chief Executive Officer of Myanma Tourism Bank (MTB), a position he has held since May 2023. \n\nSince assuming leadership, he has played a pivotal role in driving the bank’s transformation, strengthening its strategic direction, and enhancing overall performance. In recognition of his leadership and contributions, he has been honored with the “Innovative Excellence Award 2024” by The CEO Views and the “Most Iconic Business Leaders Award 2024” by The Enterprise World. \n\n addition to his executive responsibilities (MTB), he has Advisory role  in  Aurora Credit Rating Agency as a Rating Committee Member.",
    },
    {
        name: "Deepak Godbole",
        title: "Advisor",
        image: deepakGodbole,
        bio: "Mr. Deepak Godbole is a seasoned insurance and reinsurance professional with over 34 years of experience across global markets. He has supported the operations of General Insurance Corporation of India (GIC Re) in key international locations, including the UK, UAE, South Africa, Russia, and Malaysia. His experience also includes involvement in credit rating engagements in South Africa and Russia. \n\nHe previously served as Secretary General of the Insurance Institute of India (III), where he led and expanded training and capacity-building programs both in India and internationally, including in Myanmar. \n\nMr. Godbole played a key role in facilitating the 2018 Memorandum of Understanding (MoU) between Myanma Insurance and GIC Re. He is also a Member of the BRICS Business Council (BBC) Working Group.",
    },
    {
        name: "Jai Ram",
        title: "Advisor",
        image: jaiRam,
        bio: "Mr. Jai Ram is an experienced central banking professional with over 35 years of expertise across a wide range of areas, including banking supervision and regulation. \n\nIn addition to his tenure with the Reserve Bank of India, he served as Chief General Manager at the National Bank for Agriculture and Rural Development (NABARD), where he contributed significantly to the development of the rural and agricultural finance ecosystem. \n\nHe has also completed advanced training in Project Appraisal for Agriculture and Rural Development at Harvard University, USA.",
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
                        A-Cra is a Credit Rating Agency set up in Myanmar with domain experts from Myanmar and other countries. We plan to provide corporate credit ratings (due diligence) to different types of Myanmar companies.
                    </p>
                    <br />
                    <p className="max-w-3xl leading-relaxed text-brand-gray">
                        We also offer Loan Origination (Processing) Systems to commercial banks and other financial institutions for quality credit decisions.
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
                            Board Members
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
