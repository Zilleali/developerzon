import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Navbar } from "@/components/dz/Navbar";
import { Hero } from "@/components/dz/Hero";
import { About } from "@/components/dz/About";
import { Services } from "@/components/dz/Services";
import { WhyUs } from "@/components/dz/WhyUs";
import { Projects } from "@/components/dz/Projects";
import { Contact } from "@/components/dz/Contact";
import { Footer } from "@/components/dz/Footer";
import { useReveal } from "@/components/dz/useReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Developer Zon — IT Solutions, Networks & Technical Support in Gujrat, Pakistan" },
      { name: "description", content: "Developer Zon builds reliable IT infrastructure — MikroTik & Cisco networks, FTTH, servers, remote support, and WordPress development." },
      { property: "og:title", content: "Developer Zon — IT Solutions & Network Engineering" },
      { property: "og:description", content: "Network engineering, technical support, and business technology systems designed for reliability, security, and scale." },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => { document.documentElement.style.scrollBehavior = prev; };
  }, []);
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F5]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
