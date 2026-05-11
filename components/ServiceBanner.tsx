export default function ServiceBanner() {
    return (
        <section
            className="section-padding bg-white"
            aria-labelledby="service-banner-heading"
        >
            <div className="section-container">
                <h2
                    id="service-banner-heading"
                    className="mb-2 text-2xl font-bold text-brand-dark sm:text-3xl"
                >
                    Our Service
                </h2>
                <div className="mb-8 h-1 w-12 bg-brand-dark" aria-hidden="true" />

                {/* Video Player */}
                <div className="mb-8 aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
                    <video
                        className="h-full w-full object-cover"
                        controls
                        preload="metadata"
                        aria-label="A-Cra service overview video"
                    >
                        <source src="/videos/Media1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Disclaimer */}
                <p className="leading-relaxed text-brand-gray text-sm">
                    <span className="font-semibold text-brand-red">Disclaimer :</span>{" "}
                    Our credit rating and grading services are based on the information
                    provided by the clients and collected from other sources which we
                    consider necessary. Although we take a reasonable care , A-Cra makes
                    no assurance or warrantee, either expressed or implied with respect to
                    accuracy, adequacy of the information used for finalizing our reports.
                    A-Cra is not responsible for any omissions and has no financial and
                    non-financial liability, whatsoever for any direct or indirect or
                    consequential loss of any kind arising from use of it&apos;s reports.
                    A-Cra&apos;s credit rating and due diligence reports should not be
                    treated as recommendations or substitute for lender&apos;s internal
                    assessment about their clients.
                </p>
            </div>
        </section>
    );
}
