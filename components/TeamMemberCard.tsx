interface TeamMemberCardProps {
    name: string;
    title: string;
    bio: string;
}

export default function TeamMemberCard({ name, title, bio }: TeamMemberCardProps) {
    return (
        <div className="flex flex-col gap-6 rounded-lg bg-white p-6 shadow-sm sm:flex-row">
            {/* Photo Placeholder */}
            <div className="flex-shrink-0 self-center sm:self-start" aria-hidden="true">
                <div className="h-28 w-28 rounded-full bg-gray-200" />
            </div>

            {/* Bio Content */}
            <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg font-bold text-brand-dark">{name}</h3>
                <p className="mb-2 text-sm font-semibold text-brand-red">{title}</p>
                <p className="leading-relaxed text-brand-gray">{bio}</p>
            </div>
        </div>
    );
}
