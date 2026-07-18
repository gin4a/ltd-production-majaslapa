"use client"

import React from "react"
import Link from "next/link"
import { X, ArrowRight, Megaphone } from "lucide-react"
import { useLang } from "@/lib/i18n"

export function PromoBanner() {
  const { t } = useLang()
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    if (localStorage.getItem("ltd-banner-closed") !== "1") {
      setVisible(true)
    }
  }, [])

  const close = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setVisible(false)
    localStorage.setItem("ltd-banner-closed", "1")
  }

  if (!visible) return null

  return (
    <Link
      href="/piedavajums"
      className="banner-shimmer relative z-40 flex items-center justify-center gap-2 md:gap-3 px-10 py-2.5 bg-white text-black text-xs md:text-sm font-medium text-center hover:bg-neutral-100 transition-colors"
    >
      <Megaphone className="w-4 h-4 shrink-0 hidden sm:block" />
      <span className="truncate">{t.banner.text}</span>
      <span className="shrink-0 inline-flex items-center gap-1 font-bold underline underline-offset-2">
        {t.banner.cta} <ArrowRight className="w-3.5 h-3.5" />
      </span>
      <button
        onClick={close}
        aria-label="Close banner"
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-black/10 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </Link>
  )
}
