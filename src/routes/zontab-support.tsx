import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/dz/Navbar";
import { Footer } from "@/components/dz/Footer";

export const Route = createFileRoute("/zontab-support")({
  head: () => ({
    meta: [
      { title: "ZonTab Support | Developer Zon" },
      {
        name: "description",
        content:
          "Get help with ZonTab Chrome Extension. FAQ, troubleshooting, and contact support.",
      },
      { property: "og:title", content: "ZonTab Support | Developer Zon" },
      {
        property: "og:description",
        content:
          "Get help with ZonTab Chrome Extension. FAQ, troubleshooting, and contact support.",
      },
      { property: "og:url", content: "https://developerzon.lovable.app/zontab-support" },
    ],
    links: [
      { rel: "canonical", href: "https://developerzon.lovable.app/zontab-support" },
    ],
  }),
  component: ZonTabSupportPage,
});

const ACCENT = "#E8521A";

const quickHelp = [
  {
    icon: "⚡",
    title: "Tab Hibernation",
    body: "Tabs not being hibernated? Check Settings — make sure Auto-Hibernate is ON and the timeout is set. Pinned tabs are excluded by default.",
  },
  {
    icon: "🌙",
    title: "Dark Mode",
    body: "If dark mode is inverting sites that already look dark (like Claude or GitHub), enable Smart Dark Mode in Settings > Appearance. It skips already-dark pages automatically.",
  },
  {
    icon: "📁",
    title: "Workspaces",
    body: 'Save your current window tabs by clicking "+ Save Current" on the New Tab page. Restore any workspace in a new window by clicking "Open".',
  },
  {
    icon: "🎨",
    title: "Theme Not Changing",
    body: "Go to Settings > Appearance > Extension Theme and select Dark or Light. The theme syncs to the New Tab page and popup instantly — no reload needed.",
  },
];

const faqs: Array<{ q: string; a: React.ReactNode }> = [
  {
    q: "Does ZonTab collect any data?",
    a: "No. ZonTab collects zero personal data. All your notes, tasks, workspaces, and settings are stored locally in chrome.storage.local on your device. No data ever leaves your browser.",
  },
  {
    q: "Why does my New Tab look unstyled?",
    a: "This usually happens after installing the extension. Try removing ZonTab from chrome://extensions/ and re-adding it by loading the unpacked folder. Make sure all files including the assets/ and utils/ folders are present.",
  },
  {
    q: "The service worker shows an error — what do I do?",
    a: 'Go to chrome://extensions/, click the Remove button on ZonTab, then click "Load unpacked" and re-select the ZonTab folder. This clears any cached service worker registration.',
  },
  {
    q: "Dark mode is affecting websites that are already dark.",
    a: "Enable Smart Dark Mode in Settings > Appearance. This feature measures the background brightness of each page before applying the dark mode filter, and skips sites that are already dark.",
  },
  {
    q: "Can I use ZonTab on Firefox or Edge?",
    a: "Yes. Edge and Opera load Chrome extensions natively with no changes. Firefox is supported from version 109+. Safari requires a manual conversion step using macOS Xcode tools.",
  },
  {
    q: "How do I reset ZonTab to defaults?",
    a: "Go to Settings (gear icon on New Tab) > About > Reset All Settings. This restores all preferences to default values. Your workspaces, notes, and tasks are not deleted.",
  },
  {
    q: "Where is my data stored?",
    a: "All data is stored in chrome.storage.local on your own device. Nothing is sent to any server. Removing the extension deletes all stored data permanently.",
  },
  {
    q: "How do I report a bug or request a feature?",
    a: 'Email zilleali1245@gmail.com with the subject line "ZonTab Bug" or "ZonTab Feature Request". Include your Chrome version and a description of the issue.',
  },
];

function ZonTabSupportPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F5]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-5 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <span
            className="inline-block font-mono text-[11px] tracking-widest uppercase px-3 py-1 rounded-full border"
            style={{ color: "#22D3EE", borderColor: "#22D3EE55", background: "#22D3EE10" }}
          >
            Support
          </span>
          <h1 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight">
            How can we help?
          </h1>
          <p className="mt-5 text-[#A0A0A0] text-base md:text-lg max-w-2xl mx-auto">
            Find answers to common questions about ZonTab, or reach out directly.
          </p>

          {/* Decorative search bar */}
          <div className="mt-10 max-w-xl mx-auto">
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#161616] border border-[#2A2A2A]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                readOnly
                placeholder="Search for help... e.g. dark mode, hibernation, workspaces"
                className="flex-1 bg-transparent outline-none text-sm text-[#F5F5F5] placeholder:text-[#666]"
                aria-label="Search help (decorative)"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick help */}
      <section className="px-5 lg:px-10 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {quickHelp.map((c) => (
              <div
                key={c.title}
                className="p-6 rounded-xl bg-[#141414] border border-[#2A2A2A] hover:border-[#E8521A]/50 transition-colors"
              >
                <div className="text-2xl">{c.icon}</div>
                <h3 className="mt-3 text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-[#A0A0A0] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 lg:px-10 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="font-mono text-[11px] tracking-widest uppercase" style={{ color: ACCENT }}>
            FAQ
          </div>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 divide-y divide-[#2A2A2A] border-y border-[#2A2A2A]">
            {faqs.map((f, i) => {
              const isOpen = openIdx === i;
              return (
                <div key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left hover:text-[#E8521A] transition-colors"
                  >
                    <span className="text-base font-medium">{f.q}</span>
                    <span
                      className="text-[#888] text-xl shrink-0 transition-transform"
                      style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-5 -mt-1 text-sm text-[#A0A0A0] leading-relaxed">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-5 lg:px-10 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">
            Still need help?
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-7 rounded-xl bg-[#141414] border border-[#2A2A2A]">
              <div className="text-2xl">✉️</div>
              <h3 className="mt-3 text-lg font-semibold">Email Support</h3>
              <p className="mt-2 text-sm text-[#A0A0A0]">Get a response within 24-48 hours.</p>
              <a
                href="mailto:zilleali1245@gmail.com"
                className="mt-5 inline-block px-5 py-2.5 bg-[#E8521A] hover:bg-[#FF6B35] text-white text-sm font-medium rounded-md transition-colors"
              >
                zilleali1245@gmail.com
              </a>
            </div>
            <div className="p-7 rounded-xl bg-[#141414] border border-[#2A2A2A]">
              <div className="text-2xl">🐙</div>
              <h3 className="mt-3 text-lg font-semibold">Report on GitHub</h3>
              <p className="mt-2 text-sm text-[#A0A0A0]">Open a bug report or feature request.</p>
              <a
                href="https://github.com/Zilleali"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block px-5 py-2.5 border border-[#2A2A2A] hover:border-[#E8521A] text-[#F5F5F5] text-sm font-medium rounded-md transition-colors"
              >
                github.com/Zilleali
              </a>
            </div>
          </div>

          <p className="mt-12 text-center text-xs text-[#666] leading-relaxed">
            ZonTab is built and maintained by Zill E Ali — Developer Zon, Gujrat, Pakistan.
            <br />
            Privacy Policy:{" "}
            <Link to="/zontab-privacy" className="text-[#E8521A] hover:underline">
              developerzon.lovable.app/zontab-privacy
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}