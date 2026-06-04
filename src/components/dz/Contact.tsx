import {
  Phone, Mail, MapPin, Clock, Linkedin, Github, Instagram, Facebook, Codepen, Send,
} from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const socials = [
  { Icon: Linkedin, href: "https://www.linkedin.com/company/developerzon12", label: "LinkedIn" },
  { Icon: Github, href: "https://github.com/Developerzon12", label: "GitHub" },
  { Icon: Instagram, href: "https://www.instagram.com/developerzon12/", label: "Instagram" },
  { Icon: Facebook, href: "https://www.facebook.com/developerzon122", label: "Facebook" },
  { Icon: Codepen, href: "https://codepen.io/developerzon12", label: "CodePen" },
  { Icon: MapPin, href: "https://maps.app.goo.gl/gCyMTEbqGdbLc4Lm8", label: "Maps" },
];

const details = [
  { Icon: Phone, label: "Phone", value: "+92 319 612 2250", href: "tel:+923196122250" },
  { Icon: Mail, label: "Email", value: "developerzon12@gmail.com", href: "mailto:developerzon12@gmail.com" },
  { Icon: MapPin, label: "Location", value: "Gujrat, Punjab, Pakistan" },
  { Icon: Clock, label: "Hours", value: "Mon–Sat, 9 AM – 6 PM PKT" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="max-w-2xl reveal">
          <SectionLabel>GET IN TOUCH</SectionLabel>
          <h2 className="mt-5 font-display font-bold text-3xl lg:text-5xl text-[#F5F5F5] leading-tight">
            Let's Build Something Reliable
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          <div className="reveal">
            <div className="space-y-5">
              {details.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-md border border-[#E8521A]/30 bg-[#141414] flex items-center justify-center shrink-0">
                    <d.Icon className="text-[#E8521A]" size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] tracking-widest text-[#888] uppercase">{d.label}</div>
                    {d.href ? (
                      <a href={d.href} className="text-[#F5F5F5] hover:text-[#E8521A] transition-colors">{d.value}</a>
                    ) : (
                      <div className="text-[#F5F5F5]">{d.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <div className="font-mono text-[11px] tracking-widest text-[#888] uppercase mb-4">Follow Us</div>
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
          </div>

          <form
            className="dz-card rounded-xl p-7 lg:p-9 space-y-5 reveal"
            onSubmit={(e) => e.preventDefault()}
          >
            <Field label="Full Name">
              <input type="text" required className={inputCls} placeholder="Your name" />
            </Field>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Email">
                <input type="email" required className={inputCls} placeholder="you@email.com" />
              </Field>
              <Field label="Phone (optional)">
                <input type="tel" className={inputCls} placeholder="+92 ..." />
              </Field>
            </div>
            <Field label="Subject">
              <select className={inputCls} defaultValue="">
                <option value="" disabled>Choose a subject</option>
                <option>Network Setup</option>
                <option>IT Support</option>
                <option>Web Development</option>
                <option>Remote Support</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Message">
              <textarea rows={5} className={inputCls} placeholder="Tell us about your project..." />
            </Field>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#E8521A] hover:bg-[#FF6B35] text-white font-medium rounded-md transition-colors"
            >
              Send Message <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full bg-[#0D0D0D] border border-[#2A2A2A] focus:border-[#E8521A] focus:outline-none rounded-md px-4 py-3 text-[#F5F5F5] placeholder:text-[#555] transition-colors";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="font-mono text-[11px] tracking-widest text-[#888] uppercase block mb-2">{label}</span>
      {children}
    </label>
  );
}