"use client";
import { useState } from "react";
import Container from "./Container";
import Link from "next/link";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/maqzgzbr";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

    return (
        <section id="contact" className="relative overflow-hidden pt-20 pb-20 md:pt-25 md:pb-25">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center bg-surface border border-border rounded-lg px-8 py-14 max-w-6xl mx-auto">
                    <div>
                        <h2 className="text-3xl md:text-[48px] font-bold text-text">
                            I Am Available For Freelance.
                        </h2>
                        <p className="text-muted mt-4 text-base md:text-base leading-relaxed">
                            I&apos;m always open to discussing new projects, creative ideas, and opportunities to bring your vision to life. Feel free to get in touch.
                            <br />
                            <br />
                            Interested in collaborating or discussing your next frontend project? Send me a message, and I&apos;ll get back to you as soon as possible.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="grid gap-4 text-left w-full">
                        <div className="grid gap-1.5">
                            <label htmlFor="name" className="text-sm font-medium text-text">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="w-full rounded-sm border border-border bg-panel px-4 py-2.5 text-text text-sm outline-none transition-colors duration-200 focus:border-border-accent"
                                placeholder="Your name"
                            />
                        </div>

                        <div className="grid gap-1.5">
                            <label htmlFor="email" className="text-sm font-medium text-text">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="w-full rounded-sm border border-border bg-panel px-4 py-2.5 text-text text-sm outline-none transition-colors duration-200 focus:border-border-accent"
                                placeholder="Enter your Email"
                            />
                        </div>

                        <div className="grid gap-1.5">
                            <label htmlFor="message" className="text-sm font-medium text-text">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                className="w-full rounded-sm border border-border bg-panel px-4 py-2.5 text-text text-sm outline-none transition-colors duration-200 focus:border-border-accent resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="inline-flex w-max items-center justify-center px-6 py-3 rounded-sm bg-accent text-btn-primary-text font-semibold text-sm transition-transform duration-200 hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
                            >
                                {status === "submitting" ? "Sending..." : "Send Message"}
                            </button>

                            <Link
                                href="mailto:work.rsenapilo20@gmail.com"
                                className="inline-flex w-max items-center px-6 py-3 rounded-sm border border-border-accent text-text font-semibold text-sm transition-colors duration-200 hover:bg-accent-soft"
                            >
                                Send Email Directly
                            </Link>
                        </div>
                        {status === "success" && (
                            <p className="text-accent text-sm text-center mt-2">
                                Thanks! Your message has been sent.
                            </p>
                        )}
                        {status === "error" && (
                            <p className="text-sm text-center mt-2 text-red-400">
                                Something went wrong. Please try again or email me directly.
                            </p>
                        )}
                    </form>
                </div>
            </Container>
        </section>
    );
}