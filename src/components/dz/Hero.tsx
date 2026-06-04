import { ArrowRight } from "lucide-react";

const stats = [
  { k: "2023", v: "Founded" },
  { k: "50+", v: "Clients Served" },
  { k: "15+", v: "Specialties" },
  { k: "Gujrat", v: "& Remote" },
];

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 dz-grid-bg opacity-60" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="font-display font-bold text-[28vw] leading-none text-[#E8521A]/[0.04] select-none">DZ</span>
      </div>
      <div className="absolute left-1/2 top-40 -translate-x-1/2 w-[800px] h-[400px] dz-radial-glow blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-mono text-xs tracking-[0.3em] text-[#E8521A] mb-6">
            // IT INFRASTRUCTURE · NETWORKS · SUPPORT
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-[#F5F5F5] leading-[1.05] tracking-tight">
            We Build the IT Infrastructure{" "}
            <span className="text-[#E8521A]">Your Business</span> Relies On
          </h1>
          <p className="mt-8 text-lg text-[#888] max-w-2xl mx-auto leading-relaxed">
            Network engineering, technical support, and business technology systems —
            designed for reliability, security, and scale.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#E8521A] hover:bg-[#FF6B35] text-white font-medium rounded-md transition-colors"
            >
              Explore Our Services <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-[#E8521A] text-[#E8521A] hover:bg-[#E8521A]/10 font-medium rounded-md transition-colors"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#2A2A2A] border border-[#2A2A2A] rounded-lg overflow-hidden">
            {stats.map((s) => (
              <div key={s.v} className="bg-[#0D0D0D] px-6 py-6 text-left">
                <div className="font-display font-bold text-2xl lg:text-3xl text-[#F5F5F5]">{s.k}</div>
                <div className="font-mono text-[11px] tracking-widest text-[#888] mt-2 uppercase">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}