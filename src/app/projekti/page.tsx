"use client"

import { PageLayout } from "@/components/ui/page-layout"
import { useLang } from "@/lib/i18n"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Projekti() {
  const { t } = useLang()
  const p = t.projekti

  return (
    <PageLayout>
      <section className="px-8 md:px-16 py-20 max-w-6xl mx-auto">

        {/* Header */}
        <div className="fade-up mb-16">
          <p className="text-neutral-500 text-sm tracking-[0.3em] uppercase mb-4">{p.badge}</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{p.h1}</h1>
          <p className="text-neutral-400 text-lg max-w-xl">{p.sub}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {p.stats.map((s) => (
            <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-white mb-1">{s.value}</p>
              <p className="text-neutral-500 text-xs">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-3 mb-10">
          {p.categories.map((c, i) => (
            <span
              key={c}
              className={`px-4 py-1.5 rounded-full text-xs border transition-colors cursor-default ${
                i === 0
                  ? "border-white/40 text-white bg-white/10"
                  : "border-white/10 text-neutral-500 hover:border-white/20"
              }`}
            >
              {c}
            </span>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {p.items.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.href !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-1 bg-white/5 block"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 saturate-0 group-hover:saturate-50"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                <span className="absolute top-4 left-4 text-xs border border-white/20 bg-black/60 text-neutral-300 px-3 py-1 rounded-full backdrop-blur-sm">
                  {item.category}
                </span>
                <span className="absolute top-4 right-4 text-xs text-neutral-500">{item.year}</span>
              </div>
              <div className="p-5 flex flex-col gap-3">
                <h2 className="text-white font-semibold text-lg leading-snug">{item.title}</h2>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[10px] text-neutral-600 border border-white/5 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center border border-white/10 rounded-2xl p-12 bg-white/5">
          <h2 className="text-3xl font-bold text-white mb-4">{p.ctaTitle}</h2>
          <p className="text-neutral-400 mb-8 max-w-md mx-auto">{p.ctaSub}</p>
          <Link
            href="/kontakti"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-colors"
          >
            {p.ctaBtn} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </section>
    </PageLayout>
  )
}
