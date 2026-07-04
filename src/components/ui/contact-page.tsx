"use client"

import React from 'react'
import { cn } from '@/lib/utils'
import { Check, Copy, LucideIcon, Mail, MapPin, Phone } from 'lucide-react'
import { Button, ButtonProps } from '@/components/ui/button'
import { ClipPathLinks } from '@/components/ui/clip-path-links'
import { useLang } from '@/lib/i18n'

const APP_EMAIL = 'gin4a@ltdproduction.net'
const APP_PHONE = '+371 29175051'
const APP_PHONE_2 = '+371 24422559'

export function ContactPage() {
  const { t } = useLang()
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
      const res = await fetch(`https://formsubmit.co/ajax/${APP_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Vards: form.name,
          Kontakts: form.contact,
          Pakalpojums: form.service || "-",
          Zinojums: form.message || "-",
          _subject: "Jauns pieteikums no LTD Production mājas lapas",
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
    <div className="min-h-screen w-full text-white">
      <div className="mx-auto h-full max-w-6xl lg:border-x border-white/10">

        {/* Header */}
        <div className="fade-up flex grow flex-col justify-center px-4 md:px-6 pt-16 pb-10">
          <h1 className="text-4xl font-bold md:text-5xl">{k.h1}</h1>
          <p className="text-neutral-400 mb-8 text-base mt-2">{k.sub}</p>
        </div>

        <BorderSeparator />

        {/* Contact boxes */}
        <div className="grid md:grid-cols-2">
          <Box icon={Mail} title={k.email_title} description={k.email_desc}>
            <a href={`mailto:${APP_EMAIL}`} className="font-mono text-base font-medium tracking-wide hover:underline text-white">
              {APP_EMAIL}
            </a>
            <CopyButton className="size-6" test={APP_EMAIL} />
          </Box>

          <Box icon={Phone} title={k.phone_title} description={k.phone_desc} className="border-b-0 md:border-r-0 md:border-b-0">
            <div className="flex items-center gap-x-2">
              <a href={`tel:${APP_PHONE}`} className="block font-mono text-base font-medium tracking-wide hover:underline text-white">
                {APP_PHONE}
              </a>
              <CopyButton className="size-6" test={APP_PHONE} />
            </div>
          </Box>
        </div>

        <BorderSeparator />

        {/* Social + booking */}
        <div className="grid md:grid-cols-2">

          {/* Social links */}
          <div className="relative flex h-full min-h-[280px] items-center justify-center border-r border-white/10">
            <div className={cn('absolute inset-0 size-full', 'bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)]', 'bg-[size:32px_32px]', '[mask-image:radial-gradient(ellipse_at_center,black_30%,transparent)]')} />
            <div className="relative z-10 space-y-6 p-8 w-full max-w-sm">
              <h2 className="text-center text-2xl font-bold md:text-3xl">{k.social_title}</h2>
              <ClipPathLinks />
            </div>
          </div>

          {/* Booking form */}
          <div className="p-8 flex flex-col gap-5">
            <h2 className="text-2xl font-bold">{k.booking_title}</h2>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder={k.name_placeholder}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
              />
              <input
                type="text"
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
                placeholder={k.contact_placeholder}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
              />
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-neutral-300 text-sm focus:outline-none focus:border-white/30 transition-colors appearance-none"
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
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
              />
              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                className="w-full py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors disabled:opacity-60"
              >
                {status === "sending" ? k.send_sending : k.send_btn}
              </button>
              {status === "ok" && (
                <p className="text-emerald-400 text-sm text-center">{k.send_ok}</p>
              )}
              {status === "err" && (
                <p className="text-red-400 text-sm text-center">{k.send_err}</p>
              )}
              {status === "fill" && (
                <p className="text-yellow-400 text-sm text-center">{k.send_fill}</p>
              )}
            </div>
          </div>
        </div>

        {/* Map */}
        <BorderSeparator />
        <div className="relative w-full h-[400px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d641.4!2d25.27!3d57.3135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ead6b9e2e2e2e3%3A0x0!2sWash-Mate%2C%20R%C5%ABpniec%C4%ABbas%20iela%2C%20C%C4%93sis!5e0!3m2!1slv!2slv!4v1"
            width="100%"
            height="100%"
            style={{ filter: "grayscale(100%) invert(90%) contrast(85%)", border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="LTD Production location"
          />
          <div className="absolute bottom-4 left-4 bg-black/80 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
            <p className="text-white text-sm font-semibold">LTD Production</p>
            <p className="text-neutral-400 text-xs mt-0.5">Rūpniecības iela, Cēsis</p>
            <p className="text-neutral-500 text-xs">Cēsu novads</p>
          </div>
        </div>

      </div>
    </div>
  )
}

function BorderSeparator() {
  return <div className="relative w-full h-px border-b border-white/10 my-0" />
}

type ContactBox = React.ComponentProps<'div'> & { icon: LucideIcon; title: string; description: string }

function Box({ title, description, className, children, ...props }: ContactBox) {
  return (
    <div className={cn('flex flex-col justify-between border-b border-white/10 md:border-r md:border-b-0', className)}>
      <div className="bg-white/5 flex items-center gap-x-3 border-b border-white/10 p-4">
        <props.icon className="text-neutral-400 size-5" strokeWidth={1} />
        <h2 className="text-lg font-medium tracking-wider text-white">{title}</h2>
      </div>
      <div className="flex items-center gap-x-2 p-4 py-10">{children}</div>
      <div className="border-t border-white/10 p-4">
        <p className="text-neutral-500 text-sm">{description}</p>
      </div>
    </div>
  )
}

type CopyButtonProps = ButtonProps & { test: string }

function CopyButton({ className, variant = 'ghost', size = 'icon', test, ...props }: CopyButtonProps) {
  const [copied, setCopied] = React.useState<boolean>(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(test)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={cn('disabled:opacity-100 text-neutral-400 hover:text-white', className)}
      onClick={handleCopy}
      aria-label={copied ? 'Copied' : 'Copy to clipboard'}
      disabled={copied || props.disabled}
      {...props}
    >
      <div className={cn('transition-all', copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0')}>
        <Check className="size-3.5 stroke-emerald-500" aria-hidden="true" />
      </div>
      <div className={cn('absolute transition-all', copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100')}>
        <Copy aria-hidden="true" className="size-3.5" />
      </div>
    </Button>
  )
}
