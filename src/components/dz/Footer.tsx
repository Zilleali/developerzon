import { Wordmark } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <Wordmark />
          <p className="mt-5 text-sm text-[#888] leading-relaxed max-w-xs">
            IT infrastructure and technology solutions for businesses in Gujrat and beyond.
          </p>
        </div>
        <div>
          <div className="font-mono text-[11px] tracking-widest text-[#E8521A] uppercase">Quick Links</div>
          <ul className="mt-5 space-y-3 text-sm">
            {["Services", "About", "Projects", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-[#F5F5F5]/80 hover:text-[#E8521A] transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-mono text-[11px] tracking-widest text-[#E8521A] uppercase">Contact</div>
          <ul className="mt-5 space-y-3 text-sm text-[#F5F5F5]/80">
            <li><a href="mailto:developerzon12@gmail.com" className="hover:text-[#E8521A]">developerzon12@gmail.com</a></li>
            <li><a href="tel:+923196122250" className="hover:text-[#E8521A]">+92 319 612 2250</a></li>
            <li>Gujrat, Punjab, Pakistan</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#666]">
          <div>© 2025 Developer Zon. All rights reserved.</div>
          <div className="font-mono">Registered business · Gujrat, Punjab, Pakistan</div>
        </div>
      </div>
    </footer>
  );
}