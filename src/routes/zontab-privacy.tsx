import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/dz/Navbar";
import { Footer } from "@/components/dz/Footer";

export const Route = createFileRoute("/zontab-privacy")({
  head: () => ({
    meta: [
      { title: "ZonTab Privacy Policy | Developer Zon" },
      {
        name: "description",
        content:
          "ZonTab collects no personal data. All data stays in your browser. Read the full privacy policy.",
      },
      { property: "og:title", content: "ZonTab Privacy Policy | Developer Zon" },
      {
        property: "og:description",
        content:
          "ZonTab collects no personal data. All data stays in your browser. Read the full privacy policy.",
      },
      { property: "og:url", content: "https://developerzon.lovable.app/zontab-privacy" },
    ],
    links: [
      { rel: "canonical", href: "https://developerzon.lovable.app/zontab-privacy" },
    ],
  }),
  component: ZonTabPrivacyPage,
});

const ACCENT = "#E8521A";

const summary = [
  {
    icon: "🔒",
    title: "Zero Data Collection",
    desc: "We collect no personal information, browsing history, or usage data.",
  },
  {
    icon: "🏠",
    title: "Local Storage Only",
    desc: "All your notes, tasks, and workspaces are saved in chrome.storage.local on your device.",
  },
  {
    icon: "🚫",
    title: "No External Servers",
    desc: "ZonTab makes no network requests. No analytics, no telemetry, no cloud sync.",
  },
  {
    icon: "👁",
    title: "No Third Parties",
    desc: "No advertisers, no trackers, no third-party libraries with network access.",
  },
];

const permissions: Array<[string, string]> = [
  [
    "tabs",
    "Read open tab URLs and titles for workspace saving and hibernation scheduling. Tab data is processed locally and never transmitted.",
  ],
  [
    "storage",
    "Save your settings, notes, tasks, workspaces, and quick links locally in chrome.storage.local on your device.",
  ],
  [
    "scripting",
    "Inject a CSS filter onto web pages when Website Dark Mode is enabled. No page content is read or transmitted.",
  ],
  [
    "alarms",
    "Schedule a background check every 5 minutes to hibernate idle tabs. No external network calls are made.",
  ],
  [
    "sessions",
    "Access recently closed tabs for potential workspace restoration features.",
  ],
  [
    "host_permissions (<all_urls>)",
    "Required to inject the dark mode CSS stylesheet on any website when Website Dark Mode is toggled on. No content is read from these pages.",
  ],
];

function SectionHeading({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <div>
      <div
        className="font-mono text-[11px] tracking-widest uppercase"
        style={{ color: ACCENT }}
      >
        {num}
      </div>
      <h2 className="mt-2 font-display text-2xl md:text-3xl font-semibold text-[#F5F5F5]">
        {children}
      </h2>
    </div>
  );
}

