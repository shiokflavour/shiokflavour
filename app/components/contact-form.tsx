"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`ShiokFlavour contact from ${name || "visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:hello@shiokflavour.com?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex max-w-xl flex-col gap-5"
    >
      <div>
        <label
          htmlFor="contact-name"
          className="mb-2 block text-sm font-medium text-sf-cream"
        >
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-white/15 bg-sf-bg px-4 py-3 text-sf-cream placeholder:text-sf-muted/70 focus:border-sf-primary/50 focus:outline-none focus:ring-2 focus:ring-sf-primary/40"
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="mb-2 block text-sm font-medium text-sf-cream"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-white/15 bg-sf-bg px-4 py-3 text-sf-cream placeholder:text-sf-muted/70 focus:border-sf-primary/50 focus:outline-none focus:ring-2 focus:ring-sf-primary/40"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block text-sm font-medium text-sf-cream"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-y rounded-xl border border-white/15 bg-sf-bg px-4 py-3 text-sf-cream placeholder:text-sf-muted/70 focus:border-sf-primary/50 focus:outline-none focus:ring-2 focus:ring-sf-primary/40"
          placeholder="How can we help?"
        />
      </div>
      <button
        type="submit"
        className="inline-flex min-h-12 items-center justify-center rounded-xl bg-sf-primary px-8 text-sm font-semibold text-white transition hover:bg-sf-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-cream"
      >
        Send message
      </button>
    </form>
  );
}
