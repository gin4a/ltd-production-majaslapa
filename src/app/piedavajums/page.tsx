"use client"

import React from "react"
import Link from "next/link"
import { MeshBackground } from "@/components/ui/mesh-background"
import { LtdLogo } from "@/components/ui/ltd-logo"
import { LangSwitcher } from "@/components/ui/lang-switcher"
import { useLang } from "@/lib/i18n"
import { ArrowRight, Target, BarChart3, Unlock, Check } from "lucide-react"

const FORM_EMAIL = "gin4a@ltdproduction.net"
const benefitIcons = [Target, BarChart3, Unlock]

export default function Piedavajums() {
  const { t } = useLang()
  const l = t.landing
  const r = t.reklama
  const k = t.kontakti

  const [form, setForm] = React.useState({ name: "", contact: "", service: "", message: "" })
  const [status, setStatus] = React.useState<"idle" | "sending" | "ok" | "err" | "fill">("idle")

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.contact.trim()) {
      setStatus("fill")
      return
    }
    setStatus("sending")
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORM_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Vards: form.name,
          Kontakts: form.contact,
          Pakalpojums: form.service || "-",
          Zinojums: form.message || "-",
          _subject: "Pieteikums no reklāmas landing page",
          _template: "table",
        }),
      })
      if (res.ok) {
        setStatus("ok")
        setForm({ name: "", contact: "", service: "", message: "" })
      } else {
        setStatus("err")
      }
    } catch {
      setStatus("err")
    }
  }

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-black">
      <MeshBackground />

      <div className="relative z-10 w-full min-h-screen flex flex-col">

        {/* Minimal header — logo + language only, no nav (landing page focus) */}
        <header className="flex items-center justify-between px-4 py-4 md:px-16">
          <Link href="/" className="logo-in"><LtdLogo size="sm" /></Link>
          <LangSwitcher />
        </header>

        {/* Hero */}
        <section className="flex flex-col items-center text-center px-6 pt-10 md:pt-20 pb-14 max-w-4xl mx-auto">
          <p className="fade-up text-neutral-500 text-[11px] md:text-xs tracking-[0.3em] uppercase mb-5" style={{ animationDelay: "0.1s" }}>
            {l.badge}
          </p>
          <h1 className="fade-up text-3xl md:text-6xl font-bold text-white leading-tight mb-5" style={{ animationDelay: "0.25s" }}>
            {l.headline1}<br />
            <span className="text-neutral-400">{l.headline2}</span>
          </h1>
          <p className="fade-up text-neutral-400 text-base md:text-lg max-w-2xl mb-8" style={{ animationDelay: "0.4s" }}>
            {l.sub}
          </p>
          <div className="fade-up flex flex-col items-center gap-3" style={{ animationDelay: "0.55s" }}>
            <a
              href="#forma"
              className="cta-pulse inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-sm md:text-base font-semibold hover:bg-neutral-200 hover:scale-[1.03] transition-all"
            >
              {l.cta} <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-neutral-600 text-xs">{l.guarantee}</p>
          </div>
        </section>

        {/* Services — both offerings */}
        <section className="px-6 md:px-16 pb-14 max-w-5xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-5">
            {l.services.map((s, i) => (
              <div
                key={s.name}
                className="fade-up flex flex-col bg-white/5 border border-white/15 rounded-3xl p-7 md:p-8 hover:border-white/35 hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${0.15 + i * 0.15}s` }}
              >
                <div className="flex items-baseline justify-between gap-3 mb-3">
                  <h2 className="text-white font-bold text-xl md:text-2xl">{s.name}</h2>
                  <span className="text-neutral-300 text-sm font-semibold whitespace-nowrap border border-white/15 rounded-full px-3 py-1">{s.price}</span>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="flex flex-col gap-2.5 mb-7 flex-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-300">
                      <Check className="w-4 h-4 shrink-0 mt-0.5 text-white" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#forma"
                  onClick={() => setForm((prev) => ({ ...prev, service: k.services[i] }))}
                  className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-colors"
                >
                  {s.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="px-6 md:px-16 pb-14 max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {l.stats.map((res, i) => (
              <div key={res.label} className="fade-up bg-white/5 border border-white/10 rounded-2xl p-5 text-center" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                <p className="text-2xl md:text-3xl font-bold text-white mb-1.5">{res.metric}</p>
                <p className="text-neutral-500 text-[11px] leading-snug">{res.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="px-6 md:px-16 pb-14 max-w-5xl mx-auto w-full">
          <div className="grid md:grid-cols-3 gap-4">
            {l.benefits.map((b, i) => {
              const Icon = benefitIcons[i]
              return (
                <div key={b.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/25 transition-colors">
                  <Icon className="w-6 h-6 text-white mb-4" strokeWidth={1.5} />
                  <h3 className="text-white font-semibold mb-2">{b.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{b.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Process */}
        <section className="px-6 md:px-16 pb-14 max-w-5xl mx-auto w-full">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">{r.processTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {r.process.map((s) => (
              <div key={s.step} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-neutral-600 text-xs font-mono mb-2">{s.step}</p>
                <h3 className="text-white font-semibold text-sm mb-1.5">{s.title}</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Form */}
        <section id="forma" className="px-6 md:px-16 pb-16 max-w-xl mx-auto w-full scroll-mt-8">
          <div className="bg-white/5 border border-white/15 rounded-3xl p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">{l.formTitle}</h2>
            <p className="text-neutral-400 text-sm text-center mb-7">{l.formSub}</p>

            <div className="flex flex-col gap-4">
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder={k.name_placeholder}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
              />
              <input
                type="text"
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
                placeholder={k.contact_placeholder}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
              />
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-neutral-300 text-sm focus:outline-none focus:border-white/30 transition-colors appearance-none"
              >
                <option value="" className="bg-neutral-900">{k.service_placeholder}</option>
                {k.services.map((s) => (
                  <option key={s} value={s} className="bg-neutral-900">{s}</option>
                ))}
              </select>
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={k.message_placeholder}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
              />
              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                className="w-full py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors disabled:opacity-60 inline-flex items-center justify-center gap-2"
              >
                {status === "sending" ? k.send_sending : k.send_btn} <ArrowRight className="w-4 h-4" />
              </button>
              {status === "ok" && (
                <p className="text-emerald-400 text-sm text-center inline-flex items-center justify-center gap-1.5">
                  <Check className="w-4 h-4" /> {k.send_ok}
                </p>
              )}
              {status === "err" && <p className="text-red-400 text-sm text-center">{k.send_err}</p>}
              {status === "fill" && <p className="text-yellow-400 text-sm text-center">{k.send_fill}</p>}
            </div>
          </div>
        </section>

        {/* Mini footer */}
        <footer className="mt-auto px-6 py-6 border-t border-neutral-900 text-center">
          <span className="text-neutral-600 text-xs tracking-widest uppercase">{l.footerNote}</span>
        </footer>
      </div>
    </main>
  )
}
