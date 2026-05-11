import Image, { StaticImageData } from "next/image";

interface TeamMemberCardProps {
    name: string;
    title: string;
    bio: string;
    image?: StaticImageData;
}

export default function TeamMemberCard({ name, title, bio, image }: TeamMemberCardProps) {
    const paragraphs = bio.split("\n\n");

    return (
        <div className="flex flex-col gap-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:flex-row">
            {/* Photo */}
            <div className="flex-shrink-0 self-center md:self-start">
                {image ? (
                    <Image
                        src={image}
                        alt={name}
                        width={180}
                        height={220}
                        className="h-auto w-44 rounded-md object-cover"
                    />
                ) : (
                    <div className="h-52 w-44 rounded-md bg-gray-200" aria-hidden="true" />
                )}
            </div>

            {/* Bio Content */}
            <div className="flex-1">
                <div className="space-y-4 leading-relaxed text-brand-gray">
                    <p>
                        <span className="font-bold text-brand-dark">{name}</span>
                        <span className="text-brand-red font-semibold"> - {title} : </span>
                        {paragraphs[0]}
                    </p>
                    {paragraphs.slice(1).map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}
