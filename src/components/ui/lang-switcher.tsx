"use client"

import { useLang, Lang } from "@/lib/i18n"

export function LangSwitcher() {
  const { lang, setLang } = useLang()

  return (
    <div className="flex items-center gap-1 p-1 rounded-full border border-white/10 bg-white/5">
      <button
        onClick={() => setLang("lv")}
        title="Latviešu"
        className={`flex items-center justify-center w-8 h-8 rounded-full text-xl transition-all duration-200 ${
          lang === "lv" ? "bg-white/15 scale-110" : "opacity-50 hover:opacity-80"
        }`}
      >
        🇱🇻
      </button>
      <button
        onClick={() => setLang("en")}
        title="English"
        className={`flex items-center justify-center w-8 h-8 rounded-full text-xl transition-all duration-200 ${
          lang === "en" ? "bg-white/15 scale-110" : "opacity-50 hover:opacity-80"
        }`}
      >
        🇬🇧
      </button>
    </div>
  )
}
