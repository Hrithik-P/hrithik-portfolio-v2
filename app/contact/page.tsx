"use client"

import { useState, type FormEvent } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Globe, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteData } from "@/lib/site-data"

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    const mailto = `mailto:${siteData.person.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 sm:space-y-12"
          >
            <div>
              <h2 className="text-xs sm:text-sm font-medium text-muted-foreground mb-4 sm:mb-6">Get in touch</h2>

              {/* Mail Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6 sm:mb-8 flex items-start gap-3 sm:gap-4"
              >
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-card border border-border shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-muted-foreground mb-2">Email</p>
                  <a href={`mailto:${siteData.person.email}`} className="text-sm sm:text-base text-foreground font-medium break-words">
                    {siteData.person.email}
                  </a>
                </div>
              </motion.div>

              {/* Contact Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6 sm:mb-8 flex items-start gap-3 sm:gap-4"
              >
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-card border border-border shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-muted-foreground mb-2">Phone</p>
                  <a href={`tel:${siteData.person.phone}`} className="text-sm sm:text-base text-foreground font-medium">
                    {siteData.person.phone}
                  </a>
                </div>
              </motion.div>

              {/* Location Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start gap-3 sm:gap-4"
              >
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-card border border-border shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-muted-foreground mb-2">Where I'm based</p>
                  <p className="text-sm sm:text-base text-foreground font-medium">{siteData.person.location}</p>
                </div>
              </motion.div>
            </div>

            {/* Social Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-xs sm:text-sm font-medium text-muted-foreground mb-4 sm:mb-6">Find me online</h2>
              <div className="flex gap-3 sm:gap-4 flex-wrap">
                <a
                  href={siteData.social.website}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-card border border-border hover:bg-muted transition-colors"
                  aria-label="Website profile"
                >
                  <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
                </a>
                <a
                  href={siteData.social.x}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-card border border-border hover:bg-muted transition-colors"
                  aria-label="X profile"
                >
                  <Twitter className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
                </a>
                <a
                  href={siteData.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-card border border-border hover:bg-muted transition-colors"
                  aria-label="Instagram profile"
                >
                  <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl bg-card border border-border p-6 sm:p-8 md:p-10 relative overflow-hidden">
              {/* Decorative star */}
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-muted-foreground">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="sm:w-6 sm:h-6"
                >
                  <path d="M12 2L12 22M2 12L22 12M5.5 5.5L18.5 18.5M18.5 5.5L5.5 18.5" strokeWidth="1" />
                </svg>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 text-balance pr-8">
                I'd love to <span className="text-primary">hear from you.</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 pr-8">
                Drop a line—I usually reply within a day or two.
              </p>

              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name *"
                    value={form.name}
                    onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                    required
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email *"
                    value={form.email}
                    onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                    required
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Your Subject *"
                    value={form.subject}
                    onChange={(e) => setForm((prev) => ({ ...prev, subject: e.target.value }))}
                    required
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Your Message *"
                    value={form.message}
                    onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                    required
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-muted hover:bg-muted/80 text-foreground rounded-xl py-6 text-base font-medium"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
