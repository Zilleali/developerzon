import { Check } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const highlights = [
  "Certified Network Engineers",
  "Remote & On-Site Support",
  "End-to-End IT Solutions",
  "Business-First Approach",
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div className="reveal">
            <SectionLabel>ABOUT US</SectionLabel>
            <h2 className="mt-5 font-display font-bold text-3xl lg:text-5xl text-[#F5F5F5] leading-tight">
              IT Solutions That Keep Your Business Running
            </h2>
            <div className="mt-8 space-y-5 text-[#888] leading-relaxed">
              <p>
                Developer Zon is an IT solutions company specializing in network
                infrastructure, technical support, and business technology systems.
                We help businesses build secure, scalable, and reliable IT environments —
                ensuring smooth operations and long-term growth.
              </p>
              <p>
                Founded in 2023 and headquartered in Gujrat, Punjab, we serve local
                businesses and remote clients across Pakistan. From MikroTik and Cisco
                network builds to server setups, FTTH deployments, and WordPress
                development — we handle the full technology stack so you can focus on
                growing your business.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 reveal">
            {highlights.map((h) => (
              <div key={h} className="dz-card rounded-xl p-6 flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-md border border-[#E8521A]/40 bg-[#E8521A]/10 flex items-center justify-center">
                  <Check className="text-[#E8521A]" size={20} />
                </div>
                <div className="font-display font-semibold text-[#F5F5F5]">{h}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}