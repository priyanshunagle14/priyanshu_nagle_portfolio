import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "../components/Reveal";
import MagneticButton from "../components/MagneticButton";
import { profile, socials, emailjsConfig } from "../data/content";

const initial = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [sending, setSending] = useState(false);
  const initialized = useRef(false);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "err", msg: "Please fill in all fields before sending." });
      return;
    }

    setSending(true);
    setStatus({ type: "", msg: "" });

    try {
      if (!initialized.current) {
        emailjs.init({ publicKey: emailjsConfig.publicKey });
        initialized.current = true;
      }
      await emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      });
      setStatus({
        type: "ok",
        msg: "Thank you! Your message has been sent successfully. I'll get back to you shortly.",
      });
      setForm(initial);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus({
        type: "err",
        msg: "Failed to send message. Please reach out directly via email or LinkedIn.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line/40 bg-zinc-50/50 py-16 sm:py-20 md:py-24 lg:py-32 transition-colors duration-300 dark:border-white/[0.05] dark:bg-dark px-4 sm:px-5 md:px-10"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px] dark:bg-gold/[0.05]" />

      <div className="mx-auto max-w-[1140px]">
        <div className="grid items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* Left Column: Direct Info & Socials */}
          <div className="flex flex-col">
            <Reveal variant="fade-down" delay={0.05}>
              <span className="mb-2.5 sm:mb-3.5 inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-mono text-[0.6rem] sm:text-[0.68rem] uppercase tracking-[0.14em] text-gold dark:border-gold/30 dark:bg-gold/10 dark:text-gold-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Get In Touch
              </span>
            </Reveal>

            <Reveal variant="fade-up" delay={0.1}>
              <h2 className="font-serif text-[clamp(1.6rem,4vw,3.2rem)] leading-[1.08] tracking-[-0.025em] text-ink dark:text-zinc-50">
                Let's build
                <br />
                something{" "}
                <em className="not-italic italic text-gradient-gold">
                  extraordinary.
                </em>
              </h2>
            </Reveal>

            <Reveal variant="fade-up" delay={0.18}>
              <p className="mt-3 sm:mt-4 max-w-[460px] text-[0.8rem] sm:text-[0.98rem] leading-[1.6] sm:leading-[1.8] text-muted dark:text-zinc-300">
                Open to full-time roles, ambitious engineering projects, and collaborative opportunities. Have an idea or question? Let's connect.
              </p>
            </Reveal>

            {/* Quick Contact Info Cards */}
            <div className="mt-6 sm:mt-8 flex flex-col gap-2.5 sm:gap-3">
              <Reveal variant="fade-up" delay={0.25}>
                <InfoCard
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  }
                  label="Location"
                  value={profile.location}
                />
              </Reveal>

              <Reveal variant="fade-up" delay={0.3}>
                <InfoCard
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  }
                  label="Status"
                  value={profile.status}
                />
              </Reveal>
            </div>

            {/* Social Links */}
            <Reveal variant="fade-up" delay={0.35} className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2 sm:gap-3">
              <SocialBadge href={socials.email} label="Email Me" />
              <SocialBadge href={socials.github} label="GitHub" />
              <SocialBadge href={socials.linkedin} label="LinkedIn" />
            </Reveal>
          </div>

          {/* Right Column: Contact Form */}
          <Reveal
            variant="scale-up"
            delay={0.2}
            className="relative rounded-xl sm:rounded-2xl md:rounded-3xl border border-line bg-panel p-5 sm:p-7 md:p-9 shadow-xl dark:border-white/10 dark:bg-zinc-900/80"
          >
            <h3 className="mb-1 sm:mb-2 font-serif text-[1.15rem] sm:text-[1.45rem] font-medium text-ink dark:text-zinc-100">
              Send a Direct Message
            </h3>
            <p className="mb-4 sm:mb-6 text-[0.75rem] sm:text-[0.85rem] text-muted dark:text-zinc-400">
              Fill out the form below and I'll receive it immediately.
            </p>

            {status.msg && (
              <div
                className={`mb-4 sm:mb-5 rounded-lg sm:rounded-xl border p-3 sm:p-4 text-[0.75rem] sm:text-[0.86rem] leading-relaxed transition-all ${
                  status.type === "ok"
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                    : "border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-300"
                }`}
              >
                {status.type === "ok" ? "✓ " : "✕ "}
                {status.msg}
              </div>
            )}

            <form onSubmit={onSubmit} noValidate className="space-y-3 sm:space-y-4">
              <div>
                <label className="mb-1 sm:mb-1.5 block text-[0.65rem] sm:text-xs font-medium uppercase tracking-wider text-muted dark:text-zinc-400">
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={onChange}
                  placeholder="e.g. Alex Smith"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="mb-1 sm:mb-1.5 block text-[0.65rem] sm:text-xs font-medium uppercase tracking-wider text-muted dark:text-zinc-400">
                  Your Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="alex@company.com"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="mb-1 sm:mb-1.5 block text-[0.65rem] sm:text-xs font-medium uppercase tracking-wider text-muted dark:text-zinc-400">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={onChange}
                  placeholder="Tell me about your project, opportunities, or ideas..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <div className="pt-1 sm:pt-2">
                <MagneticButton strength={10} className="w-full">
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full rounded-lg sm:rounded-xl bg-gold py-2.5 sm:py-3.5 text-center text-[0.8rem] sm:text-[0.9rem] font-semibold text-white shadow-md transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_8px_20px_rgba(203,162,50,0.35)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {sending ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        <span>Sending message...</span>
                      </span>
                    ) : (
                      "Send Message →"
                    )}
                  </button>
                </MagneticButton>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const inputClasses =
  "w-full rounded-lg sm:rounded-xl border border-line bg-zinc-50/80 px-3 sm:px-4 py-2 sm:py-3 text-[0.8rem] sm:text-[0.92rem] text-ink outline-none transition-all placeholder:text-muted/60 focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/20 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-gold dark:focus:bg-zinc-900 dark:focus:ring-gold/20";

function InfoCard({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 sm:gap-4 rounded-lg sm:rounded-2xl border border-line bg-panel p-3 sm:p-4 shadow-sm transition-all duration-300 hover:border-gold/50 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-gold/40">
      <div className="grid h-9 sm:h-11 w-9 sm:w-11 shrink-0 place-items-center rounded-lg sm:rounded-xl bg-gold/10 text-gold dark:bg-gold/15">
        {icon}
      </div>
      <div>
        <div className="text-[0.6rem] sm:text-[0.7rem] uppercase tracking-wider text-muted dark:text-zinc-500">
          {label}
        </div>
        <div className="text-[0.8rem] sm:text-[0.92rem] font-medium text-ink dark:text-zinc-200">
          {value}
        </div>
      </div>
    </div>
  );
}

function SocialBadge({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl border border-line bg-panel px-3 sm:px-4 py-2 sm:py-2.5 text-[0.65rem] sm:text-xs font-semibold uppercase tracking-wider text-ink shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300 dark:hover:border-gold dark:hover:text-gold-soft"
    >
      <span>{label}</span>
      <span className="text-muted dark:text-zinc-500">↗</span>
    </a>
  );
}
