import {
  Network, Headphones, Cable, Server, Video, Globe, Palette, Router, Workflow,
} from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const services = [
  { icon: Network, title: "Network Engineering", desc: "MikroTik & Cisco configuration, routing & switching, VLAN design, firewall setup, and full network infrastructure builds." },
  { icon: Headphones, title: "Remote IT Support", desc: "Troubleshoot and resolve network, server, and system issues remotely — fast response, no physical visit required." },
  { icon: Cable, title: "FTTH & Fiber Networks", desc: "End-to-end fiber optic installation and FTTH deployment for ISPs and enterprise environments." },
  { icon: Server, title: "Server & System Administration", desc: "Server setup, Linux/Windows administration, Proxmox virtualization, and infrastructure management." },
  { icon: Video, title: "NVR & IP Camera Setup", desc: "CCTV, NVR configuration, and IP camera installation for business security and surveillance." },
  { icon: Globe, title: "WordPress Development", desc: "Business websites, landing pages, and e-commerce stores built on WordPress with performance and SEO in mind." },
  { icon: Palette, title: "Graphic Design", desc: "Logos, branding materials, social media graphics, and marketing collateral for businesses." },
  { icon: Router, title: "Cisco & MikroTik Configuration", desc: "Professional configuration, hardening, and troubleshooting of Cisco and MikroTik network devices." },
  { icon: Workflow, title: "Network Design & Consultation", desc: "Network topology planning, infrastructure design, and IT consultation for new and scaling businesses." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="max-w-2xl reveal">
          <SectionLabel>WHAT WE DO</SectionLabel>
          <h2 className="mt-5 font-display font-bold text-3xl lg:text-5xl text-[#F5F5F5] leading-tight">
            Our Core Specialties
          </h2>
          <p className="mt-5 text-[#888]">
            Full-stack IT delivery — networks, servers, security, and the web.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="dz-card rounded-xl p-7 group reveal">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-md border border-[#E8521A]/30 bg-[#E8521A]/[0.06] flex items-center justify-center">
                  <Icon className="text-[#E8521A]" size={22} strokeWidth={1.75} />
                </div>
                <span className="font-mono text-xs text-[#444]">0{i + 1}</span>
              </div>
              <h3 className="mt-6 font-display font-semibold text-xl text-[#F5F5F5] group-hover:text-[#E8521A] transition-colors">
                {title}
              </h3>
              <p className="mt-3 text-sm text-[#888] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}