function Section({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-10 mt-10 border-t border-[#2A2A2A] space-y-5">
      <SectionHeading num={num}>{title}</SectionHeading>
      <div className="text-[#A8A8A8] leading-relaxed space-y-4 text-[15px]">
        {children}
      </div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 list-none">
      {items.map((i) => (
        <li key={i} className="flex gap-3">
          <span style={{ color: ACCENT }} className="mt-2 h-1.5 w-1.5 rounded-full bg-current shrink-0" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

function ZonTabPrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F5] font-sans">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="mx-auto px-4 md:px-6" style={{ maxWidth: 760 }}>
          {/* Hero */}
          <div className="space-y-6">
            <span
              className="inline-block px-3 py-1 text-[11px] font-mono tracking-widest uppercase rounded-full border"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              Privacy Policy
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight">
              Your data stays in your browser
            </h1>
            <p className="text-[#A8A8A8] text-base md:text-lg leading-relaxed max-w-[540px]">
              ZonTab collects no personal data, contacts no external servers,
              and has no analytics. Everything you store is saved locally in
              Chrome's built-in storage API.
            </p>
            <div className="inline-block px-3 py-1.5 text-xs font-mono border border-[#2A2A2A] rounded-md text-[#A8A8A8]">
              Effective: June 17, 2026 — Extension version 1.0.0
            </div>
          </div>

          {/* Summary cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {summary.map((s) => (
              <div
                key={s.title}
                className="rounded-lg border border-[#2A2A2A] bg-[#141414] p-5 hover:border-[#E8521A]/50 transition-colors"
              >
                <div className="text-2xl">{s.icon}</div>
                <div className="mt-3 font-display text-sm font-semibold text-[#F5F5F5]">
                  {s.title}
                </div>
                <p className="mt-2 text-[13px] text-[#888] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Sections */}
          <Section num="01" title="What ZonTab Stores">
            <p>
              ZonTab stores the following data exclusively in
              chrome.storage.local on your device. This data never leaves your
              browser.
            </p>
            <Bullets
              items={[
                "Extension settings (dark mode toggle, theme, hibernation preferences, accent color)",
                "Saved workspaces (tab URLs and titles you choose to snapshot)",
                "Quick notes and task list items you type into the New Tab page",
                "Quick links you add to the New Tab dashboard",
                "Tab last-active timestamps used for hibernation scheduling",
                "Cumulative hibernation stats (estimated RAM saved counter)",
              ]}
            />
            <p>
              You can clear all of this data at any time by removing the ZonTab
              extension from Chrome.
            </p>
          </Section>

          <Section num="02" title="What ZonTab Does NOT Collect">
            <Bullets
              items={[
                "Your name, email address, or any personally identifiable information",
                "Your browsing history or the URLs of tabs you have open",
                "The content of any web pages you visit",
                "Keystroke or mouse movement data",
                "Device information, IP address, or location",
                "Crash reports or usage analytics of any kind",
              ]}
            />
          </Section>

          <Section num="03" title="Permissions Explained">
            <p>
              ZonTab requests the following browser permissions. Here is exactly
              why each one is needed.
            </p>
            <div className="overflow-x-auto rounded-lg border border-[#2A2A2A] bg-[#141414]">
              <table className="w-full text-left text-sm border-collapse min-w-[520px]">
                <thead>
                  <tr className="border-b border-[#2A2A2A]">
                    <th className="px-4 py-3 font-mono text-[11px] tracking-widest uppercase text-[#E8521A] w-[38%]">
                      Permission
                    </th>
                    <th className="px-4 py-3 font-mono text-[11px] tracking-widest uppercase text-[#E8521A]">
                      Why It Is Needed
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {permissions.map(([perm, why], i) => (
                    <tr
                      key={perm}
                      className={i !== permissions.length - 1 ? "border-b border-[#2A2A2A]" : ""}
                    >
                      <td className="px-4 py-3 align-top font-mono text-[13px] text-[#F5F5F5] whitespace-nowrap">
                        {perm}
                      </td>
                      <td className="px-4 py-3 align-top text-[#A8A8A8] leading-relaxed">
                        {why}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section num="04" title="Dark Mode and Website Injection">
            <p>
              When you enable Website Dark Mode, ZonTab uses the
              chrome.scripting.insertCSS API to inject a CSS filter (invert +
              hue-rotate) into web pages.
            </p>
            <p>
              This CSS injection only changes the visual appearance of pages.
              ZonTab does not read, transmit, log, or analyze any content from
              the pages you visit. The CSS is removed immediately when you
              toggle dark mode off.
            </p>
            <p>
              Smart Dark Mode additionally runs a brief script to measure the
              background brightness of a page before injecting. This check
              happens locally in the browser and the result (dark or light) is
              never stored or transmitted anywhere.
            </p>
          </Section>

          <Section num="05" title="Data Sharing">
            <p>
              ZonTab shares no data with any third party. There are no
              advertisers, data brokers, analytics services, or any external
              entities involved with ZonTab in any way.
            </p>
            <p>
              ZonTab is a product of Developer Zon, a sole proprietorship owned
              by Zill E Ali, registered in Gujrat, Punjab, Pakistan. Developer
              Zon has no commercial relationship with any data processing
              company.
            </p>
          </Section>

          <Section num="06" title="Children's Privacy">
            <p>
              ZonTab is intended for general use and does not knowingly collect
              any information from children under the age of 13. Because ZonTab
              collects no personal data from anyone, it has no special
              provisions for children beyond this statement.
            </p>
          </Section>

          <Section num="07" title="Changes to This Policy">
            <p>
              If this privacy policy changes, the updated version will be
              posted at this URL with a revised effective date. Significant
              changes that affect user rights will be communicated via the
              Chrome Web Store extension listing.
            </p>
          </Section>

          <Section num="08" title="Contact">
            <p>Questions or concerns about this privacy policy:</p>
            <div className="rounded-lg border border-[#2A2A2A] bg-[#141414] p-6 space-y-2 text-[15px]">
              <div className="font-display font-semibold text-[#F5F5F5]">
                Developer Zon — Zill E Ali
              </div>
              <div className="text-[#A8A8A8]">
                Email:{" "}
                <a
                  href="mailto:zilleali1245@gmail.com"
                  className="hover:underline"
                  style={{ color: ACCENT }}
                >
                  zilleali1245@gmail.com
                </a>
              </div>
              <div className="text-[#A8A8A8]">
                Website:{" "}
                <a
                  href="https://zilleali.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  style={{ color: ACCENT }}
                >
                  zilleali.com
                </a>
              </div>
              <div className="text-[#A8A8A8]">
                Location: Gujrat, Punjab, Pakistan
              </div>
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </div>
  );
}