import { ArrowRight, ExternalLink } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const articles = [
  {
    title: "Building a FreeRADIUS Server for ISP Authentication on Ubuntu",
    tag: "Networking",
    readTime: "8 min read",
    excerpt:
      "Step-by-step guide to deploying FreeRADIUS with PostgreSQL backend for PPPoE authentication in a production ISP environment.",
    href: "https://dev.to/zilleali12",
  },
  {
    title: "MikroTik PPPoE Setup: Complete ISP Configuration Guide",
    tag: "MikroTik",
    readTime: "12 min read",
    excerpt:
      "Full walkthrough covering PPPoE server, IP pools, RADIUS integration, and firewall rules for a functional ISP backbone.",
    href: "https://dev.to/zilleali12",
  },
  {
    title: "Publishing a Laravel Package to Packagist: From Zero to v1.0",
    tag: "Laravel",
    readTime: "6 min read",
    excerpt:
      "How I built and published the mikrotik-laravel package — covering Composer setup, CI testing, and versioning best practices.",
    href: "https://dev.to/zilleali12",
  },
];

export function Blog() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 reveal">
          <div className="max-w-xl">
            <SectionLabel>KNOWLEDGE BASE</SectionLabel>
            <h2 className="mt-5 font-display font-bold text-3xl lg:text-5xl text-[#F5F5F5] leading-tight">
              Articles & Guides
            </h2>
            <p className="mt-5 text-[#888]">
              Technical deep-dives on networking, ISP infrastructure, and open-source
              development. Published on Dev.to.
            </p>
          </div>
          <a
            href="https://dev.to/zilleali12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#E8521A] text-[#E8521A] hover:bg-[#E8521A]/10 text-sm font-medium rounded-md transition-colors shrink-0"
          >
            All Articles <ExternalLink size={14} />
          </a>
        </div>

        {/* Article cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {articles.map((a, i) => (
            <a
              key={i}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="dz-card rounded-xl p-7 group flex flex-col gap-4 reveal"
            >
              {/* Top meta */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#0D0D0D] border border-[#2A2A2A] text-[#E8521A]">
                  {a.tag}
                </span>
                <span className="font-mono text-[11px] text-[#666]">{a.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-lg text-[#F5F5F5] group-hover:text-[#E8521A] transition-colors leading-snug">
                {a.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-[#666] leading-relaxed flex-1">{a.excerpt}</p>

              {/* CTA */}
              <div className="flex items-center gap-2 text-sm text-[#888] group-hover:text-[#E8521A] transition-colors mt-auto pt-2 border-t border-[#2A2A2A]">
                Read on Dev.to <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Dev.to CTA banner */}
        <div className="mt-8 reveal">
          <div className="rounded-xl border border-[#2A2A2A] bg-[#141414] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="font-display font-semibold text-[#F5F5F5]">
                Follow on Dev.to for more technical content
              </div>
              <div className="font-mono text-[12px] text-[#888] mt-1">
                dev.to/zilleali12 · Networking · ISP Infrastructure · Laravel · Open Source
              </div>
            </div>
            <a
              href="https://dev.to/zilleali12"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E8521A] hover:bg-[#FF6B35] text-white text-sm font-medium rounded-md transition-colors shrink-0"
            >
              Follow <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}