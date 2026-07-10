import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/dz/Navbar";
import { Footer } from "@/components/dz/Footer";

export const Route = createFileRoute("/psx-lens")({
  head: () => ({
    meta: [
      { title: "PSX Lens Privacy Policy | Developer Zon" },
      {
        name: "description",
        content:
          "PSX Lens Chrome Extension Privacy Policy. No data ever leaves your browser. No accounts, no tracking, no backend.",
      },
      { property: "og:title", content: "PSX Lens Privacy Policy | Developer Zon" },
      {
        property: "og:description",
        content:
          "PSX Lens Chrome Extension Privacy Policy. No data ever leaves your browser. No accounts, no tracking, no backend.",
      },
      { property: "og:url", content: "https://developerzon.lovable.app/psx-lens" },
    ],
    links: [
      { rel: "canonical", href: "https://developerzon.lovable.app/psx-lens" },
    ],
  }),
  component: PsxLensPrivacyPage,
});

const CYAN = "#22D3EE";

const sections = [
  {
    num: "01",
    title: "Overview",
    body: "No data ever leaves your browser. PSX Lens has no backend server, no account system, no analytics, and no tracking of any kind.",
  },
  {
    num: "02",
    title: "Data the Extension Reads",
    body: "PSX Lens reads the live price and volume data (symbol, price, volume, bid, ask, trade count) already flowing into your trading terminal session. This data is processed locally to compute indicators. It is never transmitted to any server.",
  },
  {
    num: "03",
    title: "Data Stored Locally",
    body: "Signal log (symbol, price, stop, target, timestamp, outcome) stored in chrome.storage.local on your device only. Panel position (last X/Y coordinates). No personally identifiable information is stored. Never synced or transmitted.",
  },
  {
    num: "04",
    title: "Permissions Used",
    body: "storage: saves signal log and panel position on your own device. host_permissions for psxterminal.com, ktrade.pk, and scstrade.com: allows content scripts to read the terminal's live data stream. No outbound requests are made.",
  },
  {
    num: "05",
    title: "Data Sharing",
    body: "PSX Lens does not share, sell, transmit, or upload any data. No third-party integrations, no analytics libraries, no external API calls.",
  },
  {
    num: "06",
    title: "Data Deletion",
    body: "Clear all data via the extension's log panel (Clear button) or by removing the extension from chrome://extensions.",
  },
  {
    num: "07",
    title: "Children's Privacy",
    body: "Intended for adults engaging in financial market analysis. Not directed at children under 13.",
  },
  {
    num: "08",
    title: "Changes to This Policy",
    body: "Updates published at this URL with a revised date.",
  },
  {
    num: "09",
    title: "Contact",
    body: "Developer Zon, Gujrat, Punjab, Pakistan. zilleali1245@gmail.com. https://developerzon.lovable.app",
  },
];

function PsxLensPrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F5]">
      <Navbar />

      <main className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-[720px] mx-auto">
          {/* Header */}
          <div className="text-center space-y-5">
            <span
              className="inline-block font-mono text-[11px] tracking-widest uppercase px-3 py-1 rounded-full border"
              style={{ color: CYAN, borderColor: `${CYAN}55`, background: `${CYAN}10` }}
            >
              PSX Lens Extension
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-[#A0A0A0] text-sm sm:text-base">
              Developer Zon — Last updated July 10, 2026
            </p>
          </div>

          {/* Highlighted callout */}
          <div
            className="mt-10 rounded-xl border px-5 py-4 text-center text-sm sm:text-base backdrop-blur"
            style={{
              background: `${CYAN}10`,
              borderColor: `${CYAN}40`,
              color: CYAN,
            }}
          >
            No data ever leaves your browser. No accounts. No tracking. No backend.
          </div>

          {/* Sections */}
          <div className="mt-12 space-y-5">
            {sections.map((s) => (
              <div
                key={s.num}
                className="rounded-xl border border-[#2A2A2A]/80 bg-[#141414]/60 backdrop-blur p-6 sm:p-7"
              >
                <div
                  className="font-mono text-[11px] tracking-widest uppercase"
                  style={{ color: CYAN }}
                >
                  {s.num}
                </div>
                <h2 className="mt-2 text-lg sm:text-xl font-semibold text-[#F5F5F5]">
                  {s.title}
                </h2>
                <p className="mt-3 text-sm sm:text-[15px] text-[#A8A8A8] leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          {/* Footer of page */}
          <div className="mt-16 pt-8 border-t border-[#2A2A2A]/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#888]">
            <Link
              to="/"
              className="hover:text-[#22D3EE] transition-colors"
            >
              ← Back to Developer Zon
            </Link>
            <p>
              This policy covers PSX Lens only. For ZonTab privacy, see{" "}
              <Link
                to="/zontab-privacy"
                className="text-[#22D3EE] hover:underline"
              >
                /zontab-privacy
              </Link>
              .
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
