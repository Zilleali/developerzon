import { Quote } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const testimonials = [
  {
    quote:
      "Developer Zon set up our entire ISP infrastructure from scratch — MikroTik configuration, VLAN design, RADIUS authentication, the works. The network has been rock solid for over a year with zero major downtime.",
    name: "Ahmad Malik",
    role: "Owner, CityNet ISP",
    location: "Gujrat, Punjab",
    initial: "A",
  },
  {
    quote:
      "They resolved our network latency issues that had been plaguing us for months. Remote support was fast and professional — diagnosed and fixed the problem within hours, not days. Highly recommend.",
    name: "Muhammad Usman",
    role: "IT Manager",
    location: "Sialkot, Punjab",
    initial: "M",
  },
  {
    quote:
      "The WordPress site they built is clean, fast, and ranks well on Google. Great communication throughout, delivered on time, and genuinely understands what a business needs from its online presence.",
    name: "Haris Ahmed",
    role: "Business Owner",
    location: "Lahore, Punjab",
    initial: "H",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <SectionLabel>CLIENT FEEDBACK</SectionLabel>
            <h2 className="mt-5 font-display font-bold text-3xl lg:text-5xl text-[#F5F5F5] leading-tight">
              Trusted by 50+ Businesses
            </h2>
            <p className="mt-5 text-[#888]">
              Real feedback from ISPs, businesses, and IT teams across Pakistan.
            </p>
          </div>
          {/* Rating badge */}
          <div className="shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl border border-[#2A2A2A] bg-[#141414]">
            <div className="text-center">
              <div className="font-display font-bold text-2xl text-[#F5F5F5]">5.0</div>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 fill-[#E8521A]" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <div className="font-mono text-[10px] text-[#888] mt-1">Fiverr Rating</div>
            </div>
            <div className="h-10 w-px bg-[#2A2A2A]" />
            <div className="text-center">
              <div className="font-display font-bold text-2xl text-[#F5F5F5]">34+</div>
              <div className="font-mono text-[10px] text-[#888] mt-1">Orders Done</div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="dz-card rounded-xl p-8 flex flex-col gap-6 reveal"
            >
              {/* Quote icon */}
              <Quote
                className="text-[#E8521A] shrink-0"
                size={28}
                strokeWidth={1.5}
              />

              {/* Quote text */}
              <p className="text-[#888] leading-relaxed text-sm flex-1 italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-[#2A2A2A] pt-5">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-[#E8521A]/20 border border-[#E8521A]/40 flex items-center justify-center shrink-0">
                  <span className="font-display font-bold text-[#E8521A] text-sm">
                    {t.initial}
                  </span>
                </div>
                <div>
                  <div className="font-display font-semibold text-[#F5F5F5] text-sm">
                    {t.name}
                  </div>
                  <div className="font-mono text-[11px] text-[#E8521A] mt-0.5">
                    {t.role}
                  </div>
                  <div className="font-mono text-[11px] text-[#666]">
                    {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}