import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Linkedin,
  Github,
  Instagram,
  Facebook,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { SectionLabel } from "./SectionLabel";

// ─────────────────────────────────────────────────────────────────────────────
// 🔑 Web3Forms Setup (FREE):
//    1. Go to https://web3forms.com
//    2. Enter your email: developerzon12@gmail.com
//    3. Click "Create Access Key" — you'll receive it by email
//    4. Replace the string below with your actual key
// ─────────────────────────────────────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = "b5ad93a9-6d2a-4c29-ba27-c94e12dbf37a";

// Social links
const socials = [
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/company/developerzon12",
    label: "LinkedIn",
  },
  {
    Icon: Github,
    href: "https://github.com/Developerzon12",
    label: "GitHub",
  },
  {
    Icon: Instagram,
    href: "https://www.instagram.com/developerzon12/",
    label: "Instagram",
  },
  {
    Icon: Facebook,
    href: "https://www.facebook.com/developerzon122",
    label: "Facebook",
  },
  {
    Icon: MapPin,
    href: "https://maps.app.goo.gl/gCyMTEbqGdbLc4Lm8",
    label: "Maps",
  },
];

// Contact details
const details = [
  {
    Icon: Phone,
    label: "Phone",
    value: "+92 319 612 2250",
    href: "tel:+923196122250",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "developerzon12@gmail.com",
    href: "mailto:developerzon12@gmail.com",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "Gujrat, Punjab, Pakistan",
    href: undefined,
  },
  {
    Icon: Clock,
    label: "Hours",
    value: "Mon–Sat, 9 AM – 6 PM PKT",
    href: undefined,
  },
];

// Subject options
const subjects = [
  "Network Setup",
  "IT Support",
  "Web Development",
  "Remote Support",
  "FTTH / Fiber",
  "Server Setup",
  "Other",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          // Email subject line shown in inbox
          subject: `[Developer Zon] New Message: ${form.subject || "General Inquiry"}`,
          // Reply-To so you can reply directly to the sender
          from_name: form.name,
          // Form fields
          name: form.name,
          email: form.email,
          phone: form.phone || "Not provided",
          subject_topic: form.subject || "Not specified",
          message: form.message,
          // Honeypot spam protection
          botcheck: "",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm(emptyForm);
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("Something went wrong. Please try again or email us directly.");
      }
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setErrorMsg("");
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 border-t border-[#2A2A2A]"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl reveal">
          <SectionLabel>GET IN TOUCH</SectionLabel>
          <h2 className="mt-5 font-display font-bold text-3xl lg:text-5xl text-[#F5F5F5] leading-tight">
            Let's Build Something Reliable
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          {/* ── Left: info + socials ── */}
          <div className="reveal">
            <div className="space-y-5">
              {details.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-md border border-[#E8521A]/30 bg-[#141414] flex items-center justify-center shrink-0">
                    <d.Icon className="text-[#E8521A]" size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] tracking-widest text-[#888] uppercase">
                      {d.label}
                    </div>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="text-[#F5F5F5] hover:text-[#E8521A] transition-colors"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <div className="text-[#F5F5F5]">{d.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div className="mt-10">
              <div className="font-mono text-[11px] tracking-widest text-[#888] uppercase mb-4">
                Follow Us
              </div>
              <div className="flex flex-wrap gap-3">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-md border border-[#2A2A2A] bg-[#141414] flex items-center justify-center text-[#F5F5F5] hover:text-[#E8521A] hover:border-[#E8521A] transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp quick CTA */}
            <div className="mt-10 p-5 rounded-xl border border-[#2A2A2A] bg-[#141414]">
              <div className="font-display font-semibold text-[#F5F5F5] text-sm mb-1">
                Prefer WhatsApp?
              </div>
              <p className="text-[#888] text-xs mb-4">
                Message us directly for a faster response.
              </p>
              <a
                href="https://wa.me/923196122250"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 text-sm font-medium rounded-md transition-colors"
              >
                {/* WhatsApp SVG icon */}
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="reveal">
            {/* SUCCESS STATE */}
            {status === "success" ? (
              <div className="dz-card rounded-xl p-10 flex flex-col items-center justify-center text-center gap-5 min-h-[420px]">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <CheckCircle className="text-green-400" size={30} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-[#F5F5F5]">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-[#888] text-sm max-w-xs">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="mt-2 px-5 py-2.5 border border-[#2A2A2A] text-[#888] hover:text-[#F5F5F5] hover:border-[#E8521A] text-sm rounded-md transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              /* FORM */
              <form
                onSubmit={handleSubmit}
                className="dz-card rounded-xl p-7 lg:p-9 space-y-5"
              >
                {/* Error banner */}
                {status === "error" && (
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                    <AlertCircle className="text-red-400 shrink-0 mt-0.5" size={16} />
                    <div>
                      <p className="text-red-400 text-sm font-medium">Submission failed</p>
                      <p className="text-red-400/70 text-xs mt-0.5">
                        {errorMsg || "Please try again or email us directly."}
                      </p>
                    </div>
                  </div>
                )}

                {/* Full Name */}
                <Field label="Full Name">
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className={inputCls}
                    placeholder="Your name"
                  />
                </Field>

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Email">
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className={inputCls}
                      placeholder="you@email.com"
                    />
                  </Field>
                  <Field label="Phone (optional)">
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputCls}
                      placeholder="+92 ..."
                    />
                  </Field>
                </div>

                {/* Subject */}
                <Field label="Subject">
                  <select
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className={inputCls}
                  >
                    <option value="" disabled>
                      Choose a subject
                    </option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>

                {/* Message */}
                <Field label="Message">
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className={inputCls}
                    placeholder="Tell us about your project or issue..."
                  />
                </Field>

                {/* Honeypot (spam protection — hidden) */}
                <input type="checkbox" name="botcheck" className="hidden" />

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#E8521A] hover:bg-[#FF6B35] disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-md transition-colors"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>

                <p className="text-center font-mono text-[11px] text-[#555]">
                  We respond within 24 hours · developerzon12@gmail.com
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Helpers ──────────────────────────────────────────────────────────────────

const inputCls =
  "w-full bg-[#0D0D0D] border border-[#2A2A2A] focus:border-[#E8521A] focus:outline-none rounded-md px-4 py-3 text-[#F5F5F5] placeholder:text-[#555] transition-colors";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[11px] tracking-widest text-[#888] uppercase block mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}