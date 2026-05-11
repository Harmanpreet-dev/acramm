import Image, { StaticImageData } from "next/image";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    image?: StaticImageData;
    reversed?: boolean;
    index: number;
}

export default function ServiceCard({
    title,
    description,
    icon,
    image,
    reversed = false,
}: ServiceCardProps) {
    return (
        <article
            className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${reversed ? "lg:[direction:rtl]" : ""
                }`}
        >
            {/* Text Content */}
            <div className={reversed ? "lg:[direction:ltr]" : ""}>
                <h3 className="mb-3 text-xl font-bold text-brand-red sm:text-2xl">
                    {title}
                </h3>
                <p className="whitespace-pre-line leading-relaxed text-brand-gray">
                    {description}
                </p>
            </div>

            {/* Image or Placeholder */}
            <div
                className={`overflow-hidden rounded-xl ${reversed ? "lg:[direction:ltr]" : ""
                    } ${!image ? "aspect-[4/3] bg-gradient-to-br from-brand-light to-gray-100" : ""}`}
            >
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        width={600}
                        height={400}
                        className="h-auto w-full rounded-xl"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center p-6">
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-brand-red/10">
                                {icon}
                            </div>
                            <p className="text-sm font-medium text-brand-gray">{title}</p>
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
}
