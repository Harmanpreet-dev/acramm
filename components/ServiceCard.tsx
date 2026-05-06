interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    reversed?: boolean;
    index: number;
}

export default function ServiceCard({
    title,
    description,
    icon,
    reversed = false,
    index,
}: ServiceCardProps) {
    return (
        <article
            className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${reversed ? "lg:[direction:rtl]" : ""
                }`}
        >
            {/* Text Content */}
            <div className={reversed ? "lg:[direction:ltr]" : ""}>
                <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-red/10 text-sm font-bold text-brand-red">
                        {String(index).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-gray-200" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-brand-dark sm:text-2xl">
                    {title}
                </h3>
                <p className="leading-relaxed text-brand-gray">{description}</p>
            </div>

            {/* Image Placeholder */}
            <div
                className={`aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-brand-light to-gray-100 ${reversed ? "lg:[direction:ltr]" : ""
                    }`}
                aria-hidden="true"
            >
                <div className="flex h-full w-full items-center justify-center p-6">
                    <div className="text-center">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-brand-red/10">
                            {icon}
                        </div>
                        <p className="text-sm font-medium text-brand-gray">{title}</p>
                    </div>
                </div>
            </div>
        </article>
    );
}
