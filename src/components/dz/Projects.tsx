import { Github, ExternalLink, Package } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const projects = [
  {
    title: "NexaLink – ISP Management SaaS",
    desc: "A full SaaS platform for Pakistani ISPs. Includes PPPoE management, billing, FreeRADIUS integration, and NOC dashboard.",
    stack: ["Laravel", "Filament", "PostgreSQL", "MikroTik RouterOS API", "FreeRADIUS"],
    link: "#",
    icon: Github,
    label: "View on GitHub",
  },
  {
    title: "mikrotik-laravel – Open Source Package",
    desc: "Published Laravel package for MikroTik RouterOS API integration. PR #142 merged into routeros-api-php upstream.",
    stack: ["PHP", "Laravel", "Packagist", "Open Source"],
    link: "https://packagist.org/packages/zilleali/mikrotik-laravel",
    icon: Package,
    label: "View on Packagist",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="max-w-2xl reveal">
          <SectionLabel>OUR WORK</SectionLabel>
          <h2 className="mt-5 font-display font-bold text-3xl lg:text-5xl text-[#F5F5F5] leading-tight">
            Open Source & Notable Projects
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="dz-card rounded-xl p-8 relative reveal">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E8521A] via-[#FF6B35] to-transparent rounded-t-xl" />
              <h3 className="font-display font-bold text-2xl text-[#F5F5F5]">{p.title}</h3>
              <p className="mt-4 text-[#888] leading-relaxed">{p.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#0D0D0D] border border-[#2A2A2A] text-[#E8521A]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm text-[#F5F5F5] hover:text-[#E8521A] transition-colors"
              >
                <p.icon size={16} /> {p.label} <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}