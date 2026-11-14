interface ApexLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  variant?: "full" | "icon";
}

export default function ApexLogo({
  className = "",
  size = 40,
  showText = false,
  variant = "full",
}: ApexLogoProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Geometric Apex Tech Vector Icon */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          {/* Main Neon Cyan to Cobalt Gradient */}
          <linearGradient id="apexGradPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="50%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>

          {/* Inner Summit Prism Gradient */}
          <linearGradient id="apexGradSummit" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#E0F2FE" />
            <stop offset="40%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>

          {/* Accent Chevron Gradient */}
          <linearGradient id="apexGradChevron" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>

          {/* Luminous Glow Filter */}
          <filter id="apexNeonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Glowing "A" Apex Frame */}
        <path
          d="M 50 10 L 88 84 L 72 84 L 50 36 L 28 84 L 12 84 Z"
          fill="url(#apexGradPrimary)"
          filter="url(#apexNeonGlow)"
        />

        {/* Inner Peak / Summit Pyramid */}
        <polygon
          points="50,28 62,56 38,56"
          fill="url(#apexGradSummit)"
          opacity="0.95"
        />

        {/* Central Interlocking Tech Chevron */}
        <path
          d="M 22 52 L 50 68 L 78 52 L 78 62 L 50 78 L 22 62 Z"
          fill="url(#apexGradChevron)"
        />

        {/* Crisp Apex Center Highlight Line */}
        <line
          x1="50"
          y1="12"
          x2="50"
          y2="34"
          stroke="#E0F2FE"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.9"
        />
      </svg>

      {/* Optional Integrated Typography */}
      {showText && (
        <div className="flex flex-col">
          <span className="font-extrabold text-lg text-white leading-tight tracking-tight flex items-center gap-1 font-sans">
            Apex <span className="text-cyan-400">Tech</span>
          </span>
          <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
            Solutions
          </span>
        </div>
      )}
    </div>
  );
}
