"use client"

import { PageLayout } from "@/components/ui/page-layout"
import { useLang } from "@/lib/i18n"
import { Check, TrendingUp, Target, BarChart3, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Reklama() {
  const { t } = useLang()
  const r = t.reklama
  const whyIcons = [Target, TrendingUp, BarChart3]
  const channels = ["Instagram", "Facebook", "Google Ads", "TikTok", "YouTube", "E-mail"]

  return (
    <PageLayout>
      <section className="px-8 md:px-16 py-20 max-w-6xl mx-auto">

        {/* Hero */}
        <div className="fade-up text-center mb-20">
          <p className="text-neutral-500 text-sm tracking-[0.3em] uppercase mb-4">{r.badge}</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {r.h1a} <br /><span className="text-neutral-400">{r.h1b}</span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-8">{r.sub}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {channels.map((ch) => (
              <span key={ch} className="px-4 py-1.5 rounded-full border border-white/10 text-neutral-400 text-xs tracking-wider">{ch}</span>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {r.results.map((res) => (
            <div key={res.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-white mb-2">{res.metric}</p>
              <p className="text-neutral-500 text-xs leading-relaxed">{res.label}</p>
            </div>
          ))}
        </div>

        {/* Why us */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {r.whyUs.map((f, i) => {
            const Icon = whyIcons[i]
            return (
              <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
                <Icon className="w-6 h-6 text-white mb-4" strokeWidth={1.5} />
                <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Pricing */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{r.pricingTitle}</h2>
          <p className="text-neutral-500 text-sm">{r.pricingSub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {r.plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col gap-6 border transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? "bg-white text-black border-white"
                  : "bg-white/5 text-white border-white/10 hover:border-white/30"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-4 py-1 rounded-full border border-white/20 tracking-widest uppercase">
                  {plan.badge}
                </span>
              )}
              <div>
                <p className={`text-xs font-medium tracking-widest uppercase mb-3 ${plan.highlighted ? "text-neutral-500" : "text-neutral-500"}`}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-5xl font-bold">€{plan.price}</span>
                  <span className={`text-sm mb-2 ${plan.highlighted ? "text-neutral-500" : "text-neutral-400"}`}>{plan.period}</span>
                </div>
                <p className={`text-sm leading-relaxed ${plan.highlighted ? "text-neutral-600" : "text-neutral-400"}`}>
                  {plan.description}
                </p>
              </div>
              <ul className="flex flex-col gap-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlighted ? "text-black" : "text-white"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakti"
                className={`w-full py-3 rounded-full text-sm font-semibold transition-colors text-center flex items-center justify-center gap-2 ${
                  plan.highlighted
                    ? "bg-black text-white hover:bg-neutral-800"
                    : "bg-white text-black hover:bg-neutral-200"
                }`}
              >
                {r.start} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">{r.processTitle}</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {r.process.map((s) => (
              <div key={s.step} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-neutral-600 text-xs font-mono mb-3">{s.step}</p>
                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                <p className="text-neutral-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border border-white/10 rounded-2xl p-12 bg-white/5">
          <h2 className="text-3xl font-bold text-white mb-4">{r.ctaTitle}</h2>
          <p className="text-neutral-400 mb-8 max-w-md mx-auto">{r.ctaSub}</p>
          <Link
            href="/kontakti"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-colors"
          >
            {r.ctaBtn} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </section>
    </PageLayout>
  )
}
