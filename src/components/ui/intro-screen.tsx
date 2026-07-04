"use client"

import { useEffect, useState } from "react"
import { LtdLogo } from "@/components/ui/ltd-logo"

interface IntroScreenProps {
  onComplete: () => void
}

export function IntroScreen({ onComplete }: IntroScreenProps) {
  const [phase, setPhase] = useState<"enter" | "show" | "exit">("enter")

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("show"), 50)
    const t2 = setTimeout(() => setPhase("exit"), 1400)
    const t3 = setTimeout(() => onComplete(), 2000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [onComplete])

  return (
    <div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
      style={{
        opacity: phase === "exit" ? 0 : 1,
        transition: phase === "enter"
          ? "opacity 0.4s ease-out"
          : phase === "exit"
          ? "opacity 0.6s ease-in"
          : "none",
      }}
    >
      <div className="absolute inset-0 mesh-bg" />

      <div
        className="relative z-10 flex flex-col items-center gap-4 select-none"
        style={{
          opacity: phase === "show" ? 1 : 0,
          transform: phase === "show" ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
        }}
      >
        <LtdLogo size="lg" />

        <div className="w-32 h-px bg-neutral-800 overflow-hidden rounded-full">
          <div
            className="h-full bg-white/50 rounded-full"
            style={{
              width: phase === "show" ? "100%" : "0%",
              transition: phase === "show" ? "width 1.2s linear" : "none",
            }}
          />
        </div>
      </div>
    </div>
  )
}
