import { ArrowRight, Zap, Shield, BarChart3 } from "lucide-react";

export function NexaLinkBanner() {
  return (
    <section className="relative py-20 border-t border-[#2A2A2A] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-[#E8521A]/8 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
        <div className="relative rounded-2xl border border-[#E8521A]/30 bg-[#141414] p-10 lg:p-14 overflow-hidden reveal">
          {/* Top glowing border */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#E8521A] to-transparent" />
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#E8521A]/8 to-transparent rounded-bl-full" />

          <div className="flex flex-col lg:flex-row gap-10 items-start lg:items-center justify-between">
            {/* Left: Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E8521A]/30 bg-[#E8521A]/10 font-mono text-[11px] tracking-widest text-[#E8521A] mb-6">
                🚀 NOW IN PRODUCTION
              </div>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-[#F5F5F5] leading-tight">
                Introducing{" "}
                <span className="text-[#E8521A]">NexaLink</span>
                <br />
                <span className="text-[#888] text-2xl lg:text-3xl font-semibold">
                  SaaS Platform for Pakistani ISPs
                </span>
              </h2>
              <p className="mt-5 text-[#888] leading-relaxed max-w-xl">
                Manage PPPoE customers, automate billing, integrate FreeRADIUS
                authentication, and monitor your network — all from one NOC dashboard.
                Built by Developer Zon for the Pakistani ISP market.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "PPPoE Management",
                  "Auto Billing",
                  "FreeRADIUS",
                  "NOC Dashboard",
                  "MikroTik API",
                  "Laravel 13",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#0D0D0D] border border-[#2A2A2A] text-[#E8521A]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: CTA + badges */}
            <div className="flex flex-col gap-4 shrink-0 w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href="https://nexalink.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#E8521A] hover:bg-[#FF6B35] text-white font-medium rounded-md transition-colors"
                >
                  Visit NexaLink <ArrowRight size={16} />
                </a>
                <a
                  href="https://github.com/Developerzon12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#E8521A]/60 text-[#E8521A] hover:bg-[#E8521A]/10 font-medium rounded-md transition-colors"
                >
                  View on GitHub
                </a>
              </div>

              {/* Pill badges */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Zap, label: "Fast Deploy" },
                  { icon: Shield, label: "Secure" },
                  { icon: BarChart3, label: "Scalable" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg border border-[#2A2A2A] bg-[#0D0D0D]"
                  >
                    <Icon className="text-[#E8521A]" size={18} strokeWidth={1.75} />
                    <span className="font-mono text-[10px] text-[#888] text-center leading-tight">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}