export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect x="2" y="2" width="60" height="60" rx="10" fill="#2D2D2D" />
      <path d="M12 16h18a14 14 0 0 1 14 14v0a14 14 0 0 1-14 14H12V16z" fill="#E8521A" />
      <path d="M22 26h18L22 44h18" stroke="#0D0D0D" strokeWidth="4" fill="none" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}

export function Wordmark() {
  return (
    <div className="flex items-center gap-3">
      <LogoMark />
      <div className="leading-none">
        <div className="font-display font-bold tracking-wide text-[#F5F5F5] text-lg">
          DEVELOPER <span className="text-[#E8521A]">ZON</span>
        </div>
        <div className="font-mono text-[10px] text-[#888] tracking-[0.25em] mt-1">
          DESIGN · DEVELOP · SOLUTIONS
        </div>
      </div>
    </div>
  );
}