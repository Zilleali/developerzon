export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.3em] text-[#E8521A]">
      <span className="h-px w-8 bg-[#E8521A]" />
      {children}
    </div>
  );
}