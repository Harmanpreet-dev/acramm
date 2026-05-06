"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Form submission logic would go here
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-lg bg-white p-6 shadow-lg sm:p-8"
            aria-label="Contact form"
        >
            <div className="space-y-5">
                <div>
                    <label
                        htmlFor="contact-name"
                        className="mb-1 block text-sm font-medium text-brand-dark"
                    >
                        Your Name<span className="text-brand-red">*</span>
                    </label>
                    <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-brand-dark placeholder-gray-400 transition-colors focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
                        placeholder="Your Name"
                        aria-required="true"
                    />
                </div>

                <div>
                    <label
                        htmlFor="contact-email"
                        className="mb-1 block text-sm font-medium text-brand-dark"
                    >
                        Email<span className="text-brand-red">*</span>
                    </label>
                    <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-brand-dark placeholder-gray-400 transition-colors focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
                        placeholder="Email Address"
                        aria-required="true"
                    />
                </div>

                <div>
                    <label
                        htmlFor="contact-phone"
                        className="mb-1 block text-sm font-medium text-brand-dark"
                    >
                        Phone<span className="text-brand-red">*</span>
                    </label>
                    <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-brand-dark placeholder-gray-400 transition-colors focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
                        placeholder="Phone Number"
                        aria-required="true"
                    />
                </div>

                <div>
                    <label
                        htmlFor="contact-subject"
                        className="mb-1 block text-sm font-medium text-brand-dark"
                    >
                        Subject
                    </label>
                    <input
                        type="text"
                        id="contact-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={(e) =>
                            setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-brand-dark placeholder-gray-400 transition-colors focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
                        placeholder="Subject"
                    />
                </div>

                <div>
                    <label
                        htmlFor="contact-message"
                        className="mb-1 block text-sm font-medium text-brand-dark"
                    >
                        Your Message
                    </label>
                    <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full resize-vertical rounded-md border border-gray-300 px-4 py-3 text-sm text-brand-dark placeholder-gray-400 transition-colors focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
                        placeholder="Write your message here..."
                    />
                </div>

                <button
                    type="submit"
                    className="w-full rounded-md bg-brand-dark px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-dark focus:ring-offset-2"
                >
                    Send
                </button>
            </div>
        </form>
    );
}
