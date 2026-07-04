"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { IntroScreen } from "@/components/ui/intro-screen"
import { MeshBackground } from "@/components/ui/mesh-background"
import { SplineScene } from "@/components/ui/splite"
import { LtdLogo } from "@/components/ui/ltd-logo"
import { FloatingDock } from "@/components/ui/floating-dock"
import { LangSwitcher } from "@/components/ui/lang-switcher"
import { LogoCloud } from "@/components/ui/logo-cloud"
import { useLang } from "@/lib/i18n"
import {
  IconHome,
  IconWorldWww,
  IconLayoutGrid,
  IconSpeakerphone,
  IconAddressBook,
} from "@tabler/icons-react"

export function HomeClient() {
  const [introVisible, setIntroVisible] = useState(true)
  const [mainVisible, setMainVisible] = useState(false)
  const { t } = useLang()

  const NAV_LINKS = [
    { title: t.nav.home, icon: <IconHome className="h-full w-full text-neutral-300" />, href: "/" },
    { title: t.nav.website, icon: <IconWorldWww className="h-full w-full text-neutral-300" />, href: "/website" },
    { title: t.nav.projekti, icon: <IconLayoutGrid className="h-full w-full text-neutral-300" />, href: "/projekti" },
    { title: t.nav.reklama, icon: <IconSpeakerphone className="h-full w-full text-neutral-300" />, href: "/reklama" },
    { title: t.nav.kontakti, icon: <IconAddressBook className="h-full w-full text-neutral-300" />, href: "/kontakti" },
  ]

  const handleIntroComplete = useCallback(() => {
    setIntroVisible(false)
    setTimeout(() => setMainVisible(true), 50)
  }, [])

  return (
    <>
      {introVisible && <IntroScreen onComplete={handleIntroComplete} />}

      <main
        className="relative w-full min-h-screen overflow-hidden bg-black"
        style={{ opacity: mainVisible ? 1 : 0, transition: "opacity 0.8s ease-out" }}
      >
        <MeshBackground />

        <div className="relative z-10 w-full min-h-screen flex flex-col">

          {/* Top nav */}
          <nav className="flex items-center justify-between px-4 py-4 md:px-16">
            <LtdLogo size="sm" />
            <div className="absolute left-1/2 -translate-x-1/2 z-30">
              <FloatingDock items={NAV_LINKS} />
            </div>
            <LangSwitcher />
          </nav>

          {/* Hero — text + robot anchored to bottom */}
          <div className="relative flex flex-1 items-end justify-center overflow-visible">

            {/* Hero text */}
            <div className="absolute top-6 md:top-14 left-1/2 -translate-x-1/2 z-20 w-full max-w-3xl px-6 text-center pointer-events-none">
              <h1 className="fade-up text-3xl md:text-6xl font-bold text-white leading-tight mb-4" style={{ animationDelay: "0.15s" }}>
                {t.home.heroTitle}
              </h1>
              <p className="fade-up text-neutral-400 text-sm md:text-lg max-w-xl mx-auto mb-7" style={{ animationDelay: "0.4s" }}>
                {t.home.heroSub}
              </p>
              <div className="fade-up flex flex-wrap gap-3 justify-center pointer-events-auto" style={{ animationDelay: "0.55s" }}>
                <Link
                  href="/kontakti"
                  className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-neutral-200 hover:scale-[1.03] transition-all"
                >
                  {t.home.ctaPrimary} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/projekti"
                  className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/10 hover:border-white/40 transition-all"
                >
                  {t.home.ctaSecondary}
                </Link>
              </div>
            </div>

            {/* Robot — mix-blend-screen makes the canvas black bg transparent so waves show through */}
            <div className="relative w-full max-w-3xl h-[560px] md:h-[820px] mix-blend-screen">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
              {/* Hide Spline watermark (black = invisible under screen blend) */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-black" />
            </div>
          </div>

          {/* Logo cloud */}
          <LogoCloud className="px-8 md:px-0" />

          {/* Footer */}
          <div className="flex items-center justify-between px-8 md:px-16 py-6 border-t border-neutral-900">
            <span className="text-neutral-600 text-xs tracking-widest uppercase">{t.footer.copy}</span>
            <span className="text-neutral-600 text-xs">{t.footer.location}</span>
          </div>
        </div>
      </main>
    </>
  )
}
