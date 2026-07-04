export function LtdLogo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const fontSize = size === "sm" ? 28 : size === "md" ? 48 : 102
  const letterSpacing = size === "sm" ? 5 : size === "md" ? 8 : 18
  const subtitleSize = size === "sm" ? 7 : size === "md" ? 9 : 12.5
  const subtitleSpacing = size === "sm" ? 4 : size === "md" ? 6 : 8
  const w = size === "sm" ? 120 : size === "md" ? 200 : 420
  const h = size === "sm" ? 54 : size === "md" ? 88 : 180

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width={w}
      height={h}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ltdWhiteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#ffffff", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#aaaaaa", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="ltdLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#ffffff", stopOpacity: 0 }} />
          <stop offset="30%" style={{ stopColor: "#ffffff", stopOpacity: 1 }} />
          <stop offset="70%" style={{ stopColor: "#ffffff", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#ffffff", stopOpacity: 0 }} />
        </linearGradient>
        <filter id="ltdGlow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* LTD text */}
      <text
        x={w / 2}
        y={h * 0.72}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize={fontSize}
        fontWeight="700"
        letterSpacing={letterSpacing}
        textAnchor="middle"
        fill="url(#ltdWhiteGrad)"
        filter="url(#ltdGlow)"
      >
        LTD
      </text>

      {/* Divider line */}
      <rect
        x={w * 0.2}
        y={h * 0.78}
        width={w * 0.6}
        height="0.8"
        fill="url(#ltdLineGrad)"
        opacity="0.7"
      />

      {/* PRODUCTION subtitle */}
      <text
        x={w / 2}
        y={h * 0.93}
        fontFamily="Arial, sans-serif"
        fontSize={subtitleSize}
        fontWeight="400"
        letterSpacing={subtitleSpacing}
        textAnchor="middle"
        fill="#888888"
      >
        PRODUCTION
      </text>
    </svg>
  )
}
