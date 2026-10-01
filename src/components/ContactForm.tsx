"use client";
import { useState } from "react";
import { site } from "@/lib/site";

type Status = { type: "info" | "success" | "error"; text: string } | null;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    const name = String(d.get("name") || "").trim();
    const email = String(d.get("email") || "").trim();
    const message = String(d.get("message") || "").trim();
    if (!name || !email || !message) return setStatus({ type: "error", text: "Please fill in all fields." });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setStatus({ type: "error", text: "Please enter a valid email address." });
    setStatus({ type: "info", text: "Sending message..." });
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
          template_params: { from_name: name, reply_email: email, message_html: message },
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus({ type: "success", text: `Thank you ${name}! Your message has been sent.` });
      form.reset();
    } catch {
      setStatus({ type: "error", text: `Failed to send. Email me at ${site.email}` });
    }
  }

  return (
    <form className="cform" onSubmit={onSubmit} noValidate>
      <label>Your name<input name="name" type="text" autoComplete="name" required /></label>
      <label>Your email<input name="email" type="email" autoComplete="email" required /></label>
      <label>Message<textarea name="message" rows={5} required /></label>
      <button className="pill c" type="submit">Send message</button>
      {status && <p role="status" className={`fs ${status.type}`}>{status.text}</p>}
    </form>
  );
}
