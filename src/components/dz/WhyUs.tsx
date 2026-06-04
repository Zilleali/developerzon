import { Zap, Award, Wifi, Layers, Shield, Target } from "lucide-react";

const items = [
  { icon: Zap, title: "Speed & Reliability", desc: "Fast deployment and systems built to stay up." },
  { icon: Award, title: "Certified Expertise", desc: "MikroTik MTCNA certified engineers with real-world ISP experience." },
  { icon: Wifi, title: "Remote-Ready", desc: "Full remote support capability across Pakistan and internationally." },
  { icon: Layers, title: "Full-Stack IT", desc: "From network cabling to web development — one team, full coverage." },
  { icon: Shield, title: "Security-First", desc: "Every solution designed with security and access control in mind." },
  { icon: Target, title: "Business-Focused", desc: "We speak technology, but we always work toward your business goals." },
];

export function WhyUs() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#141414] border-y border-[#2A2A2A] overflow-hidden">
      <div className="absolute inset-0 dz-grid-bg opacity-50" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
        <div className="max-w-3xl reveal">
          <div className="font-mono text-xs tracking-[0.3em] text-[#E8521A]">// WHY CHOOSE US</div>
          <h2 className="mt-5 font-display font-bold text-3xl lg:text-5xl text-[#F5F5F5] leading-tight">
            Why Businesses Choose Developer Zon
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-x-12 gap-y-10">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-5 reveal">
              <div className="shrink-0 w-12 h-12 rounded-md border border-[#E8521A]/30 bg-[#0D0D0D] flex items-center justify-center">
                <Icon className="text-[#E8521A]" size={22} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-[#F5F5F5]">{title}</h3>
                <p className="mt-2 text-[#888] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}