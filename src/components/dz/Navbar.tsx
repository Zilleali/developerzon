import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#0D0D0D]/95 backdrop-blur border-b border-[#2A2A2A]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top"><Wordmark /></a>
        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-[#F5F5F5]/80 hover:text-[#E8521A] transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 bg-[#E8521A] hover:bg-[#FF6B35] text-white text-sm font-medium rounded-md transition-colors"
          >
            Get in Touch
          </a>
        </nav>
        <button
          className="md:hidden text-[#F5F5F5] p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0D0D0D] border-b border-[#2A2A2A] animate-fade-in">
          <div className="px-5 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[#F5F5F5]/90 hover:text-[#E8521A] py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="px-5 py-2.5 bg-[#E8521A] text-center text-white rounded-md"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}