"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      service: String(fd.get("service") ?? ""),
      budget: String(fd.get("budget") ?? ""),
      timeline: String(fd.get("timeline") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let json: { ok?: boolean; error?: string } = {};
      try {
        json = JSON.parse(text);
      } catch {
        // response wasn't JSON — treat as server error
      }

      if (res.ok && json.ok) {
        setStatus("sent");
        setMsg("Thanks — your message was received. I'll get back to you soon.");
        form.reset();
        return;
      }

      setStatus("error");
      setMsg(json.error ?? `Server responded with ${res.status}.`);
    } catch (err) {
      setStatus("error");
      setMsg(
        err instanceof Error
          ? `Network error: ${err.message}`
          : "Network error. Please try again."
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="surface space-y-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required placeholder="Your full name" />
        <Field label="Email" name="email" type="email" required placeholder="you@example.com" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone / WhatsApp" name="phone" placeholder="+254 ..." />
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[color:var(--color-muted)]">
            Service needed
          </label>
          <select
            name="service"
            defaultValue=""
            className="w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-soft)] px-3 py-2.5 text-sm outline-none focus:border-cyan-400"
          >
            <option value="" disabled>Select a service</option>
            <option>Business website</option>
            <option>Web application</option>
            <option>Business management system</option>
            <option>Automation</option>
            <option>Software development</option>
            <option>Technical support</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[color:var(--color-muted)]">
            Budget range
          </label>
          <select
            name="budget"
            defaultValue=""
            className="w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-soft)] px-3 py-2.5 text-sm outline-none focus:border-cyan-400"
          >
            <option value="" disabled>Select a range</option>
            <option>Under KES 30,000</option>
            <option>KES 30,000 – 100,000</option>
            <option>KES 100,000 – 300,000</option>
            <option>Above KES 300,000</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <Field label="Timeline" name="timeline" placeholder="e.g. 2–4 weeks" />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[color:var(--color-muted)]">
          Project description
        </label>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell me what you're trying to build, who it's for, and what success looks like."
          className="w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-soft)] px-3 py-2.5 text-sm outline-none focus:border-cyan-400"
        />
      </div>

      {status === "sent" ? (
        <p className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-300">
          {msg}
        </p>
      ) : null}

      {status === "error" ? (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {msg}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300 disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="animate-spin" size={16} /> Sending…
          </>
        ) : (
          <>
            Send message <ArrowRight size={16} />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[color:var(--color-muted)]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg-soft)] px-3 py-2.5 text-sm outline-none focus:border-cyan-400"
      />
    </div>
  );
}
