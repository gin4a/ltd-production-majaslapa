"use client"

import { cn } from "@/lib/utils"
import { useLang } from "@/lib/i18n"

const logos = [
  {
    name: "GitHub",
    href: "https://github.com",
    svg: (
      <svg viewBox="0 0 98 96" className="h-5 w-auto" fill="white">
        <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    href: "https://vercel.com",
    svg: (
      <svg viewBox="0 0 4438 1000" className="h-4 w-auto max-w-[80px]" fill="white">
        <path d="M2223.75 250C2051.25 250 1926.87 362.5 1926.87 531.25C1926.87 700 2066.72 812.5 2239.38 812.5C2343.59 812.5 2435.47 771.25 2492.34 701.56L2369.53 628.33C2341.25 667.58 2293.28 690.94 2239.38 690.94C2164.53 690.94 2100.94 648.05 2077.34 581.25H2515.16C2518.59 563.28 2520.63 544.69 2520.63 525.0C2520.63 362.5 2396.41 250 2223.75 250ZM2076.56 475C2097.34 408.28 2155.16 365 2223.75 365C2292.34 365 2350.16 408.28 2370.94 475H2076.56ZM2040.78 78.12L1607.81 828.12L1174.84 78.12H1040.78L1607.81 1000L2174.84 78.12H2040.78ZM0 78.12L607.81 1000L1215.63 78.12H1081.25L607.81 828.12L134.38 78.12H0Z" />
      </svg>
    ),
  },
  {
    name: "Claude AI",
    href: "https://claude.ai",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="white">
        <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.23-4.72-2.648v-.777l5.647 3.208.227.447-.227.447L4.709 16.732v-.777zm6.565 3.817l-1.512-4.976.688-.428 1.879 5.604-.055.053-1.001-.253zm3.076-8.006l1.512 4.976-.688.428-1.879-5.604.055-.053 1.001.253zM19.291 8.045l-4.72 2.647-.08.23.08.23 4.72 2.648v.777l-5.647-3.208-.227-.447.227-.447 5.647-3.208v.777zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "Cursor",
    href: "https://cursor.com",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="white">
        <path d="M11.979 2L2 7.031v9.937L11.979 22l9.979-5.032V7.031L11.979 2zm0 1.582l8.326 4.199-8.326 4.199-8.326-4.2 8.326-4.198zm-9.316 5.12l8.563 4.32v6.927l-8.563-4.32V8.702zm10.226 11.247v-6.927l8.563-4.32v6.927l-8.563 4.32z" />
      </svg>
    ),
  },
  {
    name: "Adobe Firefly",
    href: "https://firefly.adobe.com",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="white">
        <path d="M14.558 2c.995 0 2.938.582 4.764 2.252C21.173 5.97 22 8.135 22 10.24c0 2.719-1.386 5.392-4.16 8.022-2.406 2.286-4.835 3.535-4.933 3.584a.498.498 0 0 1-.225.054.512.512 0 0 1-.22-.05C12.37 21.8 2 16.17 2 10.24c0-2.105.827-4.27 2.678-5.988C6.504 2.582 8.447 2 9.442 2c2.075 0 2.857 1.527 2.558 3.074C11.7 3.527 12.483 2 14.558 2z" />
      </svg>
    ),
  },
  {
    name: "Visual Studio Code",
    href: "https://code.visualstudio.com",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="white">
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 19.983V4.017a1.5 1.5 0 0 0-.85-1.43zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
      </svg>
    ),
  },
]

export function LogoCloud({ className }: { className?: string }) {
  const track = [...logos, ...logos, ...logos]
  const { t } = useLang()

  return (
    <div className={cn("w-full py-8 overflow-hidden", className)}>
      <p className="text-center text-[10px] text-neutral-600 tracking-[0.3em] uppercase mb-6">
        {t.home.tools}
      </p>
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-black to-transparent" />
        <div
          className="marquee-track flex items-center gap-16"
          style={{ animation: "marquee 18s linear infinite", width: "max-content" }}
        >
          {track.map((logo, i) => (
            <a
              key={i}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 opacity-40 hover:opacity-80 transition-opacity duration-300 shrink-0 cursor-pointer"
            >
              {logo.svg}
              <span className="text-white text-sm font-medium whitespace-nowrap">{logo.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
