"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      email: String(data.get("email") || ""),
      company: String(data.get("company") || ""),
    };

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => ({}));

      if (res.ok && result.ok) {
        setStatus("success");
        setMessage(
          result.already
            ? "You're already on the list — thank you!"
            : "You're in! Watch your inbox for news and wellness tips.",
        );
        setEmail("");
      } else {
        setStatus("error");
        setMessage(result.error || "Something went wrong. Please try again later.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <p className="newsletter-status newsletter-status--ok" role="status">
        {message}
      </p>
    );
  }

  return (
    <form className="newsletter" onSubmit={handleSubmit} noValidate>
      {/* Honeypot: hidden from people, catches spam bots. */}
      <input
        type="text"
        name="company"
        className="newsletter-hp"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <input
        type="email"
        name="email"
        placeholder="Email address"
        aria-label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button className="btn btn-primary" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Signing up…" : "Sign Up"}
      </button>
      {status === "error" && (
        <p className="newsletter-status newsletter-status--err" role="alert">
          {message}
        </p>
      )}
    </form>
  );
}
