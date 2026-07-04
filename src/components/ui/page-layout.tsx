"use client"

import { MeshBackground } from "@/components/ui/mesh-background"
import { LtdLogo } from "@/components/ui/ltd-logo"
import { FloatingDock } from "@/components/ui/floating-dock"
import { LangSwitcher } from "@/components/ui/lang-switcher"
import { useLang } from "@/lib/i18n"
import {
  IconHome,
  IconWorldWww,
  IconLayoutGrid,
  IconSpeakerphone,
  IconAddressBook,
} from "@tabler/icons-react"

export function PageLayout({ children }: { children: React.ReactNode }) {
  const { t } = useLang()

  const NAV_LINKS = [
    { title: t.nav.home, icon: <IconHome className="h-full w-full text-neutral-300" />, href: "/" },
    { title: t.nav.website, icon: <IconWorldWww className="h-full w-full text-neutral-300" />, href: "/website" },
    { title: t.nav.projekti, icon: <IconLayoutGrid className="h-full w-full text-neutral-300" />, href: "/projekti" },
    { title: t.nav.reklama, icon: <IconSpeakerphone className="h-full w-full text-neutral-300" />, href: "/reklama" },
    { title: t.nav.kontakti, icon: <IconAddressBook className="h-full w-full text-neutral-300" />, href: "/kontakti" },
  ]

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-black">
      <MeshBackground />

      <div className="relative z-10 w-full min-h-screen flex flex-col pb-16 md:pb-0">
        {/* Nav */}
        <nav className="relative z-30 flex items-center justify-between px-4 py-4 md:px-16">
          <a href="/"><LtdLogo size="sm" /></a>
          <div className="absolute inset-x-0 top-2 z-30 flex justify-center pointer-events-none">
            <FloatingDock items={NAV_LINKS} desktopClassName="pointer-events-auto" />
          </div>
          <LangSwitcher />
        </nav>

        {/* Page content */}
        <div className="flex-1">
          {children}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-8 md:px-16 py-6 border-t border-neutral-900">
          <span className="text-neutral-600 text-xs tracking-widest uppercase">{t.footer.copy}</span>
          <span className="text-neutral-600 text-xs">{t.footer.location}</span>
        </div>
      </div>
    </main>
  )
}
