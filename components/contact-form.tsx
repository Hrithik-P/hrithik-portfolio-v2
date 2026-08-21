"use client"

import { useState, type FormEvent } from "react"
import { Send } from "lucide-react"
import { siteData } from "@/lib/site-data"

const FIELD_CLASS =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground transition-colors hover:border-primary/60 focus:border-primary"

const initialForm = { name: "", email: "", subject: "", message: "" }

export function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)

  const update = (field: keyof typeof form) => (event: { target: { value: string } }) =>
    setForm((previous) => ({ ...previous, [field]: event.target.value }))

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    const subject = form.subject.trim() || `Portfolio enquiry from ${form.name}`

    window.location.href = `mailto:${siteData.person.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    // There's no backend here — the mail client takes over. Say so plainly
    // rather than implying the message was delivered.
    setSent(true)
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
            value={form.name}
            onChange={update("name")}
            className={FIELD_CLASS}
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
            value={form.email}
            onChange={update("email")}
            className={FIELD_CLASS}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="subject" className="text-sm font-medium text-foreground">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="What's this about?"
          value={form.subject}
          onChange={update("subject")}
          className={FIELD_CLASS}
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="What are you building, and where is it stuck?"
          value={form.message}
          onChange={update("message")}
          className={`${FIELD_CLASS} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3.5 font-medium text-background transition-colors hover:bg-foreground/90"
      >
        <Send className="size-4" aria-hidden />
        Compose email
      </button>

      <p aria-live="polite" className="min-h-[1.25rem] text-center text-sm text-muted-foreground">
        {sent ? (
          <>
            Your mail app should have opened. If it didn&rsquo;t, write to{" "}
            <a href={`mailto:${siteData.person.email}`} className="font-medium text-primary hover:underline">
              {siteData.person.email}
            </a>
            .
          </>
        ) : (
          "This opens your own mail app — nothing is sent from this page."
        )}
      </p>
    </form>
  )
}
