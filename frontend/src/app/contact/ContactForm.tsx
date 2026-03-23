"use client";

import { siteConfig } from "@/frontend/data/portfolio";
import { FormEvent, useState } from "react";

type Props = {
  formAction: string | null;
};

export default function ContactForm({ formAction }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  if (formAction) {
    return (
      <form action={formAction} method="POST" className="max-w-lg space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mono-label mb-2 block">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-white/40"
            />
          </div>
          <div>
            <label htmlFor="email" className="mono-label mb-2 block">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-white/40"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="mono-label mb-2 block">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="Project inquiry"
            className="w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-white/40"
          />
        </div>

        <div>
          <label htmlFor="message" className="mono-label mb-2 block">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Tell me about your project..."
            className="w-full resize-none border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-white/40"
          />
        </div>

        <button
          type="submit"
          className="border border-white px-8 py-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black"
        >
          Send Message
        </button>
      </form>
    );
  }

  function handleMailto(e: FormEvent) {
    e.preventDefault();
    const body = [message, "", `— ${name}`, email].filter(Boolean).join("\n");
    const params = new URLSearchParams({
      subject: subject || "Portfolio contact",
      body,
    });
    window.location.href = `mailto:${siteConfig.email}?${params.toString()}`;
  }

  return (
    <form onSubmit={handleMailto} className="max-w-lg space-y-6">
      <p className="text-xs text-zinc-500">
        Submissions use your mail app (no server configured). For hosted
        delivery, add{" "}
        <code className="text-zinc-400">NEXT_PUBLIC_FORMSPREE_ID</code> to{" "}
        <code className="text-zinc-400">.env.local</code>.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mono-label mb-2 block">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-white/40"
          />
        </div>
        <div>
          <label htmlFor="email" className="mono-label mb-2 block">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-white/40"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mono-label mb-2 block">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Project inquiry"
          className="w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-white/40"
        />
      </div>

      <div>
        <label htmlFor="message" className="mono-label mb-2 block">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your project..."
          className="w-full resize-none border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-white/40"
        />
      </div>

      <button
        type="submit"
        className="border border-white px-8 py-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black"
      >
        Open in email app
      </button>
    </form>
  );
}
